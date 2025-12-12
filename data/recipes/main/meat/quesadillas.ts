import { RecipeDefinition } from '../../../../types';

export const QUESADILLAS: RecipeDefinition = {
  id: 'local-quesadillas',
  prepTime: '10 mins',
  tags: ["Lunch","Mexican","Quick","Tortilla","Cheese","Bean","Simple","Grilled"],
  basePortions: 2,
  ingredients: [
  {
    id: 'tortilla',
    amount: '4'
  },
  {
    id: 'cheese',
    amount: '200g'
  },
  {
    id: 'bean',
    amount: '100g'
  }
],
  content: {
    en: {
      title: "Cheese Quesadillas",
      description: "Grilled cheese tortillas.",
      steps: [
  "Prepare tortillas: Take 4 large flour tortillas. Have 200g shredded cheese ready (cheddar, Monterey Jack, or a mix). You can also add 100g cooked beans if desired.",
  "Fill tortillas: Place one tortilla flat. Sprinkle half of it with cheese (and beans if using). Fold the other half over to create a half-moon shape. Press gently.",
  "Heat pan: Heat a large non-stick pan or griddle over medium heat (about 150°C/300°F). No oil needed if using a non-stick pan, but you can add a small amount of butter for extra flavor.",
  "Cook first side: Place filled quesadilla in the pan. Cook for 2-3 minutes until the bottom is golden brown and crispy. The cheese should start melting.",
  "Flip carefully: Using a large spatula, carefully flip the quesadilla. Cook the second side for another 2-3 minutes until golden brown and cheese is fully melted.",
  "Check doneness: The quesadilla should be crispy on the outside and the cheese should be completely melted inside. If cheese isn't melted, cover the pan for 30 seconds to help it along.",
  "Serve: Remove from pan and let cool for 30 seconds. Cut into 3-4 wedges with a pizza cutter or sharp knife. Serve immediately while hot and gooey, with salsa, sour cream, or guacamole."
]
    },
    de: {
      title: "Käse Quesadillas",
      description: "Gegrillte Tortillas.",
      steps: [
  "Tortillas vorbereiten: 4 große Weizenmehl-Tortillas nehmen. 200g geriebenen Käse bereithalten (Cheddar, Monterey Jack oder eine Mischung). Sie können auch 100g gekochte Bohnen hinzufügen, falls gewünscht.",
  "Tortillas füllen: Eine Tortilla flach hinlegen. Die Hälfte davon mit Käse (und Bohnen, falls verwendet) bestreuen. Die andere Hälfte darüber falten, um eine Halbmondform zu erstellen. Sanft andrücken.",
  "Pfanne erhitzen: Eine große beschichtete Pfanne oder Griddle bei mittlerer Hitze (ca. 150°C) erhitzen. Kein Öl nötig bei beschichteter Pfanne, aber Sie können eine kleine Menge Butter für extra Geschmack hinzufügen.",
  "Erste Seite braten: Gefüllte Quesadilla in die Pfanne legen. 2-3 Minuten braten, bis die Unterseite goldbraun und knusprig ist. Der Käse sollte anfangen zu schmelzen.",
  "Vorsichtig wenden: Mit einem großen Spatel die Quesadilla vorsichtig wenden. Die zweite Seite weitere 2-3 Minuten braten, bis goldbraun und der Käse vollständig geschmolzen ist.",
  "Garheit prüfen: Die Quesadilla sollte außen knusprig sein und der Käse sollte innen vollständig geschmolzen sein. Wenn der Käse nicht geschmolzen ist, die Pfanne 30 Sekunden abdecken, um zu helfen.",
  "Servieren: Aus der Pfanne nehmen und 30 Sekunden abkühlen lassen. Mit einem Pizzaschneider oder scharfen Messer in 3-4 Ecken schneiden. Sofort servieren, solange heiß und klebrig, mit Salsa, Sauerrahm oder Guacamole."
]
    }
  }
};
