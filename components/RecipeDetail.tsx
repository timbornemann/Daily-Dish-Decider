
import React, { useState } from 'react';
import { ChevronLeft, Users, Clock, ShoppingBag } from 'lucide-react';
import { Recipe, Ingredient } from '../types';
import { translations, Language } from '../translations';

interface RecipeDetailProps {
  recipe: Recipe;
  onBack: () => void;
  pantryItems: Ingredient[];
  onAddToShoppingList: (items: string[]) => void;
  lang: Language;
}

export const RecipeDetail: React.FC<RecipeDetailProps> = ({ recipe, onBack, pantryItems, onAddToShoppingList, lang }) => {
  const [portions, setPortions] = useState(recipe.basePortions || 2);
  const t = translations[lang];

  const scale = (amountStr: string) => {
    // Very basic fraction parsing and scaling
    // In a real app, use a library like 'fraction.js'
    const numericPart = parseFloat(amountStr);
    if (isNaN(numericPart)) return amountStr;
    const ratio = portions / (recipe.basePortions || 2);
    const newVal = (numericPart * ratio);
    return newVal % 1 === 0 ? newVal.toFixed(0) : newVal.toFixed(1) + amountStr.replace(/[\d\s.]/g, ''); 
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

  return (
    <div className="fixed inset-0 bg-white z-50 overflow-y-auto animate-in slide-in-from-bottom duration-300">
      <div className="relative h-72">
        <img 
          src={`https://picsum.photos/seed/${recipe.id}/800/600`} 
          alt={recipe.title}
          className="w-full h-full object-cover"
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
        <div className="flex items-center justify-between mb-8 bg-gray-50 p-4 rounded-xl border border-gray-100">
          <div className="flex items-center gap-2 text-gray-700 font-medium">
            <Users size={20} className="text-brand-500" />
            <span>{t.servings}</span>
          </div>
          <div className="flex items-center gap-4 bg-white rounded-lg shadow-sm border border-gray-200 px-2 py-1">
            <button 
              onClick={() => setPortions(Math.max(1, portions - 1))}
              className="w-8 h-8 flex items-center justify-center text-gray-500 hover:text-brand-600 text-xl font-bold"
            >
              -
            </button>
            <span className="text-lg font-bold w-6 text-center">{portions}</span>
            <button 
              onClick={() => setPortions(portions + 1)}
              className="w-8 h-8 flex items-center justify-center text-gray-500 hover:text-brand-600 text-xl font-bold"
            >
              +
            </button>
          </div>
        </div>

        {/* Missing Ingredients Warning */}
        {missingItems.length > 0 && (
          <div className="mb-8 p-4 bg-orange-50 border border-orange-100 rounded-xl">
             <h3 className="text-orange-800 font-bold mb-2 flex items-center gap-2">
                <ShoppingBag size={18} /> {t.missing_ingredients}
             </h3>
             <ul className="list-disc list-inside text-sm text-orange-700 mb-3 ml-1">
                {missingItems.map(m => <li key={m}>{m}</li>)}
             </ul>
             <button 
                onClick={() => onAddToShoppingList(missingItems)}
                className="text-xs font-bold bg-orange-200 text-orange-800 px-3 py-2 rounded-lg hover:bg-orange-300 w-full"
             >
                {t.add_missing_shopping}
             </button>
          </div>
        )}

        <div className="grid md:grid-cols-2 gap-8">
            <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{t.ingredients_title}</h3>
                <ul className="space-y-3">
                {recipe.ingredients.map((ing, idx) => (
                    <li key={idx} className="flex justify-between items-center py-2 border-b border-gray-50 last:border-0">
                    <span className="text-gray-700">{ing.name}</span>
                    <span className="font-semibold text-gray-900 bg-gray-100 px-2 py-1 rounded text-sm">
                        {scale(ing.amount)}
                    </span>
                    </li>
                ))}
                </ul>
            </div>

            <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{t.instructions_title}</h3>
                <div className="space-y-6">
                {recipe.steps.map((step, idx) => (
                    <div key={idx} className="flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-brand-100 text-brand-600 font-bold flex items-center justify-center text-sm">
                        {idx + 1}
                    </div>
                    <p className="text-gray-600 leading-relaxed mt-1">{step}</p>
                    </div>
                ))}
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};
