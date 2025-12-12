import React from 'react';
import { Recipe } from '../types';

/**
 * Gets the image URL for a recipe.
 * For local recipes, tries to load from resources/images/food/{id}.png
 * Falls back to placeholder if image doesn't exist or fails to load.
 * For non-local recipes, uses picsum.photos placeholder.
 */
export const getRecipeImageUrl = (recipe: Recipe): string => {
  // For local recipes, use local images
  if (recipe.source === 'local') {
    return `/resources/images/food/${recipe.id}.png`;
  }
  
  // For other recipes, use picsum placeholder
  return `https://picsum.photos/seed/${recipe.id}/800/600`;
};

/**
 * Handles image load errors by replacing with placeholder
 */
export const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>): void => {
  const img = e.currentTarget;
  // Only replace if it's not already the placeholder
  if (!img.src.includes('local-placeholder.png')) {
    img.src = '/resources/local-placeholder.png';
  }
};

