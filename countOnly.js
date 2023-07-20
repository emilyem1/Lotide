// **** SET UP ****

// assertEqual function: tells if two elements are ===
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`\u2705 \u2705 \u2705 Assertion Passed: ${actual} === ${expected}`); // Used the Unicode representation for the green check
  } else {
    console.log(`\u274C \u274C \u274C Assertion Failed: ${actual} !== ${expected}`); // Used the Unicode representation for the red x
  }
};

/* Goal: countOnly will be given an array and an object. It will return an object containing counts of everything that the input object listed. */

/* Main question: How to make the function count how many matches there are between object and array */

/*
* Strategy:
* 1) Put an empty {} (object) to return results in
* 2) Use for of loop to define the elements in allItems as names, and loop
* through the object to go through all the names
* 3) If itemsToCount has one of those names, and it's true (if it's false it
* will skip it anyway, so no need to define allItems[name] === false condition)
* 4) If matchTotal already has the name +1
* 5) Else give a value of 1
* 6) Return matchTotal which will either have a value or continue being
* undefined
*/

// countOnly function !!!

const countOnly = function(allItems, itemsToCount) {
  matchTotal = {}; // Empty object to push into

  for (const name of allItems) { /* for of loop. 'const name' gives a name to the elements inside the object partyList to be called on */
    if (itemsToCount[name]) { /* if itemsToCount has one of those names and it's true */
      if (matchTotal[name]) { // if match total
        matchTotal[name] += 1; // already has the name, +1
      } else {
        matchTotal[name] = 1; // else it gets a value of 1
      }
    }
  }
  return matchTotal; // return the object that now stores the values
};

// Test
const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const partyList = {
  Jason: true,
  Karima: true,
  Fang: true,
  Agouhanna: false };


const result1 = countOnly(firstNames, partyList);

assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);
assertEqual(result1["Agouhanna"], undefined);