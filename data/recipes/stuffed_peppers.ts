import { RecipeDefinition } from '../types';

export const STUFFED_PEPPERS: RecipeDefinition = {
  id: 'local-stuffed-peppers',
  prepTime: '1 hr 15 mins',
  tags: ["Dinner","Comfort Food","Baking","Pepper","Beef","Rice","Stuffed","Oven"],
  basePortions: 4,
  ingredients: [
  {
    id: 'pepper',
    amount: '4'
  },
  {
    id: 'ground_beef',
    amount: '400g'
  },
  {
    id: 'rice',
    amount: '200g (cooked)'
  },
  {
    id: 'onion',
    amount: '1'
  },
  {
    id: 'tomato_paste',
    amount: '2 tbsp'
  },
  {
    id: 'chicken_broth',
    amount: '300ml'
  }
],
  content: {
    en: {
      title: "Stuffed Peppers",
      description: "Baked rice-beef filling.",
      steps: [
  "Prepare peppers: Cut the tops off 4 bell peppers (any color). Remove seeds and white membranes from inside. The peppers should be hollow and ready to fill. Save the tops if you want to use them as lids (optional).",
  "Make filling: In a bowl, mix 400g ground beef, 200g cooked rice, 1 diced onion, 2 tbsp tomato paste, 1 tsp salt, 1/2 tsp black pepper, and any desired spices (paprika, oregano). Mix with your hands until well combined.",
  "Fill peppers: Stuff each pepper with the meat-rice mixture, packing it in firmly but not too tightly. Leave about 1cm space at the top. Place filled peppers upright in a baking dish that holds them snugly.",
  "Add liquid: Pour 300ml chicken or vegetable broth into the bottom of the baking dish (around the peppers, not inside them). This creates steam and keeps them moist. Cover tightly with foil.",
  "Bake: Preheat oven to 180°C/355°F. Bake covered for 35-40 minutes until peppers are tender and meat is cooked through (internal temperature 75°C/165°F).",
  "Uncover and brown: Remove foil. If desired, sprinkle tops with additional cheese. Bake uncovered for 5-10 more minutes until tops are slightly browned and any cheese is melted.",
  "Serve: Remove from oven and let rest for 5 minutes. The peppers should be tender, the filling should be cooked through, and the dish should be hot. Serve with the cooking liquid spooned over if desired."
]
    },
    de: {
      title: "Gefüllte Paprika",
      description: "Aus dem Ofen mit Reisfüllung.",
      steps: [
  "Paprika vorbereiten: Die Deckel von 4 Paprikaschoten (jede Farbe) abschneiden. Kerne und weiße Membranen von innen entfernen. Die Paprika sollten hohl und bereit zum Füllen sein. Die Deckel aufbewahren, wenn Sie sie als Deckel verwenden möchten (optional).",
  "Füllung herstellen: In einer Schüssel 400g Hackfleisch, 200g gekochten Reis, 1 gewürfelte Zwiebel, 2 EL Tomatenmark, 1 TL Salz, 1/2 TL schwarzen Pfeffer und alle gewünschten Gewürze (Paprika, Oregano) mischen. Mit den Händen mischen, bis gut vermischt.",
  "Paprika füllen: Jede Paprika mit der Fleisch-Reis-Mischung füllen, fest, aber nicht zu fest einpacken. Etwa 1cm Platz oben lassen. Gefüllte Paprika aufrecht in eine Auflaufform stellen, die sie fest hält.",
  "Flüssigkeit hinzufügen: 300ml Hühner- oder Gemüsebrühe in den Boden der Auflaufform gießen (um die Paprika herum, nicht hinein). Dies erzeugt Dampf und hält sie feucht. Fest mit Folie abdecken.",
  "Backen: Ofen auf 180°C vorheizen. Abgedeckt 35-40 Minuten backen, bis die Paprika zart sind und das Fleisch durchgegart ist (Innentemperatur 75°C).",
  "Abdecken und bräunen: Folie entfernen. Nach Wunsch Oberseiten mit zusätzlichem Käse bestreuen. Unbedeckt weitere 5-10 Minuten backen, bis die Oberseiten leicht gebräunt sind und der Käse geschmolzen ist.",
  "Servieren: Aus dem Ofen nehmen und 5 Minuten ruhen lassen. Die Paprika sollten zart sein, die Füllung sollte durchgegart sein, und das Gericht sollte heiß sein. Mit der Kochflüssigkeit servieren, falls gewünscht."
]
    }
  }
};
