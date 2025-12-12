export interface InstructionImage {
  id: string;
  path: string;
  priority: number; // Higher number = higher priority
  keywords: {
    en: string[];
    de: string[];
  };
}

const BASE_PATH = '/resources/images/instructions';

// Mapping of image IDs to their filenames and trigger keywords
export const INSTRUCTION_IMAGES: InstructionImage[] = [
  {
    id: 'chop',
    path: `${BASE_PATH}/instruction_chop.png`,
    priority: 80,
    keywords: {
      en: ['chop', 'cut', 'dice', 'slice', 'mince', 'cube'],
      de: ['schneiden', 'würfeln', 'hacken', 'klein schneiden', 'in stücke'],
    },
  },
  {
    id: 'peel',
    path: `${BASE_PATH}/instruction_peel.png`,
    priority: 70,
    keywords: {
      en: ['peel', 'skin', 'remove skin'],
      de: ['schälen', 'abschälen', 'haut entfernen'],
    },
  },
  {
    id: 'grate',
    path: `${BASE_PATH}/instruction_grate.png`,
    priority: 75,
    keywords: {
      en: ['grate', 'zest', 'shred'],
      de: ['reiben', 'raspeln'],
    },
  },
  {
    id: 'mix',
    path: `${BASE_PATH}/instruction_mix.png`,
    priority: 60,
    keywords: {
      en: ['mix', 'whisk', 'beat', 'combine', 'stir together'],
      de: ['mischen', 'verrühren', 'verquirlen', 'vermengen', 'zusammenrühren'],
    },
  },
  {
    id: 'knead',
    path: `${BASE_PATH}/instruction_knead.png`,
    priority: 90,
    keywords: {
      en: ['knead', 'dough'],
      de: ['kneten', 'verkneten', 'teig'],
    },
  },
  {
    id: 'weigh',
    path: `${BASE_PATH}/instruction_weigh.png`,
    priority: 50,
    keywords: {
      en: ['weigh', 'measure'],
      de: ['wiegen', 'abwiegen', 'messen', 'abmessen'],
    },
  },
  {
    id: 'fry',
    path: `${BASE_PATH}/instruction_fry.png`,
    priority: 85,
    keywords: {
      en: ['fry', 'sauté', 'sear', 'pan', 'skillet', 'oil', 'heat'],
      de: ['braten', 'anbraten', 'pfanne', 'öl erhitzen', 'glasig dünsten'],
    },
  },
  {
    id: 'boil',
    path: `${BASE_PATH}/instruction_boil.png`,
    priority: 85,
    keywords: {
      en: ['boil', 'cook pasta', 'cook potatoes', 'boiling water'],
      de: ['kochen', 'aufkochen', 'siedendes wasser', 'wasser kochen'],
    },
  },
  {
    id: 'simmer',
    path: `${BASE_PATH}/instruction_simmer.png`,
    priority: 80,
    keywords: {
      en: ['simmer', 'low heat', 'gentle boil', 'reduce heat'],
      de: ['köcheln', 'sanft köcheln', 'niedrige hitze', 'leicht köcheln'],
    },
  },
  {
    id: 'preheat',
    path: `${BASE_PATH}/instruction_preheat.png`,
    priority: 40,
    keywords: {
      en: ['preheat', 'oven to', 'warm up oven'],
      de: ['vorheizen', 'ofen vorheizen', 'aufheizen'],
    },
  },
  {
    id: 'bake_oven',
    path: `${BASE_PATH}/instruction_bake_oven.png`,
    priority: 90,
    keywords: {
      en: ['bake', 'oven', 'roast'],
      de: ['backen', 'im ofen', 'rösten'],
    },
  },
  {
    id: 'bake_tray',
    path: `${BASE_PATH}/instruction_bake_tray.png`,
    priority: 70,
    keywords: {
      en: ['tray', 'sheet', 'baking sheet', 'arrange on'],
      de: ['blech', 'backblech', 'verteilen'],
    },
  },
  {
    id: 'roll',
    path: `${BASE_PATH}/instruction_roll.png`,
    priority: 80,
    keywords: {
      en: ['roll out', 'rolling pin', 'flatten'],
      de: ['ausrollen', 'nudelholz', 'flach drücken'],
    },
  },
  {
    id: 'blend',
    path: `${BASE_PATH}/instruction_blend.png`,
    priority: 85,
    keywords: {
      en: ['blend', 'blender', 'smoothie', 'puree', 'process'],
      de: ['mixen', 'standmixer', 'pürieren', 'blender'],
    },
  },
  {
    id: 'hand_mixer',
    path: `${BASE_PATH}/instruction_hand_mixer.png`,
    priority: 85,
    keywords: {
      en: ['hand mixer', 'electric mixer', 'whip cream', 'beat egg whites'],
      de: ['handrührgerät', 'handmixer', 'steif schlagen', 'schaumig schlagen'],
    },
  },
  {
    id: 'sift',
    path: `${BASE_PATH}/instruction_sift.png`,
    priority: 60,
    keywords: {
      en: ['sift', 'sieve'],
      de: ['sieben', 'durchsieben'],
    },
  },
  {
    id: 'add',
    path: `${BASE_PATH}/instruction_add.png`,
    priority: 10, // Very low priority to avoid overriding specific actions
    keywords: {
      en: ['add', 'pour', 'transfer', 'put in'],
      de: ['hinzufügen', 'dazugeben', 'gießen', 'einrühren', 'beigeben'],
    },
  },
  {
    id: 'stir',
    path: `${BASE_PATH}/instruction_stir.png`,
    priority: 55,
    keywords: {
      en: ['stir', 'mix in', 'combine'],
      de: ['umrühren', 'rühren', 'untermischen'],
    },
  },
  {
    id: 'separate_eggs',
    path: `${BASE_PATH}/instruction_separate_eggs.png`,
    priority: 95, // High priority as it's very specific
    keywords: {
      en: ['separate egg', 'yolk', 'white', 'split egg'],
      de: ['eier trennen', 'eigelb', 'eiweiß', 'trennen'],
    },
  },
  {
    id: 'serve',
    path: `${BASE_PATH}/instruction_serve.png`,
    priority: 50,
    keywords: {
      en: ['serve', 'plate', 'dish up', 'enjoy'],
      de: ['servieren', 'anrichten', 'genießen', 'auf teller'],
    },
  },
  {
    id: 'garnish',
    path: `${BASE_PATH}/instruction_garnish.png`,
    priority: 65,
    keywords: {
      en: ['garnish', 'sprinkle', 'top with', 'decorate'],
      de: ['garnieren', 'bestreuen', 'toppen', 'dekorieren'],
    },
  },
  {
    id: 'season',
    path: `${BASE_PATH}/instruction_season.png`,
    priority: 60,
    keywords: {
      en: ['season', 'salt', 'pepper', 'taste'],
      de: ['würzen', 'abschmecken', 'salz', 'pfeffer', 'salzen'],
    },
  },
];

/**
 * Scans the provided text for keywords and returns the single highest priority matching image path.
 * Matches are case-insensitive.
 */
export const getInstructionImage = (text: string): string | null => {
  const lowerText = text.toLowerCase();
  let bestMatch: InstructionImage | null = null;

  INSTRUCTION_IMAGES.forEach((img) => {
    // Check English keywords
    const hasEnMatch = img.keywords.en.some(keyword => lowerText.includes(keyword.toLowerCase()));
    // Check German keywords
    const hasDeMatch = img.keywords.de.some(keyword => lowerText.includes(keyword.toLowerCase()));

    if (hasEnMatch || hasDeMatch) {
      if (!bestMatch || img.priority > bestMatch.priority) {
        bestMatch = img;
      }
    }
  });

  return bestMatch ? (bestMatch as InstructionImage).path : null;
};
