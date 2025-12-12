import { RecipeDefinition } from '../../../types';

export const FRIED_EGG_BREAD: RecipeDefinition = {
  id: 'local-fried-egg-bread',
  prepTime: '10 mins',
  tags: ["Breakfast", "Main", "Quick", "Vegetarian", "Bread", "Protein", "Warm"],
  basePortions: 1,
  ingredients: [
    {
      id: 'bread',
      amount: '2 slices'
    },
    {
      id: 'egg',
      amount: '2'
    },
    {
      id: 'butter',
      amount: '1 tbsp'
    },
    {
      id: 'chives',
      amount: '1 sprig'
    }
  ],
  content: {
    en: {
      title: "Fried Egg on Bread",
      description: "Hearty bread with fried eggs.",
      steps: [
        "Fry eggs: Heat butter in a pan. Crack eggs into the pan and fry until whites are set and yolks are to your liking.",
        "Toast bread (optional): While eggs are frying, toast the bread slices if desired.",
        "Assemble: Place fried eggs on top of the bread.",
        "Season: Sprinkle with salt, pepper, and chopped chives."
      ]
    },
    de: {
      title: "Spiegelei auf Brot",
      description: "Herzhaftes Brot mit Spiegeleiern.",
      steps: [
        "Spiegeleier braten: Butter in einer Pfanne erhitzen. Eier hineinschlagen und braten, bis das Eiweiß fest ist und das Eigelb nach Belieben gegart ist.",
        "Brot toasten (optional): Während die Eier braten, die Brotscheiben nach Wunsch toasten.",
        "Anrichten: Die Spiegeleier auf das Brot legen.",
        "Würzen: Mit Salz, Pfeffer und geschnittenem Schnittlauch bestreuen."
      ]
    }
  }
};
