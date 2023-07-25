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

// map function !!!!
const map = function(array, callback) {
  const results = []; // push into 
  for (let item of array) { // loop through array
    results.push(callback(item)); // push the results in []
  }
  return results;
}

// Test code  !!!

// String
const words = ["ground", "control", "to", "major", "tom"];
const results1 = map(words, word => word[0]);
assertArraysEqual(results1, ['g', 'c', 't', 'm', 't']);

// False values
const falsyArray = [0, null, undefined, false, '', NaN];
const resultsFalsy = map(falsyArray, item => item);
assertArraysEqual(resultsFalsy, [0, null, undefined, false, '', NaN]);

// Objects
const objectArray = [{ name: 'John' }, { name: 'Jane' }, { name: 'Bob' }];
const resultsObjects = map(objectArray, obj => obj.name);
assertArraysEqual(resultsObjects, ['John', 'Jane', 'Bob']);

// Nested arrays
const arrayOfArrays = [[1, 2], [3, 4], [5, 6]];
const resultsNestedArrays = map(arrayOfArrays, arr => arr[0]);
assertArraysEqual(resultsNestedArrays, [1, 3, 5]);