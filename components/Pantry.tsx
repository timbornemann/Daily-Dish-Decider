import React, { useState } from 'react';
import { Plus, Minus, Trash2, Calendar, Clock, ShoppingBag, ChevronDown, ChevronUp, PackageOpen, LayoutGrid, ShoppingCart, ArrowRight } from 'lucide-react';
import { Ingredient, ShoppingItem } from '../types';
import { translations, Language, COMMON_ITEMS_IDS } from '../translations';
import { motion, AnimatePresence } from 'framer-motion';

interface PantryProps {
    items: Ingredient[];
    onUpdate: (items: Ingredient[]) => void;
    onAddToShopping: (items: string[]) => void;
    lang: Language;
}

export const Pantry: React.FC<PantryProps> = ({ items, onUpdate, onAddToShopping, lang }) => {
    const [itemName, setItemName] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('Produce'); // Default to Produce
    const [expandedGroups, setExpandedGroups] = useState<Record<string, boolean>>({});
    const [lastMovedItem, setLastMovedItem] = useState<string | null>(null);

    const t = translations[lang];
    const categories = Object.keys(COMMON_ITEMS_IDS);

    // --- Actions ---

    const handleAdd = () => {
        if (!itemName.trim()) return;

        // Check if name matches a registry key directly (e.g. they typed "Onion")
        // Or just store as custom.
        // Ideally we reverse map name -> ID. For now, simple.

        const newItem: Ingredient = {
            id: Date.now().toString(),
            ingredientId: itemName.trim(), // Placeholder, potentially wrong if not in registry
            name: itemName.trim(),
            quantity: '1', // Default to 1 unit internally
            category: selectedCategory,
        };

        onUpdate([...items, newItem]);
        setItemName('');
    };

    const handleQuickAdd = (idOrName: string, category: string) => {
        // idOrName IS the ingredientId from keys
        const translatedName = (t.ingredients as any)[idOrName] || idOrName;

        const newItem: Ingredient = {
            id: Date.now().toString(),
            ingredientId: idOrName,
            name: translatedName,
            quantity: '1',
            category: category,
        };
        onUpdate([...items, newItem]);
    };

    const updateItemDetails = (id: string, updates: Partial<Ingredient>) => {
        onUpdate(items.map(i => i.id === id ? { ...i, ...updates } : i));
    };

    const removeSpecificItem = (id: string, name: string) => {
        const count = items.filter(i => i.name.toLowerCase() === name.toLowerCase()).length;

        if (count <= 1) {
            onAddToShopping([name]);
            setLastMovedItem(name);
            setTimeout(() => setLastMovedItem(null), 3000);
        }

        onUpdate(items.filter(i => i.id !== id));
    };

    const toggleGroup = (groupKey: string) => {
        setExpandedGroups(prev => ({ ...prev, [groupKey]: !prev[groupKey] }));
    };

    // --- Grouping Logic ---

    const groupedItems = items.reduce((acc, item) => {
        const key = `${item.category}-${item.name.toLowerCase().trim()}`;
        if (!acc[key]) {
            acc[key] = {
                name: item.name,
                category: item.category,
                items: []
            };
        }
        acc[key].items.push(item);
        return acc;
    }, {} as Record<string, { name: string, category: string, items: Ingredient[] }>);

    const getExpiryStatus = (dateStr?: string) => {
        if (!dateStr) return null;
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        const expiry = new Date(dateStr);
        const diffTime = expiry.getTime() - today.getTime();
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

        if (diffDays < 0) return { color: 'text-red-600 dark:text-red-400', label: t.expired, bg: 'bg-red-100 dark:bg-red-900/30' };
        if (diffDays <= 3) return { color: 'text-red-500 dark:text-red-300', label: `${diffDays} ${t.days_left}`, bg: 'bg-red-50 dark:bg-red-900/20' };
        if (diffDays <= 7) return { color: 'text-yellow-600 dark:text-yellow-400', label: t.expiring_soon, bg: 'bg-yellow-50 dark:bg-yellow-900/20' };
        return { color: 'text-green-600 dark:text-green-400', label: t.good, bg: 'bg-green-50 dark:bg-green-900/20' };
    };

    // Get current suggestions based on selected category IDs
    const currentSuggestionIds = COMMON_ITEMS_IDS[selectedCategory] || [];

    // --- Render Helpers ---

    const renderGroup = (groupKey: string, group: { name: string, category: string, items: Ingredient[] }) => {
        const isExpanded = expandedGroups[groupKey];
        const totalCount = group.items.length;

        const urgentItems = group.items.filter(i => {
            const status = getExpiryStatus(i.expiryDate);
            return status && (status.label === t.expired || status.label?.includes(t.days_left));
        });
        const hasOpened = group.items.some(i => i.openedDate);

        // Translate category name for display
        const displayCategory = (t.categories as any)[group.category] || group.category;

        return (
            <div key={groupKey} className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 overflow-hidden transition-all duration-200">
                {/* Header / Summary Card */}
                <div
                    onClick={() => toggleGroup(groupKey)}
                    className="p-4 flex items-center justify-between cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-750 transition-colors"
                >
                    <div className="flex items-center gap-3 overflow-hidden">
                        <div className="flex flex-col">
                            <span className="font-bold text-gray-800 dark:text-gray-100 text-lg truncate">{group.name}</span>
                            <div className="flex items-center gap-2 text-xs">
                                <span className="text-gray-400 dark:text-gray-500">{displayCategory}</span>
                                {hasOpened && (
                                    <span className="flex items-center gap-1 text-orange-500 dark:text-orange-400 bg-orange-50 dark:bg-orange-900/20 px-1.5 py-0.5 rounded">
                                        <PackageOpen size={10} /> {t.opened}
                                    </span>
                                )}
                                {urgentItems.length > 0 && (
                                    <span className="flex items-center gap-1 text-red-500 dark:text-red-400 bg-red-50 dark:bg-red-900/20 px-1.5 py-0.5 rounded">
                                        <Clock size={10} /> {urgentItems.length} !
                                    </span>
                                )}
                            </div>
                        </div>
                    </div>

                    <div className="flex items-center gap-3">
                        <div className="flex items-center bg-gray-100 dark:bg-gray-700 rounded-lg px-2 py-1">
                            <span className="font-bold text-gray-800 dark:text-gray-100 text-sm">{totalCount}</span>
                            <span className="text-xs text-gray-500 dark:text-gray-400 ml-1">{t.units}</span>
                        </div>
                        {isExpanded ? <ChevronUp size={20} className="text-gray-400" /> : <ChevronDown size={20} className="text-gray-400" />}
                    </div>
                </div>

                {/* Expanded Details */}
                <AnimatePresence>
                    {isExpanded && (
                        <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="bg-gray-50 dark:bg-gray-900/50 border-t border-gray-100 dark:border-gray-700"
                        >
                            <div className="p-3 space-y-2">
                                {/* Controls for the group */}
                                <div className="flex justify-end mb-2">
                                    <button
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            // Quick add uses the already translated name from the group title
                                            handleQuickAdd(group.name, group.category);
                                        }}
                                        className="text-xs flex items-center gap-1 bg-brand-500 text-white px-3 py-1.5 rounded-lg hover:bg-brand-600 transition-colors shadow-sm"
                                    >
                                        <Plus size={14} /> {t.add_button} {t.units}
                                    </button>
                                </div>

                                {/* Individual Item Rows */}
                                {group.items.map((item, idx) => {
                                    const expiryStatus = getExpiryStatus(item.expiryDate);

                                    return (
                                        <div key={item.id} className="bg-white dark:bg-gray-800 p-3 rounded-xl border border-gray-200 dark:border-gray-700 flex flex-col gap-2">
                                            <div className="flex justify-between items-start">
                                                <div className="flex items-center gap-2">
                                                    <span className="text-xs font-bold text-gray-400 dark:text-gray-600">#{idx + 1}</span>
                                                    {item.openedDate ? (
                                                        <span className="text-xs font-medium text-orange-600 dark:text-orange-400 bg-orange-100 dark:bg-orange-900/30 px-2 py-0.5 rounded-full flex items-center gap-1">
                                                            <PackageOpen size={10} /> {t.opened}
                                                        </span>
                                                    ) : (
                                                        <button
                                                            onClick={() => updateItemDetails(item.id, {
                                                                openedDate: new Date().toISOString().split('T')[0],
                                                                daysGoodAfterOpen: 3 // Default assumption
                                                            })}
                                                            className="text-xs text-gray-500 hover:text-brand-500 border border-gray-200 dark:border-gray-600 hover:border-brand-500 rounded-full px-2 py-0.5 transition-colors"
                                                        >
                                                            {t.open_action}
                                                        </button>
                                                    )}
                                                </div>
                                                <button
                                                    onClick={() => removeSpecificItem(item.id, item.name)}
                                                    className="text-gray-400 hover:text-red-500 transition-colors p-1"
                                                    title="Remove unit (Moves to shopping list if empty)"
                                                >
                                                    <Trash2 size={14} />
                                                </button>
                                            </div>

                                            <div className="flex items-center gap-2">
                                                <div className="relative flex-1">
                                                    <input
                                                        type="date"
                                                        value={item.expiryDate || ''}
                                                        onChange={(e) => updateItemDetails(item.id, { expiryDate: e.target.value })}
                                                        className="w-full bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg py-1.5 pl-8 pr-2 text-xs text-gray-700 dark:text-gray-200 focus:outline-none focus:ring-1 focus:ring-brand-500"
                                                    />
                                                    <Calendar size={12} className="absolute left-2.5 top-2 text-gray-400" />
                                                </div>
                                                {expiryStatus && (
                                                    <span className={`text-[10px] px-2 py-1 rounded-md font-medium whitespace-nowrap ${expiryStatus.bg} ${expiryStatus.color}`}>
                                                        {expiryStatus.label}
                                                    </span>
                                                )}
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        );
    };

    // --- Main Render ---

    return (
        <div className="flex flex-col h-full bg-gray-50 dark:bg-gray-900 p-4 pb-24 overflow-y-auto no-scrollbar transition-colors duration-200 relative">
            <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-gray-100">{t.pantry_title}</h2>

            {/* Moved Item Toast */}
            <AnimatePresence>
                {lastMovedItem && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0 }}
                        className="absolute top-16 left-4 right-4 z-40 bg-gray-800 dark:bg-white text-white dark:text-gray-900 px-4 py-3 rounded-xl shadow-lg flex items-center justify-between"
                    >
                        <span className="text-sm font-medium flex items-center gap-2">
                            <ShoppingCart size={16} />
                            {lastMovedItem} -&gt; {t.shopping_title}
                        </span>
                        <span className="text-xs opacity-70">({t.moved_to_shopping})</span>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Simplified Add Form */}
            <div className="bg-white dark:bg-gray-800 p-4 rounded-2xl shadow-sm mb-6 border border-gray-100 dark:border-gray-700 sticky top-0 z-30">
                <div className="flex flex-col gap-3">

                    {/* Category Dropdown */}
                    <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-500 dark:text-gray-400">
                            <LayoutGrid size={18} />
                        </div>
                        <select
                            value={selectedCategory}
                            onChange={(e) => setSelectedCategory(e.target.value)}
                            className="w-full appearance-none bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white border border-gray-200 dark:border-gray-600 hover:border-brand-500 dark:hover:border-brand-500 rounded-xl px-10 py-3 font-medium focus:outline-none focus:ring-2 focus:ring-brand-500 transition-all cursor-pointer"
                        >
                            {categories.map(c => (
                                <option key={c} value={c}>
                                    {(t.categories as any)[c] || c}
                                </option>
                            ))}
                        </select>
                        <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none text-gray-500 dark:text-gray-400">
                            <ChevronDown size={18} />
                        </div>
                    </div>

                    {/* Input & Add Button */}
                    <div className="relative">
                        <input
                            type="text"
                            value={itemName}
                            onChange={(e) => setItemName(e.target.value)}
                            onKeyDown={(e) => e.key === 'Enter' && handleAdd()}
                            placeholder={t.custom_item_placeholder}
                            className="w-full bg-gray-50 dark:bg-gray-700 border-none text-gray-900 dark:text-white placeholder-gray-400 text-lg font-medium px-4 py-3 rounded-xl focus:ring-2 focus:ring-brand-500 transition-all"
                        />
                        <button
                            onClick={handleAdd}
                            disabled={!itemName.trim()}
                            className="absolute right-2 top-2 bottom-2 bg-brand-500 disabled:bg-gray-300 dark:disabled:bg-gray-600 text-white px-4 rounded-lg font-bold hover:bg-brand-600 transition-colors shadow-sm flex items-center gap-1"
                        >
                            <Plus size={20} />
                        </button>
                    </div>

                    {/* Dynamic Suggestions based on Category */}
                    <div className="flex gap-2 overflow-x-auto no-scrollbar pb-2 pt-1 touch-pan-x">
                        {currentSuggestionIds.length > 0 ? (
                            currentSuggestionIds.map((id) => {
                                const displayName = (t.ingredients as any)[id] || id;
                                return (
                                    <button
                                        key={id}
                                        onClick={() => handleQuickAdd(id, selectedCategory)}
                                        className="shrink-0 text-xs font-medium px-3 py-2 rounded-full whitespace-nowrap transition-all border bg-gray-50 dark:bg-gray-700 border-gray-200 dark:border-gray-600 text-gray-600 dark:text-gray-300 hover:border-brand-500 hover:text-brand-500 dark:hover:text-brand-400 dark:hover:border-brand-400 active:scale-95"
                                    >
                                        + {displayName}
                                    </button>
                                );
                            })
                        ) : (
                            <span className="text-xs text-gray-400 italic px-2 py-1">No suggestions for this category</span>
                        )}
                    </div>
                </div>
            </div>

            {/* Grouped List */}
            <div className="space-y-4">
                {Object.keys(groupedItems).length === 0 ? (
                    <div className="mt-8 text-center px-6">
                        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-300 dark:text-gray-600 mb-4">
                            <ShoppingBag size={32} />
                        </div>
                        <p className="text-gray-500 dark:text-gray-400 text-sm">{t.empty_pantry_msg}</p>
                    </div>
                ) : (
                    Object.entries(groupedItems)
                        .sort(([, a]: [string, any], [, b]: [string, any]) => a.category.localeCompare(b.category) || a.name.localeCompare(b.name))
                        .map(([key, group]: [string, any]) => renderGroup(key, group))
                )}
            </div>
        </div>
    );
};