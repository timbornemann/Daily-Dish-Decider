import { RecipeDefinition } from '../../types';

export const TOFU_STIRFRY: RecipeDefinition = {
  id: 'local-tofu-stirfry',
  prepTime: '20 mins',
  tags: ["Dinner","Vegan","Stir Fry","Tofu","Broccoli","Carrot","Soy Sauce","Quick","Healthy"],
  basePortions: 3,
  ingredients: [
  {
    id: 'tofu',
    amount: '300g'
  },
  {
    id: 'broccoli',
    amount: '200g'
  },
  {
    id: 'carrot',
    amount: '1'
  },
  {
    id: 'garlic',
    amount: '2 cloves'
  },
  {
    id: 'ginger',
    amount: '1 thumb'
  },
  {
    id: 'soy_sauce',
    amount: '3 tbsp'
  }
],
  content: {
    en: {
      title: "Tofu Veggie Stir-Fry",
      description: "Light Asian-style dish.",
      steps: [
  "Prepare tofu: Cut 300g firm tofu into 2cm cubes. Pat completely dry with paper towels - this is important for crispy tofu. Heat 2 tbsp oil in a large pan or wok over high heat.",
  "Sear tofu: Add tofu cubes to the hot oil. Cook for 4-5 minutes, turning occasionally, until golden brown and crispy on all sides. Don't move them too much - let them develop a crust. Remove and set aside.",
  "Prepare vegetables: While tofu cooks, cut 200g broccoli into small florets. Slice 1 carrot into thin matchsticks. Mince 2 cloves of garlic and grate 1 thumb-sized piece of fresh ginger.",
  "Stir fry vegetables: Add 1 more tbsp oil to the pan. Add broccoli and carrot. Stir-fry for 3-4 minutes over high heat until bright green and slightly tender but still crisp.",
  "Add aromatics: Add minced garlic and grated ginger. Stir-fry for 30 seconds until fragrant. Be careful not to burn the garlic.",
  "Combine: Return tofu to the pan. Add 3 tbsp soy sauce. Stir-fry everything together for 2-3 more minutes until well combined and heated through. The sauce should coat everything.",
  "Serve: Serve immediately over steamed rice. Sprinkle with sesame seeds if desired. The tofu should be crispy, the vegetables should be crisp-tender, and everything should be well-seasoned and hot."
]
    },
    de: {
      title: "Tofu Gemüse Wok",
      description: "Leichtes Asia-Gericht.",
      steps: [
  "Tofu vorbereiten: 300g festen Tofu in 2cm große Würfel schneiden. Vollständig mit Küchenpapier trocken tupfen - dies ist wichtig für knusprigen Tofu. 2 EL Öl in einer großen Pfanne oder einem Wok bei hoher Hitze erhitzen.",
  "Tofu anbraten: Tofuwürfel zum heißen Öl geben. 4-5 Minuten braten, gelegentlich wenden, bis sie auf allen Seiten goldbraun und knusprig sind. Nicht zu viel bewegen - eine Kruste entwickeln lassen. Entfernen und beiseite stellen.",
  "Gemüse vorbereiten: Während der Tofu brät, 200g Brokkoli in kleine Röschen schneiden. 1 Karotte in dünne Streichhölzer schneiden. 2 Knoblauchzehen hacken und 1 daumengroßes Stück frischen Ingwer reiben.",
  "Gemüse anbraten: 1 weiteren EL Öl zur Pfanne geben. Brokkoli und Karotte hinzufügen. Bei hoher Hitze 3-4 Minuten anbraten, bis sie hellgrün und leicht zart, aber noch knusprig sind.",
  "Aromaten hinzufügen: Gehackten Knoblauch und geriebenen Ingwer hinzufügen. 30 Sekunden anbraten, bis sie duften. Vorsichtig sein, den Knoblauch nicht zu verbrennen.",
  "Kombinieren: Tofu zurück in die Pfanne geben. 3 EL Sojasauce hinzufügen. Alles zusammen weitere 2-3 Minuten anbraten, bis gut vermischt und durchgewärmt. Die Sauce sollte alles bedecken.",
  "Servieren: Sofort über gedämpftem Reis servieren. Nach Wunsch mit Sesamsamen bestreuen. Der Tofu sollte knusprig sein, das Gemüse sollte knusprig-zart sein, und alles sollte gut gewürzt und heiß sein."
]
    }
  }
};
