import { RecipeDefinition } from '../../../../types';

export const FLAMMKUCHEN: RecipeDefinition = {
  id: 'local-flammkuchen',
  prepTime: '20 mins',
  tags: ["Dinner","French","German","Baking","Crispy","Bacon","Onion","Comfort Food"],
  basePortions: 2,
  ingredients: [
  {
    id: 'flour',
    amount: '250g (or Dough)'
  },
  {
    id: 'creme_fraiche',
    amount: '200g'
  },
  {
    id: 'bacon',
    amount: '100g'
  },
  {
    id: 'onion',
    amount: '1'
  }
],
  content: {
    en: {
      title: "Alsatian Flammkuchen",
      description: "Thin and crispy.",
      steps: [
  "Prep: Preheat oven to 220°C/430°F. Roll out dough (or use store-bought).",
  "Top: Spread 200g creme fraiche on dough. Season with salt and pepper.",
  "Garnish: Slice 1 onion into thin rings. Scatter onions and 100g bacon bits on top.",
  "Bake: Bake for 10-15 mins until edges are crispy and brown."
]
    },
    de: {
      title: "Elsässer Flammkuchen",
      description: "Hauchdünn und knusprig.",
      steps: [
  "Vorbereiten: Ofen auf 220°C (Ober-/Unterhitze) vorheizen. Teig ausrollen (oder Fertigteig nehmen).",
  "Belegen: Teig mit 200g Creme Fraiche bestreichen. Mit Salz und Pfeffer würzen.",
  "Topping: 1 Zwiebel in feine Ringe schneiden. 100g Speckwürfel darauf verteilen.",
  "Backen: Im heißen Ofen 10-15 Min backen, bis der Rand knusprig braun ist."
]
    }
  }
};
