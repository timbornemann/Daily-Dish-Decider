import { RecipeDefinition } from '../../types';

export const POKE_BOWL: RecipeDefinition = {
  id: 'local-poke-bowl',
  prepTime: '25 mins',
  tags: ["Lunch","Bowl","Fresh","Rice","Salmon","Avocado","Cucumber","Asian","Healthy"],
  basePortions: 2,
  ingredients: [
  {
    id: 'rice',
    amount: '300g'
  },
  {
    id: 'salmon',
    amount: '250g'
  },
  {
    id: 'avocado',
    amount: '1'
  },
  {
    id: 'cucumber',
    amount: '1/2'
  },
  {
    id: 'soy_sauce',
    amount: '2 tbsp'
  },
  {
    id: 'lime',
    amount: '1'
  }
],
  content: {
    en: {
      title: "Quick Poke Bowl",
      description: "No-cook assembly.",
      steps: [
  "Cook rice: Cook 300g sushi rice or short-grain rice according to package directions. Once cooked, spread on a baking sheet and let cool to room temperature (about 15 minutes). The rice should be slightly warm, not hot.",
  "Prepare salmon: Cut 250g fresh, sushi-grade salmon into 2cm cubes. In a small bowl, mix salmon with 2 tbsp soy sauce and 1 tbsp sesame oil. Let marinate for 10-15 minutes in the refrigerator while you prepare other ingredients.",
  "Prepare vegetables: Cut 1 avocado in half, remove pit, and cube the flesh. Slice 1/2 cucumber into thin rounds or matchsticks. Have any other desired vegetables ready (edamame, radish, etc.).",
  "Assemble bowls: Divide cooled rice between 2 bowls. Top with marinated salmon cubes, arranging them attractively. Add avocado cubes and cucumber slices around the salmon.",
  "Add toppings: Drizzle with additional soy sauce and sesame oil if desired. Add any other toppings like seaweed, sesame seeds, or pickled ginger.",
  "Finish: Cut 1 lime into wedges. Serve immediately with lime wedges on the side. The rice should be at room temperature, the salmon should be fresh and marinated, and everything should be colorful and appealing.",
  "Serve: Best eaten immediately while fresh. Squeeze lime over before eating. The bowl should be a mix of textures and flavors - fresh, light, and satisfying."
]
    },
    de: {
      title: "Schnelle Poke Bowl",
      description: "Kaltes Schüsselgericht.",
      steps: [
  "Reis kochen: 300g Sushi-Reis oder Kurzkornreis nach Packungsanleitung kochen. Sobald gekocht, auf ein Backblech verteilen und auf Raumtemperatur abkühlen lassen (ca. 15 Minuten). Der Reis sollte leicht warm, nicht heiß sein.",
  "Lachs vorbereiten: 250g frischen, sushi-tauglichen Lachs in 2cm große Würfel schneiden. In einer kleinen Schüssel Lachs mit 2 EL Sojasauce und 1 EL Sesamöl mischen. 10-15 Minuten im Kühlschrank marinieren lassen, während Sie andere Zutaten vorbereiten.",
  "Gemüse vorbereiten: 1 Avocado halbieren, Kern entfernen und das Fruchtfleisch würfeln. 1/2 Gurke in dünne Scheiben oder Streichhölzer schneiden. Alle anderen gewünschten Gemüse bereithalten (Edamame, Rettich, etc.).",
  "Schalen anrichten: Abgekühlten Reis auf 2 Schalen aufteilen. Mit marinierten Lachswürfeln toppen, attraktiv anordnen. Avocadowürfel und Gurkenscheiben um den Lachs herum anordnen.",
  "Toppings hinzufügen: Nach Wunsch mit zusätzlicher Sojasauce und Sesamöl beträufeln. Alle anderen Toppings wie Algen, Sesamsamen oder eingelegten Ingwer hinzufügen.",
  "Fertigstellen: 1 Limette in Spalten schneiden. Sofort mit Limettenspalten servieren. Der Reis sollte bei Raumtemperatur sein, der Lachs sollte frisch und mariniert sein, und alles sollte farbenfroh und ansprechend sein.",
  "Servieren: Am besten sofort essen, solange frisch. Limette darüber auspressen vor dem Essen. Die Schale sollte eine Mischung aus Texturen und Geschmacksrichtungen sein - frisch, leicht und befriedigend."
]
    }
  }
};
