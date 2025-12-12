import { RecipeDefinition } from '../../types';

export const NUDELN_TOMATENSAUCE: RecipeDefinition = {
  id: 'local-nudeln-tomatensauce',
  prepTime: '20 mins',
  tags: ["Dinner","Vegetarian","Classic","Pasta","Tomato","Italian","Simple"],
  basePortions: 2,
  ingredients: [
  {
    id: 'pasta',
    amount: '400g'
  },
  {
    id: 'canned_tomato',
    amount: '1 can (Passata)'
  },
  {
    id: 'onion',
    amount: '1'
  },
  {
    id: 'garlic',
    amount: '2 cloves'
  },
  {
    id: 'basil',
    amount: 'handful'
  }
],
  content: {
    en: {
      title: "Pasta Tomato Sauce",
      description: "Classic Napoli style.",
      steps: [
  "Prep: Finely dice 1 onion and 2 garlic cloves. Chop a handful of basil.",
  "Cook Sauce: Heat 2 tbsp olive oil in a pot. Sauté onions and garlic until translucent. Add 1 can passata (tomatoes). Season with salt, pepper, and a pinch of sugar. Simmer for 10 minutes. Stir in basil.",
  "Boil Pasta: Meanwhile, cook 400g pasta in salted water until al dente. Drain.",
  "Combine: Add pasta to the sauce, toss well, and serve hot. Sprinkle with Parmesan."
]
    },
    de: {
      title: "Nudeln mit Tomatensauce",
      description: "Der Klassiker Napoli.",
      steps: [
  "Vorbereitung: 1 Zwiebel und 2 Knoblauchzehen fein würfeln. Eine Handvoll Basilikum hacken.",
  "Sauce kochen: 2 EL Olivenöl in einem Topf erhitzen. Zwiebeln und Knoblauch glasig dünsten. 1 Dose Passata (Tomaten) hinzugeben. Mit Salz, Pfeffer und einer Prise Zucker würzen. 10 Minuten köcheln lassen. Basilikum einrühren.",
  "Nudeln kochen: Währenddessen 400g Nudeln in Salzwasser al dente kochen. Abgießen.",
  "Mischen: Nudeln zur Sauce geben, gut durchschwenken und heiß servieren. Mit Parmesan bestreuen."
]
    }
  }
};
