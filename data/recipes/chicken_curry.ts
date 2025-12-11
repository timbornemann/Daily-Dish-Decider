import { RecipeDefinition } from '../types';

export const CHICKEN_CURRY: RecipeDefinition = {
  id: 'local-chicken-curry',
  prepTime: '30 mins',
  tags: ["Dinner","Asian","Spicy","Chicken","Rice","Curry","Creamy","One Pot"],
  basePortions: 4,
  ingredients: [
  {
    id: 'chicken_breast',
    amount: '500g'
  },
  {
    id: 'rice',
    amount: '200g'
  },
  {
    id: 'onion',
    amount: '1'
  },
  {
    id: 'garlic',
    amount: '2 cloves'
  },
  {
    id: 'curry_powder',
    amount: '2 tbsp'
  },
  {
    id: 'cream',
    amount: '200ml'
  }
],
  content: {
    en: {
      title: "Easy Chicken Curry",
      description: "Mild creamy curry.",
      steps: [
  "Prepare ingredients: Cut 500g chicken breast into 2-3cm cubes. Dice 1 large onion. Mince 2 cloves of garlic. Grate 1 thumb-sized piece of fresh ginger. Measure out curry powder, cream, and broth.",
  "Cook chicken: Heat 2 tbsp oil in a large pan over medium-high heat. Add chicken pieces and cook for 5-6 minutes, turning occasionally, until golden brown on all sides. Remove chicken and set aside.",
  "Sauté aromatics: In the same pan, add diced onion and cook for 4-5 minutes until softened. Add minced garlic and grated ginger, cook for 1 more minute until fragrant.",
  "Add spices: Add 2 tbsp curry powder to the pan and stir for 30 seconds until fragrant. If you like it spicier, add a pinch of cayenne pepper or chili powder.",
  "Add liquid: Return chicken to the pan. Pour in 200ml cream and 100ml chicken broth (or water). Stir to combine. Bring to a gentle boil, then reduce heat to low.",
  "Simmer: Cover and simmer gently for 15-20 minutes until chicken is cooked through and tender. Stir occasionally. The sauce should thicken slightly and coat the chicken.",
  "Finish and serve: Taste and season with salt. The curry should be creamy and well-seasoned. Serve hot over cooked rice, garnished with fresh cilantro or parsley if desired."
]
    },
    de: {
      title: "Hähnchen Curry",
      description: "Mildes Sahne-Curry.",
      steps: [
  "Zutaten vorbereiten: 500g Hähnchenbrust in 2-3cm große Würfel schneiden. 1 große Zwiebel würfeln. 2 Knoblauchzehen hacken. 1 daumengroßes Stück frischen Ingwer reiben. Currypulver, Sahne und Brühe abmessen.",
  "Hähnchen braten: 2 EL Öl in einer großen Pfanne bei mittlerer bis hoher Hitze erhitzen. Hähnchenstücke hinzufügen und 5-6 Minuten braten, gelegentlich wenden, bis sie auf allen Seiten goldbraun sind. Hähnchen entfernen und beiseite stellen.",
  "Aromaten andünsten: In derselben Pfanne gewürfelte Zwiebel hinzufügen und 4-5 Minuten kochen, bis sie weich ist. Gehackten Knoblauch und geriebenen Ingwer hinzufügen, 1 weitere Minute kochen, bis sie duften.",
  "Gewürze hinzufügen: 2 EL Currypulver zur Pfanne geben und 30 Sekunden rühren, bis es duftet. Wenn Sie es schärfer mögen, eine Prise Cayennepfeffer oder Chilipulver hinzufügen.",
  "Flüssigkeit hinzufügen: Hähnchen zurück in die Pfanne geben. 200ml Sahne und 100ml Hühnerbrühe (oder Wasser) hineingießen. Umrühren, um zu vermischen. Zum sanften Kochen bringen, dann Hitze auf niedrig reduzieren.",
  "Köcheln lassen: Abdecken und 15-20 Minuten sanft köcheln lassen, bis das Hähnchen durchgegart und zart ist. Gelegentlich umrühren. Die Sauce sollte sich leicht verdicken und das Hähnchen bedecken.",
  "Fertigstellen und servieren: Abschmecken und mit Salz würzen. Das Curry sollte cremig und gut gewürzt sein. Heiß über gekochtem Reis servieren, nach Wunsch mit frischem Koriander oder Petersilie garniert."
]
    }
  }
};
