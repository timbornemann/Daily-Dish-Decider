import { RecipeDefinition } from '../../types';

export const SUMMER_ROLLS: RecipeDefinition = {
  id: 'local-summer-rolls',
  prepTime: '35 mins',
  tags: ["Lunch","Asian","Healthy","Shrimp","Vegetable","Fresh","Rice Paper","Peanut"],
  basePortions: 4,
  ingredients: [
  {
    id: 'tortilla',
    amount: '8 (Rice Paper)'
  },
  {
    id: 'shrimp',
    amount: '200g'
  },
  {
    id: 'lettuce',
    amount: '1 head'
  },
  {
    id: 'cucumber',
    amount: '1'
  },
  {
    id: 'carrot',
    amount: '1'
  },
  {
    id: 'peanut_butter',
    amount: '2 tbsp'
  }
],
  content: {
    en: {
      title: "Fresh Summer Rolls",
      description: "Rice paper rolls.",
      steps: [
  "Prepare fillings: Cook 200g shrimp (peel and devein if needed). Slice into halves lengthwise. Julienne 1 cucumber and 1 carrot into thin matchsticks. Wash and dry 1 head of lettuce. Have 200g cooked rice noodles ready (or vermicelli).",
  "Soak rice paper: Fill a large shallow dish or plate with warm water (not hot - about 40°C/100°F). Take one rice paper wrapper and submerge it completely for 10-15 seconds until it becomes soft and pliable. Don't over-soak or it will tear.",
  "Fill wrapper: Place softened wrapper on a clean, damp kitchen towel. In the center, place a lettuce leaf, then a small handful of noodles, 2-3 shrimp halves, and some cucumber and carrot matchsticks. Don't overfill.",
  "Roll tightly: Fold the bottom edge over the filling, then fold in the sides, and roll tightly to the top edge. The wrapper should stick to itself. The roll should be firm but not so tight that it tears.",
  "Repeat: Continue with remaining wrappers and fillings. Work quickly as the wrappers dry out. Keep finished rolls covered with a damp towel to prevent drying.",
  "Make dipping sauce: Mix 2 tbsp peanut butter with 1 tbsp soy sauce, 1 tbsp lime juice, 1 tsp sugar, and 2-3 tbsp water until smooth. Adjust consistency and flavor to taste.",
  "Serve: Arrange rolls on a platter. Serve immediately with peanut dipping sauce. The rolls should be fresh, crisp, and not soggy. Best eaten the same day."
]
    },
    de: {
      title: "Sommerrollen",
      description: "Frische Reispapier-Rollen.",
      steps: [
  "Füllungen vorbereiten: 200g Garnelen kochen (schälen und entdarmen, falls nötig). Längs halbieren. 1 Gurke und 1 Karotte in dünne Streichhölzer schneiden. 1 Kopf Salat waschen und trocknen. 200g gekochte Reisnudeln bereithalten (oder Vermicelli).",
  "Reispapier einweichen: Eine große flache Schüssel oder einen Teller mit warmem Wasser (nicht heiß - ca. 40°C) füllen. Ein Reispapier-Blatt nehmen und vollständig 10-15 Sekunden untertauchen, bis es weich und biegsam wird. Nicht überweichen, sonst reißt es.",
  "Blatt füllen: Weiches Blatt auf ein sauberes, feuchtes Küchentuch legen. In die Mitte ein Salatblatt legen, dann eine kleine Handvoll Nudeln, 2-3 Garnelenhälften und etwas Gurken- und Karottenstreichhölzer. Nicht überfüllen.",
  "Fest rollen: Den unteren Rand über die Füllung falten, dann die Seiten einklappen und fest bis zum oberen Rand rollen. Das Blatt sollte an sich selbst haften. Die Rolle sollte fest sein, aber nicht so fest, dass sie reißt.",
  "Wiederholen: Mit den restlichen Blättern und Füllungen fortfahren. Schnell arbeiten, da die Blätter austrocknen. Fertige Rollen mit einem feuchten Tuch abdecken, um Austrocknen zu verhindern.",
  "Dipp-Sauce herstellen: 2 EL Erdnussbutter mit 1 EL Sojasauce, 1 EL Limettensaft, 1 TL Zucker und 2-3 EL Wasser mischen, bis glatt. Konsistenz und Geschmack nach Bedarf anpassen.",
  "Servieren: Rollen auf einer Platte anrichten. Sofort mit Erdnuss-Dipp-Sauce servieren. Die Rollen sollten frisch, knusprig und nicht matschig sein. Am besten am selben Tag essen."
]
    }
  }
};
