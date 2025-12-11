
import React, { useState, useMemo, useEffect } from 'react';
import { Search, Heart, User, BookOpen, Bot, Clock, BarChart, Trash2, Filter, X, Plus, Grid, List, Tag, ChevronDown, ChevronUp } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Recipe } from '../types';
import { translations, Language } from '../translations';
import { getLocalRecipes } from '../services/localRecipes';
import { getRecipeImageUrl, handleImageError } from '../utils/imageUtils';

interface RecipeBookProps {
  userRecipes: Recipe[];
  likedRecipes: Recipe[];
  onToggleLike: (recipe: Recipe) => void;
  onViewDetail: (recipe: Recipe) => void;
  onDeleteRecipe?: (recipe: Recipe) => void;
  onCreateRecipe: () => void;
  lang: Language;
}

type FilterSource = 'all' | 'local' | 'user';
type FilterDifficulty = 'all' | 'Easy' | 'Medium' | 'Hard';
type ViewMode = 'flat' | 'categorized';

export const RecipeBook: React.FC<RecipeBookProps> = ({
  userRecipes,
  likedRecipes,
  onToggleLike,
  onViewDetail,
  onDeleteRecipe,
  onCreateRecipe,
  lang
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterSource, setFilterSource] = useState<FilterSource>('all');
  const [filterDifficulty, setFilterDifficulty] = useState<FilterDifficulty>('all');
  const [selectedTags, setSelectedTags] = useState<Set<string>>(new Set());
  const [viewMode, setViewMode] = useState<ViewMode>('categorized');
  const [showTagFilter, setShowTagFilter] = useState(false);
  const [expandedCategories, setExpandedCategories] = useState<Record<string, boolean>>({});

  const t = translations[lang];

  // Combine Local + User recipes
  const allRecipes = useMemo(() => {
    const local = getLocalRecipes(lang);
    return [...userRecipes, ...local];
  }, [userRecipes, lang]);

  // Get all unique tags from recipes
  const allTags = useMemo(() => {
    const tagSet = new Set<string>();
    allRecipes.forEach(r => r.tags?.forEach(tag => tagSet.add(tag)));
    return Array.from(tagSet).sort();
  }, [allRecipes]);

  // Filter recipes
  const filteredRecipes = useMemo(() => {
    return allRecipes.filter(r => {
      const lowerTerm = searchTerm.toLowerCase();
      const matchesSearch = !searchTerm ||
        r.title.toLowerCase().includes(lowerTerm) ||
        r.description?.toLowerCase().includes(lowerTerm) ||
        r.ingredients.some(i => {
          const name = (t.ingredients as any)[i.id] || i.id;
          return name.toLowerCase().includes(lowerTerm);
        }) ||
        r.tags?.some(tag => tag.toLowerCase().includes(lowerTerm));

      const matchesSource = filterSource === 'all' ? true : r.source === filterSource;
      const matchesDiff = filterDifficulty === 'all' ? true : r.difficulty === filterDifficulty;

      const matchesTags = selectedTags.size === 0 ||
        (r.tags && r.tags.some(tag => selectedTags.has(tag)));

      return matchesSearch && matchesSource && matchesDiff && matchesTags;
    });
  }, [allRecipes, searchTerm, filterSource, filterDifficulty, selectedTags]);

  // Group recipes by category
  const categorizedRecipes = useMemo(() => {
    if (viewMode !== 'categorized') return null;

    const categories: Record<string, Recipe[]> = {};

    filteredRecipes.forEach(recipe => {
      // Use first tag as primary category, or "Other" if no tags
      const primaryTag = recipe.tags?.[0] || 'Other';
      if (!categories[primaryTag]) {
        categories[primaryTag] = [];
      }
      categories[primaryTag].push(recipe);
    });

    // Sort categories by name and recipes within each category
    const sortedCategories: Record<string, Recipe[]> = {};
    Object.keys(categories).sort().forEach(key => {
      sortedCategories[key] = categories[key].sort((a, b) => a.title.localeCompare(b.title));
    });

    return sortedCategories;
  }, [filteredRecipes, viewMode]);

  const isLiked = (id: string) => likedRecipes.some(r => r.id === id);

  const toggleTag = (tag: string) => {
    setSelectedTags(prev => {
      const newSet = new Set(prev);
      if (newSet.has(tag)) {
        newSet.delete(tag);
      } else {
        newSet.add(tag);
      }
      return newSet;
    });
  };

  const clearAllFilters = () => {
    setSearchTerm('');
    setFilterSource('all');
    setFilterDifficulty('all');
    setSelectedTags(new Set());
  };

  const hasActiveFilters = searchTerm || filterSource !== 'all' || filterDifficulty !== 'all' || selectedTags.size > 0;

  const toggleCategory = (category: string) => {
    setExpandedCategories(prev => ({
      ...prev,
      [category]: !prev[category]
    }));
  };

  // Initialize all categories as expanded by default
  useEffect(() => {
    if (viewMode === 'categorized' && categorizedRecipes) {
      const categories = Object.keys(categorizedRecipes);
      const newExpanded: Record<string, boolean> = {};
      let hasNew = false;
      categories.forEach(cat => {
        if (expandedCategories[cat] === undefined) {
          newExpanded[cat] = true; // Default to expanded
          hasNew = true;
        }
      });
      if (hasNew) {
        setExpandedCategories(prev => ({ ...prev, ...newExpanded }));
      }
    }
  }, [viewMode, categorizedRecipes]);

  const getSourceIcon = (source?: string) => {
    switch (source) {
      case 'user': return <User size={12} />;
      case 'ai': return <Bot size={12} />;
      default: return <BookOpen size={12} />;
    }
  };

  const getSourceLabel = (source?: string) => {
    switch (source) {
      case 'user': return t.source_user;
      case 'ai': return t.source_ai;
      default: return t.source_local;
    }
  };

  const getDifficultyColor = (diff?: string) => {
    switch (diff) {
      case 'Easy': return 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300';
      case 'Hard': return 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-300';
      default: return 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-300';
    }
  };

  const getDifficultyLabel = (diff?: string) => {
    switch (diff) {
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
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100">{t.cookbook_title}</h2>
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1 bg-gray-100 dark:bg-gray-700 rounded-lg p-1">
              <button
                onClick={() => setViewMode('flat')}
                className={`p-1.5 rounded transition-colors ${viewMode === 'flat'
                  ? 'bg-white dark:bg-gray-600 text-brand-600 dark:text-brand-400'
                  : 'text-gray-500 dark:text-gray-400'
                  }`}
                title={t.view_flat || 'Flat View'}
              >
                <List size={18} />
              </button>
              <button
                onClick={() => setViewMode('categorized')}
                className={`p-1.5 rounded transition-colors ${viewMode === 'categorized'
                  ? 'bg-white dark:bg-gray-600 text-brand-600 dark:text-brand-400'
                  : 'text-gray-500 dark:text-gray-400'
                  }`}
                title={t.view_categorized || 'Categorized View'}
              >
                <Grid size={18} />
              </button>
            </div>
            <button
              onClick={onCreateRecipe}
              className="bg-brand-500 text-white p-2 rounded-full shadow-sm hover:bg-brand-600 transition-colors flex items-center justify-center"
              title={(t as any).create_own_button || "Create Recipe"}
            >
              <Plus size={20} />
            </button>
          </div>
        </div>

        <div className="space-y-3">
          <div className="relative">
            <Search className="absolute left-3 top-3 text-gray-400" size={18} />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder={t.search_placeholder}
              className="w-full pl-10 pr-10 py-2.5 bg-gray-100 dark:bg-gray-700 rounded-xl text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-brand-500 transition-all"
            />
            {searchTerm && (
              <button
                onClick={() => setSearchTerm('')}
                className="absolute right-3 top-3 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
              >
                <X size={18} />
              </button>
            )}
          </div>

          {/* Filters ScrollView */}
          <div className="space-y-2">
            <div className="flex gap-2 overflow-x-auto no-scrollbar pb-1">
              {/* Source Filters */}
              <button
                onClick={() => setFilterSource(filterSource === 'all' ? 'user' : filterSource === 'user' ? 'all' : 'user')}
                className={`flex items-center gap-1 px-3 py-1.5 rounded-full text-xs font-bold border transition-colors whitespace-nowrap ${filterSource === 'user'
                  ? 'bg-brand-500 text-white border-brand-500'
                  : 'bg-white dark:bg-gray-700 border-gray-200 dark:border-gray-600 text-gray-600 dark:text-gray-300'
                  }`}
              >
                {filterSource === 'user' && <X size={12} />} {t.filter_user}
              </button>
              <button
                onClick={() => setFilterSource(filterSource === 'all' ? 'local' : filterSource === 'local' ? 'all' : 'local')}
                className={`flex items-center gap-1 px-3 py-1.5 rounded-full text-xs font-bold border transition-colors whitespace-nowrap ${filterSource === 'local'
                  ? 'bg-brand-500 text-white border-brand-500'
                  : 'bg-white dark:bg-gray-700 border-gray-200 dark:border-gray-600 text-gray-600 dark:text-gray-300'
                  }`}
              >
                {filterSource === 'local' && <X size={12} />} {t.filter_local}
              </button>

              <div className="w-px bg-gray-300 dark:bg-gray-600 mx-1 h-6 self-center shrink-0"></div>

              {/* Difficulty Filters */}
              <button
                onClick={() => setFilterDifficulty(filterDifficulty === 'all' ? 'Easy' : filterDifficulty === 'Easy' ? 'all' : 'Easy')}
                className={`flex items-center gap-1 px-3 py-1.5 rounded-full text-xs font-bold border transition-colors whitespace-nowrap ${filterDifficulty === 'Easy'
                  ? 'bg-green-500 text-white border-green-500'
                  : 'bg-white dark:bg-gray-700 border-gray-200 dark:border-gray-600 text-gray-600 dark:text-gray-300'
                  }`}
              >
                {filterDifficulty === 'Easy' && <X size={12} />} {(t as any).filter_easy || 'Easy'}
              </button>
              <button
                onClick={() => setFilterDifficulty(filterDifficulty === 'all' ? 'Medium' : filterDifficulty === 'Medium' ? 'all' : 'Medium')}
                className={`flex items-center gap-1 px-3 py-1.5 rounded-full text-xs font-bold border transition-colors whitespace-nowrap ${filterDifficulty === 'Medium'
                  ? 'bg-yellow-500 text-white border-yellow-500'
                  : 'bg-white dark:bg-gray-700 border-gray-200 dark:border-gray-600 text-gray-600 dark:text-gray-300'
                  }`}
              >
                {filterDifficulty === 'Medium' && <X size={12} />} {(t as any).filter_medium || 'Medium'}
              </button>
              <button
                onClick={() => setFilterDifficulty(filterDifficulty === 'all' ? 'Hard' : filterDifficulty === 'Hard' ? 'all' : 'Hard')}
                className={`flex items-center gap-1 px-3 py-1.5 rounded-full text-xs font-bold border transition-colors whitespace-nowrap ${filterDifficulty === 'Hard'
                  ? 'bg-red-500 text-white border-red-500'
                  : 'bg-white dark:bg-gray-700 border-gray-200 dark:border-gray-600 text-gray-600 dark:text-gray-300'
                  }`}
              >
                {filterDifficulty === 'Hard' && <X size={12} />} {(t as any).filter_hard || 'Hard'}
              </button>

              <div className="w-px bg-gray-300 dark:bg-gray-600 mx-1 h-6 self-center shrink-0"></div>

              {/* Tag Filter Toggle */}
              <button
                onClick={() => setShowTagFilter(!showTagFilter)}
                className={`flex items-center gap-1 px-3 py-1.5 rounded-full text-xs font-bold border transition-colors whitespace-nowrap ${selectedTags.size > 0
                  ? 'bg-purple-500 text-white border-purple-500'
                  : 'bg-white dark:bg-gray-700 border-gray-200 dark:border-gray-600 text-gray-600 dark:text-gray-300'
                  }`}
              >
                <Tag size={12} />
                {t.filter_tags || 'Tags'} {selectedTags.size > 0 && `(${selectedTags.size})`}
              </button>

              {/* Clear All Filters */}
              {hasActiveFilters && (
                <>
                  <div className="w-px bg-gray-300 dark:bg-gray-600 mx-1 h-6 self-center shrink-0"></div>
                  <button
                    onClick={clearAllFilters}
                    className="flex items-center gap-1 px-3 py-1.5 rounded-full text-xs font-bold border border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors whitespace-nowrap"
                  >
                    <X size={12} /> {t.clear_filters || 'Clear'}
                  </button>
                </>
              )}
            </div>

            {/* Tag Filter Dropdown */}
            {showTagFilter && (
              <div className="bg-gray-50 dark:bg-gray-700 rounded-xl p-3 border border-gray-200 dark:border-gray-600 max-h-48 overflow-y-auto">
                <div className="flex flex-wrap gap-2">
                  {allTags.map(tag => (
                    <button
                      key={tag}
                      onClick={() => toggleTag(tag)}
                      className={`px-3 py-1.5 rounded-full text-xs font-medium border transition-colors ${selectedTags.has(tag)
                        ? 'bg-purple-500 text-white border-purple-500'
                        : 'bg-white dark:bg-gray-600 border-gray-300 dark:border-gray-500 text-gray-700 dark:text-gray-300 hover:bg-purple-50 dark:hover:bg-purple-900/20'
                        }`}
                    >
                      {tag}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* List View - Added flex-1 to fill space and enable scrolling */}
      <div className="flex-1 overflow-y-auto no-scrollbar">
        <div className={`${viewMode === 'categorized' ? 'p-4' : 'p-4'} flex flex-col ${viewMode === 'categorized' ? 'gap-6' : 'gap-4'} pb-24`}>
          {filteredRecipes.length === 0 ? (
            <div className="text-center py-10 text-gray-400">
              <BookOpen size={48} className="mx-auto mb-2 opacity-30" />
              <p>{t.no_matches}</p>
            </div>
          ) : viewMode === 'categorized' && categorizedRecipes ? (
            // Categorized View
            Object.entries(categorizedRecipes).map(([category, recipes]: [string, Recipe[]], index) => {
              const isExpanded = expandedCategories[category] !== false; // Default to true
              return (
                <div
                  key={category}
                  className="bg-white dark:bg-gray-800 rounded-xl shadow-md border border-gray-200 dark:border-gray-700 overflow-visible"
                >
                  {/* Category Header - Clickable */}
                  <button
                    onClick={() => toggleCategory(category)}
                    className="w-full px-5 py-4 flex items-center justify-between hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors group"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-1 h-8 bg-brand-500 rounded-full"></div>
                      <div className="text-left">
                        <h3 className="text-lg font-bold text-gray-800 dark:text-gray-200 group-hover:text-brand-600 dark:group-hover:text-brand-400 transition-colors">
                          {category}
                        </h3>
                        <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">
                          {recipes.length} {recipes.length === 1 ? (t.recipe_singular || 'recipe') : (t.recipe_plural || 'recipes')}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      {isExpanded ? (
                        <ChevronUp size={20} className="text-gray-400 group-hover:text-brand-500 transition-colors" />
                      ) : (
                        <ChevronDown size={20} className="text-gray-400 group-hover:text-brand-500 transition-colors" />
                      )}
                    </div>
                  </button>

                  {/* Category Content - Collapsible */}
                  {isExpanded && (
                    <div className="px-5 pb-5 pt-2 space-y-3 border-t border-gray-100 dark:border-gray-700">
                      {recipes.map((recipe) => (
                        <div key={recipe.id} className="w-full">
                          {renderRecipeCard(recipe)}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              );
            })
          ) : (
            // Flat View
            filteredRecipes.map((recipe) => renderRecipeCard(recipe))
          )}
        </div>
      </div>
    </div>
  );

  // Extract recipe card rendering to a function
  function renderRecipeCard(recipe: Recipe) {
    const liked = isLiked(recipe.id);
    return (
      <div
        key={recipe.id}
        onClick={() => onViewDetail(recipe)}
        className="w-full bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 overflow-hidden cursor-pointer group hover:shadow-md transition-all flex flex-col sm:flex-row min-h-[160px] sm:h-40 shrink-0"
      >
        {/* Image Section */}
        <div className="h-48 sm:h-full sm:w-40 shrink-0 bg-gray-200 dark:bg-gray-700 relative overflow-hidden">
          <img
            src={getRecipeImageUrl(recipe)}
            alt={recipe.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            onError={handleImageError}
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
            <div className="flex-1 pr-2">
              <h3 className="font-bold text-gray-900 dark:text-gray-100 text-lg line-clamp-2 leading-tight mb-1">
                {recipe.title}
              </h3>
              {recipe.description && (
                <p className="text-xs text-gray-500 dark:text-gray-400 line-clamp-2 mt-1">
                  {recipe.description}
                </p>
              )}
            </div>
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

          <div className="flex flex-wrap items-center gap-2 mt-2">
            <span className={`px-2 py-1 rounded-md text-xs font-bold flex items-center gap-1 ${getDifficultyColor(recipe.difficulty)}`}>
              <BarChart size={12} /> {getDifficultyLabel(recipe.difficulty)}
            </span>
            <span className="flex items-center gap-1 text-xs text-gray-500 dark:text-gray-400 font-medium">
              <Clock size={12} /> {recipe.prepTime}
            </span>
            {recipe.tags && recipe.tags.length > 0 && (
              <div className="flex flex-wrap gap-1">
                {recipe.tags.slice(0, 3).map(tag => (
                  <span key={tag} className="px-2 py-0.5 rounded-full text-[10px] font-medium bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400">
                    {tag}
                  </span>
                ))}
                {recipe.tags.length > 3 && (
                  <span className="px-2 py-0.5 rounded-full text-[10px] font-medium bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400">
                    +{recipe.tags.length - 3}
                  </span>
                )}
              </div>
            )}
          </div>

          {/* Actions for User Recipes */}
          {recipe.source === 'user' && onDeleteRecipe && (
            <div className="mt-3 pt-3 border-t border-gray-100 dark:border-gray-700 flex justify-end">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  if (window.confirm(t.delete_recipe_confirm)) {
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
  }
};
