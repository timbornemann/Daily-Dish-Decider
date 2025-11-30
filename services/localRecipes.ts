
import { Recipe, Ingredient } from '../types';
import { translations, Translation, Language } from '../translations';

// Helper to translate common units
const translateAmount = (amount: string, lang: Language): string => {
    if (lang !== 'de') return amount;
    return amount
        .replace(/\btbsp\b/g, 'EL')
        .replace(/\btsp\b/g, 'TL')
        .replace(/\bcup\b/g, 'Tasse')
        .replace(/\bcups\b/g, 'Tassen')
        .replace(/\bhandful\b/g, 'Handvoll')
        .replace(/\bpinch\b/g, 'Prise')
        .replace(/\bslices\b/g, 'Scheiben')
        .replace(/\bcloves\b/g, 'Zehen')
        .replace(/\bcan\b/g, 'Dose');
};

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
      { id: 'herbs', amount: '1 handful' } // parsley ideally
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
      { id: 'salt', amount: '1 pinch' },
      { id: 'pepper_spice', amount: '1 pinch' }
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
  },
  {
    id: 'local-carbonara',
    key: 'carbonara',
    ingredients: [
      { id: 'pasta', amount: '400g' },
      { id: 'egg', amount: '3' },
      { id: 'bacon', amount: '150g' },
      { id: 'parmesan', amount: '100g' },
      { id: 'pepper_spice', amount: '1 tbsp' }
    ],
    prepTime: '20 mins',
    tags: ['Dinner', 'Italian', 'Comfort Food'],
    basePortions: 4
  },
  {
    id: 'local-chili-con-carne',
    key: 'chili_con_carne',
    ingredients: [
        { id: 'ground_beef', amount: '500g' },
        { id: 'bean', amount: '1 can' },
        { id: 'canned_tomato', amount: '1 can' },
        { id: 'onion', amount: '1' },
        { id: 'chili_flakes', amount: '1 tbsp' }
    ],
    prepTime: '45 mins',
    tags: ['Dinner', 'Spicy', 'Hearty'],
    basePortions: 4
  },
  {
    id: 'local-french-toast',
    key: 'french_toast',
    ingredients: [
        { id: 'bread', amount: '4 slices' },
        { id: 'egg', amount: '2' },
        { id: 'milk', amount: '100ml' },
        { id: 'cinnamon', amount: '1 tsp' },
        { id: 'butter', amount: '1 tbsp' }
    ],
    prepTime: '15 mins',
    tags: ['Breakfast', 'Sweet', 'Vegetarian'],
    basePortions: 2
  },
  {
    id: 'local-oatmeal',
    key: 'oatmeal',
    ingredients: [
        { id: 'oat', amount: '1 cup' },
        { id: 'milk', amount: '2 cups' },
        { id: 'honey', amount: '1 tbsp' },
        { id: 'salt', amount: '1 pinch' }
    ],
    prepTime: '10 mins',
    tags: ['Breakfast', 'Healthy', 'Vegetarian'],
    basePortions: 2
  },
  {
    id: 'local-potato-soup',
    key: 'potato_soup',
    ingredients: [
        { id: 'potato', amount: '500g' },
        { id: 'carrot', amount: '2' },
        { id: 'onion', amount: '1' },
        { id: 'chicken_broth', amount: '1 liter' },
        { id: 'cream', amount: '100ml' }
    ],
    prepTime: '35 mins',
    tags: ['Lunch', 'Soup', 'Comfort Food'],
    basePortions: 4
  },
  {
    id: 'local-caprese',
    key: 'caprese',
    ingredients: [
        { id: 'tomato', amount: '3' },
        { id: 'mozzarella', amount: '2 balls' },
        { id: 'basil', amount: '1 handful' },
        { id: 'olive_oil', amount: '2 tbsp' },
        { id: 'vinegar', amount: '1 tbsp' }
    ],
    prepTime: '10 mins',
    tags: ['Lunch', 'Salad', 'Vegetarian', 'Italian'],
    basePortions: 2
  },
  {
    id: 'local-chicken-curry',
    key: 'chicken_curry',
    ingredients: [
        { id: 'chicken_breast', amount: '500g' },
        { id: 'rice', amount: '200g' },
        { id: 'onion', amount: '1' },
        { id: 'garlic', amount: '2 cloves' },
        { id: 'curry_powder', amount: '2 tbsp' },
        { id: 'cream', amount: '200ml' }
    ],
    prepTime: '30 mins',
    tags: ['Dinner', 'Asian Style', 'Spicy'],
    basePortions: 4
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
                amount: translateAmount(ing.amount, lang)
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
