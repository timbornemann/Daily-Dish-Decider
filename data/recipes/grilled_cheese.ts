import { RecipeDefinition } from '../../types';

export const GRILLED_CHEESE: RecipeDefinition = {
  id: 'local-grilled-cheese',
  prepTime: '10 mins',
  tags: ["Lunch","Comfort Food","Vegetarian","Cheese","Bread","Quick","Simple","Grilled"],
  basePortions: 2,
  ingredients: [
  {
    id: 'bread',
    amount: '4 slices'
  },
  {
    id: 'cheese',
    amount: '4 slices'
  },
  {
    id: 'butter',
    amount: '2 tbsp'
  }
],
  content: {
    en: {
      title: "Grilled Cheese Sandwich",
      description: "Crispy, cheesy comfort food.",
      steps: [
  "Prepare bread: Take 4 slices of bread. Spread butter evenly on one side of each slice - use about 1/2 tbsp butter per slice. The butter should be at room temperature for easy spreading.",
  "Layer cheese: Place 1-2 slices of cheese (depending on thickness) between two slices of bread, with the buttered sides facing outward. Use your favorite melting cheese like cheddar, gouda, or American.",
  "Preheat pan: Heat a large non-stick pan or griddle over medium heat (about 150°C/300°F). The pan should be hot enough to sizzle when you add butter, but not smoking.",
  "Cook first side: Place sandwich in the pan. Cook for 3-4 minutes until the bottom is golden brown and crispy. Press down gently with a spatula occasionally to ensure even contact.",
  "Flip carefully: Using a spatula, carefully flip the sandwich. The first side should be golden brown. If cheese is starting to melt out, that's a good sign.",
  "Cook second side: Cook for another 3-4 minutes until the second side is golden brown and the cheese is fully melted. You can press down gently again to help the cheese melt evenly.",
  "Serve: Remove from pan and let rest for 30 seconds (this helps the cheese set slightly). Cut diagonally and serve immediately while hot and crispy."
]
    },
    de: {
      title: "Grilled Cheese Sandwich",
      description: "Knuspriges Käsesandwich.",
      steps: [
  "Brot vorbereiten: 4 Scheiben Brot nehmen. Eine Seite jeder Scheibe gleichmäßig mit Butter bestreichen - etwa 1/2 EL Butter pro Scheibe verwenden. Die Butter sollte Zimmertemperatur haben für einfaches Streichen.",
  "Käse schichten: 1-2 Scheiben Käse (je nach Dicke) zwischen zwei Brotscheiben legen, wobei die gebutterten Seiten nach außen zeigen. Verwenden Sie Ihren Lieblings-Schmelzkäse wie Cheddar, Gouda oder American.",
  "Pfanne vorheizen: Eine große beschichtete Pfanne oder Griddle bei mittlerer Hitze (ca. 150°C) erhitzen. Die Pfanne sollte heiß genug sein, um zu zischen, wenn Sie Butter hinzufügen, aber nicht rauchen.",
  "Erste Seite braten: Sandwich in die Pfanne legen. 3-4 Minuten braten, bis die Unterseite goldbraun und knusprig ist. Gelegentlich sanft mit einem Spatel nach unten drücken, um gleichmäßigen Kontakt zu gewährleisten.",
  "Vorsichtig wenden: Mit einem Spatel das Sandwich vorsichtig wenden. Die erste Seite sollte goldbraun sein. Wenn der Käse anfängt herauszulaufen, ist das ein gutes Zeichen.",
  "Zweite Seite braten: Weitere 3-4 Minuten braten, bis die zweite Seite goldbraun ist und der Käse vollständig geschmolzen ist. Sie können erneut sanft nach unten drücken, um den Käse gleichmäßig schmelzen zu lassen.",
  "Servieren: Aus der Pfanne nehmen und 30 Sekunden ruhen lassen (dies hilft dem Käse, sich leicht zu setzen). Diagonal schneiden und sofort servieren, solange es heiß und knusprig ist."
]
    }
  }
};
