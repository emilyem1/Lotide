/* Goal: countOnly will be given an array and an object. It will return an object containing counts of everything that the input object listed. */

/* Main question: How to make the function count how many matches there are between object and array */

/*
* Strategy:
* 1) Put an empty {} (object) to return results in
* 2) Use for of loop to define the elements in allItems as names, and loop
* through the object to go through all the names
* 3) If itemsToCount has one of those names, and it's true (if it's false it
* will skip it anyway, so no need to define allItems[name] === false condition)
* 4) If results already has the name +1
* 5) Else give a value of 1
* 6) Return results which will either have a value or continue being
* undefined
*/

// countOnly function !!!

const countOnly = function(allItems, itemsToCount) {
  let results = {}; // Empty object to push into

  for (const name of allItems) { /* for of loop. 'const name' gives a name to the elements inside the object partyList to be called on */
    if (itemsToCount[name]) { /* if itemsToCount has one of those names and it's true */
      if (results[name]) { // if match total
        results[name] += 1; // already has the name, +1
      } else {
        results[name] = 1; // else it gets a value of 1
      }
    }
  }
  return results; // return the object that now stores the values
};

module.exports = countOnly;
