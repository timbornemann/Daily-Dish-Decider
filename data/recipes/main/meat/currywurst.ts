import { RecipeDefinition } from '../../../../types';

export const CURRYWURST: RecipeDefinition = {
  id: 'local-currywurst',
  prepTime: '20 mins',
  tags: ["Lunch","German","Street Food","Sausage","Quick","Spicy","Ketchup","Curry"],
  basePortions: 2,
  ingredients: [
  {
    id: 'sausage',
    amount: '4'
  },
  {
    id: 'onion',
    amount: '1'
  },
  {
    id: 'ketchup',
    amount: '200ml'
  },
  {
    id: 'curry_powder',
    amount: '2 tbsp'
  },
  {
    id: 'tomato_paste',
    amount: '1 tbsp'
  }
],
  content: {
    en: {
      title: "Currywurst",
      description: "Sausage with curry sauce.",
      steps: [
  "Prepare sausages: Take 4 bratwurst or similar sausages. Prick each sausage a few times with a fork to prevent them from bursting during cooking. Let them come to room temperature for 10 minutes.",
  "Cook sausages: Heat 2 tbsp oil in a large pan over medium heat. Add sausages and cook for 8-10 minutes, turning occasionally, until browned on all sides and cooked through. The internal temperature should reach 70°C/160°F.",
  "Make curry sauce: While sausages cook, mix 200ml ketchup, 2 tbsp curry powder, 1 tbsp tomato paste, 1 tsp paprika, and a pinch of salt in a small bowl. Add 1-2 tbsp water to thin slightly if needed. Stir until smooth.",
  "Heat sauce: Transfer sauce to a small saucepan and heat gently over low heat for 2-3 minutes, stirring occasionally, until warm and well combined. Alternatively, heat in the microwave for 30 seconds.",
  "Slice sausages: Once sausages are cooked, remove from pan and let rest for 2 minutes. Slice diagonally into bite-sized pieces (about 2cm thick), but don't cut all the way through - leave them connected at the bottom.",
  "Plate and serve: Arrange sliced sausages on a plate. Pour warm curry sauce over the top, covering the sausages generously. Sprinkle with additional curry powder for extra flavor. Serve immediately with fries or bread."
]
    },
    de: {
      title: "Currywurst",
      description: "Wurst mit Currysauce.",
      steps: [
  "Würste vorbereiten: 4 Bratwürste oder ähnliche Würste nehmen. Jede Wurst mehrmals mit einer Gabel einstechen, damit sie beim Kochen nicht platzen. 10 Minuten auf Zimmertemperatur kommen lassen.",
  "Würste braten: 2 EL Öl in einer großen Pfanne bei mittlerer Hitze erhitzen. Würste hinzufügen und 8-10 Minuten braten, gelegentlich wenden, bis sie auf allen Seiten gebräunt und durchgegart sind. Die Innentemperatur sollte 70°C erreichen.",
  "Currysauce herstellen: Während die Würste braten, 200ml Ketchup, 2 EL Currypulver, 1 EL Tomatenmark, 1 TL Paprika und eine Prise Salz in einer kleinen Schüssel mischen. Bei Bedarf 1-2 EL Wasser hinzufügen, um leicht zu verdünnen. Umrühren, bis glatt.",
  "Sauce erhitzen: Sauce in einen kleinen Topf geben und bei niedriger Hitze 2-3 Minuten sanft erhitzen, gelegentlich umrühren, bis warm und gut vermischt. Alternativ 30 Sekunden in der Mikrowelle erhitzen.",
  "Würste schneiden: Sobald die Würste gar sind, aus der Pfanne nehmen und 2 Minuten ruhen lassen. Diagonal in mundgerechte Stücke schneiden (ca. 2cm dick), aber nicht ganz durchschneiden - am Boden verbunden lassen.",
  "Anrichten und servieren: Geschnittene Würste auf einem Teller anrichten. Warme Currysauce großzügig darüber gießen, die Würste bedecken. Für extra Geschmack zusätzliches Currypulver darüberstreuen. Sofort mit Pommes oder Brot servieren."
]
    }
  }
};
