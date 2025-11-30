
export interface Ingredient {
  id: string;
  name: string;
  quantity: string;
  category: string;
  expiryDate?: string;
  openedDate?: string;
  daysGoodAfterOpen?: number;
}

export interface RecipeIngredient {
  name: string;
  amount: string;
}

export interface Recipe {
  id: string;
  title: string;
  description: string;
  ingredients: RecipeIngredient[];
  steps: string[];
  prepTime: string;
  calories?: number;
  tags: string[];
  basePortions: number;
  source?: 'ai' | 'local' | 'user'; // New field
}

export interface ShoppingItem {
  id: string;
  name: string;
  category: string;
  checked: boolean;
}

export enum AppView {
  SWIPE = 'swipe',
  COOKBOOK = 'cookbook', // New view
  PANTRY = 'pantry',
  SHOPPING = 'shopping',
  FAVORITES = 'favorites',
  DETAIL = 'detail',
  SETTINGS = 'settings'
}

export interface UserPreferences {
  dietaryRestrictions: string[]; // e.g., 'vegetarian', 'gluten-free'
  theme: 'light' | 'dark';
  language: 'en' | 'de';
  measurementSystem: 'metric' | 'imperial';
  notificationsEnabled: boolean;
}