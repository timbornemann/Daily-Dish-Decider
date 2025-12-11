import { IngredientId } from '../data/ingredients';

export interface SubstitutionOption {
  id: IngredientId;
  /** Ratio applied to the original amount (e.g., 0.75 means 75% of the amount). */
  ratio?: number;
  note?: string;
}

export const substitutionMap: Record<IngredientId, SubstitutionOption[]> = {
  milk: [
    { id: 'oat_milk', ratio: 1 },
    { id: 'almond_milk', ratio: 1 },
    { id: 'yogurt', ratio: 1, note: 'Adds creaminess; thin with a splash of water.' }
  ],
  butter: [
    { id: 'olive_oil', ratio: 0.75, note: 'Use less oil than butter.' },
    { id: 'veg_oil', ratio: 0.75 },
    // { id: 'margarine', ratio: 1 } 
  ],
  egg: [
    { id: 'applesauce', ratio: 0.25, note: '¼ cup applesauce per egg in baking.' },
    { id: 'yogurt', ratio: 0.25, note: '¼ cup yogurt per egg.' },
    { id: 'flaxseed', ratio: 0.25, note: 'Mix with water (flax egg).' }
  ],
  sugar: [
    { id: 'honey', ratio: 0.75, note: 'Honey is sweeter; use less.' },
    { id: 'maple_syrup', ratio: 0.75 },
    { id: 'brown_sugar', ratio: 1 }
  ],
  flour: [
    { id: 'oat', ratio: 1 },
    // { id: 'almond flour', ratio: 0.8 },
    { id: 'cornstarch', ratio: 0.5, note: 'For thickening sauces.' }
  ],
  cream: [
    { id: 'milk', ratio: 1, note: 'Combine with butter for richness.' },
    { id: 'creme_fraiche', ratio: 1 }
  ],
  yogurt: [
    { id: 'sour_cream', ratio: 1 },
    { id: 'cream', ratio: 1 },
    { id: 'buttermilk', ratio: 1 }
  ],
  parmesan: [
    { id: 'pecorino', ratio: 1 },
    { id: 'grana_padano', ratio: 1 },
    { id: 'cheddar', ratio: 1, note: 'Milder flavor; good for melting.' }
  ],
  mozzarella: [
    { id: 'cheddar', ratio: 1 },
    { id: 'gouda', ratio: 1 },
    { id: 'feta', ratio: 0.75, note: 'Salty and crumbly.' }
  ],
  tomato: [
    { id: 'canned_tomato', ratio: 1 },
    { id: 'tomato_paste', ratio: 0.5, note: 'Dilute with water.' },
    { id: 'tomato_sauce', ratio: 1 }
  ],
  onion: [
    { id: 'shallot', ratio: 1 },
    { id: 'leek', ratio: 1 },
    { id: 'spring_onion', ratio: 1 }
  ],
  garlic: [
    { id: 'garlic_powder', ratio: 0.25, note: 'Use 1/4 tsp powder per clove.' },
    { id: 'shallot', ratio: 1 },
    { id: 'onion', ratio: 1 }
  ],
  rice: [
    { id: 'quinoa', ratio: 1 },
    { id: 'couscous', ratio: 1 },
    // { id: 'cauliflower rice', ratio: 1 }
  ],
  pasta: [
    { id: 'rice_noodles', ratio: 1 },
    { id: 'zucchini_noodles', ratio: 1, note: 'Low-carb option.' },
    { id: 'gnocchi', ratio: 1 }
  ],
  bacon: [
    { id: 'ham', ratio: 1 },
    { id: 'tofu', ratio: 1 },
    { id: 'mushroom', ratio: 1, note: 'For umami without meat.' }
  ],
  chicken_breast: [
    { id: 'turkey', ratio: 1 },
    { id: 'tofu', ratio: 1 },
  ],
  ground_beef: [
    { id: 'ground_turkey', ratio: 1 },
    { id: 'lentil', ratio: 1, note: 'Great for sauces and tacos.' },
    { id: 'mushroom', ratio: 1, note: 'Finely chopped for texture.' }
  ],
  olive_oil: [
    { id: 'veg_oil', ratio: 1 },
    { id: 'butter', ratio: 1 },
    { id: 'coconut_oil', ratio: 1 }
  ],
  lemon: [
    { id: 'lime', ratio: 1 },
    { id: 'vinegar', ratio: 0.5, note: 'Milder acidity.' },
    // { id: 'white wine', ratio: 1 }
  ],
  herbs: [
    // { id: 'dried herbs', ratio: 0.33 },
    // { id: 'herbs mix', ratio: 1 },
    { id: 'spinach', ratio: 1, note: 'For bulk and color.' }
  ],
  chicken_broth: [
    { id: 'water', ratio: 1, note: 'Season well when substituting.' },
    { id: 'vegetable_broth', ratio: 1 },
    { id: 'bouillon', ratio: 1 }
  ],
  beef_broth: [
    { id: 'vegetable_broth', ratio: 1 },
    { id: 'bouillon', ratio: 1 }
  ]
} as any;

export const getSubstitutions = (ingredientId: string): SubstitutionOption[] => {
  // Direct lookup since we use IDs now
  // Cast to any to avoid strict keyof checks or type guard
  return substitutionMap[ingredientId as IngredientId] || [];
};
