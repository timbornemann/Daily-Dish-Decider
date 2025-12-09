
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
  source?: 'ai' | 'local' | 'user';
  difficulty?: 'Easy' | 'Medium' | 'Hard'; // New field
  // Optional meta data produced by matching/reco pipeline for explainability
  matchMeta?: MatchMeta;
}

export type FeedbackAction = 'LIKE' | 'DISLIKE' | 'VIEW_DETAIL' | 'COOK_WINNER';

export interface FeedbackEvent {
  recipeId: string;
  action: FeedbackAction;
  timestamp: number;
}

export interface BanditStats {
  impressions: number;
  successes: number;
  failures: number;
}

export interface ShoppingItem {
  id: string;
  name: string;
  category: string;
  checked: boolean;
}

export enum AppView {
  SWIPE = 'swipe',
  COOKBOOK = 'cookbook',
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
  tasteProfile: Record<string, number>; // Tag weights: e.g. { "Italian": 5.2, "Spicy": -2.0 }
}

// Additional metadata to explain pantry/diet matching
export interface MatchMeta {
  matchedIngredients: string[];
  missingIngredients: string[];
  preferredTagHits: string[];
  dietPenalty: number;
  missingPenalty: number;
  prepTimeMinutes?: number;
  baseScore: number;
  score: number;
  reasons: string[];
}
