
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

  // Discover Filters
  filter_meal_type: "Meal",
  filter_meal_breakfast: "Breakfast",
  filter_meal_lunch: "Lunch",
  filter_meal_dinner: "Dinner",
  
  filter_temp: "Temp",
  filter_temp_warm: "Warm",
  filter_temp_cold: "Cold",
  
  filter_diet: "Diet",
  filter_diet_all: "All",
  filter_diet_vegan: "Vegan",
  filter_diet_vegetarian: "Veggie",
  
  filter_ignore_pantry: "Ignore Pantry",


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
  instead_of: "was",

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
    shallot: "Shallot", leek: "Leek", spring_onion: "Spring Onion", zucchini_noodles: "Zucchini Noodles",
    blueberry: "Blueberry",
    chives: "Chives",
    radish: "Radish",
    cress: "Cress",

    // Dairy
    milk: "Milk", egg: "Egg", butter: "Butter", cheese: "Cheese", yogurt: "Yogurt",
    cream: "Cream", parmesan: "Parmesan", mozzarella: "Mozzarella", cheddar: "Cheddar",
    sour_cream: "Sour Cream", cottage_cheese: "Cottage Cheese", almond_milk: "Almond Milk",
    oat_milk: "Oat Milk", cream_cheese: "Cream Cheese",
    buttermilk: "Buttermilk", creme_fraiche: "Crème Fraîche", pecorino: "Pecorino",
    grana_padano: "Grana Padano", gouda: "Gouda", feta: "Feta",
    vegan_butter: "Vegan Butter",

    // Meat
    chicken_breast: "Chicken Breast", ground_beef: "Ground Beef", bacon: "Bacon",
    salmon: "Salmon", sausage: "Sausage", tofu: "Tofu", steak: "Steak",
    pork_chop: "Pork Chop", turkey: "Turkey", ham: "Ham", salami: "Salami",
    prosciutto: "Prosciutto", shrimp: "Shrimp", tuna: "Tuna",
    ground_turkey: "Ground Turkey",

    // Bakery
    bread: "Bread", toast: "Toast", bagel: "Bagel", tortilla: "Tortilla",
    bun: "Bun", pita: "Pita Bread", croissant: "Croissant", roll: "Roll", pizza_dough: "Pizza Dough",

    // Pantry
    rice: "Rice", pasta: "Pasta", flour: "Flour", sugar: "Sugar", olive_oil: "Olive Oil",
    veg_oil: "Vegetable Oil", canned_tomato: "Canned Tomatoes", bean: "Beans",
    lentil: "Lentils", quinoa: "Quinoa", couscous: "Couscous", oat: "Oats",
    cereal: "Cereal", chicken_broth: "Chicken Broth", beef_broth: "Beef Broth",
    tomato_paste: "Tomato Paste", honey: "Honey", maple_syrup: "Maple Syrup",
    peanut_butter: "Peanut Butter", jam: "Jam", nutella: "Nutella", baking_powder: "Baking Powder", yeast: "Yeast",
    brown_sugar: "Brown Sugar", cornstarch: "Cornstarch", vegetable_broth: "Vegetable Broth",
    bouillon: "Bouillon", coconut_oil: "Coconut Oil", applesauce: "Applesauce",
    flaxseed: "Flaxseed", rice_noodles: "Rice Noodles", gnocchi: "Gnocchi", tomato_sauce: "Tomato Sauce",
    vanilla_extract: "Vanilla Extract", baking_soda: "Baking Soda", cocoa_powder: "Cocoa Powder",
    chocolate_chips: "Chocolate Chips", vanilla_sugar: "Vanilla Sugar", powdered_sugar: "Powdered Sugar",
    apple_sauce: "Apple Sauce",

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

  // Singular/Plural Variants (ID -> [Variant1, Variant2...])
  ingredient_variants: {
    egg: ["Eggs"], // Main is "Egg"
    apple: ["Apples"],
    onion: ["Onions"],
    mushroom: ["Mushrooms"],
    potato: ["Potatoes"],
    carrot: ["Carrots"],
    tomato: ["Tomatoes"]
  }
};
