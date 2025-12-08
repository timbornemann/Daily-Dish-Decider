
import { GoogleGenAI, Type } from "@google/genai";
import { Ingredient, Recipe } from "../types";

// Lazy initialization - only create AI instance if API key is available
let ai: GoogleGenAI | null = null;

const getAI = (): GoogleGenAI | null => {
  const apiKey = process.env.API_KEY || process.env.GEMINI_API_KEY;
  
  if (!apiKey) {
    return null;
  }
  
  if (!ai) {
    try {
      ai = new GoogleGenAI({ apiKey });
    } catch (error) {
      console.warn("Failed to initialize Google GenAI:", error);
      return null;
    }
  }
  
  return ai;
};

export const generateRecipes = async (
  pantryItems: Ingredient[],
  dietaryRestrictions: string[] = [],
  language: 'en' | 'de' = 'en'
): Promise<Recipe[]> => {
  // Check if API key is available
  const aiInstance = getAI();
  if (!aiInstance) {
    console.warn("Gemini API key not configured. AI recipe generation is disabled.");
    return [];
  }

  const pantryNames = pantryItems.map(i => i.name).join(', ');
  const restrictions = dietaryRestrictions.length > 0 ? `Dietary restrictions: ${dietaryRestrictions.join(', ')}.` : '';
  
  const langInstruction = language === 'de' 
    ? "Generate the recipe titles, descriptions, ingredients, and steps in German (Deutsch). The field names in JSON must remain in English (e.g. 'title', 'ingredients'), but the content values must be German." 
    : "Generate the recipe titles, descriptions, ingredients, and steps in English.";

  const prompt = `
    I have the following ingredients in my pantry: ${pantryNames}.
    ${restrictions}
    ${langInstruction}
    Suggest 5 distinct recipes I can make using mostly these ingredients.
    It is okay if I need to buy 1 or 2 common items (like eggs, oil, spices, or fresh produce).
    Make the titles catchy.
    Ensure "ingredients" is an array of objects with "name" and "amount".
    "basePortions" should be an integer (default 2 or 4).
  `;

  try {
    const response = await aiInstance.models.generateContent({
      model: "gemini-2.5-flash",
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.ARRAY,
          items: {
            type: Type.OBJECT,
            properties: {
              id: { type: Type.STRING },
              title: { type: Type.STRING },
              description: { type: Type.STRING },
              ingredients: {
                type: Type.ARRAY,
                items: {
                  type: Type.OBJECT,
                  properties: {
                    name: { type: Type.STRING },
                    amount: { type: Type.STRING }
                  }
                }
              },
              steps: {
                type: Type.ARRAY,
                items: { type: Type.STRING }
              },
              prepTime: { type: Type.STRING },
              tags: {
                type: Type.ARRAY,
                items: { type: Type.STRING }
              },
              basePortions: { type: Type.INTEGER }
            }
          }
        }
      }
    });

    const text = response.text;
    if (!text) return [];
    
    const recipes = JSON.parse(text) as Recipe[];
    // Ensure IDs are unique if the model hallucinates duplicates or weird strings
    return recipes.map((r, index) => ({
      ...r,
      id: r.id || `gen-${Date.now()}-${index}`
    }));

  } catch (error) {
    console.error("Error generating recipes:", error);
    return [];
  }
};
