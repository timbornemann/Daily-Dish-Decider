import { en } from './locales/en.js';
import { de } from './locales/de.js';

export type Language = 'en' | 'de';

export const translations = {
  en,
  de
};

// Define structure type from the 'en' object
export type Translation = typeof en;

// Mapping of Categories to Ingredient IDs (Fixed Keys)
export const COMMON_ITEMS_IDS: Record<string, Array<keyof typeof en.ingredients>> = {
  'Produce': ['onion', 'garlic', 'potato', 'carrot', 'tomato', 'lemon', 'lime', 'banana', 'spinach', 'pepper', 'cucumber', 'zucchini', 'lettuce', 'apple', 'orange', 'berry', 'avocado', 'mushroom', 'ginger', 'chili', 'broccoli', 'cauliflower', 'sweet_potato', 'herbs'],
  'Dairy': ['milk', 'egg', 'butter', 'cheese', 'yogurt', 'cream', 'parmesan', 'mozzarella', 'cheddar', 'sour_cream', 'cottage_cheese', 'almond_milk', 'oat_milk', 'cream_cheese'],
  'Meat': ['chicken_breast', 'ground_beef', 'bacon', 'salmon', 'sausage', 'tofu', 'steak', 'pork_chop', 'turkey', 'ham', 'salami', 'prosciutto', 'shrimp', 'tuna'],
  'Bakery': ['bread', 'toast', 'bagel', 'tortilla', 'bun', 'pita', 'croissant', 'roll', 'pizza_dough'],
  'Frozen': ['frozen_peas', 'frozen_pizza', 'ice_cream', 'frozen_berries', 'fries', 'frozen_spinach', 'fish_sticks', 'frozen_corn'],
  'Pantry': ['rice', 'pasta', 'flour', 'sugar', 'olive_oil', 'veg_oil', 'canned_tomato', 'bean', 'lentil', 'quinoa', 'couscous', 'oat', 'cereal', 'chicken_broth', 'beef_broth', 'tomato_paste', 'honey', 'maple_syrup', 'peanut_butter', 'jam', 'baking_powder', 'yeast'],
  'Spices': ['salt', 'pepper_spice', 'cumin', 'paprika', 'oregano', 'basil', 'soy_sauce', 'vinegar', 'garlic_powder', 'onion_powder', 'chili_flakes', 'cinnamon', 'turmeric', 'curry_powder', 'thyme', 'rosemary', 'mustard', 'mayo', 'ketchup', 'hot_sauce'],
  'Snacks': ['chips', 'nuts', 'chocolate', 'cracker', 'popcorn', 'cookie', 'granola_bar', 'dried_fruit'],
  'Beverages': ['coffee', 'tea', 'water', 'juice', 'soda', 'beer', 'wine', 'sparkling_water'],
  'General': ['paper_towel', 'toilet_paper', 'dish_soap', 'sponge', 'foil']
};
