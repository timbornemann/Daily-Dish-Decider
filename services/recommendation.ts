
import { Recipe, UserPreferences } from '../types';

// Rewards for Reinforcement Learning
const REWARDS = {
  LIKE: 1.0,
  DISLIKE: -1.0,
  COOK_WINNER: 3.0, // High reward for choosing a recipe to cook
  VIEW_DETAIL: 0.2
};

// Exploration vs Exploitation rate (Epsilon-Greedy)
// 20% of the time, we show random stuff to learn new preferences.
const EXPLORATION_RATE = 0.2; 

/**
 * Updates the user's taste profile based on an interaction with a recipe.
 */
export const updateTasteProfile = (
  currentProfile: Record<string, number>,
  recipe: Recipe,
  action: 'LIKE' | 'DISLIKE' | 'COOK_WINNER' | 'VIEW_DETAIL'
): Record<string, number> => {
  const newProfile = { ...currentProfile };
  const reward = REWARDS[action];
  
  // Normalize tags to lowercase for consistency
  const tags = recipe.tags.map(t => t.toLowerCase());

  // Also consider ingredients as "implicit tags" to get deeper insights
  // e.g. if they like recipes with "Avocado", boost "Avocado"
  const ingredientTags = recipe.ingredients.map(i => i.name.toLowerCase());
  
  const allFeatures = [...new Set([...tags, ...ingredientTags])];

  allFeatures.forEach(tag => {
    // Current weight or 0
    const currentWeight = newProfile[tag] || 0;
    
    // Learning Rate: How fast we adapt. 
    // We keep it simple: additive updates. 
    // A more complex system might use a decay factor.
    newProfile[tag] = Number((currentWeight + (reward * 0.1)).toFixed(2));
  });

  return newProfile;
};

/**
 * Calculates a score for a recipe based on the user's taste profile.
 * High score = strong match.
 */
export const scoreRecipe = (recipe: Recipe, profile: Record<string, number>): number => {
  let score = 0;
  const tags = recipe.tags.map(t => t.toLowerCase());
  const ingredientTags = recipe.ingredients.map(i => i.name.toLowerCase());
  
  const allFeatures = [...new Set([...tags, ...ingredientTags])];

  allFeatures.forEach(tag => {
    if (profile[tag]) {
      score += profile[tag];
    }
  });

  return score;
};

/**
 * Returns a sorted list of recipes using a Multi-Armed Bandit approach.
 * It mixes "Best Matches" (Exploitation) with "Randoms" (Exploration).
 */
export const getRecommendedRecipes = (
  availableRecipes: Recipe[],
  profile: Record<string, number>
): Recipe[] => {
  // 1. Score all recipes
  const scoredRecipes = availableRecipes.map(recipe => ({
    recipe,
    score: scoreRecipe(recipe, profile),
    random: Math.random() // Pre-assign random value for shuffle
  }));

  // 2. Separate into "Exploitation" candidates (high score) and "Exploration" candidates
  // Actually, standard epsilon-greedy usually picks the BEST item (1-e) times, 
  // and a RANDOM item (e) times. 
  
  // Since we return a LIST, we will sort by a hybrid score.
  
  scoredRecipes.sort((a, b) => {
    // We want to return high scores first generally.
    // However, if we only do b.score - a.score, we create a filter bubble.
    
    const isExplorationA = a.random < EXPLORATION_RATE;
    const isExplorationB = b.random < EXPLORATION_RATE;

    if (isExplorationA && !isExplorationB) return -1; // Push exploration to top occasionally
    if (!isExplorationA && isExplorationB) return 1;

    return b.score - a.score;
  });

  return scoredRecipes.map(item => item.recipe);
};
