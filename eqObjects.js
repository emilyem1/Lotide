const eqArrays = require("./eqArrays");

/* Goal: function which will take in two objects and returns true or false, based on a perfect match.*/

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

module.exports = eqObjects;
