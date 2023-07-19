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

/* Goal: Implement middle which will take in an array and return the middle-most element(s) of the given array. */

/*
Main Question: How to remove everything but the middle element for odd, and the middle two for even

Strategy:
1. Create an emmpty array to push new array into
2. Create odd and even variables that will find the middle in an array
3. If array length is less than 2, return []
4. If array length is even
-  Push array into [] while calling on even variable
- +1 so it called on both elements in the middle, not just 1
5. If odd push array into [] while calling on odd variable
6. Test utilizing assertArraysEqual

*/
const middle = function(array) {
  let noHeadTail = []; // Empty array to push into
  const oddMid = Math.floor(array.length / 2); // Find the middle odd
  const evenMid = Math.floor(array.length / 2 - 1); // Find the middle even

  if (array.length <= 2) { // If array has 2 or less elements
    return noHeadTail; // Return an empty []
  } else if (array.length % 2 === 0) { // If array is even
    noHeadTail.push(array[evenMid]); // Find first middle
    noHeadTail.push(array[evenMid + 1]); // Second middle
  } else { // If array is odd
    noHeadTail.push(array[oddMid]); // Find middle
  }

  return noHeadTail; // Return [] arrays have been pushed into
};



// *** Test ***

/*For arrays with one or two elements, there is no middle. Return an empty array. */
assertArraysEqual(middle([1]), []); // => []
assertArraysEqual(middle([1, 2]), []); // => []

/*For arrays with odd number of elements, an array containing a single middle element should be returned. */
assertArraysEqual(middle([1, 2, 3]), [2]);
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]);

/* For arrays with an even number of elements, an array containing the two elements in the middle should be returned */
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]);
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);

// For arrays with strings
assertArraysEqual(middle(['Hello', 'My', 'Name']), ['My']);
assertArraysEqual(middle(['Hello', 'My', 'Name', 'Emily']), ['My', 'Name']);