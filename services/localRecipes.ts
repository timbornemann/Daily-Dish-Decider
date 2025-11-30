
import { Recipe, Ingredient } from '../types';
import { translations, Translation, Language } from '../translations';

// We define the structure and the keys here, but not the text.
// The text comes from the passed 't' (translation) object.
const RECIPE_DEFINITIONS = [
  {
    id: 'local-pancakes',
    key: 'pancakes',
    ingredients: [
      { id: 'flour', amount: '200g' },
      { id: 'milk', amount: '300ml' },
      { id: 'egg', amount: '2' },
      { id: 'butter', amount: '30g' },
      { id: 'sugar', amount: '1 tbsp' }
    ],
    prepTime: '20 mins',
    tags: ['Breakfast', 'Vegetarian', 'Sweet'],
    basePortions: 4
  },
  {
    id: 'local-spaghetti-aglio',
    key: 'spaghetti_aglio',
    ingredients: [
      { id: 'pasta', amount: '400g' },
      { id: 'garlic', amount: '4 cloves' },
      { id: 'olive_oil', amount: '100ml' },
      { id: 'chili_flakes', amount: '1 tsp' },
      { id: 'herbs', amount: '1 handful' }
    ],
    prepTime: '15 mins',
    tags: ['Dinner', 'Italian', 'Vegetarian'],
    basePortions: 4
  },
  {
    id: 'local-scrambled-eggs',
    key: 'scrambled_eggs',
    ingredients: [
      { id: 'egg', amount: '4' },
      { id: 'butter', amount: '1 tbsp' },
      { id: 'salt', amount: 'pinch' },
      { id: 'pepper_spice', amount: 'pinch' }
    ],
    prepTime: '10 mins',
    tags: ['Breakfast', 'Quick', 'Vegetarian', 'Keto'],
    basePortions: 2
  },
  {
    id: 'local-grilled-cheese',
    key: 'grilled_cheese',
    ingredients: [
      { id: 'bread', amount: '4 slices' },
      { id: 'cheese', amount: '4 slices' },
      { id: 'butter', amount: '2 tbsp' }
    ],
    prepTime: '10 mins',
    tags: ['Lunch', 'Comfort Food', 'Vegetarian'],
    basePortions: 2
  }
];

export const getLocalRecipes = (lang: Language): Recipe[] => {
    const t = translations[lang];

    return RECIPE_DEFINITIONS.map(def => {
        // Safe access to the recipe text in the current language
        // Cast as any because TS might not perfectly infer the dynamic key access
        const content = (t.recipes as any)[def.key]; 
        
        if (!content) return null;

        return {
            id: def.id,
            title: content.title,
            description: content.description,
            steps: content.steps,
            ingredients: def.ingredients.map(ing => ({
                name: (t.ingredients as any)[ing.id] || ing.id, // Translate ingredient name
                amount: ing.amount
            })),
            prepTime: def.prepTime,
            tags: def.tags,
            basePortions: def.basePortions,
            source: 'local'
        };
    }).filter(r => r !== null) as Recipe[];
};

export const findMatchingRecipes = (
  pantryItems: Ingredient[], 
  availableRecipes: Recipe[]
): Recipe[] => {
  if (pantryItems.length === 0) return [];
  
  const scored = availableRecipes.map(recipe => {
    let matches = 0;
    recipe.ingredients.forEach(req => {
      // Loose string matching
      const hasItem = pantryItems.some(
        p => p.name.toLowerCase().includes(req.name.toLowerCase()) || 
             req.name.toLowerCase().includes(p.name.toLowerCase())
      );
      if (hasItem) matches++;
    });

    const score = matches / recipe.ingredients.length;
    return { recipe, score, matches };
  });

  return scored
    .filter(s => s.matches > 0)
    .sort((a, b) => b.score - a.score)
    .map(s => s.recipe);
};
