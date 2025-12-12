import React, { useMemo, useState, useEffect } from 'react';
import { ChevronLeft, Users, Clock, ShoppingBag, ChefHat, PlayCircle } from 'lucide-react';
import { Recipe, Ingredient, RecipeStep } from '../types';
import { translations, Language } from '../translations';
import { getRecipeImageUrl, handleImageError } from '../utils/imageUtils';
import { getSubstitutions, SubstitutionOption } from '../services/substitutions';
import { applySubstitutionsToText, parseSubstitutionsInText, extractDurationFromText } from '../utils/textUtils';
import { CookingMode } from './CookingMode';

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
  const [isCookingMode, setIsCookingMode] = useState(false);
  const [savedStepIndex, setSavedStepIndex] = useState(0);

  const t = translations[lang];

  // Check for saved progress on mount
  useEffect(() => {
      const saved = localStorage.getItem(`cookingState_${recipe.id}`);
      if (saved) {
          try {
              const { step } = JSON.parse(saved);
              setSavedStepIndex(step);
          } catch (e) {
              console.error("Failed to parse saved cooking state", e);
          }
      }
  }, [recipe.id]);

  const handleStepChange = (index: number) => {
      setSavedStepIndex(index);
      localStorage.setItem(`cookingState_${recipe.id}`, JSON.stringify({ step: index }));
  };

  const clearProgress = () => {
      localStorage.removeItem(`cookingState_${recipe.id}`);
      setSavedStepIndex(0);
      setIsCookingMode(false);
  };

  const getIngredientName = (id: string) => (t.ingredients as any)[id] || id;

  const scaleAmount = (amountStr: string, multiplier = 1) => {
    const numericPart = parseFloat(amountStr);
    if (isNaN(numericPart)) return amountStr;
    const ratio = (portions / (recipe.basePortions || 2)) * multiplier;
    const newVal = (numericPart * ratio);
    const suffix = amountStr.replace(/[\d\s.]/g, '');
    return newVal % 1 === 0 ? `${newVal.toFixed(0)}${suffix}` : `${newVal.toFixed(1)}${suffix}`;
  };

  const scale = (amountStr: string) => scaleAmount(amountStr);

  const getIngredientAmount = (ingredientId: string) => {
    const match = recipe.ingredients.find(ing => ing.id === ingredientId);
    return match ? scale(match.amount) : '';
  };

  const getSubstitutionAmount = (ingredientId: string, option?: SubstitutionOption) => {
    const match = recipe.ingredients.find(ing => ing.id === ingredientId);
    if (!match) return '';

    // Explicit Unit Override (e.g. Egg -> 60g Applesauce)
    if (option?.unit) {
      // Scale numerical amount by ratio
      const numeric = parseFloat(match.amount);
      if (isNaN(numeric)) return scale(match.amount); // Fallback

      const scaledOriginal = portions / (recipe.basePortions || 2) * numeric;
      const subValue = scaledOriginal * (option.ratio || 1);
      return `${subValue.toFixed(0)}${option.unit}`;
    }

    // Default: Scale existing amount string by ratio
    return option?.ratio ? scaleAmount(match.amount, option.ratio) : scale(match.amount);
  };

  const getMissingIngredients = () => {
    const missing: string[] = [];
    recipe.ingredients.forEach(ing => {
      // Check if pantry has this ID (preferred) or name match (fallback)
      // Pantry items have .ingredientId (canonical) and .name (display/custom)
      const hasItem = pantryItems.some(p =>
        (p.ingredientId && p.ingredientId === ing.id) ||
        (p.name && p.name.toLowerCase() === getIngredientName(ing.id).toLowerCase())
      );

      if (!hasItem) missing.push(getIngredientName(ing.id));
    });
    return missing;
  };

  const missingItems = getMissingIngredients();

  // Use IDs for set to be robust
  const missingIds = useMemo(() => {
    const ids = new Set<string>();
    recipe.ingredients.forEach(ing => {
      const hasItem = pantryItems.some(p =>
        (p.ingredientId && p.ingredientId === ing.id)
      );
      if (!hasItem) ids.add(ing.id);
    });
    return ids;
  }, [recipe.ingredients, pantryItems]);


  const handleUseAlternative = (name: string, amount?: string) => {
    const label = amount ? `${name} (${amount})` : name;
    onAddToShoppingList([label]);
  };

  // We need state for active substitutions: Record<originalId, selectedOption>
  const [activeSubs, setActiveSubs] = useState<Record<string, SubstitutionOption | null>>({});

  const handleApplySubstitution = (originalId: string, option: SubstitutionOption, amount: string) => {
    setActiveSubs(prev => ({ ...prev, [originalId]: option }));
  };

  const renderSubstitutions = (ingredientId: string) => {
    const alternatives = getSubstitutions(ingredientId);
    if (!alternatives.length) return null;
    const ingredientName = getIngredientName(ingredientId);

    return (
      <details className="bg-white/60 dark:bg-gray-800/60 rounded-lg border border-orange-100 dark:border-orange-900/40 p-3" open>
        <summary className="cursor-pointer font-semibold text-orange-800 dark:text-orange-200 text-sm flex items-center justify-between">
          <span>{t.show_alternatives} {ingredientName}</span>
        </summary>
        <div className="mt-3 space-y-3">
          {alternatives.map((alt, idx) => {
            const altName = getIngredientName(alt.id);
            const key = `${ingredientId}-${alt.id}-${idx}`;
            const defaultAmount = getSubstitutionAmount(ingredientId, alt);
            const amount = substitutionAmounts[key] ?? defaultAmount;

            return (
              <div
                key={key}
                className="flex flex-col gap-2 rounded-md bg-orange-50 dark:bg-orange-900/30 p-3 border border-orange-100 dark:border-orange-900/60"
              >
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <p className="font-semibold text-orange-900 dark:text-orange-100 text-sm">{altName}</p>
                    {alt.note && (
                      <p className="text-xs text-orange-700 dark:text-orange-300">{alt.note}</p>
                    )}
                  </div>
                </div>
                <div className="flex gap-2 items-center">
                  <input
                    value={amount}
                    onChange={(e) => setSubstitutionAmounts(prev => ({ ...prev, [key]: e.target.value }))}
                    placeholder={defaultAmount || t.amount_placeholder}
                    className="flex-1 text-sm px-3 py-2 rounded-lg border border-orange-200 dark:border-orange-800 bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100"
                  />
                  <button
                    onClick={() => handleApplySubstitution(ingredientId, alt, amount)}
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

  const getStepText = (step: RecipeStep) => typeof step === 'string' ? step : step.text;

  // --- Render ---

  if (isCookingMode) {
      return (
          <CookingMode
              recipe={recipe}
              initialStepIndex={savedStepIndex}
              onClose={() => setIsCookingMode(false)}
              onFinish={clearProgress}
              onStepChange={handleStepChange}
              lang={lang}
          />
      );
  }

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
        
        {/* Floating Start Button if saved progress or general */}
        <button
            onClick={() => setIsCookingMode(true)}
            className="absolute bottom-6 right-6 bg-brand-500 text-white p-4 rounded-full shadow-lg hover:bg-brand-600 transition-transform active:scale-95 flex items-center justify-center gap-2"
            title={(t as any).start_cooking}
        >
            <ChefHat size={24} />
            {savedStepIndex > 0 && <span className="font-bold text-sm bg-white text-brand-500 px-1.5 rounded-md absolute -top-2 -right-2 border border-brand-500">{(t as any).resume_cooking}</span>}
        </button>
      </div>

      <div className="p-6 pb-24 max-w-2xl mx-auto">
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
                  .filter(ing => missingIds.has(ing.id))
                  .map(ing => {
                    const ingName = getIngredientName(ing.id);
                    return (
                      <div key={ing.id} className="space-y-2">
                        <p className="font-semibold text-sm text-orange-900 dark:text-orange-100 flex items-center justify-between">
                          <span>{ingName}</span>
                          {getIngredientAmount(ing.id) && (
                            <span className="text-[11px] text-orange-700 dark:text-orange-300 bg-white/60 dark:bg-orange-900/40 px-2 py-1 rounded-full border border-orange-200 dark:border-orange-800">
                              {t.original_amount}: {getIngredientAmount(ing.id)}
                            </span>
                          )}
                        </p>
                        {renderSubstitutions(ing.id)}
                      </div>
                    )
                  })}
              </div>
            </div>
          </div>
        )}

        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">{t.ingredients_title}</h3>
            <ul className="space-y-3">
              {recipe.ingredients.map((ing, idx) => {
                const sub = activeSubs[ing.id];
                if (sub) {
                  // Render substituted ingredient
                  const subName = getIngredientName(sub.id);
                  // Use scaled amount from substitution Logic OR just fallback to 1:1 if complexity is too high
                  // Ideally we want to use the customized amount if possible
                  const scaleRatio = sub.ratio || 1;
                  const scaledAmount = scaleAmount(ing.amount, scaleRatio); // Simplified
                  return (
                    <li key={idx} className="flex justify-between items-center py-2 border-b border-gray-50 dark:border-gray-800 last:border-0 bg-green-50 dark:bg-green-900/20 px-2 rounded -mx-2">
                      <div className="flex flex-col">
                        <span className="text-green-700 dark:text-green-300 font-medium">{subName}</span>
                        <span className="text-xs text-green-600/70 dark:text-green-400/70 strike-through line-through decoration-green-500/50">
                          {t.instead_of} {getIngredientName(ing.id)}
                        </span>
                      </div>
                      <span className="font-semibold text-green-900 dark:text-green-100 bg-green-100 dark:bg-green-800 px-2 py-1 rounded text-sm">
                        {scaledAmount}
                      </span>
                    </li>
                  );
                }
                return (
                  <li key={idx} className="flex justify-between items-center py-2 border-b border-gray-50 dark:border-gray-800 last:border-0">
                    <span className="text-gray-700 dark:text-gray-300">{getIngredientName(ing.id)}</span>
                    <span className="font-semibold text-gray-900 dark:text-gray-100 bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded text-sm">
                      {scale(ing.amount)}
                    </span>
                  </li>
                );
              })}
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">{t.instructions_title}</h3>
            
            <div className="mb-6">
                <button
                    onClick={() => setIsCookingMode(true)}
                    className="w-full py-3 bg-brand-500 text-white font-bold rounded-xl flex items-center justify-center gap-2 hover:bg-brand-600 transition-colors shadow-sm"
                >
                    <PlayCircle size={20} /> {(t as any).start_cooking}
                </button>
            </div>

            <div className="space-y-6">
              {recipe.steps.map((step, idx) => {
                const stepText = getStepText(step);

                // Prepare substitutions map for this view
                const textSubs: Record<string, string> = {};

                // Helper to calculate amount string based on ratio (ignoring portion scaling for text consistency)
                const getBaseSubAmount = (amountStr: string, ratio: number, newUnit?: string) => {
                  const numericPart = parseFloat(amountStr);
                  if (isNaN(numericPart)) return amountStr; // Fallback
                  const newVal = numericPart * ratio;

                  if (newUnit) {
                    return newVal % 1 === 0 ? `${newVal.toFixed(0)}${newUnit}` : `${newVal.toFixed(1)}${newUnit}`;
                  }

                  const suffix = amountStr.replace(/[\d\s.]/g, '');
                  // Format nicely
                  return newVal % 1 === 0 ? `${newVal.toFixed(0)}${suffix}` : `${newVal.toFixed(1)}${suffix}`;
                };

                Object.entries(activeSubs).forEach(([id, subOption]: [string, SubstitutionOption | null]) => {
                  if (subOption) {
                    const oldName = getIngredientName(id);
                    const newName = getIngredientName(subOption.id);

                    if (oldName && newName) {
                      // 1. Basic Name Replacement
                      textSubs[oldName] = newName;

                      // 2. Amount + Name Replacement (Contextual)
                      // Find the original ingredient definition to get the base amount text
                      const originalIng = recipe.ingredients.find(i => i.id === id);
                      if (originalIng && originalIng.amount) {
                        const oldAmount = originalIng.amount; // e.g. "80g" or "1 tsp"
                        const ratio = subOption.ratio || 1;
                        const newAmount = getBaseSubAmount(oldAmount, ratio, subOption.unit);

                        // Add combinations to the map
                        // Case A: "80g Sugar" (Space)
                        textSubs[`${oldAmount} ${oldName}`] = `${newAmount} ${newName}`;
                        // Case B: "80gSugar" (No Space - likely for ml/l)
                        textSubs[`${oldAmount}${oldName}`] = `${newAmount} ${newName}`;

                        // Handle Variants (Singular/Plural)
                        const variants = (t as any).ingredient_variants?.[id] as string[] || [];
                        variants.forEach(variant => {
                          // Add pure name replacement for variant
                          textSubs[variant] = newName;

                          // Add amount + variant replacement
                          textSubs[`${oldAmount} ${variant}`] = `${newAmount} ${newName}`;
                          textSubs[`${oldAmount}${variant}`] = `${newAmount} ${newName}`;
                        });
                      }
                    }
                  }
                });

                const segments = parseSubstitutionsInText(stepText, textSubs);

                return (
                  <div key={idx} className="flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-brand-100 dark:bg-brand-900 text-brand-600 dark:text-brand-300 font-bold flex items-center justify-center text-sm">
                      {idx + 1}
                    </div>
                    <div className="flex flex-col">
                        <p className="text-gray-600 dark:text-gray-300 leading-relaxed mt-1">
                        {segments.map((seg, i) => (
                            seg.isSubstitution ? (
                            <span key={i} className="text-green-600 dark:text-green-400 font-bold relative group cursor-help">
                                {seg.text}
                                <span className="hidden group-hover:inline absolute bottom-full left-1/2 -translate-x-1/2 mb-1 px-2 py-1 bg-gray-800 text-white text-xs rounded whitespace-nowrap z-10">
                                {t.instead_of ? `${t.instead_of}: ` : 'Was: '}{seg.originalName}
                                </span>
                                <span className="text-[10px] text-green-500/70 font-normal ml-1">
                                ({t.instead_of || 'was'} {seg.originalName})
                                </span>
                            </span>
                            ) : (
                            <span key={i}>{seg.text}</span>
                            )
                        ))}
                        </p>
                        {/* Show timer hint if step object has duration or auto-detected */}
                        {(() => {
                           const duration = typeof step === 'object' && step.durationMinutes ? step.durationMinutes : extractDurationFromText(stepText);
                           if (duration) {
                             return (
                               <div className="flex items-center gap-1.5 text-orange-500 text-xs font-bold mt-1.5">
                                   <Clock size={12} /> {duration} {(t as any).timer_hint}
                               </div>
                             );
                           }
                           return null;
                        })()}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
