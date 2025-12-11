import { RecipeDefinition } from '../types';

export const CARBONARA: RecipeDefinition = {
  id: 'local-carbonara',
  prepTime: '25 mins',
  tags: ["Dinner","Italian","Comfort Food","Pasta","Bacon","Egg","Creamy","Quick"],
  basePortions: 4,
  ingredients: [
  {
    id: 'pasta',
    amount: '400g'
  },
  {
    id: 'egg',
    amount: '3'
  },
  {
    id: 'bacon',
    amount: '150g'
  },
  {
    id: 'parmesan',
    amount: '100g'
  },
  {
    id: 'pepper_spice',
    amount: '1 tbsp'
  }
],
  content: {
    en: {
      title: "Spaghetti Carbonara",
      description: "Roman classic with egg and bacon.",
      steps: [
  "Prepare ingredients: Cut 150g bacon into small cubes or strips. Grate 100g parmesan cheese. Separate 3 egg yolks from whites (you'll only need yolks). Set a large pot of salted water to boil.",
  "Cook bacon: Heat a large pan over medium heat. Add bacon and cook for 5-7 minutes, stirring occasionally, until crispy and golden. Remove from heat but keep the pan with bacon and rendered fat.",
  "Cook pasta: Once water is boiling, add 400g spaghetti and cook until al dente (usually 8-10 minutes). Reserve 1 cup of pasta water before draining.",
  "Prepare egg mixture: While pasta cooks, whisk together 3 egg yolks, grated parmesan, and 1 tbsp freshly ground black pepper in a medium bowl until smooth and creamy.",
  "Combine off heat: Drain pasta (reserve water) and immediately add hot pasta to the pan with bacon. Toss quickly to coat with bacon fat. Remove pan from heat completely - this is crucial to prevent eggs from scrambling.",
  "Add egg mixture: Working quickly, pour the egg and cheese mixture over the hot pasta while tossing vigorously with tongs. Add 2-3 tablespoons of reserved pasta water to help create a creamy sauce.",
  "Finish: Continue tossing until the sauce is creamy and coats the pasta. The heat from the pasta should cook the eggs just enough to create a silky sauce. If it's too thick, add more pasta water. Serve immediately with extra parmesan and black pepper."
]
    },
    de: {
      title: "Spaghetti Carbonara",
      description: "Römischer Klassiker mit Ei und Speck.",
      steps: [
  "Zutaten vorbereiten: 150g Speck in kleine Würfel oder Streifen schneiden. 100g Parmesan reiben. 3 Eigelb vom Eiweiß trennen (Sie benötigen nur Eigelb). Einen großen Topf mit gesalzenem Wasser zum Kochen bringen.",
  "Speck braten: Eine große Pfanne bei mittlerer Hitze erhitzen. Speck hinzufügen und 5-7 Minuten braten, gelegentlich rühren, bis er knusprig und goldbraun ist. Vom Herd nehmen, aber die Pfanne mit Speck und ausgelassenem Fett behalten.",
  "Pasta kochen: Sobald das Wasser kocht, 400g Spaghetti hinzufügen und bis al dente kochen (meist 8-10 Minuten). Vor dem Abgießen 1 Tasse Nudelwasser zurückbehalten.",
  "Ei-Mischung vorbereiten: Während die Pasta kocht, 3 Eigelb, geriebenen Parmesan und 1 EL frisch gemahlenen schwarzen Pfeffer in einer mittleren Schüssel verquirlen, bis glatt und cremig.",
  "Außerhalb der Hitze kombinieren: Pasta abgießen (Wasser zurückbehalten) und sofort die heiße Pasta in die Pfanne mit Speck geben. Schnell schwenken, um mit Speckfett zu bedecken. Die Pfanne vollständig vom Herd nehmen - dies ist entscheidend, um zu verhindern, dass die Eier stocken.",
  "Ei-Mischung hinzufügen: Schnell arbeiten, die Ei-Käse-Mischung über die heiße Pasta gießen, während Sie kräftig mit einer Zange schwenken. 2-3 Esslöffel zurückbehaltenes Nudelwasser hinzufügen, um eine cremige Sauce zu erzeugen.",
  "Fertigstellen: Weiter schwenken, bis die Sauce cremig ist und die Pasta bedeckt. Die Hitze der Pasta sollte die Eier gerade genug garen, um eine seidige Sauce zu erzeugen. Wenn zu dick, mehr Nudelwasser hinzufügen. Sofort mit extra Parmesan und schwarzem Pfeffer servieren."
]
    }
  }
};
