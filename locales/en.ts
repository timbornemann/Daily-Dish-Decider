
export const en = {
  // Navigation
  nav_pantry: "Pantry",
  nav_discover: "Discover",
  nav_cookbook: "Cookbook",
  nav_favorites: "Favorites",
  nav_shopping: "Shopping",
  nav_settings: "Settings",

  // Pantry
  pantry_title: "My Pantry",
  custom_item_placeholder: "Add item name...",
  qty_placeholder: "Qty",
  add_button: "Add",
  
  // Categories
  categories: {
    Produce: "Produce",
    Dairy: "Dairy",
    Meat: "Meat",
    Bakery: "Bakery",
    Frozen: "Frozen",
    Pantry: "Pantry",
    Spices: "Spices",
    Snacks: "Snacks",
    Beverages: "Beverages",
    General: "General"
  },

  expired: "Expired",
  days_left: "days left",
  expiring_soon: "Expiring soon",
  good: "Good",
  open_action: "Open",
  opened: "Opened",
  settings_units: "Units",
  units: "units",
  quick_add: "Quick Add",
  empty_pantry_msg: "Start adding items from the Quick Add sections or type your own above!",
  set_expiry: "Set Expiry",
  moved_to_shopping: "Moved to shopping list",
  
  // Shopping List
  shopping_title: "Shopping List",
  checkout_button: "Checkout",
  add_item_placeholder: "Add item...",
  empty_shopping_msg: "Your shopping list is clear.",

  // Swipe Deck
  pantry_empty_title: "Pantry is Empty",
  pantry_empty_desc: "Add ingredients to your pantry to start discovering recipes!",
  loading_chef: "Consulting the chefs...",
  load_more: "Load More Recipes",
  like: "LIKE",
  nope: "NOPE",
  view_details: "View Recipe Details",
  default_desc: "A delicious meal you can make with your pantry ingredients.",
  create_own_button: "Create Manual Recipe",
  generate_ai_button: "Generate AI Recipes",
  no_matches: "No matching recipes found.",
  or_create: "Or create your own",

  // Cookbook
  cookbook_title: "Recipe Book",
  search_placeholder: "Search recipes, ingredients, or tags...",
  filter_all: "All",
  filter_user: "My Recipes",
  filter_local: "Local",
  delete_recipe_confirm: "Delete this recipe?",
  filter_easy: "Easy",
  filter_medium: "Medium",
  filter_hard: "Hard",
  filter_tags: "Tags",
  clear_filters: "Clear",
  view_flat: "Flat View",
  view_categorized: "Categorized View",
  recipe_singular: "recipe",
  recipe_plural: "recipes",
  
  // Recipe Source & Difficulty
  source_user: "My Recipe",
  source_ai: "AI Chef",
  source_local: "Collection",
  difficulty: "Difficulty",
  diff_easy: "Easy",
  diff_medium: "Medium",
  diff_hard: "Hard",

  // Recipe Creator
  creator_title: "Create New Recipe",
  creator_title_placeholder: "e.g. Grandma's Apple Pie",
  creator_desc: "Description",
  creator_desc_placeholder: "Short description...",
  creator_prep: "Prep Time",
  creator_prep_placeholder: "e.g. 30 mins",
  creator_portions: "Portions",
  creator_ingredients: "Ingredients",
  creator_ing_name: "Name (e.g. Flour)",
  creator_ing_amount: "Amount",
  creator_steps: "Steps",
  creator_step_placeholder: "Describe step...",
  creator_add_step: "Add Next Step",
  creator_save_error: "Please fill in title, at least one ingredient and valid steps.",
  creator_no_ing: "No ingredients added yet.",

  // Recipe Detail
  servings: "Servings",
  missing_ingredients: "Missing Ingredients",
  add_missing_shopping: "Add Missing to Shopping List",
  substitution_title: "Show Alternatives",
  substitution_hint: "Pick substitutes and add them directly to your shopping list.",
  show_alternatives: "Alternatives for",
  use_alternative: "Use alternative",
  optional_amount: "Optional amount",
  amount_placeholder: "e.g. 200ml",
  original_amount: "Original",
  ingredients_title: "Ingredients",
  instructions_title: "Instructions",

  // Sudden Death
  sudden_death_title: "Sudden Death",
  choose_winner: "Choose the winner",
  option_prefix: "OPTION",
  select_this: "Select This",
  winner_is: "The Winner Is",
  lets_cook: "Let's Cook It!",
  finished_cooking: "Done",
  no_liked_recipes: "No liked recipes yet.",
  start_swiping: "Start Swiping",

  // Settings
  settings_title: "Settings",
  tab_general: "General",
  tab_dietary: "Dietary",
  tab_data: "Data",
  tab_algorithm: "Algorithm",
  appearance: "Appearance",
  dark_mode: "Dark Mode",
  on: "On",
  off: "Off",
  language: "Language",
  app_language: "App Language",
  measurement_system: "Measurement System",
  measurement_desc: "Used for ingredient amounts",
  dietary_desc: "Select your dietary preferences. These will be used to filter recipe suggestions and generate ideas.",
  notifications: "Notifications",
  expiry_alerts: "Expiry Alerts",
  expiry_desc: "Get notified before food goes bad",
  danger_zone: "Danger Zone",
  clear_data: "Clear All App Data",
  are_you_sure: "Are you sure?",
  delete_warning: "This will delete your pantry, shopping list, and favorites. This cannot be undone.",
  cancel: "Cancel",
  yes_delete: "Yes, Delete",
  
  // Algorithm
  algo_title: "Taste Brain",
  algo_desc: "This is what the app thinks you like based on your swipes.",
  algo_reset: "Reset Memory",
  algo_reset_confirm: "Are you sure you want to reset the learning algorithm? It will forget what you like.",
  algo_weights_title: "Taste Weights",
  algo_no_data: "No data yet. Swipe some recipes!",
  algo_explain_title: "How recommendations are weighted",
  algo_explain_intro: "We mix multiple signals. Ingredients are a weak signal so salt/pepper don't dominate.",
  algo_signal_ingredients: "Pantry match (low impact, basics down-weighted)",
  algo_signal_tags: "Tags & your preferred tags (medium impact)",
  algo_signal_time: "Time of day (small boost: breakfast in the morning, dinner in the evening)",
  algo_signal_week: "Weekday vs. weekend (small boost: quick on weekdays, comfort on weekends)",
  algo_signal_diet: "Diet filters (soft penalty for conflicts)",
  algo_signal_feedback: "Likes/Dislikes/Cooked (strongest; recency-aware)",
  algo_signal_explore: "Exploration (epsilon-greedy/Bandit keeps variety)",
  algo_reasons_title: "What you may see on recipe cards",
  algo_reasons_examples: "Example: “Found because: tomato, pasta; missing: basil. Boosted by preferred tag: quick; morning boost for breakfast.”",
  reason_label: "Why suggested",

  // Dietary Options
  dietary: {
    Vegetarian: "Vegetarian",
    Vegan: "Vegan",
    Pescatarian: "Pescatarian",
    Gluten_Free: "Gluten-Free",
    Dairy_Free: "Dairy-Free",
    Nut_Free: "Nut-Free",
    Keto: "Keto",
    Paleo: "Paleo",
    Low_Carb: "Low-Carb"
  },

  // Ingredient Translations (ID -> Label)
  ingredients: {
    // Produce
    onion: "Onion", garlic: "Garlic", potato: "Potato", carrot: "Carrot", tomato: "Tomato",
    lemon: "Lemon", lime: "Lime", banana: "Banana", spinach: "Spinach", pepper: "Pepper",
    cucumber: "Cucumber", zucchini: "Zucchini", lettuce: "Lettuce", apple: "Apple",
    orange: "Orange", berry: "Berries", avocado: "Avocado", mushroom: "Mushroom",
    ginger: "Ginger", chili: "Chili", broccoli: "Broccoli", cauliflower: "Cauliflower",
    sweet_potato: "Sweet Potato", herbs: "Fresh Herbs",
    
    // Dairy
    milk: "Milk", egg: "Egg", butter: "Butter", cheese: "Cheese", yogurt: "Yogurt",
    cream: "Cream", parmesan: "Parmesan", mozzarella: "Mozzarella", cheddar: "Cheddar",
    sour_cream: "Sour Cream", cottage_cheese: "Cottage Cheese", almond_milk: "Almond Milk",
    oat_milk: "Oat Milk", cream_cheese: "Cream Cheese",

    // Meat
    chicken_breast: "Chicken Breast", ground_beef: "Ground Beef", bacon: "Bacon",
    salmon: "Salmon", sausage: "Sausage", tofu: "Tofu", steak: "Steak",
    pork_chop: "Pork Chop", turkey: "Turkey", ham: "Ham", salami: "Salami",
    prosciutto: "Prosciutto", shrimp: "Shrimp", tuna: "Tuna",

    // Bakery
    bread: "Bread", toast: "Toast", bagel: "Bagel", tortilla: "Tortilla",
    bun: "Bun", pita: "Pita Bread", croissant: "Croissant", roll: "Roll", pizza_dough: "Pizza Dough",

    // Pantry
    rice: "Rice", pasta: "Pasta", flour: "Flour", sugar: "Sugar", olive_oil: "Olive Oil",
    veg_oil: "Vegetable Oil", canned_tomato: "Canned Tomatoes", bean: "Beans",
    lentil: "Lentils", quinoa: "Quinoa", couscous: "Couscous", oat: "Oats",
    cereal: "Cereal", chicken_broth: "Chicken Broth", beef_broth: "Beef Broth",
    tomato_paste: "Tomato Paste", honey: "Honey", maple_syrup: "Maple Syrup",
    peanut_butter: "Peanut Butter", jam: "Jam", baking_powder: "Baking Powder", yeast: "Yeast",

    // Spices
    salt: "Salt", pepper_spice: "Black Pepper", cumin: "Cumin", paprika: "Paprika",
    oregano: "Oregano", basil: "Basil", soy_sauce: "Soy Sauce", vinegar: "Vinegar",
    garlic_powder: "Garlic Powder", onion_powder: "Onion Powder", chili_flakes: "Chili Flakes",
    cinnamon: "Cinnamon", turmeric: "Turmeric", curry_powder: "Curry Powder",
    thyme: "Thyme", rosemary: "Rosemary", mustard: "Mustard", mayo: "Mayo",
    ketchup: "Ketchup", hot_sauce: "Hot Sauce",

    // Frozen
    frozen_peas: "Frozen Peas", frozen_pizza: "Frozen Pizza", ice_cream: "Ice Cream",
    frozen_berries: "Frozen Berries", fries: "Fries", frozen_spinach: "Frozen Spinach",
    fish_sticks: "Fish Sticks", frozen_corn: "Frozen Corn",

    // Snacks
    chips: "Chips", nuts: "Nuts", chocolate: "Chocolate", cracker: "Crackers",
    popcorn: "Popcorn", cookie: "Cookies", granola_bar: "Granola Bars", dried_fruit: "Dried Fruit",

    // Beverages
    coffee: "Coffee", tea: "Tea", water: "Water", juice: "Juice", soda: "Soda",
    beer: "Beer", wine: "Wine", sparkling_water: "Sparkling Water",

    // General
    paper_towel: "Paper Towels", toilet_paper: "Toilet Paper", dish_soap: "Dish Soap",
    sponge: "Sponge", foil: "Foil"
  },

  recipes: {
    pancakes: { title: "Classic Pancakes", description: "Fluffy breakfast pancakes.", steps: [
      "Prepare ingredients: Sift flour, sugar, and baking powder into a large bowl. Place milk, egg, and melted butter in a separate bowl.",
      "Mix dry ingredients: In a large bowl, whisk together flour, sugar, and baking powder until evenly distributed and no lumps remain.",
      "Whisk wet ingredients: In another bowl, whisk together milk, egg, and melted butter until the mixture is smooth and well combined.",
      "Combine batter: Pour the wet ingredients into the dry ingredients and gently stir with a whisk or spoon. Important: Only mix until just combined - small lumps are fine. Do not overmix, or the pancakes will be tough.",
      "Preheat pan: Heat a large non-stick pan or griddle over medium heat (about 175°C/350°F). Add a small amount of butter or oil and let it melt, spreading it evenly across the surface.",
      "Cook pancakes: Using a ladle or measuring cup, pour about 60ml (1/4 cup) of batter per pancake onto the hot pan. Don't overcrowd - leave space between pancakes for easy flipping.",
      "Flip pancakes: When small bubbles form on the top surface and the edges look set (after about 2-3 minutes), carefully flip with a spatula. The bottom should be golden brown.",
      "Finish cooking: Cook the second side for another 1-2 minutes until both sides are golden brown. Serve immediately while hot, or keep warm in a low oven (60°C/140°F) until ready to serve."
    ] },
    spaghetti_aglio: { title: "Spaghetti Aglio e Olio", description: "Simple garlic and oil pasta.", steps: [
      "Prepare ingredients: Finely slice 4 cloves of garlic into thin slices (not minced). Finely chop fresh parsley. Measure out olive oil, chili flakes, and salt. Set a large pot of salted water to boil for pasta.",
      "Cook pasta: Once water is boiling vigorously, add 400g spaghetti and cook according to package directions (usually 8-10 minutes) until al dente. Reserve 1 cup of pasta water before draining.",
      "Heat oil: While pasta cooks, heat 100ml olive oil in a large pan over medium-low heat (not too hot, or garlic will burn). Add the sliced garlic and cook gently for 2-3 minutes until fragrant and lightly golden - watch carefully, garlic burns easily.",
      "Add chili: Add 1 tsp chili flakes to the oil and garlic, stir for 30 seconds until fragrant. Remove from heat immediately to prevent burning.",
      "Combine pasta: Drain pasta (reserve water) and add hot pasta directly to the pan with oil and garlic. Toss vigorously with tongs, adding a splash of reserved pasta water (about 2-3 tablespoons) to help create a creamy emulsion.",
      "Finish: Add chopped parsley and toss again. Season with salt to taste. The pasta should be glossy and well-coated. Serve immediately in warm bowls."
    ] },
    scrambled_eggs: { title: "Creamy Scrambled Eggs", description: "Perfect soft scrambled eggs.", steps: [
      "Prepare eggs: Crack 4 eggs into a bowl. Add a generous pinch of salt and a small pinch of black pepper. Do not whisk yet.",
      "Heat pan: Place a non-stick pan over low to medium-low heat. Add 1 tbsp butter and let it melt slowly - the pan should be warm, not hot. The butter should melt but not sizzle aggressively.",
      "Whisk eggs: Just before cooking, whisk the eggs with a fork until whites and yolks are combined but not frothy - about 20-30 strokes. The mixture should be uniform in color.",
      "Cook gently: Pour eggs into the pan. Let them sit for 10 seconds, then start stirring slowly and continuously with a spatula, making figure-8 motions. Keep heat low - eggs should cook slowly over 3-4 minutes.",
      "Remove from heat: When eggs are mostly set but still slightly wet and creamy (about 75% done), remove pan from heat immediately. The residual heat will finish cooking them.",
      "Final stir: Continue stirring gently off the heat for another 30 seconds until eggs reach your desired consistency - they should be soft, creamy, and slightly runny. Serve immediately on warm plates."
    ] },
    grilled_cheese: { title: "Grilled Cheese Sandwich", description: "Crispy, cheesy comfort food.", steps: [
      "Prepare bread: Take 4 slices of bread. Spread butter evenly on one side of each slice - use about 1/2 tbsp butter per slice. The butter should be at room temperature for easy spreading.",
      "Layer cheese: Place 1-2 slices of cheese (depending on thickness) between two slices of bread, with the buttered sides facing outward. Use your favorite melting cheese like cheddar, gouda, or American.",
      "Preheat pan: Heat a large non-stick pan or griddle over medium heat (about 150°C/300°F). The pan should be hot enough to sizzle when you add butter, but not smoking.",
      "Cook first side: Place sandwich in the pan. Cook for 3-4 minutes until the bottom is golden brown and crispy. Press down gently with a spatula occasionally to ensure even contact.",
      "Flip carefully: Using a spatula, carefully flip the sandwich. The first side should be golden brown. If cheese is starting to melt out, that's a good sign.",
      "Cook second side: Cook for another 3-4 minutes until the second side is golden brown and the cheese is fully melted. You can press down gently again to help the cheese melt evenly.",
      "Serve: Remove from pan and let rest for 30 seconds (this helps the cheese set slightly). Cut diagonally and serve immediately while hot and crispy."
    ] },
    carbonara: { title: "Spaghetti Carbonara", description: "Roman classic with egg and bacon.", steps: [
      "Prepare ingredients: Cut 150g bacon into small cubes or strips. Grate 100g parmesan cheese. Separate 3 egg yolks from whites (you'll only need yolks). Set a large pot of salted water to boil.",
      "Cook bacon: Heat a large pan over medium heat. Add bacon and cook for 5-7 minutes, stirring occasionally, until crispy and golden. Remove from heat but keep the pan with bacon and rendered fat.",
      "Cook pasta: Once water is boiling, add 400g spaghetti and cook until al dente (usually 8-10 minutes). Reserve 1 cup of pasta water before draining.",
      "Prepare egg mixture: While pasta cooks, whisk together 3 egg yolks, grated parmesan, and 1 tbsp freshly ground black pepper in a medium bowl until smooth and creamy.",
      "Combine off heat: Drain pasta (reserve water) and immediately add hot pasta to the pan with bacon. Toss quickly to coat with bacon fat. Remove pan from heat completely - this is crucial to prevent eggs from scrambling.",
      "Add egg mixture: Working quickly, pour the egg and cheese mixture over the hot pasta while tossing vigorously with tongs. Add 2-3 tablespoons of reserved pasta water to help create a creamy sauce.",
      "Finish: Continue tossing until the sauce is creamy and coats the pasta. The heat from the pasta should cook the eggs just enough to create a silky sauce. If it's too thick, add more pasta water. Serve immediately with extra parmesan and black pepper."
    ] },
    chili_con_carne: { title: "Chili con Carne", description: "Spicy beef and bean stew.", steps: [
      "Prepare vegetables: Dice 1 large onion. Mince 2-3 cloves of garlic. Dice 1 bell pepper (optional). Open and drain 1 can of beans. Open 1 can of tomatoes.",
      "Brown the beef: Heat a large pot or Dutch oven over medium-high heat. Add 500g ground beef and cook, breaking it up with a spoon, for 5-7 minutes until browned and no longer pink. Drain excess fat if needed.",
      "Sauté vegetables: Add diced onion to the pot and cook for 3-4 minutes until softened. Add minced garlic and cook for 1 more minute until fragrant. Add 1 tbsp chili flakes and stir for 30 seconds.",
      "Add tomatoes and beans: Pour in the can of tomatoes (with juice) and drained beans. Stir to combine. Bring to a boil, then reduce heat to low.",
      "Simmer: Cover the pot and simmer gently for 30 minutes, stirring occasionally. The chili should bubble gently, not boil vigorously. If it gets too thick, add a splash of water or broth.",
      "Season and finish: After 30 minutes, taste and season with salt and additional chili flakes if you want more heat. The chili should be thick and flavorful. Serve hot with rice, sour cream, or shredded cheese."
    ] },
    french_toast: { title: "French Toast", description: "Sweet fried bread.", steps: [
      "Prepare bread: Cut 4 slices of bread (day-old bread works best). If using fresh bread, let it sit out for 10 minutes to dry slightly. Thick slices (about 2cm) work best.",
      "Make egg mixture: In a shallow dish or bowl, whisk together 2 eggs, 100ml milk, 1 tsp cinnamon, and a pinch of salt until well combined and smooth. The mixture should be uniform in color.",
      "Soak bread: Dip each slice of bread into the egg mixture, letting it soak for 10-15 seconds on each side. The bread should absorb the liquid but not fall apart. Don't oversoak or it will be too wet.",
      "Heat pan: Heat a large non-stick pan or griddle over medium heat (about 150°C/300°F). Add 1 tbsp butter and let it melt, spreading evenly across the pan.",
      "Cook first side: Place soaked bread slices in the pan (don't overcrowd). Cook for 3-4 minutes until the bottom is golden brown and crispy. The edges should look set.",
      "Flip and finish: Carefully flip each slice with a spatula. Cook the second side for another 3-4 minutes until golden brown. The center should be cooked through but still soft.",
      "Serve: Remove from pan and serve immediately while hot. Top with maple syrup, powdered sugar, fresh berries, or butter. Best served warm."
    ] },
    oatmeal: { title: "Morning Oatmeal", description: "Healthy warm breakfast.", steps: [
      "Measure ingredients: Measure 1 cup (100g) of rolled oats and 2 cups (500ml) of milk. Have honey, salt, and any toppings ready (fresh fruits, nuts, berries).",
      "Heat milk: Pour milk into a medium saucepan. Heat over medium heat until it comes to a gentle boil, stirring occasionally to prevent scorching. Watch carefully - milk can boil over quickly.",
      "Add oats: Once milk is boiling, reduce heat to low and add the oats. Stir immediately to prevent clumping. Add a small pinch of salt (this enhances the flavor).",
      "Simmer: Cook over low heat for 5-7 minutes, stirring frequently, until the oats are tender and the mixture has thickened to your desired consistency. The oatmeal should be creamy, not too thick or too thin.",
      "Sweeten: Remove from heat and stir in 1 tbsp honey (or to taste). You can also add a pinch of cinnamon or vanilla extract at this point.",
      "Serve: Pour into bowls and top with fresh fruits, berries, nuts, or additional honey. Serve immediately while warm. If it gets too thick as it cools, add a splash of warm milk."
    ] },
    potato_soup: { title: "Creamy Potato Soup", description: "Warming winter soup.", steps: [
      "Prepare vegetables: Peel and dice 500g potatoes into 2cm cubes. Dice 1 large onion and 2 carrots. Mince 2 cloves of garlic. Having uniform sizes ensures even cooking.",
      "Sauté aromatics: Heat a large pot over medium heat. Add 2 tbsp butter or oil. Add diced onion and carrots and cook for 5-6 minutes until softened and slightly golden, stirring occasionally.",
      "Add potatoes: Add diced potatoes and minced garlic to the pot. Stir and cook for 2 minutes. Season with salt and pepper. The potatoes should be well-coated with the butter/oil.",
      "Add broth: Pour in 1 liter of chicken broth (or vegetable broth). Bring to a boil, then reduce heat to medium-low. Cover and simmer for 20-25 minutes until potatoes are very tender and easily pierced with a fork.",
      "Blend soup: Remove from heat. Using an immersion blender, blend the soup until smooth and creamy. Alternatively, carefully transfer to a regular blender in batches and blend until smooth (be careful - hot liquids expand).",
      "Add cream: Return blended soup to the pot (if using regular blender). Stir in 100ml cream. Heat gently over low heat for 2-3 minutes until warmed through. Do not boil after adding cream.",
      "Season and serve: Taste and adjust seasoning with salt and pepper. The soup should be smooth, creamy, and well-seasoned. Serve hot, garnished with fresh herbs, croutons, or a drizzle of cream."
    ] },
    caprese: { title: "Caprese Salad", description: "Fresh Italian salad.", steps: [
      "Prepare tomatoes: Wash and dry 3 large, ripe tomatoes. Slice them into 1cm thick rounds. Use a sharp knife for clean cuts. Arrange slices on a serving plate, slightly overlapping.",
      "Prepare mozzarella: Drain 2 balls of fresh mozzarella. Slice into rounds of similar thickness to the tomatoes (about 1cm). If using a large ball, cut it in half first, then slice.",
      "Layer salad: Place a slice of mozzarella on top of each tomato slice, alternating and creating layers. You can also arrange them in a circular pattern on a large platter.",
      "Add basil: Wash and dry a handful of fresh basil leaves. Tear larger leaves in half. Scatter basil leaves over the tomatoes and mozzarella, tucking some between layers.",
      "Dress: Drizzle 2 tbsp good quality olive oil evenly over the salad. Then drizzle 1 tbsp balsamic vinegar (or regular vinegar). Season generously with salt and freshly ground black pepper.",
      "Serve: Let the salad sit for 5-10 minutes at room temperature to allow flavors to meld. Serve immediately as a starter or side dish. Best enjoyed fresh - don't refrigerate for too long."
    ] },
    chicken_curry: { title: "Easy Chicken Curry", description: "Mild creamy curry.", steps: [
      "Prepare ingredients: Cut 500g chicken breast into 2-3cm cubes. Dice 1 large onion. Mince 2 cloves of garlic. Grate 1 thumb-sized piece of fresh ginger. Measure out curry powder, cream, and broth.",
      "Cook chicken: Heat 2 tbsp oil in a large pan over medium-high heat. Add chicken pieces and cook for 5-6 minutes, turning occasionally, until golden brown on all sides. Remove chicken and set aside.",
      "Sauté aromatics: In the same pan, add diced onion and cook for 4-5 minutes until softened. Add minced garlic and grated ginger, cook for 1 more minute until fragrant.",
      "Add spices: Add 2 tbsp curry powder to the pan and stir for 30 seconds until fragrant. If you like it spicier, add a pinch of cayenne pepper or chili powder.",
      "Add liquid: Return chicken to the pan. Pour in 200ml cream and 100ml chicken broth (or water). Stir to combine. Bring to a gentle boil, then reduce heat to low.",
      "Simmer: Cover and simmer gently for 15-20 minutes until chicken is cooked through and tender. Stir occasionally. The sauce should thicken slightly and coat the chicken.",
      "Finish and serve: Taste and season with salt. The curry should be creamy and well-seasoned. Serve hot over cooked rice, garnished with fresh cilantro or parsley if desired."
    ] },
    
    // New additions
    schnitzel: { title: "Wiener Schnitzel", description: "Crispy breaded cutlet.", steps: [
      "Prepare meat: Place 4 pork chops between two pieces of plastic wrap or parchment paper. Using a meat mallet or rolling pin, pound each chop until it's about 5mm thick. Be gentle but firm - the meat should be evenly thin.",
      "Set up breading station: Prepare three shallow dishes. Place 100g flour in the first dish, 2 beaten eggs in the second, and 200g breadcrumbs in the third. Season each with a pinch of salt.",
      "Bread the meat: Dredge each pounded cutlet first in flour (shake off excess), then dip in beaten egg (let excess drip off), and finally coat thoroughly in breadcrumbs, pressing gently to adhere. Place on a plate.",
      "Heat oil: Heat 100g butter (or a mix of butter and oil) in a large pan over medium-high heat (about 175°C/350°F). You need enough fat to come halfway up the schnitzel. The butter should sizzle when you add the meat.",
      "Fry first side: Carefully place breaded cutlets in the hot butter. Don't overcrowd - cook 2 at a time if needed. Fry for 3-4 minutes until golden brown and crispy. Don't move them until ready to flip.",
      "Flip and finish: Carefully flip each schnitzel using tongs or a spatula. Fry the second side for another 3-4 minutes until golden brown. The schnitzel should be crispy on the outside and cooked through.",
      "Drain and serve: Remove from pan and let drain on paper towels for 30 seconds. Serve immediately while hot and crispy, traditionally with lemon wedges, potato salad, or lingonberry jam."
    ] },
    bratkartoffeln: { title: "Fried Potatoes", description: "German style crispy potatoes.", steps: [
      "Cook potatoes: Place 1kg potatoes (peeled) in a large pot of salted water. Bring to a boil and cook for 15-20 minutes until tender but not falling apart - they should still be firm. Drain and let cool completely (you can do this the day before and refrigerate).",
      "Slice potatoes: Once cool, slice the potatoes into 1cm thick rounds. If they're large, cut them in half first. The slices should be uniform for even cooking.",
      "Cook bacon: Heat a large pan over medium heat. Add 100g diced bacon and cook for 4-5 minutes until crispy and golden. Remove bacon with a slotted spoon, leaving the fat in the pan.",
      "Fry onions: Add 1 diced onion to the bacon fat in the pan. Cook for 3-4 minutes until softened and translucent. Remove onions and set aside with the bacon.",
      "Fry potatoes: Add 2 tbsp butter to the pan if needed. Add potato slices in a single layer (cook in batches if needed). Cook over medium-high heat for 5-7 minutes per side until golden brown and crispy. Don't move them too much - let them develop a crust.",
      "Combine: Once potatoes are crispy on both sides, return bacon and onions to the pan. Toss everything together and cook for 1-2 more minutes to heat through. Season with salt and pepper.",
      "Serve: The potatoes should be crispy on the outside and tender inside. Serve hot as a side dish, traditionally with schnitzel or sausages."
    ] },
    currywurst: { title: "Currywurst", description: "Sausage with curry sauce.", steps: [
      "Prepare sausages: Take 4 bratwurst or similar sausages. Prick each sausage a few times with a fork to prevent them from bursting during cooking. Let them come to room temperature for 10 minutes.",
      "Cook sausages: Heat 2 tbsp oil in a large pan over medium heat. Add sausages and cook for 8-10 minutes, turning occasionally, until browned on all sides and cooked through. The internal temperature should reach 70°C/160°F.",
      "Make curry sauce: While sausages cook, mix 200ml ketchup, 2 tbsp curry powder, 1 tbsp tomato paste, 1 tsp paprika, and a pinch of salt in a small bowl. Add 1-2 tbsp water to thin slightly if needed. Stir until smooth.",
      "Heat sauce: Transfer sauce to a small saucepan and heat gently over low heat for 2-3 minutes, stirring occasionally, until warm and well combined. Alternatively, heat in the microwave for 30 seconds.",
      "Slice sausages: Once sausages are cooked, remove from pan and let rest for 2 minutes. Slice diagonally into bite-sized pieces (about 2cm thick), but don't cut all the way through - leave them connected at the bottom.",
      "Plate and serve: Arrange sliced sausages on a plate. Pour warm curry sauce over the top, covering the sausages generously. Sprinkle with additional curry powder for extra flavor. Serve immediately with fries or bread."
    ] },
    kaesespaetzle: { title: "Cheese Spaetzle", description: "German mac and cheese.", steps: [
      "Cook spaetzle: Bring a large pot of salted water to a boil. Add 500g fresh or frozen spaetzle and cook according to package directions (usually 2-3 minutes) until they float to the surface. Fresh spaetzle will float when done.",
      "Drain: Drain spaetzle well, reserving a small amount of cooking water. Don't rinse - the starch helps the cheese stick. Set aside.",
      "Prepare cheese: Grate 250g of your favorite melting cheese (Emmental, Gruyère, or a mix). Finely slice 3 onions for frying.",
      "Fry onions: Heat 2 tbsp butter in a large pan over medium heat. Add sliced onions and cook slowly for 10-15 minutes, stirring occasionally, until deep golden brown and caramelized. Remove half for topping, keep the rest in the pan.",
      "Layer spaetzle: Add drained spaetzle to the pan with onions. Add grated cheese in layers, mixing gently as you go. Add a splash of reserved pasta water to help create a creamy consistency.",
      "Melt cheese: Cook over low heat, stirring gently, for 2-3 minutes until cheese is melted and everything is well combined. The spaetzle should be creamy and cheesy.",
      "Serve: Transfer to serving dish and top with the reserved fried onions. Serve immediately while hot and gooey. Best enjoyed fresh from the pan."
    ] },
    risotto_mushroom: { title: "Mushroom Risotto", description: "Cremy Italian rice.", steps: [
      "Prepare ingredients: Slice 300g mushrooms (cremini or mixed). Finely dice 1 onion. Grate 50g parmesan. Heat 1 liter of chicken or vegetable broth in a separate pot and keep it warm (simmering) throughout cooking.",
      "Sauté mushrooms: Heat 2 tbsp butter in a large pan over medium-high heat. Add sliced mushrooms and cook for 5-6 minutes until golden brown and they've released their liquid. Remove mushrooms and set aside.",
      "Cook aromatics: In the same pan, add 1 more tbsp butter. Add diced onion and cook for 3-4 minutes until softened and translucent. Don't let it brown.",
      "Toast rice: Add 300g Arborio rice to the pan. Stir constantly for 2 minutes until rice is translucent around the edges and makes a clicking sound. This toasts the rice and is crucial for creamy risotto.",
      "Add wine (optional): If using, add 100ml white wine and stir until absorbed. This adds flavor but can be skipped if you don't have wine.",
      "Add broth gradually: Add one ladle (about 100ml) of warm broth to the rice. Stir constantly until almost all liquid is absorbed. Continue adding broth one ladle at a time, stirring constantly, for 15-20 minutes. The rice should be creamy but still have a slight bite (al dente).",
      "Finish: When rice is almost done, return mushrooms to the pan. Add 50g butter and grated parmesan. Stir vigorously off the heat for 1 minute until creamy and well combined. Season with salt and pepper. Serve immediately in warm bowls."
    ] },
    lasagne: { title: "Classic Lasagne", description: "Layered pasta bake.", steps: [
      "Make meat sauce: Heat 2 tbsp oil in a large pan. Add 500g ground beef and cook for 5-6 minutes until browned. Add 1 diced onion and 2 minced garlic cloves, cook for 3 minutes. Add 2 cans crushed tomatoes, 2 tbsp tomato paste, salt, pepper, and herbs. Simmer for 20 minutes until thickened.",
      "Make white sauce (Béchamel): Melt 50g butter in a saucepan over medium heat. Whisk in 50g flour and cook for 1 minute. Gradually whisk in 500ml warm milk, a little at a time, until smooth. Cook for 5 minutes until thickened, stirring constantly. Season with salt, pepper, and nutmeg.",
      "Prepare pasta: If using no-boil lasagne sheets, have them ready. If using regular pasta, cook according to package until al dente, then drain and lay flat on oiled baking sheets to prevent sticking.",
      "Preheat oven: Preheat oven to 180°C/355°F. Grease a 20x30cm baking dish with butter or oil.",
      "Layer lasagne: Spread a thin layer of meat sauce on the bottom. Add a layer of pasta sheets (overlapping slightly). Spread 1/3 of remaining meat sauce, then 1/3 of white sauce, then 1/3 of 200g grated cheese. Repeat layers 2 more times, ending with cheese on top.",
      "Bake: Cover with foil and bake for 30 minutes. Remove foil and bake for another 15-20 minutes until top is golden brown and bubbly. Let rest for 10 minutes before cutting.",
      "Serve: Cut into portions and serve hot. The lasagne should be set and hold its shape when cut. Serve with a side salad and garlic bread."
    ] },
    bruschetta: { title: "Tomato Bruschetta", description: "Toasted bread with tomatoes.", steps: [
      "Prepare tomatoes: Wash and dice 4 large, ripe tomatoes. Remove seeds if desired (they can make it watery). Place diced tomatoes in a bowl. Add a pinch of salt and let sit for 10 minutes, then drain excess liquid.",
      "Make tomato mixture: To the tomatoes, add 2 minced garlic cloves, 1 handful of chopped fresh basil, 3 tbsp olive oil, and 1 tbsp balsamic vinegar. Mix gently. Season with salt and black pepper. Let marinate for 15-20 minutes at room temperature.",
      "Prepare bread: Cut 1 loaf of Italian or French bread into 1.5cm thick slices. You'll need about 8-10 slices. Use day-old bread if possible - it toasts better.",
      "Toast bread: Preheat a grill pan, griddle, or regular pan over medium-high heat. Brush bread slices with olive oil on both sides. Toast for 2-3 minutes per side until golden brown and crispy with grill marks if using a grill pan.",
      "Rub with garlic: While bread is still hot, rub one side of each slice with a cut clove of garlic. This infuses the bread with garlic flavor. Be gentle - you just want to transfer the flavor, not make it too strong.",
      "Top and serve: Spoon the tomato mixture generously onto each slice of toasted bread. Drizzle with a bit more olive oil if desired. Serve immediately while the bread is still warm and crispy."
    ] },
    tiramisu: { title: "Tiramisu", description: "Coffee flavored dessert.", steps: [
      "Prepare coffee: Brew 1 cup of strong coffee (espresso is traditional). Let it cool completely to room temperature. You can add 1-2 tbsp sugar if you like it sweeter. Set aside.",
      "Prepare mascarpone: In a large bowl, whisk 500g mascarpone cheese with 100g sugar until smooth and creamy. Don't overmix or it can become grainy. The mixture should be thick and smooth.",
      "Whip cream (optional): For extra lightness, you can fold in 200ml whipped cream. Whip cream separately until stiff peaks form, then gently fold into mascarpone mixture.",
      "Layer bottom: Dip 200g ladyfinger cookies (savoiardi) quickly into the cooled coffee - just a quick dip (1-2 seconds) on each side. Don't soak them or they'll fall apart. Arrange a single layer in the bottom of a 20x30cm dish.",
      "Add cream layer: Spread half of the mascarpone mixture over the cookies in an even layer. Use a spatula to smooth it out.",
      "Repeat layers: Add another layer of coffee-dipped cookies, then the remaining mascarpone mixture. Smooth the top layer.",
      "Chill and serve: Cover with plastic wrap and refrigerate for at least 4 hours, preferably overnight. Before serving, dust the top generously with 2 tbsp cocoa powder using a fine sieve. Cut into squares and serve cold."
    ] },
    fried_rice: { title: "Egg Fried Rice", description: "Quick Asian rice dish.", steps: [
      "Prepare rice: Use 400g of day-old cooked rice (cold rice works best - fresh rice can be too sticky). Break up any large clumps with your hands. If using fresh rice, spread it on a baking sheet and let cool completely.",
      "Scramble eggs: Heat 1 tbsp oil in a large wok or pan over high heat. Beat 2 eggs with a pinch of salt. Pour into the hot pan and scramble quickly for 1-2 minutes until just set but still slightly runny. Remove and set aside.",
      "Prepare vegetables: Dice 1 carrot and 100g frozen peas (thaw if frozen). Have 2 tbsp soy sauce ready. Mince 2 cloves of garlic (optional).",
      "Stir fry vegetables: Add 1 more tbsp oil to the pan. Add diced carrot and cook for 2 minutes. Add peas and cook for 1 more minute. Push vegetables to one side.",
      "Fry rice: Add rice to the pan. Break up any clumps with a spatula. Stir-fry for 3-4 minutes over high heat until rice is heated through and slightly crispy. The rice should be separated and not clumpy.",
      "Combine: Add scrambled eggs back to the pan. Add 2 tbsp soy sauce and minced garlic. Stir-fry everything together for 1-2 minutes until well combined and heated through.",
      "Serve: The rice should be slightly crispy, well-seasoned, and golden. Serve immediately while hot, garnished with sliced green onions if desired."
    ] },
    beef_broccoli: { title: "Beef and Broccoli", description: "Stir fry classic.", steps: [
      "Prepare beef: Slice 400g steak (sirloin or flank) into thin strips (about 5mm thick) against the grain. This makes the meat tender. Marinate with 1 tbsp soy sauce and 1 tsp cornstarch for 15 minutes.",
      "Prepare broccoli: Cut 1 head of broccoli into florets. Blanch in boiling salted water for 2 minutes, then immediately transfer to ice water to stop cooking. Drain well. This keeps it crisp and bright green.",
      "Make sauce: Mix 3 tbsp soy sauce, 1 tbsp sugar, 1 tbsp minced ginger, 2 minced garlic cloves, 1 tbsp cornstarch, and 100ml water in a small bowl. Stir until smooth.",
      "Stir fry beef: Heat 2 tbsp oil in a wok or large pan over very high heat. Add beef strips and stir-fry for 2-3 minutes until browned but still slightly pink inside. Remove and set aside.",
      "Cook vegetables: Add 1 more tbsp oil to the pan. Add blanched broccoli and stir-fry for 2 minutes. Add 1 diced carrot if desired.",
      "Combine: Return beef to the pan. Pour in the sauce mixture. Stir-fry for 1-2 minutes until sauce thickens and coats everything. The beef should be cooked through and the sauce should be glossy.",
      "Serve: Serve immediately over steamed rice while hot. The broccoli should be crisp-tender and the beef should be tender and well-coated with sauce."
    ] },
    teriyaki_chicken: { title: "Teriyaki Chicken", description: "Sweet glazed chicken.", steps: [
      "Prepare chicken: Cut 500g chicken breast into 2-3cm cubes or strips. Pat dry with paper towels - this helps with browning. Season lightly with salt and pepper.",
      "Make teriyaki sauce: In a small bowl, mix 4 tbsp soy sauce, 2 tbsp sugar (or honey), 1 tsp grated fresh ginger, 1 minced garlic clove, and 1 tbsp cornstarch dissolved in 2 tbsp water. Stir until smooth.",
      "Cook chicken: Heat 2 tbsp oil in a large pan over medium-high heat. Add chicken pieces and cook for 5-6 minutes, turning occasionally, until golden brown on all sides and cooked through (internal temperature 75°C/165°F).",
      "Add sauce: Reduce heat to medium. Pour teriyaki sauce over the chicken. Stir to coat. The sauce will start to bubble and thicken immediately.",
      "Simmer: Cook for 2-3 minutes, stirring frequently, until the sauce has thickened and become sticky and glossy. The chicken should be well-coated. If sauce gets too thick, add a splash of water.",
      "Cook rice: While chicken cooks, prepare 200g rice according to package directions. Fluffy white rice works best.",
      "Serve: Serve hot chicken over rice, drizzled with any remaining sauce from the pan. Garnish with sesame seeds and sliced green onions if desired. The sauce should be sweet, savory, and sticky."
    ] },
    summer_rolls: { title: "Fresh Summer Rolls", description: "Rice paper rolls.", steps: [
      "Prepare fillings: Cook 200g shrimp (peel and devein if needed). Slice into halves lengthwise. Julienne 1 cucumber and 1 carrot into thin matchsticks. Wash and dry 1 head of lettuce. Have 200g cooked rice noodles ready (or vermicelli).",
      "Soak rice paper: Fill a large shallow dish or plate with warm water (not hot - about 40°C/100°F). Take one rice paper wrapper and submerge it completely for 10-15 seconds until it becomes soft and pliable. Don't over-soak or it will tear.",
      "Fill wrapper: Place softened wrapper on a clean, damp kitchen towel. In the center, place a lettuce leaf, then a small handful of noodles, 2-3 shrimp halves, and some cucumber and carrot matchsticks. Don't overfill.",
      "Roll tightly: Fold the bottom edge over the filling, then fold in the sides, and roll tightly to the top edge. The wrapper should stick to itself. The roll should be firm but not so tight that it tears.",
      "Repeat: Continue with remaining wrappers and fillings. Work quickly as the wrappers dry out. Keep finished rolls covered with a damp towel to prevent drying.",
      "Make dipping sauce: Mix 2 tbsp peanut butter with 1 tbsp soy sauce, 1 tbsp lime juice, 1 tsp sugar, and 2-3 tbsp water until smooth. Adjust consistency and flavor to taste.",
      "Serve: Arrange rolls on a platter. Serve immediately with peanut dipping sauce. The rolls should be fresh, crisp, and not soggy. Best eaten the same day."
    ] },
    pad_thai: { title: "Pad Thai", description: "Fried noodles.", steps: [
      "Soak noodles: Place 200g rice noodles in a large bowl. Cover with hot (not boiling) water and let soak for 20-30 minutes until softened but still slightly firm. They should be pliable but not mushy. Drain well before cooking.",
      "Prepare ingredients: Cut 200g tofu (or chicken) into small cubes. Beat 2 eggs. Have 2 tbsp soy sauce, 1 tbsp fish sauce (optional), 1 lime, and 2 tbsp chopped peanuts ready. Slice 1 lime into wedges.",
      "Make sauce: In a small bowl, mix 2 tbsp soy sauce, 1 tbsp fish sauce (or more soy sauce), 1 tbsp sugar, 1 tbsp lime juice, and 1 tsp chili flakes. Stir until sugar dissolves.",
      "Stir fry protein: Heat 2 tbsp oil in a wok or large pan over high heat. Add tofu (or chicken) and cook for 3-4 minutes until golden. Push to one side. Add beaten eggs and scramble quickly. Mix with tofu.",
      "Add noodles: Add drained noodles to the pan. Pour in the sauce. Stir-fry for 3-4 minutes over high heat, tossing constantly, until noodles are heated through and well-coated with sauce.",
      "Finish: Add 2 tbsp chopped peanuts and toss. The noodles should be slightly chewy, well-seasoned, and not mushy. If they're too dry, add a splash of water.",
      "Serve: Transfer to plates and garnish with additional peanuts, lime wedges, and fresh cilantro if desired. Serve immediately while hot. Squeeze lime over before eating."
    ] },
    tacos: { title: "Beef Tacos", description: "Crunchy filled shells.", steps: [
      "Cook beef: Heat 2 tbsp oil in a large pan over medium-high heat. Add 400g ground beef and cook, breaking it up with a spoon, for 5-6 minutes until browned. Drain excess fat if needed.",
      "Season beef: Add 1 tbsp chili flakes, 1 tsp cumin, 1 tsp paprika, and salt to taste. Stir and cook for 2 more minutes until fragrant. Add 100g salsa or diced tomatoes if desired. Keep warm.",
      "Warm shells: Heat taco shells according to package directions - usually in the oven at 180°C/355°F for 3-5 minutes, or in a dry pan for 30 seconds per side. They should be warm and crispy.",
      "Prepare toppings: Shred 100g cheese. Chop 1/2 head of lettuce into thin strips. Dice 1 tomato. Have sour cream, salsa, and hot sauce ready if desired.",
      "Fill tacos: Take a warm shell. Add a spoonful of seasoned beef, then top with cheese, lettuce, and tomato. Don't overfill or they'll be hard to eat.",
      "Add condiments: Drizzle with sour cream, salsa, or hot sauce if desired. The taco should be full but not overflowing.",
      "Serve: Serve immediately while shells are still warm and crispy. Best eaten with your hands. Have napkins ready!"
    ] },
    quesadillas: { title: "Cheese Quesadillas", description: "Grilled cheese tortillas.", steps: [
      "Prepare tortillas: Take 4 large flour tortillas. Have 200g shredded cheese ready (cheddar, Monterey Jack, or a mix). You can also add 100g cooked beans if desired.",
      "Fill tortillas: Place one tortilla flat. Sprinkle half of it with cheese (and beans if using). Fold the other half over to create a half-moon shape. Press gently.",
      "Heat pan: Heat a large non-stick pan or griddle over medium heat (about 150°C/300°F). No oil needed if using a non-stick pan, but you can add a small amount of butter for extra flavor.",
      "Cook first side: Place filled quesadilla in the pan. Cook for 2-3 minutes until the bottom is golden brown and crispy. The cheese should start melting.",
      "Flip carefully: Using a large spatula, carefully flip the quesadilla. Cook the second side for another 2-3 minutes until golden brown and cheese is fully melted.",
      "Check doneness: The quesadilla should be crispy on the outside and the cheese should be completely melted inside. If cheese isn't melted, cover the pan for 30 seconds to help it along.",
      "Serve: Remove from pan and let cool for 30 seconds. Cut into 3-4 wedges with a pizza cutter or sharp knife. Serve immediately while hot and gooey, with salsa, sour cream, or guacamole."
    ] },
    guacamole: { title: "Fresh Guacamole", description: "Avocado dip.", steps: [
      "Prepare avocados: Cut 3 ripe avocados in half lengthwise. Remove the pit. Scoop the flesh into a medium bowl. Use a fork to mash roughly - leave some chunks for texture, don't make it completely smooth.",
      "Add lime: Squeeze the juice of 1 lime over the avocados immediately to prevent browning. Mix gently. The acid also enhances the flavor.",
      "Add vegetables: Finely dice 1/2 onion and 1 tomato. Add to the bowl with the avocados. Mix gently to combine.",
      "Season: Add 1 tsp salt (or to taste) and a pinch of black pepper. You can also add 1 minced garlic clove, 1 tbsp chopped cilantro, or a pinch of cumin if desired.",
      "Mix gently: Stir everything together gently with a fork. Don't overmix - you want to maintain some texture. Taste and adjust seasoning.",
      "Serve immediately: Guacamole is best served fresh. Transfer to a serving bowl. If not serving right away, press plastic wrap directly onto the surface to prevent browning. Serve with tortilla chips, on tacos, or as a side."
    ] },
    burger: { title: "Classic Burger", description: "Juicy beef burger.", steps: [
      "Form patties: Gently shape 400g ground beef into 4 equal patties, about 2cm thick. Don't overwork the meat - handle it as little as possible. Make a slight indentation in the center of each patty (this prevents them from puffing up). Season both sides with salt and pepper.",
      "Prepare toppings: Slice 1 tomato. Wash and dry 4 lettuce leaves. Have 4 slices of cheese ready. Slice any other desired toppings (onions, pickles, etc.).",
      "Cook patties: Heat a grill, griddle, or large pan over medium-high heat. Cook patties for 4-5 minutes per side for medium doneness (longer for well-done). Don't press down on them while cooking - this squeezes out juices. Add cheese slices in the last minute of cooking to melt.",
      "Toast buns: While patties cook, split 4 burger buns and toast the cut sides in a pan, on the grill, or under a broiler for 1-2 minutes until golden brown. Don't burn them.",
      "Assemble: Place bottom bun on plate. Add lettuce leaf, then the cooked patty with cheese, then tomato and other toppings. Add condiments (ketchup, mayo, mustard) if desired. Top with the other bun half.",
      "Serve: Serve immediately while hot. The burger should be juicy, the bun should be slightly crispy, and everything should hold together. Best eaten with your hands!"
    ] },
    greek_salad: { title: "Greek Salad", description: "Fresh feta salad.", steps: [
      "Prepare vegetables: Wash and dice 1 large cucumber into 2cm chunks. Dice 4 large tomatoes into similar-sized chunks. Thinly slice 1 red onion. Have 200g feta cheese ready.",
      "Combine vegetables: Place cucumber, tomatoes, and onion in a large bowl. Add 100g pitted Kalamata olives (whole or halved). Toss gently to combine.",
      "Make dressing: In a small bowl, whisk together 3 tbsp olive oil, 1 tbsp red wine vinegar, 1 tsp dried oregano, and salt and pepper to taste. The dressing should be well-emulsified.",
      "Dress salad: Pour dressing over the vegetables. Toss gently to coat everything evenly. Don't overmix or the vegetables will become mushy.",
      "Add feta: Crumble or cut 200g feta cheese into large chunks. Place on top of the salad. Don't mix it in completely - it's nice to have distinct pieces.",
      "Finish: Sprinkle with additional oregano and a drizzle of olive oil if desired. The salad should be fresh, crisp, and well-seasoned.",
      "Serve: Serve immediately at room temperature. The vegetables should be crisp and the feta should be creamy. Best enjoyed fresh - don't refrigerate for too long as tomatoes lose flavor when cold."
    ] },
    shakshuka: { title: "Shakshuka", description: "Eggs poached in tomato sauce.", steps: [
      "Prepare vegetables: Dice 1 large onion and 1 bell pepper. Mince 2-3 cloves of garlic. Open 1 can of tomatoes (crushed or diced). Have 4 eggs ready.",
      "Make tomato sauce: Heat 2 tbsp olive oil in a large skillet over medium heat. Add diced onion and pepper, cook for 5-6 minutes until softened. Add minced garlic and 1 tbsp chili flakes, cook for 1 minute.",
      "Add tomatoes: Pour in the can of tomatoes with their juice. Add 1 tbsp tomato paste, salt, and pepper. Bring to a simmer, then reduce heat to low and cook for 10-15 minutes until sauce has thickened slightly.",
      "Create wells: Using a spoon, make 4 indentations (wells) in the sauce. Space them evenly around the pan. The sauce should be thick enough to hold the shape.",
      "Add eggs: Crack one egg into each well. Be careful not to break the yolks. Season each egg with a pinch of salt and pepper.",
      "Cook eggs: Cover the pan with a lid and cook over low heat for 5-8 minutes until egg whites are set but yolks are still runny. Check after 5 minutes - you want the whites cooked but yolks soft.",
      "Serve: Remove from heat. Serve directly from the pan (it's beautiful!) or transfer to plates. Serve immediately with crusty bread for dipping. The eggs should be perfectly poached in the spicy tomato sauce."
    ] },
    caesar_salad: { title: "Caesar Salad", description: "Creamy lettuce salad.", steps: [
      "Prepare lettuce: Wash and thoroughly dry 1 head of romaine lettuce. Tear or cut into bite-sized pieces. Place in a large bowl. The lettuce should be completely dry or the dressing won't stick properly.",
      "Cook chicken: Season 2 chicken breasts with salt and pepper. Heat 1 tbsp oil in a pan over medium-high heat. Cook chicken for 6-7 minutes per side until cooked through (internal temperature 75°C/165°F). Let rest, then slice into strips.",
      "Make croutons: Cut 2 slices of bread into 2cm cubes. Toss with 1 tbsp olive oil, salt, and pepper. Bake at 180°C/355°F for 8-10 minutes until golden and crispy, or pan-fry for 3-4 minutes.",
      "Make dressing: In a small bowl, whisk together 2 tbsp mayo, 1 tbsp lemon juice, 1 minced garlic clove, 2 tbsp grated parmesan, and 2 tbsp olive oil. Add salt and pepper to taste. Thin with a bit of water if needed.",
      "Toss salad: Pour dressing over lettuce. Add 50g grated parmesan. Toss gently with tongs until lettuce is evenly coated. Don't overdress - you want it lightly coated, not soggy.",
      "Add toppings: Add croutons and sliced chicken to the salad. Toss once more gently. The croutons should stay crispy.",
      "Serve: Serve immediately in individual bowls or on plates. The salad should be crisp, well-dressed, and the chicken should be warm. Best eaten right away before the lettuce wilts."
    ] },
    banana_bread: { title: "Banana Bread", description: "Moist fruit cake.", steps: [
      "Prepare bananas: Mash 3 very ripe bananas (they should have brown spots) in a large bowl with a fork until mostly smooth with some small chunks remaining. The riper the bananas, the sweeter and more flavorful the bread.",
      "Mix wet ingredients: To the mashed bananas, add 100g melted butter (cooled slightly), 1 egg, and 1 tsp vanilla extract. Mix until well combined. The mixture should be smooth and uniform.",
      "Combine dry ingredients: In a separate bowl, whisk together 250g flour, 100g sugar, 1 tsp baking powder, 1/2 tsp baking soda, and a pinch of salt. Make sure there are no lumps.",
      "Combine mixtures: Add dry ingredients to wet ingredients. Fold gently with a spatula until just combined - don't overmix. A few lumps are fine. Overmixing makes the bread tough.",
      "Prepare pan: Grease a 23x13cm loaf pan with butter or line with parchment paper. Preheat oven to 180°C/355°F.",
      "Bake: Pour batter into prepared pan. Smooth the top. Bake for 55-65 minutes until a toothpick inserted in the center comes out clean or with a few moist crumbs. The top should be golden brown.",
      "Cool and serve: Let cool in pan for 10 minutes, then remove and cool completely on a wire rack. Slice when completely cool. The bread should be moist, sweet, and have a tender crumb. Store covered at room temperature."
    ] },
    smoothie_bowl: { title: "Berry Smoothie Bowl", description: "Thick smoothie.", steps: [
      "Prepare frozen fruit: Measure 200g frozen berries (mixed berries, strawberries, or blueberries). You can also use fresh berries that you've frozen for at least 2 hours. The frozen fruit is key for a thick consistency.",
      "Blend base: In a blender, combine frozen berries, 1 banana (sliced and frozen if possible), and 100g yogurt. Blend on high speed until thick and smooth. The mixture should be very thick, almost like soft-serve ice cream - not runny.",
      "Check consistency: If it's too thin, add more frozen fruit. If it's too thick, add a tiny splash of milk or more yogurt. The goal is a spoonable, thick consistency that holds its shape.",
      "Pour into bowl: Transfer the thick smoothie to a serving bowl. Use a spoon to smooth the top. Work quickly as it will start to melt.",
      "Add toppings: Top with 2 tbsp granola, sliced fresh banana, additional fresh berries, nuts, seeds, or coconut flakes. Arrange them attractively - this is part of the appeal!",
      "Serve immediately: Serve right away while still thick and cold. The bowl should be eaten with a spoon, not drunk. Best enjoyed fresh - it will become more liquid as it warms up."
    ] },

    // Extensions
    frozen_pizza_upgrade: { title: "Frozen Pizza Glow-Up", description: "Upgrade a ready pizza.", steps: [
      "Preheat oven: Preheat oven to the temperature specified on the frozen pizza package (usually 200-220°C/390-430°F). Remove frozen pizza from packaging and place on a baking sheet or pizza stone if you have one.",
      "Prepare toppings: While oven preheats, slice 2 fresh tomatoes into thin rounds. Tear 1 ball of fresh mozzarella into small pieces. Chop 1 handful of fresh herbs (basil, oregano, or parsley).",
      "Parbake base: Place frozen pizza in the preheated oven and bake for 5-7 minutes (about half the recommended time) until the crust starts to set but isn't fully cooked. This creates a better base for your toppings.",
      "Add fresh toppings: Remove pizza from oven. Arrange tomato slices evenly over the pizza. Scatter torn mozzarella pieces on top. Sprinkle with fresh herbs. Don't overdo it - you want to enhance, not overwhelm.",
      "Finish baking: Return pizza to oven and bake for the remaining time (usually 8-12 more minutes) until the crust is golden and crispy, cheese is melted, and toppings are heated through. Watch carefully to avoid burning.",
      "Check doneness: The pizza is done when the crust is crispy, cheese is bubbly, and the bottom is golden brown. The fresh toppings should be warm but not overcooked.",
      "Serve: Remove from oven and let rest for 2 minutes before slicing. The upgraded pizza should have a crispier crust and fresher flavor than the original frozen version. Serve hot."
    ] },
    doner_plate: { title: "Doner Plate", description: "Imbiss classic at home.", steps: [
      "Prepare meat: Cut 300g turkey or chicken into thin strips. Marinate with 1 tbsp oil, 1 tsp paprika, salt, and pepper for 15 minutes if time allows (or cook immediately).",
      "Cook meat: Heat 2 tbsp oil in a large pan over high heat. Add marinated meat strips and sear for 4-5 minutes, stirring occasionally, until browned and cooked through. Remove from heat and keep warm.",
      "Make yogurt sauce: In a small bowl, stir together 150g yogurt, 1 minced garlic clove, 1/2 tsp salt, and a pinch of black pepper. Mix until smooth. Let sit for 10 minutes to let flavors meld.",
      "Prepare vegetables: Dice 1/2 cucumber and 1 tomato into small cubes. Wash and dry 4 lettuce leaves, then tear into bite-sized pieces. Have everything ready for assembly.",
      "Warm pita: Heat 2 pita breads in a dry pan for 30 seconds per side, or wrap in foil and warm in a 180°C/355°F oven for 3-4 minutes until warm and pliable. Don't let them get crispy.",
      "Assemble plate: On each plate, arrange a bed of lettuce. Top with warm meat strips, then diced cucumber and tomato. Drizzle generously with yogurt sauce.",
      "Serve: Serve immediately while meat is still warm. The pita can be served on the side or used to scoop up the meat and vegetables. Best enjoyed fresh and warm."
    ] },
    roasted_veg_feta: { title: "Roasted Veg & Feta", description: "Sheet-pan dinner.", steps: [
      "Preheat oven: Preheat oven to 200°C/390°F. Line a large baking sheet with parchment paper or foil for easy cleanup.",
      "Prepare vegetables: Wash and cut 600g potatoes, 2 carrots, and 1 zucchini into 2-3cm cubes. Try to make them similar sizes for even cooking. Place all vegetables in a large bowl.",
      "Season vegetables: Drizzle 3 tbsp olive oil over the vegetables. Add 1 tsp salt, 1/2 tsp black pepper, and 1 tsp dried herbs (oregano, thyme, or Italian seasoning). Toss until all vegetables are evenly coated.",
      "Roast: Spread vegetables in a single layer on the prepared baking sheet. Don't overcrowd - use two sheets if needed. Roast for 25-30 minutes until vegetables are tender and starting to brown, stirring halfway through.",
      "Add feta: After 25-30 minutes, crumble 150g feta cheese over the vegetables. Return to oven and bake for another 5-7 minutes until feta is slightly melted and vegetables are fully tender.",
      "Check doneness: Vegetables should be soft when pierced with a fork, with some crispy edges. The feta should be warm and slightly melted but not completely liquid.",
      "Serve: Remove from oven and let cool for 2 minutes. Serve hot directly from the pan or transfer to a serving dish. The vegetables should be tender, the feta should be creamy, and everything should be well-seasoned."
    ] },
    ramen_weeknight: { title: "Weeknight Ramen", description: "Brothy noodles with egg.", steps: [
      "Prepare broth: In a large pot, bring 800ml chicken broth to a boil. Add 2 tbsp soy sauce and reduce heat to a gentle simmer. Keep warm while you prepare other ingredients.",
      "Cook eggs: While broth simmers, bring a small pot of water to a boil. Gently lower 2 eggs into boiling water and cook for exactly 6 minutes for soft-boiled (or 7 minutes for slightly firmer). Immediately transfer to ice water to stop cooking. Peel carefully when cool enough to handle.",
      "Prepare vegetables: Wash 100g fresh spinach. Have 1 tsp chili flakes ready. If using other vegetables (carrots, mushrooms), slice them thinly now.",
      "Cook noodles: Add 200g ramen noodles (or other thin noodles) to the simmering broth. Cook according to package directions (usually 4-5 minutes) until tender but still slightly chewy. Don't overcook.",
      "Add vegetables: In the last minute of cooking, add spinach and 1 tsp chili flakes to the broth. Stir until spinach wilts. The noodles should be done at the same time.",
      "Assemble bowls: Divide noodles and broth between 2 bowls. Cut soft-boiled eggs in half lengthwise and place 1 egg (2 halves) on top of each bowl. The yolk should be runny.",
      "Serve: Serve immediately while hot. The broth should be flavorful, the noodles should be tender, and the egg should be perfectly soft-boiled. Add extra soy sauce or chili flakes to taste."
    ] },
    sauerbraten: { title: "Sauerbraten", description: "Slow-braised roast.", steps: [
      "Marinate meat: Place 800g beef roast in a large non-reactive bowl or zip-top bag. Mix 150ml vinegar, 1 sliced onion, 1 sliced carrot, 2 bay leaves, 5 peppercorns, and 2 cloves. Pour over meat. Cover and marinate in refrigerator for 12-24 hours, turning occasionally.",
      "Prepare for cooking: Remove meat from marinade and pat completely dry with paper towels. Reserve the marinade (you'll use it later). Season meat generously with salt and pepper on all sides.",
      "Brown meat: Heat 2 tbsp oil in a large Dutch oven or heavy pot over medium-high heat. Add meat and brown on all sides for 8-10 minutes total until deeply browned. This creates flavor. Remove meat and set aside.",
      "Deglaze: Add reserved marinade (strained) to the pot. Scrape up any browned bits from the bottom. Add 500ml beef broth. Bring to a boil, then reduce heat to low.",
      "Braise: Return meat to pot. Cover tightly and braise on low heat for 2-3 hours, turning occasionally, until meat is very tender and easily pulls apart. The liquid should bubble gently, not boil.",
      "Check doneness: After 2 hours, check if meat is tender by inserting a fork - it should go in easily. If not, continue cooking and check every 30 minutes. The meat should be fork-tender.",
      "Finish and serve: Remove meat and let rest for 10 minutes. Meanwhile, season the sauce with salt and pepper. Slice meat against the grain. Serve with sauce, traditionally with potato dumplings or boiled potatoes. The meat should be tender, flavorful, and the sauce should be rich and tangy."
    ] },
    paella: { title: "Easy Paella", description: "Rice pan with chicken and shrimp.", steps: [
      "Prepare ingredients: Cut 300g chicken breast into 2cm cubes. Peel 200g shrimp (leave tails on if desired). Dice 1 onion and 1 bell pepper. Have 150g frozen peas ready. Measure 400g short-grain rice (Arborio or paella rice).",
      "Brown chicken: Heat 2 tbsp olive oil in a large paella pan or wide skillet over medium-high heat. Add chicken cubes and cook for 5-6 minutes until golden brown on all sides. Remove and set aside.",
      "Cook aromatics: In the same pan, add diced onion and pepper. Cook for 4-5 minutes until softened. Add 2 tbsp tomato paste and stir for 1 minute. Add frozen peas and cook for 1 more minute.",
      "Add rice: Stir in 400g rice until well-coated with oil and vegetables. Toast for 2 minutes, stirring constantly, until rice is translucent around the edges.",
      "Add liquid: Pour in 1 liter of chicken or fish broth. Add a pinch of saffron threads (or 1 tsp paprika if you don't have saffron). Bring to a boil, then reduce heat to low and simmer for 15 minutes without stirring.",
      "Add proteins: After 15 minutes, nestle chicken pieces and shrimp on top of the rice. Cook for another 5-7 minutes until rice is tender, liquid is absorbed, and shrimp are pink and cooked through.",
      "Finish: The rice should be tender but still slightly al dente, and there should be a slight crust on the bottom (socarrat). If rice isn't done, add a splash more broth and cook 2-3 more minutes. Let rest for 5 minutes before serving. Serve directly from the pan."
    ] },
    lentil_stew: { title: "Lentil Stew", description: "Hearty one-pot.", steps: [
      "Prepare ingredients: Rinse 300g brown or green lentils in cold water until water runs clear. Drain well. Dice 1 onion and 1 carrot. Cut 2 potatoes into 2cm cubes. Dice 80g bacon if using.",
      "Sauté base: Heat 2 tbsp oil (or render bacon fat) in a large pot over medium heat. Add diced onion and carrot, cook for 5 minutes until softened. Add bacon if using and cook for 2 more minutes until crispy.",
      "Add lentils: Add rinsed lentils to the pot. Stir to coat with oil. Add 1 liter of chicken or vegetable broth. Bring to a boil, then reduce heat to low.",
      "Simmer: Add potato cubes. Cover and simmer gently for 30-40 minutes, stirring occasionally, until lentils are tender but not mushy and potatoes are soft. The stew should be thick but still soupy.",
      "Check consistency: After 30 minutes, check if lentils are done - they should be tender but still hold their shape. If too thick, add more broth or water. If too thin, continue cooking uncovered for 5-10 minutes.",
      "Season: Add 1-2 tbsp vinegar (this brightens the flavor), salt, and pepper to taste. Stir well. The stew should be hearty, flavorful, and well-seasoned.",
      "Serve: Serve hot in bowls. The lentils should be tender, the vegetables should be soft, and the stew should be thick and comforting. Best enjoyed with crusty bread."
    ] },
    gnocchi_sage: { title: "Gnocchi Sage Butter", description: "Pan pasta in minutes.", steps: [
      "Cook gnocchi: Bring a large pot of well-salted water to a rolling boil. Add 500g gnocchi (fresh or packaged) and cook according to package directions. Fresh gnocchi are done when they float to the surface (usually 2-3 minutes).",
      "Prepare sage: While gnocchi cook, pick 1 handful of fresh sage leaves. Wash and pat completely dry - any water will cause the butter to spatter. Have 80g butter ready.",
      "Melt butter: Heat 80g butter in a large pan over medium heat. Once butter is melted and starting to foam, add sage leaves. Cook for 2-3 minutes until butter is golden brown and sage is crispy. The butter should smell nutty - this is brown butter (beurre noisette).",
      "Drain gnocchi: As soon as gnocchi float to the surface, drain them well. Don't rinse - the starch helps the sauce stick. Add drained gnocchi directly to the pan with butter.",
      "Toss: Toss gnocchi in the brown butter and sage for 1-2 minutes over medium heat until well-coated and slightly crispy on the outside. The gnocchi should be golden and the sage should be crispy.",
      "Finish: Remove from heat. Add 50g grated parmesan and a generous amount of freshly ground black pepper. Toss once more until cheese is melted.",
      "Serve: Serve immediately in warm bowls. The gnocchi should be tender inside, slightly crispy outside, and coated in nutty brown butter. The crispy sage adds texture and flavor. Best eaten right away."
    ] },
    fishsticks_mash: { title: "Fish Sticks & Mash", description: "Kid-friendly combo.", steps: [
      "Prepare potatoes: Peel 800g potatoes and cut into 2-3cm chunks. Place in a large pot and cover with cold, salted water. Bring to a boil and cook for 15-20 minutes until very tender when pierced with a fork.",
      "Cook fish sticks: While potatoes cook, heat oven to 200°C/390°F (or follow package directions). Arrange 10 fish sticks on a baking sheet. Bake for 12-15 minutes, flipping halfway, until golden and crispy. Alternatively, pan-fry according to package directions.",
      "Drain potatoes: When potatoes are tender, drain well and return to the pot. Let steam for 1 minute to remove excess moisture - this makes fluffier mash.",
      "Mash potatoes: Add 40g butter and 150ml warm milk to the potatoes. Mash with a potato masher or fork until smooth and creamy. Don't overmix or they'll become gluey. Add more milk if needed for desired consistency.",
      "Season mash: Add 1/2 tsp salt, 1/4 tsp black pepper, and a pinch of nutmeg. Stir gently to combine. Taste and adjust seasoning. The mash should be smooth, creamy, and well-seasoned.",
      "Prepare peas: If serving with peas, cook 150g frozen peas according to package directions (usually 3-4 minutes in boiling water) until tender. Drain and season with butter and salt.",
      "Serve: Plate mashed potatoes, top with fish sticks, and serve with peas or a side salad. The fish should be crispy, the mash should be creamy, and everything should be hot. A classic comfort meal!"
    ] },
    quiche_lorraine: { title: "Quiche Lorraine", description: "Savory tart.", steps: [
      "Make pastry: In a food processor or bowl, combine 250g flour, 125g cold butter (cubed), and 1 egg. Pulse or mix until it forms a dough. Alternatively, rub butter into flour with your fingers, then add egg. Form into a ball, wrap in plastic, and chill for 30 minutes in the refrigerator.",
      "Cook filling: While pastry chills, dice 150g bacon and 1 onion. Cook bacon in a pan over medium heat for 5-6 minutes until crispy. Remove bacon, add onion to the same pan, and cook for 4-5 minutes until softened. Set aside.",
      "Make custard: In a bowl, whisk together 4 eggs, 200ml cream, 1/2 tsp salt, 1/4 tsp black pepper, and a pinch of nutmeg until smooth and well combined. The mixture should be uniform.",
      "Roll pastry: Preheat oven to 180°C/355°F. Roll out chilled pastry on a floured surface to fit a 23cm tart tin. Carefully line the tin, pressing into corners. Trim excess. Prick the base with a fork.",
      "Blind bake: Line pastry with parchment paper and fill with baking beans or rice. Bake for 15 minutes. Remove paper and beans, bake for 5 more minutes until lightly golden. Remove from oven.",
      "Assemble: Spread bacon and onion mixture over the pastry base. Sprinkle with 100g grated cheese. Pour custard mixture over the top, filling to just below the rim.",
      "Bake: Bake for 35-40 minutes until the custard is set (it should jiggle slightly in the center but be firm around the edges) and the top is golden brown. Let cool for 10 minutes before slicing. Serve warm or at room temperature."
    ] },
    stuffed_peppers: { title: "Stuffed Peppers", description: "Baked rice-beef filling.", steps: [
      "Prepare peppers: Cut the tops off 4 bell peppers (any color). Remove seeds and white membranes from inside. The peppers should be hollow and ready to fill. Save the tops if you want to use them as lids (optional).",
      "Make filling: In a bowl, mix 400g ground beef, 200g cooked rice, 1 diced onion, 2 tbsp tomato paste, 1 tsp salt, 1/2 tsp black pepper, and any desired spices (paprika, oregano). Mix with your hands until well combined.",
      "Fill peppers: Stuff each pepper with the meat-rice mixture, packing it in firmly but not too tightly. Leave about 1cm space at the top. Place filled peppers upright in a baking dish that holds them snugly.",
      "Add liquid: Pour 300ml chicken or vegetable broth into the bottom of the baking dish (around the peppers, not inside them). This creates steam and keeps them moist. Cover tightly with foil.",
      "Bake: Preheat oven to 180°C/355°F. Bake covered for 35-40 minutes until peppers are tender and meat is cooked through (internal temperature 75°C/165°F).",
      "Uncover and brown: Remove foil. If desired, sprinkle tops with additional cheese. Bake uncovered for 5-10 more minutes until tops are slightly browned and any cheese is melted.",
      "Serve: Remove from oven and let rest for 5 minutes. The peppers should be tender, the filling should be cooked through, and the dish should be hot. Serve with the cooking liquid spooned over if desired."
    ] },
    ratatouille: { title: "Quick Ratatouille", description: "Vegetable stew.", steps: [
      "Prepare vegetables: Dice 2 zucchini, 1 bell pepper, and 3 tomatoes into 2cm cubes. Try to make them similar sizes for even cooking. Dice 1 onion. Mince 2 cloves of garlic.",
      "Sauté aromatics: Heat 2 tbsp olive oil in a large pot or Dutch oven over medium heat. Add diced onion and cook for 4-5 minutes until softened. Add minced garlic and cook for 1 more minute until fragrant.",
      "Add vegetables: Add diced zucchini, pepper, and tomatoes to the pot. Stir to combine. Season with 1 tsp salt, 1/2 tsp black pepper, and 1 tsp dried herbs (herbes de Provence, oregano, or basil).",
      "Simmer: Reduce heat to low. Cover and simmer gently for 20-25 minutes, stirring occasionally, until vegetables are tender but not mushy. The tomatoes should break down and create a sauce.",
      "Check consistency: After 20 minutes, check if vegetables are done - they should be soft but still hold their shape. If there's too much liquid, remove lid and cook for 5 more minutes to reduce. If too dry, add a splash of water.",
      "Finish: Taste and adjust seasoning. The ratatouille should be flavorful, with vegetables that are tender but not overcooked. Stir in 1 more tbsp olive oil at the end for richness.",
      "Serve: Serve hot as a side dish or main course. Traditionally served with crusty bread or over rice. Can also be served cold as a salad. The vegetables should be well-cooked but still have some texture."
    ] },
    sheetpan_salmon: { title: "Sheet-Pan Salmon", description: "One tray meal.", steps: [
      "Preheat oven: Preheat oven to 200°C/390°F. Line a large baking sheet with parchment paper or foil for easy cleanup.",
      "Prepare vegetables: Cut 600g potatoes into 2cm chunks. Cut 300g broccoli into florets. Toss both with 3 tbsp olive oil, 1 tsp salt, and 1/2 tsp black pepper until evenly coated.",
      "Roast vegetables: Spread vegetables in a single layer on the prepared baking sheet. Roast for 15 minutes until potatoes are starting to soften and broccoli is bright green. Stir halfway through.",
      "Prepare salmon: While vegetables roast, pat 4 salmon fillets dry with paper towels. Rub with 1 tbsp lemon juice, 1/2 tsp salt, and 1/4 tsp black pepper. Cut 1 lemon into thin slices.",
      "Add salmon: After 15 minutes, move vegetables to make space. Place salmon fillets on the baking sheet, skin-side down if they have skin. Place lemon slices on top of salmon.",
      "Finish baking: Return to oven and bake for another 12-15 minutes until salmon is just cooked through (it should flake easily with a fork) and vegetables are tender. The salmon should be opaque but still moist.",
      "Serve: Remove from oven. The salmon should be perfectly cooked, the vegetables should be tender, and everything should be well-seasoned. Serve immediately on the baking sheet or transfer to plates. Squeeze fresh lemon over before serving."
    ] },
    tofu_stirfry: { title: "Tofu Veggie Stir-Fry", description: "Light Asian-style dish.", steps: [
      "Prepare tofu: Cut 300g firm tofu into 2cm cubes. Pat completely dry with paper towels - this is important for crispy tofu. Heat 2 tbsp oil in a large pan or wok over high heat.",
      "Sear tofu: Add tofu cubes to the hot oil. Cook for 4-5 minutes, turning occasionally, until golden brown and crispy on all sides. Don't move them too much - let them develop a crust. Remove and set aside.",
      "Prepare vegetables: While tofu cooks, cut 200g broccoli into small florets. Slice 1 carrot into thin matchsticks. Mince 2 cloves of garlic and grate 1 thumb-sized piece of fresh ginger.",
      "Stir fry vegetables: Add 1 more tbsp oil to the pan. Add broccoli and carrot. Stir-fry for 3-4 minutes over high heat until bright green and slightly tender but still crisp.",
      "Add aromatics: Add minced garlic and grated ginger. Stir-fry for 30 seconds until fragrant. Be careful not to burn the garlic.",
      "Combine: Return tofu to the pan. Add 3 tbsp soy sauce. Stir-fry everything together for 2-3 more minutes until well combined and heated through. The sauce should coat everything.",
      "Serve: Serve immediately over steamed rice. Sprinkle with sesame seeds if desired. The tofu should be crispy, the vegetables should be crisp-tender, and everything should be well-seasoned and hot."
    ] },
    poke_bowl: { title: "Quick Poke Bowl", description: "No-cook assembly.", steps: [
      "Cook rice: Cook 300g sushi rice or short-grain rice according to package directions. Once cooked, spread on a baking sheet and let cool to room temperature (about 15 minutes). The rice should be slightly warm, not hot.",
      "Prepare salmon: Cut 250g fresh, sushi-grade salmon into 2cm cubes. In a small bowl, mix salmon with 2 tbsp soy sauce and 1 tbsp sesame oil. Let marinate for 10-15 minutes in the refrigerator while you prepare other ingredients.",
      "Prepare vegetables: Cut 1 avocado in half, remove pit, and cube the flesh. Slice 1/2 cucumber into thin rounds or matchsticks. Have any other desired vegetables ready (edamame, radish, etc.).",
      "Assemble bowls: Divide cooled rice between 2 bowls. Top with marinated salmon cubes, arranging them attractively. Add avocado cubes and cucumber slices around the salmon.",
      "Add toppings: Drizzle with additional soy sauce and sesame oil if desired. Add any other toppings like seaweed, sesame seeds, or pickled ginger.",
      "Finish: Cut 1 lime into wedges. Serve immediately with lime wedges on the side. The rice should be at room temperature, the salmon should be fresh and marinated, and everything should be colorful and appealing.",
      "Serve: Best eaten immediately while fresh. Squeeze lime over before eating. The bowl should be a mix of textures and flavors - fresh, light, and satisfying."
    ] },
    taco_salad: { title: "Taco Salad", description: "All the flavor, no shells.", steps: [
      "Cook beef: Heat 2 tbsp oil in a large pan over medium-high heat. Add 300g ground beef and cook, breaking it up with a spoon, for 5-6 minutes until browned. Add 1 tbsp chili flakes and 1 tbsp paprika. Stir and cook for 1 more minute. Drain excess fat if needed.",
      "Add beans: Drain 1 can of beans and add to the pan with the beef. Stir and cook for 2-3 minutes until heated through. Keep warm while you prepare the salad.",
      "Prepare vegetables: Wash and chop 1 head of lettuce into bite-sized pieces. Dice 2 tomatoes. If using corn, drain 1 can or use fresh corn kernels. Have 1 bell pepper diced if desired.",
      "Make dressing: In a small bowl, whisk together 100g yogurt, juice of 1 lime, 1/2 tsp salt, and 1/4 tsp black pepper. Mix until smooth. Adjust to taste.",
      "Assemble salad: In a large bowl, combine lettuce, tomatoes, and any other vegetables. Add warm beef and bean mixture on top. Toss gently if desired, or leave layered.",
      "Add toppings: Sprinkle 100g shredded cheese over the top. Drizzle with yogurt-lime dressing. Add any other desired toppings (sour cream, avocado, jalapeños, etc.).",
      "Serve: Serve immediately while the beef is still warm. The salad should be a mix of warm and cold, crunchy and soft. Best enjoyed fresh - the lettuce will wilt if left too long."
    ] },
    kaiserschmarrn: { title: "Kaiserschmarrn", description: "Fluffy torn pancake.", steps: [
      "Separate eggs: Carefully separate 4 eggs, placing whites in a large clean bowl and yolks in a medium bowl. Make sure no yolk gets into the whites, or they won't whip properly.",
      "Whip egg whites: Using an electric mixer or whisk, whip the egg whites on high speed until they form stiff peaks (about 3-5 minutes). The whites should hold their shape when you lift the whisk. Set aside.",
      "Mix yolks: To the egg yolks, add 200g flour, 250ml milk, and 60g sugar. Whisk until smooth and well combined. The mixture should be thick but pourable.",
      "Fold in whites: Gently fold the whipped egg whites into the yolk mixture using a spatula. Use a cutting and folding motion - don't stir or you'll deflate the whites. Mix until just combined, with some white streaks remaining.",
      "Cook pancake: Heat 50g butter in a large non-stick pan (at least 28cm) over medium heat. Pour in all the batter. Cook for 4-5 minutes until the bottom is golden brown and the top is starting to set.",
      "Tear and flip: Using two spatulas, tear the pancake into large pieces and flip them over. Don't worry about perfect pieces - the torn look is traditional. Cook for another 3-4 minutes until both sides are golden brown.",
      "Caramelize and serve: Add 1 more tbsp butter and 1 tbsp sugar. Toss the pieces gently to caramelize slightly. The pancake should be fluffy, golden, and slightly sweet. Serve immediately, dusted with powdered sugar. Best eaten hot!"
    ] },
    roast_chicken_tray: { title: "Tray-Bake Chicken", description: "Sheet-pan dinner.", steps: [
      "Preheat oven: Preheat oven to 200°C/390°F. Line a large baking sheet with parchment paper or foil for easy cleanup.",
      "Prepare chicken: Pat 4 chicken pieces (breasts or thighs) dry with paper towels. Rub with 2 tbsp olive oil, 1 tsp salt, 1/2 tsp black pepper, and 1 tbsp paprika. Make sure all sides are coated. Let sit for 10 minutes at room temperature.",
      "Prepare vegetables: Cut 800g potatoes into 3cm chunks. Cut 2 onions into wedges. Toss both with 2 tbsp olive oil, 1/2 tsp salt, and 1/4 tsp black pepper until evenly coated.",
      "Arrange on tray: Spread vegetables in a single layer on the prepared baking sheet. Place chicken pieces on top of the vegetables, skin-side up if using pieces with skin.",
      "Roast: Place in preheated oven and roast for 40-45 minutes, turning the chicken pieces once halfway through (after 20 minutes). The chicken should be golden brown and cooked through (internal temperature 75°C/165°F).",
      "Check doneness: After 40 minutes, check if chicken is done - juices should run clear, not pink. Vegetables should be tender and starting to caramelize. If needed, cook 5 more minutes.",
      "Serve: Remove from oven and let rest for 5 minutes. The chicken should be juicy, the vegetables should be tender and well-seasoned, and everything should be golden brown. Serve directly from the pan or transfer to a platter."
    ] },
    overnight_oats: { title: "Overnight Oats", description: "Breakfast that waits.", steps: [
      "Measure ingredients: In a jar or container with a lid, combine 1 cup (100g) rolled oats with 200g yogurt (or milk, or a combination). Use a container that holds at least 500ml and has a tight-fitting lid.",
      "Add flavorings: Stir in 1 tbsp honey (or maple syrup) and 1 tsp cinnamon until well combined. You can also add a pinch of salt to enhance the flavor.",
      "Add fruits: Add 150g fresh or frozen berries, or 1 sliced banana. Mix gently to distribute. If using frozen berries, they'll thaw overnight and add extra liquid.",
      "Mix well: Stir everything together until the oats are fully moistened and the ingredients are well distributed. The mixture should be fairly liquid at this point - the oats will absorb the liquid overnight.",
      "Chill: Seal the jar tightly and refrigerate for at least 4 hours, preferably overnight (8-12 hours). The oats need time to soften and absorb the liquid.",
      "Check consistency: In the morning, check the consistency. It should be thick and creamy, like pudding. If it's too thick, add a splash of milk. If too thin, add more oats and let sit for 30 minutes.",
      "Serve: Top with 2 tbsp chopped nuts, additional fresh fruits, or a drizzle of honey. Serve cold directly from the jar or transfer to a bowl. The oats should be soft, creamy, and ready to eat - no cooking required!"
    ] },
    nachos_supreme: { title: "Sheet-Pan Nachos", description: "Party snack.", steps: [
      "Preheat oven: Preheat oven to 180°C/355°F. Line a large baking sheet with parchment paper or foil for easy cleanup.",
      "Cook beef: Heat 2 tbsp oil in a pan over medium-high heat. Add 250g ground beef and cook, breaking it up, for 5-6 minutes until browned. Add 1 tbsp chili flakes and 1 tbsp paprika. Stir and cook for 1 more minute. Drain excess fat and keep warm.",
      "Prepare toppings: Drain 1 can of beans. Dice 1 bell pepper and 2 tomatoes. Have 200g shredded cheese ready. Prepare any other desired toppings (jalapeños, olives, etc.).",
      "Layer nachos: Spread 1 large bag of tortilla chips in a single layer on the prepared baking sheet. Scatter cooked beef and drained beans evenly over the chips. Add diced pepper and tomatoes.",
      "Add cheese: Sprinkle shredded cheese generously over everything. Make sure to cover the chips well - the cheese helps hold everything together.",
      "Bake: Place in preheated oven and bake for 8-10 minutes until cheese is melted and bubbly. Watch carefully - chips can burn quickly. The cheese should be fully melted and golden in spots.",
      "Serve: Remove from oven immediately. Serve hot directly from the pan with salsa, sour cream, guacamole, or yogurt on the side. The nachos should be crispy, cheesy, and loaded with toppings. Best eaten immediately while the cheese is still gooey!"
    ] }
  }
};
