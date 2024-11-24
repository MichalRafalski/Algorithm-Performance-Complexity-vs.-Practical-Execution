const { findDuplicatesSet,
    findDuplicatesMap,
    findDuplicatesObject,
    findDuplicatesDiff,
    findDuplicatesSplice } = require('./methods');

/**
 * Test all methods with the same data and compare their results.
 * @param {Array} testArray - The list of characters to test.
 * @param {boolean} showOutput - Whether to show the duplicates found.
 */
const test = (testArray, showOutput = false) => {
    console.log("\nTesting array of size:", testArray.length);
    const results = [];

    console.time("Solution 1: Set");
    results.push(findDuplicatesSet(testArray));
    console.timeEnd("Solution 1: Set");

    console.time("Solution 2: Map");
    results.push(findDuplicatesMap(testArray));
    console.timeEnd("Solution 2: Map");

    console.time("Solution 3: Object");
    results.push(findDuplicatesObject(testArray));
    console.timeEnd("Solution 3: Object");

    console.time("Solution 4: Array Difference");
    results.push(findDuplicatesDiff(testArray));
    console.timeEnd("Solution 4: Array Difference");

    console.time("Solution 5: Array Splice");
    results.push(findDuplicatesSplice(testArray));
    console.timeEnd("Solution 5: Array Splice");

    // Check if all methods return the same result
    if (!results.every((val) => JSON.stringify(val.sort()) === JSON.stringify(results[0].sort()))) {
        throw new Error("Results do not match!");
    }

    if (showOutput) {
        console.log("Duplicates found:", results[0]);
    }
};

// Generate a large test case for meaningful comparison
const generateTestCase = (size) => {
    const characters = [];
    const possibleChars = "abcdefghijklmnopqrstuvwxyz";
    for (let i = 0; i < size; i++) {
        characters.push(possibleChars[Math.floor(Math.random() * possibleChars.length)]);
    }
    return characters;
};

// Run tests
console.log("Running tests. Please wait...");
test(generateTestCase(100000000)); // Test with a large random array
test([..."caiopa"], true);      // Expected output: ["a"]
test([..."capoeira"], true);    // Expected output: ["a", "i"]
test([..."CapoeirA"], true);    // Expected output: []

// The Array Difference (Solution 4) was unexpectedly faster for the large dataset compared to methods like Set, Map, or Object, 
// despite its theoretical time complexity being higher (O(n²)). 
// This anomaly might occur due to modern JavaScript engines optimizing the filter and indexOf calls.