import { RecipeDefinition } from '../types';

export const BRUSCHETTA: RecipeDefinition = {
  id: 'local-bruschetta',
  prepTime: '15 mins',
  tags: ["Snack","Italian","Appetizer","Bread","Tomato","Garlic","Basil","Quick","Fresh"],
  basePortions: 4,
  ingredients: [
  {
    id: 'bread',
    amount: '1 loaf'
  },
  {
    id: 'tomato',
    amount: '4'
  },
  {
    id: 'garlic',
    amount: '2 cloves'
  },
  {
    id: 'basil',
    amount: '1 handful'
  },
  {
    id: 'olive_oil',
    amount: '3 tbsp'
  }
],
  content: {
    en: {
      title: "Tomato Bruschetta",
      description: "Toasted bread with tomatoes.",
      steps: [
  "Prepare tomatoes: Wash and dice 4 large, ripe tomatoes. Remove seeds if desired (they can make it watery). Place diced tomatoes in a bowl. Add a pinch of salt and let sit for 10 minutes, then drain excess liquid.",
  "Make tomato mixture: To the tomatoes, add 2 minced garlic cloves, 1 handful of chopped fresh basil, 3 tbsp olive oil, and 1 tbsp balsamic vinegar. Mix gently. Season with salt and black pepper. Let marinate for 15-20 minutes at room temperature.",
  "Prepare bread: Cut 1 loaf of Italian or French bread into 1.5cm thick slices. You'll need about 8-10 slices. Use day-old bread if possible - it toasts better.",
  "Toast bread: Preheat a grill pan, griddle, or regular pan over medium-high heat. Brush bread slices with olive oil on both sides. Toast for 2-3 minutes per side until golden brown and crispy with grill marks if using a grill pan.",
  "Rub with garlic: While bread is still hot, rub one side of each slice with a cut clove of garlic. This infuses the bread with garlic flavor. Be gentle - you just want to transfer the flavor, not make it too strong.",
  "Top and serve: Spoon the tomato mixture generously onto each slice of toasted bread. Drizzle with a bit more olive oil if desired. Serve immediately while the bread is still warm and crispy."
]
    },
    de: {
      title: "Tomaten Bruschetta",
      description: "Geröstetes Brot mit Tomaten.",
      steps: [
  "Tomaten vorbereiten: 4 große, reife Tomaten waschen und würfeln. Kerne entfernen, falls gewünscht (sie können es wässrig machen). Gewürfelte Tomaten in eine Schüssel geben. Eine Prise Salz hinzufügen und 10 Minuten stehen lassen, dann überschüssige Flüssigkeit abgießen.",
  "Tomatengemisch herstellen: Zu den Tomaten 2 gehackte Knoblauchzehen, 1 Handvoll gehacktes frisches Basilikum, 3 EL Olivenöl und 1 EL Balsamico-Essig hinzufügen. Sanft mischen. Mit Salz und schwarzem Pfeffer würzen. 15-20 Minuten bei Raumtemperatur marinieren lassen.",
  "Brot vorbereiten: 1 Laib italienisches oder französisches Brot in 1,5cm dicke Scheiben schneiden. Sie benötigen etwa 8-10 Scheiben. Verwenden Sie nach Möglichkeit altes Brot - es röstet besser.",
  "Brot toasten: Eine Grillpfanne, Griddle oder normale Pfanne bei mittlerer bis hoher Hitze vorheizen. Brotscheiben auf beiden Seiten mit Olivenöl bestreichen. 2-3 Minuten pro Seite toasten, bis goldbraun und knusprig, mit Grillstreifen, wenn eine Grillpfanne verwendet wird.",
  "Mit Knoblauch einreiben: Während das Brot noch heiß ist, eine Seite jeder Scheibe mit einer angeschnittenen Knoblauchzehe einreiben. Dies verleiht dem Brot Knoblauchgeschmack. Sanft sein - Sie möchten nur den Geschmack übertragen, nicht zu stark machen.",
  "Toppen und servieren: Tomatengemisch großzügig auf jede Scheibe getoastetes Brot geben. Nach Wunsch mit etwas mehr Olivenöl beträufeln. Sofort servieren, solange das Brot noch warm und knusprig ist."
]
    }
  }
};
