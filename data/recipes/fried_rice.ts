import { RecipeDefinition } from '../../types';

export const FRIED_RICE: RecipeDefinition = {
  id: 'local-fried-rice',
  prepTime: '15 mins',
  tags: ["Dinner","Asian","Quick","Rice","Egg","Stir Fry","Soy Sauce","Simple"],
  basePortions: 2,
  ingredients: [
  {
    id: 'rice',
    amount: '400g (Cooked)'
  },
  {
    id: 'egg',
    amount: '2'
  },
  {
    id: 'frozen_peas',
    amount: '100g'
  },
  {
    id: 'carrot',
    amount: '1'
  },
  {
    id: 'soy_sauce',
    amount: '2 tbsp'
  }
],
  content: {
    en: {
      title: "Egg Fried Rice",
      description: "Quick Asian rice dish.",
      steps: [
  "Prepare rice: Use 400g of day-old cooked rice (cold rice works best - fresh rice can be too sticky). Break up any large clumps with your hands. If using fresh rice, spread it on a baking sheet and let cool completely.",
  "Scramble eggs: Heat 1 tbsp oil in a large wok or pan over high heat. Beat 2 eggs with a pinch of salt. Pour into the hot pan and scramble quickly for 1-2 minutes until just set but still slightly runny. Remove and set aside.",
  "Prepare vegetables: Dice 1 carrot and 100g frozen peas (thaw if frozen). Have 2 tbsp soy sauce ready. Mince 2 cloves of garlic (optional).",
  "Stir fry vegetables: Add 1 more tbsp oil to the pan. Add diced carrot and cook for 2 minutes. Add peas and cook for 1 more minute. Push vegetables to one side.",
  "Fry rice: Add rice to the pan. Break up any clumps with a spatula. Stir-fry for 3-4 minutes over high heat until rice is heated through and slightly crispy. The rice should be separated and not clumpy.",
  "Combine: Add scrambled eggs back to the pan. Add 2 tbsp soy sauce and minced garlic. Stir-fry everything together for 1-2 minutes until well combined and heated through.",
  "Serve: The rice should be slightly crispy, well-seasoned, and golden. Serve immediately while hot, garnished with sliced green onions if desired."
]
    },
    de: {
      title: "Gebratener Reis",
      description: "Schnelles asiatisches Gericht.",
      steps: [
  "Reis vorbereiten: 400g kalten, gekochten Reis verwenden (kalter Reis funktioniert am besten - frischer Reis kann zu klebrig sein). Große Klumpen mit den Händen auseinanderbrechen. Wenn Sie frischen Reis verwenden, auf ein Backblech verteilen und vollständig abkühlen lassen.",
  "Eier rühren: 1 EL Öl in einem großen Wok oder einer Pfanne bei hoher Hitze erhitzen. 2 Eier mit einer Prise Salz verquirlen. In die heiße Pfanne gießen und schnell 1-2 Minuten rühren, bis sie gerade fest, aber noch leicht flüssig sind. Entfernen und beiseite stellen.",
  "Gemüse vorbereiten: 1 Karotte würfeln und 100g gefrorene Erbsen (auftauen, wenn gefroren). 2 EL Sojasauce bereithalten. 2 Knoblauchzehen hacken (optional).",
  "Gemüse anbraten: 1 weiteren EL Öl zur Pfanne geben. Gewürfelte Karotte hinzufügen und 2 Minuten kochen. Erbsen hinzufügen und 1 weitere Minute kochen. Gemüse zur Seite schieben.",
  "Reis braten: Reis zur Pfanne geben. Klumpen mit einem Spatel auseinanderbrechen. Bei hoher Hitze 3-4 Minuten anbraten, bis der Reis durchgewärmt und leicht knusprig ist. Der Reis sollte getrennt und nicht klumpig sein.",
  "Kombinieren: Gerührte Eier zurück in die Pfanne geben. 2 EL Sojasauce und gehackten Knoblauch hinzufügen. Alles zusammen 1-2 Minuten anbraten, bis gut vermischt und durchgewärmt.",
  "Servieren: Der Reis sollte leicht knusprig, gut gewürzt und goldbraun sein. Sofort servieren, solange heiß, nach Wunsch mit geschnittenen Frühlingszwiebeln garniert."
]
    }
  }
};
