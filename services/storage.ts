
import { BanditStats, FeedbackEvent, Ingredient, Recipe, ShoppingItem, UserPreferences } from '../types';

const KEYS = {
  PANTRY: 'ddd_pantry',
  SHOPPING: 'ddd_shopping',
  LIKED_RECIPES: 'ddd_liked',
  USER_RECIPES: 'ddd_user_recipes',
  PREFS: 'ddd_prefs',
  FEEDBACK: 'ddd_feedback_events',
  BANDIT: 'ddd_bandit_stats'
};

const DEFAULT_PREFS: UserPreferences = {
  dietaryRestrictions: [],
  theme: 'light',
  language: 'en',
  measurementSystem: 'metric',
  notificationsEnabled: true,
  tasteProfile: {}
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
  getUserRecipes: (): Recipe[] => {
    const data = localStorage.getItem(KEYS.USER_RECIPES);
    return data ? JSON.parse(data) : [];
  },
  saveUserRecipes: (recipes: Recipe[]) => {
    localStorage.setItem(KEYS.USER_RECIPES, JSON.stringify(recipes));
  },
  getPreferences: (): UserPreferences => {
    const data = localStorage.getItem(KEYS.PREFS);
    // Merge with default to ensure new fields (like tasteProfile) exist
    return data ? { ...DEFAULT_PREFS, ...JSON.parse(data) } : DEFAULT_PREFS;
  },
  savePreferences: (prefs: UserPreferences) => {
    localStorage.setItem(KEYS.PREFS, JSON.stringify(prefs));
  },
  getFeedbackEvents: (): FeedbackEvent[] => {
    const data = localStorage.getItem(KEYS.FEEDBACK);
    return data ? JSON.parse(data) : [];
  },
  appendFeedbackEvent: (event: FeedbackEvent) => {
    const events = StorageService.getFeedbackEvents();
    const updated = [...events, event].slice(-500); // keep last 500 events to avoid unbounded growth
    localStorage.setItem(KEYS.FEEDBACK, JSON.stringify(updated));
  },
  getBanditStats: (): Record<string, BanditStats> => {
    const data = localStorage.getItem(KEYS.BANDIT);
    return data ? JSON.parse(data) : {};
  },
  saveBanditStats: (stats: Record<string, BanditStats>) => {
    localStorage.setItem(KEYS.BANDIT, JSON.stringify(stats));
  },
  clearAll: () => {
    localStorage.removeItem(KEYS.PANTRY);
    localStorage.removeItem(KEYS.SHOPPING);
    localStorage.removeItem(KEYS.LIKED_RECIPES);
    localStorage.removeItem(KEYS.USER_RECIPES);
    // We usually keep prefs, but for a full reset:
    localStorage.removeItem(KEYS.PREFS);
    localStorage.removeItem(KEYS.FEEDBACK);
    localStorage.removeItem(KEYS.BANDIT);
  }
};
