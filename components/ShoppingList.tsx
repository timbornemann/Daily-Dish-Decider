import React, { useState } from 'react';
import { Check, Plus, Trash2, ShoppingBag, ArrowRight } from 'lucide-react';
import { ShoppingItem, Ingredient } from '../types';

interface ShoppingListProps {
  items: ShoppingItem[];
  onUpdate: (items: ShoppingItem[]) => void;
  onMoveToPantry: (items: Ingredient[]) => void;
}

export const ShoppingList: React.FC<ShoppingListProps> = ({ items, onUpdate, onMoveToPantry }) => {
  const [inputValue, setInputValue] = useState('');

  const handleAddItem = () => {
    if (!inputValue.trim()) return;
    const newItem: ShoppingItem = {
      id: Date.now().toString(),
      name: inputValue,
      category: 'General',
      checked: false
    };
    onUpdate([...items, newItem]);
    setInputValue('');
  };

  const toggleCheck = (id: string) => {
    onUpdate(items.map(item => 
      item.id === id ? { ...item, checked: !item.checked } : item
    ));
  };

  const deleteItem = (id: string) => {
    onUpdate(items.filter(i => i.id !== id));
  };

  const handleCheckout = () => {
    const purchased = items.filter(i => i.checked);
    if (purchased.length === 0) return;

    // Convert to pantry items
    const pantryItems: Ingredient[] = purchased.map(i => ({
      id: `pantry-${Date.now()}-${i.id}`,
      name: i.name,
      quantity: '1',
      category: i.category,
    }));

    onMoveToPantry(pantryItems);
    // Remove checked items from list
    onUpdate(items.filter(i => !i.checked));
  };

  return (
    <div className="flex flex-col h-full bg-gray-50 p-4 pb-24 overflow-y-auto no-scrollbar">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold text-gray-800">Shopping List</h2>
        {items.filter(i => i.checked).length > 0 && (
          <button 
            onClick={handleCheckout}
            className="text-sm bg-green-500 text-white px-3 py-1 rounded-full flex items-center gap-1 shadow-sm hover:bg-green-600 transition"
          >
            Checkout <ArrowRight size={14} />
          </button>
        )}
      </div>

      <div className="bg-white p-2 rounded-xl shadow-sm mb-6 flex gap-2">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleAddItem()}
          placeholder="Add item..."
          className="flex-1 px-4 py-2 focus:outline-none"
        />
        <button 
          onClick={handleAddItem}
          className="bg-gray-900 text-white p-2 rounded-lg"
        >
          <Plus size={20} />
        </button>
      </div>

      {items.length === 0 ? (
        <div className="flex flex-col items-center justify-center h-64 text-gray-400">
          <ShoppingBag size={48} className="mb-2 opacity-50" />
          <p>Your shopping list is clear.</p>
        </div>
      ) : (
        <div className="space-y-2">
          {items.map(item => (
            <div 
              key={item.id} 
              className={`flex items-center justify-between p-3 rounded-lg border transition-all ${
                item.checked 
                  ? 'bg-gray-100 border-gray-200 opacity-60' 
                  : 'bg-white border-gray-100 shadow-sm'
              }`}
            >
              <div className="flex items-center gap-3 overflow-hidden">
                <button
                  onClick={() => toggleCheck(item.id)}
                  className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-colors ${
                    item.checked 
                      ? 'bg-brand-500 border-brand-500 text-white' 
                      : 'border-gray-300 hover:border-brand-400'
                  }`}
                >
                  {item.checked && <Check size={14} />}
                </button>
                <span className={`truncate ${item.checked ? 'line-through text-gray-500' : 'text-gray-800'}`}>
                  {item.name}
                </span>
              </div>
              <button 
                onClick={() => deleteItem(item.id)}
                className="text-gray-400 hover:text-red-500 p-1"
              >
                <Trash2 size={16} />
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};