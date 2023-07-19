// A function that takes in two arrays and returns true or false

const eqArrays = function(arrayOne, arrayTwo) {
  if (arrayOne.length !== arrayTwo.length) { //First compare the length
    return false; // Not the same length then false
  } else { // If they are the same length
    for (let i = 0; i < arrayOne.length; i++) { /* Loop through arrays, and since they are def the same length now, there is no error */
      if (arrayOne[i] !== arrayTwo[i]) { /* Check if the arrays contain the same contents */
        return false;
      }
    }
    return true; // If all of this is a no, then true!
  }
};

/*
Funtion that utilizes eqArrays to take in two arrays and log an appropriate message to the console.
 */

const assertArraysEqual = function(arrayOne, arrayTwo) { // Take in two arrays
  const result = eqArrays(arrayOne, arrayTwo); // Calls on function to compare
  if (result === true) { // If results are true
    console.log(`\u2705 \u2705 \u2705 Assertion Passed: ${arrayOne} === ${arrayTwo}`); // Used the Unicode representation for the green check
  } else { // If results are false
    console.log(`\u274C \u274C \u274C Assertion Failed: ${arrayOne} !== ${arrayTwo}`); // Used the Unicode representation for the red x
  }
};

/* Goal: Implement without which will return a subset of a given array, removing unwanted elements */

/*
Things to do:
1. if something is true in sourceArray and itemsToRemove, remove that item in sourceArray
2. if undefined [] or doesn't have anything that matches, console.log(\u274C Need a match)
*/

const without = function(sourceArray, itemsToRemove) {
  if (!itemsToRemove || !itemsToRemove.length) {  /* If there is no itemToRemove or no length */
    return "\u274C Provide an item to remove";
  }
  for (let i = 0; i < sourceArray.length; i++) { // Loop through source
    if (itemsToRemove.includes(sourceArray[i])) { // If it includes a match
      sourceArray.splice(i, 1); // Splice the match by 1
    }
  }
  return sourceArray;
};


// *** Test for without function ***
console.log(without([1, 2, 3])); // => [Need a match!]
console.log(without(["1", "2", "3"], [1, 2, "3"])); // => ["1", "2"]

// **** Test using assertArraysEqual ****

// Test case for removing elements that exist in the itemsToRemove array:
const result1 = without([1, 2, 3, 4, 5], [2, 4]);
assertArraysEqual(result1, [1, 3, 5]); // Expected output: [1, 3, 5]

// Test case for removing elements that do not exist in sourceArray:
const result2 = without([1, 2, 3], [4, 5]);
assertArraysEqual(result2, [1, 2, 3]); // Expected output: [1, 2, 3]

// Test case for removing elements when sourceArray is empty:
const result3 = without([], [1, 2, 3]);
assertArraysEqual(result3, []); // Expected output: []

// Test case for removing elements with different data types:
const result4 = without(["1", "2", 3, 4], ["2", 4]);
assertArraysEqual(result4, ["1", 3]); // Expected output: ["1", 3]

// * Compass Test * //
const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);