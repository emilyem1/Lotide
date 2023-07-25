// SET UP

// eqArrays function
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

// assertArraysEqual function
const assertArraysEqual = function(arrayOne, arrayTwo) { // Take in two arrays
  const result = eqArrays(arrayOne, arrayTwo); // Calls on function to compare
  if (result === true) { // If results are true
    console.log(`\u2705 \u2705 \u2705 Assertion Passed: ${arrayOne} === ${arrayTwo}`); // Used the Unicode representation for the green check
  } else { // If results are false
    console.log(`\u274C \u274C \u274C Assertion Failed: ${arrayOne} !== ${arrayTwo}`); // Used the Unicode representation for the red x
  }
};

/* Goal: Implement takeUntil which will keep collecting items from a provided array until the callback provided returns a truthy value. */

/* Main question: How to make function stop when a trigger is reached */

/* Other questions: Does your takeUntil function need to loop through the entire array once the callback returns a truthy value? If not, how can we make it stop? */

/*
* Strategy:
* 1) Create empty array to push results into
* 2) For of loop through array
* 3) If there is any match between element and function
* 4) Return/End function
* 5) Else keep pushing through array
* 6) Return once getting to end of array if no match
*/

// takeUntil function !!!!

const takeUntil = function(array, callback) {
  const results = []; // empty array to push into
  for (const element of array) { // loop through array
    if (callback(element)) { /* if there is a match in array to something in callback */
      return results; /* stop the function and return everything before the match */
    }
    results.push(element); // if no match, keep going until end of array
  }
  return results; // return entire array that was just pushed if no match
};
// Test code
const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
assertArraysEqual(results1, [ 1, 2, 5, 7, 2 ]);

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
assertArraysEqual(results2, [ "I've", 'been', 'to', 'Hollywood']);
