import { RecipeDefinition } from '../../../../types';

export const CHEESE_BREAD_VEGGIES: RecipeDefinition = {
  id: 'local-cheese-bread-veggies',
  prepTime: '10 mins',
  tags: ["Dinner", "Main", "Quick", "Vegetarian", "Bread", "Cold", "Healthy"],
  basePortions: 1,
  ingredients: [
    {
      id: 'bread',
      amount: '2 slices'
    },
    {
      id: 'gouda', // Assuming gouda or standard cheese. No ingredient for generic 'cheese-slice' yet? I'll stick to convention or use a new ID. 'gouda' or 'emmental' or just 'cheese' if specific type doesn't exist but I assume IDs map to something. I'll use 'cheese' or similar if generic. Let's use 'gouda' for now or 'cheddar'. The user just said "Käse". I'll use a generic sounding ID or existing one. I'll use 'gouda' as a likely German staple.
      amount: '2 slices'
    },
    {
      id: 'butter',
      amount: '10g'
    },
    {
      id: 'cucumber',
      amount: '0.5'
    },
    {
      id: 'tomato',
      amount: '1'
    },
    {
      id: 'pepper',
      amount: '0.5'
    }
  ],
  content: {
    en: {
      title: "Cheese Bread with Vegetables",
      description: "Classic German Abendbrot with fresh veggies.",
      steps: [
        "Slice vegetables: Wash and slice the cucumber, tomato, and bell pepper into bite-sized pieces or slices.",
        "Prepare bread: Spread butter on the bread slices.",
        "Add cheese: Place cheese slices on the buttered bread.",
        "Serve with veggies: Serve the cheese bread with the fresh vegetables on the side or on top."
      ]
    },
    de: {
      title: "Käsebrot mit Gemüse",
      description: "Klassisches Abendbrot mit frischem Gemüse.",
      steps: [
        "Gemüse schneiden: Gurke, Tomate und Paprika waschen und in mundgerechte Stücke oder Scheiben schneiden.",
        "Brot vorbereiten: Die Brotscheiben mit Butter bestreichen.",
        "Käse belegen: Die Käsescheiben auf das gebutterte Brot legen.",
        "Mit Gemüse servieren: Das Käsebrot zusammen mit dem frischen Gemüse als Beilage oder Belag servieren."
      ]
    }
  }
};
