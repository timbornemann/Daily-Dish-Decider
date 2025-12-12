import { RecipeDefinition } from '../../../../types';

export const PAELLA: RecipeDefinition = {
  id: 'local-paella',
  prepTime: '50 mins',
  tags: ["Dinner","Spanish","Seafood","Rice","Chicken","Shrimp","One Pot","Saffron"],
  basePortions: 4,
  ingredients: [
  {
    id: 'rice',
    amount: '400g'
  },
  {
    id: 'chicken_breast',
    amount: '300g'
  },
  {
    id: 'shrimp',
    amount: '200g'
  },
  {
    id: 'frozen_peas',
    amount: '150g'
  },
  {
    id: 'tomato_paste',
    amount: '2 tbsp'
  },
  {
    id: 'olive_oil',
    amount: '2 tbsp'
  }
],
  content: {
    en: {
      title: "Easy Paella",
      description: "Rice pan with chicken and shrimp.",
      steps: [
  "Prepare ingredients: Cut 300g chicken breast into 2cm cubes. Peel 200g shrimp (leave tails on if desired). Dice 1 onion and 1 bell pepper. Have 150g frozen peas ready. Measure 400g short-grain rice (Arborio or paella rice).",
  "Brown chicken: Heat 2 tbsp olive oil in a large paella pan or wide skillet over medium-high heat. Add chicken cubes and cook for 5-6 minutes until golden brown on all sides. Remove and set aside.",
  "Cook aromatics: In the same pan, add diced onion and pepper. Cook for 4-5 minutes until softened. Add 2 tbsp tomato paste and stir for 1 minute. Add frozen peas and cook for 1 more minute.",
  "Add rice: Stir in 400g rice until well-coated with oil and vegetables. Toast for 2 minutes, stirring constantly, until rice is translucent around the edges.",
  "Add liquid: Pour in 1 liter of chicken or fish broth. Add a pinch of saffron threads (or 1 tsp paprika if you don't have saffron). Bring to a boil, then reduce heat to low and simmer for 15 minutes without stirring.",
  "Add proteins: After 15 minutes, nestle chicken pieces and shrimp on top of the rice. Cook for another 5-7 minutes until rice is tender, liquid is absorbed, and shrimp are pink and cooked through.",
  "Finish: The rice should be tender but still slightly al dente, and there should be a slight crust on the bottom (socarrat). If rice isn't done, add a splash more broth and cook 2-3 more minutes. Let rest for 5 minutes before serving. Serve directly from the pan."
]
    },
    de: {
      title: "Einfache Paella",
      description: "Reispfanne mit Huhn und Meeresfrüchten.",
      steps: [
  "Zutaten vorbereiten: 300g Hähnchenbrust in 2cm große Würfel schneiden. 200g Garnelen schälen (Schwänze dran lassen, falls gewünscht). 1 Zwiebel und 1 Paprika würfeln. 150g gefrorene Erbsen bereithalten. 400g Kurzkornreis (Arborio oder Paella-Reis) abmessen.",
  "Hähnchen anbraten: 2 EL Olivenöl in einer großen Paella-Pfanne oder breiten Pfanne bei mittlerer bis hoher Hitze erhitzen. Hähnchenwürfel hinzufügen und 5-6 Minuten braten, bis sie auf allen Seiten goldbraun sind. Entfernen und beiseite stellen.",
  "Aromaten kochen: In derselben Pfanne gewürfelte Zwiebel und Paprika hinzufügen. 4-5 Minuten kochen, bis sie weich sind. 2 EL Tomatenmark hinzufügen und 1 Minute rühren. Gefrorene Erbsen hinzufügen und 1 weitere Minute kochen.",
  "Reis hinzufügen: 400g Reis einrühren, bis er gut mit Öl und Gemüse bedeckt ist. 2 Minuten rösten, ständig rühren, bis der Reis an den Rändern durchsichtig ist.",
  "Flüssigkeit hinzufügen: 1 Liter Hühner- oder Fischbrühe hineingießen. Eine Prise Safranfäden (oder 1 TL Paprika, wenn Sie keinen Safran haben) hinzufügen. Zum Kochen bringen, dann Hitze auf niedrig reduzieren und 15 Minuten ohne Rühren köcheln lassen.",
  "Proteine hinzufügen: Nach 15 Minuten Hähnchenstücke und Garnelen auf den Reis legen. Weitere 5-7 Minuten kochen, bis der Reis zart ist, die Flüssigkeit aufgenommen ist und die Garnelen rosa und durchgegart sind.",
  "Fertigstellen: Der Reis sollte zart, aber noch leicht al dente sein, und es sollte eine leichte Kruste am Boden geben (socarrat). Wenn der Reis nicht fertig ist, einen Schuss mehr Brühe hinzufügen und 2-3 weitere Minuten kochen. 5 Minuten ruhen lassen, bevor Sie servieren. Direkt aus der Pfanne servieren."
]
    }
  }
};
