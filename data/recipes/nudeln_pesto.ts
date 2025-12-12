import { RecipeDefinition } from '../../types';

export const NUDELN_PESTO: RecipeDefinition = {
  id: 'local-nudeln-pesto',
  prepTime: '15 mins',
  tags: ["Dinner","Vegetarian","Quick","Pasta","Pesto","Tomato","Parmesan","Italian"],
  basePortions: 2,
  ingredients: [
  {
    id: 'pasta',
    amount: '400g'
  },
  {
    id: 'parmesan',
    amount: '50g'
  },
  {
    id: 'tomato',
    amount: '6 (cherry)'
  }
],
  content: {
    en: {
      title: "Pasta with Pesto",
      description: "Quick green pasta.",
      steps: [
  "Boil Pasta: Bring a large pot of salted water to a boil. Cook 400g pasta (spaghetti or fusilli) al dente according to package instructions. Reserve a cup of pasta water when draining.",
  "Mix: Return hot pasta to the pot. Add 1 jar of pesto (150-190g) and mix well. If too dry, add a splash of pasta water.",
  "Add Extras: Stir in 6 halved cherry tomatoes (optional). Sprinkle with Parmesan (50g).",
  "Serve: Plate immediately, optionally garnish with fresh basil."
]
    },
    de: {
      title: "Nudeln mit Pesto",
      description: "Schnelle grüne Pasta.",
      steps: [
  "Nudeln kochen: Einen großen Topf mit gesalzenem Wasser zum Kochen bringen. 400g Nudeln (Spaghetti oder Fusilli) nach Packungsanleitung al dente kochen. Beim Abgießen eine Tasse Nudelwasser auffangen.",
  "Vermengen: Die heißen Nudeln zurück in den Topf geben. 1 Glas Pesto (150-190g) hinzufügen und gut vermengen. Falls zu trocken, schluckweise Nudelwasser zugeben.",
  "Extras hinzufügen: 6 halbierte Cherrytomaten (optional) untermischen. Parmesan (50g) darüber streuen.",
  "Servieren: Sofort auf Tellern anrichten, evtl. mit frischem Basilikum garnieren."
]
    }
  }
};
