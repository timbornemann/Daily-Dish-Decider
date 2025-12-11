import { RecipeDefinition } from '../types';

export const ROAST_CHICKEN_TRAY: RecipeDefinition = {
  id: 'local-roast-chicken-tray',
  prepTime: '55 mins',
  tags: ["Dinner","Sheet Pan","Family","Chicken","Potato","Onion","Roasted","One Pan"],
  basePortions: 4,
  ingredients: [
  {
    id: 'chicken_breast',
    amount: '4'
  },
  {
    id: 'potato',
    amount: '800g'
  },
  {
    id: 'onion',
    amount: '2'
  },
  {
    id: 'olive_oil',
    amount: '3 tbsp'
  },
  {
    id: 'paprika',
    amount: '1 tbsp'
  }
],
  content: {
    en: {
      title: "Tray-Bake Chicken",
      description: "Sheet-pan dinner.",
      steps: [
  "Preheat oven: Preheat oven to 200°C/390°F. Line a large baking sheet with parchment paper or foil for easy cleanup.",
  "Prepare chicken: Pat 4 chicken pieces (breasts or thighs) dry with paper towels. Rub with 2 tbsp olive oil, 1 tsp salt, 1/2 tsp black pepper, and 1 tbsp paprika. Make sure all sides are coated. Let sit for 10 minutes at room temperature.",
  "Prepare vegetables: Cut 800g potatoes into 3cm chunks. Cut 2 onions into wedges. Toss both with 2 tbsp olive oil, 1/2 tsp salt, and 1/4 tsp black pepper until evenly coated.",
  "Arrange on tray: Spread vegetables in a single layer on the prepared baking sheet. Place chicken pieces on top of the vegetables, skin-side up if using pieces with skin.",
  "Roast: Place in preheated oven and roast for 40-45 minutes, turning the chicken pieces once halfway through (after 20 minutes). The chicken should be golden brown and cooked through (internal temperature 75°C/165°F).",
  "Check doneness: After 40 minutes, check if chicken is done - juices should run clear, not pink. Vegetables should be tender and starting to caramelize. If needed, cook 5 more minutes.",
  "Serve: Remove from oven and let rest for 5 minutes. The chicken should be juicy, the vegetables should be tender and well-seasoned, and everything should be golden brown. Serve directly from the pan or transfer to a platter."
]
    },
    de: {
      title: "Blechhähnchen",
      description: "Abendessen aus einem Blech.",
      steps: [
  "Ofen vorheizen: Ofen auf 200°C vorheizen. Ein großes Backblech mit Backpapier oder Folie auslegen für einfache Reinigung.",
  "Hähnchen vorbereiten: 4 Hähnchenteile (Brüste oder Keulen) mit Küchenpapier trocken tupfen. Mit 2 EL Olivenöl, 1 TL Salz, 1/2 TL schwarzem Pfeffer und 1 EL Paprika einreiben. Sicherstellen, dass alle Seiten bedeckt sind. 10 Minuten bei Raumtemperatur stehen lassen.",
  "Gemüse vorbereiten: 800g Kartoffeln in 3cm große Stücke schneiden. 2 Zwiebeln in Spalten schneiden. Beides mit 2 EL Olivenöl, 1/2 TL Salz und 1/4 TL schwarzem Pfeffer mischen, bis gleichmäßig bedeckt.",
  "Auf Blech anrichten: Gemüse in einer einzigen Schicht auf dem vorbereiteten Backblech verteilen. Hähnchenteile auf das Gemüse legen, Hautseite nach oben, falls die Teile Haut haben.",
  "Rösten: In den vorgeheizten Ofen geben und 40-45 Minuten rösten, die Hähnchenteile einmal nach der Hälfte der Zeit (nach 20 Minuten) wenden. Das Hähnchen sollte goldbraun und durchgegart sein (Innentemperatur 75°C).",
  "Garheit prüfen: Nach 40 Minuten prüfen, ob das Hähnchen fertig ist - der Saft sollte klar, nicht rosa sein. Das Gemüse sollte zart sein und zu karamellisieren beginnen. Bei Bedarf 5 weitere Minuten kochen.",
  "Servieren: Aus dem Ofen nehmen und 5 Minuten ruhen lassen. Das Hähnchen sollte saftig sein, das Gemüse sollte zart und gut gewürzt sein, und alles sollte goldbraun sein. Direkt vom Blech servieren oder auf eine Platte übertragen."
]
    }
  }
};
