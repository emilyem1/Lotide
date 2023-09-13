/* Goal: function which takes in an object and a value. It should scan the object and return the first key which contains the given value. If no key with that given value is found, then it should return undefined.*/

/*
* Strategy:
* 1) Make the keys in the object into an array that can be read
* 2) Loop through this array
* 3) If show is found in array
* 4) Return the key aka the genre
* 5) If nothing is found return undefined
* 6) Test case using assertEqual to determine if correct genre is being returned
*/

const findKeyByValue = function(bestTVShowsByGenre, show) {
  let genres = Object.keys(bestTVShowsByGenre); /* makes keys of the object an array so information can be accessed */
  for (const genre of genres) { // loop through this array
    if (bestTVShowsByGenre[genre] === show) { // if name is found in array
      return genre; // return that name
    }
  }
  return undefined; // if nothing then return undefined
};

module.exports = findKeyByValue;
