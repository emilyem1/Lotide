/* Goal: Implement without which will return a subset of a given array, removing unwanted elements */

const without = function(sourceArray, itemsToRemove) {
  if (!itemsToRemove || !itemsToRemove.length) { /* If there is no itemToRemove or no length */
    return "\u274C Provide items to remove";
  }
  let filteredArray = []; // Establish array to push into
  for (let i = 0; i < sourceArray.length; i++) { // Loop through source
    if (!itemsToRemove.includes(sourceArray[i])) { // If there is no match
      filteredArray.push(sourceArray[i]); // Push into new array
    }
  }
  return filteredArray;
};

module.exports = without;
