import { RecipeDefinition } from '../../../../types';

export const FROZEN_PIZZA_UPGRADE: RecipeDefinition = {
  id: 'local-frozen-pizza-upgrade',
  prepTime: '20 mins',
  tags: ["Dinner","Easy","Comfort Food","Pizza","Tomato","Mozzarella","Quick","Simple"],
  basePortions: 2,
  ingredients: [
  {
    id: 'frozen_pizza',
    amount: '1'
  },
  {
    id: 'tomato',
    amount: '2'
  },
  {
    id: 'mozzarella',
    amount: '1 ball'
  },
  {
    id: 'herbs',
    amount: '1 handful'
  }
],
  content: {
    en: {
      title: "Frozen Pizza Glow-Up",
      description: "Upgrade a ready pizza.",
      steps: [
  "Preheat oven: Preheat oven to the temperature specified on the frozen pizza package (usually 200-220°C/390-430°F). Remove frozen pizza from packaging and place on a baking sheet or pizza stone if you have one.",
  "Prepare toppings: While oven preheats, slice 2 fresh tomatoes into thin rounds. Tear 1 ball of fresh mozzarella into small pieces. Chop 1 handful of fresh herbs (basil, oregano, or parsley).",
  "Parbake base: Place frozen pizza in the preheated oven and bake for 5-7 minutes (about half the recommended time) until the crust starts to set but isn't fully cooked. This creates a better base for your toppings.",
  "Add fresh toppings: Remove pizza from oven. Arrange tomato slices evenly over the pizza. Scatter torn mozzarella pieces on top. Sprinkle with fresh herbs. Don't overdo it - you want to enhance, not overwhelm.",
  "Finish baking: Return pizza to oven and bake for the remaining time (usually 8-12 more minutes) until the crust is golden and crispy, cheese is melted, and toppings are heated through. Watch carefully to avoid burning.",
  "Check doneness: The pizza is done when the crust is crispy, cheese is bubbly, and the bottom is golden brown. The fresh toppings should be warm but not overcooked.",
  "Serve: Remove from oven and let rest for 2 minutes before slicing. The upgraded pizza should have a crispier crust and fresher flavor than the original frozen version. Serve hot."
]
    },
    de: {
      title: "Tiefkühlpizza Deluxe",
      description: "Fertige Pizza aufpeppen.",
      steps: [
  "Ofen vorheizen: Ofen auf die auf der Tiefkühlpizza-Verpackung angegebene Temperatur vorheizen (meist 200-220°C). Tiefkühlpizza aus der Verpackung nehmen und auf ein Backblech oder einen Pizzastein legen, falls vorhanden.",
  "Toppings vorbereiten: Während der Ofen vorheizt, 2 frische Tomaten in dünne Scheiben schneiden. 1 Kugel frischen Mozzarella in kleine Stücke reißen. 1 Handvoll frische Kräuter (Basilikum, Oregano oder Petersilie) hacken.",
  "Basis vorbacken: Tiefkühlpizza in den vorgeheizten Ofen geben und 5-7 Minuten backen (etwa die Hälfte der empfohlenen Zeit), bis der Teig zu setzen beginnt, aber noch nicht vollständig gar ist. Dies schafft eine bessere Basis für Ihre Toppings.",
  "Frische Toppings hinzufügen: Pizza aus dem Ofen nehmen. Tomatenscheiben gleichmäßig über die Pizza anordnen. Gerissene Mozzarella-Stücke darüberstreuen. Mit frischen Kräutern bestreuen. Nicht übertreiben - Sie möchten verbessern, nicht überwältigen.",
  "Fertig backen: Pizza zurück in den Ofen geben und für die restliche Zeit (meist 8-12 weitere Minuten) backen, bis der Teig goldbraun und knusprig ist, der Käse geschmolzen ist und die Toppings durchgewärmt sind. Vorsichtig beobachten, um Verbrennen zu vermeiden.",
  "Garheit prüfen: Die Pizza ist fertig, wenn der Teig knusprig ist, der Käse blubbernd ist und der Boden goldbraun ist. Die frischen Toppings sollten warm, aber nicht überkocht sein.",
  "Servieren: Aus dem Ofen nehmen und 2 Minuten ruhen lassen, bevor Sie schneiden. Die aufgewertete Pizza sollte einen knusprigeren Teig und einen frischeren Geschmack als die ursprüngliche Tiefkühlversion haben. Heiß servieren."
]
    }
  }
};
