
import { Recipe, Ingredient } from '../types';
import { Language } from '../translations';

const COMMON_RECIPES_EN: Recipe[] = [
  {
    id: 'local-pancakes',
    title: 'Classic Pancakes',
    description: 'Fluffy homemade pancakes perfect for breakfast.',
    ingredients: [
      { name: 'Flour', amount: '1.5 cups' },
      { name: 'Milk', amount: '1.25 cups' },
      { name: 'Eggs', amount: '1' },
      { name: 'Butter', amount: '3 tbsp' },
      { name: 'Sugar', amount: '1 tbsp' }
    ],
    steps: [
      'Mix dry ingredients in a bowl.',
      'Whisk wet ingredients in another bowl.',
      'Combine both mixtures until just moistened.',
      'Pour batter onto a hot griddle and cook until bubbles form.'
    ],
    prepTime: '20 mins',
    tags: ['Breakfast', 'Vegetarian', 'Sweet'],
    basePortions: 4,
    source: 'local'
  },
  {
    id: 'local-spaghetti-aglio',
    title: 'Spaghetti Aglio e Olio',
    description: 'A traditional Italian pasta dish with garlic and oil.',
    ingredients: [
      { name: 'Spaghetti', amount: '400g' },
      { name: 'Garlic', amount: '4 cloves' },
      { name: 'Olive Oil', amount: '1/2 cup' },
      { name: 'Chili Flakes', amount: '1 tsp' },
      { name: 'Parsley', amount: '1 handful' }
    ],
    steps: [
      'Boil pasta in salted water.',
      'Sauté sliced garlic in generous olive oil until golden.',
      'Add chili flakes and some pasta water to the oil.',
      'Toss pasta in the sauce and garnish with parsley.'
    ],
    prepTime: '15 mins',
    tags: ['Dinner', 'Italian', 'Vegetarian'],
    basePortions: 4,
    source: 'local'
  },
  {
    id: 'local-scrambled-eggs',
    title: 'Creamy Scrambled Eggs',
    description: 'Rich and creamy eggs for a quick meal.',
    ingredients: [
      { name: 'Eggs', amount: '4' },
      { name: 'Butter', amount: '1 tbsp' },
      { name: 'Salt', amount: 'pinch' },
      { name: 'Pepper', amount: 'pinch' }
    ],
    steps: [
      'Whisk eggs with salt and pepper.',
      'Melt butter in a pan over low heat.',
      'Pour in eggs and stir gently and continuously.',
      'Remove from heat while still slightly runny.'
    ],
    prepTime: '10 mins',
    tags: ['Breakfast', 'Quick', 'Vegetarian', 'Keto'],
    basePortions: 2,
    source: 'local'
  },
  {
    id: 'local-grilled-cheese',
    title: 'Ultimate Grilled Cheese',
    description: 'Crispy bread with melted cheese filling.',
    ingredients: [
      { name: 'Bread', amount: '4 slices' },
      { name: 'Cheese', amount: '4 slices' },
      { name: 'Butter', amount: '2 tbsp' }
    ],
    steps: [
      'Butter one side of each bread slice.',
      'Place bread butter-side down in pan.',
      'Add cheese and top with second slice (butter-side up).',
      'Grill until golden brown on both sides.'
    ],
    prepTime: '10 mins',
    tags: ['Lunch', 'Comfort Food', 'Vegetarian'],
    basePortions: 2,
    source: 'local'
  }
];

const COMMON_RECIPES_DE: Recipe[] = [
  {
    id: 'local-pancakes',
    title: 'Klassische Pfannkuchen',
    description: 'Fluffige Pfannkuchen, perfekt für das Frühstück.',
    ingredients: [
      { name: 'Mehl', amount: '200g' },
      { name: 'Milch', amount: '300ml' },
      { name: 'Eier', amount: '2' },
      { name: 'Butter', amount: '30g' },
      { name: 'Zucker', amount: '1 EL' }
    ],
    steps: [
      'Trockene Zutaten in einer Schüssel mischen.',
      'Nasse Zutaten verquirlen und untermischen.',
      'Teig in eine heiße Pfanne geben.',
      'Backen bis Blasen entstehen, dann wenden.'
    ],
    prepTime: '20 Min',
    tags: ['Frühstück', 'Vegetarisch', 'Süß'],
    basePortions: 4,
    source: 'local'
  },
  {
    id: 'local-spaghetti-aglio',
    title: 'Spaghetti Aglio e Olio',
    description: 'Klassische italienische Pasta mit Knoblauch und Öl.',
    ingredients: [
      { name: 'Spaghetti', amount: '400g' },
      { name: 'Knoblauch', amount: '4 Zehen' },
      { name: 'Olivenöl', amount: '100ml' },
      { name: 'Chiliflocken', amount: '1 TL' },
      { name: 'Petersilie', amount: '1 Handvoll' }
    ],
    steps: [
      'Pasta in Salzwasser kochen.',
      'Knoblauch in Öl goldgelb anbraten.',
      'Chili und etwas Nudelwasser hinzufügen.',
      'Pasta in der Soße schwenken und mit Petersilie garnieren.'
    ],
    prepTime: '15 Min',
    tags: ['Abendessen', 'Italienisch', 'Vegetarisch'],
    basePortions: 4,
    source: 'local'
  },
  {
    id: 'local-scrambled-eggs',
    title: 'Cremiges Rührei',
    description: 'Reichhaltiges und cremiges Ei für eine schnelle Mahlzeit.',
    ingredients: [
      { name: 'Eier', amount: '4' },
      { name: 'Butter', amount: '1 EL' },
      { name: 'Salz', amount: 'Prise' },
      { name: 'Pfeffer', amount: 'Prise' }
    ],
    steps: [
      'Eier mit Salz und Pfeffer verquirlen.',
      'Butter bei niedriger Hitze schmelzen.',
      'Eier hineingeben und sanft rühren.',
      'Vom Herd nehmen, solange sie noch leicht flüssig sind.'
    ],
    prepTime: '10 Min',
    tags: ['Frühstück', 'Schnell', 'Vegetarisch', 'Keto'],
    basePortions: 2,
    source: 'local'
  },
  {
    id: 'local-grilled-cheese',
    title: 'Grilled Cheese Sandwich',
    description: 'Knuspriges Brot mit geschmolzenem Käse.',
    ingredients: [
      { name: 'Brot', amount: '4 Scheiben' },
      { name: 'Käse', amount: '4 Scheiben' },
      { name: 'Butter', amount: '2 EL' }
    ],
    steps: [
      'Brot einseitig buttern.',
      'Mit der Butterseite nach unten in die Pfanne legen.',
      'Käse darauflegen und zweite Scheibe darauf (Butter oben).',
      'Goldbraun braten von beiden Seiten.'
    ],
    prepTime: '10 Min',
    tags: ['Mittagessen', 'Soulfood', 'Vegetarisch'],
    basePortions: 2,
    source: 'local'
  }
];

export const getLocalRecipes = (lang: Language): Recipe[] => {
    return lang === 'de' ? COMMON_RECIPES_DE : COMMON_RECIPES_EN;
};

export const findMatchingRecipes = (
  pantryItems: Ingredient[], 
  availableRecipes: Recipe[]
): Recipe[] => {
  if (pantryItems.length === 0) return [];
  
  // Scoring Logic: +1 for every matching ingredient
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

    // Calculate percentage of matched ingredients
    const score = matches / recipe.ingredients.length;
    return { recipe, score, matches };
  });

  // Filter: Must have at least 1 ingredient match to show up as "suggested"
  // Sort by highest match score
  return scored
    .filter(s => s.matches > 0)
    .sort((a, b) => b.score - a.score)
    .map(s => s.recipe);
};
