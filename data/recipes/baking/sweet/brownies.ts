import { RecipeDefinition } from '../../../../types';

export const BROWNIES: RecipeDefinition = {
  id: 'local-brownies',
  prepTime: '40 mins',
  tags: ["Baking", "Dessert", "Chocolate", "Sweet", "Vegetarian", "Rich"],
  basePortions: 9,
  ingredients: [
    { id: 'butter', amount: '170g' },
    { id: 'sugar', amount: '300g' },
    { id: 'egg', amount: '3' },
    { id: 'vanilla_extract', amount: '1 tsp' },
    { id: 'cocoa_powder', amount: '45g' },
    { id: 'flour', amount: '85g' },
    { id: 'salt', amount: '0.5 tsp' },
    { id: 'chocolate_chips', amount: '150g' }
  ],
  content: {
    en: {
      title: "Fudgy Brownies",
      description: "Rich, fudgy chocolate brownies with a crackly top.",
      steps: [
        "Preheat: Preheat oven to 175°C/350°F. Line an 8x8 inch pan.",
        "Melt: Melt 170g butter and mix with 300g sugar. Whisk in 3 eggs and vanilla until shiny.",
        "Add Dry: Fold in 45g cocoa, 85g flour, and salt. Stir in chocolate chips.",
        "Bake: Pour into pan. Bake 25-30 mins. Do not overbake!",
        "Cool: Let cool completely before cutting."
      ]
    },
    de: {
      title: "Schoko-Brownies",
      description: "Reichhaltige, saftige Brownies mit viel Schokolade.",
      steps: [
        "Vorheizen: Ofen auf 175°C vorheizen. Form (20x20cm) auskleiden.",
        "Schmelzen: 170g Butter schmelzen und mit 300g Zucker mischen. 3 Eier und Vanille unterrühren, bis die Masse glänzt.",
        "Trocken: 45g Kakao, 85g Mehl und Salz unterheben. Schokostückchen zugeben.",
        "Backen: In die Form geben. 25-30 Min backen. Nicht zu lange!",
        "Abkühlen: Komplett auskühlen lassen vor dem Schneiden."
      ]
    }
  }
};
