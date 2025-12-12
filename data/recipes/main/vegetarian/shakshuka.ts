import { RecipeDefinition } from '../../../../types';

export const SHAKSHUKA: RecipeDefinition = {
  id: 'local-shakshuka',
  prepTime: '25 mins',
  tags: ["Breakfast","Middle Eastern","Vegetarian","Egg","Tomato","Spicy","One Pot","Bread"],
  basePortions: 2,
  ingredients: [
  {
    id: 'egg',
    amount: '4'
  },
  {
    id: 'canned_tomato',
    amount: '1 can'
  },
  {
    id: 'pepper',
    amount: '1'
  },
  {
    id: 'onion',
    amount: '1'
  },
  {
    id: 'bread',
    amount: 'for serving'
  }
],
  content: {
    en: {
      title: "Shakshuka",
      description: "Eggs poached in tomato sauce.",
      steps: [
  "Prepare vegetables: Dice 1 large onion and 1 bell pepper. Mince 2-3 cloves of garlic. Open 1 can of tomatoes (crushed or diced). Have 4 eggs ready.",
  "Make tomato sauce: Heat 2 tbsp olive oil in a large skillet over medium heat. Add diced onion and pepper, cook for 5-6 minutes until softened. Add minced garlic and 1 tbsp chili flakes, cook for 1 minute.",
  "Add tomatoes: Pour in the can of tomatoes with their juice. Add 1 tbsp tomato paste, salt, and pepper. Bring to a simmer, then reduce heat to low and cook for 10-15 minutes until sauce has thickened slightly.",
  "Create wells: Using a spoon, make 4 indentations (wells) in the sauce. Space them evenly around the pan. The sauce should be thick enough to hold the shape.",
  "Add eggs: Crack one egg into each well. Be careful not to break the yolks. Season each egg with a pinch of salt and pepper.",
  "Cook eggs: Cover the pan with a lid and cook over low heat for 5-8 minutes until egg whites are set but yolks are still runny. Check after 5 minutes - you want the whites cooked but yolks soft.",
  "Serve: Remove from heat. Serve directly from the pan (it's beautiful!) or transfer to plates. Serve immediately with crusty bread for dipping. The eggs should be perfectly poached in the spicy tomato sauce."
]
    },
    de: {
      title: "Shakshuka",
      description: "Eier in Tomatensauce.",
      steps: [
  "Gemüse vorbereiten: 1 große Zwiebel und 1 Paprika würfeln. 2-3 Knoblauchzehen hacken. 1 Dose Tomaten (zerdrückt oder gewürfelt) öffnen. 4 Eier bereithalten.",
  "Tomatensauce kochen: 2 EL Olivenöl in einer großen Pfanne bei mittlerer Hitze erhitzen. Gewürfelte Zwiebel und Paprika hinzufügen und 5-6 Minuten kochen, bis sie weich sind. Gehackten Knoblauch und 1 EL Chiliflocken hinzufügen, 1 Minute kochen.",
  "Tomaten hinzufügen: Dose Tomaten mit ihrem Saft hineingießen. 1 EL Tomatenmark, Salz und Pfeffer hinzufügen. Zum Köcheln bringen, dann Hitze auf niedrig reduzieren und 10-15 Minuten kochen, bis die Sauce leicht eingedickt ist.",
  "Mulden erstellen: Mit einem Löffel 4 Vertiefungen (Mulden) in die Sauce machen. Gleichmäßig in der Pfanne verteilen. Die Sauce sollte dick genug sein, um die Form zu halten.",
  "Eier hinzufügen: Ein Ei in jede Mulde aufschlagen. Vorsichtig sein, die Dotter nicht zu brechen. Jedes Ei mit einer Prise Salz und Pfeffer würzen.",
  "Eier garen: Die Pfanne mit einem Deckel abdecken und bei niedriger Hitze 5-8 Minuten kochen, bis die Eierweiße fest sind, aber die Dotter noch flüssig sind. Nach 5 Minuten prüfen - Sie möchten, dass die Weißen gar, aber die Dotter weich sind.",
  "Servieren: Vom Herd nehmen. Direkt aus der Pfanne servieren (es ist schön!) oder auf Teller übertragen. Sofort servieren mit knusprigem Brot zum Eintunken. Die Eier sollten perfekt in der würzigen Tomatensauce pochiert sein."
]
    }
  }
};
