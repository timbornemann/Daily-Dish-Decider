import { RecipeDefinition } from '../../../types';

export const SMOOTHIE_BOWL: RecipeDefinition = {
  id: 'local-smoothie-bowl',
  prepTime: '5 mins',
  tags: ["Breakfast","Healthy","Quick","Berry","Banana","Yogurt","Oat","No Cook","Cold"],
  basePortions: 1,
  ingredients: [
  {
    id: 'berry',
    amount: '200g (Frozen)'
  },
  {
    id: 'banana',
    amount: '1'
  },
  {
    id: 'yogurt',
    amount: '100g'
  },
  {
    id: 'oat',
    amount: '2 tbsp'
  }
],
  content: {
    en: {
      title: "Berry Smoothie Bowl",
      description: "Thick smoothie.",
      steps: [
  "Prepare frozen fruit: Measure 200g frozen berries (mixed berries, strawberries, or blueberries). You can also use fresh berries that you've frozen for at least 2 hours. The frozen fruit is key for a thick consistency.",
  "Blend base: In a blender, combine frozen berries, 1 banana (sliced and frozen if possible), and 100g yogurt. Blend on high speed until thick and smooth. The mixture should be very thick, almost like soft-serve ice cream - not runny.",
  "Check consistency: If it's too thin, add more frozen fruit. If it's too thick, add a tiny splash of milk or more yogurt. The goal is a spoonable, thick consistency that holds its shape.",
  "Pour into bowl: Transfer the thick smoothie to a serving bowl. Use a spoon to smooth the top. Work quickly as it will start to melt.",
  "Add toppings: Top with 2 tbsp granola, sliced fresh banana, additional fresh berries, nuts, seeds, or coconut flakes. Arrange them attractively - this is part of the appeal!",
  "Serve immediately: Serve right away while still thick and cold. The bowl should be eaten with a spoon, not drunk. Best enjoyed fresh - it will become more liquid as it warms up."
]
    },
    de: {
      title: "Beeren Smoothie Bowl",
      description: "Dicker Smoothie zum Löffeln.",
      steps: [
  "Gefrorene Früchte vorbereiten: 200g gefrorene Beeren (Mischbeeren, Erdbeeren oder Blaubeeren) abmessen. Sie können auch frische Beeren verwenden, die Sie mindestens 2 Stunden eingefroren haben. Die gefrorenen Früchte sind der Schlüssel für eine dicke Konsistenz.",
  "Basis mixen: In einem Mixer gefrorene Beeren, 1 Banane (geschnitten und gefroren, wenn möglich) und 100g Joghurt kombinieren. Bei hoher Geschwindigkeit mixen, bis dick und glatt. Die Mischung sollte sehr dick sein, fast wie Softeis - nicht flüssig.",
  "Konsistenz prüfen: Wenn zu dünn, mehr gefrorene Früchte hinzufügen. Wenn zu dick, einen winzigen Schuss Milch oder mehr Joghurt hinzufügen. Das Ziel ist eine löffelbare, dicke Konsistenz, die ihre Form hält.",
  "In Schüssel gießen: Den dicken Smoothie in eine Servierschüssel übertragen. Mit einem Löffel die Oberseite glatt streichen. Schnell arbeiten, da er anfängt zu schmelzen.",
  "Toppings hinzufügen: Mit 2 EL Müsli, geschnittener frischer Banane, zusätzlichen frischen Beeren, Nüssen, Samen oder Kokosflocken toppen. Attraktiv anordnen - das ist Teil des Reizes!",
  "Sofort servieren: Sofort servieren, solange noch dick und kalt. Die Schüssel sollte mit einem Löffel gegessen werden, nicht getrunken. Am besten frisch genießen - sie wird flüssiger, wenn sie sich erwärmt."
]
    }
  }
};
