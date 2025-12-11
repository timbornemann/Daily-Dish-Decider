import { RecipeDefinition } from '../types';

export const LENTIL_STEW: RecipeDefinition = {
  id: 'local-lentil-stew',
  prepTime: '55 mins',
  tags: ["Dinner","German","One Pot","Lentil","Vegetable","Bacon","Soup","Hearty"],
  basePortions: 4,
  ingredients: [
  {
    id: 'lentil',
    amount: '300g'
  },
  {
    id: 'carrot',
    amount: '1'
  },
  {
    id: 'potato',
    amount: '2'
  },
  {
    id: 'chicken_broth',
    amount: '1 liter'
  },
  {
    id: 'bacon',
    amount: '80g'
  }
],
  content: {
    en: {
      title: "Lentil Stew",
      description: "Hearty one-pot.",
      steps: [
  "Prepare ingredients: Rinse 300g brown or green lentils in cold water until water runs clear. Drain well. Dice 1 onion and 1 carrot. Cut 2 potatoes into 2cm cubes. Dice 80g bacon if using.",
  "Sauté base: Heat 2 tbsp oil (or render bacon fat) in a large pot over medium heat. Add diced onion and carrot, cook for 5 minutes until softened. Add bacon if using and cook for 2 more minutes until crispy.",
  "Add lentils: Add rinsed lentils to the pot. Stir to coat with oil. Add 1 liter of chicken or vegetable broth. Bring to a boil, then reduce heat to low.",
  "Simmer: Add potato cubes. Cover and simmer gently for 30-40 minutes, stirring occasionally, until lentils are tender but not mushy and potatoes are soft. The stew should be thick but still soupy.",
  "Check consistency: After 30 minutes, check if lentils are done - they should be tender but still hold their shape. If too thick, add more broth or water. If too thin, continue cooking uncovered for 5-10 minutes.",
  "Season: Add 1-2 tbsp vinegar (this brightens the flavor), salt, and pepper to taste. Stir well. The stew should be hearty, flavorful, and well-seasoned.",
  "Serve: Serve hot in bowls. The lentils should be tender, the vegetables should be soft, and the stew should be thick and comforting. Best enjoyed with crusty bread."
]
    },
    de: {
      title: "Linseneintopf",
      description: "Deftiger Klassiker.",
      steps: [
  "Zutaten vorbereiten: 300g braune oder grüne Linsen in kaltem Wasser spülen, bis das Wasser klar läuft. Gut abtropfen lassen. 1 Zwiebel und 1 Karotte würfeln. 2 Kartoffeln in 2cm große Würfel schneiden. 80g Speck würfeln, falls verwendet.",
  "Basis andünsten: 2 EL Öl (oder Speckfett auslassen) in einem großen Topf bei mittlerer Hitze erhitzen. Gewürfelte Zwiebel und Karotte hinzufügen und 5 Minuten kochen, bis sie weich sind. Speck hinzufügen, falls verwendet, und 2 weitere Minuten kochen, bis knusprig.",
  "Linsen hinzufügen: Gespülte Linsen zum Topf geben. Umrühren, um mit Öl zu bedecken. 1 Liter Hühner- oder Gemüsebrühe hinzufügen. Zum Kochen bringen, dann Hitze auf niedrig reduzieren.",
  "Köcheln lassen: Kartoffelwürfel hinzufügen. Abdecken und 30-40 Minuten sanft köcheln lassen, gelegentlich umrühren, bis die Linsen zart, aber nicht matschig sind und die Kartoffeln weich sind. Der Eintopf sollte dick, aber noch suppig sein.",
  "Konsistenz prüfen: Nach 30 Minuten prüfen, ob die Linsen fertig sind - sie sollten zart sein, aber noch ihre Form behalten. Wenn zu dick, mehr Brühe oder Wasser hinzufügen. Wenn zu dünn, weiterhin ungedeckt 5-10 Minuten kochen.",
  "Würzen: 1-2 EL Essig hinzufügen (dies hellt den Geschmack auf), Salz und Pfeffer nach Geschmack. Gut umrühren. Der Eintopf sollte deftig, geschmackvoll und gut gewürzt sein.",
  "Servieren: Heiß in Schalen servieren. Die Linsen sollten zart sein, das Gemüse sollte weich sein, und der Eintopf sollte dick und tröstend sein. Am besten mit knusprigem Brot genießen."
]
    }
  }
};
