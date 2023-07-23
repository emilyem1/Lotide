// SET UP !!!

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

// eqObjects function
const eqObjects = function(object1, object2) {
  if (Object.keys(object1).length !== Object.keys(object2).length) {
    return false; /* Compare length of objects, if they aren't the same length then false */
  }
  for (const key in object1) { // If true, loop through the keys
    if (Array.isArray(object1[key]) && Array.isArray(object2[key])) { /* If there is an array in both objects */
      if (!eqArrays(object1[key], object2[key])) { /* And those arrays are not the same */
        return false;
      } // If true, or no array
    } else if (object1[key] !== object2[key]) { /* if the keys in the objects don't match */
      return false;
    }
  }
  return true;// If all of this is a no, then true!
};

// assertObjectsEqual function !!!!

const assertObjectsEqual = function(object1, object2) { // Take in two objects
  const inspect = require('util').inspect; // Inspects the object
  console.log(`Object1 contents: ${inspect(object1)}`); /* Returns object1 as string to compare to object2 */
  console.log(`Object2 contents: ${inspect(object2)}`); /* Returns object2 as string to compare to object1 */
  const result = eqObjects(object1, object2); // Calls on function to compare
  if (result === true) { // If results are true
    console.log(`\u2705 \u2705 \u2705 Assertion Passed: ${object1} === ${object2}`);
  } else { // If results are false
    console.log(`\u274C \u274C \u274C Assertion Failed: ${object1} !== ${object2}`);
  }
};


// Test Code

let objectTest = {
  name: "Emily",
  hair: "Short"
};
let objectTest2 = {
  name: "Emily",
  hair: "Short"
};

let objectTest3 = {
  name: "Harry",
  friends: ['Mark', 'Mary']
};

assertObjectsEqual(objectTest, objectTest2);
assertObjectsEqual(objectTest2, objectTest3);

