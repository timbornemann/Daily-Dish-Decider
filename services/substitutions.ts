export interface SubstitutionOption {
  name: string;
  /** Ratio applied to the original amount (e.g., 0.75 means 75% of the amount). */
  ratio?: number;
  note?: string;
}

export const substitutionMap: Record<string, SubstitutionOption[]> = {
  milk: [
    { name: 'oat milk', ratio: 1 },
    { name: 'almond milk', ratio: 1 },
    { name: 'plain yogurt', ratio: 1, note: 'Adds creaminess; thin with a splash of water.' }
  ],
  butter: [
    { name: 'olive oil', ratio: 0.75, note: 'Use less oil than butter.' },
    { name: 'veg_oil', ratio: 0.75 },
    { name: 'margarine', ratio: 1 }
  ],
  egg: [
    { name: 'applesauce', ratio: 0.25, note: '¼ cup applesauce per egg in baking.' },
    { name: 'yogurt', ratio: 0.25, note: '¼ cup yogurt per egg.' },
    { name: 'flaxseed', ratio: 0.25, note: 'Mix with water (flax egg).' }
  ],
  sugar: [
    { name: 'honey', ratio: 0.75, note: 'Honey is sweeter; use less.' },
    { name: 'maple_syrup', ratio: 0.75 },
    { name: 'brown sugar', ratio: 1 }
  ],
  flour: [
    { name: 'oat flour', ratio: 1 },
    { name: 'almond flour', ratio: 0.8, note: 'More dense; may need extra binding.' },
    { name: 'cornstarch', ratio: 0.5, note: 'For thickening sauces.' }
  ],
  cream: [
    { name: 'milk', ratio: 1, note: 'Combine with butter for richness.' },
    { name: 'evaporated milk', ratio: 1 },
    { name: 'creme_fraiche', ratio: 1 }
  ],
  yogurt: [
    { name: 'sour_cream', ratio: 1 },
    { name: 'cream', ratio: 1 },
    { name: 'buttermilk', ratio: 1 }
  ],
  parmesan: [
    { name: 'pecorino', ratio: 1 },
    { name: 'grana padano', ratio: 1 },
    { name: 'cheddar', ratio: 1, note: 'Milder flavor; good for melting.' }
  ],
  mozzarella: [
    { name: 'cheddar', ratio: 1 },
    { name: 'gouda', ratio: 1 },
    { name: 'feta', ratio: 0.75, note: 'Salty and crumbly.' }
  ],
  tomato: [
    { name: 'canned_tomato', ratio: 1 },
    { name: 'tomato_paste', ratio: 0.5, note: 'Dilute with water.' },
    { name: 'tomato_sauce', ratio: 1 }
  ],
  onion: [
    { name: 'shallot', ratio: 1 },
    { name: 'leek', ratio: 1 },
    { name: 'spring onion', ratio: 1 }
  ],
  garlic: [
    { name: 'garlic_powder', ratio: 0.25, note: 'Use 1/4 tsp powder per clove.' },
    { name: 'shallot', ratio: 1 },
    { name: 'onion', ratio: 1 }
  ],
  rice: [
    { name: 'quinoa', ratio: 1 },
    { name: 'couscous', ratio: 1 },
    { name: 'cauliflower rice', ratio: 1, note: 'Low-carb swap.' }
  ],
  pasta: [
    { name: 'rice noodles', ratio: 1 },
    { name: 'zucchini noodles', ratio: 1, note: 'Low-carb option.' },
    { name: 'gnocchi', ratio: 1 }
  ],
  bacon: [
    { name: 'ham', ratio: 1 },
    { name: 'smoked tofu', ratio: 1 },
    { name: 'mushroom', ratio: 1, note: 'For umami without meat.' }
  ],
  chicken_breast: [
    { name: 'turkey', ratio: 1 },
    { name: 'tofu', ratio: 1 },
    { name: 'chickpea', ratio: 1, note: 'Plant-based protein.' }
  ],
  ground_beef: [
    { name: 'ground_turkey', ratio: 1 },
    { name: 'lentil', ratio: 1, note: 'Great for sauces and tacos.' },
    { name: 'mushroom', ratio: 1, note: 'Finely chopped for texture.' }
  ],
  olive_oil: [
    { name: 'veg_oil', ratio: 1 },
    { name: 'butter', ratio: 1 },
    { name: 'coconut_oil', ratio: 1 }
  ],
  lemon: [
    { name: 'lime', ratio: 1 },
    { name: 'vinegar', ratio: 0.5, note: 'Milder acidity.' },
    { name: 'white wine', ratio: 1, note: 'For deglazing.' }
  ],
  herbs: [
    { name: 'dried herbs', ratio: 0.33, note: 'Use fewer dried herbs.' },
    { name: 'herbs mix', ratio: 1 },
    { name: 'spinach', ratio: 1, note: 'For bulk and color.' }
  ],
  broth: [
    { name: 'water', ratio: 1, note: 'Season well when substituting.' },
    { name: 'vegetable_broth', ratio: 1 },
    { name: 'bouillon', ratio: 1 }
  ]
};

export const getSubstitutions = (ingredientName: string): SubstitutionOption[] => {
  const key = ingredientName.toLowerCase().replace(/\s+/g, '_');
  return substitutionMap[key] || [];
};
