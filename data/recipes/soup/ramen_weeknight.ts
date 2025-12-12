import { RecipeDefinition } from '../../../types';

export const RAMEN_WEEKNIGHT: RecipeDefinition = {
  id: 'local-ramen-weeknight',
  prepTime: '20 mins',
  tags: ["Dinner","Asian","Quick","Pasta","Broth","Egg","Spinach","Soup","One Pot"],
  basePortions: 2,
  ingredients: [
  {
    id: 'chicken_broth',
    amount: '800ml'
  },
  {
    id: 'soy_sauce',
    amount: '2 tbsp'
  },
  {
    id: 'ramen',
    amount: '200g (Noodles)'
  },
  {
    id: 'spinach',
    amount: '100g'
  },
  {
    id: 'chili_flakes',
    amount: '1 tsp'
  },
  {
    id: 'egg',
    amount: '2'
  }
],
  content: {
    en: {
      title: "Weeknight Ramen",
      description: "Brothy noodles with egg.",
      steps: [
  "Prepare broth: In a large pot, bring 800ml chicken broth to a boil. Add 2 tbsp soy sauce and reduce heat to a gentle simmer. Keep warm while you prepare other ingredients.",
  "Cook eggs: While broth simmers, bring a small pot of water to a boil. Gently lower 2 eggs into boiling water and cook for exactly 6 minutes for soft-boiled (or 7 minutes for slightly firmer). Immediately transfer to ice water to stop cooking. Peel carefully when cool enough to handle.",
  "Prepare vegetables: Wash 100g fresh spinach. Have 1 tsp chili flakes ready. If using other vegetables (carrots, mushrooms), slice them thinly now.",
  "Cook noodles: Add 200g ramen noodles (or other thin noodles) to the simmering broth. Cook according to package directions (usually 4-5 minutes) until tender but still slightly chewy. Don't overcook.",
  "Add vegetables: In the last minute of cooking, add spinach and 1 tsp chili flakes to the broth. Stir until spinach wilts. The noodles should be done at the same time.",
  "Assemble bowls: Divide noodles and broth between 2 bowls. Cut soft-boiled eggs in half lengthwise and place 1 egg (2 halves) on top of each bowl. The yolk should be runny.",
  "Serve: Serve immediately while hot. The broth should be flavorful, the noodles should be tender, and the egg should be perfectly soft-boiled. Add extra soy sauce or chili flakes to taste."
]
    },
    de: {
      title: "Schnelle Ramen",
      description: "Nudel-Suppe mit Ei.",
      steps: [
  "Brühe vorbereiten: In einem großen Topf 800ml Hühnerbrühe zum Kochen bringen. 2 EL Sojasauce hinzufügen und Hitze auf ein sanftes Köcheln reduzieren. Warm halten, während Sie andere Zutaten vorbereiten.",
  "Eier kochen: Während die Brühe köchelt, einen kleinen Topf mit Wasser zum Kochen bringen. 2 Eier vorsichtig in kochendes Wasser geben und genau 6 Minuten für weichgekocht kochen (oder 7 Minuten für etwas fester). Sofort in Eiswasser geben, um das Kochen zu stoppen. Vorsichtig schälen, wenn sie kühl genug sind.",
  "Gemüse vorbereiten: 100g frischen Spinat waschen. 1 TL Chiliflocken bereithalten. Wenn Sie anderes Gemüse verwenden (Karotten, Pilze), jetzt dünn schneiden.",
  "Nudeln kochen: 200g Ramen-Nudeln (oder andere dünne Nudeln) zur köchelnden Brühe geben. Nach Packungsanleitung kochen (meist 4-5 Minuten), bis zart, aber noch leicht zäh. Nicht überkochen.",
  "Gemüse hinzufügen: In der letzten Minute des Kochens Spinat und 1 TL Chiliflocken zur Brühe geben. Umrühren, bis der Spinat welkt. Die Nudeln sollten gleichzeitig fertig sein.",
  "Schalen anrichten: Nudeln und Brühe auf 2 Schalen aufteilen. Weichgekochte Eier der Länge nach halbieren und 1 Ei (2 Hälften) auf jede Schale legen. Das Eigelb sollte flüssig sein.",
  "Servieren: Sofort servieren, solange heiß. Die Brühe sollte geschmackvoll sein, die Nudeln sollten zart sein, und das Ei sollte perfekt weichgekocht sein. Nach Geschmack zusätzliche Sojasauce oder Chiliflocken hinzufügen."
]
    }
  }
};
