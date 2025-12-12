import { RecipeDefinition } from '../../types';

export const CHOCOLATE_COOKIES: RecipeDefinition = {
  id: 'local-chocolate-cookies',
  prepTime: '25 mins',
  tags: ["Baking", "Dessert", "Cookies", "Chocolate", "Sweet", "Vegetarian"],
  basePortions: 12,
  ingredients: [
    { id: 'butter', amount: '170g' },
    { id: 'sugar', amount: '100g' },
    { id: 'brown_sugar', amount: '150g' },
    { id: 'egg', amount: '1' },
    { id: 'vanilla_extract', amount: '2 tsp' },
    { id: 'flour', amount: '280g' },
    { id: 'baking_soda', amount: '1 tsp' },
    { id: 'salt', amount: '0.5 tsp' },
    { id: 'chocolate_chips', amount: '250g' }
  ],
  content: {
    en: {
      title: "Chocolate Chip Cookies",
      description: "Classic chewy cookies with plenty of chocolate chips.",
      steps: [
        "Preheat: Preheat oven to 175°C/350°F. Line baking sheets.",
        "Cream Butter: Beat 170g melted butter with 100g sugar and 150g brown sugar until smooth.",
        "Add Wet: Mix in 1 egg and 2 tsp vanilla.",
        "Add Dry: Stir in 280g flour, 1 tsp baking soda, and 0.5 tsp salt. Fold in chocolate chips.",
        "Bake: Scoop dough balls onto sheet. Bake 9-11 mins until edges are golden.",
        "Cool: Let cool on tray for 5 mins."
      ]
    },
    de: {
      title: "Schokocookies",
      description: "Klassische weiche Cookies mit vielen Schokostückchen.",
      steps: [
        "Vorheizen: Ofen auf 175°C vorheizen. Backblech belegen.",
        "Butter schaumig: 170g geschmolzene Butter mit 100g Zucker und 150g braunem Zucker verrühren.",
        "Feucht mischen: 1 Ei und 2 TL Vanilleextrakt zugeben.",
        "Trocken mischen: 280g Mehl, 1 TL Natron und 0,5 TL Salz unterrühren. Schokostückchen unterheben.",
        "Backen: Teigkugeln aufs Blech setzen. 9-11 Min backen, bis die Ränder goldbraun sind.",
        "Abkühlen: 5 Min auf dem Blech lassen."
      ]
    }
  }
};
