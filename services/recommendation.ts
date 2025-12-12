import { BanditStats, FeedbackAction, FeedbackEvent, Recipe } from '../types';
import { StorageService } from './storage';

// Rewards for Reinforcement Learning
const REWARDS: Record<FeedbackAction, number> = {
  LIKE: 1.0,
  DISLIKE: -1.0,
  COOK_WINNER: 3.0, // High reward for choosing a recipe to cook
  VIEW_DETAIL: 0.2
};

// Controls how often we explore; shrinks as we collect more events
const MIN_EXPLORATION = 0.05;
const MAX_EXPLORATION = 0.35;

// Cache for item-based collaborative filtering
const itemSimilarityCache: Map<string, number> = new Map();

type DayPeriod = 'morning' | 'midday' | 'afternoon' | 'evening' | 'late_night';
type WeekSegment = 'weekday' | 'weekend';
type Season = 'winter' | 'spring' | 'summer' | 'autumn';

interface TemporalContext {
  period: DayPeriod;
  week: WeekSegment;
  season: Season;
}

const deriveDayPeriod = (date: Date): DayPeriod => {
  const hour = date.getHours();
  if (hour < 6) return 'late_night';
  if (hour < 11) return 'morning';
  if (hour < 14) return 'midday';
  if (hour < 18) return 'afternoon';
  return 'evening';
};

const deriveWeekSegment = (date: Date): WeekSegment => {
  const day = date.getDay();
  return day === 0 || day === 6 ? 'weekend' : 'weekday';
};

const deriveSeason = (date: Date): Season => {
  const month = date.getMonth();
  if (month <= 1 || month === 11) return 'winter';
  if (month >= 2 && month <= 4) return 'spring';
  if (month >= 5 && month <= 7) return 'summer';
  return 'autumn';
};

const getTemporalContext = (timestamp: number): TemporalContext => {
  const date = new Date(timestamp);
  return {
    period: deriveDayPeriod(date),
    week: deriveWeekSegment(date),
    season: deriveSeason(date)
  };
};

const computeContextSimilarity = (a: TemporalContext, b: TemporalContext): number => {
  let similarity = 0;
  if (a.period === b.period) similarity += 0.5;
  if (a.week === b.week) similarity += 0.3;
  if (a.season === b.season) similarity += 0.2;
  return similarity;
};

const POSITIVE_ACTIONS: FeedbackAction[] = ['LIKE', 'COOK_WINNER'];
const NEGATIVE_ACTIONS: FeedbackAction[] = ['DISLIKE'];

/**
 * Updates the user's taste profile based on an interaction with a recipe.
 */
export const updateTasteProfile = (
  currentProfile: Record<string, number>,
  recipe: Recipe,
  action: FeedbackAction
): Record<string, number> => {
  const newProfile = { ...currentProfile };
  const reward = REWARDS[action];

  const features = getNormalizedFeatures(recipe);

  features.forEach(tag => {
    const currentWeight = newProfile[tag] || 0;
    newProfile[tag] = Number((currentWeight + reward * 0.1).toFixed(2));
  });

  return newProfile;
};

const LOW_IMPACT_INGREDIENTS = new Set([
  'salt', 'pepper', 'pepper_spice', 'water', 'oil', 'olive_oil', 'veg_oil',
  'vinegar', 'herbs', 'spices', 'garlic', 'onion', 'butter', 'sugar', 'flour'
]);

const getNormalizedFeatures = (recipe: Recipe): string[] => {
  const tags = recipe.tags.map(t => t.toLowerCase());
  const ingredientTags = recipe.ingredients
    .map(i => i.id.toLowerCase())
    .filter(ing => !LOW_IMPACT_INGREDIENTS.has(ing));
  return [...new Set([...tags, ...ingredientTags])].sort();
};

/**
 * Calculates a score for a recipe based on the user's taste profile.
 * High score = strong match.
 */
export const scoreRecipe = (recipe: Recipe, profile: Record<string, number>): number => {
  let score = 0;
  const features = getNormalizedFeatures(recipe);

  features.forEach(tag => {
    if (profile[tag]) {
      score += profile[tag];
    }
  });

  return score;
};

/**
 * Jaccard similarity between two recipes using normalized content features.
 */
const computeContentSimilarity = (a: Recipe, b: Recipe): number => {
  const featuresA = getNormalizedFeatures(a);
  const featuresB = getNormalizedFeatures(b);
  const setB = new Set(featuresB);
  const intersection = featuresA.filter(f => setB.has(f)).length;
  const union = new Set([...featuresA, ...featuresB]).size;
  return union === 0 ? 0 : intersection / union;
};

const getCacheKey = (a: string, b: string) => [a, b].sort().join('::');

const getItemSimilarity = (a: Recipe, b: Recipe): number => {
  const key = getCacheKey(a.id, b.id);
  if (itemSimilarityCache.has(key)) {
    return itemSimilarityCache.get(key)!;
  }
  const similarity = computeContentSimilarity(a, b);
  itemSimilarityCache.set(key, similarity);
  return similarity;
};

const computeCollaborativeScore = (
  recipe: Recipe,
  likedRecipes: Recipe[],
  dislikedRecipes: Recipe[]
): number => {
  const positiveScores = likedRecipes.map(r => getItemSimilarity(recipe, r));
  const negativeScores = dislikedRecipes.map(r => getItemSimilarity(recipe, r));
  const posAvg = positiveScores.length
    ? positiveScores.reduce((a, b) => a + b, 0) / positiveScores.length
    : 0;
  const negAvg = negativeScores.length
    ? negativeScores.reduce((a, b) => a + b, 0) / negativeScores.length
    : 0;
  return Number((posAvg - negAvg).toFixed(3));
};

const computeContextualPreference = (
  recipe: Recipe,
  events: FeedbackEvent[],
  recipeLookup: Map<string, Recipe>,
  currentContext: TemporalContext
): number => {
  let weightedTotal = 0;
  let weightSum = 0;

  events.forEach(event => {
    const historicalRecipe = recipeLookup.get(event.recipeId);
    if (!historicalRecipe) return;

    const contextSimilarity = computeContextSimilarity(
      currentContext,
      getTemporalContext(event.timestamp)
    );
    if (contextSimilarity === 0) return;

    const featureSimilarity = computeContentSimilarity(recipe, historicalRecipe);
    if (featureSimilarity === 0) return;

    const reward = REWARDS[event.action];
    const blendedWeight = contextSimilarity * 0.6 + featureSimilarity * 0.4;
    weightedTotal += blendedWeight * reward;
    weightSum += Math.abs(contextSimilarity) * featureSimilarity;
  });

  return weightSum === 0 ? 0 : Number((weightedTotal / weightSum).toFixed(3));
};

const sampleGamma = (shape: number, scale: number): number => {
  if (shape < 1) {
    return sampleGamma(1 + shape, scale) * Math.pow(Math.random(), 1 / shape);
  }
  const d = shape - 1 / 3;
  const c = 1 / Math.sqrt(9 * d);
  while (true) {
    let x: number;
    let v: number;
    do {
      const u1 = Math.random();
      const u2 = Math.random();
      const z = Math.sqrt(-2 * Math.log(u1)) * Math.cos(2 * Math.PI * u2);
      x = z;
      v = 1 + c * x;
    } while (v <= 0);
    v = v * v * v;
    const u = Math.random();
    if (u < 1 - 0.0331 * (x * x) * (x * x)) return d * v * scale;
    if (Math.log(u) < 0.5 * x * x + d * (1 - v + Math.log(v))) return d * v * scale;
  }
};

const sampleBeta = (alpha: number, beta: number): number => {
  const x = sampleGamma(alpha, 1);
  const y = sampleGamma(beta, 1);
  return x / (x + y);
};

const getBanditScore = (
  stats: BanditStats | undefined,
  totalImpressions: number
): { exploitation: number; exploration: number } => {
  const impressions = stats?.impressions ?? 0;
  const successes = stats?.successes ?? 0;
  const failures = stats?.failures ?? 0;

  const thompsonSample = sampleBeta(successes + 1, failures + 1);
  const exploitComponent = thompsonSample;

  const ucb = impressions === 0
    ? Infinity
    : successes / impressions + Math.sqrt((2 * Math.log(Math.max(totalImpressions, 1))) / impressions);

  return { exploitation: exploitComponent, exploration: ucb };
};

const deriveExplorationRate = (events: FeedbackEvent[]): number => {
  const count = events.length;
  if (count === 0) return MAX_EXPLORATION;
  const decayed = MAX_EXPLORATION * Math.exp(-count / 50);
  return Math.max(MIN_EXPLORATION, decayed);
};

const splitFeedbackRecipes = (recipes: Recipe[], events: FeedbackEvent[]): {
  liked: Recipe[];
  disliked: Recipe[];
} => {
  const likedIds = new Set(events.filter(e => POSITIVE_ACTIONS.includes(e.action)).map(e => e.recipeId));
  const dislikedIds = new Set(events.filter(e => NEGATIVE_ACTIONS.includes(e.action)).map(e => e.recipeId));
  return {
    liked: recipes.filter(r => likedIds.has(r.id)),
    disliked: recipes.filter(r => dislikedIds.has(r.id))
  };
};

/**
 * Returns a sorted list of recipes using a Multi-Armed Bandit approach.
 * It mixes "Best Matches" (Exploitation) with "Randoms" (Exploration).
 */
export const getRecommendedRecipes = (
  availableRecipes: Recipe[],
  profile: Record<string, number>
): Recipe[] => {
  const feedbackEvents = StorageService.getFeedbackEvents();
  const banditStats = StorageService.getBanditStats();
  const explorationRate = deriveExplorationRate(feedbackEvents);
  const { liked, disliked } = splitFeedbackRecipes(availableRecipes, feedbackEvents);
  const recipeLookup = new Map(availableRecipes.map(r => [r.id, r] as const));
  const currentContext = getTemporalContext(Date.now());

  const scoredRecipes = availableRecipes.map(recipe => ({
    recipe,
    matchScore: recipe.matchMeta?.score ?? 0,
    score: scoreRecipe(recipe, profile),
    collaborative: computeCollaborativeScore(recipe, liked, disliked),
    temporal: computeContextualPreference(recipe, feedbackEvents, recipeLookup, currentContext),
    bandit: getBanditScore(banditStats[recipe.id], feedbackEvents.length),
    random: Math.random()
  }));

  scoredRecipes.sort((a, b) => {
    const isExplorationA = a.random < explorationRate;
    const isExplorationB = b.random < explorationRate;

    if (isExplorationA !== isExplorationB) {
      return isExplorationA ? -1 : 1;
    }

    const scoreA =
      a.matchScore * 0.7 + // ingredients softer
      a.score * 1.1 + // taste profile a bit stronger
      a.collaborative * 0.9 +
      a.temporal * 1.2 +
      a.bandit.exploitation * 2 +
      a.bandit.exploration * 0.3;
    const scoreB =
      b.matchScore * 0.7 +
      b.score * 1.1 +
      b.collaborative * 0.9 +
      b.temporal * 1.2 +
      b.bandit.exploitation * 2 +
      b.bandit.exploration * 0.3;

    if (scoreA === scoreB) return 0;
    return scoreB - scoreA;
  });

  return scoredRecipes.map(item => item.recipe);
};

/**
 * Log feedback, persist it and update both taste profile and bandit stats.
 */
export const logFeedbackEvent = (
  recipe: Recipe,
  action: FeedbackAction,
  currentProfile: Record<string, number>
): Record<string, number> => {
  const event: FeedbackEvent = {
    recipeId: recipe.id,
    action,
    timestamp: Date.now()
  };
  StorageService.appendFeedbackEvent(event);

  const stats = StorageService.getBanditStats();
  const currentStats: BanditStats = stats[recipe.id] || { impressions: 0, successes: 0, failures: 0 };
  const isPositive = POSITIVE_ACTIONS.includes(action);
  const isNegative = NEGATIVE_ACTIONS.includes(action);
  const updatedStats: BanditStats = {
    impressions: currentStats.impressions + 1,
    successes: currentStats.successes + (isPositive ? 1 : 0),
    failures: currentStats.failures + (isNegative ? 1 : 0)
  };
  StorageService.saveBanditStats({ ...stats, [recipe.id]: updatedStats });

  const newProfile = updateTasteProfile(currentProfile, recipe, action);
  const prefs = StorageService.getPreferences();
  StorageService.savePreferences({ ...prefs, tasteProfile: newProfile });
  return newProfile;
};
