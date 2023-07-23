// SET UP !!!

// assertEqual function
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`\u2705 \u2705 \u2705 Assertion Passed: ${actual} === ${expected}`); // Used the Unicode representation for the green check
  } else {
    console.log(`\u274C \u274C \u274C Assertion Failed: ${actual} !== ${expected}`); // Used the Unicode representation for the red x
  }
};

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

/* Goal: function which will take in two objects and returns true or false, based on a perfect match.*/

/* Main question: How to make function tell if two objects have the same number of keys and the value for each key in one object is the same as the value for that same key in the other object */

/*
* Strategy:
* 1) First compare the length of the keys. To do this you need to use
* Object.keys(object1) to turn the objects into arrays. You can then
* use .length on these arrays to see if they are the same length
* 2) If they are, loop through the keys using a for in loop
* 3) Use Array.isArray to see if there are arrays in the objects, and then
* use eqArrays to determine if those arrays are t/f.
* 4) If the object has an array and true, or no arrays, check to see if
* the keys in the objects are the same.
* 5) If all this passed without returning a false, then true!
* 6) Use assertEqual to compare if return is printing correct t/f
*/

// eqObjects function !!!!

// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!

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



// Test Code

// Primitives as values
const shirtObject = { color: "red", size: "medium" };
const anotherShirtObject = { size: "medium", color: "red" };
eqObjects(shirtObject , anotherShirtObject); // => true
assertEqual(eqObjects(shirtObject , anotherShirtObject), true);

const longSleeveShirtObject = { size: "medium", color: "red", sleeveLength: "long" };
eqObjects(shirtObject , longSleeveShirtObject); // => false
assertEqual(eqObjects(shirtObject , longSleeveShirtObject), false);

// Arrays as values
const multiColorShirtObject = { colors: ["red", "blue"], size: "medium" };
const anotherMultiColorShirtObject = { size: "medium", colors: ["red", "blue"] };
eqObjects(multiColorShirtObject  , anotherMultiColorShirtObject); // => true
assertEqual(eqObjects(multiColorShirtObject  , anotherMultiColorShirtObject), true);

const longSleeveMultiColorShirtObject = { size: "medium", colors: ["red", "blue"], sleeveLength: "long" };
eqObjects(multiColorShirtObject  , longSleeveMultiColorShirtObject); // => false
assertEqual(eqObjects(multiColorShirtObject , longSleeveMultiColorShirtObject), false);