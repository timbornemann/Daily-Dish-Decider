import { RecipeDefinition } from '../../types';

export const RATATOUILLE: RecipeDefinition = {
  id: 'local-ratatouille',
  prepTime: '40 mins',
  tags: ["Dinner","Vegetarian","French","Zucchini","Pepper","Tomato","Roasted","Stew"],
  basePortions: 4,
  ingredients: [
  {
    id: 'zucchini',
    amount: '2'
  },
  {
    id: 'pepper',
    amount: '1'
  },
  {
    id: 'tomato',
    amount: '3'
  },
  {
    id: 'onion',
    amount: '1'
  },
  {
    id: 'olive_oil',
    amount: '2 tbsp'
  },
  {
    id: 'herbs',
    amount: '1 tsp'
  }
],
  content: {
    en: {
      title: "Quick Ratatouille",
      description: "Vegetable stew.",
      steps: [
  "Prepare vegetables: Dice 2 zucchini, 1 bell pepper, and 3 tomatoes into 2cm cubes. Try to make them similar sizes for even cooking. Dice 1 onion. Mince 2 cloves of garlic.",
  "Sauté aromatics: Heat 2 tbsp olive oil in a large pot or Dutch oven over medium heat. Add diced onion and cook for 4-5 minutes until softened. Add minced garlic and cook for 1 more minute until fragrant.",
  "Add vegetables: Add diced zucchini, pepper, and tomatoes to the pot. Stir to combine. Season with 1 tsp salt, 1/2 tsp black pepper, and 1 tsp dried herbs (herbes de Provence, oregano, or basil).",
  "Simmer: Reduce heat to low. Cover and simmer gently for 20-25 minutes, stirring occasionally, until vegetables are tender but not mushy. The tomatoes should break down and create a sauce.",
  "Check consistency: After 20 minutes, check if vegetables are done - they should be soft but still hold their shape. If there's too much liquid, remove lid and cook for 5 more minutes to reduce. If too dry, add a splash of water.",
  "Finish: Taste and adjust seasoning. The ratatouille should be flavorful, with vegetables that are tender but not overcooked. Stir in 1 more tbsp olive oil at the end for richness.",
  "Serve: Serve hot as a side dish or main course. Traditionally served with crusty bread or over rice. Can also be served cold as a salad. The vegetables should be well-cooked but still have some texture."
]
    },
    de: {
      title: "Schnelles Ratatouille",
      description: "Gemüse-Eintopf.",
      steps: [
  "Gemüse vorbereiten: 2 Zucchini, 1 Paprika und 3 Tomaten in 2cm große Würfel schneiden. Versuchen Sie, sie ähnlich groß zu machen für gleichmäßiges Garen. 1 Zwiebel würfeln. 2 Knoblauchzehen hacken.",
  "Aromaten andünsten: 2 EL Olivenöl in einem großen Topf oder Dutch Oven bei mittlerer Hitze erhitzen. Gewürfelte Zwiebel hinzufügen und 4-5 Minuten kochen, bis sie weich ist. Gehackten Knoblauch hinzufügen und 1 weitere Minute kochen, bis er duftet.",
  "Gemüse hinzufügen: Gewürfelte Zucchini, Paprika und Tomaten zum Topf geben. Umrühren, um zu vermischen. Mit 1 TL Salz, 1/2 TL schwarzem Pfeffer und 1 TL getrockneten Kräutern (Kräuter der Provence, Oregano oder Basilikum) würzen.",
  "Köcheln lassen: Hitze auf niedrig reduzieren. Abdecken und 20-25 Minuten sanft köcheln lassen, gelegentlich umrühren, bis das Gemüse zart, aber nicht matschig ist. Die Tomaten sollten zerfallen und eine Sauce bilden.",
  "Konsistenz prüfen: Nach 20 Minuten prüfen, ob das Gemüse fertig ist - es sollte weich sein, aber noch seine Form behalten. Wenn zu viel Flüssigkeit vorhanden ist, Deckel entfernen und 5 weitere Minuten kochen, um zu reduzieren. Wenn zu trocken, einen Schuss Wasser hinzufügen.",
  "Fertigstellen: Abschmecken und nachwürzen. Das Ratatouille sollte geschmackvoll sein, mit Gemüse, das zart, aber nicht überkocht ist. Am Ende 1 weiteren EL Olivenöl für Reichhaltigkeit einrühren.",
  "Servieren: Heiß als Beilage oder Hauptgericht servieren. Traditionell mit knusprigem Brot oder über Reis serviert. Kann auch kalt als Salat serviert werden. Das Gemüse sollte gut gekocht sein, aber noch etwas Textur haben."
]
    }
  }
};
