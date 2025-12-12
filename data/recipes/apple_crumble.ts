import { RecipeDefinition } from '../../types';

export const APPLE_CRUMBLE: RecipeDefinition = {
  id: 'local-apple-crumble',
  prepTime: '45 mins',
  tags: ["Dessert","Baking","Fruit","Apple","Sweet","Comfort Food","Vegetarian"],
  basePortions: 4,
  ingredients: [
  {
    id: 'apple',
    amount: '4'
  },
  {
    id: 'flour',
    amount: '100g'
  },
  {
    id: 'sugar',
    amount: '80g'
  },
  {
    id: 'butter',
    amount: '80g'
  },
  {
    id: 'cinnamon',
    amount: '1 tsp'
  }
],
  content: {
    en: {
      title: "Apple Crumble",
      description: "Warm apple dessert.",
      steps: [
  "Prep Apples: Peel, core, and dice 4 apples. Toss with 1 tsp cinnamon and 1 tbsp sugar. Place in a baking dish.",
  "Make Crumble: Rub 100g flour, 80g sugar, and 80g cold butter (cubed) together with your fingertips until it resembles breadcrumbs.",
  "Bake: Scatter crumble topping over apples. Bake at 180°C/350°F for 30 mins until topping is golden.",
  "Serve: Serve warm, preferably with vanilla ice cream or custard."
]
    },
    de: {
      title: "Apfel-Crumble",
      description: "Warmer Apfelauflauf mit Streuseln.",
      steps: [
  "Äpfel vorbereiten: 4 Äpfel schälen, entkernen und würfeln. Mit 1 TL Zimt und 1 EL Zucker mischen. In eine Auflaufform geben.",
  "Streusel machen: 100g Mehl, 80g Zucker und 80g kalte Butter (in Stücken) mit den Händen zu Krümeln verkneten.",
  "Backen: Streusel über den Äpfeln verteilen. Bei 180°C ca. 30 Min backen, bis die Streusel goldbraun sind.",
  "Servieren: Warm servieren, am besten mit Vanilleeis oder Sahne."
]
    }
  }
};
