import { RecipeDefinition } from '../types';

export const TOMATO_SOUP: RecipeDefinition = {
  id: 'local-tomato-soup',
  prepTime: '25 mins',
  tags: ["Lunch","Dinner","Soup","Vegetarian","Vegan","Tomato","Quick","Comfort Food","One Pot"],
  basePortions: 2,
  ingredients: [
  {
    id: 'canned_tomato',
    amount: '2 cans'
  },
  {
    id: 'onion',
    amount: '1'
  },
  {
    id: 'garlic',
    amount: '1 clove'
  },
  {
    id: 'olive_oil',
    amount: '2 tbsp'
  },
  {
    id: 'basil',
    amount: 'handful'
  }
],
  content: {
    en: {
      title: "Tomato Soup",
      description: "Simple and warming.",
      steps: [
  "Sauté: Dice 1 onion and 1 garlic clove. Sauté in olive oil until translucent.",
  "Simmer: Add 2 cans of tomatoes (800g) and some veggie broth. Simmer for 15 mins. Season with salt, pepper, and sugar.",
  "Blend: Blend soup until smooth.",
  "Serve: Serve with a dollop of cream or creme fraiche and basil."
]
    },
    de: {
      title: "Tomatensuppe",
      description: "Einfach und wärmend.",
      steps: [
  "Anbraten: 1 Zwiebel und 1 Knoblauchzehe würfeln und in Olivenöl glasig dünsten.",
  "Köcheln: 2 Dosen Tomaten (800g) und etwas Gemüsebrühe hinzugeben. 15 Min köcheln lassen. Mit Salz, Pfeffer und Zucker abschmecken.",
  "Pürieren: Suppe fein pürieren.",
  "Servieren: Mit einem Klecks Sahne oder Creme Fraiche und Basilikum servieren."
]
    }
  }
};
