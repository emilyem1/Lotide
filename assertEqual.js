// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`\u2705 \u2705 \u2705 Assertion Passed: ${actual} === ${expected}`); // Used the Unicode representation for the green check
  } else {
    console.log(`\u274C \u274C \u274C Assertion Failed: ${actual} !== ${expected}`); // Used the Unicode representation for the red x
  }
};

// OLD WAY WITHOUT TEMPLATE LITERALS 
//const assertEqual = function(actual, expected) {
//   if (actual === expected) {
//     console.log('\u2705 \u2705 \u2705 Assertion Passed: ' + actual + ' === ' + expected); // Used the Unicode representation for the green check
//   } else {
//     console.log('\u274C \u274C \u274C Assertion Failed: ' + actual + ' !== ' + expected); // Used the Unicode representation for the red x
//   }
// };

// TEST CODE
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);