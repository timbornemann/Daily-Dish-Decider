import { RecipeDefinition } from '../../../../types';

export const TIRAMISU: RecipeDefinition = {
  id: 'local-tiramisu',
  prepTime: '30 mins',
  tags: ["Dessert","Italian","Sweet","Coffee","Cheese","Chocolate","No Bake","Creamy"],
  basePortions: 6,
  ingredients: [
  {
    id: 'coffee',
    amount: '1 cup'
  },
  {
    id: 'mascarpone',
    amount: '500g'
  },
  {
    id: 'sugar',
    amount: '100g'
  },
  {
    id: 'ladyfingers',
    amount: '200g'
  },
  {
    id: 'cocoa_powder',
    amount: '2 tbsp'
  }
],
  content: {
    en: {
      title: "Tiramisu",
      description: "Coffee flavored dessert.",
      steps: [
  "Prepare coffee: Brew 1 cup of strong coffee (espresso is traditional). Let it cool completely to room temperature. You can add 1-2 tbsp sugar if you like it sweeter. Set aside.",
  "Prepare mascarpone: In a large bowl, whisk 500g mascarpone cheese with 100g sugar until smooth and creamy. Don't overmix or it can become grainy. The mixture should be thick and smooth.",
  "Whip cream (optional): For extra lightness, you can fold in 200ml whipped cream. Whip cream separately until stiff peaks form, then gently fold into mascarpone mixture.",
  "Layer bottom: Dip 200g ladyfinger cookies (savoiardi) quickly into the cooled coffee - just a quick dip (1-2 seconds) on each side. Don't soak them or they'll fall apart. Arrange a single layer in the bottom of a 20x30cm dish.",
  "Add cream layer: Spread half of the mascarpone mixture over the cookies in an even layer. Use a spatula to smooth it out.",
  "Repeat layers: Add another layer of coffee-dipped cookies, then the remaining mascarpone mixture. Smooth the top layer.",
  "Chill and serve: Cover with plastic wrap and refrigerate for at least 4 hours, preferably overnight. Before serving, dust the top generously with 2 tbsp cocoa powder using a fine sieve. Cut into squares and serve cold."
]
    },
    de: {
      title: "Tiramisu",
      description: "Dessert mit Kaffee.",
      steps: [
  "Kaffee zubereiten: 1 Tasse starken Kaffee (Espresso ist traditionell) brühen. Vollständig auf Raumtemperatur abkühlen lassen. Sie können 1-2 EL Zucker hinzufügen, wenn Sie es süßer mögen. Beiseite stellen.",
  "Mascarpone vorbereiten: In einer großen Schüssel 500g Mascarpone-Käse mit 100g Zucker verquirlen, bis glatt und cremig. Nicht übermischen, sonst kann es körnig werden. Die Mischung sollte dick und glatt sein.",
  "Sahne schlagen (optional): Für zusätzliche Leichtigkeit können Sie 200ml geschlagene Sahne unterheben. Sahne separat schlagen, bis steife Spitzen entstehen, dann sanft in die Mascarpone-Mischung unterheben.",
  "Untere Schicht: 200g Löffelbiskuits (Savoiardi) schnell in den abgekühlten Kaffee tauchen - nur einen kurzen Tauchgang (1-2 Sekunden) auf jeder Seite. Nicht einweichen, sonst fallen sie auseinander. Eine einzelne Schicht in den Boden einer 20x30cm Form anordnen.",
  "Cremeschicht hinzufügen: Die Hälfte der Mascarpone-Mischung gleichmäßig über die Kekse verteilen. Mit einem Spatel glatt streichen.",
  "Schichten wiederholen: Eine weitere Schicht kaffeegetränkter Kekse hinzufügen, dann die restliche Mascarpone-Mischung. Die obere Schicht glatt streichen.",
  "Kühlen und servieren: Mit Frischhaltefolie abdecken und mindestens 4 Stunden, vorzugsweise über Nacht, kühlen. Vor dem Servieren die Oberseite großzügig mit 2 EL Kakaopulver über ein feines Sieb bestäuben. In Quadrate schneiden und kalt servieren."
]
    }
  }
};
