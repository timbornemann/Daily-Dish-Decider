
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
import { RecipeCreator } from './components/RecipeCreator';
import { RecipeBook } from './components/RecipeBook';
import { translations } from './translations';
import { checkForExpiry } from './services/notifications';

const App: React.FC = () => {
  // State
  const [view, setView] = useState<AppView>(AppView.SWIPE);
  const [pantry, setPantry] = useState<Ingredient[]>([]);
  const [shoppingList, setShoppingList] = useState<ShoppingItem[]>([]);
  const [likedRecipes, setLikedRecipes] = useState<Recipe[]>([]);
  const [userRecipes, setUserRecipes] = useState<Recipe[]>([]);
  const [preferences, setPreferences] = useState<UserPreferences>(StorageService.getPreferences());
  
  // View States
  const [selectedRecipe, setSelectedRecipe] = useState<Recipe | null>(null);
  const [isCreatingRecipe, setIsCreatingRecipe] = useState(false);

  // Initialize Data
  useEffect(() => {
    setPantry(StorageService.getPantry());
    setShoppingList(StorageService.getShoppingList());
    setLikedRecipes(StorageService.getLikedRecipes());
    setUserRecipes(StorageService.getUserRecipes());
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

  // Ensure valid language
  const currentLang = preferences.language === 'de' ? 'de' : 'en';

  // Notification Check Side Effect
  useEffect(() => {
    if (preferences.notificationsEnabled && pantry.length > 0) {
        checkForExpiry(pantry, translations[currentLang]);
    }
  }, [pantry, preferences.notificationsEnabled, currentLang]);

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

  const updateUserRecipes = (recipes: Recipe[]) => {
    setUserRecipes(recipes);
    StorageService.saveUserRecipes(recipes);
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
    setUserRecipes([]);
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
    console.log("Disliked", recipe.title);
  };

  const handleToggleLike = (recipe: Recipe) => {
    const exists = likedRecipes.find(r => r.id === recipe.id);
    if (exists) {
      updateLikedRecipes(likedRecipes.filter(r => r.id !== recipe.id));
    } else {
      updateLikedRecipes([...likedRecipes, recipe]);
    }
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
    // Optional: Switch view, but staying on detail might be better UX
    // setView(AppView.SHOPPING);
  };

  const handleWinnerSelected = (recipe: Recipe) => {
    setSelectedRecipe(recipe);
  };

  const handleSaveNewRecipe = (recipe: Recipe) => {
      updateUserRecipes([...userRecipes, recipe]);
      setIsCreatingRecipe(false);
      
      // Check if ingredients exist in pantry, if not add them? 
      const newIngredients: Ingredient[] = [];
      recipe.ingredients.forEach(ing => {
          const exists = pantry.some(p => p.name.toLowerCase() === ing.name.toLowerCase());
          if (!exists) {
              newIngredients.push({
                  id: `pantry-auto-${Date.now()}-${Math.random()}`,
                  name: ing.name,
                  category: 'General', 
                  quantity: '1',
              });
          }
      });
      
      if (newIngredients.length > 0) {
          updatePantry([...pantry, ...newIngredients]);
      }
  };

  const handleDeleteRecipe = (recipe: Recipe) => {
    if (recipe.source === 'user') {
        const updated = userRecipes.filter(r => r.id !== recipe.id);
        updateUserRecipes(updated);
        
        // Also remove from likes if it was liked
        if (likedRecipes.some(r => r.id === recipe.id)) {
            updateLikedRecipes(likedRecipes.filter(r => r.id !== recipe.id));
        }
    }
  };

  // Render Logic
  const renderContent = () => {
    if (isCreatingRecipe) {
        return (
            <RecipeCreator 
                onSave={handleSaveNewRecipe}
                onCancel={() => setIsCreatingRecipe(false)}
                lang={currentLang}
                pantryItems={pantry}
            />
        );
    }

    // If Detail view is active (overlay)
    if (selectedRecipe) {
      return (
        <RecipeDetail 
          recipe={selectedRecipe} 
          onBack={() => setSelectedRecipe(null)}
          pantryItems={pantry}
          onAddToShoppingList={handleAddMissingToShopping}
          lang={currentLang}
        />
      );
    }

    switch (view) {
      case AppView.PANTRY:
        return (
            <Pantry 
                items={pantry} 
                onUpdate={updatePantry} 
                onAddToShopping={handleAddMissingToShopping}
                lang={currentLang} 
            />
        );
      case AppView.COOKBOOK:
        return (
          <RecipeBook 
            userRecipes={userRecipes}
            likedRecipes={likedRecipes}
            onToggleLike={handleToggleLike}
            onViewDetail={(r) => setSelectedRecipe(r)}
            onDeleteRecipe={handleDeleteRecipe}
            onCreateRecipe={() => setIsCreatingRecipe(true)}
            lang={currentLang}
          />
        );
      case AppView.SHOPPING:
        return <ShoppingList items={shoppingList} onUpdate={updateShoppingList} onMoveToPantry={handleMoveToPantry} lang={currentLang} />;
      case AppView.FAVORITES:
        return (
          <SuddenDeath 
            recipes={likedRecipes} 
            onWinnerSelected={handleWinnerSelected} 
            onRestart={() => setView(AppView.SWIPE)}
            lang={currentLang}
          />
        );
      case AppView.SETTINGS:
        return (
          <Settings 
            preferences={preferences} 
            onUpdatePreferences={updatePreferences}
            onClearData={handleClearData}
            lang={currentLang}
          />
        );
      case AppView.SWIPE:
      default:
        return (
          <SwipeDeck 
            pantryItems={pantry}
            userRecipes={userRecipes}
            onLike={handleLike} 
            onDislike={handleDislike}
            onViewDetail={(r) => setSelectedRecipe(r)}
            onCreateRecipe={() => setIsCreatingRecipe(true)}
            lang={currentLang}
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
        {!selectedRecipe && !isCreatingRecipe && (
          <Navigation 
            currentView={view} 
            onChange={setView} 
            badgeCount={shoppingList.filter(i => !i.checked).length}
            lang={currentLang}
          />
        )}
      </div>
    </HashRouter>
  );
};

export default App;
