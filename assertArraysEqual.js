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
 Goal: Take in two arrays and console.log an appropriate message to the console.
 */

const assertArraysEqual = function(arrayOne, arrayTwo) { // Take in two arrays
  const result = eqArrays(arrayOne, arrayTwo); // Calls on function to compare
  if (result === true) { // If results are true
    console.log(`\u2705 \u2705 \u2705 Assertion Passed: ${arrayOne} === ${arrayTwo}`); // Used the Unicode representation for the green check
  } else { // If results are false
    console.log(`\u274C \u274C \u274C Assertion Failed: ${arrayOne} !== ${arrayTwo}`); // Used the Unicode representation for the red x
  }
};

// Test
assertArraysEqual([1, 2, 3], [1, 2, 3]); // true
assertArraysEqual([1, 2, 3], [1, 2, 4]); // false
assertArraysEqual(['a', 'b', 'c'], ['a', 'b', 'c']); // true
assertArraysEqual(['a', 'b', 'c'], ['a', 'b', 'd']); // false
assertArraysEqual([1, 2, 3], ['1', '2', '3']); // false