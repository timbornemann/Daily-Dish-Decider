import { RecipeDefinition } from '../../types';

export const BURGER: RecipeDefinition = {
  id: 'local-burger',
  prepTime: '20 mins',
  tags: ["Dinner","American","Comfort Food","Beef","Bread","Cheese","Grilled","Quick"],
  basePortions: 4,
  ingredients: [
  {
    id: 'ground_beef',
    amount: '400g'
  },
  {
    id: 'bun',
    amount: '4'
  },
  {
    id: 'cheese',
    amount: '4 slices'
  },
  {
    id: 'tomato',
    amount: '1'
  },
  {
    id: 'lettuce',
    amount: '4 leaves'
  }
],
  content: {
    en: {
      title: "Classic Burger",
      description: "Juicy beef burger.",
      steps: [
  "Form patties: Gently shape 400g ground beef into 4 equal patties, about 2cm thick. Don't overwork the meat - handle it as little as possible. Make a slight indentation in the center of each patty (this prevents them from puffing up). Season both sides with salt and pepper.",
  "Prepare toppings: Slice 1 tomato. Wash and dry 4 lettuce leaves. Have 4 slices of cheese ready. Slice any other desired toppings (onions, pickles, etc.).",
  "Cook patties: Heat a grill, griddle, or large pan over medium-high heat. Cook patties for 4-5 minutes per side for medium doneness (longer for well-done). Don't press down on them while cooking - this squeezes out juices. Add cheese slices in the last minute of cooking to melt.",
  "Toast buns: While patties cook, split 4 burger buns and toast the cut sides in a pan, on the grill, or under a broiler for 1-2 minutes until golden brown. Don't burn them.",
  "Assemble: Place bottom bun on plate. Add lettuce leaf, then the cooked patty with cheese, then tomato and other toppings. Add condiments (ketchup, mayo, mustard) if desired. Top with the other bun half.",
  "Serve: Serve immediately while hot. The burger should be juicy, the bun should be slightly crispy, and everything should hold together. Best eaten with your hands!"
]
    },
    de: {
      title: "Klassischer Burger",
      description: "Saftiger Rindfleisch-Burger.",
      steps: [
  "Patties formen: 400g Hackfleisch sanft zu 4 gleichmäßigen Patties formen, etwa 2cm dick. Das Fleisch nicht überarbeiten - so wenig wie möglich damit arbeiten. Eine leichte Vertiefung in der Mitte jedes Patties machen (dies verhindert, dass sie aufblähen). Beide Seiten mit Salz und Pfeffer würzen.",
  "Toppings vorbereiten: 1 Tomate in Scheiben schneiden. 4 Salatblätter waschen und trocknen. 4 Käsescheiben bereithalten. Alle anderen gewünschten Toppings schneiden (Zwiebeln, Gurken, etc.).",
  "Patties braten: Einen Grill, Griddle oder eine große Pfanne bei mittlerer bis hoher Hitze erhitzen. Patties 4-5 Minuten pro Seite braten für mittlere Garheit (länger für durchgegart). Während des Kochens nicht nach unten drücken - das presst den Saft heraus. Käsescheiben in der letzten Minute des Kochens hinzufügen, um zu schmelzen.",
  "Brötchen toasten: Während die Patties braten, 4 Burger-Brötchen aufschneiden und die Schnittseiten in einer Pfanne, auf dem Grill oder unter dem Grill 1-2 Minuten toasten, bis goldbraun. Nicht verbrennen lassen.",
  "Zusammenbauen: Unteres Brötchen auf den Teller legen. Salatblatt hinzufügen, dann das gebratene Patty mit Käse, dann Tomate und andere Toppings. Nach Wunsch Gewürze (Ketchup, Mayo, Senf) hinzufügen. Mit der anderen Brötchenhälfte toppen.",
  "Servieren: Sofort servieren, solange heiß. Der Burger sollte saftig sein, das Brötchen sollte leicht knusprig sein, und alles sollte zusammenhalten. Am besten mit den Händen essen!"
]
    }
  }
};
