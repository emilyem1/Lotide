/* Goal: function which will return all the indices (zero-based positions) in the string where each character is found. For each letter, instead of returning just one number to represent its number of occurrences, multiple numbers may be needed to represent all the places in the string that it shows up.*/

/*
* Strategy:
* 1) Convert sentence to lowercase
* 2) Get rid of all the spaces in the sentence
* 3) Convert the string into an array containing each letter
* 4) Loop through this array
* 5) Establish position of each letter
* 6) If results already has the position, record the other one
* 7) Else just record the one position
* 8) Return the now populated object
*/

const letterPositions = function(sentence) {
  const results = {}; // Empty object to push results into
  let lower = sentence.toLowerCase(); /* Make the string all the same type of letter */
  let removeSpaces = lower.replaceAll(" ", ""); // Remove the spaces
  let sentenceArray = removeSpaces.split(""); /*  Split sentence by each letter
  and make them into an array instead of a string */

  for (let i = 0; i < sentenceArray.length; i++) { // Loop through the array
    let position = sentenceArray[i]; // Establish the position of each letter
    if (results[position]) { // if the results {}
      results[position].push(i); // already has the position, give the other one
    } else {
      results[position] = [i]; // just tell the single position in array
    }
  }
  return results;
};

module.exports = letterPositions;
