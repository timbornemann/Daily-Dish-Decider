import React from 'react';
import { Refrigerator, Heart, Utensils, ShoppingCart, Settings } from 'lucide-react';
import { AppView } from '../types';

interface NavigationProps {
  currentView: AppView;
  onChange: (view: AppView) => void;
  badgeCount?: number;
}

export const Navigation: React.FC<NavigationProps> = ({ currentView, onChange, badgeCount = 0 }) => {
  const items = [
    { id: AppView.PANTRY, icon: Refrigerator, label: 'Pantry' },
    { id: AppView.SWIPE, icon: Utensils, label: 'Discover' },
    { id: AppView.FAVORITES, icon: Heart, label: 'Favorites' },
    { id: AppView.SHOPPING, icon: ShoppingCart, label: 'Shopping', badge: badgeCount },
    { id: AppView.SETTINGS, icon: Settings, label: 'Settings' },
  ];

  return (
    <div className="fixed bottom-0 inset-x-0 bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 px-4 py-3 flex justify-between items-center z-40 safe-area-pb transition-colors duration-200">
      {items.map(item => {
        const isActive = currentView === item.id;
        return (
          <button
            key={item.id}
            onClick={() => onChange(item.id)}
            className={`flex flex-col items-center gap-1 transition-colors relative min-w-[56px] ${
              isActive 
                ? 'text-brand-600 dark:text-brand-400' 
                : 'text-gray-400 dark:text-gray-500 hover:text-gray-600 dark:hover:text-gray-300'
            }`}
          >
            <div className="relative">
              <item.icon size={24} strokeWidth={isActive ? 2.5 : 2} />
              {item.badge && item.badge > 0 ? (
                <span className="absolute -top-1 -right-2 bg-brand-500 text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full min-w-[16px] flex items-center justify-center border-2 border-white dark:border-gray-800">
                  {item.badge}
                </span>
              ) : null}
            </div>
            <span className="text-[10px] font-medium">{item.label}</span>
          </button>
        );
      })}
    </div>
  );
};