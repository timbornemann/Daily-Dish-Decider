
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
        .replace(/\bcan\b/g, 'Dose')
        .replace(/\bblock\b/g, 'Block')
        .replace(/\bhead\b/g, 'Kopf');
};

// Calculate difficulty based on recipe complexity, not just time
const calculateDifficulty = (recipeId: string, prepTime: string, steps: string[]): 'Easy' | 'Medium' | 'Hard' => {
    // Hard recipes: Complex techniques, multiple components, precise timing, advanced skills
    const hardRecipes = [
        'local-lasagne', // Multiple sauces (bolognese + béchamel), layering, baking
        'local-risotto-mushroom', // Constant stirring, precise timing, technique critical
        'local-sauerbraten', // Marinating 12-24hrs, long braising, complex sauce
        'local-quiche-lorraine', // Pastry making from scratch, multiple components
        'local-stuffed-peppers', // Multiple steps, stuffing technique, baking
        'local-ratatouille', // Multiple vegetables, precise timing for each
        'local-paella', // Multiple proteins, precise rice cooking, saffron technique
        'local-tiramisu', // Multiple layers, precise technique, no-bake but complex
        'local-banana-bread', // Baking, precise measurements, timing critical
        'local-kaiserschmarrn' // Special flipping technique, precise temperature
    ];
    
    // Medium recipes: Moderate complexity, some technique required, multiple steps
    const mediumRecipes = [
        'local-pancakes', // 8 steps, mixing technique, timing for flipping
        'local-carbonara', // Timing critical (eggs can scramble), technique required
        'local-chili-con-carne', // Multiple steps, simmering, seasoning
        'local-chicken-curry', // Multiple steps, sauce making, moderate complexity
        'local-schnitzel', // Breading technique (flour-egg-breadcrumb), frying
        'local-bratkartoffeln', // Frying technique, timing for crispiness
        'local-kaesespaetzle', // Multiple components, onion caramelization
        'local-teriyaki-chicken', // Sauce making, marinating, timing
        'local-beef-broccoli', // Stir fry technique, high heat, timing
        'local-pad-thai', // Multiple components, stir fry, balance of flavors
        'local-summer-rolls', // Assembly technique, rice paper handling
        'local-tacos', // Multiple components, seasoning meat, assembly
        'local-shakshuka', // One pot but technique for egg doneness
        'local-caesar-salad', // Multiple components, croutons, dressing
        'local-potato-soup', // Multiple steps, vegetable prep, simmering
        'local-fried-rice', // Technique required, high heat, timing
        'local-ramen-weeknight', // Multiple components, egg timing, broth
        'local-lentil-stew', // Multiple steps, vegetable prep, simmering
        'local-gnocchi-sage', // Simple but butter browning technique
        'local-fishsticks-mash', // Multiple components, mash technique
        'local-sheetpan-salmon', // Timing and technique, different cook times
        'local-tofu-stirfry', // Technique required, high heat, timing
        'local-poke-bowl', // Multiple components, rice cooking, prep
        'local-taco-salad', // Multiple components, seasoning, assembly
        'local-roast-chicken-tray', // Timing and technique, different cook times
        'local-roasted-veg-feta', // Timing important, vegetable prep
        'local-scrambled-eggs' // Technique for creamy texture, temperature control
    ];
    
    // Check if recipe is in hard list
    if (hardRecipes.includes(recipeId)) {
        return 'Hard';
    }
    
    // Check if recipe is in medium list
    if (mediumRecipes.includes(recipeId)) {
        return 'Medium';
    }
    
    // Default: Easy for simple recipes
    // Most breakfast items, simple pasta, grilled cheese, etc.
    return 'Easy';
};

const RECIPE_DEFINITIONS = [
  // --- EXISTING ---
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
    tags: ['Breakfast', 'Vegetarian', 'Sweet', 'Baking', 'Quick', 'Egg', 'Flour', 'Milk'],
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
    tags: ['Dinner', 'Italian', 'Vegetarian', 'Pasta', 'Quick', 'Garlic', 'One Pot', 'Simple'],
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
    tags: ['Breakfast', 'Quick', 'Vegetarian', 'Keto', 'Egg', 'High Protein', 'Simple', 'Low Carb'],
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
    tags: ['Lunch', 'Comfort Food', 'Vegetarian', 'Cheese', 'Bread', 'Quick', 'Simple', 'Grilled'],
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
    prepTime: '25 mins',
    tags: ['Dinner', 'Italian', 'Comfort Food', 'Pasta', 'Bacon', 'Egg', 'Creamy', 'Quick'],
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
    prepTime: '50 mins',
    tags: ['Dinner', 'Spicy', 'Hearty', 'Beef', 'Bean', 'One Pot', 'Mexican', 'Tomato'],
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
    tags: ['Breakfast', 'Sweet', 'Vegetarian', 'Bread', 'Egg', 'Cinnamon', 'Quick', 'Fried'],
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
    tags: ['Breakfast', 'Healthy', 'Vegetarian', 'Oat', 'Milk', 'Honey', 'Quick', 'Simple', 'Fiber'],
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
    tags: ['Lunch', 'Soup', 'Comfort Food', 'Potato', 'Vegetable', 'Cream', 'One Pot', 'Warm'],
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
    tags: ['Lunch', 'Salad', 'Vegetarian', 'Italian', 'Tomato', 'Mozzarella', 'Fresh', 'Quick', 'Basil'],
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
    tags: ['Dinner', 'Asian', 'Spicy', 'Chicken', 'Rice', 'Curry', 'Creamy', 'One Pot'],
    basePortions: 4
  },

  // --- NEW: GERMAN ---
  {
    id: 'local-schnitzel',
    key: 'schnitzel',
    ingredients: [
      { id: 'pork_chop', amount: '4' },
      { id: 'flour', amount: '100g' },
      { id: 'egg', amount: '2' },
      { id: 'bread', amount: '200g (Crumbs)' }, 
      { id: 'lemon', amount: '1' },
      { id: 'butter', amount: '100g' }
    ],
    prepTime: '30 mins',
    tags: ['Dinner', 'German', 'Meat', 'Pork', 'Fried', 'Breaded', 'Lemon', 'Classic'],
    basePortions: 4
  },
  {
    id: 'local-bratkartoffeln',
    key: 'bratkartoffeln',
    ingredients: [
      { id: 'potato', amount: '1kg' },
      { id: 'bacon', amount: '100g' },
      { id: 'onion', amount: '1' },
      { id: 'butter', amount: '2 tbsp' }
    ],
    prepTime: '25 mins',
    tags: ['Dinner', 'German', 'Comfort Food', 'Potato', 'Bacon', 'Fried', 'Onion', 'Classic'],
    basePortions: 4
  },
  {
    id: 'local-currywurst',
    key: 'currywurst',
    ingredients: [
      { id: 'sausage', amount: '4' },
      { id: 'onion', amount: '1' },
      { id: 'ketchup', amount: '200ml' },
      { id: 'curry_powder', amount: '2 tbsp' },
      { id: 'tomato_paste', amount: '1 tbsp' }
    ],
    prepTime: '20 mins',
    tags: ['Lunch', 'German', 'Street Food', 'Sausage', 'Quick', 'Spicy', 'Ketchup', 'Curry'],
    basePortions: 2
  },
  {
    id: 'local-kaesespaetzle',
    key: 'kaesespaetzle',
    ingredients: [
      { id: 'pasta', amount: '500g (Spaetzle)' }, // Mapping generic pasta to Spaetzle concept
      { id: 'cheese', amount: '250g' },
      { id: 'onion', amount: '3' },
      { id: 'butter', amount: '50g' }
    ],
    prepTime: '30 mins',
    tags: ['Dinner', 'German', 'Vegetarian', 'Pasta', 'Cheese', 'Onion', 'Creamy', 'Comfort Food'],
    basePortions: 4
  },

  // --- NEW: ITALIAN ---
  {
    id: 'local-risotto-mushroom',
    key: 'risotto_mushroom',
    ingredients: [
      { id: 'rice', amount: '300g (Arborio)' },
      { id: 'mushroom', amount: '300g' },
      { id: 'onion', amount: '1' },
      { id: 'parmesan', amount: '50g' },
      { id: 'chicken_broth', amount: '1 liter' }, // or veg broth
      { id: 'butter', amount: '50g' }
    ],
    prepTime: '45 mins',
    tags: ['Dinner', 'Italian', 'Vegetarian', 'Rice', 'Mushroom', 'Creamy', 'Risotto', 'One Pot'],
    basePortions: 4
  },
  {
    id: 'local-lasagne',
    key: 'lasagne',
    ingredients: [
      { id: 'ground_beef', amount: '500g' },
      { id: 'pasta', amount: '12 sheets' },
      { id: 'canned_tomato', amount: '2 cans' },
      { id: 'milk', amount: '500ml' },
      { id: 'flour', amount: '50g' },
      { id: 'cheese', amount: '200g' }
    ],
    prepTime: '1 hr 15 mins',
    tags: ['Dinner', 'Italian', 'Family', 'Pasta', 'Beef', 'Baking', 'Cheese', 'Tomato', 'Comfort Food'],
    basePortions: 6
  },
  {
    id: 'local-bruschetta',
    key: 'bruschetta',
    ingredients: [
      { id: 'bread', amount: '1 loaf' },
      { id: 'tomato', amount: '4' },
      { id: 'garlic', amount: '2 cloves' },
      { id: 'basil', amount: '1 handful' },
      { id: 'olive_oil', amount: '3 tbsp' }
    ],
    prepTime: '15 mins',
    tags: ['Snack', 'Italian', 'Appetizer', 'Bread', 'Tomato', 'Garlic', 'Basil', 'Quick', 'Fresh'],
    basePortions: 4
  },
  {
    id: 'local-tiramisu',
    key: 'tiramisu',
    ingredients: [
      { id: 'coffee', amount: '1 cup' },
      { id: 'cheese', amount: '500g (Mascarpone)' }, // Mapping cheese to Mascarpone
      { id: 'sugar', amount: '100g' },
      { id: 'cookie', amount: '200g (Ladyfingers)' },
      { id: 'chocolate', amount: '2 tbsp (Cocoa)' }
    ],
    prepTime: '30 mins',
    tags: ['Dessert', 'Italian', 'Sweet', 'Coffee', 'Cheese', 'Chocolate', 'No Bake', 'Creamy'],
    basePortions: 6
  },

  // --- NEW: ASIAN ---
  {
    id: 'local-fried-rice',
    key: 'fried_rice',
    ingredients: [
      { id: 'rice', amount: '400g (Cooked)' },
      { id: 'egg', amount: '2' },
      { id: 'frozen_peas', amount: '100g' },
      { id: 'carrot', amount: '1' },
      { id: 'soy_sauce', amount: '2 tbsp' }
    ],
    prepTime: '15 mins',
    tags: ['Dinner', 'Asian', 'Quick', 'Rice', 'Egg', 'Stir Fry', 'Soy Sauce', 'Simple'],
    basePortions: 2
  },
  {
    id: 'local-beef-broccoli',
    key: 'beef_broccoli',
    ingredients: [
      { id: 'steak', amount: '400g' },
      { id: 'broccoli', amount: '1 head' },
      { id: 'soy_sauce', amount: '3 tbsp' },
      { id: 'ginger', amount: '1 tbsp' },
      { id: 'garlic', amount: '2 cloves' },
      { id: 'sugar', amount: '1 tbsp' }
    ],
    prepTime: '20 mins',
    tags: ['Dinner', 'Asian', 'High Protein', 'Beef', 'Broccoli', 'Stir Fry', 'Soy Sauce', 'Ginger'],
    basePortions: 2
  },
  {
    id: 'local-teriyaki-chicken',
    key: 'teriyaki_chicken',
    ingredients: [
      { id: 'chicken_breast', amount: '500g' },
      { id: 'soy_sauce', amount: '4 tbsp' },
      { id: 'sugar', amount: '2 tbsp' }, // Honey ideally
      { id: 'ginger', amount: '1 tsp' },
      { id: 'rice', amount: '200g' }
    ],
    prepTime: '20 mins',
    tags: ['Dinner', 'Asian', 'Family', 'Chicken', 'Rice', 'Soy Sauce', 'Sweet', 'Quick'],
    basePortions: 4
  },
  {
    id: 'local-summer-rolls',
    key: 'summer_rolls',
    ingredients: [
      { id: 'tortilla', amount: '8 (Rice Paper)' }, // Using tortilla as mapping for wrapper
      { id: 'shrimp', amount: '200g' },
      { id: 'lettuce', amount: '1 head' },
      { id: 'cucumber', amount: '1' },
      { id: 'carrot', amount: '1' },
      { id: 'peanut_butter', amount: '2 tbsp' }
    ],
    prepTime: '35 mins',
    tags: ['Lunch', 'Asian', 'Healthy', 'Shrimp', 'Vegetable', 'Fresh', 'Rice Paper', 'Peanut'],
    basePortions: 4
  },
  {
    id: 'local-pad-thai',
    key: 'pad_thai',
    ingredients: [
      { id: 'pasta', amount: '200g (Rice Noodles)' },
      { id: 'egg', amount: '2' },
      { id: 'tofu', amount: '200g' }, // or chicken
      { id: 'nuts', amount: '2 tbsp (Peanuts)' },
      { id: 'soy_sauce', amount: '2 tbsp' },
      { id: 'lime', amount: '1' }
    ],
    prepTime: '30 mins',
    tags: ['Dinner', 'Thai', 'Noodles', 'Pasta', 'Tofu', 'Egg', 'Stir Fry', 'Peanut', 'Lime', 'Spicy'],
    basePortions: 2
  },

  // --- NEW: MEXICAN ---
  {
    id: 'local-tacos',
    key: 'tacos',
    ingredients: [
      { id: 'ground_beef', amount: '400g' },
      { id: 'tortilla', amount: '8' },
      { id: 'cheese', amount: '100g' },
      { id: 'lettuce', amount: '1/2 head' },
      { id: 'chili_flakes', amount: '1 tbsp' },
      { id: 'canned_tomato', amount: '100g (Salsa)' }
    ],
    prepTime: '20 mins',
    tags: ['Dinner', 'Mexican', 'Fun', 'Beef', 'Tortilla', 'Spicy', 'Cheese', 'Quick', 'Interactive'],
    basePortions: 4
  },
  {
    id: 'local-quesadillas',
    key: 'quesadillas',
    ingredients: [
      { id: 'tortilla', amount: '4' },
      { id: 'cheese', amount: '200g' },
      { id: 'bean', amount: '100g' } // optional
    ],
    prepTime: '10 mins',
    tags: ['Lunch', 'Mexican', 'Quick', 'Tortilla', 'Cheese', 'Bean', 'Simple', 'Grilled'],
    basePortions: 2
  },
  {
    id: 'local-guacamole',
    key: 'guacamole',
    ingredients: [
      { id: 'avocado', amount: '3' },
      { id: 'lime', amount: '1' },
      { id: 'onion', amount: '1/2' },
      { id: 'tomato', amount: '1' },
      { id: 'chips', amount: '1 bag' }
    ],
    prepTime: '10 mins',
    tags: ['Snack', 'Mexican', 'Party', 'Avocado', 'Lime', 'Fresh', 'Dip', 'Quick', 'No Cook'],
    basePortions: 4
  },

  // --- NEW: INT / OTHER ---
  {
    id: 'local-burger',
    key: 'burger',
    ingredients: [
      { id: 'ground_beef', amount: '400g' },
      { id: 'bun', amount: '4' },
      { id: 'cheese', amount: '4 slices' },
      { id: 'tomato', amount: '1' },
      { id: 'lettuce', amount: '4 leaves' }
    ],
    prepTime: '20 mins',
    tags: ['Dinner', 'American', 'Comfort Food', 'Beef', 'Bread', 'Cheese', 'Grilled', 'Quick'],
    basePortions: 4
  },
  {
    id: 'local-greek-salad',
    key: 'greek_salad',
    ingredients: [
      { id: 'cucumber', amount: '1' },
      { id: 'tomato', amount: '4' },
      { id: 'onion', amount: '1' },
      { id: 'cheese', amount: '200g (Feta)' },
      { id: 'olive_oil', amount: '3 tbsp' },
      { id: 'oregano', amount: '1 tsp' }
    ],
    prepTime: '15 mins',
    tags: ['Lunch', 'Greek', 'Healthy', 'Vegetarian', 'Cucumber', 'Tomato', 'Feta', 'Fresh', 'Olive Oil'],
    basePortions: 2
  },
  {
    id: 'local-shakshuka',
    key: 'shakshuka',
    ingredients: [
      { id: 'egg', amount: '4' },
      { id: 'canned_tomato', amount: '1 can' },
      { id: 'pepper', amount: '1' },
      { id: 'onion', amount: '1' },
      { id: 'bread', amount: 'for serving' }
    ],
    prepTime: '25 mins',
    tags: ['Breakfast', 'Middle Eastern', 'Vegetarian', 'Egg', 'Tomato', 'Spicy', 'One Pot', 'Bread'],
    basePortions: 2
  },
  {
    id: 'local-caesar-salad',
    key: 'caesar_salad',
    ingredients: [
      { id: 'lettuce', amount: '1 head' },
      { id: 'chicken_breast', amount: '2' },
      { id: 'bread', amount: '2 slices (Croutons)' },
      { id: 'parmesan', amount: '50g' },
      { id: 'mayo', amount: '2 tbsp' }
    ],
    prepTime: '20 mins',
    tags: ['Lunch', 'Salad', 'Healthy', 'Chicken', 'Lettuce', 'Bread', 'Parmesan', 'Creamy'],
    basePortions: 2
  },
  {
    id: 'local-banana-bread',
    key: 'banana_bread',
    ingredients: [
      { id: 'banana', amount: '3' },
      { id: 'flour', amount: '250g' },
      { id: 'sugar', amount: '100g' },
      { id: 'butter', amount: '100g' },
      { id: 'egg', amount: '1' }
    ],
    prepTime: '1 hr 15 mins',
    tags: ['Baking', 'Sweet', 'Snack', 'Banana', 'Flour', 'Sugar', 'Bread', 'Dessert'],
    basePortions: 8
  },
  {
    id: 'local-smoothie-bowl',
    key: 'smoothie_bowl',
    ingredients: [
      { id: 'berry', amount: '200g (Frozen)' },
      { id: 'banana', amount: '1' },
      { id: 'yogurt', amount: '100g' },
      { id: 'oat', amount: '2 tbsp' }
    ],
    prepTime: '5 mins',
    tags: ['Breakfast', 'Healthy', 'Quick', 'Berry', 'Banana', 'Yogurt', 'Oat', 'No Cook', 'Cold'],
    basePortions: 1
  },

  // --- EXTENDED COLLECTION ---
  {
    id: 'local-frozen-pizza-upgrade',
    key: 'frozen_pizza_upgrade',
    ingredients: [
      { id: 'frozen_pizza', amount: '1' },
      { id: 'tomato', amount: '2' },
      { id: 'mozzarella', amount: '1 ball' },
      { id: 'herbs', amount: '1 handful' }
    ],
    prepTime: '20 mins',
    tags: ['Dinner', 'Easy', 'Comfort Food', 'Pizza', 'Tomato', 'Mozzarella', 'Quick', 'Simple'],
    basePortions: 2
  },
  {
    id: 'local-doner-plate',
    key: 'doner_plate',
    ingredients: [
      { id: 'turkey', amount: '300g (strips)' },
      { id: 'pita', amount: '2' },
      { id: 'yogurt', amount: '150g' },
      { id: 'cucumber', amount: '1/2' },
      { id: 'tomato', amount: '1' },
      { id: 'lettuce', amount: '4 leaves' }
    ],
    prepTime: '25 mins',
    tags: ['Dinner', 'Street Food', 'Quick', 'Turkey', 'Pita', 'Yogurt', 'Fresh', 'Middle Eastern'],
    basePortions: 2
  },
  {
    id: 'local-roasted-veg-feta',
    key: 'roasted_veg_feta',
    ingredients: [
      { id: 'potato', amount: '600g' },
      { id: 'carrot', amount: '2' },
      { id: 'zucchini', amount: '1' },
      { id: 'olive_oil', amount: '3 tbsp' },
      { id: 'cheese', amount: '150g (Feta)' },
      { id: 'herbs', amount: '1 tsp' }
    ],
    prepTime: '40 mins',
    tags: ['Dinner', 'Vegetarian', 'Sheet Pan', 'Potato', 'Vegetable', 'Feta', 'Roasted', 'One Pan'],
    basePortions: 4
  },
  {
    id: 'local-ramen-weeknight',
    key: 'ramen_weeknight',
    ingredients: [
      { id: 'chicken_broth', amount: '800ml' },
      { id: 'soy_sauce', amount: '2 tbsp' },
      { id: 'pasta', amount: '200g (Noodles)' },
      { id: 'spinach', amount: '100g' },
      { id: 'chili_flakes', amount: '1 tsp' },
      { id: 'egg', amount: '2' }
    ],
    prepTime: '20 mins',
    tags: ['Dinner', 'Asian', 'Quick', 'Pasta', 'Broth', 'Egg', 'Spinach', 'Soup', 'One Pot'],
    basePortions: 2
  },
  {
    id: 'local-sauerbraten',
    key: 'sauerbraten',
    ingredients: [
      { id: 'steak', amount: '800g (roast)' },
      { id: 'vinegar', amount: '150ml' },
      { id: 'onion', amount: '1' },
      { id: 'carrot', amount: '1' },
      { id: 'beef_broth', amount: '500ml' }
    ],
    prepTime: '3 hrs (plus 12-24 hrs marinating)',
    tags: ['Dinner', 'German', 'Slow Cook', 'Beef', 'Vinegar', 'One Pot', 'Braised', 'Classic'],
    basePortions: 6
  },
  {
    id: 'local-paella',
    key: 'paella',
    ingredients: [
      { id: 'rice', amount: '400g' },
      { id: 'chicken_breast', amount: '300g' },
      { id: 'shrimp', amount: '200g' },
      { id: 'frozen_peas', amount: '150g' },
      { id: 'tomato_paste', amount: '2 tbsp' },
      { id: 'olive_oil', amount: '2 tbsp' }
    ],
    prepTime: '50 mins',
    tags: ['Dinner', 'Spanish', 'Seafood', 'Rice', 'Chicken', 'Shrimp', 'One Pot', 'Saffron'],
    basePortions: 4
  },
  {
    id: 'local-lentil-stew',
    key: 'lentil_stew',
    ingredients: [
      { id: 'lentil', amount: '300g' },
      { id: 'carrot', amount: '1' },
      { id: 'potato', amount: '2' },
      { id: 'chicken_broth', amount: '1 liter' },
      { id: 'bacon', amount: '80g' }
    ],
    prepTime: '55 mins',
    tags: ['Dinner', 'German', 'One Pot', 'Lentil', 'Vegetable', 'Bacon', 'Soup', 'Hearty'],
    basePortions: 4
  },
  {
    id: 'local-gnocchi-sage',
    key: 'gnocchi_sage',
    ingredients: [
      { id: 'pasta', amount: '500g (Gnocchi)' },
      { id: 'butter', amount: '80g' },
      { id: 'herbs', amount: '1 handful (Sage)' },
      { id: 'parmesan', amount: '50g' }
    ],
    prepTime: '15 mins',
    tags: ['Dinner', 'Italian', 'Quick', 'Pasta', 'Butter', 'Sage', 'Parmesan', 'Simple'],
    basePortions: 4
  },
  {
    id: 'local-fishsticks-mash',
    key: 'fishsticks_mash',
    ingredients: [
      { id: 'fish_sticks', amount: '10' },
      { id: 'potato', amount: '800g' },
      { id: 'butter', amount: '40g' },
      { id: 'milk', amount: '150ml' },
      { id: 'frozen_peas', amount: '150g' }
    ],
    prepTime: '30 mins',
    tags: ['Dinner', 'Family', 'Easy', 'Fish', 'Potato', 'Peas', 'Simple', 'Comfort Food'],
    basePortions: 4
  },
  {
    id: 'local-quiche-lorraine',
    key: 'quiche_lorraine',
    ingredients: [
      { id: 'flour', amount: '250g' },
      { id: 'butter', amount: '125g' },
      { id: 'egg', amount: '4' },
      { id: 'bacon', amount: '150g' },
      { id: 'cream', amount: '200ml' },
      { id: 'cheese', amount: '100g' }
    ],
    prepTime: '1 hr 15 mins',
    tags: ['Lunch', 'French', 'Baking', 'Egg', 'Bacon', 'Cream', 'Cheese', 'Pastry', 'Quiche'],
    basePortions: 6
  },
  {
    id: 'local-stuffed-peppers',
    key: 'stuffed_peppers',
    ingredients: [
      { id: 'pepper', amount: '4' },
      { id: 'ground_beef', amount: '400g' },
      { id: 'rice', amount: '200g (cooked)' },
      { id: 'onion', amount: '1' },
      { id: 'tomato_paste', amount: '2 tbsp' },
      { id: 'chicken_broth', amount: '300ml' }
    ],
    prepTime: '1 hr 15 mins',
    tags: ['Dinner', 'Comfort Food', 'Baking', 'Pepper', 'Beef', 'Rice', 'Stuffed', 'Oven'],
    basePortions: 4
  },
  {
    id: 'local-ratatouille',
    key: 'ratatouille',
    ingredients: [
      { id: 'zucchini', amount: '2' },
      { id: 'pepper', amount: '1' },
      { id: 'tomato', amount: '3' },
      { id: 'onion', amount: '1' },
      { id: 'olive_oil', amount: '2 tbsp' },
      { id: 'herbs', amount: '1 tsp' }
    ],
    prepTime: '40 mins',
    tags: ['Dinner', 'Vegetarian', 'French', 'Zucchini', 'Pepper', 'Tomato', 'Roasted', 'Stew'],
    basePortions: 4
  },
  {
    id: 'local-sheetpan-salmon',
    key: 'sheetpan_salmon',
    ingredients: [
      { id: 'salmon', amount: '4 fillets' },
      { id: 'potato', amount: '600g' },
      { id: 'broccoli', amount: '300g' },
      { id: 'olive_oil', amount: '3 tbsp' },
      { id: 'lemon', amount: '1' }
    ],
    prepTime: '30 mins',
    tags: ['Dinner', 'Seafood', 'Sheet Pan', 'Salmon', 'Potato', 'Broccoli', 'Roasted', 'One Pan', 'Lemon'],
    basePortions: 4
  },
  {
    id: 'local-tofu-stirfry',
    key: 'tofu_stirfry',
    ingredients: [
      { id: 'tofu', amount: '300g' },
      { id: 'broccoli', amount: '200g' },
      { id: 'carrot', amount: '1' },
      { id: 'garlic', amount: '2 cloves' },
      { id: 'ginger', amount: '1 thumb' },
      { id: 'soy_sauce', amount: '3 tbsp' }
    ],
    prepTime: '20 mins',
    tags: ['Dinner', 'Vegan', 'Stir Fry', 'Tofu', 'Broccoli', 'Carrot', 'Soy Sauce', 'Quick', 'Healthy'],
    basePortions: 3
  },
  {
    id: 'local-poke-bowl',
    key: 'poke_bowl',
    ingredients: [
      { id: 'rice', amount: '300g' },
      { id: 'salmon', amount: '250g' },
      { id: 'avocado', amount: '1' },
      { id: 'cucumber', amount: '1/2' },
      { id: 'soy_sauce', amount: '2 tbsp' },
      { id: 'lime', amount: '1' }
    ],
    prepTime: '25 mins',
    tags: ['Lunch', 'Bowl', 'Fresh', 'Rice', 'Salmon', 'Avocado', 'Cucumber', 'Asian', 'Healthy'],
    basePortions: 2
  },
  {
    id: 'local-taco-salad',
    key: 'taco_salad',
    ingredients: [
      { id: 'ground_beef', amount: '300g' },
      { id: 'lettuce', amount: '1 head' },
      { id: 'tomato', amount: '2' },
      { id: 'bean', amount: '1 can' },
      { id: 'pepper', amount: '1' },
      { id: 'cheese', amount: '100g' }
    ],
    prepTime: '20 mins',
    tags: ['Lunch', 'Salad', 'Mexican', 'Beef', 'Lettuce', 'Bean', 'Cheese', 'Spicy', 'Fresh'],
    basePortions: 3
  },
  {
    id: 'local-kaiserschmarrn',
    key: 'kaiserschmarrn',
    ingredients: [
      { id: 'flour', amount: '200g' },
      { id: 'egg', amount: '4' },
      { id: 'milk', amount: '250ml' },
      { id: 'sugar', amount: '60g' },
      { id: 'butter', amount: '50g' }
    ],
    prepTime: '35 mins',
    tags: ['Dessert', 'Austrian', 'Sweet', 'Flour', 'Egg', 'Sugar', 'Fried', 'Pancake', 'Classic'],
    basePortions: 4
  },
  {
    id: 'local-roast-chicken-tray',
    key: 'roast_chicken_tray',
    ingredients: [
      { id: 'chicken_breast', amount: '4' },
      { id: 'potato', amount: '800g' },
      { id: 'onion', amount: '2' },
      { id: 'olive_oil', amount: '3 tbsp' },
      { id: 'paprika', amount: '1 tbsp' }
    ],
    prepTime: '55 mins',
    tags: ['Dinner', 'Sheet Pan', 'Family', 'Chicken', 'Potato', 'Onion', 'Roasted', 'One Pan'],
    basePortions: 4
  },
  {
    id: 'local-overnight-oats',
    key: 'overnight_oats',
    ingredients: [
      { id: 'oat', amount: '1 cup' },
      { id: 'yogurt', amount: '200g' },
      { id: 'honey', amount: '1 tbsp' },
      { id: 'berry', amount: '150g (Frozen or fresh)' },
      { id: 'cinnamon', amount: '1 tsp' }
    ],
    prepTime: '5 mins (plus overnight)',
    tags: ['Breakfast', 'Prep Ahead', 'Healthy', 'Oat', 'Yogurt', 'Berry', 'Honey', 'No Cook', 'Cold'],
    basePortions: 2
  },
  {
    id: 'local-nachos-supreme',
    key: 'nachos_supreme',
    ingredients: [
      { id: 'chips', amount: '1 large bag' },
      { id: 'ground_beef', amount: '250g' },
      { id: 'bean', amount: '1 can' },
      { id: 'cheese', amount: '200g' },
      { id: 'pepper', amount: '1' },
      { id: 'tomato', amount: '2' }
    ],
    prepTime: '15 mins',
    tags: ['Snack', 'Party', 'Sharing', 'Chips', 'Beef', 'Bean', 'Cheese', 'Spicy', 'Baking', 'Quick'],
    basePortions: 4
  }
];

export const getLocalRecipes = (lang: Language): Recipe[] => {
    const t = translations[lang];

    return RECIPE_DEFINITIONS.map(def => {
        const content = (t.recipes as any)[def.key]; 
        
        if (!content) return null;

        return {
            id: def.id,
            title: content.title,
            description: content.description,
            steps: content.steps,
            ingredients: def.ingredients.map(ing => ({
                name: (t.ingredients as any)[ing.id] || ing.id, 
                amount: translateAmount(ing.amount, lang)
            })),
            prepTime: def.prepTime,
            tags: def.tags,
            basePortions: def.basePortions,
            source: 'local',
            difficulty: calculateDifficulty(def.id, def.prepTime, content.steps || [])
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
