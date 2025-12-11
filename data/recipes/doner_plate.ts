import { RecipeDefinition } from '../types';

export const DONER_PLATE: RecipeDefinition = {
  id: 'local-doner-plate',
  prepTime: '25 mins',
  tags: ["Dinner","Street Food","Quick","Turkey","Pita","Yogurt","Fresh","Middle Eastern"],
  basePortions: 2,
  ingredients: [
  {
    id: 'turkey',
    amount: '300g (strips)'
  },
  {
    id: 'pita',
    amount: '2'
  },
  {
    id: 'yogurt',
    amount: '150g'
  },
  {
    id: 'cucumber',
    amount: '1/2'
  },
  {
    id: 'tomato',
    amount: '1'
  },
  {
    id: 'lettuce',
    amount: '4 leaves'
  }
],
  content: {
    en: {
      title: "Doner Plate",
      description: "Imbiss classic at home.",
      steps: [
  "Prepare meat: Cut 300g turkey or chicken into thin strips. Marinate with 1 tbsp oil, 1 tsp paprika, salt, and pepper for 15 minutes if time allows (or cook immediately).",
  "Cook meat: Heat 2 tbsp oil in a large pan over high heat. Add marinated meat strips and sear for 4-5 minutes, stirring occasionally, until browned and cooked through. Remove from heat and keep warm.",
  "Make yogurt sauce: In a small bowl, stir together 150g yogurt, 1 minced garlic clove, 1/2 tsp salt, and a pinch of black pepper. Mix until smooth. Let sit for 10 minutes to let flavors meld.",
  "Prepare vegetables: Dice 1/2 cucumber and 1 tomato into small cubes. Wash and dry 4 lettuce leaves, then tear into bite-sized pieces. Have everything ready for assembly.",
  "Warm pita: Heat 2 pita breads in a dry pan for 30 seconds per side, or wrap in foil and warm in a 180°C/355°F oven for 3-4 minutes until warm and pliable. Don't let them get crispy.",
  "Assemble plate: On each plate, arrange a bed of lettuce. Top with warm meat strips, then diced cucumber and tomato. Drizzle generously with yogurt sauce.",
  "Serve: Serve immediately while meat is still warm. The pita can be served on the side or used to scoop up the meat and vegetables. Best enjoyed fresh and warm."
]
    },
    de: {
      title: "Döner-Teller",
      description: "Schnelles Imbiss-Gericht.",
      steps: [
  "Fleisch vorbereiten: 300g Pute oder Hähnchen in dünne Streifen schneiden. Mit 1 EL Öl, 1 TL Paprika, Salz und Pfeffer 15 Minuten marinieren, wenn Zeit vorhanden (oder sofort kochen).",
  "Fleisch braten: 2 EL Öl in einer großen Pfanne bei hoher Hitze erhitzen. Marinierte Fleischstreifen hinzufügen und 4-5 Minuten scharf anbraten, gelegentlich umrühren, bis sie gebräunt und durchgegart sind. Vom Herd nehmen und warm halten.",
  "Joghurtsauce herstellen: In einer kleinen Schüssel 150g Joghurt, 1 gehackte Knoblauchzehe, 1/2 TL Salz und eine Prise schwarzen Pfeffer verrühren. Umrühren, bis glatt. 10 Minuten stehen lassen, damit sich die Aromen verbinden.",
  "Gemüse vorbereiten: 1/2 Gurke und 1 Tomate in kleine Würfel schneiden. 4 Salatblätter waschen und trocknen, dann in mundgerechte Stücke reißen. Alles für die Zusammenstellung bereithalten.",
  "Pita wärmen: 2 Pita-Brote in einer trockenen Pfanne 30 Sekunden pro Seite erhitzen oder in Folie wickeln und 3-4 Minuten bei 180°C im Ofen wärmen, bis warm und biegsam. Nicht knusprig werden lassen.",
  "Teller anrichten: Auf jedem Teller ein Bett aus Salat anrichten. Mit warmen Fleischstreifen toppen, dann gewürfelte Gurke und Tomate. Großzügig mit Joghurtsauce beträufeln.",
  "Servieren: Sofort servieren, solange das Fleisch noch warm ist. Die Pita kann als Beilage serviert werden oder zum Schöpfen von Fleisch und Gemüse verwendet werden. Am besten frisch und warm genießen."
]
    }
  }
};
