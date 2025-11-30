import React, { useState } from 'react';
import { Plus, Trash2, AlertCircle, Calendar, Clock, Scale } from 'lucide-react';
import { Ingredient } from '../types';

interface PantryProps {
  items: Ingredient[];
  onUpdate: (items: Ingredient[]) => void;
}

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

  const handleRemove = (id: string) => {
    onUpdate(items.filter(i => i.id !== id));
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

  return (
    <div className="flex flex-col h-full bg-gray-50 p-4 pb-24 overflow-y-auto no-scrollbar">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">My Pantry</h2>

      <div className="bg-white p-4 rounded-xl shadow-sm mb-6 border border-gray-100">
        <div className="flex flex-col gap-3">
            {/* Top Row: Name and Qty */}
            <div className="flex gap-2">
                <input
                    type="text"
                    value={newItemName}
                    onChange={(e) => setNewItemName(e.target.value)}
                    placeholder="Item name (e.g. Milk)"
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

            {/* Bottom Row: Date, Category, Add Button */}
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

            {/* Categories */}
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

      {Object.keys(groupedItems).length === 0 ? (
        <div className="text-center text-gray-400 mt-10">
          <p>Your pantry is empty.</p>
          <p className="text-sm">Add items to get recipe suggestions!</p>
        </div>
      ) : (
        Object.entries(groupedItems).map(([category, catItems]) => (
          <div key={category} className="mb-6">
            <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3 ml-1">{category}</h3>
            <div className="space-y-3">
              {(catItems as Ingredient[]).map(item => {
                const expiryStatus = getExpiryStatus(item.expiryDate);
                
                return (
                  <div key={item.id} className="bg-white p-3 rounded-xl shadow-sm flex items-center justify-between border border-gray-100">
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <p className="font-semibold text-gray-800 truncate">{item.name}</p>
                        <span className="text-xs bg-gray-100 text-gray-600 px-2 py-0.5 rounded-md font-medium">
                            {item.quantity}
                        </span>
                      </div>
                      
                      <div className="flex flex-wrap items-center gap-3 text-xs">
                         {/* Expiry Badge */}
                         {item.expiryDate && (
                             <div className={`flex items-center gap-1 px-2 py-0.5 rounded-md ${expiryStatus.bg} ${expiryStatus.color}`}>
                                 <Clock size={10} />
                                 <span className="font-medium">
                                     {expiryStatus.label || item.expiryDate}
                                 </span>
                             </div>
                         )}

                         {/* Opened Status */}
                        {item.openedDate ? (
                          <span className="text-orange-600 flex items-center gap-1 bg-orange-50 px-2 py-0.5 rounded-md">
                            <AlertCircle size={10} /> Opened: {item.openedDate}
                          </span>
                        ) : (
                          <button 
                            onClick={() => handleOpenProduct(item.id)}
                            className="text-gray-400 hover:text-brand-500 flex items-center gap-1 transition-colors"
                          >
                            <Calendar size={10} /> Mark Open
                          </button>
                        )}
                      </div>
                    </div>
                    
                    <button 
                      onClick={() => handleRemove(item.id)}
                      className="ml-3 text-gray-300 hover:text-red-500 p-2 transition-colors"
                    >
                      <Trash2 size={18} />
                    </button>
                  </div>
                );
              })}
            </div>
          </div>
        ))
      )}
    </div>
  );
};