import { RecipeDefinition } from '../types';

export const NUDELN_KAESESAUCE: RecipeDefinition = {
  id: 'local-nudeln-kaesesauce',
  prepTime: '15 mins',
  tags: ["Dinner","Vegetarian","Comfort Food","Pasta","Cheese","Cream","Quick"],
  basePortions: 2,
  ingredients: [
  {
    id: 'pasta',
    amount: '400g'
  },
  {
    id: 'cream',
    amount: '200ml'
  },
  {
    id: 'butter',
    amount: '30g'
  },
  {
    id: 'cheese',
    amount: '150g'
  }
],
  content: {
    en: {
      title: "Pasta Cheese Sauce",
      description: "Creamy and cheesy.",
      steps: [
  "Boil Pasta: Cook 400g pasta in salted water. Drain.",
  "Make Sauce: In a pot, heat 200ml heavy cream and 30g butter (do not boil).",
  "Melt Cheese: Stir in 150g grated cheese (Gouda or Emmental) and a pinch of nutmeg. Stir over low heat until cheese is melted.",
  "Serve: Toss pasta with the sauce, season with pepper, and serve."
]
    },
    de: {
      title: "Nudeln in Käsesauce",
      description: "Cremig und deftig.",
      steps: [
  "Nudeln kochen: 400g Nudeln in Salzwasser garen. Abgießen.",
  "Sauce ansetzen: In einem Topf 200ml Sahne und 30g Butter erhitzen (nicht kochen).",
  "Käse schmelzen: 150g geriebenen Käse (Gouda oder Emmentaler) und eine Prise Muskat einrühren. Bei schwacher Hitze rühren, bis der Käse geschmolzen ist.",
  "Servieren: Nudeln mit der Sauce mischen, mit Pfeffer abschmecken und servieren."
]
    }
  }
};
