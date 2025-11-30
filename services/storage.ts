import { Ingredient, Recipe, ShoppingItem, UserPreferences } from '../types';

const KEYS = {
  PANTRY: 'ddd_pantry',
  SHOPPING: 'ddd_shopping',
  LIKED_RECIPES: 'ddd_liked',
  PREFS: 'ddd_prefs'
};

const DEFAULT_PREFS: UserPreferences = {
  dietaryRestrictions: [],
  theme: 'light',
  language: 'en',
  measurementSystem: 'metric',
  notificationsEnabled: true
};

export const StorageService = {
  getPantry: (): Ingredient[] => {
    const data = localStorage.getItem(KEYS.PANTRY);
    return data ? JSON.parse(data) : [];
  },
  savePantry: (items: Ingredient[]) => {
    localStorage.setItem(KEYS.PANTRY, JSON.stringify(items));
  },
  getShoppingList: (): ShoppingItem[] => {
    const data = localStorage.getItem(KEYS.SHOPPING);
    return data ? JSON.parse(data) : [];
  },
  saveShoppingList: (items: ShoppingItem[]) => {
    localStorage.setItem(KEYS.SHOPPING, JSON.stringify(items));
  },
  getLikedRecipes: (): Recipe[] => {
    const data = localStorage.getItem(KEYS.LIKED_RECIPES);
    return data ? JSON.parse(data) : [];
  },
  saveLikedRecipes: (recipes: Recipe[]) => {
    localStorage.setItem(KEYS.LIKED_RECIPES, JSON.stringify(recipes));
  },
  getPreferences: (): UserPreferences => {
    const data = localStorage.getItem(KEYS.PREFS);
    return data ? { ...DEFAULT_PREFS, ...JSON.parse(data) } : DEFAULT_PREFS;
  },
  savePreferences: (prefs: UserPreferences) => {
    localStorage.setItem(KEYS.PREFS, JSON.stringify(prefs));
  },
  clearAll: () => {
    localStorage.removeItem(KEYS.PANTRY);
    localStorage.removeItem(KEYS.SHOPPING);
    localStorage.removeItem(KEYS.LIKED_RECIPES);
    // We usually keep prefs, but for a full reset:
    localStorage.removeItem(KEYS.PREFS);
  }
};