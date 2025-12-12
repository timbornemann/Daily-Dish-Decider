import React, { useState, useEffect, useRef } from 'react';
import { X, ChevronLeft, ChevronRight, Play, Pause, RotateCcw, Check, Clock, Volume2, VolumeX, Maximize2, Minimize2, Plus, Minus, ChevronDown } from 'lucide-react';
import { Recipe, RecipeStep } from '../types';
import { translations, Language } from '../translations'; // Assuming we'll add translations later or use hardcoded/prop
import { motion, AnimatePresence } from 'framer-motion';

import { extractDurationFromText } from '../utils/textUtils';
import { getInstructionImage } from '../utils/instructionImages';

// --- Types ---

interface CookingModeProps {
    recipe: Recipe;
    initialStepIndex?: number;
    onClose: () => void;
    onFinish: () => void;
    onStepChange?: (index: number) => void; // For persistence
    lang: Language;
}

interface TimerState {
    id: string;
    label: string;
    duration: number; // seconds
    remaining: number; // seconds
    status: 'running' | 'paused' | 'finished';
}

// --- Component ---

export const CookingMode: React.FC<CookingModeProps> = ({ recipe, initialStepIndex = 0, onClose, onFinish, onStepChange, lang }) => {
    const [currentStepIndex, setCurrentStepIndex] = useState(initialStepIndex);
    const [timers, setTimers] = useState<TimerState[]>([]);
    const [isMuted, setIsMuted] = useState(false);
    const [showTimerModal, setShowTimerModal] = useState(false); // For custom timer creation
    const [customTimerMinutes, setCustomTimerMinutes] = useState(5);

    const t = translations[lang];

    const steps = recipe.steps;
    const currentStep = steps[currentStepIndex];
    const totalSteps = steps.length;

    // --- Audio ---
    const audioRef = useRef<HTMLAudioElement | null>(null);

    useEffect(() => {
        audioRef.current = new Audio('https://assets.mixkit.co/sfx/preview/mixkit-alarm-digital-clock-beep-989.mp3'); // Example free sound
    }, []);

    const playAlarm = () => {
        if (!isMuted && audioRef.current) {
            audioRef.current.loop = true;
            audioRef.current.play().catch(e => console.log("Audio play failed", e));
        }
    };

    const stopAlarm = () => {
        if (audioRef.current) {
            audioRef.current.pause();
            audioRef.current.currentTime = 0;
        }
    };

    // --- Timer Logic ---
    const contentRef = useRef<HTMLDivElement>(null);
    const [showScrollArrow, setShowScrollArrow] = useState(false);

    // Reset scroll on step change
    useEffect(() => {
        if (contentRef.current) {
            contentRef.current.scrollTop = 0;
            // Check if we need to show the arrow initially
            setShowScrollArrow(contentRef.current.scrollHeight > contentRef.current.clientHeight);
        }
    }, [currentStepIndex]);

    useEffect(() => {
        const interval = setInterval(() => {
            setTimers(prevTimers => prevTimers.map(timer => {
                if (timer.status !== 'running') return timer;
                
                const nextRemaining = timer.remaining - 1;
                if (nextRemaining <= 0) {
                    playAlarm();
                    return { ...timer, remaining: 0, status: 'finished' };
                }
                return { ...timer, remaining: nextRemaining };
            }));
        }, 1000);

        return () => clearInterval(interval);
    }, [isMuted]); // Depend on mute to ensure consistent audio ref access if needed, but ref implies independent

    const addTimer = (label: string, minutes: number) => {
        const newTimer: TimerState = {
            id: Date.now().toString(),
            label,
            duration: minutes * 60,
            remaining: minutes * 60,
            status: 'running', // Auto-start
        };
        setTimers(prev => [...prev, newTimer]);
        setShowTimerModal(false);
    };

    const toggleTimer = (id: string) => {
        setTimers(prev => prev.map(t => {
            if (t.id !== id) return t;
            if (t.status === 'finished') {
                stopAlarm();
                return { ...t, status: 'paused' }; // Or remove?
            }
            return { ...t, status: t.status === 'running' ? 'paused' : 'running' };
        }));
    };

    const resetTimer = (id: string) => {
        setTimers(prev => prev.map(t => {
            if (t.id !== id) return t;
            stopAlarm();
            return { ...t, remaining: t.duration, status: 'paused' };
        }));
    };

    const removeTimer = (id: string) => {
        const timer = timers.find(t => t.id === id);
        if (timer?.status === 'finished') stopAlarm();
        setTimers(prev => prev.filter(t => t.id !== id));
    };

    // Format seconds into MM:SS
    const formatTime = (seconds: number) => {
        const m = Math.floor(seconds / 60);
        const s = seconds % 60;
        return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
    };

    // --- Navigation ---

    const goToNext = () => {
        if (currentStepIndex < totalSteps - 1) {
            const next = currentStepIndex + 1;
            setCurrentStepIndex(next);
            onStepChange?.(next);
        } else {
             // Finish?
             onFinish();
        }
    };

    const goToPrev = () => {
        if (currentStepIndex > 0) {
            const prev = currentStepIndex - 1;
            setCurrentStepIndex(prev);
            onStepChange?.(prev);
        }
    };



// ... (previous code)

    // Helper to get text/duration
    const getStepDetails = (step: RecipeStep) => {
        if (typeof step === 'string') {
            const autoDuration = extractDurationFromText(step);
            return { text: step, duration: autoDuration || 0 };
        }
        return { text: step.text, duration: step.durationMinutes || extractDurationFromText(step.text) || 0 };
    };

    const stepDetails = getStepDetails(currentStep);

    // --- Render ---

    return (
        <div className="fixed inset-0 z-50 bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100 flex flex-col">
            {/* Header */}
            <div className="p-4 flex items-center justify-between border-b border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-950 relative z-10">
                <button onClick={onClose} className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
                    <X size={24} />
                </button>
                <div className="flex-1 text-center mx-4">
                    <h2 className="text-lg font-bold truncate">{recipe.title}</h2>
                    <div className="text-xs text-brand-500 font-medium tracking-wider uppercase">
                        {(t as any).step_count.replace('{{current}}', (currentStepIndex + 1).toString()).replace('{{total}}', totalSteps.toString())}
                    </div>
                </div>
                <button onClick={() => setIsMuted(!isMuted)} className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
                    {isMuted ? <VolumeX size={24} /> : <Volume2 size={24} />}
                </button>
            </div>

            {/* Progress Bar */}
            <div className="h-1.5 bg-gray-100 dark:bg-gray-800 w-full">
                <motion.div 
                    className="h-full bg-brand-500"
                    initial={{ width: 0 }}
                    animate={{ width: `${((currentStepIndex + 1) / totalSteps) * 100}%` }}
                    transition={{ duration: 0.3 }}
                />
            </div>

            {/* Main Content */}
            <div 
                ref={contentRef as any}
                className="flex-1 overflow-y-auto p-6 md:p-12 flex flex-col items-center justify-start md:justify-center relative scroll-smooth"
                onScroll={(e) => {
                    const target = e.currentTarget;
                    if (target.scrollTop > 20) {
                        setShowScrollArrow(false);
                    } else if (target.scrollHeight > target.clientHeight) {
                         setShowScrollArrow(true);
                    }
                }}
            >
                
                {/* Scroll Indicator Arrow (Mobile Only - visible loop) */}
                <AnimatePresence>
                    {showScrollArrow && (
                        <motion.div 
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="md:hidden absolute bottom-4 left-0 right-0 flex justify-center pointer-events-none z-20"
                        >
                            <div className="animate-bounce bg-black/20 dark:bg-white/10 p-2 rounded-full backdrop-blur-sm">
                                <ChevronDown className="text-gray-900 dark:text-white opacity-70" size={24} />
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>


                <AnimatePresence mode='wait'>


                    <motion.div
                        key={currentStepIndex}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        transition={{ duration: 0.2 }}
                        className="w-full max-w-6xl flex flex-col md:flex-row gap-8 md:gap-16 items-start justify-center pt-8 md:pt-0" 
                    >
                         {/* LEFT COLUMN: Image & Step Number (Desktop) */}
                         {(() => {
                            const imgSrc = getInstructionImage(stepDetails.text);
                            
                            return (
                                <>
                                    {/* Image Column */}
                                    {imgSrc ? (
                                        <div className="w-full md:w-1/3 flex flex-col gap-4 relative shrink-0">
                                             {/* Big Step Number (Desktop) */}
                                             <div className="hidden md:block text-8xl font-black text-gray-100 dark:text-gray-800 absolute -top-12 -left-8 select-none -z-10 opacity-50">
                                                {currentStepIndex + 1}
                                            </div>

                                            {/* Image Container - Masked Fade (True Vignette) */}
                                            <div className="w-full aspect-[4/3] md:aspect-[3/4] lg:aspect-square rounded-[2.5rem] overflow-hidden relative group shadow-2xl ring-1 ring-black/5 dark:ring-white/10">
                                                {/* Dark background for chalk style */}
                                                <div className="absolute inset-0 bg-[#1a1a1a]" />
                                                
                                                <img 
                                                    src={imgSrc} 
                                                    alt="Instruction" 
                                                    className="w-full h-full object-contain p-2 opacity-90" 
                                                    style={{
                                                        maskImage: 'radial-gradient(circle closest-side at center, black 30%, transparent 100%)',
                                                        WebkitMaskImage: 'radial-gradient(circle closest-side at center, black 30%, transparent 100%)'
                                                    }}
                                                />
                                                
                                                {/* Optional: Subtle grain or noise could go here */}
                                            </div>
                                        </div>
                                    ) : (
                                        <div className="hidden md:flex w-1/3 justify-end pr-8">
                                             <div className="text-9xl font-black text-gray-100 dark:text-gray-800 select-none opacity-50">
                                                {currentStepIndex + 1}
                                            </div>
                                        </div>
                                    )}

                                    {/* Right Column: Text & Content */}
                                    <div className={`w-full ${imgSrc ? 'md:w-2/3' : 'md:w-2/3 md:mx-auto'} flex flex-col gap-6 Pb-8`}>
                                        
                                        {/* Mobile Step Number */}
                                        <div className="md:hidden flex items-center gap-4 mb-2">
                                            <span className="text-5xl font-black text-brand-500/20 dark:text-brand-400/20">
                                                {(currentStepIndex + 1).toString().padStart(2, '0')}
                                            </span>
                                            <div className="h-px bg-gray-100 dark:bg-gray-800 flex-1" />
                                        </div>

                                        <div className="text-xl md:text-3xl font-medium leading-relaxed text-gray-800 dark:text-gray-100">
                                            {stepDetails.text}
                                        </div>

                                        {/* Step Timer Check */}
                                        {stepDetails.duration > 0 && (
                                            <div className="mt-4 p-6 bg-brand-50 dark:bg-brand-900/10 rounded-3xl border border-brand-100 dark:border-brand-900/30 flex items-center justify-between max-w-md shadow-sm">
                                                <div className="flex items-center gap-4">
                                                    <div className="p-3 bg-white dark:bg-brand-900/20 rounded-full text-brand-500">
                                                        <Clock size={24} />
                                                    </div>
                                                    <div>
                                                        <div className="font-bold text-gray-900 dark:text-gray-100">{(t as any).recommended_timer}</div>
                                                        <div className="text-sm text-gray-500 dark:text-gray-400 font-medium">
                                                            {stepDetails.duration} {(t as any).timer_min}
                                                        </div>
                                                        {/* Mobile Scroll Hint: If this renders, user might need to scroll. 
                                                            We can add a tiny text '▼ Scroll down' if we really want to be explicit, 
                                                            but the layout usually shows partial content. 
                                                        */}
                                                    </div>
                                                </div>
                                                <button
                                                    onClick={() => addTimer(`Step ${currentStepIndex + 1}`, stepDetails.duration)}
                                                    className="bg-brand-500 text-white px-5 py-3 rounded-xl font-bold hover:bg-brand-600 transition-colors shadow-lg shadow-brand-500/20"
                                                >
                                                    {(t as any).timer_start}
                                                </button>
                                            </div>
                                        )}
                                        
                                        {/* Spacer for bottom scrolling */}
                                        <div className="h-24 md:h-0" />
                                    </div>
                                </>
                            );
                        })()}
                    </motion.div>
                </AnimatePresence>
            </div>

            {/* Timers Area (Floating above footer) */}
            <div className="absolute bottom-36 md:bottom-32 left-4 right-4 flex flex-col gap-2 pointer-events-none z-50">
                 <div className="flex flex-col-reverse gap-2 pointer-events-auto">
                    {timers.map(timer => (
                        <motion.div
                            key={timer.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            className={`p-4 rounded-2xl shadow-xl border flex items-center justify-between max-w-sm ml-auto w-full md:w-auto
                                ${timer.status === 'finished' ? 'bg-red-500 text-white border-red-600' : 'bg-white/95 dark:bg-gray-800/95 backdrop-blur border-gray-100 dark:border-gray-700'}
                            `}
                        >
                            <div className="flex items-center gap-3">
                                <button onClick={() => removeTimer(timer.id)} className="opacity-60 hover:opacity-100 p-1 hover:bg-black/5 rounded-full">
                                    <X size={16} />
                                </button>
                                <div className="flex flex-col">
                                    <span className="text-xs font-bold uppercase tracking-wide opacity-70">{timer.label}</span>
                                    <span className="text-2xl font-mono font-bold tracking-tight">{formatTime(timer.remaining)}</span>
                                </div>
                            </div>
                            <div className="flex items-center gap-2">
                                {timer.status !== 'finished' && (
                                    <button onClick={() => toggleTimer(timer.id)} className="p-3 rounded-xl bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors">
                                        {timer.status === 'running' ? <Pause size={20} /> : <Play size={20} />}
                                    </button>
                                )}
                                <button onClick={() => resetTimer(timer.id)} className="p-3 rounded-xl bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors">
                                    <RotateCcw size={20} />
                                </button>
                            </div>
                        </motion.div>
                    ))}
                 </div>
            </div>

            {/* Footer with Controls */}
            <div className="p-6 pb-8 bg-white dark:bg-gray-950 border-t border-gray-100 dark:border-gray-800 flex items-center justify-between relative z-10">
                <button
                    onClick={goToPrev}
                    disabled={currentStepIndex === 0}
                    className="p-4 rounded-2xl bg-gray-100 dark:bg-gray-800 disabled:opacity-30 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                >
                    <ChevronLeft size={24} />
                </button>

                <button
                    onClick={() => setShowTimerModal(true)}
                    className="flex flex-col items-center gap-1 text-xs font-medium text-gray-400 hover:text-brand-500 transition-colors"
                >
                    <div className="p-3 bg-brand-50 dark:bg-brand-900/10 rounded-full text-brand-500 border border-brand-100 dark:border-brand-900/30">
                        <Clock size={24} />
                    </div>
                    <span>{(t as any).add_timer}</span>
                </button>

                {currentStepIndex < totalSteps - 1 ? (
                    <button
                        onClick={goToNext}
                        className="px-8 py-4 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-2xl font-bold flex items-center gap-2 hover:opacity-90 transition-opacity shadow-lg"
                    >
                        {(t as any).next_step} <ChevronRight size={20} />
                    </button>
                ) : (
                    <button
                        onClick={onFinish}
                        className="px-8 py-4 bg-brand-500 text-white rounded-2xl font-bold flex items-center gap-2 hover:bg-brand-600 transition-colors shadow-lg shadow-brand-500/20"
                    >
                        {(t as any).finish_cooking} <Check size={20} />
                    </button>
                )}
            </div>

            {/* Custom Timer Modal */}
            <AnimatePresence>
                {showTimerModal && (
                    <div className="fixed inset-0 bg-black/50 z-[60] flex items-center justify-center p-4">
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            className="bg-white dark:bg-gray-900 p-6 rounded-2xl w-full max-w-sm shadow-xl"
                        >
                            <h3 className="text-lg font-bold mb-4">{(t as any).set_custom_timer}</h3>
                            <div className="flex items-center justify-center gap-4 mb-6">
                                <button onClick={() => setCustomTimerMinutes(Math.max(1, customTimerMinutes - 1))} className="p-3 rounded-xl bg-gray-100 dark:bg-gray-800"><Minus size={20} /></button>
                                <span className="text-3xl font-bold w-12 text-center">{customTimerMinutes}</span>
                                <button onClick={() => setCustomTimerMinutes(customTimerMinutes + 1)} className="p-3 rounded-xl bg-gray-100 dark:bg-gray-800"><Plus size={20} /></button>
                                <span className="text-sm text-gray-500">{(t as any).timer_min}</span>
                            </div>
                            <div className="flex gap-2">
                                <button onClick={() => setShowTimerModal(false)} className="flex-1 py-3 text-gray-500 font-medium">{(t as any).timer_cancel}</button>
                                <button
                                    onClick={() => addTimer('Timer', customTimerMinutes)}
                                    className="flex-1 py-3 bg-brand-500 text-white rounded-xl font-bold hover:bg-brand-600"
                                >
                                    {(t as any).timer_start}
                                </button>
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </div>
    );
};
