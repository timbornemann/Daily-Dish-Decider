import { RecipeDefinition } from '../../../types';

export const NUTELLA_BREAD: RecipeDefinition = {
  id: 'local-nutella-bread',
  prepTime: '2 mins',
  tags: ["Breakfast", "Sweet", "Quick", "Vegetarian", "Bread", "Comfort"],
  basePortions: 1,
  ingredients: [
    {
      id: 'bread',
      amount: '2 slices'
    },
    {
      id: 'nutella',
      amount: '30g'
    },
    {
      id: 'butter',
      amount: '10g'
    }
  ],
  content: {
    en: {
      title: "Nutella Bread",
      description: "Classic sweet breakfast.",
      steps: [
        "Toast bread: Toast the slices of bread until golden brown and crispy.",
        "Butter (optional): Spread a thin layer of butter on the warm toast for extra decadence.",
        "Spread Nutella: Generously spread Nutella over the bread.",
        "Serve: Enjoy immediately while the bread is still warm."
      ]
    },
    de: {
      title: "Nutella Brot",
      description: "Klassisches süßes Frühstück.",
      steps: [
        "Brot toasten: Die Brotscheiben goldbraun und knusprig toasten.",
        "Buttern (optional): Eine dünne Schicht Butter auf das warme Toast streichen.",
        "Nutella verstreichen: Nutella großzügig auf dem Brot verteilen.",
        "Servieren: Sofort genießen, solange das Brot noch warm ist."
      ]
    }
  }
};
