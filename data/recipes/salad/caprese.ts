import { RecipeDefinition } from '../../../types';

export const CAPRESE: RecipeDefinition = {
  id: 'local-caprese',
  prepTime: '10 mins',
  tags: ["Lunch","Salad","Vegetarian","Italian","Tomato","Mozzarella","Fresh","Quick","Basil"],
  basePortions: 2,
  ingredients: [
  {
    id: 'tomato',
    amount: '3'
  },
  {
    id: 'mozzarella',
    amount: '2 balls'
  },
  {
    id: 'basil',
    amount: '1 handful'
  },
  {
    id: 'olive_oil',
    amount: '2 tbsp'
  },
  {
    id: 'vinegar',
    amount: '1 tbsp'
  }
],
  content: {
    en: {
      title: "Caprese Salad",
      description: "Fresh Italian salad.",
      steps: [
  "Prepare tomatoes: Wash and dry 3 large, ripe tomatoes. Slice them into 1cm thick rounds. Use a sharp knife for clean cuts. Arrange slices on a serving plate, slightly overlapping.",
  "Prepare mozzarella: Drain 2 balls of fresh mozzarella. Slice into rounds of similar thickness to the tomatoes (about 1cm). If using a large ball, cut it in half first, then slice.",
  "Layer salad: Place a slice of mozzarella on top of each tomato slice, alternating and creating layers. You can also arrange them in a circular pattern on a large platter.",
  "Add basil: Wash and dry a handful of fresh basil leaves. Tear larger leaves in half. Scatter basil leaves over the tomatoes and mozzarella, tucking some between layers.",
  "Dress: Drizzle 2 tbsp good quality olive oil evenly over the salad. Then drizzle 1 tbsp balsamic vinegar (or regular vinegar). Season generously with salt and freshly ground black pepper.",
  "Serve: Let the salad sit for 5-10 minutes at room temperature to allow flavors to meld. Serve immediately as a starter or side dish. Best enjoyed fresh - don't refrigerate for too long."
]
    },
    de: {
      title: "Caprese Salat",
      description: "Tomate-Mozzarella Salat.",
      steps: [
  "Tomaten vorbereiten: 3 große, reife Tomaten waschen und trocknen. In 1cm dicke Scheiben schneiden. Ein scharfes Messer für saubere Schnitte verwenden. Scheiben auf einem Servierteller anordnen, leicht überlappend.",
  "Mozzarella vorbereiten: 2 Kugeln frischen Mozzarella abtropfen lassen. In Scheiben ähnlicher Dicke wie die Tomaten schneiden (ca. 1cm). Wenn eine große Kugel verwendet wird, zuerst halbieren, dann scheiben.",
  "Salat schichten: Eine Scheibe Mozzarella auf jede Tomatenscheibe legen, abwechselnd und Schichten bildend. Sie können sie auch kreisförmig auf einer großen Platte anordnen.",
  "Basilikum hinzufügen: Eine Handvoll frischer Basilikumblätter waschen und trocknen. Größere Blätter in der Hälfte zerreißen. Basilikumblätter über die Tomaten und Mozzarella streuen, einige zwischen die Schichten stecken.",
  "Anrichten: 2 EL gutes Olivenöl gleichmäßig über den Salat träufeln. Dann 1 EL Balsamico-Essig (oder normalen Essig) träufeln. Großzügig mit Salz und frisch gemahlenem schwarzem Pfeffer würzen.",
  "Servieren: Den Salat 5-10 Minuten bei Raumtemperatur stehen lassen, damit sich die Aromen verbinden. Sofort als Vorspeise oder Beilage servieren. Am besten frisch genießen - nicht zu lange kühlen."
]
    }
  }
};
