/* Goal: Implement the function findKey which takes in an object and a callback. It should scan the object and return the first key for which the callback returns a truthy value. If no key is found, then it should return undefined. */

/*
* Strategy:
* 1) Turn object into an array
* 2) Loop through array
* 3) If the key is found in object and callback
* 4) Return the key name
* 5) If not print undefined
*/

const findKey = (object, callback) => {
  let objectKeys = Object.keys(object); // turn object into array
  for (const key of objectKeys) { // loop through this array
    if (callback(object[key])) { /* if a key === callback ||  FYI: you 'if' the object[key] instead of objectKeys[key] because you only need objectKeys for the loop. need to be actual object to not throw error */
      return key; // return that key and end function
    }
  }
  return undefined; // else return undefined
};

module.exports = findKey;
