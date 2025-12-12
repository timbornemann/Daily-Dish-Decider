import { RecipeDefinition } from '../../../../types';

export const LEMON_CAKE: RecipeDefinition = {
  id: 'local-lemon-cake',
  prepTime: '60 mins',
  tags: ["Baking", "Dessert", "Cake", "Lemon", "Sweet", "Vegetarian"],
  basePortions: 8,
  ingredients: [
    { id: 'butter', amount: '225g' },
    { id: 'sugar', amount: '225g' },
    { id: 'egg', amount: '4' },
    { id: 'flour', amount: '275g' },
    { id: 'lemon', amount: '2' },
    { id: 'baking_powder', amount: '2 tsp' },
    { id: 'milk', amount: '4 tbsp' },
    // Drizzle
    { id: 'sugar', amount: '150g' }, // Extra sugar for drizzle
    { id: 'lemon', amount: '1' }      // Extra lemon juice
  ],
  content: {
    en: {
      title: "Lemon Drizzle Cake",
      description: "A moist, zesty lemon cake with a crunchy sugar topping.",
      steps: [
        "Preheat Oven: Preheat to 180°C/350°F. Grease and line a loaf tin.",
        "Mix Batter: Beat 225g softened butter and 225g sugar until pale. Add 4 eggs, one by one. Fold in 275g flour, 2 tsp baking powder, lemon zest (from 2 lemons), and 4 tbsp milk.",
        "Bake: Pour into tin and bake for 45-55 mins until a skewer comes out clean.",
        "Make Drizzle: Mix 150g sugar with juice of 1.5 lemons.",
        "Finish: Poke holes in the warm cake and pour over the drizzle. Let cool."
      ]
    },
    de: {
      title: "Zitronenkuchen",
      description: "Saftiger Zitronenkuchen mit knackigem Zuckerguss.",
      steps: [
        "Vorheizen: Ofen auf 180°C vorheizen. Kastenform fetten.",
        "Teig: 225g Butter und 225g Zucker schaumig schlagen. 4 Eier einzeln unterrühren. 275g Mehl, 2 TL Backpulver, Zitronenschale (von 2 Zitronen) und 4 EL Milch unterheben.",
        "Backen: In die Form füllen und 45-55 Min backen.",
        "Guss: 150g Zucker mit dem Saft von 1,5 Zitronen mischen.",
        "Fertigstellen: Löcher in den warmen Kuchen stechen und Guss darübergießen. Abkühlen lassen."
      ]
    }
  }
};
