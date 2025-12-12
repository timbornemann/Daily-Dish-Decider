import { RecipeDefinition } from '../../../../types';

export const CINNAMON_ROLLS: RecipeDefinition = {
  id: 'local-cinnamon-rolls',
  prepTime: '120 mins',
  tags: ["Baking", "Dessert", "Breakfast", "Sweet", "Vegetarian", "Comfort Food"],
  basePortions: 12,
  ingredients: [
    { id: 'milk', amount: '250ml' },
    { id: 'butter', amount: '75g' },
    { id: 'flour', amount: '500g' },
    { id: 'yeast', amount: '1 packet' },
    { id: 'sugar', amount: '70g' },
    { id: 'egg', amount: '1' },
    { id: 'salt', amount: '1 tsp' },
    // Filling
    { id: 'butter', amount: '50g' },
    { id: 'sugar', amount: '100g' },
    { id: 'cinnamon', amount: '2 tbsp' },
    // Frosting
    { id: 'cream_cheese', amount: '100g' },
    { id: 'powdered_sugar', amount: '50g' }
  ],
  content: {
    en: {
      title: "Homemade Cinnamon Rolls",
      description: "Fluffy, warm cinnamon rolls with cream cheese frosting.",
      steps: [
        "Dough: Mix 500g flour, 70g sugar, yeast, and salt. Add warm milk (250ml), melted butter (75g), and 1 egg. Knead until smooth. Let rise for 1 hr.",
        "Fill: Roll out dough. Spread 50g soft butter. Sprinkle mix of 100g sugar and 2 tbsp cinnamon. Roll up and cut into 12 slices.",
        "Rise: Place in greased dish. Let rise 30 mins.",
        "Bake: Bake at 180°C/350°F for 20-25 mins.",
        "Frost: Mix 100g cream cheese with 50g powdered sugar. Spread over warm rolls."
      ]
    },
    de: {
      title: "Zimtschnecken",
      description: "Fluffige, warme Zimtschnecken mit Frischkäse-Frosting.",
      steps: [
        "Teig: 500g Mehl, 70g Zucker, Hefe und Salz mischen. Warme Milch (250ml), geschmolzene Butter (75g) und 1 Ei zugeben. Glatt kneten. 1 Std gehen lassen.",
        "Füllen: Teig ausrollen. Mit 50g weicher Butter bestreichen. Mischung aus 100g Zucker und 2 EL Zimt aufstreuen. Einrollen und in 12 Scheiben schneiden.",
        "Gehen lassen: In gefettete Form legen. 30 Min gehen lassen.",
        "Backen: Bei 180°C 20-25 Min backen.",
        "Frosting: 100g Frischkäse mit 50g Puderzucker verrühren. Auf die warmen Schnecken streichen."
      ]
    }
  }
};
