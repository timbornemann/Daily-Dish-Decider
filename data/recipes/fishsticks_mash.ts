import { RecipeDefinition } from '../types';

export const FISHSTICKS_MASH: RecipeDefinition = {
  id: 'local-fishsticks-mash',
  prepTime: '30 mins',
  tags: ["Dinner","Family","Easy","Fish","Potato","Peas","Simple","Comfort Food"],
  basePortions: 4,
  ingredients: [
  {
    id: 'fish_sticks',
    amount: '10'
  },
  {
    id: 'potato',
    amount: '800g'
  },
  {
    id: 'butter',
    amount: '40g'
  },
  {
    id: 'milk',
    amount: '150ml'
  },
  {
    id: 'frozen_peas',
    amount: '150g'
  }
],
  content: {
    en: {
      title: "Fish Sticks & Mash",
      description: "Kid-friendly combo.",
      steps: [
  "Prepare potatoes: Peel 800g potatoes and cut into 2-3cm chunks. Place in a large pot and cover with cold, salted water. Bring to a boil and cook for 15-20 minutes until very tender when pierced with a fork.",
  "Cook fish sticks: While potatoes cook, heat oven to 200°C/390°F (or follow package directions). Arrange 10 fish sticks on a baking sheet. Bake for 12-15 minutes, flipping halfway, until golden and crispy. Alternatively, pan-fry according to package directions.",
  "Drain potatoes: When potatoes are tender, drain well and return to the pot. Let steam for 1 minute to remove excess moisture - this makes fluffier mash.",
  "Mash potatoes: Add 40g butter and 150ml warm milk to the potatoes. Mash with a potato masher or fork until smooth and creamy. Don't overmix or they'll become gluey. Add more milk if needed for desired consistency.",
  "Season mash: Add 1/2 tsp salt, 1/4 tsp black pepper, and a pinch of nutmeg. Stir gently to combine. Taste and adjust seasoning. The mash should be smooth, creamy, and well-seasoned.",
  "Prepare peas: If serving with peas, cook 150g frozen peas according to package directions (usually 3-4 minutes in boiling water) until tender. Drain and season with butter and salt.",
  "Serve: Plate mashed potatoes, top with fish sticks, and serve with peas or a side salad. The fish should be crispy, the mash should be creamy, and everything should be hot. A classic comfort meal!"
]
    },
    de: {
      title: "Fischstäbchen & Kartoffelpüree",
      description: "Kinderfreundlich und schnell.",
      steps: [
  "Kartoffeln vorbereiten: 800g Kartoffeln schälen und in 2-3cm große Stücke schneiden. In einen großen Topf geben und mit kaltem, gesalzenem Wasser bedecken. Zum Kochen bringen und 15-20 Minuten kochen, bis sie sehr zart sind, wenn sie mit einer Gabel durchstochen werden.",
  "Fischstäbchen kochen: Während die Kartoffeln kochen, Ofen auf 200°C vorheizen (oder Packungsanleitung befolgen). 10 Fischstäbchen auf ein Backblech legen. 12-15 Minuten backen, nach der Hälfte wenden, bis goldbraun und knusprig. Alternativ nach Packungsanleitung in der Pfanne braten.",
  "Kartoffeln abgießen: Wenn die Kartoffeln zart sind, gut abgießen und zurück in den Topf geben. 1 Minute dämpfen lassen, um überschüssige Feuchtigkeit zu entfernen - dies macht fluffigeres Püree.",
  "Kartoffeln stampfen: 40g Butter und 150ml warme Milch zu den Kartoffeln geben. Mit einem Kartoffelstampfer oder einer Gabel stampfen, bis glatt und cremig. Nicht übermischen, sonst werden sie klebrig. Bei Bedarf mehr Milch für die gewünschte Konsistenz hinzufügen.",
  "Püree würzen: 1/2 TL Salz, 1/4 TL schwarzen Pfeffer und eine Prise Muskat hinzufügen. Sanft umrühren, um zu vermischen. Abschmecken und nachwürzen. Das Püree sollte glatt, cremig und gut gewürzt sein.",
  "Erbsen vorbereiten: Wenn Sie mit Erbsen servieren, 150g gefrorene Erbsen nach Packungsanleitung kochen (meist 3-4 Minuten in kochendem Wasser), bis zart. Abgießen und mit Butter und Salz würzen.",
  "Servieren: Kartoffelpüree auf Teller geben, mit Fischstäbchen toppen und mit Erbsen oder Beilagensalat servieren. Der Fisch sollte knusprig sein, das Püree sollte cremig sein, und alles sollte heiß sein. Ein klassisches Komfortgericht!"
]
    }
  }
};
