import { RecipeDefinition } from '../../../../types';

export const BEEF_BROCCOLI: RecipeDefinition = {
  id: 'local-beef-broccoli',
  prepTime: '20 mins',
  tags: ["Dinner","Asian","High Protein","Beef","Broccoli","Stir Fry","Soy Sauce","Ginger"],
  basePortions: 2,
  ingredients: [
  {
    id: 'steak',
    amount: '400g'
  },
  {
    id: 'broccoli',
    amount: '1 head'
  },
  {
    id: 'soy_sauce',
    amount: '3 tbsp'
  },
  {
    id: 'ginger',
    amount: '1 tbsp'
  },
  {
    id: 'garlic',
    amount: '2 cloves'
  },
  {
    id: 'sugar',
    amount: '1 tbsp'
  }
],
  content: {
    en: {
      title: "Beef and Broccoli",
      description: "Stir fry classic.",
      steps: [
  "Prepare beef: Slice 400g steak (sirloin or flank) into thin strips (about 5mm thick) against the grain. This makes the meat tender. Marinate with 1 tbsp soy sauce and 1 tsp cornstarch for 15 minutes.",
  "Prepare broccoli: Cut 1 head of broccoli into florets. Blanch in boiling salted water for 2 minutes, then immediately transfer to ice water to stop cooking. Drain well. This keeps it crisp and bright green.",
  "Make sauce: Mix 3 tbsp soy sauce, 1 tbsp sugar, 1 tbsp minced ginger, 2 minced garlic cloves, 1 tbsp cornstarch, and 100ml water in a small bowl. Stir until smooth.",
  "Stir fry beef: Heat 2 tbsp oil in a wok or large pan over very high heat. Add beef strips and stir-fry for 2-3 minutes until browned but still slightly pink inside. Remove and set aside.",
  "Cook vegetables: Add 1 more tbsp oil to the pan. Add blanched broccoli and stir-fry for 2 minutes. Add 1 diced carrot if desired.",
  "Combine: Return beef to the pan. Pour in the sauce mixture. Stir-fry for 1-2 minutes until sauce thickens and coats everything. The beef should be cooked through and the sauce should be glossy.",
  "Serve: Serve immediately over steamed rice while hot. The broccoli should be crisp-tender and the beef should be tender and well-coated with sauce."
]
    },
    de: {
      title: "Rindfleisch mit Brokkoli",
      description: "Wok Klassiker.",
      steps: [
  "Rindfleisch vorbereiten: 400g Steak (Hüfte oder Flanke) gegen die Faser in dünne Streifen (ca. 5mm dick) schneiden. Dies macht das Fleisch zart. Mit 1 EL Sojasauce und 1 TL Maisstärke 15 Minuten marinieren.",
  "Brokkoli vorbereiten: 1 Kopf Brokkoli in Röschen schneiden. 2 Minuten in kochendem gesalzenem Wasser blanchieren, dann sofort in Eiswasser geben, um das Garen zu stoppen. Gut abgießen. Dies hält ihn knusprig und hellgrün.",
  "Sauce herstellen: 3 EL Sojasauce, 1 EL Zucker, 1 EL gehackten Ingwer, 2 gehackte Knoblauchzehen, 1 EL Maisstärke und 100ml Wasser in einer kleinen Schüssel mischen. Umrühren, bis glatt.",
  "Rindfleisch anbraten: 2 EL Öl in einem Wok oder einer großen Pfanne bei sehr hoher Hitze erhitzen. Rindfleischstreifen hinzufügen und 2-3 Minuten anbraten, bis gebräunt, aber innen noch leicht rosa. Entfernen und beiseite stellen.",
  "Gemüse kochen: 1 weiteren EL Öl zur Pfanne geben. Blanchierten Brokkoli hinzufügen und 2 Minuten anbraten. Bei Bedarf 1 gewürfelte Karotte hinzufügen.",
  "Kombinieren: Rindfleisch zurück in die Pfanne geben. Sauce-Mischung hineingießen. 1-2 Minuten anbraten, bis die Sauce eindickt und alles bedeckt. Das Rindfleisch sollte durchgegart sein und die Sauce sollte glänzend sein.",
  "Servieren: Sofort über gedämpftem Reis servieren, solange heiß. Der Brokkoli sollte knusprig-zart sein und das Rindfleisch sollte zart und gut mit Sauce bedeckt sein."
]
    }
  }
};
