import React, { useState, useEffect, useRef } from 'react';
import { X, ChevronLeft, ChevronRight, Play, Pause, RotateCcw, Check, Clock, Volume2, VolumeX, Maximize2, Minimize2, Plus, Minus } from 'lucide-react';
import { Recipe, RecipeStep } from '../types';
import { translations, Language } from '../translations'; // Assuming we'll add translations later or use hardcoded/prop
import { motion, AnimatePresence } from 'framer-motion';

// --- Types ---

interface CookingModeProps {
    recipe: Recipe;
    initialStepIndex?: number;
    onClose: () => void;
    onStepChange?: (index: number) => void; // For persistence
}

interface TimerState {
    id: string;
    label: string;
    duration: number; // seconds
    remaining: number; // seconds
    status: 'running' | 'paused' | 'finished';
}

// --- Component ---

export const CookingMode: React.FC<CookingModeProps> = ({ recipe, initialStepIndex = 0, onClose, onStepChange }) => {
    const [currentStepIndex, setCurrentStepIndex] = useState(initialStepIndex);
    const [timers, setTimers] = useState<TimerState[]>([]);
    const [isMuted, setIsMuted] = useState(false);
    const [showTimerModal, setShowTimerModal] = useState(false); // For custom timer creation
    const [customTimerMinutes, setCustomTimerMinutes] = useState(5);

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
             onClose();
        }
    };

    const goToPrev = () => {
        if (currentStepIndex > 0) {
            const prev = currentStepIndex - 1;
            setCurrentStepIndex(prev);
            onStepChange?.(prev);
        }
    };

    // Helper to get text/duration
    const getStepDetails = (step: RecipeStep) => {
        if (typeof step === 'string') return { text: step, duration: 0 };
        return { text: step.text, duration: step.durationMinutes || 0 };
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
                        Step {currentStepIndex + 1} of {totalSteps}
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
            <div className="flex-1 overflow-y-auto p-6 md:p-12 flex flex-col items-center justify-center relative">
                
                {/* Previous overlay for gesture area could go here */}

                <AnimatePresence mode='wait'>
                    <motion.div
                        key={currentStepIndex}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        transition={{ duration: 0.2 }}
                        className="max-w-2xl w-full flex flex-col gap-8"
                    >
                        {/* Big Step Number */}
                        <div className="text-6xl font-black text-gray-100 dark:text-gray-800 absolute top-10 left-6 select-none -z-10">
                            {currentStepIndex + 1}
                        </div>

                        {/* Text */}
                        <div className="text-xl md:text-3xl font-medium leading-relaxed">
                            {stepDetails.text}
                        </div>

                        {/* Step Timer Check */}
                        {stepDetails.duration > 0 && (
                            <div className="mt-4 p-6 bg-brand-50 dark:bg-brand-900/10 rounded-2xl border border-brand-100 dark:border-brand-900/30 flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                    <Clock size={24} className="text-brand-500" />
                                    <div>
                                        <div className="font-bold">Recommended Timer</div>
                                        <div className="text-sm opacity-70">{stepDetails.duration} minutes</div>
                                    </div>
                                </div>
                                <button
                                    onClick={() => addTimer(`Step ${currentStepIndex + 1}`, stepDetails.duration)}
                                    className="bg-brand-500 text-white px-4 py-2 rounded-lg font-bold hover:bg-brand-600 transition-colors shadow-sm"
                                >
                                    Start
                                </button>
                            </div>
                        )}
                    </motion.div>
                </AnimatePresence>
            </div>

            {/* Timers Area (Floating or Bottom Sheet) */}
            <div className="absolute bottom-28 left-4 right-4 flex flex-col gap-2 pointer-events-none">
                 {/* Only direct children pointer events */}
                 <div className="flex flex-col-reverse gap-2 pointer-events-auto">
                    {timers.map(timer => (
                        <motion.div
                            key={timer.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            className={`p-3 rounded-xl shadow-lg border flex items-center justify-between max-w-sm ml-auto
                                ${timer.status === 'finished' ? 'bg-red-500 text-white border-red-600' : 'bg-white dark:bg-gray-800 dark:border-gray-700'}
                            `}
                        >
                            <div className="flex items-center gap-3">
                                <button onClick={() => removeTimer(timer.id)} className="opacity-60 hover:opacity-100">
                                    <X size={16} />
                                </button>
                                <div className="flex flex-col">
                                    <span className="text-xs font-bold uppercase tracking-wide opacity-80">{timer.label}</span>
                                    <span className="text-xl font-mono font-bold">{formatTime(timer.remaining)}</span>
                                </div>
                            </div>
                            <div className="flex items-center gap-2">
                                {timer.status !== 'finished' && (
                                    <button onClick={() => toggleTimer(timer.id)} className="p-2 rounded-full hover:bg-black/10">
                                        {timer.status === 'running' ? <Pause size={20} /> : <Play size={20} />}
                                    </button>
                                )}
                                <button onClick={() => resetTimer(timer.id)} className="p-2 rounded-full hover:bg-black/10">
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
                    <span>Add Timer</span>
                </button>

                {currentStepIndex < totalSteps - 1 ? (
                    <button
                        onClick={goToNext}
                        className="px-8 py-4 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-2xl font-bold flex items-center gap-2 hover:opacity-90 transition-opacity shadow-lg"
                    >
                        Next Step <ChevronRight size={20} />
                    </button>
                ) : (
                    <button
                        onClick={onClose}
                        className="px-8 py-4 bg-brand-500 text-white rounded-2xl font-bold flex items-center gap-2 hover:bg-brand-600 transition-colors shadow-lg shadow-brand-500/20"
                    >
                        Finish Cooking <Check size={20} />
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
                            <h3 className="text-lg font-bold mb-4">Set Custom Timer</h3>
                            <div className="flex items-center justify-center gap-4 mb-6">
                                <button onClick={() => setCustomTimerMinutes(Math.max(1, customTimerMinutes - 1))} className="p-3 rounded-xl bg-gray-100 dark:bg-gray-800"><Minus size={20} /></button>
                                <span className="text-3xl font-bold w-12 text-center">{customTimerMinutes}</span>
                                <button onClick={() => setCustomTimerMinutes(customTimerMinutes + 1)} className="p-3 rounded-xl bg-gray-100 dark:bg-gray-800"><Plus size={20} /></button>
                                <span className="text-sm text-gray-500">min</span>
                            </div>
                            <div className="flex gap-2">
                                <button onClick={() => setShowTimerModal(false)} className="flex-1 py-3 text-gray-500 font-medium">Cancel</button>
                                <button
                                    onClick={() => addTimer('Timer', customTimerMinutes)}
                                    className="flex-1 py-3 bg-brand-500 text-white rounded-xl font-bold hover:bg-brand-600"
                                >
                                    Start
                                </button>
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </div>
    );
};
