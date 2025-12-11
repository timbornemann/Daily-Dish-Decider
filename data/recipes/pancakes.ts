import { RecipeDefinition } from '../types';

export const PANCAKES: RecipeDefinition = {
  id: 'local-pancakes',
  prepTime: '20 mins',
  tags: ["Breakfast","Vegetarian","Sweet","Baking","Quick","Egg","Flour","Milk"],
  basePortions: 4,
  ingredients: [
  {
    id: 'flour',
    amount: '200g'
  },
  {
    id: 'milk',
    amount: '300ml'
  },
  {
    id: 'egg',
    amount: '2'
  },
  {
    id: 'butter',
    amount: '30g'
  },
  {
    id: 'sugar',
    amount: '1 tbsp'
  }
],
  content: {
    en: {
      title: "Classic Pancakes",
      description: "Fluffy breakfast pancakes.",
      steps: [
  "Prepare ingredients: Sift flour, sugar, and baking powder into a large bowl. Place milk, egg, and melted butter in a separate bowl.",
  "Mix dry ingredients: In a large bowl, whisk together flour, sugar, and baking powder until evenly distributed and no lumps remain.",
  "Whisk wet ingredients: In another bowl, whisk together milk, egg, and melted butter until the mixture is smooth and well combined.",
  "Combine batter: Pour the wet ingredients into the dry ingredients and gently stir with a whisk or spoon. Important: Only mix until just combined - small lumps are fine. Do not overmix, or the pancakes will be tough.",
  "Preheat pan: Heat a large non-stick pan or griddle over medium heat (about 175°C/350°F). Add a small amount of butter or oil and let it melt, spreading it evenly across the surface.",
  "Cook pancakes: Using a ladle or measuring cup, pour about 60ml (1/4 cup) of batter per pancake onto the hot pan. Don't overcrowd - leave space between pancakes for easy flipping.",
  "Flip pancakes: When small bubbles form on the top surface and the edges look set (after about 2-3 minutes), carefully flip with a spatula. The bottom should be golden brown.",
  "Finish cooking: Cook the second side for another 1-2 minutes until both sides are golden brown. Serve immediately while hot, or keep warm in a low oven (60°C/140°F) until ready to serve."
]
    },
    de: {
      title: "Klassische Pancakes",
      description: "Fluffige Pfannkuchen zum Frühstück.",
      steps: [
  "Zutaten vorbereiten: Mehl, Zucker und Backpulver in eine große Schüssel sieben. Milch, Ei und geschmolzene Butter in eine separate Schüssel geben.",
  "Trockene Zutaten mischen: In einer großen Schüssel Mehl, Zucker und Backpulver mit einem Schneebesen vermischen, bis alles gleichmäßig verteilt ist und keine Klumpen mehr vorhanden sind.",
  "Nasse Zutaten verquirlen: In einer anderen Schüssel Milch, Ei und geschmolzene Butter mit einem Schneebesen verquirlen, bis die Mischung glatt und gut vermischt ist.",
  "Teig zusammenführen: Die flüssigen Zutaten in die trockenen Zutaten gießen und vorsichtig mit einem Schneebesen oder Löffel verrühren. Wichtig: Nur so lange rühren, bis alles gerade vermischt ist - kleine Klümpchen sind in Ordnung. Nicht zu viel rühren, sonst werden die Pancakes zäh.",
  "Pfanne vorbereiten: Eine große beschichtete Pfanne oder Griddle bei mittlerer Hitze (ca. 175°C) vorheizen. Etwas Butter oder Öl hinzufügen und schmelzen lassen, gleichmäßig auf der Oberfläche verteilen.",
  "Pancakes backen: Mit einem Schöpflöffel oder einer Kelle etwa 60ml Teig pro Pancake auf die heiße Pfanne geben. Nicht zu viele auf einmal - Platz zwischen den Pancakes lassen für einfaches Wenden.",
  "Wenden: Wenn sich auf der Oberseite kleine Blasen bilden und die Ränder fest aussehen (nach ca. 2-3 Minuten), vorsichtig mit einem Pfannenwender umdrehen. Die Unterseite sollte goldbraun sein.",
  "Fertig backen: Die zweite Seite weitere 1-2 Minuten backen, bis beide Seiten goldbraun sind. Sofort servieren, solange sie heiß sind, oder in einem warmen Ofen (60°C) warm halten, bis sie serviert werden."
]
    }
  }
};
