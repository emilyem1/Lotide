// **** SET UP ****

// function that uses eqArrays if to determine === and returns a message

const assertArraysEqual = function(arrayOne, arrayTwo) { // Take in two arrays
  const result = eqArrays(arrayOne, arrayTwo); // Calls on function to compare
  if (result === true) { // If results are true
    console.log(`\u2705 \u2705 \u2705 Assertion Passed: ${arrayOne} === ${arrayTwo}`); // Used the Unicode representation for the green check
  } else { // If results are false
    console.log(`\u274C \u274C \u274C Assertion Failed: ${arrayOne} !== ${arrayTwo}`); // Used the Unicode representation for the red x
  }
};

// function that takes in two arrays and returns true or false

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

/* Goal: function which will return all the indices (zero-based positions) in the string where each character is found. For each letter, instead of returning just one number to represent its number of occurrences, multiple numbers may be needed to represent all the places in the string that it shows up.*/

/* Main question: How to  print the letters in a sentence as positions */

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

// letterPositions function !!!!

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


// Test Code

// Testing if function is adding both positions
assertArraysEqual(letterPositions("hello").l, [2, 3]);

// Testing if function is converting capitals to lowercase
assertArraysEqual(letterPositions("HIhey").h, [0, 2]);

// Testing if function is removing spaces
assertArraysEqual(letterPositions("yo YO yo").y, [0, 2, 4]);