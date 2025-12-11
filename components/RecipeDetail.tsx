
import React, { useMemo, useState } from 'react';
import { ChevronLeft, Users, Clock, ShoppingBag } from 'lucide-react';
import { Recipe, Ingredient } from '../types';
import { translations, Language } from '../translations';
import { getRecipeImageUrl, handleImageError } from '../utils/imageUtils';
import { getSubstitutions, SubstitutionOption } from '../services/substitutions';

interface RecipeDetailProps {
  recipe: Recipe;
  onBack: () => void;
  pantryItems: Ingredient[];
  onAddToShoppingList: (items: string[]) => void;
  lang: Language;
}

export const RecipeDetail: React.FC<RecipeDetailProps> = ({ recipe, onBack, pantryItems, onAddToShoppingList, lang }) => {
  const [portions, setPortions] = useState(recipe.basePortions || 2);
  const [substitutionAmounts, setSubstitutionAmounts] = useState<Record<string, string>>({});
  const t = translations[lang];

  const scaleAmount = (amountStr: string, multiplier = 1) => {
    // Very basic fraction parsing and scaling
    // In a real app, use a library like 'fraction.js'
    const numericPart = parseFloat(amountStr);
    if (isNaN(numericPart)) return amountStr;
    const ratio = (portions / (recipe.basePortions || 2)) * multiplier;
    const newVal = (numericPart * ratio);
    const suffix = amountStr.replace(/[\d\s.]/g, '');
    return newVal % 1 === 0 ? `${newVal.toFixed(0)}${suffix}` : `${newVal.toFixed(1)}${suffix}`;
  };

  const scale = (amountStr: string) => scaleAmount(amountStr);

  const getIngredientAmount = (ingredientName: string) => {
    const match = recipe.ingredients.find(
      ing => ing.name.toLowerCase() === ingredientName.toLowerCase()
    );
    return match ? scale(match.amount) : '';
  };

  const getSubstitutionAmount = (ingredientName: string, ratio?: number) => {
    const match = recipe.ingredients.find(
      ing => ing.name.toLowerCase() === ingredientName.toLowerCase()
    );
    if (!match) return '';
    return ratio ? scaleAmount(match.amount, ratio) : scale(match.amount);
  };

  const getMissingIngredients = () => {
    const missing: string[] = [];
    recipe.ingredients.forEach(ing => {
        // Simple case-insensitive name check
        const hasItem = pantryItems.some(p => p.name.toLowerCase().includes(ing.name.toLowerCase()) || ing.name.toLowerCase().includes(p.name.toLowerCase()));
        if (!hasItem) missing.push(ing.name);
    });
    return missing;
  };

  const missingItems = getMissingIngredients();
  const missingItemSet = useMemo(() => new Set(missingItems.map(m => m.toLowerCase())), [missingItems]);

  const handleUseAlternative = (name: string, amount?: string) => {
    const label = amount ? `${name} (${amount})` : name;
    onAddToShoppingList([label]);
  };

  const renderSubstitutions = (ingredientName: string) => {
    const alternatives = getSubstitutions(ingredientName);
    if (!alternatives.length) return null;

    return (
      <details className="bg-white/60 dark:bg-gray-800/60 rounded-lg border border-orange-100 dark:border-orange-900/40 p-3" open>
        <summary className="cursor-pointer font-semibold text-orange-800 dark:text-orange-200 text-sm flex items-center justify-between">
          <span>{t.show_alternatives} {ingredientName}</span>
        </summary>
        <div className="mt-3 space-y-3">
          {alternatives.map((alt: SubstitutionOption, idx: number) => {
            const key = `${ingredientName}-${alt.name}-${idx}`;
            const defaultAmount = getSubstitutionAmount(ingredientName, alt.ratio);
            const amount = substitutionAmounts[key] ?? defaultAmount;

            return (
              <div
                key={key}
                className="flex flex-col gap-2 rounded-md bg-orange-50 dark:bg-orange-900/30 p-3 border border-orange-100 dark:border-orange-900/60"
              >
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <p className="font-semibold text-orange-900 dark:text-orange-100 text-sm">{alt.name}</p>
                    {alt.note && (
                      <p className="text-xs text-orange-700 dark:text-orange-300">{alt.note}</p>
                    )}
                  </div>
                  <span className="text-[11px] text-orange-600 dark:text-orange-200 bg-white/70 dark:bg-orange-900/60 px-2 py-1 rounded-full border border-orange-200 dark:border-orange-800">
                    {t.optional_amount}
                  </span>
                </div>
                <div className="flex gap-2 items-center">
                  <input
                    value={amount}
                    onChange={(e) => setSubstitutionAmounts(prev => ({ ...prev, [key]: e.target.value }))}
                    placeholder={defaultAmount || t.amount_placeholder}
                    className="flex-1 text-sm px-3 py-2 rounded-lg border border-orange-200 dark:border-orange-800 bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100"
                  />
                  <button
                    onClick={() => handleUseAlternative(alt.name, amount)}
                    className="text-xs font-bold bg-orange-200 dark:bg-orange-700 dark:text-orange-50 text-orange-900 px-3 py-2 rounded-lg hover:bg-orange-300 dark:hover:bg-orange-600 transition-colors"
                  >
                    {t.use_alternative}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </details>
    );
  };

  return (
    <div className="fixed inset-0 bg-white dark:bg-gray-900 z-50 overflow-y-auto animate-in slide-in-from-bottom duration-300 transition-colors">
      <div className="relative h-72">
        <img 
          src={getRecipeImageUrl(recipe)} 
          alt={recipe.title}
          className="w-full h-full object-cover"
          onError={handleImageError}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/30" />
        <button 
          onClick={onBack}
          className="absolute top-4 left-4 bg-white/20 backdrop-blur-md p-2 rounded-full text-white hover:bg-white/30"
        >
          <ChevronLeft size={28} />
        </button>
        
        <div className="absolute bottom-6 left-6 right-6 text-white">
          <h1 className="text-3xl font-bold leading-tight mb-2">{recipe.title}</h1>
          <div className="flex items-center gap-4 text-sm font-medium">
            <span className="flex items-center gap-1 bg-black/30 px-2 py-1 rounded-lg backdrop-blur-md">
              <Clock size={14} /> {recipe.prepTime}
            </span>
          </div>
        </div>
      </div>

      <div className="p-6 pb-24 max-w-2xl mx-auto">
        {/* Portion Control */}
        <div className="flex items-center justify-between mb-8 bg-gray-50 dark:bg-gray-800 p-4 rounded-xl border border-gray-100 dark:border-gray-700 transition-colors">
          <div className="flex items-center gap-2 text-gray-700 dark:text-gray-200 font-medium">
            <Users size={20} className="text-brand-500" />
            <span>{t.servings}</span>
          </div>
          <div className="flex items-center gap-4 bg-white dark:bg-gray-700 rounded-lg shadow-sm border border-gray-200 dark:border-gray-600 px-2 py-1">
            <button 
              onClick={() => setPortions(Math.max(1, portions - 1))}
              className="w-8 h-8 flex items-center justify-center text-gray-500 dark:text-gray-400 hover:text-brand-600 dark:hover:text-brand-400 text-xl font-bold"
            >
              -
            </button>
            <span className="text-lg font-bold w-6 text-center text-gray-900 dark:text-white">{portions}</span>
            <button 
              onClick={() => setPortions(portions + 1)}
              className="w-8 h-8 flex items-center justify-center text-gray-500 dark:text-gray-400 hover:text-brand-600 dark:hover:text-brand-400 text-xl font-bold"
            >
              +
            </button>
          </div>
        </div>

        {/* Missing Ingredients Warning */}
        {missingItems.length > 0 && (
          <div className="mb-8 p-4 bg-orange-50 dark:bg-orange-900/20 border border-orange-100 dark:border-orange-900/50 rounded-xl transition-colors">
             <h3 className="text-orange-800 dark:text-orange-300 font-bold mb-2 flex items-center gap-2">
                <ShoppingBag size={18} /> {t.missing_ingredients}
             </h3>
            <ul className="list-disc list-inside text-sm text-orange-700 dark:text-orange-400 mb-3 ml-1">
               {missingItems.map(m => <li key={m}>{m}</li>)}
             </ul>
             <button
                onClick={() => onAddToShoppingList(missingItems)}
                className="text-xs font-bold bg-orange-200 dark:bg-orange-800 dark:text-orange-100 text-orange-800 px-3 py-2 rounded-lg hover:bg-orange-300 dark:hover:bg-orange-700 w-full transition-colors"
             >
                {t.add_missing_shopping}
             </button>
             <div className="mt-4 space-y-3">
               <p className="text-xs text-orange-700 dark:text-orange-300 font-semibold uppercase tracking-wide">{t.substitution_title}</p>
               <p className="text-xs text-orange-700 dark:text-orange-400">{t.substitution_hint}</p>
               <div className="space-y-3">
                 {recipe.ingredients
                   .filter(ing => missingItemSet.has(ing.name.toLowerCase()))
                   .map(ing => (
                     <div key={ing.name} className="space-y-2">
                       <p className="font-semibold text-sm text-orange-900 dark:text-orange-100 flex items-center justify-between">
                         <span>{ing.name}</span>
                         {getIngredientAmount(ing.name) && (
                           <span className="text-[11px] text-orange-700 dark:text-orange-300 bg-white/60 dark:bg-orange-900/40 px-2 py-1 rounded-full border border-orange-200 dark:border-orange-800">
                             {t.original_amount}: {getIngredientAmount(ing.name)}
                           </span>
                         )}
                       </p>
                       {renderSubstitutions(ing.name)}
                     </div>
                   ))}
               </div>
             </div>
          </div>
        )}

        <div className="grid md:grid-cols-2 gap-8">
            <div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">{t.ingredients_title}</h3>
                <ul className="space-y-3">
                {recipe.ingredients.map((ing, idx) => (
                    <li key={idx} className="flex justify-between items-center py-2 border-b border-gray-50 dark:border-gray-800 last:border-0">
                    <span className="text-gray-700 dark:text-gray-300">{ing.name}</span>
                    <span className="font-semibold text-gray-900 dark:text-gray-100 bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded text-sm">
                        {scale(ing.amount)}
                    </span>
                    </li>
                ))}
                </ul>
            </div>

            <div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">{t.instructions_title}</h3>
                <div className="space-y-6">
                {recipe.steps.map((step, idx) => (
                    <div key={idx} className="flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-brand-100 dark:bg-brand-900 text-brand-600 dark:text-brand-300 font-bold flex items-center justify-center text-sm">
                        {idx + 1}
                    </div>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed mt-1">{step}</p>
                    </div>
                ))}
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};
