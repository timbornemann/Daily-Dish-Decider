import React, { useState, useEffect } from 'react';
import { HashRouter } from 'react-router-dom';
import { StorageService } from './services/storage';
import { Ingredient, ShoppingItem, Recipe, AppView, UserPreferences } from './types';
import { Navigation } from './components/Navigation';
import { Pantry } from './components/Pantry';
import { ShoppingList } from './components/ShoppingList';
import { SwipeDeck } from './components/SwipeDeck';
import { SuddenDeath } from './components/SuddenDeath';
import { RecipeDetail } from './components/RecipeDetail';
import { Settings } from './components/Settings';

const App: React.FC = () => {
  // State
  const [view, setView] = useState<AppView>(AppView.SWIPE);
  const [pantry, setPantry] = useState<Ingredient[]>([]);
  const [shoppingList, setShoppingList] = useState<ShoppingItem[]>([]);
  const [likedRecipes, setLikedRecipes] = useState<Recipe[]>([]);
  const [preferences, setPreferences] = useState<UserPreferences>(StorageService.getPreferences());
  const [selectedRecipe, setSelectedRecipe] = useState<Recipe | null>(null);

  // Initialize Data
  useEffect(() => {
    setPantry(StorageService.getPantry());
    setShoppingList(StorageService.getShoppingList());
    setLikedRecipes(StorageService.getLikedRecipes());
  }, []);

  // Theme Side Effect
  useEffect(() => {
    const root = window.document.documentElement;
    if (preferences.theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [preferences.theme]);

  // Persistence Wrappers
  const updatePantry = (items: Ingredient[]) => {
    setPantry(items);
    StorageService.savePantry(items);
  };

  const updateShoppingList = (items: ShoppingItem[]) => {
    setShoppingList(items);
    StorageService.saveShoppingList(items);
  };

  const updateLikedRecipes = (recipes: Recipe[]) => {
    setLikedRecipes(recipes);
    StorageService.saveLikedRecipes(recipes);
  };

  const updatePreferences = (prefs: UserPreferences) => {
    setPreferences(prefs);
    StorageService.savePreferences(prefs);
  };

  const handleClearData = () => {
    StorageService.clearAll();
    setPantry([]);
    setShoppingList([]);
    setLikedRecipes([]);
    // Keep preferences active (theme, etc) but refresh them just in case
    // setPreferences(StorageService.getPreferences()); 
  };

  // Logic Helpers
  const handleLike = (recipe: Recipe) => {
    // Avoid duplicates
    if (!likedRecipes.find(r => r.id === recipe.id)) {
      updateLikedRecipes([...likedRecipes, recipe]);
    }
  };

  const handleDislike = (recipe: Recipe) => {
    // Could track dislikes to refine alg, ignoring for now
    console.log("Disliked", recipe.title);
  };

  const handleMoveToPantry = (newPantryItems: Ingredient[]) => {
    updatePantry([...pantry, ...newPantryItems]);
  };

  const handleAddMissingToShopping = (itemNames: string[]) => {
    const newItems: ShoppingItem[] = itemNames.map((name, idx) => ({
      id: `shop-auto-${Date.now()}-${idx}`,
      name: name,
      category: 'Recipe Needed',
      checked: false
    }));
    updateShoppingList([...shoppingList, ...newItems]);
    setView(AppView.SHOPPING);
    setSelectedRecipe(null);
  };

  const handleWinnerSelected = (recipe: Recipe) => {
    setSelectedRecipe(recipe);
  };

  // Render Logic
  const renderContent = () => {
    // If Detail view is active (overlay)
    if (selectedRecipe) {
      return (
        <RecipeDetail 
          recipe={selectedRecipe} 
          onBack={() => setSelectedRecipe(null)}
          pantryItems={pantry}
          onAddToShoppingList={handleAddMissingToShopping}
        />
      );
    }

    switch (view) {
      case AppView.PANTRY:
        return <Pantry items={pantry} onUpdate={updatePantry} />;
      case AppView.SHOPPING:
        return <ShoppingList items={shoppingList} onUpdate={updateShoppingList} onMoveToPantry={handleMoveToPantry} />;
      case AppView.FAVORITES:
        return (
          <SuddenDeath 
            recipes={likedRecipes} 
            onWinnerSelected={handleWinnerSelected} 
            onRestart={() => setView(AppView.SWIPE)}
          />
        );
      case AppView.SETTINGS:
        return (
          <Settings 
            preferences={preferences} 
            onUpdatePreferences={updatePreferences}
            onClearData={handleClearData}
          />
        );
      case AppView.SWIPE:
      default:
        return (
          <SwipeDeck 
            pantryItems={pantry} 
            onLike={handleLike} 
            onDislike={handleDislike}
            onViewDetail={(r) => setSelectedRecipe(r)}
          />
        );
    }
  };

  return (
    <HashRouter>
      <div className="h-screen w-screen bg-gray-50 dark:bg-gray-900 flex flex-col font-sans text-gray-900 dark:text-gray-100 overflow-hidden transition-colors duration-200">
        
        {/* Main Content Area */}
        <div className="flex-1 overflow-hidden relative">
          {renderContent()}
        </div>

        {/* Bottom Navigation */}
        {!selectedRecipe && (
          <Navigation 
            currentView={view} 
            onChange={setView} 
            badgeCount={shoppingList.filter(i => !i.checked).length}
          />
        )}
      </div>
    </HashRouter>
  );
};

export default App;