const assertEqual = require('../assertEqual');
const eqArrays = require('../eqArrays');

// Test
/* To use the assertEqual function, nest the eqArrays in 'actual'. Then in expected outcome, if you think the arrays will print true/false put that. */

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]) , true); // => true
assertEqual(eqArrays([1, 2, 3], [3, 2, 1]) , false); // => false
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]) , true); // => true
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]) , false); // => false
