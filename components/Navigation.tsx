
import React from 'react';
import { Refrigerator, Heart, Utensils, ShoppingCart, Settings, Book } from 'lucide-react';
import { AppView } from '../types';
import { translations, Language } from '../translations';

interface NavigationProps {
  currentView: AppView;
  onChange: (view: AppView) => void;
  badgeCount?: number;
  lang: Language;
}

export const Navigation: React.FC<NavigationProps> = ({ currentView, onChange, badgeCount = 0, lang }) => {
  const t = translations[lang];
  
  const items = [
    { id: AppView.PANTRY, icon: Refrigerator, label: t.nav_pantry },
    { id: AppView.COOKBOOK, icon: Book, label: t.nav_cookbook },
    { id: AppView.SWIPE, icon: Utensils, label: t.nav_discover },
    { id: AppView.FAVORITES, icon: Heart, label: t.nav_favorites },
    { id: AppView.SHOPPING, icon: ShoppingCart, label: t.nav_shopping, badge: badgeCount },
    { id: AppView.SETTINGS, icon: Settings, label: t.nav_settings },
  ];

  return (
    <div className="fixed bottom-0 inset-x-0 bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 px-2 py-3 flex justify-between items-center z-40 safe-area-pb transition-colors duration-200 overflow-x-auto no-scrollbar">
      {items.map(item => {
        const isActive = currentView === item.id;
        return (
          <button
            key={item.id}
            onClick={() => onChange(item.id)}
            className={`flex flex-col items-center gap-1 transition-colors relative min-w-[56px] flex-1 px-1 ${
              isActive 
                ? 'text-brand-600 dark:text-brand-400' 
                : 'text-gray-400 dark:text-gray-500 hover:text-gray-600 dark:hover:text-gray-300'
            }`}
          >
            <div className="relative">
              <item.icon size={22} strokeWidth={isActive ? 2.5 : 2} />
              {item.badge && item.badge > 0 ? (
                <span className="absolute -top-1 -right-2 bg-brand-500 text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full min-w-[16px] flex items-center justify-center border-2 border-white dark:border-gray-800">
                  {item.badge}
                </span>
              ) : null}
            </div>
            <span className="text-[9px] font-medium truncate w-full text-center">{item.label}</span>
          </button>
        );
      })}
    </div>
  );
};