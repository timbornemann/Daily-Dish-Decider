import { RecipeDefinition } from '../../../types';

export const LASAGNE: RecipeDefinition = {
  id: 'local-lasagne',
  prepTime: '1 hr 15 mins',
  tags: ["Dinner","Italian","Family","Pasta","Beef","Baking","Cheese","Tomato","Comfort Food"],
  basePortions: 6,
  ingredients: [
  {
    id: 'ground_beef',
    amount: '500g'
  },
  {
    id: 'pasta',
    amount: '12 sheets'
  },
  {
    id: 'canned_tomato',
    amount: '2 cans'
  },
  {
    id: 'milk',
    amount: '500ml'
  },
  {
    id: 'flour',
    amount: '50g'
  },
  {
    id: 'cheese',
    amount: '200g'
  }
],
  content: {
    en: {
      title: "Classic Lasagne",
      description: "Layered pasta bake.",
      steps: [
  "Make meat sauce: Heat 2 tbsp oil in a large pan. Add 500g ground beef and cook for 5-6 minutes until browned. Add 1 diced onion and 2 minced garlic cloves, cook for 3 minutes. Add 2 cans crushed tomatoes, 2 tbsp tomato paste, salt, pepper, and herbs. Simmer for 20 minutes until thickened.",
  "Make white sauce (Béchamel): Melt 50g butter in a saucepan over medium heat. Whisk in 50g flour and cook for 1 minute. Gradually whisk in 500ml warm milk, a little at a time, until smooth. Cook for 5 minutes until thickened, stirring constantly. Season with salt, pepper, and nutmeg.",
  "Prepare pasta: If using no-boil lasagne sheets, have them ready. If using regular pasta, cook according to package until al dente, then drain and lay flat on oiled baking sheets to prevent sticking.",
  "Preheat oven: Preheat oven to 180°C/355°F. Grease a 20x30cm baking dish with butter or oil.",
  "Layer lasagne: Spread a thin layer of meat sauce on the bottom. Add a layer of pasta sheets (overlapping slightly). Spread 1/3 of remaining meat sauce, then 1/3 of white sauce, then 1/3 of 200g grated cheese. Repeat layers 2 more times, ending with cheese on top.",
  "Bake: Cover with foil and bake for 30 minutes. Remove foil and bake for another 15-20 minutes until top is golden brown and bubbly. Let rest for 10 minutes before cutting.",
  "Serve: Cut into portions and serve hot. The lasagne should be set and hold its shape when cut. Serve with a side salad and garlic bread."
]
    },
    de: {
      title: "Klassische Lasagne",
      description: "Geschichteter Auflauf.",
      steps: [
  "Hackfleischsauce kochen: 2 EL Öl in einer großen Pfanne erhitzen. 500g Hackfleisch hinzufügen und 5-6 Minuten braten, bis es gebräunt ist. 1 gewürfelte Zwiebel und 2 gehackte Knoblauchzehen hinzufügen, 3 Minuten kochen. 2 Dosen zerdrückte Tomaten, 2 EL Tomatenmark, Salz, Pfeffer und Kräuter hinzufügen. 20 Minuten köcheln lassen, bis eingedickt.",
  "Weiße Sauce (Béchamel) herstellen: 50g Butter in einem Topf bei mittlerer Hitze schmelzen. 50g Mehl einrühren und 1 Minute kochen. Nach und nach 500ml warme Milch einrühren, ein wenig auf einmal, bis glatt. 5 Minuten kochen, bis eingedickt, ständig rühren. Mit Salz, Pfeffer und Muskat würzen.",
  "Pasta vorbereiten: Wenn Sie vorgekochte Lasagneplatten verwenden, bereithalten. Wenn Sie normale Pasta verwenden, nach Packungsanleitung bis al dente kochen, dann abgießen und flach auf geölten Backblechen auslegen, um Anhaften zu verhindern.",
  "Ofen vorheizen: Ofen auf 180°C vorheizen. Eine 20x30cm Auflaufform mit Butter oder Öl einfetten.",
  "Lasagne schichten: Eine dünne Schicht Hackfleischsauce auf den Boden geben. Eine Schicht Pastaplatten hinzufügen (leicht überlappend). 1/3 der restlichen Hackfleischsauce, dann 1/3 der weißen Sauce, dann 1/3 von 200g geriebenem Käse verteilen. Schichten 2 weitere Male wiederholen, mit Käse oben abschließen.",
  "Backen: Mit Folie abdecken und 30 Minuten backen. Folie entfernen und weitere 15-20 Minuten backen, bis die Oberseite goldbraun und blubbernd ist. 10 Minuten ruhen lassen, bevor Sie schneiden.",
  "Servieren: In Portionen schneiden und heiß servieren. Die Lasagne sollte fest sein und ihre Form beim Schneiden halten. Mit Beilagensalat und Knoblauchbrot servieren."
]
    }
  }
};
