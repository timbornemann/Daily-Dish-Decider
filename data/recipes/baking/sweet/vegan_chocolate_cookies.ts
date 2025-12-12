import { RecipeDefinition } from '../../../../types';

export const VEGAN_CHOCOLATE_COOKIES: RecipeDefinition = {
  id: 'local-vegan-chocolate-cookies',
  prepTime: '25 mins',
  tags: ["Baking", "Dessert", "Cookies", "Chocolate", "Sweet", "Vegan", "Vegetarian"],
  basePortions: 18,
  ingredients: [
    { id: 'flour', amount: '200g' },
    { id: 'sugar', amount: '90g' },
    { id: 'vegan_butter', amount: '125g' },
    { id: 'vanilla_sugar', amount: '8g' },
    { id: 'baking_powder', amount: '5g' },
    { id: 'apple_sauce', amount: '2 tbsp' },
    { id: 'chocolate_chips', amount: '150g' },
    { id: 'salt', amount: '1 pinch' }
  ],
  content: {
    en: {
      title: "Vegan Soft Chocolate Chip Cookies",
      description: "Soft, chewy, and completely vegan chocolate chip cookies.",
      steps: [
        "Mix Dough: In a large bowl, mix 200g flour, 90g sugar, 125g vegan butter, pinch of salt, 8g vanilla sugar, 5g baking powder, and 2 tbsp apple sauce. Fold in 150g chocolate chips.",
        "Form Balls: Preheat oven to 180°C (350°F). Form 18 balls (approx 40g each) from the dough and place on baking sheets with space between them.",
        "Bake: Bake for 12 mins. They should still be very soft when taken out.",
        "Cool: Let cool on the tray for 10 mins before moving."
      ]
    },
    de: {
      title: "Vegane weiche Schokocookies",
      description: "Weiche, saftige und komplett vegane Schokocookies.",
      steps: [
        "Teig mischen: In einer großen Schüssel 200g Mehl, 90g Zucker, 125g vegane Butter, Prise Salz, 8g Vanillezucker, 5g Backpulver und 2 EL Apfelmus vermengen. 150g Schokodrops untermischen.",
        "Formen: Ofen auf 180°C vorheizen. 18 Kugeln (ca. 40g) formen und mit Abstand auf Bleche verteilen.",
        "Backen: 12 Min backen. Sie sollten noch sehr weich sein, wenn sie aus dem Ofen kommen.",
        "Abkühlen: 10 Min auf dem Blech lassen, dann vorsichtig herunternehmen."
      ]
    }
  }
};
