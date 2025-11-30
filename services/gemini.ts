
import { GoogleGenAI, Type } from "@google/genai";
import { Ingredient, Recipe } from "../types";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const generateRecipes = async (
  pantryItems: Ingredient[],
  dietaryRestrictions: string[] = [],
  language: 'en' | 'de' = 'en'
): Promise<Recipe[]> => {
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
    const response = await ai.models.generateContent({
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
