import { RecipeDefinition } from '../types';

export const BRATKARTOFFELN: RecipeDefinition = {
  id: 'local-bratkartoffeln',
  prepTime: '25 mins',
  tags: ["Dinner","German","Comfort Food","Potato","Bacon","Fried","Onion","Classic"],
  basePortions: 4,
  ingredients: [
  {
    id: 'potato',
    amount: '1kg'
  },
  {
    id: 'bacon',
    amount: '100g'
  },
  {
    id: 'onion',
    amount: '1'
  },
  {
    id: 'butter',
    amount: '2 tbsp'
  }
],
  content: {
    en: {
      title: "Fried Potatoes",
      description: "German style crispy potatoes.",
      steps: [
  "Cook potatoes: Place 1kg potatoes (peeled) in a large pot of salted water. Bring to a boil and cook for 15-20 minutes until tender but not falling apart - they should still be firm. Drain and let cool completely (you can do this the day before and refrigerate).",
  "Slice potatoes: Once cool, slice the potatoes into 1cm thick rounds. If they're large, cut them in half first. The slices should be uniform for even cooking.",
  "Cook bacon: Heat a large pan over medium heat. Add 100g diced bacon and cook for 4-5 minutes until crispy and golden. Remove bacon with a slotted spoon, leaving the fat in the pan.",
  "Fry onions: Add 1 diced onion to the bacon fat in the pan. Cook for 3-4 minutes until softened and translucent. Remove onions and set aside with the bacon.",
  "Fry potatoes: Add 2 tbsp butter to the pan if needed. Add potato slices in a single layer (cook in batches if needed). Cook over medium-high heat for 5-7 minutes per side until golden brown and crispy. Don't move them too much - let them develop a crust.",
  "Combine: Once potatoes are crispy on both sides, return bacon and onions to the pan. Toss everything together and cook for 1-2 more minutes to heat through. Season with salt and pepper.",
  "Serve: The potatoes should be crispy on the outside and tender inside. Serve hot as a side dish, traditionally with schnitzel or sausages."
]
    },
    de: {
      title: "Bratkartoffeln",
      description: "Deftige krosse Kartoffeln.",
      steps: [
  "Kartoffeln kochen: 1kg Kartoffeln (geschält) in einen großen Topf mit gesalzenem Wasser geben. Zum Kochen bringen und 15-20 Minuten kochen, bis sie zart, aber nicht auseinanderfallen - sie sollten noch fest sein. Abgießen und vollständig abkühlen lassen (Sie können dies am Tag zuvor tun und kühlen).",
  "Kartoffeln schneiden: Sobald sie kalt sind, die Kartoffeln in 1cm dicke Scheiben schneiden. Wenn sie groß sind, zuerst halbieren. Die Scheiben sollten gleichmäßig sein für gleichmäßiges Garen.",
  "Speck braten: Eine große Pfanne bei mittlerer Hitze erhitzen. 100g gewürfelten Speck hinzufügen und 4-5 Minuten braten, bis er knusprig und goldbraun ist. Speck mit einem Schaumlöffel entfernen, das Fett in der Pfanne lassen.",
  "Zwiebeln braten: 1 gewürfelte Zwiebel zum Speckfett in der Pfanne geben. 3-4 Minuten kochen, bis sie weich und durchsichtig ist. Zwiebeln entfernen und zusammen mit dem Speck beiseite stellen.",
  "Kartoffeln braten: Bei Bedarf 2 EL Butter zur Pfanne geben. Kartoffelscheiben in einer einzigen Schicht hinzufügen (bei Bedarf in Chargen braten). Bei mittlerer bis hoher Hitze 5-7 Minuten pro Seite braten, bis goldbraun und knusprig. Nicht zu viel bewegen - eine Kruste entwickeln lassen.",
  "Kombinieren: Sobald die Kartoffeln auf beiden Seiten knusprig sind, Speck und Zwiebeln zurück in die Pfanne geben. Alles zusammen schwenken und 1-2 weitere Minuten kochen, um durchzuwärmen. Mit Salz und Pfeffer würzen.",
  "Servieren: Die Kartoffeln sollten außen knusprig und innen zart sein. Heiß als Beilage servieren, traditionell mit Schnitzel oder Würstchen."
]
    }
  }
};
