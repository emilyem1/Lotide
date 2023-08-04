/* Goal: Implement middle which will take in an array and return the middle-most element(s) of the given array. */

/*
Main Question: How to remove everything but the middle element for odd, and the middle two for even

Strategy:
1. Create an emmpty array to push new array into
2. Create odd and even variables that will find the middle in an array
3. If array length is less than 2, return []
4. If array length is even
-  Push array into [] while calling on even variable
- +1 so it called on both elements in the middle, not just 1
5. If odd push array into [] while calling on odd variable
6. Test utilizing assertArraysEqual

*/

const middle = function(array) {
  let noHeadTail = []; // Empty array to push into
  const oddMid = Math.floor(array.length / 2); // Find the middle odd
  const evenMid = Math.floor(array.length / 2 - 1); // Find the middle even

  if (array.length <= 2) { // If array has 2 or less elements
    return noHeadTail; // Return an empty []
  } else if (array.length % 2 === 0) { // If array is even
    noHeadTail.push(array[evenMid]); // Find first middle
    noHeadTail.push(array[evenMid + 1]); // Second middle
  } else { // If array is odd
    noHeadTail.push(array[oddMid]); // Find middle
  }

  return noHeadTail; // Return [] arrays have been pushed into
};

module.exports = middle;