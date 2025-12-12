import { RecipeDefinition } from '../../../types';

export const FRENCH_TOAST: RecipeDefinition = {
  id: 'local-french-toast',
  prepTime: '15 mins',
  tags: ["Breakfast","Sweet","Vegetarian","Bread","Egg","Cinnamon","Quick","Fried"],
  basePortions: 2,
  ingredients: [
  {
    id: 'bread',
    amount: '4 slices'
  },
  {
    id: 'egg',
    amount: '2'
  },
  {
    id: 'milk',
    amount: '100ml'
  },
  {
    id: 'cinnamon',
    amount: '1 tsp'
  },
  {
    id: 'butter',
    amount: '1 tbsp'
  }
],
  content: {
    en: {
      title: "French Toast",
      description: "Sweet fried bread.",
      steps: [
  "Prepare bread: Cut 4 slices of bread (day-old bread works best). If using fresh bread, let it sit out for 10 minutes to dry slightly. Thick slices (about 2cm) work best.",
  "Make egg mixture: In a shallow dish or bowl, whisk together 2 eggs, 100ml milk, 1 tsp cinnamon, and a pinch of salt until well combined and smooth. The mixture should be uniform in color.",
  "Soak bread: Dip each slice of bread into the egg mixture, letting it soak for 10-15 seconds on each side. The bread should absorb the liquid but not fall apart. Don't oversoak or it will be too wet.",
  "Heat pan: Heat a large non-stick pan or griddle over medium heat (about 150°C/300°F). Add 1 tbsp butter and let it melt, spreading evenly across the pan.",
  "Cook first side: Place soaked bread slices in the pan (don't overcrowd). Cook for 3-4 minutes until the bottom is golden brown and crispy. The edges should look set.",
  "Flip and finish: Carefully flip each slice with a spatula. Cook the second side for another 3-4 minutes until golden brown. The center should be cooked through but still soft.",
  "Serve: Remove from pan and serve immediately while hot. Top with maple syrup, powdered sugar, fresh berries, or butter. Best served warm."
]
    },
    de: {
      title: "Armer Ritter (French Toast)",
      description: "Süßes gebratenes Brot.",
      steps: [
  "Brot vorbereiten: 4 Scheiben Brot schneiden (altes Brot funktioniert am besten). Wenn Sie frisches Brot verwenden, lassen Sie es 10 Minuten stehen, um leicht zu trocknen. Dicke Scheiben (ca. 2cm) funktionieren am besten.",
  "Ei-Mischung herstellen: In einer flachen Schüssel oder Schale 2 Eier, 100ml Milch, 1 TL Zimt und eine Prise Salz verquirlen, bis gut vermischt und glatt. Die Mischung sollte gleichmäßig in der Farbe sein.",
  "Brot einweichen: Jede Brotscheibe in die Ei-Mischung tauchen und 10-15 Sekunden auf jeder Seite einweichen lassen. Das Brot sollte die Flüssigkeit aufsaugen, aber nicht auseinanderfallen. Nicht überweichen, sonst wird es zu nass.",
  "Pfanne erhitzen: Eine große beschichtete Pfanne oder Griddle bei mittlerer Hitze (ca. 150°C) erhitzen. 1 EL Butter hinzufügen und schmelzen lassen, gleichmäßig auf der Pfanne verteilen.",
  "Erste Seite braten: Eingeweichte Brotscheiben in die Pfanne legen (nicht überfüllen). 3-4 Minuten braten, bis die Unterseite goldbraun und knusprig ist. Die Ränder sollten fest aussehen.",
  "Wenden und fertigstellen: Jede Scheibe vorsichtig mit einem Spatel wenden. Die zweite Seite weitere 3-4 Minuten braten, bis goldbraun. Die Mitte sollte durchgegart, aber noch weich sein.",
  "Servieren: Aus der Pfanne nehmen und sofort servieren, solange es heiß ist. Mit Ahornsirup, Puderzucker, frischen Beeren oder Butter toppen. Am besten warm servieren."
]
    }
  }
};
