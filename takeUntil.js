/* Goal: Implement takeUntil which will keep collecting items from a provided array until the callback provided returns a truthy value. */

/*
* Strategy:
* 1) Create empty array to push results into
* 2) For of loop through array
* 3) If there is any match between element and function
* 4) Return/End function
* 5) Else keep pushing through array
* 6) Return once getting to end of array if no match
*/

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

module.exports = takeUntil;
