import { RecipeDefinition } from '../../../types';

export const SANDWICH_SALAMI_CHEESE: RecipeDefinition = {
  id: 'local-sandwich-salami-cheese',
  prepTime: '8 mins',
  tags: ["Snack", "Main", "Quick", "Meat", "Bread", "Warm", "Cheesy"],
  basePortions: 1,
  ingredients: [
    {
      id: 'toast',
      amount: '2 slices'
    },
    {
      id: 'salami',
      amount: '2 slices'
    },
    {
      id: 'gouda',
      amount: '1 slice'
    },
    {
      id: 'butter',
      amount: '5g'
    }
  ],
  content: {
    en: {
      title: "Salami Cheese Sandwich",
      description: "Hot and crispy sandwich maker toast.",
      steps: [
        "Preheat sandwich maker: Plug in your sandwich maker or panini press.",
        "Assemble sandwich: Butter the outside of the bread (optional for crispiness). Place cheese and salami between the bread slices.",
        "Toast: Place in the sandwich maker and close the lid. Toast for 3-5 minutes until golden brown and cheese is melted.",
        "Serve: Be careful, hot cheese! Cut in half and enjoy."
      ]
    },
    de: {
      title: "Salami Käse Sandwich",
      description: "Heißer und knuspriger Toast aus dem Sandwichmaker.",
      steps: [
        "Sandwichmaker vorheizen: Den Sandwichmaker oder Kontaktgrill einschalten.",
        "Sandwich belegen: Die Außenseiten des Brotes buttern (optional für Knusprigkeit). Salami und Käse zwischen die Brotscheiben legen.",
        "Toasten: In den Sandwichmaker legen und Deckel schließen. 3-5 Minuten toasten, bis es goldbraun ist und der Käse geschmolzen ist.",
        "Servieren: Vorsicht, heißer Käse! Halbieren und genießen."
      ]
    }
  }
};
