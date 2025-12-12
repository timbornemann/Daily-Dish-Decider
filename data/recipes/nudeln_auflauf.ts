import { RecipeDefinition } from '../../types';

export const NUDELN_AUFLAUF: RecipeDefinition = {
  id: 'local-nudeln-auflauf',
  prepTime: '45 mins',
  tags: ["Dinner","Oven","Baking","Pasta","Cheese","Family","Casserole"],
  basePortions: 4,
  ingredients: [
  {
    id: 'pasta',
    amount: '500g'
  },
  {
    id: 'ham',
    amount: '100g'
  },
  {
    id: 'frozen_peas',
    amount: '100g'
  },
  {
    id: 'cream',
    amount: '200ml'
  },
  {
    id: 'cheese',
    amount: '200g'
  }
],
  content: {
    en: {
      title: "Pasta Casserole",
      description: "Baked cheesy goodness.",
      steps: [
  "Preheat: Preheat oven to 200°C. Grease a baking dish.",
  "Mix: Add 500g uncooked pasta (or precooked, shorten baking time), 100g diced ham (optional), and 100g frozen peas to the dish.",
  "Liquid: Whisk 200ml cream with 200ml water (or broth), salt, pepper, and nutmeg. Pour over pasta so it is covered.",
  "Bake: Sprinkle 200g cheese on top. Bake approx 45 mins until pasta is soft and cheese golden (for uncooked pasta). If pasta is precooked, 20-25 mins suffice."
]
    },
    de: {
      title: "Nudelauflauf",
      description: "Überbackener Genuss.",
      steps: [
  "Ofen vorheizen: Auf 200°C Ober-/Unterhitze vorheizen. Auflaufform fetten.",
  "Mischen: 500g ungekochte Nudeln (oder vorgekocht, dann Backzeit verkürzen), 100g Schinkenwürfel (optional) und 100g gefrorene Erbsen in die Form geben.",
  "Gusss: 200ml Sahne mit 200ml Wasser (oder Brühe), Salz, Pfeffer und Muskat verquirlen. Über die Nudeln gießen, sodass sie bedeckt sind.",
  "Käse & Backen: 200g Käse darüber streuen. Ca. 45 Minuten backen, bis die Nudeln weich und der Käse goldbraun ist (bei ungekochten Nudeln). Wenn Nudeln vorgekocht, reichen 20-25 Min."
]
    }
  }
};
