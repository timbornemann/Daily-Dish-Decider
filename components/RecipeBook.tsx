
import React, { useState, useMemo } from 'react';
import { Search, Heart, User, BookOpen, Bot, Clock } from 'lucide-react';
import { Recipe } from '../types';
import { translations, Language } from '../translations';
import { getLocalRecipes } from '../services/localRecipes';

interface RecipeBookProps {
  userRecipes: Recipe[];
  likedRecipes: Recipe[];
  onToggleLike: (recipe: Recipe) => void;
  onViewDetail: (recipe: Recipe) => void;
  lang: Language;
}

export const RecipeBook: React.FC<RecipeBookProps> = ({ 
  userRecipes, 
  likedRecipes, 
  onToggleLike, 
  onViewDetail, 
  lang 
}) => {
  const [searchTerm, setSearchTerm] = useState('');
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
      return (
        r.title.toLowerCase().includes(lowerTerm) ||
        r.ingredients.some(i => i.name.toLowerCase().includes(lowerTerm))
      );
    });
  }, [allRecipes, searchTerm]);

  const isLiked = (id: string) => likedRecipes.some(r => r.id === id);

  const getSourceIcon = (source?: string) => {
    switch(source) {
      case 'user': return <User size={12} />;
      case 'ai': return <Bot size={12} />;
      default: return <BookOpen size={12} />;
    }
  };

  return (
    <div className="flex flex-col h-full bg-gray-50 dark:bg-gray-900 pb-24 relative overflow-hidden transition-colors duration-200">
      
      {/* Header & Search */}
      <div className="bg-white dark:bg-gray-800 p-4 shadow-sm z-20 sticky top-0">
        <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-4">{t.cookbook_title}</h2>
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
      </div>

      {/* Grid */}
      <div className="p-4 grid grid-cols-2 gap-4 overflow-y-auto no-scrollbar pb-24">
        {filteredRecipes.length === 0 ? (
          <div className="col-span-2 text-center py-10 text-gray-400">
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
                className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 overflow-hidden relative cursor-pointer group hover:shadow-md transition-all"
              >
                {/* Image */}
                <div className="h-32 bg-gray-200 dark:bg-gray-700 relative overflow-hidden">
                  <img 
                    src={`https://picsum.photos/seed/${recipe.id}/400/400`} 
                    alt={recipe.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
                  
                  {/* Like Button */}
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onToggleLike(recipe);
                    }}
                    className="absolute top-2 right-2 p-2 rounded-full bg-white/20 backdrop-blur-md hover:bg-white/40 transition-colors"
                  >
                    <Heart 
                      size={18} 
                      className={`${liked ? 'fill-red-500 text-red-500' : 'text-white'}`} 
                    />
                  </button>

                  {/* Source Badge */}
                  <div className="absolute bottom-2 left-2 flex items-center gap-1 text-[10px] font-bold text-white bg-black/40 backdrop-blur-sm px-2 py-0.5 rounded-full">
                     {getSourceIcon(recipe.source)}
                     <span>{recipe.source === 'user' ? t.source_user : t.source_local}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-3">
                  <h3 className="font-bold text-gray-800 dark:text-gray-100 text-sm mb-1 line-clamp-2 leading-tight min-h-[2.5em]">
                    {recipe.title}
                  </h3>
                  <div className="flex items-center gap-2 text-xs text-gray-500 dark:text-gray-400">
                    <Clock size={12} />
                    <span>{recipe.prepTime}</span>
                  </div>
                </div>
              </div>
             );
          })
        )}
      </div>
    </div>
  );
};
