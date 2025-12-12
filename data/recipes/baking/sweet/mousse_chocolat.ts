import { RecipeDefinition } from '../../../../types';

export const MOUSSE_CHOCOLAT: RecipeDefinition = {
  id: 'local-mousse-chocolat',
  prepTime: '20 mins (plus chilling)',
  tags: ["Dessert","French","Chocolate","Sweet","Indulgent","No Bake","Vegetarian"],
  basePortions: 4,
  ingredients: [
  {
    id: 'chocolate',
    amount: '200g (Dark)'
  },
  {
    id: 'egg',
    amount: '3'
  },
  {
    id: 'cream',
    amount: '200ml'
  },
  {
    id: 'sugar',
    amount: '1 tbsp'
  }
],
  content: {
    en: {
      title: "Chocolate Mousse",
      description: "Airy chocolate dessert.",
      steps: [
  "Melt: Melt 200g dark chocolate in a water bath. Let cool slightly.",
  "Separate Eggs: Separate 3 eggs. Whisk yolks into the melted chocolate. Whip whites until stiff. Whip 200ml cream until stiff.",
  "Fold: Gently fold cream, then egg whites into the chocolate mixture (do not overmix, keep it airy!).",
  "Chill: Spoon into glasses and refrigerate for at least 2 hours."
]
    },
    de: {
      title: "Mousse au Chocolat",
      description: "Luftiges Schokoladendessert.",
      steps: [
  "Schmelzen: 200g Zartbitterschokolade im Wasserbad schmelzen. Etwas abkühlen lassen.",
  "Eier trennen: 3 Eier trennen. Eigelb mit der geschmolzenen Schokolade verrühren. Eiweiß steif schlagen. Sahne (200ml) separat steif schlagen.",
  "Unterheben: Vorsichtig erst die Sahne, dann den Eischnee unter die Schokomasse heben (nicht rühren, damit Luft bleibt!).",
  "Kühlen: In Gläser füllen und mindestens 2 Stunden kalt stellen."
]
    }
  }
};
