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
 * Segments text into parts that are substitutions and parts that are regular text.
 */
export interface TextSegment {
    text: string;
    isSubstitution: boolean;
    originalName?: string;
    newName?: string;
}

export const parseSubstitutionsInText = (
    text: string,
    substitutions: Record<string, string> // Map of OldName -> NewName
): TextSegment[] => {
    if (!text || Object.keys(substitutions).length === 0) {
        return [{ text, isSubstitution: false }];
    }

    // Create a master regex for all old names
    // Sort by length identifying generic words first logic? No, longest match first is safer for substrings.
    // e.g. "Coconut Oil" before "Oil" (though Oil is usually boundary protected)

    const sortedKeys = Object.keys(substitutions).sort((a, b) => b.length - a.length);

    const patternParts = sortedKeys.map(key => {
        const escaped = key.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
        // If short word, enforce boundaries
        return key.length <= 3 ? `\\b${escaped}\\b` : escaped;
    });

    const regex = new RegExp(`(${patternParts.join('|')})`, 'gi');

    // Split and map
    // split with capturing group returns: [pre, match, post, match, post...]
    const parts = text.split(regex);

    return parts.map(part => {
        // Check if this part matches any key (case insensitive)
        // We need to find WHICH key it matched to get the new name
        const lowerPart = part.toLowerCase();
        // Since we constructed the regex from keys, a successful match MUST correspond to one of the keys
        // We find the key that matches this part
        const matchedKey = sortedKeys.find(k => {
            // We need to check if 'part' equals 'k' case-insensitive
            // But strict equality might fail if regex boundaries captured surrounding space? 
            // (Capturing group in split usually strictly captures the match)
            return k.toLowerCase() === lowerPart;
        });

        if (matchedKey) {
            const newNameGeneric = substitutions[matchedKey];

            // Apply Case Preservation Logic
            let finalNewName = newNameGeneric;
            if (part === part.toUpperCase()) {
                finalNewName = newNameGeneric.toUpperCase();
            } else if (part[0] === part[0].toUpperCase()) {
                finalNewName = newNameGeneric.charAt(0).toUpperCase() + newNameGeneric.slice(1);
            } else {
                finalNewName = newNameGeneric.toLowerCase();
            }

            return {
                text: finalNewName,
                isSubstitution: true,
                originalName: matchedKey, // Return the key (likely capitalized from DB) or the matched part? Key is better for "was X"
                newName: finalNewName
            };
        }

        return { text: part, isSubstitution: false };
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
