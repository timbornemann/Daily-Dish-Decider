import { RecipeDefinition } from '../../../types';

export const SCRAMBLED_EGGS: RecipeDefinition = {
  id: 'local-scrambled-eggs',
  prepTime: '10 mins',
  tags: ["Breakfast","Quick","Vegetarian","Keto","Egg","High Protein","Simple","Low Carb"],
  basePortions: 2,
  ingredients: [
  {
    id: 'egg',
    amount: '4'
  },
  {
    id: 'butter',
    amount: '1 tbsp'
  },
  {
    id: 'salt',
    amount: '1 pinch'
  },
  {
    id: 'pepper_spice',
    amount: '1 pinch'
  }
],
  content: {
    en: {
      title: "Creamy Scrambled Eggs",
      description: "Perfect soft scrambled eggs.",
      steps: [
  "Prepare eggs: Crack 4 eggs into a bowl. Add a generous pinch of salt and a small pinch of black pepper. Do not whisk yet.",
  "Heat pan: Place a non-stick pan over low to medium-low heat. Add 1 tbsp butter and let it melt slowly - the pan should be warm, not hot. The butter should melt but not sizzle aggressively.",
  "Whisk eggs: Just before cooking, whisk the eggs with a fork until whites and yolks are combined but not frothy - about 20-30 strokes. The mixture should be uniform in color.",
  "Cook gently: Pour eggs into the pan. Let them sit for 10 seconds, then start stirring slowly and continuously with a spatula, making figure-8 motions. Keep heat low - eggs should cook slowly over 3-4 minutes.",
  "Remove from heat: When eggs are mostly set but still slightly wet and creamy (about 75% done), remove pan from heat immediately. The residual heat will finish cooking them.",
  "Final stir: Continue stirring gently off the heat for another 30 seconds until eggs reach your desired consistency - they should be soft, creamy, and slightly runny. Serve immediately on warm plates."
]
    },
    de: {
      title: "Cremiges Rührei",
      description: "Perfektes weiches Rührei.",
      steps: [
  "Eier vorbereiten: 4 Eier in eine Schüssel aufschlagen. Eine großzügige Prise Salz und eine kleine Prise schwarzen Pfeffer hinzufügen. Noch nicht verquirlen.",
  "Pfanne erhitzen: Eine beschichtete Pfanne auf niedrige bis mittlere Hitze stellen. 1 EL Butter hinzufügen und langsam schmelzen lassen - die Pfanne sollte warm, nicht heiß sein. Die Butter sollte schmelzen, aber nicht aggressiv zischen.",
  "Eier verquirlen: Kurz vor dem Kochen die Eier mit einer Gabel verquirlen, bis Eiweiß und Eigelb vermischt, aber nicht schaumig sind - etwa 20-30 Bewegungen. Die Mischung sollte gleichmäßig in der Farbe sein.",
  "Sanft garen: Eier in die Pfanne gießen. 10 Sekunden stehen lassen, dann langsam und kontinuierlich mit einem Spatel rühren, dabei Acht-Bewegungen machen. Hitze niedrig halten - Eier sollten langsam über 3-4 Minuten garen.",
  "Vom Herd nehmen: Wenn die Eier größtenteils fest, aber noch etwas feucht und cremig sind (etwa 75% fertig), die Pfanne sofort vom Herd nehmen. Die Restwärme wird sie fertig garen.",
  "Finales Rühren: Weitere 30 Sekunden sanft außerhalb der Hitze rühren, bis die Eier die gewünschte Konsistenz erreichen - sie sollten weich, cremig und leicht flüssig sein. Sofort auf warmen Tellern servieren."
]
    }
  }
};
