
import { Recipe, Ingredient, MatchMeta } from '../types';
import { translations, Translation, Language } from '../translations';

// Ingredient normalization helpers
const INGREDIENT_SYNONYMS: Record<string, string[]> = {
  tomato: ['canned_tomato', 'tomato_paste', 'tomatoes', 'tomato_sauce'],
  pasta: ['noodle', 'noodles', 'spaghetti', 'macaroni'],
  rice: ['risotto', 'rice_noodles'],
  cheese: ['mozzarella', 'parmesan', 'feta', 'cheddar', 'mascarpone'],
  beef: ['ground_beef', 'steak', 'minced_beef'],
  pork: ['bacon', 'sausage'],
  chicken: ['chicken_breast', 'chicken_thigh'],
  fish: ['salmon', 'fish_sticks', 'seafood', 'shrimp'],
  bean: ['beans', 'black_beans'],
  lettuce: ['salad', 'greens'],
  bread: ['bun', 'buns', 'toast', 'pita', 'tortilla', 'wrap'],
  yogurt: ['yoghurt'],
  oil: ['olive_oil'],
  pepper: ['bell_pepper', 'paprika']
};

const DIET_CONFLICT_TAGS: Record<string, string[]> = {
  vegetarian: ['meat', 'beef', 'pork', 'chicken', 'fish', 'seafood', 'shrimp', 'bacon', 'sausage', 'turkey', 'salmon'],
  vegan: ['meat', 'beef', 'pork', 'chicken', 'fish', 'seafood', 'shrimp', 'bacon', 'sausage', 'turkey', 'salmon', 'egg', 'cheese', 'butter', 'milk', 'yogurt', 'cream'],
  'gluten-free': ['pasta', 'bread', 'flour', 'bun', 'tortilla', 'wrap', 'pizza', 'spaghetti', 'noodle', 'noodles']
};

// Pantry basics we don't want to over-weight for matches
const LOW_IMPACT_INGREDIENTS = new Set([
  'salt', 'pepper', 'pepper_spice', 'water', 'oil', 'olive_oil', 'veg_oil',
  'vinegar', 'herbs', 'spices', 'garlic', 'onion', 'butter', 'sugar', 'flour'
]);

type DayPeriod = 'morning' | 'midday' | 'afternoon' | 'evening' | 'late_night';
type WeekSegment = 'weekday' | 'weekend';

interface MatchOptions {
  dietFilters?: string[];
  requiredTags?: string[];
  preferredTags?: string[];
  timeOfDay?: DayPeriod;
  weekSegment?: WeekSegment;
  epsilon?: number;
  filterMealType?: 'breakfast' | 'lunch' | 'dinner';
  filterTemperature?: 'warm' | 'cold';
  filterDiet?: 'vegan' | 'vegetarian' | 'all';
  ignorePantry?: boolean;
  lang?: Language;
}

const normalizeName = (value: string): string => {
  return value
    .toLowerCase()
    .replace(/_/g, ' ')
    .replace(/-/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()
    .replace(/s\b/g, ''); // crude singularization (eg. tomatoes -> tomatoe, beans -> bean)
};

const canonicalizeName = (value: string): string => {
  const normalized = normalizeName(value);
  for (const [canonical, synonyms] of Object.entries(INGREDIENT_SYNONYMS)) {
    if (canonical === normalized || synonyms.some(s => normalizeName(s) === normalized)) {
      return canonical;
    }
  }
  return normalized;
};

const tokenSetSimilarity = (a: string, b: string): number => {
  const tokensA = new Set(normalizeName(a).split(' '));
  const tokensB = new Set(normalizeName(b).split(' '));
  const intersection = Array.from(tokensA).filter(t => tokensB.has(t)).length;
  const union = new Set([...Array.from(tokensA), ...Array.from(tokensB)]).size;
  return union === 0 ? 0 : intersection / union;
};

const fuzzyIngredientMatch = (pantryName: string, requiredName: string, threshold = 0.6): boolean => {
  const canonicalPantry = canonicalizeName(pantryName);
  const canonicalRequired = canonicalizeName(requiredName);
  if (canonicalPantry === canonicalRequired) return true;
  const sim = tokenSetSimilarity(canonicalPantry, canonicalRequired);
  return sim >= threshold;
};

const parsePrepTimeMinutes = (prepTime: string | undefined): number | undefined => {
  if (!prepTime) return undefined;
  const numbers = prepTime.match(/\d+/g);
  if (!numbers || numbers.length === 0) return undefined;
  const minutes = Number(numbers[0]);
  return Number.isFinite(minutes) ? minutes : undefined;
};

import { ALL_RECIPES } from '../data/recipes';

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
    'local-kaiserschmarrn', // Special flipping technique, precise temperature
    'local-flammkuchen', // Dough rolling, high heat
    'local-mousse-chocolat', // Egg separation, folding, temp control
    'local-apple-crumble' // Crumble texture, baking
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
    'local-scrambled-eggs', // Technique for creamy texture, temperature control
    'local-couscous-salad', // Chopping, dressing
    'local-nudeln-auflauf' // Sauce making, baking
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
  return 'Easy';
};

export const getLocalRecipes = (lang: Language): Recipe[] => {
  const t = translations[lang];

  return ALL_RECIPES.map(def => {
    const content = def.content[lang];

    if (!content) return null;

    return {
      id: def.id,
      title: content.title,
      description: content.description,
      steps: content.steps,
      ingredients: def.ingredients.map(ing => ({
        id: ing.id as any, // ID is now the source of truth
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
  availableRecipes: Recipe[],
  options: MatchOptions = {}
): Recipe[] => {
  const {
    dietFilters = [],
    requiredTags = [],
    preferredTags = [],
    timeOfDay,
    weekSegment,
    epsilon = 0.05,
    filterMealType,
    filterTemperature,
    filterDiet,
    ignorePantry = false,
    lang = 'de'
  } = options;

  const t = translations[lang];


  // If ignorePantry is true, we simply pass all recipes (unless filtered by other criteria) 
  // and pretend they are fully matched.
  // match logic below needs to handle this.

  if (pantryItems.length === 0 && !ignorePantry) return [];

  const normalizedPantry = pantryItems.map(p => ({
    raw: p.name,
    canonical: canonicalizeName(p.name)
  }));

  const lowerRequired = requiredTags.map(t => t.toLowerCase());
  const lowerPreferred = preferredTags.map(t => t.toLowerCase());

  const scored = availableRecipes.map(recipe => {
    const normalizedIngredients = recipe.ingredients.map(i => ({
      raw: i.id,
      canonical: i.id // IDs are already canonical keys
    }));

    const matched: string[] = [];
    const missing: string[] = [];
    let totalWeight = 0;
    let matchedWeight = 0;

    normalizedIngredients.forEach(req => {
      const ingWeight = LOW_IMPACT_INGREDIENTS.has(req.canonical) ? 0.3 : 1;
      totalWeight += ingWeight;
      const hasItem = normalizedPantry.some(p => fuzzyIngredientMatch(p.canonical, req.canonical));
      if (hasItem) {
        matched.push(req.raw);
        matchedWeight += ingWeight;
      } else {
        missing.push(req.raw);
      }
    });

    // --- LOGIC CHANGE FOR IGNORE PANTRY ---
    if (ignorePantry) {
        // If ignoring pantry, we treat everything as if we have it, 
        // OR we just calculate the score based on other factors and give a base match score.
        // Let's say: baseScore = 1.0 (as if we have everything), missing = empty
        // But we want to keep the "matched" list empty or full? 
        // Let's fill "matched" with all ingredients to make the UI happy (showing them as available/green matches)
        // OR we just leave them as is but don't penalize.
        
        // Better UX: Show them as if they are available (matched).
        // So we override the lists we computed above.
        
        // Resetting lists for "ignore pantry" mode
        matched.length = 0;
        missing.length = 0;
        
        // Put all into matched
        normalizedIngredients.forEach(req => matched.push(req.raw));
        matchedWeight = totalWeight; 
    }
    // --------------------------------------

    const baseScore = totalWeight === 0 ? 0 : matchedWeight / totalWeight; // 0..1
    const ingredientWeighted = baseScore * 0.6; // reduce impact of pure ingredients
    const missingPenalty = missing.length * 0.12;

    const lowerTags = (recipe.tags || []).map(t => t.toLowerCase());
    const lowerIngs = normalizedIngredients.map(i => i.canonical);

    let dietPenalty = 0;
    dietFilters.forEach(diet => {
      const d = diet.toLowerCase();
      const conflicts = DIET_CONFLICT_TAGS[d];
      if (conflicts) {
        const violates = lowerIngs.some(ing => conflicts.some(c => ing.includes(c))) ||
          lowerTags.some(tag => conflicts.includes(tag));
        if (violates) dietPenalty += 0.15;
      }
      // Soft penalty if expected diet tag not present
      if ((d === 'vegetarian' || d === 'vegan') && !lowerTags.includes(d)) {
        dietPenalty += 0.05;
      }
    });

    // --- Strict Filters ---
    if (filterMealType) {
        const breakfastTags = ['breakfast', 'brunch', 'morning', 'frühstück'];
        const lunchTags = ['lunch', 'mittag', 'quick'];
        const dinnerTags = ['dinner', 'evening', 'supper', 'abendessen', 'main course'];
        
        let hasType = false;
        if (filterMealType === 'breakfast') hasType = lowerTags.some(t => breakfastTags.includes(t));
        else if (filterMealType === 'lunch') hasType = lowerTags.some(t => lunchTags.includes(t));
        else if (filterMealType === 'dinner') hasType = lowerTags.some(t => dinnerTags.includes(t));
        
        if (!hasType) return null; // Filter out
    }

    if (filterTemperature) {
        const coldTags = ['salad', 'cold', 'smoothie', 'no-cook', 'salat', 'kalt'];
        const isCold = lowerTags.some(t => coldTags.includes(t));
        
        if (filterTemperature === 'cold' && !isCold) return null;
        if (filterTemperature === 'warm' && isCold) return null;
    }

    if (filterDiet && filterDiet !== 'all') {
         if (!lowerTags.includes(filterDiet)) return null;
    }
    // ----------------------

    const lacksRequired = lowerRequired.some(reqTag => !lowerTags.includes(reqTag));
    if (lacksRequired) {
      dietPenalty += 0.5; // push down if required tags missing
    }

    const preferredHit = lowerPreferred.filter(pt => lowerTags.includes(pt));
    const preferredBoost = Math.min(preferredHit.length * 0.08, 0.24);

    const prepMinutes = parsePrepTimeMinutes(recipe.prepTime);
    const prepBoost = prepMinutes ? Math.max(0, (60 - prepMinutes) / 600) : 0; // up to +0.1 for very quick meals

    const timeBoost = (() => {
      if (!timeOfDay) return 0;
      const breakfastTags = ['breakfast', 'brunch', 'morning'];
      const dinnerTags = ['dinner', 'supper', 'evening'];
      if (timeOfDay === 'morning' && lowerTags.some(t => breakfastTags.includes(t))) return 0.05;
      if ((timeOfDay === 'evening' || timeOfDay === 'late_night') && lowerTags.some(t => dinnerTags.includes(t))) return 0.03;
      return 0;
    })();

    const weekBoost = (() => {
      if (!weekSegment) return 0;
      const weekdayTags = ['quick', 'lunch', 'light'];
      const weekendTags = ['family', 'slow cook', 'comfort food', 'brunch'];
      if (weekSegment === 'weekday' && lowerTags.some(t => weekdayTags.includes(t))) return 0.03;
      if (weekSegment === 'weekend' && lowerTags.some(t => weekendTags.includes(t))) return 0.03;
      return 0;
    })();

    let score = ingredientWeighted + preferredBoost + prepBoost + timeBoost + weekBoost - missingPenalty - dietPenalty;
    // small exploration jitter to keep variety
    if (Math.random() < epsilon) {
      score += Math.random() * 0.05;
    }

    const reasons: string[] = [];
    if (ignorePantry) {
        reasons.push(t.filter_ignore_pantry || "Vorrat ignoriert");
    } else if (matched.length) {
        reasons.push(`gefunden wegen: ${matched.join(', ')}`);
    }
    if (missing.length) reasons.push(`fehlt: ${missing.join(', ')}`);
    if (preferredHit.length) reasons.push(`bevorzugte Tags: ${preferredHit.join(', ')}`);
    if (dietPenalty > 0) reasons.push(`diet Penalty: ${dietPenalty.toFixed(2)}`);
    if (timeBoost > 0) reasons.push(`zeit Bonus (${timeOfDay})`);
    if (weekBoost > 0 && weekSegment) reasons.push(`wochentag Bonus (${weekSegment})`);
    if (prepBoost > 0) reasons.push('kürzere PrepTime Bonus');

    const matchMeta: MatchMeta = {
      matchedIngredients: matched,
      missingIngredients: missing,
      preferredTagHits: preferredHit,
      dietPenalty,
      missingPenalty,
      prepTimeMinutes: prepMinutes,
      baseScore,
      score,
      reasons
    };

    return { recipe: { ...recipe, matchMeta }, score };
  });

  return scored
    .filter(s => s !== null) // remove filtered out recipes
    .filter(s => ignorePantry ? true : s.recipe.matchMeta?.matchedIngredients.length > 0)
    .sort((a, b) => b.score - a.score)
    .map(s => s.recipe);
};
