import { RecipeDefinition } from '../../../../types';

export const SAUERBRATEN: RecipeDefinition = {
  id: 'local-sauerbraten',
  prepTime: '3 hrs (plus 12-24 hrs marinating)',
  tags: ["Dinner","German","Slow Cook","Beef","Vinegar","One Pot","Braised","Classic"],
  basePortions: 6,
  ingredients: [
  {
    id: 'steak',
    amount: '800g (roast)'
  },
  {
    id: 'vinegar',
    amount: '150ml'
  },
  {
    id: 'onion',
    amount: '1'
  },
  {
    id: 'carrot',
    amount: '1'
  },
  {
    id: 'beef_broth',
    amount: '500ml'
  }
],
  content: {
    en: {
      title: "Sauerbraten",
      description: "Slow-braised roast.",
      steps: [
  "Marinate meat: Place 800g beef roast in a large non-reactive bowl or zip-top bag. Mix 150ml vinegar, 1 sliced onion, 1 sliced carrot, 2 bay leaves, 5 peppercorns, and 2 cloves. Pour over meat. Cover and marinate in refrigerator for 12-24 hours, turning occasionally.",
  "Prepare for cooking: Remove meat from marinade and pat completely dry with paper towels. Reserve the marinade (you'll use it later). Season meat generously with salt and pepper on all sides.",
  "Brown meat: Heat 2 tbsp oil in a large Dutch oven or heavy pot over medium-high heat. Add meat and brown on all sides for 8-10 minutes total until deeply browned. This creates flavor. Remove meat and set aside.",
  "Deglaze: Add reserved marinade (strained) to the pot. Scrape up any browned bits from the bottom. Add 500ml beef broth. Bring to a boil, then reduce heat to low.",
  "Braise: Return meat to pot. Cover tightly and braise on low heat for 2-3 hours, turning occasionally, until meat is very tender and easily pulls apart. The liquid should bubble gently, not boil.",
  "Check doneness: After 2 hours, check if meat is tender by inserting a fork - it should go in easily. If not, continue cooking and check every 30 minutes. The meat should be fork-tender.",
  "Finish and serve: Remove meat and let rest for 10 minutes. Meanwhile, season the sauce with salt and pepper. Slice meat against the grain. Serve with sauce, traditionally with potato dumplings or boiled potatoes. The meat should be tender, flavorful, and the sauce should be rich and tangy."
]
    },
    de: {
      title: "Sauerbraten",
      description: "Sonntagsbraten mit Sauce.",
      steps: [
  "Fleisch marinieren: 800g Rinderbraten in eine große nicht-reaktive Schüssel oder einen Zip-Top-Beutel geben. 150ml Essig, 1 geschnittene Zwiebel, 1 geschnittene Karotte, 2 Lorbeerblätter, 5 Pfefferkörner und 2 Nelken mischen. Über das Fleisch gießen. Abdecken und 12-24 Stunden im Kühlschrank marinieren, gelegentlich wenden.",
  "Zum Kochen vorbereiten: Fleisch aus der Marinade nehmen und vollständig mit Küchenpapier trocken tupfen. Die Marinade zurückbehalten (Sie werden sie später verwenden). Fleisch großzügig auf allen Seiten mit Salz und Pfeffer würzen.",
  "Fleisch anbraten: 2 EL Öl in einem großen Dutch Oven oder schweren Topf bei mittlerer bis hoher Hitze erhitzen. Fleisch hinzufügen und auf allen Seiten 8-10 Minuten insgesamt anbraten, bis tief gebräunt. Dies schafft Geschmack. Fleisch entfernen und beiseite stellen.",
  "Abglühen: Zurückbehaltene Marinade (abgeseiht) zum Topf geben. Alle gebräunten Stücke vom Boden abkratzen. 500ml Rinderbrühe hinzufügen. Zum Kochen bringen, dann Hitze auf niedrig reduzieren.",
  "Schmoren: Fleisch zurück in den Topf geben. Fest abdecken und bei niedriger Hitze 2-3 Stunden schmoren, gelegentlich wenden, bis das Fleisch sehr zart ist und sich leicht auseinanderziehen lässt. Die Flüssigkeit sollte sanft blubbern, nicht kochen.",
  "Garheit prüfen: Nach 2 Stunden prüfen, ob das Fleisch zart ist, indem Sie eine Gabel einstechen - sie sollte leicht hineingehen. Wenn nicht, weiter kochen und alle 30 Minuten prüfen. Das Fleisch sollte gabelzart sein.",
  "Fertigstellen und servieren: Fleisch entfernen und 10 Minuten ruhen lassen. In der Zwischenzeit die Sauce mit Salz und Pfeffer würzen. Fleisch gegen die Faser schneiden. Mit Sauce servieren, traditionell mit Kartoffelklößen oder gekochten Kartoffeln. Das Fleisch sollte zart, geschmackvoll sein, und die Sauce sollte reich und würzig sein."
]
    }
  }
};
