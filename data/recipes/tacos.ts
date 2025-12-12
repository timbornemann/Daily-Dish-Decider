import { RecipeDefinition } from '../../types';

export const TACOS: RecipeDefinition = {
  id: 'local-tacos',
  prepTime: '20 mins',
  tags: ["Dinner","Mexican","Fun","Beef","Tortilla","Spicy","Cheese","Quick","Interactive"],
  basePortions: 4,
  ingredients: [
  {
    id: 'ground_beef',
    amount: '400g'
  },
  {
    id: 'tortilla',
    amount: '8'
  },
  {
    id: 'cheese',
    amount: '100g'
  },
  {
    id: 'lettuce',
    amount: '1/2 head'
  },
  {
    id: 'chili_flakes',
    amount: '1 tbsp'
  },
  {
    id: 'canned_tomato',
    amount: '100g (Salsa)'
  }
],
  content: {
    en: {
      title: "Beef Tacos",
      description: "Crunchy filled shells.",
      steps: [
  "Cook beef: Heat 2 tbsp oil in a large pan over medium-high heat. Add 400g ground beef and cook, breaking it up with a spoon, for 5-6 minutes until browned. Drain excess fat if needed.",
  "Season beef: Add 1 tbsp chili flakes, 1 tsp cumin, 1 tsp paprika, and salt to taste. Stir and cook for 2 more minutes until fragrant. Add 100g salsa or diced tomatoes if desired. Keep warm.",
  "Warm shells: Heat taco shells according to package directions - usually in the oven at 180°C/355°F for 3-5 minutes, or in a dry pan for 30 seconds per side. They should be warm and crispy.",
  "Prepare toppings: Shred 100g cheese. Chop 1/2 head of lettuce into thin strips. Dice 1 tomato. Have sour cream, salsa, and hot sauce ready if desired.",
  "Fill tacos: Take a warm shell. Add a spoonful of seasoned beef, then top with cheese, lettuce, and tomato. Don't overfill or they'll be hard to eat.",
  "Add condiments: Drizzle with sour cream, salsa, or hot sauce if desired. The taco should be full but not overflowing.",
  "Serve: Serve immediately while shells are still warm and crispy. Best eaten with your hands. Have napkins ready!"
]
    },
    de: {
      title: "Rinder Tacos",
      description: "Gefüllte Maisschalen.",
      steps: [
  "Fleisch braten: 2 EL Öl in einer großen Pfanne bei mittlerer bis hoher Hitze erhitzen. 400g Hackfleisch hinzufügen und 5-6 Minuten braten, dabei mit einem Löffel zerkleinern, bis es gebräunt ist. Überschüssiges Fett bei Bedarf abgießen.",
  "Fleisch würzen: 1 EL Chiliflocken, 1 TL Kreuzkümmel, 1 TL Paprika und Salz nach Geschmack hinzufügen. Umrühren und 2 weitere Minuten kochen, bis es duftet. Bei Bedarf 100g Salsa oder gewürfelte Tomaten hinzufügen. Warm halten.",
  "Schalen wärmen: Taco-Schalen nach Packungsanleitung erhitzen - meist im Ofen bei 180°C für 3-5 Minuten oder in einer trockenen Pfanne 30 Sekunden pro Seite. Sie sollten warm und knusprig sein.",
  "Toppings vorbereiten: 100g Käse reiben. 1/2 Kopf Salat in dünne Streifen schneiden. 1 Tomate würfeln. Sauerrahm, Salsa und scharfe Sauce bereithalten, falls gewünscht.",
  "Tacos füllen: Eine warme Schale nehmen. Einen Löffel gewürztes Fleisch hinzufügen, dann mit Käse, Salat und Tomate toppen. Nicht überfüllen, sonst sind sie schwer zu essen.",
  "Gewürze hinzufügen: Nach Wunsch mit Sauerrahm, Salsa oder scharfer Sauce beträufeln. Der Taco sollte voll, aber nicht überlaufend sein.",
  "Servieren: Sofort servieren, solange die Schalen noch warm und knusprig sind. Am besten mit den Händen essen. Servietten bereithalten!"
]
    }
  }
};
