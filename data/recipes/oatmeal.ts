import { RecipeDefinition } from '../../types';

export const OATMEAL: RecipeDefinition = {
  id: 'local-oatmeal',
  prepTime: '10 mins',
  tags: ["Breakfast","Healthy","Vegetarian","Oat","Milk","Honey","Quick","Simple","Fiber"],
  basePortions: 2,
  ingredients: [
  {
    id: 'oat',
    amount: '1 cup'
  },
  {
    id: 'milk',
    amount: '2 cups'
  },
  {
    id: 'honey',
    amount: '1 tbsp'
  },
  {
    id: 'salt',
    amount: '1 pinch'
  }
],
  content: {
    en: {
      title: "Morning Oatmeal",
      description: "Healthy warm breakfast.",
      steps: [
  "Measure ingredients: Measure 1 cup (100g) of rolled oats and 2 cups (500ml) of milk. Have honey, salt, and any toppings ready (fresh fruits, nuts, berries).",
  "Heat milk: Pour milk into a medium saucepan. Heat over medium heat until it comes to a gentle boil, stirring occasionally to prevent scorching. Watch carefully - milk can boil over quickly.",
  "Add oats: Once milk is boiling, reduce heat to low and add the oats. Stir immediately to prevent clumping. Add a small pinch of salt (this enhances the flavor).",
  "Simmer: Cook over low heat for 5-7 minutes, stirring frequently, until the oats are tender and the mixture has thickened to your desired consistency. The oatmeal should be creamy, not too thick or too thin.",
  "Sweeten: Remove from heat and stir in 1 tbsp honey (or to taste). You can also add a pinch of cinnamon or vanilla extract at this point.",
  "Serve: Pour into bowls and top with fresh fruits, berries, nuts, or additional honey. Serve immediately while warm. If it gets too thick as it cools, add a splash of warm milk."
]
    },
    de: {
      title: "Haferbrei (Porridge)",
      description: "Gesundes warmes Frühstück.",
      steps: [
  "Zutaten abmessen: 1 Tasse (100g) Haferflocken und 2 Tassen (500ml) Milch abmessen. Honig, Salz und alle Toppings bereitstellen (frisches Obst, Nüsse, Beeren).",
  "Milch erhitzen: Milch in einen mittleren Topf gießen. Bei mittlerer Hitze erhitzen, bis sie sanft kocht, gelegentlich umrühren, um Anbrennen zu verhindern. Vorsichtig beobachten - Milch kann schnell überkochen.",
  "Haferflocken hinzufügen: Sobald die Milch kocht, Hitze auf niedrig reduzieren und Haferflocken hinzufügen. Sofort umrühren, um Klumpenbildung zu verhindern. Eine kleine Prise Salz hinzufügen (dies verstärkt den Geschmack).",
  "Köcheln lassen: Bei niedriger Hitze 5-7 Minuten kochen, häufig umrühren, bis die Haferflocken zart sind und die Mischung die gewünschte Konsistenz erreicht hat. Der Haferbrei sollte cremig sein, nicht zu dick oder zu dünn.",
  "Süßen: Vom Herd nehmen und 1 EL Honig (oder nach Geschmack) einrühren. Sie können auch eine Prise Zimt oder Vanilleextrakt zu diesem Zeitpunkt hinzufügen.",
  "Servieren: In Schalen gießen und mit frischem Obst, Beeren, Nüssen oder zusätzlichem Honig toppen. Sofort servieren, solange es warm ist. Wenn es beim Abkühlen zu dick wird, einen Schuss warme Milch hinzufügen."
]
    }
  }
};
