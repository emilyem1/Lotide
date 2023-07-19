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

/* Goal: Create a function called flatten that will take in an array containing elements including nested arrays of elements, and return a "flattened" version of the array. AKA an array with nested arrays will return one array */

/*
Main Question: Find out how to add nested arrays into one array

Strategy:
1. Create empty array to push into []
2. Loop through nestedArray to see full contents
3. Use Array.isArray on nestedArray to see if that contents has a nested array
4. If !false, push nestedArray into flattenedArray [] and function ends
5. If true:
- Create variable that will flatten the nestedArray
- Push the newly flattened array using the spread operator into []
6. To test I must create an array that matches what I think output is
*/

const flatten = function(nestedArray) {
  let flattenedArray = []; // create empty array

  for (let i = 0; i < nestedArray.length; i++) { // loop through array
    if (!Array.isArray(nestedArray[i])) { // if not nested array
      flattenedArray.push(nestedArray[i]); // push into [] and return
    } else {
      const subArray = flatten(nestedArray[i]); // flatten nested array
      flattenedArray.push(...subArray); /* push the flattened subArray and use ... (spread operator) to expand the nested arrays into the original array */
    }
  }
  return flattenedArray; /* Return the once empty [] with either true or false conditions! */
};

// ***** Test *****

// Test if funtion will flatten a nested array
assertArraysEqual(flatten([1, 2, 3, [4, 5]]), [1, 2, 3, 4, 5]);
// ✅ ✅ ✅ Assertion Passed: 1,2,3,4,5 === 1,2,3,4,5

// Test if function will flatten two nested array
assertArraysEqual(flatten([1, 2, 3, [4, 5], [6]]), [1, 2, 3, 4, 5, 6]);
// ✅ ✅ ✅ Assertion Passed: 1,2,3,4,5,6 === 1,2,3,4,5,6

//Test if function will flatten a nested array within a nested array
assertArraysEqual(flatten([1, [2, 3, [4, 5]]]), [1, 2, 3, 4, 5]);
// ✅ ✅ ✅ Assertion Passed: 1,2,3,4,5 === 1,2,3,4,5

//Test if function is pushing anything into array without a nested array
assertArraysEqual(flatten([1, 2]), [1, 2]);
// ✅ ✅ ✅ Assertion Passed: 1,2 === 1,2

//Test how function reacts with empty array
assertArraysEqual(flatten([]), [1, 2, 3, 4]);
// ❌ ❌ ❌ Assertion Failed:  !== 1,2,3,4

//Test how function reacts with strings
assertArraysEqual(flatten(["Hello", "My", ["Name", "Is"]]), [1, 2, 3, 4]);
// ❌ ❌ ❌ Assertion Failed: Hello,My,Name,Is !== 1,2,3,4