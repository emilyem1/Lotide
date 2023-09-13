/* Goal: Create a function called flatten that will take in an array containing elements including nested arrays of elements, and return a "flattened" version of the array. AKA an array with nested arrays will return one array */

/*
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

module.exports = flatten;
