import { RecipeDefinition } from '../types';

export const POTATO_SOUP: RecipeDefinition = {
  id: 'local-potato-soup',
  prepTime: '35 mins',
  tags: ["Lunch","Soup","Comfort Food","Potato","Vegetable","Cream","One Pot","Warm"],
  basePortions: 4,
  ingredients: [
  {
    id: 'potato',
    amount: '500g'
  },
  {
    id: 'carrot',
    amount: '2'
  },
  {
    id: 'onion',
    amount: '1'
  },
  {
    id: 'chicken_broth',
    amount: '1 liter'
  },
  {
    id: 'cream',
    amount: '100ml'
  }
],
  content: {
    en: {
      title: "Creamy Potato Soup",
      description: "Warming winter soup.",
      steps: [
  "Prepare vegetables: Peel and dice 500g potatoes into 2cm cubes. Dice 1 large onion and 2 carrots. Mince 2 cloves of garlic. Having uniform sizes ensures even cooking.",
  "Sauté aromatics: Heat a large pot over medium heat. Add 2 tbsp butter or oil. Add diced onion and carrots and cook for 5-6 minutes until softened and slightly golden, stirring occasionally.",
  "Add potatoes: Add diced potatoes and minced garlic to the pot. Stir and cook for 2 minutes. Season with salt and pepper. The potatoes should be well-coated with the butter/oil.",
  "Add broth: Pour in 1 liter of chicken broth (or vegetable broth). Bring to a boil, then reduce heat to medium-low. Cover and simmer for 20-25 minutes until potatoes are very tender and easily pierced with a fork.",
  "Blend soup: Remove from heat. Using an immersion blender, blend the soup until smooth and creamy. Alternatively, carefully transfer to a regular blender in batches and blend until smooth (be careful - hot liquids expand).",
  "Add cream: Return blended soup to the pot (if using regular blender). Stir in 100ml cream. Heat gently over low heat for 2-3 minutes until warmed through. Do not boil after adding cream.",
  "Season and serve: Taste and adjust seasoning with salt and pepper. The soup should be smooth, creamy, and well-seasoned. Serve hot, garnished with fresh herbs, croutons, or a drizzle of cream."
]
    },
    de: {
      title: "Kartoffelsuppe",
      description: "Wärmende Suppe.",
      steps: [
  "Gemüse vorbereiten: 500g Kartoffeln schälen und in 2cm Würfel schneiden. 1 große Zwiebel und 2 Karotten würfeln. 2 Knoblauchzehen hacken. Einheitliche Größen gewährleisten gleichmäßiges Garen.",
  "Aromaten andünsten: Einen großen Topf bei mittlerer Hitze erhitzen. 2 EL Butter oder Öl hinzufügen. Gewürfelte Zwiebel und Karotten hinzufügen und 5-6 Minuten kochen, bis sie weich und leicht goldbraun sind, gelegentlich umrühren.",
  "Kartoffeln hinzufügen: Gewürfelte Kartoffeln und gehackten Knoblauch zum Topf geben. Umrühren und 2 Minuten kochen. Mit Salz und Pfeffer würzen. Die Kartoffeln sollten gut mit Butter/Öl bedeckt sein.",
  "Brühe hinzufügen: 1 Liter Hühnerbrühe (oder Gemüsebrühe) hineingießen. Zum Kochen bringen, dann Hitze auf mittlere bis niedrige reduzieren. Abdecken und 20-25 Minuten köcheln lassen, bis die Kartoffeln sehr zart sind und sich leicht mit einer Gabel durchstechen lassen.",
  "Suppe pürieren: Vom Herd nehmen. Mit einem Stabmixer die Suppe pürieren, bis sie glatt und cremig ist. Alternativ vorsichtig portionsweise in einen normalen Mixer geben und pürieren, bis glatt (Vorsicht - heiße Flüssigkeiten dehnen sich aus).",
  "Sahne hinzufügen: Pürierte Suppe zurück in den Topf geben (wenn normaler Mixer verwendet). 100ml Sahne einrühren. Bei niedriger Hitze 2-3 Minuten sanft erhitzen, bis durchgewärmt. Nach dem Hinzufügen der Sahne nicht kochen.",
  "Würzen und servieren: Abschmecken und mit Salz und Pfeffer nachwürzen. Die Suppe sollte glatt, cremig und gut gewürzt sein. Heiß servieren, garniert mit frischen Kräutern, Croutons oder einem Sahne-Spritzer."
]
    }
  }
};
