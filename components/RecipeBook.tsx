
import React, { useState, useMemo } from 'react';
import { Search, Heart, User, BookOpen, Bot, Clock, BarChart, Trash2, Filter, X } from 'lucide-react';
import { Recipe } from '../types';
import { translations, Language } from '../translations';
import { getLocalRecipes } from '../services/localRecipes';

interface RecipeBookProps {
  userRecipes: Recipe[];
  likedRecipes: Recipe[];
  onToggleLike: (recipe: Recipe) => void;
  onViewDetail: (recipe: Recipe) => void;
  onDeleteRecipe?: (recipe: Recipe) => void;
  lang: Language;
}

type FilterSource = 'all' | 'local' | 'user';
type FilterDifficulty = 'all' | 'Easy' | 'Medium' | 'Hard';

export const RecipeBook: React.FC<RecipeBookProps> = ({ 
  userRecipes, 
  likedRecipes, 
  onToggleLike, 
  onViewDetail, 
  onDeleteRecipe,
  lang 
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterSource, setFilterSource] = useState<FilterSource>('all');
  const [filterDifficulty, setFilterDifficulty] = useState<FilterDifficulty>('all');
  
  const t = translations[lang];

  // Combine Local + User recipes
  const allRecipes = useMemo(() => {
    const local = getLocalRecipes(lang);
    return [...userRecipes, ...local];
  }, [userRecipes, lang]);

  // Filter
  const filteredRecipes = useMemo(() => {
    return allRecipes.filter(r => {
      const lowerTerm = searchTerm.toLowerCase();
      const matchesSearch = r.title.toLowerCase().includes(lowerTerm) ||
                            r.ingredients.some(i => i.name.toLowerCase().includes(lowerTerm));
      
      const matchesSource = filterSource === 'all' ? true : r.source === filterSource;
      const matchesDiff = filterDifficulty === 'all' ? true : r.difficulty === filterDifficulty;

      return matchesSearch && matchesSource && matchesDiff;
    });
  }, [allRecipes, searchTerm, filterSource, filterDifficulty]);

  const isLiked = (id: string) => likedRecipes.some(r => r.id === id);

  const getSourceIcon = (source?: string) => {
    switch(source) {
      case 'user': return <User size={12} />;
      case 'ai': return <Bot size={12} />;
      default: return <BookOpen size={12} />;
    }
  };

  const getSourceLabel = (source?: string) => {
    switch(source) {
      case 'user': return t.source_user;
      case 'ai': return t.source_ai;
      default: return t.source_local;
    }
  };

  const getDifficultyColor = (diff?: string) => {
    switch(diff) {
        case 'Easy': return 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300';
        case 'Hard': return 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-300';
        default: return 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-300';
    }
  };

  const getDifficultyLabel = (diff?: string) => {
      switch(diff) {
        case 'Easy': return t.diff_easy;
        case 'Medium': return t.diff_medium;
        case 'Hard': return t.diff_hard;
        default: return t.diff_medium;
      }
  };

  return (
    <div className="flex flex-col h-full bg-gray-50 dark:bg-gray-900 relative overflow-hidden transition-colors duration-200">
      
      {/* Header & Search */}
      <div className="bg-white dark:bg-gray-800 p-4 shadow-sm z-20 sticky top-0 border-b border-gray-100 dark:border-gray-700 shrink-0">
        <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-4">{t.cookbook_title}</h2>
        <div className="space-y-3">
          <div className="relative">
            <Search className="absolute left-3 top-3 text-gray-400" size={18} />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder={t.search_placeholder}
              className="w-full pl-10 pr-4 py-2.5 bg-gray-100 dark:bg-gray-700 rounded-xl text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-brand-500 transition-all"
            />
          </div>

          {/* Filters ScrollView */}
          <div className="flex gap-2 overflow-x-auto no-scrollbar pb-1">
            {/* Source Filters */}
            <button 
                onClick={() => setFilterSource(filterSource === 'all' ? 'user' : 'all')}
                className={`flex items-center gap-1 px-3 py-1.5 rounded-full text-xs font-bold border transition-colors whitespace-nowrap ${
                    filterSource === 'user' 
                    ? 'bg-brand-500 text-white border-brand-500' 
                    : 'bg-white dark:bg-gray-700 border-gray-200 dark:border-gray-600 text-gray-600 dark:text-gray-300'
                }`}
            >
                {filterSource === 'user' && <X size={12} />} {t.filter_user}
            </button>
            <button 
                onClick={() => setFilterSource(filterSource === 'all' ? 'local' : 'all')}
                className={`flex items-center gap-1 px-3 py-1.5 rounded-full text-xs font-bold border transition-colors whitespace-nowrap ${
                    filterSource === 'local' 
                    ? 'bg-brand-500 text-white border-brand-500' 
                    : 'bg-white dark:bg-gray-700 border-gray-200 dark:border-gray-600 text-gray-600 dark:text-gray-300'
                }`}
            >
                {filterSource === 'local' && <X size={12} />} {t.filter_local}
            </button>

            <div className="w-px bg-gray-300 dark:bg-gray-600 mx-1 h-6 self-center shrink-0"></div>

            {/* Difficulty Filters */}
            <button 
                onClick={() => setFilterDifficulty(filterDifficulty === 'all' ? 'Easy' : 'all')}
                className={`flex items-center gap-1 px-3 py-1.5 rounded-full text-xs font-bold border transition-colors whitespace-nowrap ${
                    filterDifficulty === 'Easy' 
                    ? 'bg-green-500 text-white border-green-500' 
                    : 'bg-white dark:bg-gray-700 border-gray-200 dark:border-gray-600 text-gray-600 dark:text-gray-300'
                }`}
            >
                {filterDifficulty === 'Easy' && <X size={12} />} {(t as any).filter_easy || 'Easy'}
            </button>
            <button 
                onClick={() => setFilterDifficulty(filterDifficulty === 'all' ? 'Medium' : 'all')}
                className={`flex items-center gap-1 px-3 py-1.5 rounded-full text-xs font-bold border transition-colors whitespace-nowrap ${
                    filterDifficulty === 'Medium' 
                    ? 'bg-yellow-500 text-white border-yellow-500' 
                    : 'bg-white dark:bg-gray-700 border-gray-200 dark:border-gray-600 text-gray-600 dark:text-gray-300'
                }`}
            >
                 {filterDifficulty === 'Medium' && <X size={12} />} {(t as any).filter_medium || 'Medium'}
            </button>
            <button 
                onClick={() => setFilterDifficulty(filterDifficulty === 'all' ? 'Hard' : 'all')}
                className={`flex items-center gap-1 px-3 py-1.5 rounded-full text-xs font-bold border transition-colors whitespace-nowrap ${
                    filterDifficulty === 'Hard' 
                    ? 'bg-red-500 text-white border-red-500' 
                    : 'bg-white dark:bg-gray-700 border-gray-200 dark:border-gray-600 text-gray-600 dark:text-gray-300'
                }`}
            >
                 {filterDifficulty === 'Hard' && <X size={12} />} {(t as any).filter_hard || 'Hard'}
            </button>
          </div>
        </div>
      </div>

      {/* List View - Added flex-1 to fill space and enable scrolling */}
      <div className="flex-1 p-4 flex flex-col gap-4 overflow-y-auto no-scrollbar pb-24">
        {filteredRecipes.length === 0 ? (
          <div className="text-center py-10 text-gray-400">
            <BookOpen size={48} className="mx-auto mb-2 opacity-30" />
            <p>{t.no_matches}</p>
          </div>
        ) : (
          filteredRecipes.map((recipe) => {
             const liked = isLiked(recipe.id);
             return (
              <div 
                key={recipe.id} 
                onClick={() => onViewDetail(recipe)}
                className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 overflow-hidden cursor-pointer group hover:shadow-md transition-all flex flex-col sm:flex-row h-auto sm:h-40 shrink-0"
              >
                {/* Image Section */}
                <div className="h-48 sm:h-full sm:w-40 shrink-0 bg-gray-200 dark:bg-gray-700 relative overflow-hidden">
                  <img 
                    src={`https://picsum.photos/seed/${recipe.id}/400/400`} 
                    alt={recipe.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors" />
                  
                  {/* Source Badge (Overlay on Image) */}
                  <div className="absolute top-2 left-2 flex items-center gap-1 text-[10px] font-bold text-white bg-black/50 backdrop-blur-md px-2 py-0.5 rounded-full">
                     {getSourceIcon(recipe.source)}
                     <span>{getSourceLabel(recipe.source)}</span>
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-4 flex flex-col justify-between flex-1">
                  <div className="flex justify-between items-start">
                      <h3 className="font-bold text-gray-900 dark:text-gray-100 text-lg line-clamp-2 leading-tight pr-8">
                        {recipe.title}
                      </h3>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          onToggleLike(recipe);
                        }}
                        className="p-2 rounded-full bg-gray-50 dark:bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors shrink-0"
                      >
                        <Heart 
                          size={20} 
                          className={`${liked ? 'fill-red-500 text-red-500' : 'text-gray-400 dark:text-gray-500'}`} 
                        />
                      </button>
                  </div>

                  <div className="flex flex-wrap items-center gap-3 mt-2">
                     <span className={`px-2 py-1 rounded-md text-xs font-bold flex items-center gap-1 ${getDifficultyColor(recipe.difficulty)}`}>
                        <BarChart size={12} /> {getDifficultyLabel(recipe.difficulty)}
                     </span>
                     <span className="flex items-center gap-1 text-xs text-gray-500 dark:text-gray-400 font-medium">
                        <Clock size={12} /> {recipe.prepTime}
                     </span>
                  </div>

                  {/* Actions for User Recipes */}
                  {recipe.source === 'user' && onDeleteRecipe && (
                      <div className="mt-3 pt-3 border-t border-gray-100 dark:border-gray-700 flex justify-end">
                          <button 
                            onClick={(e) => {
                                e.stopPropagation();
                                if(window.confirm(t.delete_recipe_confirm)) {
                                    onDeleteRecipe(recipe);
                                }
                            }}
                            className="flex items-center gap-1 text-xs text-red-400 hover:text-red-600 dark:hover:text-red-300 font-medium px-2 py-1 rounded hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors"
                          >
                              <Trash2 size={12} /> Delete
                          </button>
                      </div>
                  )}
                </div>
              </div>
             );
          })
        )}
      </div>
    </div>
  );
};
