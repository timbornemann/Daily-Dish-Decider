import { RecipeDefinition } from '../../../types';

export const OVERNIGHT_OATS: RecipeDefinition = {
  id: 'local-overnight-oats',
  prepTime: '5 mins (plus overnight)',
  tags: ["Breakfast","Prep Ahead","Healthy","Oat","Yogurt","Berry","Honey","No Cook","Cold"],
  basePortions: 2,
  ingredients: [
  {
    id: 'oat',
    amount: '1 cup'
  },
  {
    id: 'yogurt',
    amount: '200g'
  },
  {
    id: 'honey',
    amount: '1 tbsp'
  },
  {
    id: 'berry',
    amount: '150g (Frozen or fresh)'
  },
  {
    id: 'cinnamon',
    amount: '1 tsp'
  }
],
  content: {
    en: {
      title: "Overnight Oats",
      description: "Breakfast that waits.",
      steps: [
  "Measure ingredients: In a jar or container with a lid, combine 1 cup (100g) rolled oats with 200g yogurt (or milk, or a combination). Use a container that holds at least 500ml and has a tight-fitting lid.",
  "Add flavorings: Stir in 1 tbsp honey (or maple syrup) and 1 tsp cinnamon until well combined. You can also add a pinch of salt to enhance the flavor.",
  "Add fruits: Add 150g fresh or frozen berries, or 1 sliced banana. Mix gently to distribute. If using frozen berries, they'll thaw overnight and add extra liquid.",
  "Mix well: Stir everything together until the oats are fully moistened and the ingredients are well distributed. The mixture should be fairly liquid at this point - the oats will absorb the liquid overnight.",
  "Chill: Seal the jar tightly and refrigerate for at least 4 hours, preferably overnight (8-12 hours). The oats need time to soften and absorb the liquid.",
  "Check consistency: In the morning, check the consistency. It should be thick and creamy, like pudding. If it's too thick, add a splash of milk. If too thin, add more oats and let sit for 30 minutes.",
  "Serve: Top with 2 tbsp chopped nuts, additional fresh fruits, or a drizzle of honey. Serve cold directly from the jar or transfer to a bowl. The oats should be soft, creamy, and ready to eat - no cooking required!"
]
    },
    de: {
      title: "Overnight Oats",
      description: "Frühstück über Nacht.",
      steps: [
  "Zutaten abmessen: In einem Glas oder Behälter mit Deckel 1 Tasse (100g) Haferflocken mit 200g Joghurt (oder Milch oder einer Kombination) kombinieren. Verwenden Sie einen Behälter, der mindestens 500ml fasst und einen dicht schließenden Deckel hat.",
  "Aromen hinzufügen: 1 EL Honig (oder Ahornsirup) und 1 TL Zimt einrühren, bis gut vermischt. Sie können auch eine Prise Salz hinzufügen, um den Geschmack zu verstärken.",
  "Früchte hinzufügen: 150g frische oder gefrorene Beeren hinzufügen oder 1 geschnittene Banane. Sanft mischen, um zu verteilen. Wenn Sie gefrorene Beeren verwenden, tauen sie über Nacht auf und fügen extra Flüssigkeit hinzu.",
  "Gut mischen: Alles zusammen umrühren, bis die Haferflocken vollständig befeuchtet sind und die Zutaten gut verteilt sind. Die Mischung sollte zu diesem Zeitpunkt ziemlich flüssig sein - die Haferflocken werden über Nacht die Flüssigkeit aufsaugen.",
  "Kühlen: Das Glas fest verschließen und mindestens 4 Stunden, vorzugsweise über Nacht (8-12 Stunden), kühlen. Die Haferflocken brauchen Zeit, um zu erweichen und die Flüssigkeit aufzunehmen.",
  "Konsistenz prüfen: Am Morgen die Konsistenz prüfen. Sie sollte dick und cremig sein, wie Pudding. Wenn zu dick, einen Schuss Milch hinzufügen. Wenn zu dünn, mehr Haferflocken hinzufügen und 30 Minuten stehen lassen.",
  "Servieren: Mit 2 EL gehackten Nüssen, zusätzlichen frischen Früchten oder einem Schuss Honig toppen. Kalt direkt aus dem Glas servieren oder in eine Schüssel übertragen. Die Haferflocken sollten weich, cremig und essfertig sein - kein Kochen erforderlich!"
]
    }
  }
};
