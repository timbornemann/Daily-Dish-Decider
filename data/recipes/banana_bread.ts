import { RecipeDefinition } from '../types';

export const BANANA_BREAD: RecipeDefinition = {
  id: 'local-banana-bread',
  prepTime: '1 hr 15 mins',
  tags: ["Baking","Sweet","Snack","Banana","Flour","Sugar","Bread","Dessert"],
  basePortions: 8,
  ingredients: [
  {
    id: 'banana',
    amount: '3'
  },
  {
    id: 'flour',
    amount: '250g'
  },
  {
    id: 'sugar',
    amount: '100g'
  },
  {
    id: 'butter',
    amount: '100g'
  },
  {
    id: 'egg',
    amount: '1'
  }
],
  content: {
    en: {
      title: "Banana Bread",
      description: "Moist fruit cake.",
      steps: [
  "Prepare bananas: Mash 3 very ripe bananas (they should have brown spots) in a large bowl with a fork until mostly smooth with some small chunks remaining. The riper the bananas, the sweeter and more flavorful the bread.",
  "Mix wet ingredients: To the mashed bananas, add 100g melted butter (cooled slightly), 1 egg, and 1 tsp vanilla extract. Mix until well combined. The mixture should be smooth and uniform.",
  "Combine dry ingredients: In a separate bowl, whisk together 250g flour, 100g sugar, 1 tsp baking powder, 1/2 tsp baking soda, and a pinch of salt. Make sure there are no lumps.",
  "Combine mixtures: Add dry ingredients to wet ingredients. Fold gently with a spatula until just combined - don't overmix. A few lumps are fine. Overmixing makes the bread tough.",
  "Prepare pan: Grease a 23x13cm loaf pan with butter or line with parchment paper. Preheat oven to 180°C/355°F.",
  "Bake: Pour batter into prepared pan. Smooth the top. Bake for 55-65 minutes until a toothpick inserted in the center comes out clean or with a few moist crumbs. The top should be golden brown.",
  "Cool and serve: Let cool in pan for 10 minutes, then remove and cool completely on a wire rack. Slice when completely cool. The bread should be moist, sweet, and have a tender crumb. Store covered at room temperature."
]
    },
    de: {
      title: "Bananenbrot",
      description: "Saftiger Kuchen.",
      steps: [
  "Bananen vorbereiten: 3 sehr reife Bananen (sie sollten braune Flecken haben) in einer großen Schüssel mit einer Gabel zerdrücken, bis sie größtenteils glatt sind, mit einigen kleinen Stücken. Je reifer die Bananen, desto süßer und geschmackvoller das Brot.",
  "Flüssige Zutaten mischen: Zu den zerdrückten Bananen 100g geschmolzene Butter (leicht abgekühlt), 1 Ei und 1 TL Vanilleextrakt hinzufügen. Mischen, bis gut vermischt. Die Mischung sollte glatt und gleichmäßig sein.",
  "Trockene Zutaten kombinieren: In einer separaten Schüssel 250g Mehl, 100g Zucker, 1 TL Backpulver, 1/2 TL Natron und eine Prise Salz verquirlen. Sicherstellen, dass keine Klumpen vorhanden sind.",
  "Mischungen kombinieren: Trockene Zutaten zu den flüssigen Zutaten geben. Sanft mit einem Spatel unterheben, bis gerade vermischt - nicht übermischen. Einige Klumpen sind in Ordnung. Übermischen macht das Brot zäh.",
  "Form vorbereiten: Eine 23x13cm Kastenform mit Butter einfetten oder mit Backpapier auslegen. Ofen auf 180°C vorheizen.",
  "Backen: Teig in die vorbereitete Form gießen. Die Oberseite glatt streichen. 55-65 Minuten backen, bis ein Zahnstocher, der in die Mitte gesteckt wird, sauber herauskommt oder mit einigen feuchten Krümeln. Die Oberseite sollte goldbraun sein.",
  "Abkühlen und servieren: 10 Minuten in der Form abkühlen lassen, dann entfernen und vollständig auf einem Kuchengitter abkühlen lassen. Schneiden, wenn vollständig abgekühlt. Das Brot sollte feucht, süß sein und eine zarte Krume haben. Abgedeckt bei Raumtemperatur aufbewahren."
]
    }
  }
};
