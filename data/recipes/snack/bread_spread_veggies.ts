import { RecipeDefinition } from '../../../types';

export const BREAD_SPREAD_VEGGIES: RecipeDefinition = {
  id: 'local-bread-spread-veggies',
  prepTime: '5 mins',
  tags: ["Snack", "Dinner", "Quick", "Vegetarian", "Bread", "Cold", "Flexible"],
  basePortions: 1,
  ingredients: [
    {
      id: 'bread',
      amount: '2 slices'
    },
    {
      id: 'cream_cheese', // Representing "wählbarer Aufstrich" via a generic spread like cream cheese or hummus.
      amount: '50g'
    },
    {
      id: 'cucumber',
      amount: '0.5'
    },
    {
      id: 'radish',
      amount: '4'
    },
    {
      id: 'cress',
      amount: '1 tbsp'
    }
  ],
  content: {
    en: {
      title: "Bread with Spread & Veggies",
      description: "Customizable bread with your favorite spread and veggies.",
      steps: [
        "Choose spread: Use cream cheese, hummus, or any vegetable spread you like.",
        "Prepare bread: Generously spread your chosen topping on the bread slices.",
        "Add veggies: Top with sliced radish, cucumber, or cress.",
        "Serve: Perfect for a quick snack or light dinner."
      ]
    },
    de: {
      title: "Brot mit Aufstrich & Gemüse",
      description: "Anpassbares Brot mit Lieblingsaufstrich und Gemüse.",
      steps: [
        "Aufstrich wählen: Frischkäse, Hummus oder einen pflanzlichen Aufstrich nach Wahl verwenden.",
        "Brot bestreichen: Den gewählten Aufstrich großzügig auf die Brotscheiben streichen.",
        "Gemüse hinzufügen: Mit Radieschenscheiben, Gurke oder Kresse belegen.",
        "Servieren: Perfekt für einen schnellen Snack oder ein leichtes Abendessen."
      ]
    }
  }
};
