import { RecipeDefinition } from '../types';

export const SPAGHETTI_AGLIO: RecipeDefinition = {
  id: 'local-spaghetti-aglio',
  prepTime: '15 mins',
  tags: ["Dinner","Italian","Vegetarian","Pasta","Quick","Garlic","One Pot","Simple"],
  basePortions: 4,
  ingredients: [
  {
    id: 'pasta',
    amount: '400g'
  },
  {
    id: 'garlic',
    amount: '4 cloves'
  },
  {
    id: 'olive_oil',
    amount: '100ml'
  },
  {
    id: 'chili_flakes',
    amount: '1 tsp'
  },
  {
    id: 'herbs',
    amount: '1 handful'
  }
],
  content: {
    en: {
      title: "Spaghetti Aglio e Olio",
      description: "Simple garlic and oil pasta.",
      steps: [
  "Prepare ingredients: Finely slice 4 cloves of garlic into thin slices (not minced). Finely chop fresh parsley. Measure out olive oil, chili flakes, and salt. Set a large pot of salted water to boil for pasta.",
  "Cook pasta: Once water is boiling vigorously, add 400g spaghetti and cook according to package directions (usually 8-10 minutes) until al dente. Reserve 1 cup of pasta water before draining.",
  "Heat oil: While pasta cooks, heat 100ml olive oil in a large pan over medium-low heat (not too hot, or garlic will burn). Add the sliced garlic and cook gently for 2-3 minutes until fragrant and lightly golden - watch carefully, garlic burns easily.",
  "Add chili: Add 1 tsp chili flakes to the oil and garlic, stir for 30 seconds until fragrant. Remove from heat immediately to prevent burning.",
  "Combine pasta: Drain pasta (reserve water) and add hot pasta directly to the pan with oil and garlic. Toss vigorously with tongs, adding a splash of reserved pasta water (about 2-3 tablespoons) to help create a creamy emulsion.",
  "Finish: Add chopped parsley and toss again. Season with salt to taste. The pasta should be glossy and well-coated. Serve immediately in warm bowls."
]
    },
    de: {
      title: "Spaghetti Aglio e Olio",
      description: "Einfache Pasta mit Knoblauch und Öl.",
      steps: [
  "Zutaten vorbereiten: 4 Knoblauchzehen in dünne Scheiben schneiden (nicht hacken). Frische Petersilie fein hacken. Olivenöl, Chiliflocken und Salz bereitstellen. Einen großen Topf mit gesalzenem Wasser für die Pasta zum Kochen bringen.",
  "Pasta kochen: Sobald das Wasser kräftig kocht, 400g Spaghetti hinzufügen und nach Packungsanleitung kochen (meist 8-10 Minuten) bis al dente. Vor dem Abgießen 1 Tasse Nudelwasser zurückbehalten.",
  "Öl erhitzen: Während die Pasta kocht, 100ml Olivenöl in einer großen Pfanne bei mittlerer bis niedriger Hitze erhitzen (nicht zu heiß, sonst verbrennt der Knoblauch). Die Knoblauchscheiben hinzufügen und 2-3 Minuten sanft braten, bis sie duften und leicht goldbraun sind - vorsichtig beobachten, Knoblauch verbrennt leicht.",
  "Chili hinzufügen: 1 TL Chiliflocken zum Öl und Knoblauch geben, 30 Sekunden rühren, bis es duftet. Sofort vom Herd nehmen, um Verbrennen zu vermeiden.",
  "Pasta kombinieren: Pasta abgießen (Wasser zurückbehalten) und die heiße Pasta direkt in die Pfanne mit Öl und Knoblauch geben. Kräftig mit einer Zange schwenken, dabei 2-3 Esslöffel zurückbehaltenes Nudelwasser hinzufügen, um eine cremige Emulsion zu erzeugen.",
  "Fertigstellen: Gehackte Petersilie hinzufügen und erneut schwenken. Mit Salz abschmecken. Die Pasta sollte glänzend und gut bedeckt sein. Sofort in warmen Schalen servieren."
]
    }
  }
};
