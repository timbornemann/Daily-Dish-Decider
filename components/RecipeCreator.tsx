
import React, { useState } from 'react';
import { ChevronLeft, Plus, Save, Trash2, Clock, Users, X, BarChart } from 'lucide-react';
import { Recipe, RecipeIngredient, Ingredient } from '../types';
import { translations, Language } from '../translations';

interface RecipeCreatorProps {
  onSave: (recipe: Recipe) => void;
  onCancel: () => void;
  lang: Language;
  pantryItems: Ingredient[]; // Used for suggestions
}

export const RecipeCreator: React.FC<RecipeCreatorProps> = ({ onSave, onCancel, lang, pantryItems }) => {
  const t = translations[lang];
  
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [prepTime, setPrepTime] = useState('');
  const [basePortions, setBasePortions] = useState(2);
  const [difficulty, setDifficulty] = useState<'Easy' | 'Medium' | 'Hard'>('Medium');
  const [ingredients, setIngredients] = useState<RecipeIngredient[]>([]);
  const [steps, setSteps] = useState<string[]>(['']);
  
  // Ingredient Input State
  const [ingName, setIngName] = useState('');
  const [ingAmount, setIngAmount] = useState('');

  const handleAddIngredient = () => {
    if (!ingName.trim()) return;
    setIngredients([...ingredients, { name: ingName.trim(), amount: ingAmount.trim() || 'to taste' }]);
    setIngName('');
    setIngAmount('');
  };

  const handleRemoveIngredient = (idx: number) => {
    setIngredients(ingredients.filter((_, i) => i !== idx));
  };

  const handleStepChange = (idx: number, val: string) => {
    const newSteps = [...steps];
    newSteps[idx] = val;
    setSteps(newSteps);
  };

  const handleAddStep = () => {
    setSteps([...steps, '']);
  };

  const handleRemoveStep = (idx: number) => {
    if (steps.length === 1) return;
    setSteps(steps.filter((_, i) => i !== idx));
  };

  const handleSave = () => {
    if (!title.trim() || ingredients.length === 0 || steps.some(s => !s.trim())) {
        alert(t.creator_save_error);
        return;
    }

    const newRecipe: Recipe = {
        id: `user-${Date.now()}`,
        title,
        description,
        ingredients,
        steps: steps.filter(s => s.trim()),
        prepTime: prepTime || '30 mins',
        tags: ['User Created'],
        basePortions,
        source: 'user',
        difficulty
    };

    onSave(newRecipe);
  };

  // Pantry suggestions logic
  const suggestions = pantryItems
    .filter(p => p.name.toLowerCase().includes(ingName.toLowerCase()) && ingName.length > 1)
    .slice(0, 5);

  return (
    <div className="fixed inset-0 bg-white dark:bg-gray-900 z-50 overflow-y-auto animate-in slide-in-from-bottom duration-300">
      <div className="p-4 border-b border-gray-200 dark:border-gray-700 flex items-center justify-between bg-white dark:bg-gray-800 sticky top-0 z-10">
        <button onClick={onCancel} className="text-gray-500 hover:text-gray-800 dark:text-gray-400 dark:hover:text-white">
            <ChevronLeft size={28} />
        </button>
        <h1 className="text-lg font-bold text-gray-900 dark:text-white">{t.creator_title}</h1>
        <button onClick={handleSave} className="text-brand-600 font-bold flex items-center gap-1">
            <Save size={20} />
        </button>
      </div>

      <div className="p-6 max-w-2xl mx-auto space-y-6">
        
        {/* Basic Info */}
        <div className="space-y-4">
            <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">{t.creator_title}</label>
                <input 
                    type="text" 
                    value={title}
                    onChange={e => setTitle(e.target.value)}
                    placeholder={t.creator_title_placeholder}
                    className="w-full p-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white"
                />
            </div>
            <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">{t.creator_desc}</label>
                <textarea 
                    value={description}
                    onChange={e => setDescription(e.target.value)}
                    placeholder={t.creator_desc_placeholder}
                    className="w-full p-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white h-24"
                />
            </div>
            
            <div className="grid grid-cols-3 gap-4">
                <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">{t.creator_prep}</label>
                    <div className="relative">
                        <Clock className="absolute left-3 top-3 text-gray-400" size={16} />
                        <input 
                            type="text" 
                            value={prepTime}
                            onChange={e => setPrepTime(e.target.value)}
                            placeholder={t.creator_prep_placeholder}
                            className="w-full p-3 pl-10 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white"
                        />
                    </div>
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">{t.creator_portions}</label>
                    <div className="relative">
                        <Users className="absolute left-3 top-3 text-gray-400" size={16} />
                        <input 
                            type="number" 
                            value={basePortions}
                            onChange={e => setBasePortions(parseInt(e.target.value))}
                            className="w-full p-3 pl-10 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white"
                        />
                    </div>
                </div>
                 <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">{t.difficulty}</label>
                    <div className="relative">
                        <BarChart className="absolute left-3 top-3 text-gray-400" size={16} />
                        <select 
                            value={difficulty}
                            onChange={e => setDifficulty(e.target.value as any)}
                            className="w-full p-3 pl-10 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white appearance-none"
                        >
                            <option value="Easy">{t.diff_easy}</option>
                            <option value="Medium">{t.diff_medium}</option>
                            <option value="Hard">{t.diff_hard}</option>
                        </select>
                    </div>
                </div>
            </div>
        </div>

        <hr className="border-gray-100 dark:border-gray-800" />

        {/* Ingredients */}
        <div>
            <h3 className="text-lg font-bold mb-4 text-gray-900 dark:text-white">{t.creator_ingredients}</h3>
            <div className="flex gap-2 mb-4 relative">
                <div className="flex-1 relative">
                    <input 
                        type="text" 
                        value={ingName}
                        onChange={e => setIngName(e.target.value)}
                        placeholder={t.creator_ing_name}
                        className="w-full p-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white"
                        onKeyDown={e => e.key === 'Enter' && document.getElementById('ingAmt')?.focus()}
                    />
                    {suggestions.length > 0 && (
                        <div className="absolute top-full left-0 right-0 bg-white dark:bg-gray-700 shadow-xl rounded-b-xl border border-t-0 border-gray-200 dark:border-gray-600 z-20">
                            {suggestions.map(s => (
                                <button 
                                    key={s.id} 
                                    onClick={() => setIngName(s.name)}
                                    className="block w-full text-left px-4 py-2 hover:bg-gray-50 dark:hover:bg-gray-600 text-sm text-gray-900 dark:text-white"
                                >
                                    {s.name}
                                </button>
                            ))}
                        </div>
                    )}
                </div>
                <input 
                    id="ingAmt"
                    type="text" 
                    value={ingAmount}
                    onChange={e => setIngAmount(e.target.value)}
                    placeholder={t.creator_ing_amount}
                    className="w-24 p-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white"
                    onKeyDown={e => e.key === 'Enter' && handleAddIngredient()}
                />
                <button onClick={handleAddIngredient} className="bg-brand-500 text-white p-3 rounded-xl">
                    <Plus size={20} />
                </button>
            </div>

            <div className="space-y-2">
                {ingredients.map((ing, idx) => (
                    <div key={idx} className="flex justify-between items-center p-3 bg-gray-50 dark:bg-gray-800 rounded-lg border border-gray-100 dark:border-gray-700 text-gray-900 dark:text-white">
                        <span>{ing.amount} <strong>{ing.name}</strong></span>
                        <button onClick={() => handleRemoveIngredient(idx)} className="text-red-400">
                            <X size={16} />
                        </button>
                    </div>
                ))}
                {ingredients.length === 0 && <p className="text-gray-400 text-sm text-center italic">{t.creator_no_ing}</p>}
            </div>
        </div>

        <hr className="border-gray-100 dark:border-gray-800" />

        {/* Steps */}
        <div>
            <h3 className="text-lg font-bold mb-4 text-gray-900 dark:text-white">{t.creator_steps}</h3>
            <div className="space-y-3">
                {steps.map((step, idx) => (
                    <div key={idx} className="flex gap-2">
                        <span className="mt-3 text-sm font-bold text-gray-400">{idx + 1}.</span>
                        <div className="flex-1">
                            <textarea 
                                value={step}
                                onChange={e => handleStepChange(idx, e.target.value)}
                                placeholder={t.creator_step_placeholder}
                                className="w-full p-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white"
                            />
                        </div>
                        {steps.length > 1 && (
                            <button onClick={() => handleRemoveStep(idx)} className="text-gray-400 hover:text-red-500 mt-3 self-start">
                                <Trash2 size={16} />
                            </button>
                        )}
                    </div>
                ))}
            </div>
            <button onClick={handleAddStep} className="mt-4 text-brand-500 font-bold flex items-center gap-2 text-sm">
                <Plus size={16} /> {t.creator_add_step}
            </button>
        </div>
        
        {/* Safe Area */}
        <div className="h-24"></div>
      </div>
    </div>
  );
};
