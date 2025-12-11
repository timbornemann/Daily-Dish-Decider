import { RecipeDefinition } from '../types';

export const TACO_SALAD: RecipeDefinition = {
  id: 'local-taco-salad',
  prepTime: '20 mins',
  tags: ["Lunch","Salad","Mexican","Beef","Lettuce","Bean","Cheese","Spicy","Fresh"],
  basePortions: 3,
  ingredients: [
  {
    id: 'ground_beef',
    amount: '300g'
  },
  {
    id: 'lettuce',
    amount: '1 head'
  },
  {
    id: 'tomato',
    amount: '2'
  },
  {
    id: 'bean',
    amount: '1 can'
  },
  {
    id: 'pepper',
    amount: '1'
  },
  {
    id: 'cheese',
    amount: '100g'
  }
],
  content: {
    en: {
      title: "Taco Salad",
      description: "All the flavor, no shells.",
      steps: [
  "Cook beef: Heat 2 tbsp oil in a large pan over medium-high heat. Add 300g ground beef and cook, breaking it up with a spoon, for 5-6 minutes until browned. Add 1 tbsp chili flakes and 1 tbsp paprika. Stir and cook for 1 more minute. Drain excess fat if needed.",
  "Add beans: Drain 1 can of beans and add to the pan with the beef. Stir and cook for 2-3 minutes until heated through. Keep warm while you prepare the salad.",
  "Prepare vegetables: Wash and chop 1 head of lettuce into bite-sized pieces. Dice 2 tomatoes. If using corn, drain 1 can or use fresh corn kernels. Have 1 bell pepper diced if desired.",
  "Make dressing: In a small bowl, whisk together 100g yogurt, juice of 1 lime, 1/2 tsp salt, and 1/4 tsp black pepper. Mix until smooth. Adjust to taste.",
  "Assemble salad: In a large bowl, combine lettuce, tomatoes, and any other vegetables. Add warm beef and bean mixture on top. Toss gently if desired, or leave layered.",
  "Add toppings: Sprinkle 100g shredded cheese over the top. Drizzle with yogurt-lime dressing. Add any other desired toppings (sour cream, avocado, jalapeños, etc.).",
  "Serve: Serve immediately while the beef is still warm. The salad should be a mix of warm and cold, crunchy and soft. Best enjoyed fresh - the lettuce will wilt if left too long."
]
    },
    de: {
      title: "Taco-Salat",
      description: "Ohne Taco-Hüllen.",
      steps: [
  "Fleisch braten: 2 EL Öl in einer großen Pfanne bei mittlerer bis hoher Hitze erhitzen. 300g Hackfleisch hinzufügen und 5-6 Minuten braten, dabei mit einem Löffel zerkleinern, bis es gebräunt ist. 1 EL Chiliflocken und 1 EL Paprika hinzufügen. Umrühren und 1 weitere Minute kochen. Überschüssiges Fett bei Bedarf abgießen.",
  "Bohnen hinzufügen: 1 Dose Bohnen abgießen und zur Pfanne mit dem Fleisch geben. Umrühren und 2-3 Minuten kochen, bis durchgewärmt. Warm halten, während Sie den Salat vorbereiten.",
  "Gemüse vorbereiten: 1 Kopf Salat waschen und in mundgerechte Stücke schneiden. 2 Tomaten würfeln. Wenn Sie Mais verwenden, 1 Dose abgießen oder frische Maiskörner verwenden. Bei Bedarf 1 gewürfelte Paprika bereithalten.",
  "Dressing herstellen: In einer kleinen Schüssel 100g Joghurt, Saft von 1 Limette, 1/2 TL Salz und 1/4 TL schwarzen Pfeffer verquirlen. Umrühren, bis glatt. Nach Geschmack anpassen.",
  "Salat anrichten: In einer großen Schüssel Salat, Tomaten und alle anderen Gemüse kombinieren. Warme Fleisch- und Bohnenmischung darauf geben. Nach Wunsch sanft schwenken oder geschichtet lassen.",
  "Toppings hinzufügen: 100g geriebenen Käse darüberstreuen. Mit Joghurt-Limetten-Dressing beträufeln. Alle anderen gewünschten Toppings hinzufügen (Sauerrahm, Avocado, Jalapeños, etc.).",
  "Servieren: Sofort servieren, solange das Fleisch noch warm ist. Der Salat sollte eine Mischung aus warm und kalt, knusprig und weich sein. Am besten frisch genießen - der Salat wird welken, wenn er zu lange steht."
]
    }
  }
};
