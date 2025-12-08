
import React, { useState } from 'react';
import { Recipe } from '../types';
import { Trophy, ArrowRight, RefreshCw } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { translations, Language } from '../translations';
import { getRecipeImageUrl, handleImageError } from '../utils/imageUtils';

interface SuddenDeathProps {
  recipes: Recipe[];
  onWinnerSelected: (recipe: Recipe) => void;
  onRestart: () => void;
  lang: Language;
}

export const SuddenDeath: React.FC<SuddenDeathProps> = ({ recipes, onWinnerSelected, onRestart, lang }) => {
  // Simple tournament queue state
  const [queue, setQueue] = useState<Recipe[]>([...recipes]);
  const [currentPair, setCurrentPair] = useState<[Recipe, Recipe] | null>(
    recipes.length >= 2 ? [recipes[0], recipes[1]] : null
  );
  const t = translations[lang];

  // If only 1 recipe, it is the winner
  if (recipes.length === 0) {
    return (
        <div className="flex flex-col items-center justify-center h-full p-6 text-center">
            <p className="text-gray-500 dark:text-gray-400 mb-4">{t.no_liked_recipes}</p>
            <button onClick={onRestart} className="text-brand-500 font-bold">{t.start_swiping}</button>
        </div>
    );
  }

  if (recipes.length === 1) {
    // Should auto-select, but let's show UI
    return (
      <WinnerView recipe={recipes[0]} onAction={() => onWinnerSelected(recipes[0])} t={t} />
    );
  }

  const handleChoice = (winner: Recipe, loser: Recipe) => {
    // Remove loser, keep winner in queue (conceptually)
    // Actually, we can just filter the original list or build a next round queue
    // Simplified approach: Winner stays in current spot 0, Loser is removed from list completely
    
    const newQueue = queue.filter(r => r.id !== loser.id);
    setQueue(newQueue);

    if (newQueue.length === 1) {
      setCurrentPair(null); // Winner found
    } else {
        // Pick next pair. Since we kept winner at 0, compare 0 vs 1 again (where 1 is the next in line)
        setCurrentPair([newQueue[0], newQueue[1]]);
    }
  };

  if (queue.length === 1) {
      return <WinnerView recipe={queue[0]} onAction={() => onWinnerSelected(queue[0])} t={t} />;
  }

  return (
    <div className="h-full flex flex-col bg-gray-900 text-white relative overflow-hidden">
      <div className="absolute top-4 inset-x-0 text-center z-10">
        <h2 className="text-2xl font-black uppercase tracking-widest text-red-500 animate-pulse">{t.sudden_death_title}</h2>
        <p className="text-xs text-gray-400">{t.choose_winner}</p>
      </div>

      <div className="flex-1 flex flex-col md:flex-row relative">
         <AnimatePresence mode="wait">
            {currentPair && (
                <>
                {/* Option A (Top or Left) */}
                <Choice 
                    recipe={currentPair[0]} 
                    position="A" 
                    onClick={() => handleChoice(currentPair[0], currentPair[1])} 
                    t={t}
                />
                
                {/* VS Divider */}
                <div className="absolute inset-0 flex items-center justify-center z-20 pointer-events-none">
                    <div className="bg-red-600 text-white font-black text-xl w-12 h-12 rounded-full flex items-center justify-center border-4 border-gray-900 shadow-xl transform rotate-12">
                        VS
                    </div>
                </div>

                {/* Option B (Bottom or Right) */}
                <Choice 
                    recipe={currentPair[1]} 
                    position="B" 
                    onClick={() => handleChoice(currentPair[1], currentPair[0])} 
                    t={t}
                />
                </>
            )}
         </AnimatePresence>
      </div>
    </div>
  );
};

const Choice = ({ recipe, position, onClick, t }: { recipe: Recipe, position: 'A' | 'B', onClick: () => void, t: any }) => {
    return (
        <motion.div 
            initial={{ opacity: 0, x: position === 'A' ? -50 : 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0 }}
            className={`flex-1 relative cursor-pointer group overflow-hidden ${position === 'A' ? 'border-b-2 md:border-b-0 md:border-r-2 border-red-900' : ''}`}
            onClick={onClick}
        >
            <img 
                src={getRecipeImageUrl(recipe)} 
                alt={recipe.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-60 group-hover:opacity-80"
                onError={handleImageError}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
            <div className="absolute bottom-0 inset-x-0 p-8 flex flex-col items-center text-center">
                <span className="text-red-500 font-bold tracking-widest text-sm mb-2">{t.option_prefix} {position}</span>
                <h3 className="text-3xl font-bold mb-2 shadow-black drop-shadow-md">{recipe.title}</h3>
                <p className="text-sm text-gray-300 max-w-xs line-clamp-2">{recipe.description}</p>
                <div className="mt-4 px-6 py-2 bg-white text-black font-bold rounded-full opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all">
                    {t.select_this}
                </div>
            </div>
        </motion.div>
    )
}

const WinnerView = ({ recipe, onAction, t }: { recipe: Recipe, onAction: () => void, t: any }) => (
    <div className="h-full flex flex-col items-center justify-center bg-gray-50 dark:bg-gray-900 p-6 text-center transition-colors">
        <motion.div 
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="w-32 h-32 bg-yellow-400 rounded-full flex items-center justify-center mb-6 shadow-xl text-yellow-800"
        >
            <Trophy size={64} />
        </motion.div>
        <h2 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-2">{t.winner_is}</h2>
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">{recipe.title}</h1>
        
        <button 
            onClick={onAction}
            className="bg-brand-600 text-white px-8 py-4 rounded-xl font-bold shadow-lg hover:bg-brand-700 flex items-center gap-2 transition-transform hover:scale-105"
        >
            {t.lets_cook} <ArrowRight size={20} />
        </button>
    </div>
);
