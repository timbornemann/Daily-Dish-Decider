
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

const calculateDifficulty = (prepTime: string): 'Easy' | 'Medium' | 'Hard' => {
    // Basic heuristic: check numbers in string
    const match = prepTime.match(/(\d+)/);
    if (!match) return 'Medium';
    
    const mins = parseInt(match[0]);
    // If it mentions hours/hr, it's hard/long
    if (prepTime.toLowerCase().includes('hr') || prepTime.toLowerCase().includes('hour')) return 'Hard';
    
    if (mins <= 20) return 'Easy';
    if (mins <= 45) return 'Medium';
    return 'Hard';
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
    tags: ['Dinner', 'German', 'Meat'],
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
    tags: ['Dinner', 'German', 'Comfort Food'],
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
    tags: ['Lunch', 'German', 'Street Food'],
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
    tags: ['Dinner', 'German', 'Vegetarian'],
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
    prepTime: '40 mins',
    tags: ['Dinner', 'Italian', 'Vegetarian Option'],
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
    tags: ['Dinner', 'Italian', 'Family'],
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
    tags: ['Snack', 'Italian', 'Appetizer'],
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
    prepTime: '20 mins',
    tags: ['Dessert', 'Italian', 'Sweet'],
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
    tags: ['Dinner', 'Asian', 'Quick'],
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
    tags: ['Dinner', 'Asian', 'High Protein'],
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
    tags: ['Dinner', 'Asian', 'Family'],
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
    prepTime: '30 mins',
    tags: ['Lunch', 'Asian', 'Healthy'],
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
    prepTime: '25 mins',
    tags: ['Dinner', 'Thai', 'Noodles'],
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
    tags: ['Dinner', 'Mexican', 'Fun'],
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
    tags: ['Lunch', 'Mexican', 'Quick'],
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
    tags: ['Snack', 'Mexican', 'Party'],
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
    tags: ['Dinner', 'American', 'Comfort Food'],
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
    tags: ['Lunch', 'Greek', 'Healthy', 'Vegetarian'],
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
    tags: ['Breakfast', 'Middle Eastern', 'Vegetarian'],
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
    tags: ['Lunch', 'Salad', 'Healthy'],
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
    prepTime: '1 hr 10 mins',
    tags: ['Baking', 'Sweet', 'Snack'],
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
    tags: ['Breakfast', 'Healthy', 'Quick'],
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
    tags: ['Dinner', 'Easy', 'Comfort Food'],
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
    tags: ['Dinner', 'Street Food', 'Quick'],
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
    tags: ['Dinner', 'Vegetarian', 'Sheet Pan'],
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
    tags: ['Dinner', 'Asian', 'Quick'],
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
    prepTime: '3 hrs',
    tags: ['Dinner', 'German', 'Slow Cook'],
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
    prepTime: '45 mins',
    tags: ['Dinner', 'Spanish', 'Seafood'],
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
    prepTime: '50 mins',
    tags: ['Dinner', 'German', 'One Pot'],
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
    tags: ['Dinner', 'Italian', 'Quick'],
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
    tags: ['Dinner', 'Family', 'Easy'],
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
    prepTime: '1 hr',
    tags: ['Lunch', 'French', 'Baking'],
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
    prepTime: '1 hr',
    tags: ['Dinner', 'Comfort Food', 'Baking'],
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
    prepTime: '35 mins',
    tags: ['Dinner', 'Vegetarian', 'French'],
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
    tags: ['Dinner', 'Seafood', 'Sheet Pan'],
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
    tags: ['Dinner', 'Vegan', 'Stir Fry'],
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
    tags: ['Lunch', 'Bowl', 'Fresh'],
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
    tags: ['Lunch', 'Salad', 'Mexican'],
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
    prepTime: '30 mins',
    tags: ['Dessert', 'Austrian', 'Sweet'],
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
    prepTime: '50 mins',
    tags: ['Dinner', 'Sheet Pan', 'Family'],
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
    tags: ['Breakfast', 'Prep Ahead', 'Healthy'],
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
    tags: ['Snack', 'Party', 'Sharing'],
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
            difficulty: calculateDifficulty(def.prepTime)
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
