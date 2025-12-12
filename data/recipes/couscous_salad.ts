import { RecipeDefinition } from '../../types';

export const COUSCOUS_SALAD: RecipeDefinition = {
  id: 'local-couscous-salad',
  prepTime: '15 mins',
  tags: ["Lunch","Salad","Healthy","Vegetarian","Vegan","Quick","No Cook","Fresh"],
  basePortions: 2,
  ingredients: [
  {
    id: 'couscous',
    amount: '200g'
  },
  {
    id: 'cucumber',
    amount: '1'
  },
  {
    id: 'tomato',
    amount: '2'
  },
  {
    id: 'olive_oil',
    amount: '3 tbsp'
  },
  {
    id: 'lemon',
    amount: '1'
  },
  {
    id: 'herbs',
    amount: '1 bunch (Parsley/Mint)'
  }
],
  content: {
    en: {
      title: "Couscous Salad",
      description: "Fresh and healthy.",
      steps: [
  "Soak Couscous: Pour 250ml boiling veggie broth over 200g couscous. Cover and let sit for 5 mins. Fluff with fork.",
  "Veggies: Dice 1 cucumber and 2 tomatoes. Chop parsley and mint.",
  "Dressing: Whisk olive oil, lemon juice, salt, pepper, and (optional) cumin.",
  "Mix: Combine everything. Optional: fold in feta or chickpeas. Let sit briefly."
]
    },
    de: {
      title: "Couscous Salat",
      description: "Frisch und gesund.",
      steps: [
  "Couscous quellen: 200g Couscous mit 250ml kochender Gemüsebrühe übergießen. Abgedeckt 5 Min ziehen lassen. Mit Gabel auflockern.",
  "Gemüse: 1 Gurke und 2 Tomaten fein würfeln. Petersilie und Minze hacken.",
  "Dressing: Aus Olivenöl, Zitronensaft, Salz, Pfeffer und (optional) Kreuzkümmel ein Dressing rühren.",
  "Mischen: Alles vermengen. Optional Feta oder Kichererbsen unterheben. Kurz durchziehen lassen."
]
    }
  }
};
