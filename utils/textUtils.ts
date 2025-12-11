/**
 * Replaces occurrences of an ingredient name in a text with a new name.
 * Attempts to preserve capitalization of the match.
 */
export const replaceIngredientInText = (text: string, oldName: string, newName: string): string => {
    if (!text || !oldName || !newName) return text;

    // Escape regex special characters in oldName
    const escapedOldName = oldName.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

    // Create a regex that matches the old name, case-insensitive
    // We opt NOT to use word boundaries (\b) by default because of German compound words (Apfelkuchen)
    // However, for short words like "Ei" (Egg) or "Oil", this is dangerous.
    // Heuristic: If oldName length <= 3, use boundaries. Else, allow substrings.

    const useBoundaries = oldName.length <= 3;
    const pattern = useBoundaries ? `\\b${escapedOldName}\\b` : escapedOldName;
    const regex = new RegExp(pattern, 'gi');

    return text.replace(regex, (match) => {
        // Basic Case Preservation
        if (match === match.toUpperCase()) return newName.toUpperCase();
        if (match[0] === match[0].toUpperCase()) {
            return newName.charAt(0).toUpperCase() + newName.slice(1);
        }
        return newName.toLowerCase();
    });
};

/**
 * Applies a set of ingredient substitutions to a text block.
 */
export const applySubstitutionsToText = (
    text: string,
    substitutions: Record<string, string> // Map of OldName -> NewName (Localized)
): string => {
    let processingText = text;
    Object.entries(substitutions).forEach(([oldName, newName]) => {
        processingText = replaceIngredientInText(processingText, oldName, newName);
    });
    return processingText;
};
