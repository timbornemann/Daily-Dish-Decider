import { RecipeDefinition } from '../../../types';

export const NUDELN_SALAT: RecipeDefinition = {
  id: 'local-nudeln-salat',
  prepTime: '30 mins',
  tags: ["Lunch","Dinner","Cold","Pasta","Salad","Party","Mayonnaise"],
  basePortions: 4,
  ingredients: [
  {
    id: 'pasta',
    amount: '500g'
  },
  {
    id: 'mayo',
    amount: '100ml'
  },
  {
    id: 'frozen_peas',
    amount: '150g'
  },
  {
    id: 'sausage',
    amount: '2 (Wieners)'
  },
  {
    id: 'cucumber',
    amount: '4 (pickles)'
  }
],
  content: {
    en: {
      title: "Classic Pasta Salad",
      description: "Party hit with mayo.",
      steps: [
  "Cook Pasta: Boil 500g pasta in salted water until soft. Drain and rinse with cold water, let cool.",
  "Chop Ingredients: Chop 4 pickles small. Slice 2 wieners (optional).",
  "Sauce: Mix 100ml mayo (or yogurt mix) with a little pickle juice, salt, and pepper.",
  "Mix: Combine pasta, peas (thawed), corn, pickles, and sausage with the sauce in a large bowl. Let sit for at least 30 mins."
]
    },
    de: {
      title: "Klassischer Nudelsalat",
      description: "Der Partyhit mit Mayo.",
      steps: [
  "Nudeln kochen: 500g Nudeln in Salzwasser weich kochen. Abgießen und mit kaltem Wasser abschrecken, abkühlen lassen.",
  "Zutaten schneiden: 4 Gewürzgurken klein schneiden. 2 Würstchen in Scheiben schneiden (optional).",
  "Sauce: 100ml Mayo (oder Joghurt-Mix) mit etwas Gurkenwasser, Salz und Pfeffer verrühren.",
  "Mischen: Nudeln, Erbsen (aufgetaut), Mais, Gurken und Wurst mit der Sauce in einer großen Schüssel mischen. Mindestens 30 Min ziehen lassen."
]
    }
  }
};
