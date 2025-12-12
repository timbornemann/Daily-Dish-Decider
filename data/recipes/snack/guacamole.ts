import { RecipeDefinition } from '../../../types';

export const GUACAMOLE: RecipeDefinition = {
  id: 'local-guacamole',
  prepTime: '10 mins',
  tags: ["Snack","Mexican","Party","Avocado","Lime","Fresh","Dip","Quick","No Cook"],
  basePortions: 4,
  ingredients: [
  {
    id: 'avocado',
    amount: '3'
  },
  {
    id: 'lime',
    amount: '1'
  },
  {
    id: 'onion',
    amount: '1/2'
  },
  {
    id: 'tomato',
    amount: '1'
  },
  {
    id: 'chips',
    amount: '1 bag'
  }
],
  content: {
    en: {
      title: "Fresh Guacamole",
      description: "Avocado dip.",
      steps: [
  "Prepare avocados: Cut 3 ripe avocados in half lengthwise. Remove the pit. Scoop the flesh into a medium bowl. Use a fork to mash roughly - leave some chunks for texture, don't make it completely smooth.",
  "Add lime: Squeeze the juice of 1 lime over the avocados immediately to prevent browning. Mix gently. The acid also enhances the flavor.",
  "Add vegetables: Finely dice 1/2 onion and 1 tomato. Add to the bowl with the avocados. Mix gently to combine.",
  "Season: Add 1 tsp salt (or to taste) and a pinch of black pepper. You can also add 1 minced garlic clove, 1 tbsp chopped cilantro, or a pinch of cumin if desired.",
  "Mix gently: Stir everything together gently with a fork. Don't overmix - you want to maintain some texture. Taste and adjust seasoning.",
  "Serve immediately: Guacamole is best served fresh. Transfer to a serving bowl. If not serving right away, press plastic wrap directly onto the surface to prevent browning. Serve with tortilla chips, on tacos, or as a side."
]
    },
    de: {
      title: "Frische Guacamole",
      description: "Avocado Dip.",
      steps: [
  "Avocados vorbereiten: 3 reife Avocados der Länge nach halbieren. Den Kern entfernen. Das Fruchtfleisch in eine mittlere Schüssel schöpfen. Mit einer Gabel grob zerdrücken - einige Stücke für Textur lassen, nicht vollständig glatt machen.",
  "Limette hinzufügen: Den Saft von 1 Limette sofort über die Avocados pressen, um Bräunung zu verhindern. Sanft mischen. Die Säure verstärkt auch den Geschmack.",
  "Gemüse hinzufügen: 1/2 Zwiebel und 1 Tomate fein würfeln. Zur Schüssel mit den Avocados hinzufügen. Sanft mischen, um zu vermischen.",
  "Würzen: 1 TL Salz (oder nach Geschmack) und eine Prise schwarzen Pfeffer hinzufügen. Sie können auch 1 gehackte Knoblauchzehe, 1 EL gehackten Koriander oder eine Prise Kreuzkümmel hinzufügen, falls gewünscht.",
  "Sanft mischen: Alles zusammen sanft mit einer Gabel mischen. Nicht übermischen - Sie möchten etwas Textur behalten. Abschmecken und nachwürzen.",
  "Sofort servieren: Guacamole schmeckt am besten frisch. Auf eine Servierschüssel übertragen. Wenn nicht sofort serviert, Frischhaltefolie direkt auf die Oberfläche drücken, um Bräunung zu verhindern. Mit Tortilla-Chips, auf Tacos oder als Beilage servieren."
]
    }
  }
};
