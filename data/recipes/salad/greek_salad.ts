import { RecipeDefinition } from '../../../types';

export const GREEK_SALAD: RecipeDefinition = {
  id: 'local-greek-salad',
  prepTime: '15 mins',
  tags: ["Lunch","Greek","Healthy","Vegetarian","Cucumber","Tomato","Feta","Fresh","Olive Oil"],
  basePortions: 2,
  ingredients: [
  {
    id: 'cucumber',
    amount: '1'
  },
  {
    id: 'tomato',
    amount: '4'
  },
  {
    id: 'onion',
    amount: '1'
  },
  {
    id: 'cheese',
    amount: '200g (Feta)'
  },
  {
    id: 'olive_oil',
    amount: '3 tbsp'
  },
  {
    id: 'oregano',
    amount: '1 tsp'
  }
],
  content: {
    en: {
      title: "Greek Salad",
      description: "Fresh feta salad.",
      steps: [
  "Prepare vegetables: Wash and dice 1 large cucumber into 2cm chunks. Dice 4 large tomatoes into similar-sized chunks. Thinly slice 1 red onion. Have 200g feta cheese ready.",
  "Combine vegetables: Place cucumber, tomatoes, and onion in a large bowl. Add 100g pitted Kalamata olives (whole or halved). Toss gently to combine.",
  "Make dressing: In a small bowl, whisk together 3 tbsp olive oil, 1 tbsp red wine vinegar, 1 tsp dried oregano, and salt and pepper to taste. The dressing should be well-emulsified.",
  "Dress salad: Pour dressing over the vegetables. Toss gently to coat everything evenly. Don't overmix or the vegetables will become mushy.",
  "Add feta: Crumble or cut 200g feta cheese into large chunks. Place on top of the salad. Don't mix it in completely - it's nice to have distinct pieces.",
  "Finish: Sprinkle with additional oregano and a drizzle of olive oil if desired. The salad should be fresh, crisp, and well-seasoned.",
  "Serve: Serve immediately at room temperature. The vegetables should be crisp and the feta should be creamy. Best enjoyed fresh - don't refrigerate for too long as tomatoes lose flavor when cold."
]
    },
    de: {
      title: "Griechischer Salat",
      description: "Frischer Salat mit Feta.",
      steps: [
  "Gemüse vorbereiten: 1 große Gurke waschen und in 2cm große Stücke schneiden. 4 große Tomaten in ähnlich große Stücke schneiden. 1 rote Zwiebel in dünne Scheiben schneiden. 200g Feta-Käse bereithalten.",
  "Gemüse kombinieren: Gurke, Tomaten und Zwiebel in eine große Schüssel geben. 100g entsteinte Kalamata-Oliven (ganz oder halbiert) hinzufügen. Sanft schwenken, um zu vermischen.",
  "Dressing herstellen: In einer kleinen Schüssel 3 EL Olivenöl, 1 EL Rotweinessig, 1 TL getrockneten Oregano und Salz und Pfeffer nach Geschmack verquirlen. Das Dressing sollte gut emulgiert sein.",
  "Salat anrichten: Dressing über das Gemüse gießen. Sanft schwenken, um alles gleichmäßig zu bedecken. Nicht übermischen, sonst wird das Gemüse matschig.",
  "Feta hinzufügen: 200g Feta-Käse zerbröseln oder in große Stücke schneiden. Auf den Salat legen. Nicht vollständig einmischen - es ist schön, deutliche Stücke zu haben.",
  "Fertigstellen: Mit zusätzlichem Oregano und einem Schuss Olivenöl nach Wunsch bestreuen. Der Salat sollte frisch, knusprig und gut gewürzt sein.",
  "Servieren: Sofort bei Raumtemperatur servieren. Das Gemüse sollte knusprig sein und der Feta sollte cremig sein. Am besten frisch genießen - nicht zu lange kühlen, da Tomaten an Geschmack verlieren, wenn sie kalt sind."
]
    }
  }
};
