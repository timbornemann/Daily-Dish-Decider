
import React, { useState, useEffect } from 'react';
import { motion, useMotionValue, useTransform, AnimatePresence, PanInfo, Variants } from 'framer-motion';
import { X, Heart, ChefHat, RefreshCw, Info, Plus, User, Bot, BookOpen } from 'lucide-react';
import { Recipe, Ingredient } from '../types';
import { generateRecipes } from '../services/gemini';
import { getLocalRecipes, findMatchingRecipes } from '../services/localRecipes';
import { translations, Language } from '../translations';

interface SwipeDeckProps {
  pantryItems: Ingredient[];
  userRecipes: Recipe[];
  onLike: (recipe: Recipe) => void;
  onDislike: (recipe: Recipe) => void;
  onViewDetail: (recipe: Recipe) => void;
  onCreateRecipe: () => void;
  lang: Language;
}

export const SwipeDeck: React.FC<SwipeDeckProps> = ({ 
  pantryItems, 
  userRecipes,
  onLike, 
  onDislike, 
  onViewDetail, 
  onCreateRecipe,
  lang 
}) => {
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [loading, setLoading] = useState(false);
  const [exitDirection, setExitDirection] = useState<number>(0); 
  const [triedLocal, setTriedLocal] = useState(false);
  const t = translations[lang];

  // Initial Fetch Logic
  useEffect(() => {
    if (recipes.length === 0 && pantryItems.length > 0) {
        loadRecipes();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pantryItems]);

  const loadRecipes = async () => {
    setLoading(true);

    let newStack: Recipe[] = [];

    // 1. Try Local & User Recipes first if we haven't exhausted them easily
    if (!triedLocal) {
        const localDB = getLocalRecipes(lang);
        const allLocal = [...userRecipes, ...localDB];
        const matched = findMatchingRecipes(pantryItems, allLocal);
        
        // Remove duplicates if any exist in current state (unlikely on fresh load)
        newStack = matched.filter(r => !recipes.find(ex => ex.id === r.id));
        setTriedLocal(true);
    }

    // 2. If stack is still small, fetch AI
    if (newStack.length < 3) {
        try {
            const aiRecipes = await generateRecipes(pantryItems, [], lang);
            // Tag them as AI
            const taggedAI = aiRecipes.map(r => ({ ...r, source: 'ai' as const }));
            newStack = [...newStack, ...taggedAI];
        } catch (e) {
            console.error("AI fetch failed", e);
        }
    }

    setRecipes(prev => [...prev, ...newStack]);
    setLoading(false);
  };

  const forceAiFetch = async () => {
      setLoading(true);
      try {
          const aiRecipes = await generateRecipes(pantryItems, [], lang);
          const taggedAI = aiRecipes.map(r => ({ ...r, source: 'ai' as const }));
          setRecipes(prev => [...prev, ...taggedAI]);
      } catch(e) {
          console.error(e);
      }
      setLoading(false);
  };

  const handleDragEnd = (event: any, info: PanInfo, recipe: Recipe) => {
    const threshold = 100;
    const velocityThreshold = 500;

    if (info.offset.x > threshold || info.velocity.x > velocityThreshold) {
      handleSwipe('right', recipe);
    } else if (info.offset.x < -threshold || info.velocity.x < -velocityThreshold) {
      handleSwipe('left', recipe);
    }
  };

  const handleSwipe = (direction: 'left' | 'right', recipe: Recipe) => {
    setExitDirection(direction === 'right' ? 1 : -1);
    setRecipes(prev => prev.filter(r => r.id !== recipe.id));
    
    if (direction === 'right') {
      onLike(recipe);
    } else {
      onDislike(recipe);
    }

    // Load more logic
    if (recipes.length <= 2) {
        // Simple refill logic: if local tried, pull AI.
        if (triedLocal) {
             forceAiFetch();
        } else {
             loadRecipes();
        }
    }
  };

  if (pantryItems.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center h-full p-6 text-center text-gray-500 dark:text-gray-400">
        <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-full mb-4">
          <ChefHat size={48} className="text-gray-400 dark:text-gray-500" />
        </div>
        <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100 mb-2">{t.pantry_empty_title}</h3>
        <p className="mb-6">{t.pantry_empty_desc}</p>
        
        <button 
             onClick={onCreateRecipe}
             className="px-6 py-3 bg-brand-500 text-white rounded-xl font-bold flex items-center gap-2 hover:bg-brand-600 transition"
        >
            <Plus size={20} /> {t.create_own_button}
        </button>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center h-full relative overflow-hidden bg-gray-100 dark:bg-gray-900 transition-colors duration-200">
      
      {/* Create Button (Top Right) */}
      <div className="absolute top-4 right-4 z-20">
          <button 
            onClick={onCreateRecipe}
            className="bg-white dark:bg-gray-800 p-3 rounded-full shadow-md text-brand-600 dark:text-brand-400 border border-gray-100 dark:border-gray-700 hover:scale-105 transition-transform"
            title={t.create_own_button}
          >
              <Plus size={24} />
          </button>
      </div>

      {loading && recipes.length === 0 && (
        <div className="absolute inset-0 flex flex-col items-center justify-center z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm">
          <RefreshCw className="animate-spin text-brand-500 mb-4" size={40} />
          <p className="text-brand-900 dark:text-brand-400 font-medium animate-pulse">{t.loading_chef}</p>
        </div>
      )}

      <div className="relative w-full max-w-sm h-[65vh] md:h-[600px] perspective-1000">
        <AnimatePresence custom={exitDirection}>
          {recipes.map((recipe, index) => {
             // Only render the top 2 cards for performance
             if (index > 1) return null;
             const isTop = index === 0;

             return (
              <Card 
                key={recipe.id}
                recipe={recipe}
                isTop={isTop}
                dragDirection={exitDirection}
                onSwipe={(dir) => handleSwipe(dir, recipe)}
                onDragEnd={(e, i) => handleDragEnd(e, i, recipe)}
                onViewDetail={() => onViewDetail(recipe)}
                lang={lang}
              />
             );
          })}
        </AnimatePresence>
        
        {recipes.length === 0 && !loading && (
          <div className="absolute inset-0 flex items-center justify-center flex-col gap-4 text-center px-6">
             <p className="text-gray-500 dark:text-gray-400">{t.no_matches}</p>
            <button 
              onClick={() => forceAiFetch()}
              className="bg-white dark:bg-gray-800 px-6 py-3 rounded-full shadow-lg text-brand-500 font-bold flex items-center gap-2 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
            >
              <RefreshCw size={20} /> {t.generate_ai_button}
            </button>
            <button 
              onClick={onCreateRecipe}
              className="text-gray-400 text-sm font-medium hover:text-brand-500 underline"
            >
              {t.or_create}
            </button>
          </div>
        )}
      </div>

      {recipes.length > 0 && (
        <div className="flex gap-6 mt-8 z-10">
          <button 
            onClick={() => handleSwipe('left', recipes[0])}
            className="w-16 h-16 bg-white dark:bg-gray-800 text-gray-400 dark:text-gray-500 rounded-full shadow-lg flex items-center justify-center hover:bg-red-50 dark:hover:bg-red-900/20 hover:text-red-500 dark:hover:text-red-400 transition-colors border border-gray-100 dark:border-gray-700 active:scale-95 duration-200"
          >
            <X size={32} />
          </button>
          <button 
            onClick={() => handleSwipe('right', recipes[0])}
            className="w-16 h-16 bg-brand-500 text-white rounded-full shadow-xl shadow-brand-500/30 flex items-center justify-center hover:bg-brand-600 transition-colors transform hover:scale-105 active:scale-95 duration-200"
          >
            <Heart size={32} fill="currentColor" />
          </button>
        </div>
      )}
    </div>
  );
};

interface CardProps {
  recipe: Recipe;
  isTop: boolean;
  dragDirection: number;
  onSwipe: (dir: 'left' | 'right') => void;
  onDragEnd: (e: any, info: PanInfo) => void;
  onViewDetail: () => void;
  lang: Language;
}

const Card: React.FC<CardProps> = ({ recipe, isTop, dragDirection, onDragEnd, onViewDetail, lang }) => {
  const x = useMotionValue(0);
  const rotate = useTransform(x, [-200, 200], [-25, 25]);
  const opacity = useTransform(x, [-200, -100, 0, 100, 200], [0.5, 1, 1, 1, 0.5]);
  const t = translations[lang];
  
  // Visual indicators overlay
  const nopeOpacity = useTransform(x, [-150, -20], [1, 0]);
  const likeOpacity = useTransform(x, [20, 150], [0, 1]);

  const variants: Variants = {
    enter: { scale: 0.95, y: 20, opacity: 0 },
    center: { 
        scale: 1, 
        y: 0, 
        opacity: 1, 
        x: 0, 
        rotate: 0,
        transition: { duration: 0.3 }
    },
    exit: (customDirection: number) => ({
      x: customDirection * 500,
      opacity: 0,
      rotate: customDirection * 45,
      transition: { duration: 0.4, ease: "easeIn" }
    })
  };

  const getSourceIcon = () => {
      switch(recipe.source) {
          case 'user': return <User size={14} />;
          case 'ai': return <Bot size={14} />;
          default: return <BookOpen size={14} />;
      }
  };

  const getSourceLabel = () => {
      switch(recipe.source) {
          case 'user': return t.source_user;
          case 'ai': return t.source_ai;
          default: return t.source_local;
      }
  };

  return (
    <motion.div
      layout
      variants={variants}
      initial={isTop ? "center" : "enter"}
      animate="center"
      exit="exit"
      custom={dragDirection}
      style={{ 
        x: isTop ? x : 0, 
        rotate: isTop ? rotate : 0, 
        zIndex: isTop ? 10 : 5,
        cursor: 'grab'
      }}
      drag={isTop ? "x" : false}
      dragConstraints={{ left: 0, right: 0 }}
      dragElastic={0.6}
      onDragEnd={onDragEnd}
      className="absolute inset-0 bg-white dark:bg-gray-800 rounded-3xl shadow-2xl overflow-hidden border border-gray-100 dark:border-gray-700 select-none active:cursor-grabbing transition-colors"
    >
      {/* Overlay Indicators */}
      {isTop && (
        <>
          <motion.div style={{ opacity: likeOpacity }} className="absolute top-8 left-8 z-20 border-4 border-green-500 text-green-500 font-bold text-4xl px-4 py-2 rounded-lg transform -rotate-12 bg-white/20 backdrop-blur-sm pointer-events-none">
            {t.like}
          </motion.div>
          <motion.div style={{ opacity: nopeOpacity }} className="absolute top-8 right-8 z-20 border-4 border-red-500 text-red-500 font-bold text-4xl px-4 py-2 rounded-lg transform rotate-12 bg-white/20 backdrop-blur-sm pointer-events-none">
            {t.nope}
          </motion.div>
        </>
      )}

      {/* Image Placeholder */}
      <div className="h-1/2 bg-gray-200 dark:bg-gray-700 relative">
        <img 
          src={`https://picsum.photos/seed/${recipe.id}/600/800`} 
          alt={recipe.title}
          className="w-full h-full object-cover pointer-events-none"
        />
        <div className="absolute bottom-0 inset-x-0 h-24 bg-gradient-to-t from-black/60 to-transparent" />
        
        {/* Source Badge */}
        <div className="absolute top-4 left-4 bg-black/40 backdrop-blur-md text-white text-xs font-bold px-2 py-1 rounded-full flex items-center gap-1 border border-white/20">
            {getSourceIcon()} {getSourceLabel()}
        </div>

        <div className="absolute bottom-4 left-4 text-white">
          <h2 className="text-3xl font-bold shadow-black drop-shadow-md leading-tight">{recipe.title}</h2>
          <p className="text-white/90 font-medium flex items-center gap-2">
            <span className="bg-white/20 px-2 py-0.5 rounded text-sm backdrop-blur-md">{recipe.prepTime || '30 mins'}</span>
            <span className="text-sm">• {recipe.ingredients.length} {t.ingredients_title}</span>
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 h-1/2 flex flex-col justify-between">
        <div>
           <div className="flex flex-wrap gap-2 mb-4">
            {recipe.tags?.slice(0, 3).map(tag => (
              <span key={tag} className="text-xs font-semibold px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded-full">
                {tag}
              </span>
            ))}
          </div>
          <p className="text-gray-600 dark:text-gray-300 line-clamp-4 text-sm leading-relaxed mb-4">
            {recipe.description || t.default_desc}
          </p>
        </div>
        
        <button 
          onClick={(e) => {
            e.stopPropagation(); // Prevent drag interference
            onViewDetail();
          }}
          className="w-full py-3 border-2 border-brand-100 dark:border-brand-900 text-brand-600 dark:text-brand-400 font-bold rounded-xl flex items-center justify-center gap-2 hover:bg-brand-50 dark:hover:bg-brand-900/20 transition-colors"
        >
          <Info size={18} /> {t.view_details}
        </button>
      </div>
    </motion.div>
  );
};
