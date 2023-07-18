// assertEqual function to compare if ===equal or !==equal
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`\u2705 \u2705 \u2705 Assertion Passed: ${actual} === ${expected}`); // Used the Unicode representation for the green check
  } else {
    console.log(`\u274C \u274C \u274C Assertion Failed: ${actual} !== ${expected}`); // Used the Unicode representation for the red x
  }
};

/*
Goal: Implement a function eqArrays which takes in two arrays and returns true or false 
*/

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
}

// Test
/* To use the assertEqual function, nest the eqArrays in 'actual'. Then in expected outcome, if you think the arrays will print true/false put that. */

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]) , true) // => true
assertEqual(eqArrays([1, 2, 3], [3, 2, 1]) , false) // => false
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]) , false) // => true
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]) , false) // => false