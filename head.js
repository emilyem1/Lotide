const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`\u2705 \u2705 \u2705 Assertion Passed: ${actual} === ${expected}`); // Used the Unicode representation for the green check
  } else {
    console.log(`\u274C \u274C \u274C Assertion Failed: ${actual} !== ${expected}`); // Used the Unicode representation for the red x
  }
};

const head = function(array) {
  return array[0]; 
}

// Test Assertions 
assertEqual(head([5,6,7]), 5);
assertEqual(head([4]));
assertEqual(head([]));
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");