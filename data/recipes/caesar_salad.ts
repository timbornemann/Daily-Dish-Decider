import { RecipeDefinition } from '../../types';

export const CAESAR_SALAD: RecipeDefinition = {
  id: 'local-caesar-salad',
  prepTime: '20 mins',
  tags: ["Lunch","Salad","Healthy","Chicken","Lettuce","Bread","Parmesan","Creamy"],
  basePortions: 2,
  ingredients: [
  {
    id: 'lettuce',
    amount: '1 head'
  },
  {
    id: 'chicken_breast',
    amount: '2'
  },
  {
    id: 'bread',
    amount: '2 slices (Croutons)'
  },
  {
    id: 'parmesan',
    amount: '50g'
  },
  {
    id: 'mayo',
    amount: '2 tbsp'
  }
],
  content: {
    en: {
      title: "Caesar Salad",
      description: "Creamy lettuce salad.",
      steps: [
  "Prepare lettuce: Wash and thoroughly dry 1 head of romaine lettuce. Tear or cut into bite-sized pieces. Place in a large bowl. The lettuce should be completely dry or the dressing won't stick properly.",
  "Cook chicken: Season 2 chicken breasts with salt and pepper. Heat 1 tbsp oil in a pan over medium-high heat. Cook chicken for 6-7 minutes per side until cooked through (internal temperature 75°C/165°F). Let rest, then slice into strips.",
  "Make croutons: Cut 2 slices of bread into 2cm cubes. Toss with 1 tbsp olive oil, salt, and pepper. Bake at 180°C/355°F for 8-10 minutes until golden and crispy, or pan-fry for 3-4 minutes.",
  "Make dressing: In a small bowl, whisk together 2 tbsp mayo, 1 tbsp lemon juice, 1 minced garlic clove, 2 tbsp grated parmesan, and 2 tbsp olive oil. Add salt and pepper to taste. Thin with a bit of water if needed.",
  "Toss salad: Pour dressing over lettuce. Add 50g grated parmesan. Toss gently with tongs until lettuce is evenly coated. Don't overdress - you want it lightly coated, not soggy.",
  "Add toppings: Add croutons and sliced chicken to the salad. Toss once more gently. The croutons should stay crispy.",
  "Serve: Serve immediately in individual bowls or on plates. The salad should be crisp, well-dressed, and the chicken should be warm. Best eaten right away before the lettuce wilts."
]
    },
    de: {
      title: "Caesar Salad",
      description: "Salat mit cremigem Dressing.",
      steps: [
  "Salat vorbereiten: 1 Kopf Romana-Salat waschen und gründlich trocknen. In mundgerechte Stücke reißen oder schneiden. In eine große Schüssel geben. Der Salat sollte vollständig trocken sein, sonst haftet das Dressing nicht richtig.",
  "Hähnchen braten: 2 Hähnchenbrüste mit Salz und Pfeffer würzen. 1 EL Öl in einer Pfanne bei mittlerer bis hoher Hitze erhitzen. Hähnchen 6-7 Minuten pro Seite braten, bis durchgegart (Innentemperatur 75°C). Ruhen lassen, dann in Streifen schneiden.",
  "Croutons herstellen: 2 Scheiben Brot in 2cm große Würfel schneiden. Mit 1 EL Olivenöl, Salz und Pfeffer mischen. Im Ofen bei 180°C 8-10 Minuten backen, bis goldbraun und knusprig, oder in der Pfanne 3-4 Minuten braten.",
  "Dressing herstellen: In einer kleinen Schüssel 2 EL Mayo, 1 EL Zitronensaft, 1 gehackte Knoblauchzehe, 2 EL geriebenen Parmesan und 2 EL Olivenöl verquirlen. Mit Salz und Pfeffer nach Geschmack würzen. Bei Bedarf mit etwas Wasser verdünnen.",
  "Salat mischen: Dressing über den Salat gießen. 50g geriebenen Parmesan hinzufügen. Sanft mit einer Zange schwenken, bis der Salat gleichmäßig bedeckt ist. Nicht übermischen - Sie möchten es leicht bedeckt, nicht matschig.",
  "Toppings hinzufügen: Croutons und geschnittenes Hähnchen zum Salat geben. Einmal mehr sanft schwenken. Die Croutons sollten knusprig bleiben.",
  "Servieren: Sofort in einzelnen Schalen oder auf Tellern servieren. Der Salat sollte knusprig, gut angemacht sein, und das Hähnchen sollte warm sein. Am besten sofort essen, bevor der Salat welkt."
]
    }
  }
};
