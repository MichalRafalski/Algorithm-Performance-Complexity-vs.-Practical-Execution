# Find duplicates in character array

This project provides multiple implementations to find duplicate characters in a given array of characters. 

## Features
- Implements 5 different methods to identify duplicate characters:
  - **Using Set**
  - **Using Map**
  - **Using Object**
  - **Using Array Difference**
  - **Using Array Splice**
- Benchmarks the performance of these methods for small and large datasets.
- Handles edge cases, such as empty arrays or case sensitivity.

## Performance Insights

Array Difference (Solution 4) performed unexpectedly well, faster than the others despite its theoretical O(n²) time complexity. This could be attributed to optimizations in modern JavaScript engines for operations like filter and indexOf.

## How to Run

### Option 1: If Node.js is installed

1. Ensure you have [Node.js](https://nodejs.org/) installed (version 18 or higher is recommended): `node -v`
2. Run the script directly:
   ```bash
   node app.js
   ```
3. The output will display the time taken by each method and the duplicates found.

---

### Option 2: Using Docker

1. Build and run the project in one step:
   ```bash
   docker build -t find-duplicates-app . 
   docker run --rm find-duplicates-app
   ```

2. The output will display the time taken by each method and the duplicates found.

---

## Example Output
```text
Testing array of size: 100000000
Solution 1: Set: 6.116s
Solution 2: Map: 6.091s
Solution 3: Object: 5.521s
Solution 4: Array Difference: 4.415s
Solution 5: Array Splice: 14.219s

Testing array of size: 6
Solution 1: Set: 0.159ms
Solution 2: Map: 0.055ms
Solution 3: Object: 0.08ms
Solution 4: Array Difference: 0.037ms
Solution 5: Array Splice: 0.258ms
Duplicates found: [ 'a' ]

Testing array of size: 8
Solution 1: Set: 0.056ms
Solution 2: Map: 0.039ms
Solution 3: Object: 0.029ms
Solution 4: Array Difference: 0.032ms
Solution 5: Array Splice: 0.03ms
Duplicates found: [ 'a' ]

Testing array of size: 8
Solution 1: Set: 0.089ms
Solution 2: Map: 0.024ms
Solution 3: Object: 0.04ms
Solution 4: Array Difference: 0.071ms
Solution 5: Array Splice: 0.074ms
Duplicates found: []
```


## Extra: Unit tests. Required installing node.js and jest

### To Run Unit Tests:
1. Install Jest as a development dependency:
   ```bash
   npm install
   ```

2. Run tests:
   ```bash
   npm test
   ```

Unit tests are written for different edge cases, including arrays with single and multiple duplicates, empty arrays, and arrays with no duplicates.


# Author

[Michał Rafalski](https://www.linkedin.com/in/michalrafalski/)

