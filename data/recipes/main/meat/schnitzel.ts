import { RecipeDefinition } from '../../../../types';

export const SCHNITZEL: RecipeDefinition = {
  id: 'local-schnitzel',
  prepTime: '30 mins',
  tags: ["Dinner","German","Meat","Pork","Fried","Breaded","Lemon","Classic"],
  basePortions: 4,
  ingredients: [
  {
    id: 'pork_chop',
    amount: '4'
  },
  {
    id: 'flour',
    amount: '100g'
  },
  {
    id: 'egg',
    amount: '2'
  },
  {
    id: 'bread',
    amount: '200g (Crumbs)'
  },
  {
    id: 'lemon',
    amount: '1'
  },
  {
    id: 'butter',
    amount: '100g'
  }
],
  content: {
    en: {
      title: "Wiener Schnitzel",
      description: "Crispy breaded cutlet.",
      steps: [
  "Prepare meat: Place 4 pork chops between two pieces of plastic wrap or parchment paper. Using a meat mallet or rolling pin, pound each chop until it's about 5mm thick. Be gentle but firm - the meat should be evenly thin.",
  "Set up breading station: Prepare three shallow dishes. Place 100g flour in the first dish, 2 beaten eggs in the second, and 200g breadcrumbs in the third. Season each with a pinch of salt.",
  "Bread the meat: Dredge each pounded cutlet first in flour (shake off excess), then dip in beaten egg (let excess drip off), and finally coat thoroughly in breadcrumbs, pressing gently to adhere. Place on a plate.",
  "Heat oil: Heat 100g butter (or a mix of butter and oil) in a large pan over medium-high heat (about 175°C/350°F). You need enough fat to come halfway up the schnitzel. The butter should sizzle when you add the meat.",
  "Fry first side: Carefully place breaded cutlets in the hot butter. Don't overcrowd - cook 2 at a time if needed. Fry for 3-4 minutes until golden brown and crispy. Don't move them until ready to flip.",
  "Flip and finish: Carefully flip each schnitzel using tongs or a spatula. Fry the second side for another 3-4 minutes until golden brown. The schnitzel should be crispy on the outside and cooked through.",
  "Drain and serve: Remove from pan and let drain on paper towels for 30 seconds. Serve immediately while hot and crispy, traditionally with lemon wedges, potato salad, or lingonberry jam."
]
    },
    de: {
      title: "Wiener Schnitzel",
      description: "Knusprig paniertes Schnitzel.",
      steps: [
  "Fleisch vorbereiten: 4 Schweinekoteletts zwischen zwei Lagen Frischhaltefolie oder Backpapier legen. Mit einem Fleischklopfer oder Nudelholz jedes Kotelett klopfen, bis es etwa 5mm dick ist. Sanft aber fest - das Fleisch sollte gleichmäßig dünn sein.",
  "Panierstation vorbereiten: Drei flache Schüsseln bereitstellen. 100g Mehl in die erste Schüssel geben, 2 verquirlte Eier in die zweite, und 200g Paniermehl in die dritte. Jede mit einer Prise Salz würzen.",
  "Fleisch panieren: Jedes geklopfte Schnitzel zuerst in Mehl wenden (Überschuss abschütteln), dann in verquirltes Ei tauchen (Überschuss abtropfen lassen), und schließlich gründlich in Paniermehl wenden, sanft andrücken, damit es haftet. Auf einen Teller legen.",
  "Öl erhitzen: 100g Butter (oder eine Mischung aus Butter und Öl) in einer großen Pfanne bei mittlerer bis hoher Hitze (ca. 175°C) erhitzen. Sie benötigen genug Fett, damit es halb so hoch wie das Schnitzel steht. Die Butter sollte zischen, wenn Sie das Fleisch hinzufügen.",
  "Erste Seite braten: Vorsichtig panierte Schnitzel in die heiße Butter legen. Nicht überfüllen - bei Bedarf 2 auf einmal braten. 3-4 Minuten braten, bis goldbraun und knusprig. Nicht bewegen, bis sie bereit zum Wenden sind.",
  "Wenden und fertigstellen: Vorsichtig jedes Schnitzel mit einer Zange oder einem Spatel wenden. Die zweite Seite weitere 3-4 Minuten braten, bis goldbraun. Das Schnitzel sollte außen knusprig und durchgegart sein.",
  "Abgießen und servieren: Aus der Pfanne nehmen und 30 Sekunden auf Küchenpapier abtropfen lassen. Sofort servieren, solange es heiß und knusprig ist, traditionell mit Zitronenspalten, Kartoffelsalat oder Preiselbeeren."
]
    }
  }
};
