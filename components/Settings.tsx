
import React, { useState } from 'react';
import { Moon, Sun, Globe, Scale, Bell, Trash2, Check, AlertTriangle, Brain, RefreshCcw, X } from 'lucide-react';
import { UserPreferences } from '../types';
import { translations, Language } from '../translations';
import { requestNotificationPermission } from '../services/notifications';

interface SettingsProps {
  preferences: UserPreferences;
  onUpdatePreferences: (prefs: UserPreferences) => void;
  onClearData: () => void;
  lang: Language;
}

type Tab = 'general' | 'dietary' | 'algorithm' | 'data';

export const Settings: React.FC<SettingsProps> = ({ preferences, onUpdatePreferences, onClearData, lang }) => {
  const [activeTab, setActiveTab] = useState<Tab>('general');
  const [showClearConfirm, setShowClearConfirm] = useState(false);
  const t = translations[lang];

  const toggleTheme = () => {
    onUpdatePreferences({
      ...preferences,
      theme: preferences.theme === 'light' ? 'dark' : 'light'
    });
  };

  const toggleLanguage = (l: 'en' | 'de') => {
    onUpdatePreferences({ ...preferences, language: l });
  };

  const toggleUnit = (system: 'metric' | 'imperial') => {
    onUpdatePreferences({ ...preferences, measurementSystem: system });
  };

  const toggleDietary = (restriction: string) => {
    const current = preferences.dietaryRestrictions;
    const updated = current.includes(restriction)
      ? current.filter(r => r !== restriction)
      : [...current, restriction];
    
    onUpdatePreferences({ ...preferences, dietaryRestrictions: updated });
  };

  const toggleNotifications = async () => {
      const newState = !preferences.notificationsEnabled;
      if (newState) {
          const granted = await requestNotificationPermission();
          if (granted) {
              onUpdatePreferences({ ...preferences, notificationsEnabled: true });
          } else {
              alert("Notification permission is required to enable alerts.");
              onUpdatePreferences({ ...preferences, notificationsEnabled: false });
          }
      } else {
          onUpdatePreferences({ ...preferences, notificationsEnabled: false });
      }
  };

  // Algorithm controls
  const resetAlgorithm = () => {
    if(confirm(t.algo_reset_confirm)) {
        onUpdatePreferences({ ...preferences, tasteProfile: {} });
    }
  };

  const deleteTagWeight = (tag: string) => {
    const newProfile = { ...preferences.tasteProfile };
    delete newProfile[tag];
    onUpdatePreferences({ ...preferences, tasteProfile: newProfile });
  };

  // Common dietary restrictions
  const dietaryOptions = [
    'Vegetarian', 'Vegan', 'Pescatarian', 
    'Gluten_Free', 'Dairy_Free', 'Nut_Free', 
    'Keto', 'Paleo', 'Low_Carb'
  ];

  // Helper to sort and visualize weights
  const tasteProfileEntries = Object.entries(preferences.tasteProfile ?? {}) as [string, number][];

  const sortedWeights = tasteProfileEntries
    .sort(([, a], [, b]) => Math.abs(b) - Math.abs(a)) // Sort by magnitude (impact)
    .slice(0, 50); // Limit list

  return (
    <div className="flex flex-col h-full bg-gray-50 dark:bg-gray-900 overflow-y-auto no-scrollbar pb-24 transition-colors duration-200">
      
      {/* Header */}
      <div className="bg-white dark:bg-gray-800 p-6 shadow-sm border-b border-gray-100 dark:border-gray-700 sticky top-0 z-10">
        <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">{t.settings_title}</h2>
        
        {/* Tabs */}
        <div className="flex p-1 bg-gray-100 dark:bg-gray-700 rounded-lg overflow-x-auto no-scrollbar">
          {(['general', 'dietary', 'algorithm', 'data'] as Tab[]).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`flex-1 py-2 px-3 text-sm font-medium rounded-md transition-all capitalize whitespace-nowrap ${
                activeTab === tab 
                  ? 'bg-white dark:bg-gray-600 text-brand-600 dark:text-white shadow-sm' 
                  : 'text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200'
              }`}
            >
              {(t as any)[`tab_${tab}`]}
            </button>
          ))}
        </div>
      </div>

      <div className="p-6 max-w-lg mx-auto w-full">
        
        {/* General Tab */}
        {activeTab === 'general' && (
          <div className="space-y-6">
            {/* Appearance */}
            <section className="bg-white dark:bg-gray-800 rounded-xl p-4 shadow-sm border border-gray-100 dark:border-gray-700">
              <h3 className="text-sm font-bold text-gray-400 dark:text-gray-500 uppercase tracking-widest mb-4">{t.appearance}</h3>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className={`p-2 rounded-full ${preferences.theme === 'dark' ? 'bg-indigo-100 dark:bg-indigo-900/50 text-indigo-600 dark:text-indigo-400' : 'bg-orange-100 text-orange-600'}`}>
                    {preferences.theme === 'dark' ? <Moon size={20} /> : <Sun size={20} />}
                  </div>
                  <div>
                    <p className="font-medium text-gray-900 dark:text-white">{t.dark_mode}</p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">{preferences.theme === 'dark' ? t.on : t.off}</p>
                  </div>
                </div>
                <button 
                  onClick={toggleTheme}
                  className={`w-12 h-6 rounded-full p-1 transition-colors ${
                    preferences.theme === 'dark' ? 'bg-brand-500' : 'bg-gray-300 dark:bg-gray-600'
                  }`}
                >
                  <div className={`w-4 h-4 rounded-full bg-white shadow-sm transform transition-transform ${
                    preferences.theme === 'dark' ? 'translate-x-6' : 'translate-x-0'
                  }`} />
                </button>
              </div>
            </section>

            {/* Language */}
            <section className="bg-white dark:bg-gray-800 rounded-xl p-4 shadow-sm border border-gray-100 dark:border-gray-700">
              <h3 className="text-sm font-bold text-gray-400 dark:text-gray-500 uppercase tracking-widest mb-4">{t.language}</h3>
              <div className="flex items-center gap-3 mb-3">
                 <div className="p-2 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full">
                    <Globe size={20} />
                 </div>
                 <p className="font-medium text-gray-900 dark:text-white">{t.app_language}</p>
              </div>
              <div className="grid grid-cols-2 gap-2">
                <button 
                    onClick={() => toggleLanguage('en')}
                    className={`px-4 py-2 rounded-lg border text-sm font-medium transition-colors ${
                        preferences.language === 'en' 
                        ? 'bg-brand-50 border-brand-500 text-brand-700 dark:bg-brand-900/30 dark:text-brand-300' 
                        : 'border-gray-200 dark:border-gray-600 text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700'
                    }`}
                >
                    English
                </button>
                <button 
                    onClick={() => toggleLanguage('de')}
                    className={`px-4 py-2 rounded-lg border text-sm font-medium transition-colors ${
                        preferences.language === 'de' 
                        ? 'bg-brand-50 border-brand-500 text-brand-700 dark:bg-brand-900/30 dark:text-brand-300' 
                        : 'border-gray-200 dark:border-gray-600 text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700'
                    }`}
                >
                    Deutsch
                </button>
              </div>
            </section>

             {/* Units */}
             <section className="bg-white dark:bg-gray-800 rounded-xl p-4 shadow-sm border border-gray-100 dark:border-gray-700">
              <h3 className="text-sm font-bold text-gray-400 dark:text-gray-500 uppercase tracking-widest mb-4">{t.settings_units}</h3>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 rounded-full">
                    <Scale size={20} />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900 dark:text-white">{t.measurement_system}</p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">{t.measurement_desc}</p>
                  </div>
                </div>
                <div className="flex bg-gray-100 dark:bg-gray-700 rounded-lg p-1">
                    <button 
                        onClick={() => toggleUnit('metric')}
                        className={`px-3 py-1 rounded-md text-xs font-bold transition-all ${
                            preferences.measurementSystem === 'metric' ? 'bg-white dark:bg-gray-600 shadow text-gray-900 dark:text-white' : 'text-gray-500 dark:text-gray-400'
                        }`}
                    >
                        Metric
                    </button>
                    <button 
                        onClick={() => toggleUnit('imperial')}
                         className={`px-3 py-1 rounded-md text-xs font-bold transition-all ${
                            preferences.measurementSystem === 'imperial' ? 'bg-white dark:bg-gray-600 shadow text-gray-900 dark:text-white' : 'text-gray-500 dark:text-gray-400'
                        }`}
                    >
                        Imp.
                    </button>
                </div>
              </div>
            </section>
          </div>
        )}

        {/* Dietary Tab */}
        {activeTab === 'dietary' && (
          <div className="space-y-4">
             <div className="bg-white dark:bg-gray-800 p-4 rounded-xl border border-gray-100 dark:border-gray-700">
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                    {t.dietary_desc}
                </p>
                <div className="flex flex-wrap gap-2">
                    {dietaryOptions.map(option => {
                        const isSelected = preferences.dietaryRestrictions.includes(option);
                        const label = (t.dietary as any)[option] || option;
                        return (
                            <button
                                key={option}
                                onClick={() => toggleDietary(option)}
                                className={`px-4 py-2 rounded-full text-sm font-medium transition-all border flex items-center gap-2 ${
                                    isSelected 
                                    ? 'bg-brand-500 border-brand-500 text-white shadow-md' 
                                    : 'bg-white dark:bg-gray-700 border-gray-200 dark:border-gray-600 text-gray-600 dark:text-gray-300 hover:border-brand-300 dark:hover:border-brand-400'
                                }`}
                            >
                                {isSelected && <Check size={14} />}
                                {label}
                            </button>
                        );
                    })}
                </div>
             </div>
          </div>
        )}

        {/* Algorithm Tab (New) */}
        {activeTab === 'algorithm' && (
          <div className="space-y-6">
            <div className="bg-gradient-to-br from-brand-500 to-purple-600 p-6 rounded-2xl text-white shadow-lg">
                <div className="flex items-center gap-3 mb-4">
                    <div className="bg-white/20 p-2 rounded-full backdrop-blur-sm">
                        <Brain size={24} className="text-white" />
                    </div>
                    <div>
                        <h3 className="font-bold text-lg">{t.algo_title}</h3>
                        <p className="text-xs text-white/80">{t.algo_desc}</p>
                    </div>
                </div>
                
                <button 
                    onClick={resetAlgorithm}
                    className="bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white text-xs font-bold px-3 py-2 rounded-lg flex items-center gap-2 transition-colors border border-white/30"
                >
                    <RefreshCcw size={14} /> {t.algo_reset}
                </button>
            </div>

            <div className="space-y-3">
                <h4 className="text-sm font-bold text-gray-400 dark:text-gray-500 uppercase tracking-widest">{t.algo_weights_title}</h4>
                
                {sortedWeights.length === 0 ? (
                    <div className="text-center py-8 bg-gray-100 dark:bg-gray-800 rounded-xl border border-dashed border-gray-300 dark:border-gray-700">
                        <p className="text-gray-500 dark:text-gray-400 text-sm">{t.algo_no_data}</p>
                    </div>
                ) : (
                    sortedWeights.map(([tag, weight]) => {
                        const isPositive = weight > 0;
                        const percentage = Math.min(Math.abs(weight) * 10, 100); // Scale for visual bar
                        
                        return (
                            <div key={tag} className="bg-white dark:bg-gray-800 p-3 rounded-xl border border-gray-100 dark:border-gray-700 flex items-center gap-3">
                                <div className="flex-1">
                                    <div className="flex justify-between items-end mb-1">
                                        <span className="font-medium text-gray-800 dark:text-gray-200 capitalize">{tag}</span>
                                        <span className={`text-xs font-bold ${isPositive ? 'text-green-500' : 'text-red-500'}`}>
                                            {weight > 0 ? '+' : ''}{weight}
                                        </span>
                                    </div>
                                    <div className="h-1.5 w-full bg-gray-100 dark:bg-gray-700 rounded-full overflow-hidden flex">
                                        {/* Center axis visualization */}
                                        <div className="w-1/2 flex justify-end">
                                            {!isPositive && (
                                                <div 
                                                    style={{ width: `${percentage}%` }} 
                                                    className="h-full bg-red-400 rounded-l-full"
                                                />
                                            )}
                                        </div>
                                        <div className="w-1/2 flex justify-start">
                                            {isPositive && (
                                                <div 
                                                    style={{ width: `${percentage}%` }} 
                                                    className="h-full bg-green-500 rounded-r-full"
                                                />
                                            )}
                                        </div>
                                    </div>
                                </div>
                                <button 
                                    onClick={() => deleteTagWeight(tag)}
                                    className="p-2 text-gray-300 hover:text-red-500 transition-colors"
                                >
                                    <X size={16} />
                                </button>
                            </div>
                        );
                    })
                )}
            </div>
          </div>
        )}

        {/* Data Tab */}
        {activeTab === 'data' && (
          <div className="space-y-6">
            <section className="bg-white dark:bg-gray-800 rounded-xl p-4 shadow-sm border border-gray-100 dark:border-gray-700">
                <h3 className="text-sm font-bold text-gray-400 dark:text-gray-500 uppercase tracking-widest mb-4">{t.notifications}</h3>
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <div className="p-2 bg-yellow-100 dark:bg-yellow-900/30 text-yellow-600 dark:text-yellow-400 rounded-full">
                            <Bell size={20} />
                        </div>
                        <div>
                            <p className="font-medium text-gray-900 dark:text-white">{t.expiry_alerts}</p>
                            <p className="text-xs text-gray-500 dark:text-gray-400">{t.expiry_desc}</p>
                        </div>
                    </div>
                    <button 
                        onClick={toggleNotifications}
                        className={`w-12 h-6 rounded-full p-1 transition-colors ${
                            preferences.notificationsEnabled ? 'bg-green-500' : 'bg-gray-300 dark:bg-gray-600'
                        }`}
                        >
                        <div className={`w-4 h-4 rounded-full bg-white shadow-sm transform transition-transform ${
                            preferences.notificationsEnabled ? 'translate-x-6' : 'translate-x-0'
                        }`} />
                    </button>
                </div>
            </section>

            <section className="bg-red-50 dark:bg-red-900/20 rounded-xl p-4 border border-red-100 dark:border-red-900/50">
                <h3 className="text-sm font-bold text-red-500 dark:text-red-400 uppercase tracking-widest mb-4">{t.danger_zone}</h3>
                
                {!showClearConfirm ? (
                    <button 
                        onClick={() => setShowClearConfirm(true)}
                        className="w-full py-3 bg-white dark:bg-gray-800 text-red-500 dark:text-red-400 border border-red-200 dark:border-red-800 font-bold rounded-lg flex items-center justify-center gap-2 hover:bg-red-50 dark:hover:bg-red-900/30 transition-colors"
                    >
                        <Trash2 size={18} /> {t.clear_data}
                    </button>
                ) : (
                    <div className="text-center animate-in fade-in zoom-in duration-200">
                        <div className="flex items-center justify-center text-red-500 dark:text-red-400 mb-2">
                            <AlertTriangle size={32} />
                        </div>
                        <p className="text-gray-800 dark:text-gray-200 font-medium mb-1">{t.are_you_sure}</p>
                        <p className="text-xs text-gray-500 dark:text-gray-400 mb-4">{t.delete_warning}</p>
                        <div className="flex gap-2">
                            <button 
                                onClick={() => setShowClearConfirm(false)}
                                className="flex-1 py-2 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-200 rounded-lg font-medium hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
                            >
                                {t.cancel}
                            </button>
                            <button 
                                onClick={() => {
                                    onClearData();
                                    setShowClearConfirm(false);
                                }}
                                className="flex-1 py-2 bg-red-500 text-white rounded-lg font-bold shadow-lg shadow-red-500/30 hover:bg-red-600 transition-colors"
                            >
                                {t.yes_delete}
                            </button>
                        </div>
                    </div>
                )}
            </section>
          </div>
        )}

      </div>
    </div>
  );
};
