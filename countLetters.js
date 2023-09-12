/* Goal: Function should take in a sentence (as a string) and then return a count of each of the letters in that sentence. */

/* Main Question: How to count letters in a string and return that count */

/*
* Strategy:
* 1) Object to push results into {}
* 2) Covert all strings into same type of letter aka lowercase
* 3) Replace all spaces in string with no space so it's not counted
* 4) Loop through string and name contents as letters
* 5) If there are multiple letters += 1 into {}
* 6) If there is only one letter = 1 into {}
* 7) Return now populated {}
*/

// countLetters function !!!

const countLetters = function(string) {
  let results = {}; // Empty result to populate
  let lower = string.toLowerCase(); /* Make the string all the same type of letter */
  let removeSpaces = lower.replaceAll(" ", ""); // Remove the spaces
  for (const letters of removeSpaces) { /* removeSpaces now updated version of string with no spaces and all lowercase. now loop through */
    if (results[letters]) { // if the results {}
      results[letters] += 1; // already has the letter, +1
    } else {
      results[letters] = 1; // populate {} with a count of 1
    }
  }
  return results;
};

module.exports = countLetters;
