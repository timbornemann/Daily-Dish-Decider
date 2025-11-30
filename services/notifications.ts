
import { Ingredient } from '../types';
import { Translation } from '../translations';

const LAST_NOTIFIED_KEY = 'ddd_last_notified';

export const requestNotificationPermission = async (): Promise<boolean> => {
  if (!('Notification' in window)) {
    console.warn('This browser does not support desktop notification');
    return false;
  }
  
  if (Notification.permission === 'granted') {
    return true;
  }
  
  const permission = await Notification.requestPermission();
  return permission === 'granted';
};

export const checkForExpiry = (pantryItems: Ingredient[], t: Translation) => {
  if (!('Notification' in window)) return;
  if (Notification.permission !== 'granted') return;

  // Prevent spam: Check if we already notified today
  const lastNotified = localStorage.getItem(LAST_NOTIFIED_KEY);
  const todayStr = new Date().toISOString().split('T')[0];
  
  if (lastNotified === todayStr) {
    return;
  }

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  let expiredCount = 0;
  let expiringSoonCount = 0;
  const expiringNames: string[] = [];

  pantryItems.forEach(item => {
    let effectiveExpiry: Date | null = null;

    // 1. Explicit Expiry Date
    if (item.expiryDate) {
        effectiveExpiry = new Date(item.expiryDate);
    }

    // 2. Opened Logic (Opened Date + Shelf Life)
    if (item.openedDate && item.daysGoodAfterOpen) {
        const opened = new Date(item.openedDate);
        const openedExpiry = new Date(opened);
        openedExpiry.setDate(opened.getDate() + item.daysGoodAfterOpen);
        
        // Use the stricter (earlier) date
        if (!effectiveExpiry || openedExpiry < effectiveExpiry) {
            effectiveExpiry = openedExpiry;
        }
    }

    if (!effectiveExpiry) return;

    // Calculate diff
    const diffTime = effectiveExpiry.getTime() - today.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    if (diffDays < 0) {
        expiredCount++;
    } else if (diffDays >= 0 && diffDays <= 3) {
        expiringSoonCount++;
        expiringNames.push(item.name);
    }
  });

  // Trigger Notification if needed
  if (expiredCount > 0 || expiringSoonCount > 0) {
      let body = "";

      if (expiredCount > 0) {
          body += `${expiredCount} ${t.expired}. `;
      }
      
      if (expiringSoonCount > 0) {
           body += `${expiringSoonCount} ${t.expiring_soon}`;
           if (expiringNames.length > 0) {
               const names = expiringNames.slice(0, 2).join(', ');
               const more = expiringNames.length > 2 ? ` +${expiringNames.length - 2}` : '';
               body += ` (${names}${more})`;
           }
      }

      try {
          new Notification(t.expiry_alerts, {
              body: body,
              icon: '/icon.png', // Fallback if exists
              tag: 'expiry-check' // Replaces older notification with same tag
          });
          
          // Mark as notified for today
          localStorage.setItem(LAST_NOTIFIED_KEY, todayStr);
      } catch (e) {
          console.error("Notification trigger failed", e);
      }
  }
};
