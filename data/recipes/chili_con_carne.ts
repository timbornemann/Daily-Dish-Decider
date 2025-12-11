import { RecipeDefinition } from '../types';

export const CHILI_CON_CARNE: RecipeDefinition = {
  id: 'local-chili-con-carne',
  prepTime: '50 mins',
  tags: ["Dinner","Spicy","Hearty","Beef","Bean","One Pot","Mexican","Tomato"],
  basePortions: 4,
  ingredients: [
  {
    id: 'ground_beef',
    amount: '500g'
  },
  {
    id: 'bean',
    amount: '1 can'
  },
  {
    id: 'canned_tomato',
    amount: '1 can'
  },
  {
    id: 'onion',
    amount: '1'
  },
  {
    id: 'chili_flakes',
    amount: '1 tbsp'
  }
],
  content: {
    en: {
      title: "Chili con Carne",
      description: "Spicy beef and bean stew.",
      steps: [
  "Prepare vegetables: Dice 1 large onion. Mince 2-3 cloves of garlic. Dice 1 bell pepper (optional). Open and drain 1 can of beans. Open 1 can of tomatoes.",
  "Brown the beef: Heat a large pot or Dutch oven over medium-high heat. Add 500g ground beef and cook, breaking it up with a spoon, for 5-7 minutes until browned and no longer pink. Drain excess fat if needed.",
  "Sauté vegetables: Add diced onion to the pot and cook for 3-4 minutes until softened. Add minced garlic and cook for 1 more minute until fragrant. Add 1 tbsp chili flakes and stir for 30 seconds.",
  "Add tomatoes and beans: Pour in the can of tomatoes (with juice) and drained beans. Stir to combine. Bring to a boil, then reduce heat to low.",
  "Simmer: Cover the pot and simmer gently for 30 minutes, stirring occasionally. The chili should bubble gently, not boil vigorously. If it gets too thick, add a splash of water or broth.",
  "Season and finish: After 30 minutes, taste and season with salt and additional chili flakes if you want more heat. The chili should be thick and flavorful. Serve hot with rice, sour cream, or shredded cheese."
]
    },
    de: {
      title: "Chili con Carne",
      description: "Würziger Eintopf mit Hackfleisch.",
      steps: [
  "Gemüse vorbereiten: 1 große Zwiebel würfeln. 2-3 Knoblauchzehen hacken. 1 Paprika würfeln (optional). 1 Dose Bohnen öffnen und abgießen. 1 Dose Tomaten öffnen.",
  "Fleisch anbraten: Einen großen Topf oder Dutch Oven bei mittlerer bis hoher Hitze erhitzen. 500g Hackfleisch hinzufügen und 5-7 Minuten kochen, dabei mit einem Löffel zerkleinern, bis es gebräunt und nicht mehr rosa ist. Überschüssiges Fett abgießen, falls nötig.",
  "Gemüse andünsten: Gewürfelte Zwiebel zum Topf geben und 3-4 Minuten kochen, bis sie weich ist. Gehackten Knoblauch hinzufügen und 1 weitere Minute kochen, bis er duftet. 1 EL Chiliflocken hinzufügen und 30 Sekunden rühren.",
  "Tomaten und Bohnen hinzufügen: Dose Tomaten (mit Saft) und abgetropfte Bohnen hineingießen. Umrühren, um zu vermischen. Zum Kochen bringen, dann Hitze auf niedrig reduzieren.",
  "Köcheln lassen: Topf abdecken und 30 Minuten sanft köcheln lassen, gelegentlich umrühren. Das Chili sollte sanft blubbern, nicht kräftig kochen. Wenn es zu dick wird, einen Schuss Wasser oder Brühe hinzufügen.",
  "Würzen und fertigstellen: Nach 30 Minuten abschmecken und mit Salz und zusätzlichen Chiliflocken würzen, wenn Sie mehr Schärfe möchten. Das Chili sollte dick und geschmackvoll sein. Heiß mit Reis, Sauerrahm oder geriebenem Käse servieren."
]
    }
  }
};
