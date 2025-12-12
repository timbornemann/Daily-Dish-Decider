import { RecipeDefinition } from '../../../../types';

export const RISOTTO_MUSHROOM: RecipeDefinition = {
  id: 'local-risotto-mushroom',
  prepTime: '45 mins',
  tags: ["Dinner","Italian","Vegetarian","Rice","Mushroom","Creamy","Risotto","One Pot"],
  basePortions: 4,
  ingredients: [
  {
    id: 'rice',
    amount: '300g (Arborio)'
  },
  {
    id: 'mushroom',
    amount: '300g'
  },
  {
    id: 'onion',
    amount: '1'
  },
  {
    id: 'parmesan',
    amount: '50g'
  },
  {
    id: 'chicken_broth',
    amount: '1 liter'
  },
  {
    id: 'butter',
    amount: '50g'
  }
],
  content: {
    en: {
      title: "Mushroom Risotto",
      description: "Cremy Italian rice.",
      steps: [
  "Prepare ingredients: Slice 300g mushrooms (cremini or mixed). Finely dice 1 onion. Grate 50g parmesan. Heat 1 liter of chicken or vegetable broth in a separate pot and keep it warm (simmering) throughout cooking.",
  "Sauté mushrooms: Heat 2 tbsp butter in a large pan over medium-high heat. Add sliced mushrooms and cook for 5-6 minutes until golden brown and they've released their liquid. Remove mushrooms and set aside.",
  "Cook aromatics: In the same pan, add 1 more tbsp butter. Add diced onion and cook for 3-4 minutes until softened and translucent. Don't let it brown.",
  "Toast rice: Add 300g Arborio rice to the pan. Stir constantly for 2 minutes until rice is translucent around the edges and makes a clicking sound. This toasts the rice and is crucial for creamy risotto.",
  "Add wine (optional): If using, add 100ml white wine and stir until absorbed. This adds flavor but can be skipped if you don't have wine.",
  "Add broth gradually: Add one ladle (about 100ml) of warm broth to the rice. Stir constantly until almost all liquid is absorbed. Continue adding broth one ladle at a time, stirring constantly, for 15-20 minutes. The rice should be creamy but still have a slight bite (al dente).",
  "Finish: When rice is almost done, return mushrooms to the pan. Add 50g butter and grated parmesan. Stir vigorously off the heat for 1 minute until creamy and well combined. Season with salt and pepper. Serve immediately in warm bowls."
]
    },
    de: {
      title: "Pilz Risotto",
      description: "Cremiger italienischer Reis.",
      steps: [
  "Zutaten vorbereiten: 300g Pilze (Cremini oder gemischt) in Scheiben schneiden. 1 Zwiebel fein würfeln. 50g Parmesan reiben. 1 Liter Hühner- oder Gemüsebrühe in einem separaten Topf erhitzen und während des gesamten Kochens warm halten (köcheln lassen).",
  "Pilze andünsten: 2 EL Butter in einer großen Pfanne bei mittlerer bis hoher Hitze erhitzen. Geschnittene Pilze hinzufügen und 5-6 Minuten braten, bis sie goldbraun sind und ihre Flüssigkeit abgegeben haben. Pilze entfernen und beiseite stellen.",
  "Aromaten kochen: In derselben Pfanne 1 weiteren EL Butter hinzufügen. Gewürfelte Zwiebel hinzufügen und 3-4 Minuten kochen, bis sie weich und durchsichtig ist. Nicht bräunen lassen.",
  "Reis rösten: 300g Arborio-Reis zur Pfanne geben. 2 Minuten ständig rühren, bis der Reis an den Rändern durchsichtig ist und ein Klickgeräusch macht. Dies röstet den Reis und ist entscheidend für cremiges Risotto.",
  "Wein hinzufügen (optional): Falls verwendet, 100ml Weißwein hinzufügen und rühren, bis er aufgenommen ist. Dies verleiht Geschmack, kann aber übersprungen werden, wenn Sie keinen Wein haben.",
  "Brühe schrittweise hinzufügen: Eine Kelle (ca. 100ml) warme Brühe zum Reis geben. Ständig rühren, bis fast die gesamte Flüssigkeit aufgenommen ist. Weiterhin Brühe kellenweise hinzufügen, ständig rühren, für 15-20 Minuten. Der Reis sollte cremig sein, aber noch einen leichten Biss haben (al dente).",
  "Fertigstellen: Wenn der Reis fast fertig ist, Pilze zurück in die Pfanne geben. 50g Butter und geriebenen Parmesan hinzufügen. Außerhalb der Hitze 1 Minute kräftig rühren, bis cremig und gut vermischt. Mit Salz und Pfeffer würzen. Sofort in warmen Schalen servieren."
]
    }
  }
};
