/**
 * Solution 1: Using Set
 * Time: O(n) - Goes through the array once.
 * Space: O(n) - Needs space for the charCount object and the Set to hold duplicates.
 */
const findDuplicatesSet = (charArray) => {
    const charCount = {}; // Tracks how many times a character appears
    const result = new Set(); // Stores duplicates

    for (let char of charArray) {
        if (charCount[char]) {
            result.add(char); // Add to result if it's already been seen
        } else {
            charCount[char] = 1; // Mark as seen
        }
    }

    return Array.from(result); // Convert the Set into an array
};

/**
 * Solution 2: Using Map
 * Time: O(n) - Counts characters in one pass and collects duplicates in another.
 * Space: O(n) - Uses a Map to track counts and an array for duplicates.
 */
const findDuplicatesMap = (charArray) => {
    const charCount = new Map(); // Tracks counts using a Map
    const result = []; // Stores duplicates

    // Count how many times each character appears
    charArray.forEach(char => {
        charCount.set(char, (charCount.get(char) || 0) + 1);
    });

    // Add characters that appear more than once to the result
    charCount.forEach((count, char) => {
        if (count >= 2) {
            result.push(char);
        }
    });

    return result;
};

/**
 * Solution 3: Using Object
 * Time: O(n) - Counts characters in one pass and collects duplicates in another.
 * Space: O(n) - Uses an object for counts and an array for duplicates.
 */
const findDuplicatesObject = (charArray) => {
    const charCount = {}; // Tracks counts using an object
    const result = []; // Stores duplicates

    // Count how many times each character appears
    for (let char of charArray) {
        charCount[char] = (charCount[char] || 0) + 1;
    }

    // Add characters that appear more than once to the result
    for (let char in charCount) {
        if (charCount[char] >= 2) {
            result.push(char);
        }
    }

    return result;
};

/**
 * Solution 4: Using Array Difference
 * Time: O(n^2) - For each unique character, checks the entire array for duplicates.
 * Space: O(n) - Uses a Set and an array for duplicates.
 */
const findDuplicatesDiff = (charArray) => {
    const uniqueChars = [...new Set(charArray)]; // Extract unique characters
    return uniqueChars.filter(char =>
        charArray.indexOf(char) !== charArray.lastIndexOf(char) // Check if it appears more than once
    );
};

/**
 * Solution 5: Array Splice
 * Time: O(n) - Removes duplicates efficiently.
 * Space: O(n) - Uses an intermediate Set and array for duplicates.
 */
const findDuplicatesSplice = (charArray) => {
    const uniqueChars = [...new Set(charArray)]; // Get unique characters
    uniqueChars.forEach(char => charArray.splice(charArray.indexOf(char), 1)); // Remove each unique char from the array
    return [...new Set(charArray)]; // Return duplicates
};

// Export the methods
module.exports = {
    findDuplicatesSet,
    findDuplicatesMap,
    findDuplicatesObject,
    findDuplicatesDiff,
    findDuplicatesSplice
};