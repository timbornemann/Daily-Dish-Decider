
import React, { useState, useEffect } from 'react';
import { motion, useMotionValue, useTransform, AnimatePresence, PanInfo, Variants } from 'framer-motion';
import { X, Heart, ChefHat, RefreshCw, Info } from 'lucide-react';
import { Recipe, Ingredient } from '../types';
import { generateRecipes } from '../services/gemini';
import { translations, Language } from '../translations';

interface SwipeDeckProps {
  pantryItems: Ingredient[];
  onLike: (recipe: Recipe) => void;
  onDislike: (recipe: Recipe) => void;
  onViewDetail: (recipe: Recipe) => void;
  lang: Language;
}

export const SwipeDeck: React.FC<SwipeDeckProps> = ({ pantryItems, onLike, onDislike, onViewDetail, lang }) => {
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [loading, setLoading] = useState(false);
  const [exitDirection, setExitDirection] = useState<number>(0); // -1 for left, 1 for right
  const t = translations[lang];

  // Load initial batch if empty
  useEffect(() => {
    if (recipes.length === 0 && pantryItems.length > 0) {
      fetchRecipes();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pantryItems]);

  const fetchRecipes = async () => {
    setLoading(true);
    const newRecipes = await generateRecipes(pantryItems, [], lang);
    setRecipes(prev => [...prev, ...newRecipes]);
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
    
    // Slight delay to allow state to settle before filtering (ensures exit animation triggers with correct direction)
    // In React 18+ batching usually handles this, but explicit ordering helps with Framer Motion logic
    setRecipes(prev => prev.filter(r => r.id !== recipe.id));
    
    if (direction === 'right') {
      onLike(recipe);
    } else {
      onDislike(recipe);
    }

    if (recipes.length <= 2) {
      fetchRecipes();
    }
  };

  if (pantryItems.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center h-full p-6 text-center text-gray-500">
        <div className="bg-gray-100 p-6 rounded-full mb-4">
          <ChefHat size={48} className="text-gray-400" />
        </div>
        <h3 className="text-xl font-bold text-gray-800 mb-2">{t.pantry_empty_title}</h3>
        <p>{t.pantry_empty_desc}</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center h-full relative overflow-hidden bg-gray-100">
      {loading && recipes.length === 0 && (
        <div className="absolute inset-0 flex flex-col items-center justify-center z-50 bg-white/80 backdrop-blur-sm">
          <RefreshCw className="animate-spin text-brand-500 mb-4" size={40} />
          <p className="text-brand-900 font-medium animate-pulse">{t.loading_chef}</p>
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
          <div className="absolute inset-0 flex items-center justify-center">
            <button 
              onClick={fetchRecipes}
              className="bg-white px-6 py-3 rounded-full shadow-lg text-brand-500 font-bold flex items-center gap-2 hover:bg-gray-50"
            >
              <RefreshCw size={20} /> {t.load_more}
            </button>
          </div>
        )}
      </div>

      {recipes.length > 0 && (
        <div className="flex gap-6 mt-8 z-10">
          <button 
            onClick={() => handleSwipe('left', recipes[0])}
            className="w-16 h-16 bg-white text-gray-400 rounded-full shadow-lg flex items-center justify-center hover:bg-red-50 hover:text-red-500 transition-colors border border-gray-100 active:scale-95 duration-200"
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
      className="absolute inset-0 bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100 select-none active:cursor-grabbing"
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
      <div className="h-1/2 bg-gray-200 relative">
        <img 
          src={`https://picsum.photos/seed/${recipe.id}/600/800`} 
          alt={recipe.title}
          className="w-full h-full object-cover pointer-events-none"
        />
        <div className="absolute bottom-0 inset-x-0 h-24 bg-gradient-to-t from-black/60 to-transparent" />
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
              <span key={tag} className="text-xs font-semibold px-2 py-1 bg-gray-100 text-gray-600 rounded-full">
                {tag}
              </span>
            ))}
          </div>
          <p className="text-gray-600 line-clamp-4 text-sm leading-relaxed mb-4">
            {recipe.description || t.default_desc}
          </p>
        </div>
        
        <button 
          onClick={(e) => {
            e.stopPropagation(); // Prevent drag interference
            onViewDetail();
          }}
          className="w-full py-3 border-2 border-brand-100 text-brand-600 font-bold rounded-xl flex items-center justify-center gap-2 hover:bg-brand-50 transition-colors"
        >
          <Info size={18} /> {t.view_details}
        </button>
      </div>
    </motion.div>
  );
};
