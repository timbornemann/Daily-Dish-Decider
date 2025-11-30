import React, { useState } from 'react';
import { Plus, Minus, Trash2, AlertCircle, Calendar, Clock, Scale, ShoppingBag } from 'lucide-react';
import { Ingredient } from '../types';

interface PantryProps {
  items: Ingredient[];
  onUpdate: (items: Ingredient[]) => void;
}

// Standard items to be always available for quick add
const COMMON_PANTRY_ITEMS: Record<string, string[]> = {
  'Produce': ['Onions', 'Garlic', 'Potatoes', 'Carrots', 'Tomatoes', 'Lemons', 'Bananas', 'Spinach', 'Peppers'],
  'Dairy': ['Milk', 'Eggs', 'Butter', 'Cheese', 'Yogurt', 'Cream', 'Parmesan'],
  'Meat': ['Chicken Breast', 'Ground Beef', 'Bacon', 'Salmon', 'Sausages', 'Tofu'],
  'Pantry': ['Rice', 'Pasta', 'Flour', 'Sugar', 'Olive Oil', 'Vegetable Oil', 'Canned Tomatoes', 'Beans', 'Lentils', 'Bread'],
  'Spices': ['Salt', 'Pepper', 'Cumin', 'Paprika', 'Oregano', 'Basil', 'Soy Sauce', 'Vinegar'],
  'General': ['Coffee', 'Tea', 'Snacks', 'Water']
};

export const Pantry: React.FC<PantryProps> = ({ items, onUpdate }) => {
  const [newItemName, setNewItemName] = useState('');
  const [newItemQuantity, setNewItemQuantity] = useState('1');
  const [newItemExpiry, setNewItemExpiry] = useState('');
  const [newItemCategory, setNewItemCategory] = useState('General');

  const categories = ['Produce', 'Meat', 'Dairy', 'Pantry', 'Spices', 'General'];

  const handleAdd = () => {
    if (!newItemName.trim()) return;
    const newItem: Ingredient = {
      id: Date.now().toString(),
      name: newItemName,
      quantity: newItemQuantity || '1',
      category: newItemCategory,
      expiryDate: newItemExpiry || undefined
    };
    onUpdate([...items, newItem]);
    
    // Reset fields
    setNewItemName('');
    setNewItemQuantity('1');
    setNewItemExpiry('');
  };

  const handleQuickAdd = (name: string, category: string) => {
    // Check if it already exists to just increment
    const existingItem = items.find(i => i.name.toLowerCase() === name.toLowerCase());
    if (existingItem) {
      updateQuantity(existingItem.id, 1);
    } else {
      const newItem: Ingredient = {
        id: Date.now().toString(),
        name: name,
        quantity: '1',
        category: category,
      };
      onUpdate([...items, newItem]);
    }
  };

  const handleRemove = (id: string) => {
    onUpdate(items.filter(i => i.id !== id));
  };

  const updateQuantity = (id: string, delta: number) => {
    onUpdate(items.map(i => {
      if (i.id === id) {
        // Try to parse number, default to 1 if NaN
        let currentQty = parseInt(i.quantity);
        if (isNaN(currentQty)) currentQty = 1;
        
        const newQty = Math.max(0, currentQty + delta);
        
        // Return null to signal removal in the filter step (handled in a separate wrapper if needed, 
        // but here we map then filter in the parent or handle 0 logic)
        return { ...i, quantity: newQty.toString() };
      }
      return i;
    }).filter(i => parseInt(i.quantity) > 0)); // Auto-remove if 0
  };

  const handleOpenProduct = (id: string) => {
    onUpdate(items.map(i => {
      if (i.id === id) {
        return { ...i, openedDate: new Date().toISOString().split('T')[0], daysGoodAfterOpen: 3 }; 
      }
      return i;
    }));
  };

  // Helper to determine expiry status color
  const getExpiryStatus = (dateStr?: string) => {
    if (!dateStr) return { color: 'text-gray-400', label: null, bg: 'bg-gray-100' };
    
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const expiry = new Date(dateStr);
    const diffTime = expiry.getTime() - today.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    if (diffDays < 0) return { color: 'text-red-600', label: 'Expired', bg: 'bg-red-100' };
    if (diffDays <= 3) return { color: 'text-red-500', label: `${diffDays} days left`, bg: 'bg-red-50' };
    if (diffDays <= 7) return { color: 'text-yellow-600', label: 'Expiring soon', bg: 'bg-yellow-50' };
    
    return { color: 'text-green-600', label: null, bg: 'bg-green-50' };
  };

  // Group items by category
  const groupedItems = items.reduce((acc, item) => {
    const cat = item.category || 'General';
    if (!acc[cat]) acc[cat] = [];
    acc[cat].push(item);
    return acc;
  }, {} as Record<string, Ingredient[]>);

  // Get list of standard items that are NOT currently in the pantry for a specific category
  const getMissingStandardItems = (category: string) => {
    const currentNames = new Set(items.map(i => i.name.toLowerCase()));
    const standards = COMMON_PANTRY_ITEMS[category] || [];
    return standards.filter(name => !currentNames.has(name.toLowerCase()));
  };

  return (
    <div className="flex flex-col h-full bg-gray-50 p-4 pb-24 overflow-y-auto no-scrollbar">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">My Pantry</h2>

      {/* Custom Add Form */}
      <div className="bg-white p-4 rounded-xl shadow-sm mb-6 border border-gray-100">
        <div className="flex flex-col gap-3">
            <div className="flex gap-2">
                <input
                    type="text"
                    value={newItemName}
                    onChange={(e) => setNewItemName(e.target.value)}
                    placeholder="Custom item name..."
                    className="flex-1 border border-gray-200 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-brand-500 text-sm"
                />
                <div className="relative w-1/3">
                    <input
                        type="text"
                        value={newItemQuantity}
                        onChange={(e) => setNewItemQuantity(e.target.value)}
                        placeholder="Qty"
                        className="w-full border border-gray-200 rounded-lg pl-8 pr-2 py-2 focus:outline-none focus:ring-2 focus:ring-brand-500 text-sm"
                    />
                    <Scale size={14} className="absolute left-2.5 top-3 text-gray-400" />
                </div>
            </div>

            <div className="flex gap-2 items-center">
                <div className="relative flex-1">
                    <input 
                        type="date" 
                        value={newItemExpiry}
                        onChange={(e) => setNewItemExpiry(e.target.value)}
                        className="w-full border border-gray-200 rounded-lg pl-8 pr-2 py-2 text-sm text-gray-600 focus:outline-none focus:ring-2 focus:ring-brand-500"
                    />
                    <Clock size={14} className="absolute left-2.5 top-3 text-gray-400" />
                </div>
                
                <button 
                    onClick={handleAdd}
                    className="bg-brand-500 text-white p-2 rounded-lg hover:bg-brand-600 transition-colors shadow-sm"
                >
                    <Plus size={20} />
                </button>
            </div>

            <div className="flex gap-2 overflow-x-auto no-scrollbar pt-1">
                {categories.map(c => (
                    <button
                    key={c}
                    onClick={() => setNewItemCategory(c)}
                    className={`text-xs px-3 py-1.5 rounded-full whitespace-nowrap transition-colors border ${
                        newItemCategory === c 
                        ? 'bg-brand-50 text-brand-600 border-brand-200 font-medium' 
                        : 'bg-gray-50 text-gray-500 border-gray-200 hover:bg-gray-100'
                    }`}
                    >
                    {c}
                    </button>
                ))}
            </div>
        </div>
      </div>

      <div className="space-y-6">
        {categories.map((category) => {
           const catItems = groupedItems[category] || [];
           const missingStandard = getMissingStandardItems(category);
           
           if (catItems.length === 0 && missingStandard.length === 0) return null;

           return (
            <div key={category} className="mb-2">
                <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3 ml-1 flex items-center gap-2">
                  {category} 
                  <span className="bg-gray-200 text-gray-600 rounded-full px-1.5 py-0.5 text-[10px]">{catItems.length}</span>
                </h3>
                
                <div className="space-y-3">
                    {/* Active Items */}
                    {catItems.map(item => {
                        const expiryStatus = getExpiryStatus(item.expiryDate);
                        return (
                        <div key={item.id} className="bg-white p-3 rounded-xl shadow-sm border border-gray-100">
                            <div className="flex items-center justify-between mb-2">
                                <p className="font-semibold text-gray-800 truncate flex-1">{item.name}</p>
                                <button 
                                    onClick={() => handleRemove(item.id)}
                                    className="text-gray-300 hover:text-red-500 p-1 transition-colors"
                                >
                                    <Trash2 size={16} />
                                </button>
                            </div>
                            
                            <div className="flex items-center justify-between">
                                {/* Quantity Stepper */}
                                <div className="flex items-center bg-gray-50 rounded-lg border border-gray-200 h-8">
                                    <button 
                                        onClick={() => updateQuantity(item.id, -1)}
                                        className="w-8 h-full flex items-center justify-center text-gray-500 hover:bg-gray-200 hover:text-red-500 rounded-l-lg transition-colors"
                                    >
                                        <Minus size={14} />
                                    </button>
                                    <span className="w-8 text-center text-sm font-bold text-gray-800">{item.quantity}</span>
                                    <button 
                                        onClick={() => updateQuantity(item.id, 1)}
                                        className="w-8 h-full flex items-center justify-center text-gray-500 hover:bg-gray-200 hover:text-green-600 rounded-r-lg transition-colors"
                                    >
                                        <Plus size={14} />
                                    </button>
                                </div>

                                {/* Meta Info */}
                                <div className="flex items-center gap-2 text-xs">
                                     {item.expiryDate && (
                                        <div className={`flex items-center gap-1 px-2 py-1 rounded-md ${expiryStatus.bg} ${expiryStatus.color}`}>
                                            <Clock size={10} />
                                            <span className="font-medium whitespace-nowrap">
                                                {expiryStatus.label || 'Good'}
                                            </span>
                                        </div>
                                    )}
                                    {!item.expiryDate && !item.openedDate && (
                                         <button 
                                            onClick={() => handleOpenProduct(item.id)}
                                            className="text-gray-400 hover:text-brand-500 flex items-center gap-1 transition-colors bg-gray-50 px-2 py-1 rounded-md"
                                          >
                                            <Calendar size={10} /> Open
                                          </button>
                                    )}
                                </div>
                            </div>
                        </div>
                        );
                    })}

                    {/* Quick Add Buttons for Missing Standards */}
                    {missingStandard.length > 0 && (
                        <div className="pt-1">
                            <p className="text-[10px] font-bold text-gray-400 mb-2 uppercase ml-1">Quick Add</p>
                            <div className="flex flex-wrap gap-2">
                                {missingStandard.map(name => (
                                    <button
                                        key={name}
                                        onClick={() => handleQuickAdd(name, category)}
                                        className="text-xs bg-white border border-gray-200 text-gray-500 hover:text-brand-600 hover:border-brand-200 hover:bg-brand-50 px-3 py-1.5 rounded-full transition-all flex items-center gap-1"
                                    >
                                        <Plus size={12} /> {name}
                                    </button>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </div>
           ); 
        })}
      </div>
      
      {items.length === 0 && (
         <div className="mt-8 text-center px-6">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gray-100 text-gray-400 mb-3">
                <ShoppingBag size={24} />
            </div>
            <p className="text-gray-500 text-sm">Start adding items from the Quick Add sections or type your own above!</p>
         </div>
      )}
    </div>
  );
};