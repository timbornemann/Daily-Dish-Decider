import { RecipeDefinition } from '../types';

export const TERIYAKI_CHICKEN: RecipeDefinition = {
  id: 'local-teriyaki-chicken',
  prepTime: '20 mins',
  tags: ["Dinner","Asian","Family","Chicken","Rice","Soy Sauce","Sweet","Quick"],
  basePortions: 4,
  ingredients: [
  {
    id: 'chicken_breast',
    amount: '500g'
  },
  {
    id: 'soy_sauce',
    amount: '4 tbsp'
  },
  {
    id: 'sugar',
    amount: '2 tbsp'
  },
  {
    id: 'ginger',
    amount: '1 tsp'
  },
  {
    id: 'rice',
    amount: '200g'
  }
],
  content: {
    en: {
      title: "Teriyaki Chicken",
      description: "Sweet glazed chicken.",
      steps: [
  "Prepare chicken: Cut 500g chicken breast into 2-3cm cubes or strips. Pat dry with paper towels - this helps with browning. Season lightly with salt and pepper.",
  "Make teriyaki sauce: In a small bowl, mix 4 tbsp soy sauce, 2 tbsp sugar (or honey), 1 tsp grated fresh ginger, 1 minced garlic clove, and 1 tbsp cornstarch dissolved in 2 tbsp water. Stir until smooth.",
  "Cook chicken: Heat 2 tbsp oil in a large pan over medium-high heat. Add chicken pieces and cook for 5-6 minutes, turning occasionally, until golden brown on all sides and cooked through (internal temperature 75°C/165°F).",
  "Add sauce: Reduce heat to medium. Pour teriyaki sauce over the chicken. Stir to coat. The sauce will start to bubble and thicken immediately.",
  "Simmer: Cook for 2-3 minutes, stirring frequently, until the sauce has thickened and become sticky and glossy. The chicken should be well-coated. If sauce gets too thick, add a splash of water.",
  "Cook rice: While chicken cooks, prepare 200g rice according to package directions. Fluffy white rice works best.",
  "Serve: Serve hot chicken over rice, drizzled with any remaining sauce from the pan. Garnish with sesame seeds and sliced green onions if desired. The sauce should be sweet, savory, and sticky."
]
    },
    de: {
      title: "Teriyaki Hähnchen",
      description: "Süß glasiertes Hähnchen.",
      steps: [
  "Hähnchen vorbereiten: 500g Hähnchenbrust in 2-3cm große Würfel oder Streifen schneiden. Mit Küchenpapier trocken tupfen - dies hilft beim Bräunen. Leicht mit Salz und Pfeffer würzen.",
  "Teriyaki-Sauce herstellen: In einer kleinen Schüssel 4 EL Sojasauce, 2 EL Zucker (oder Honig), 1 TL geriebenen frischen Ingwer, 1 gehackte Knoblauchzehe und 1 EL in 2 EL Wasser aufgelöste Maisstärke mischen. Umrühren, bis glatt.",
  "Hähnchen braten: 2 EL Öl in einer großen Pfanne bei mittlerer bis hoher Hitze erhitzen. Hähnchenstücke hinzufügen und 5-6 Minuten braten, gelegentlich wenden, bis sie auf allen Seiten goldbraun und durchgegart sind (Innentemperatur 75°C).",
  "Sauce hinzufügen: Hitze auf mittel reduzieren. Teriyaki-Sauce über das Hähnchen gießen. Umrühren, um zu bedecken. Die Sauce wird sofort zu blubbern und eindicken beginnen.",
  "Köcheln lassen: 2-3 Minuten kochen, häufig rühren, bis die Sauce eingedickt und klebrig und glänzend geworden ist. Das Hähnchen sollte gut bedeckt sein. Wenn die Sauce zu dick wird, einen Schuss Wasser hinzufügen.",
  "Reis kochen: Während das Hähnchen kocht, 200g Reis nach Packungsanleitung zubereiten. Fluffiger weißer Reis funktioniert am besten.",
  "Servieren: Heißes Hähnchen über Reis servieren, beträufelt mit restlicher Sauce aus der Pfanne. Nach Wunsch mit Sesamsamen und geschnittenen Frühlingszwiebeln garnieren. Die Sauce sollte süß, herzhaft und klebrig sein."
]
    }
  }
};
