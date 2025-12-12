import { RecipeDefinition } from '../../types';

export const BLUEBERRY_MUFFINS: RecipeDefinition = {
  id: 'local-blueberry-muffins',
  prepTime: '35 mins',
  tags: ["Baking", "Breakfast", "Snack", "Sweet", "Vegetarian", "Fruit"],
  basePortions: 12,
  ingredients: [
    { id: 'flour', amount: '250g' },
    { id: 'sugar', amount: '150g' },
    { id: 'baking_powder', amount: '2 tsp' },
    { id: 'salt', amount: '0.5 tsp' },
    { id: 'egg', amount: '2' },
    { id: 'butter', amount: '115g' },
    { id: 'milk', amount: '120ml' },
    { id: 'vanilla_extract', amount: '1 tsp' },
    { id: 'blueberry', amount: '200g' }
  ],
  content: {
    en: {
      title: "Best Blueberry Muffins",
      description: "Tall, buttery muffins bursting with fresh blueberries.",
      steps: [
        "Preheat: Preheat oven to 220°C/425°F. Line muffin tin.",
        "Wet Ingredients: Whisk 115g melted butter and 150g sugar. Beat in 2 eggs, milk, and vanilla.",
        "Dry Ingredients: Fold in 250g flour, baking powder, and salt until just combined.",
        "Berries: Gently fold in 200g blueberries.",
        "Bake: Bake at 220°C for 5 mins, then lower to 180°C/350°F for 18-20 mins.",
        "Cool: Let cool in pan for 5 mins."
      ]
    },
    de: {
      title: "Blaubeermuffins",
      description: "Hohe, buttrige Muffins voller frischer Blaubeeren.",
      steps: [
        "Vorheizen: Ofen auf 220°C vorheizen. Muffinblech auskleiden.",
        "Feucht: 115g geschmolzene Butter und 150g Zucker verrühren. 2 Eier, Milch und Vanille unterrühren.",
        "Trocken: 250g Mehl, Backpulver und Salz unterheben, nur kurz rühren.",
        "Beeren: 200g Blaubeeren vorsichtig unterheben.",
        "Backen: 5 Min bei 220°C backen, dann auf 180°C reduzieren und 18-20 Min fertig backen.",
        "Abkühlen: 5 Min in der Form lassen."
      ]
    }
  }
};
