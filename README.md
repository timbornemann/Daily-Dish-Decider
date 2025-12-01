# Daily Dish Decider

Daily Dish Decider is a mobile-first web app (Vite + React) that helps you plan what to cook. It combines a Tinder-style swipe flow for recipes, a sudden-death tournament for quick decisions, and pantry/shopping lists with reminders.

## Table of Contents
- [Features](#features)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Environment Variables](#environment-variables)
- [Start Development](#start-development)
- [Key Components](#key-components)
- [Data & Persistence](#data--persistence)
- [Translations](#translations)
- [Notifications](#notifications)
- [Recommendation Logic](#recommendation-logic)
- [Project Structure](#project-structure)
- [Useful Scripts](#useful-scripts)

## Features
- **Swipe deck:** Browse recipe suggestions as a stack of cards (like/dislike) and open details.
- **Sudden-death mode:** Pit favorites against each other until one winner remains.
- **Recipe book & creation:** Create, edit, and favorite your own recipes.
- **Pantry management:** Track pantry items and automatically push missing ingredients to the shopping list.
- **Shopping list:** Check off items or move them into the pantry; manage quantities and categories.
- **Settings:** User profiles can switch language (German/English), theme (light/dark), and notifications.

## Prerequisites
- Node.js 20+ (includes npm)
- Network access for dependency download

## Installation
1. Clone the repository and change into the project directory.
2. Install dependencies:
   ```bash
   npm install
   ```
3. Configure the local environment (see [Environment Variables](#environment-variables)).

## Environment Variables
Create a `.env.local` in the project root and set your Gemini API key:
```
GEMINI_API_KEY=your_secret_key
```
The app reads the key via `import.meta.env` for AI-assisted recipes and recommendations.

## Start Development
1. Launch the dev server with hot reloading:
   ```bash
   npm run dev
   ```
2. The default port is 5173; adjust with `--port` if needed (e.g., `npm run dev -- --host --port 4173`).
3. Open the app in your browser at `http://localhost:5173` (or the chosen port).

## Key Components
- **`App.tsx`**: Wires all views, manages global state (views, pantry, shopping, recipes, user preferences), and persists changes via `StorageService` in browser storage.
- **`components/SwipeDeck.tsx`**: Card deck for recipe suggestions with like/dislike and detail navigation.
- **`components/SuddenDeath.tsx`**: Pairwise knockout tournament for favorites.
- **`components/Pantry.tsx` & `components/ShoppingList.tsx`**: Manage pantry and shopping lists, including moving missing ingredients.
- **`components/RecipeCreator.tsx` & `components/RecipeBook.tsx`**: Create, view, like, or delete custom recipes.
- **`components/Settings.tsx`**: Language, theme, notifications, and data reset.
- **`services/storage.ts`**: Encapsulates localStorage read/write for pantry, shopping list, preferences, and recipes.

## Data & Persistence
- **Types** are defined in `types.ts` (e.g., `Ingredient`, `ShoppingItem`, `Recipe`, `UserPreferences`).
- **Local storage**: All user objects are stored in the browser via `StorageService`; `clearAll()` wipes pantry, shopping, likes, and user recipes.
- **Initialization**: On load, `App.tsx` reads pantry, shopping list, likes, and user recipes from storage and sets the theme state (light/dark) according to preferences.

## Translations
- Texts are handled via `translations.ts` and the JSON files in `locales/`.
- Languages: German (`de`) and English (`en`). The active language is controlled through `preferences.language` in `UserPreferences` and enforced in `App.tsx`.

## Notifications
- `services/notifications.ts` checks pantry items with expiration dates and displays reminders when `preferences.notificationsEnabled` is active.
- The check is triggered in `App.tsx` via a `useEffect` as soon as pantry data is available.

## Recommendation Logic
- `services/recommendation.ts` updates the taste profile (`tasteProfile`) based on user actions like **Like**, **Dislike**, **View Detail**, or **Cook Winner**.
- The updated score influences future recipe suggestions and is persisted in preferences.

## Project Structure
```
.
├── App.tsx                # Main UI entry point
├── components/            # UI components (Navigation, SwipeDeck, Pantry, Settings, ...)
├── services/              # Storage, recommendation & notifications
├── locales/               # Language files
├── public/                # Static assets
├── index.tsx, index.html  # Vite bootstrap
└── types.ts, translations.ts, Idea.md
```

## Useful Scripts
- `npm run dev` – start the dev server
- `npm run build` – create a production build
- `npm run preview` – locally test the build
