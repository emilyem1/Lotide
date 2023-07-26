// SET UP
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`\u2705 \u2705 \u2705 Assertion Passed: ${actual} === ${expected}`); // Used the Unicode representation for the green check
  } else {
    console.log(`\u274C \u274C \u274C Assertion Failed: ${actual} !== ${expected}`); // Used the Unicode representation for the red x
  }
};

/* Goal: Implement the function findKey which takes in an object and a callback. It should scan the object and return the first key for which the callback returns a truthy value. If no key is found, then it should return undefined. */

/* Main question: How to scan the object and return immediatly with that object key if found in callback */

/*
* Strategy:
* 1) Turn object into an array
* 2) Loop through array
* 3) If the key is found in object and callback
* 4) Return the key name
* 5) If not print undefined
*/

// findKey function !!!!

const findKey = (object, callback) => {
  let objectKeys = Object.keys(object); // turn object into array
  for (const key of objectKeys) { // loop through this array
    if (callback(object[key])) { /* if a key === callback ||  FYI: you 'if' the object[key] instead of objectKeys[key] because you only need objectKeys for the loop. need to be actual object to not throw error */
      return key; // return that key and end function
    }
  }
  return undefined; // else return undefined
};

// Test code ****

// Test to see if code is working as intended
assertEqual(findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2), "noma");

// Test to see if code will return undefined if no match is found
assertEqual(findKey({
  "Hi": { hey: 1 },
  "Hello": { yup:2 }
}, x => x.bonjour === 3), undefined);

// Test to see if function is returning key at first truthy value
assertEqual(findKey({
  "Hi": { hey: 1 },
  "Hello": { yup: 2 },
  "Bonjour": { yup: 2 }
}, x => x.yup === 2), "Hello");