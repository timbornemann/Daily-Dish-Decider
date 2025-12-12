import { RecipeDefinition } from '../../../types';

export const KAESESPAETZLE: RecipeDefinition = {
  id: 'local-kaesespaetzle',
  prepTime: '30 mins',
  tags: ["Dinner","German","Vegetarian","Pasta","Cheese","Onion","Creamy","Comfort Food"],
  basePortions: 4,
  ingredients: [
  {
    id: 'spaetzle',
    amount: '500g (Spaetzle)'
  },
  {
    id: 'cheese',
    amount: '250g'
  },
  {
    id: 'onion',
    amount: '3'
  },
  {
    id: 'butter',
    amount: '50g'
  }
],
  content: {
    en: {
      title: "Cheese Spaetzle",
      description: "German mac and cheese.",
      steps: [
  "Cook spaetzle: Bring a large pot of salted water to a boil. Add 500g fresh or frozen spaetzle and cook according to package directions (usually 2-3 minutes) until they float to the surface. Fresh spaetzle will float when done.",
  "Drain: Drain spaetzle well, reserving a small amount of cooking water. Don't rinse - the starch helps the cheese stick. Set aside.",
  "Prepare cheese: Grate 250g of your favorite melting cheese (Emmental, Gruyère, or a mix). Finely slice 3 onions for frying.",
  "Fry onions: Heat 2 tbsp butter in a large pan over medium heat. Add sliced onions and cook slowly for 10-15 minutes, stirring occasionally, until deep golden brown and caramelized. Remove half for topping, keep the rest in the pan.",
  "Layer spaetzle: Add drained spaetzle to the pan with onions. Add grated cheese in layers, mixing gently as you go. Add a splash of reserved pasta water to help create a creamy consistency.",
  "Melt cheese: Cook over low heat, stirring gently, for 2-3 minutes until cheese is melted and everything is well combined. The spaetzle should be creamy and cheesy.",
  "Serve: Transfer to serving dish and top with the reserved fried onions. Serve immediately while hot and gooey. Best enjoyed fresh from the pan."
]
    },
    de: {
      title: "Käsespätzle",
      description: "Der schwäbische Klassiker.",
      steps: [
  "Spätzle kochen: Einen großen Topf mit gesalzenem Wasser zum Kochen bringen. 500g frische oder gefrorene Spätzle hinzufügen und nach Packungsanleitung kochen (meist 2-3 Minuten), bis sie an die Oberfläche steigen. Frische Spätzle steigen auf, wenn sie fertig sind.",
  "Abgießen: Spätzle gut abgießen, dabei eine kleine Menge Kochwasser zurückbehalten. Nicht abspülen - die Stärke hilft dem Käse zu haften. Beiseite stellen.",
  "Käse vorbereiten: 250g Ihres Lieblings-Schmelzkäses reiben (Emmentaler, Gruyère oder eine Mischung). 3 Zwiebeln für das Braten fein in Scheiben schneiden.",
  "Zwiebeln braten: 2 EL Butter in einer großen Pfanne bei mittlerer Hitze erhitzen. Geschnittene Zwiebeln hinzufügen und langsam 10-15 Minuten braten, gelegentlich umrühren, bis sie tief goldbraun und karamellisiert sind. Die Hälfte für das Topping entfernen, den Rest in der Pfanne lassen.",
  "Spätzle schichten: Abgetropfte Spätzle zur Pfanne mit Zwiebeln geben. Geriebenen Käse in Schichten hinzufügen, dabei sanft mischen. Einen Schuss zurückbehaltenes Nudelwasser hinzufügen, um eine cremige Konsistenz zu erzeugen.",
  "Käse schmelzen: Bei niedriger Hitze 2-3 Minuten kochen, sanft rühren, bis der Käse geschmolzen ist und alles gut vermischt ist. Die Spätzle sollten cremig und käsig sein.",
  "Servieren: Auf eine Servierschüssel übertragen und mit den zurückbehaltenen gebratenen Zwiebeln toppen. Sofort servieren, solange sie heiß und klebrig sind. Am besten frisch aus der Pfanne genießen."
]
    }
  }
};
