
import React, { useState, useEffect } from 'react';
import { motion, useMotionValue, useTransform, AnimatePresence, PanInfo, Variants } from 'framer-motion';
import { X, Heart, ChefHat, RefreshCw, Info, Plus, User, Bot, BookOpen, Filter, Utensils, Thermometer, Leaf, Layers, Check } from 'lucide-react';
import { Recipe, Ingredient, UserPreferences } from '../types';
import { generateRecipes } from '../services/gemini';
import { getLocalRecipes, findMatchingRecipes } from '../services/localRecipes';
import { getRecommendedRecipes } from '../services/recommendation';
import { translations, Language } from '../translations';
import { getRecipeImageUrl, handleImageError } from '../utils/imageUtils';

const derivePreferredTags = (profile: Record<string, number>): string[] => {
  const sorted = Object.entries(profile)
    .filter(([, weight]) => weight > 0)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 5)
    .map(([tag]) => tag);
  return sorted;
};

const deriveDayPeriod = (date: Date): 'morning' | 'midday' | 'afternoon' | 'evening' | 'late_night' => {
  const hour = date.getHours();
  if (hour < 6) return 'late_night';
  if (hour < 11) return 'morning';
  if (hour < 14) return 'midday';
  if (hour < 18) return 'afternoon';
  return 'evening';
};

const deriveWeekSegment = (date: Date): 'weekday' | 'weekend' => {
  const day = date.getDay();
  return day === 0 || day === 6 ? 'weekend' : 'weekday';
};

interface SwipeDeckProps {
  pantryItems: Ingredient[];
  userRecipes: Recipe[];
  preferences: UserPreferences;
  sessionHistory?: Set<string>;
  onLike: (recipe: Recipe) => void;
  onDislike: (recipe: Recipe) => void;
  onViewDetail: (recipe: Recipe) => void;
  onCreateRecipe: () => void;
  lang: Language;
}

export const SwipeDeck: React.FC<SwipeDeckProps> = ({ 
  pantryItems, 
  userRecipes,
  preferences,
  sessionHistory, 
  onLike, 
  onDislike, 
  onViewDetail, 
  onCreateRecipe,
  lang 
}) => {
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [loading, setLoading] = useState(true);
  const [exitDirection, setExitDirection] = useState<number>(0); 
  
  // Filter States
  const [filterMeal, setFilterMeal] = useState<'breakfast' | 'lunch' | 'dinner' | undefined>();
  const [filterTemp, setFilterTemp] = useState<'warm' | 'cold' | undefined>();
  const [filterDiet, setFilterDiet] = useState<'vegan' | 'vegetarian' | 'all'>('all');
  const [ignorePantry, setIgnorePantry] = useState(false);

  const [showFilters, setShowFilters] = useState(false);

  const t = translations[lang];

  // Load Recommendations
  const loadRecommendations = () => {
    setLoading(true);
    const localDB = getLocalRecipes(lang);
    
    // Combine local DB and User Recipes
    const allLocal = [...userRecipes, ...localDB];

    // Filter out seen recipes if sessionHistory is provided
    const unseenRecipes = sessionHistory 
        ? allLocal.filter(r => !sessionHistory.has(r.id))
        : allLocal;

    const preferredTags = derivePreferredTags(preferences.tasteProfile);
    const timeOfDay = deriveDayPeriod(new Date());
    const weekSegment = deriveWeekSegment(new Date());
    
    // 1. Filter by Pantry availability (Hard constraint)
    const pantryMatches = findMatchingRecipes(pantryItems, unseenRecipes, {
      dietFilters: preferences.dietaryRestrictions,
      preferredTags,
      timeOfDay,
      weekSegment,
      epsilon: 0.1,
      filterMealType: filterMeal,
      filterTemperature: filterTemp,
      filterDiet: filterDiet,
      ignorePantry,
      lang
    });
    
    // 2. Sort by User Taste Profile (Soft constraint / RL)
    const recommended = getRecommendedRecipes(pantryMatches, preferences.tasteProfile);
    
    setRecipes(recommended);
    setLoading(false);
  };

  // Initial Fetch & Filter Logic
  useEffect(() => {
    loadRecommendations();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pantryItems, userRecipes, filterMeal, filterTemp, filterDiet, ignorePantry]);

  const forceAiFetch = async () => {
      setLoading(true);
      try {
          const aiRecipes = await generateRecipes(pantryItems, [], lang);
          const taggedAI = aiRecipes.map(r => ({ ...r, source: 'ai' as const }));
          
          // Add AI recipes to the current stack
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
    
    // Remove the swiped recipe from state
    setRecipes(prev => prev.filter(r => r.id !== recipe.id));
    
    if (direction === 'right') {
      onLike(recipe);
    } else {
      onDislike(recipe);
    }
  };

  const getActiveFilterCount = () => {
    let count = 0;
    if (filterMeal) count++;
    if (filterTemp) count++;
    if (filterDiet !== 'all') count++;
    if (ignorePantry) count++;
    return count;
  };

  return (
    <div className="flex flex-col items-center justify-center h-full relative overflow-hidden bg-gray-100 dark:bg-gray-900 transition-colors duration-200">
      
      {/* Header Controls (Always Visible) */}
      <div className="absolute top-4 right-4 z-40 flex flex-col gap-3">
          <button 
            onClick={onCreateRecipe}
            className="bg-white dark:bg-gray-800 p-3 rounded-full shadow-md text-brand-600 dark:text-brand-400 border border-gray-100 dark:border-gray-700 hover:scale-105 transition-transform"
            title={t.create_own_button}
          >
              <Plus size={24} />
          </button>
          
          <div className="relative">
            <button 
              onClick={() => setShowFilters(!showFilters)}
              className={`p-3 rounded-full shadow-md border hover:scale-105 transition-all duration-200 ${showFilters || getActiveFilterCount() > 0 ? 'bg-brand-500 text-white border-brand-500 ring-2 ring-brand-200 dark:ring-brand-900' : 'bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-400 border-gray-100 dark:border-gray-700'}`}
              title="Filters"
            >
                <Filter size={24} />
            </button>
            {getActiveFilterCount() > 0 && !showFilters && (
               <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-white text-[10px] font-bold flex items-center justify-center rounded-full shadow-sm">
                 {getActiveFilterCount()}
               </span>
            )}
          </div>
      </div>

      { /* Filter Modal Overlay */ }
      <AnimatePresence>
        {showFilters && (
          <>
            <motion.div 
               initial={{ opacity: 0 }} 
               animate={{ opacity: 1 }} 
               exit={{ opacity: 0 }}
               onClick={() => setShowFilters(false)}
               className="absolute inset-0 bg-black/40 backdrop-blur-sm z-40"
            />
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: -20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -20 }}
              className="absolute top-16 right-4 left-4 md:left-auto md:w-80 bg-white dark:bg-gray-800 rounded-2xl shadow-2xl z-50 p-5 border border-gray-100 dark:border-gray-700 overflow-hidden"
            >
               <div className="flex justify-between items-center mb-4">
                  <h3 className="font-bold text-gray-800 dark:text-gray-100 flex items-center gap-2">
                    <Filter size={18} className="text-brand-500" /> Filter
                  </h3>
                  <button onClick={() => setShowFilters(false)} className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-200">
                    <X size={20} />
                  </button>
               </div>

               <div className="space-y-4">
                  {/* Meal Type */}
                  <div>
                    <label className="text-xs font-semibold text-gray-500 dark:text-gray-400 mb-2 block uppercase tracking-wider">{t.filter_meal_type}</label>
                    <div className="flex flex-wrap gap-2">
                      {[
                        { val: undefined, label: t.filter_all || 'Alle' }, // Fallback string if missing in en.ts temporarily
                        { val: 'breakfast', label: t.filter_meal_breakfast },
                        { val: 'lunch', label: t.filter_meal_lunch },
                        { val: 'dinner', label: t.filter_meal_dinner },
                      ].map((opt) => (
                        <button
                          key={String(opt.val)}
                          onClick={() => setFilterMeal(opt.val as any)}
                          className={`px-3 py-1.5 rounded-full text-xs font-bold border transition-colors ${filterMeal === opt.val 
                            ? 'bg-brand-100 text-brand-700 border-brand-200 dark:bg-brand-900/30 dark:text-brand-300 dark:border-brand-800' 
                            : 'bg-gray-50 text-gray-600 border-gray-200 dark:bg-gray-700/50 dark:text-gray-400 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700'}`}
                        >
                          {opt.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Temperature */}
                  <div>
                    <label className="text-xs font-semibold text-gray-500 dark:text-gray-400 mb-2 block uppercase tracking-wider">{t.filter_temp}</label>
                    <div className="flex flex-wrap gap-2">
                      {[
                        { val: undefined, label: t.filter_all || 'Alle' },
                        { val: 'warm', label: t.filter_temp_warm },
                        { val: 'cold', label: t.filter_temp_cold },
                      ].map((opt) => (
                        <button
                          key={String(opt.val)}
                          onClick={() => setFilterTemp(opt.val as any)}
                          className={`px-3 py-1.5 rounded-full text-xs font-bold border transition-colors ${filterTemp === opt.val 
                             ? 'bg-orange-100 text-orange-700 border-orange-200 dark:bg-orange-900/30 dark:text-orange-300 dark:border-orange-800' 
                             : 'bg-gray-50 text-gray-600 border-gray-200 dark:bg-gray-700/50 dark:text-gray-400 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700'}`}
                        >
                          {opt.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Diet */}
                  <div>
                     <label className="text-xs font-semibold text-gray-500 dark:text-gray-400 mb-2 block uppercase tracking-wider">{t.filter_diet}</label>
                     <div className="flex flex-wrap gap-2">
                        {[
                          { val: 'all', label: t.filter_diet_all },
                          { val: 'vegetarian', label: t.filter_diet_vegetarian },
                          { val: 'vegan', label: t.filter_diet_vegan },
                        ].map((opt) => (
                          <button
                            key={opt.val}
                            onClick={() => setFilterDiet(opt.val as any)}
                            className={`px-3 py-1.5 rounded-full text-xs font-bold border transition-colors ${filterDiet === opt.val 
                               ? 'bg-green-100 text-green-700 border-green-200 dark:bg-green-900/30 dark:text-green-300 dark:border-green-800' 
                               : 'bg-gray-50 text-gray-600 border-gray-200 dark:bg-gray-700/50 dark:text-gray-400 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700'}`}
                          >
                            {opt.label}
                          </button>
                        ))}
                     </div>
                  </div>

                  <hr className="border-gray-100 dark:border-gray-700" />

                  {/* Ignore Pantry Toggle */}
                  <div className="flex items-center justify-between">
                     <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">{t.filter_ignore_pantry}</span>
                     <button 
                        onClick={() => setIgnorePantry(!ignorePantry)}
                        className={`w-12 h-7 flex items-center rounded-full p-1 duration-300 shadow-inner ${ignorePantry ? 'bg-brand-500' : 'bg-gray-200 dark:bg-gray-700'}`}
                      >
                        <motion.div 
                          layout 
                          className="w-5 h-5 bg-white rounded-full shadow-md"
                          transition={{ type: "spring", stiffness: 500, damping: 30 }}
                         />
                      </button>
                  </div>
               </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {loading && recipes.length === 0 && (
        <div className="absolute inset-0 flex flex-col items-center justify-center z-30 pointer-events-none">
          <div className="bg-white/90 dark:bg-gray-900/90 backdrop-blur-md p-6 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-800 flex flex-col items-center">
             <RefreshCw className="animate-spin text-brand-500 mb-4" size={40} />
             <p className="text-brand-900 dark:text-brand-400 font-medium animate-pulse">{t.loading_chef}</p>
          </div>
        </div>
      )}

      {/* Main Content Area */}
      <div className="relative w-full max-w-sm h-[65vh] md:h-[600px] perspective-1000 z-10 flex items-center justify-center">
        
        {/* Empty Pantry / No Results State */}
        {recipes.length === 0 && !loading && (
             <div className="flex flex-col items-center justify-center text-center px-6">
                <div className="w-20 h-20 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center mb-4 text-gray-400 shadow-inner">
                   {pantryItems.length === 0 && !ignorePantry ? <ChefHat size={32} /> : <BookOpen size={32} />}
                </div>
                
                <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100 mb-2">
                   {pantryItems.length === 0 && !ignorePantry ? t.pantry_empty_title : t.no_matches}
                </h3>
                
                <p className="mb-6 text-gray-500 dark:text-gray-400 max-w-[260px]">
                   {pantryItems.length === 0 && !ignorePantry ? t.pantry_empty_desc : "Versuche, die Filter zu ändern oder den Vorrat zu ignorieren."}
                </p>
                
                <div className="flex flex-col gap-3 w-full max-w-[200px]">
                   {pantryItems.length === 0 && !ignorePantry ? (
                      <button 
                         onClick={onCreateRecipe}
                         className="px-6 py-3 bg-brand-500 text-white rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-brand-600 transition shadow-lg shadow-brand-500/20 active:scale-95"
                      >
                         <Plus size={20} /> {t.create_own_button}
                      </button>
                   ) : (
                      <>
                        <button 
                           onClick={() => forceAiFetch()}
                           className="bg-white dark:bg-gray-800 px-6 py-3 rounded-xl shadow-lg text-brand-500 font-bold flex items-center justify-center gap-2 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors border border-gray-100 dark:border-gray-700 active:scale-95"
                        >
                           <RefreshCw size={20} /> {t.generate_ai_button}
                        </button>
                        <button 
                           onClick={onCreateRecipe}
                           className="text-gray-400 text-sm font-medium hover:text-brand-500 underline pt-2"
                        >
                           {t.or_create}
                        </button>
                      </>
                   )}
                </div>
             </div>
        )}

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
      </div>

      {recipes.length > 0 && (
        <div className="flex gap-6 mt-8 z-10 w-full max-w-sm justify-center">
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
          src={getRecipeImageUrl(recipe)} 
          alt={recipe.title}
          className="w-full h-full object-cover pointer-events-none"
          onError={handleImageError}
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
          {recipe.matchMeta?.reasons?.length ? (
            <div className="bg-gray-50 dark:bg-gray-700/50 border border-gray-100 dark:border-gray-600 rounded-lg p-2 mb-4">
              <p className="text-xs font-semibold text-gray-700 dark:text-gray-200 mb-1">{t.reason_label}</p>
              <p className="text-[11px] text-gray-500 dark:text-gray-400 line-clamp-2">
                {recipe.matchMeta.reasons.slice(0, 2).join(' · ')}
              </p>
            </div>
          ) : null}
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
