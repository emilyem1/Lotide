const assertEqual = require('../assertEqual');
const tail = require('../tail.js');

const result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result.length, 2); // ensure we get back two elements
assertEqual(result[0], "Lighthouse"); // ensure first element is "Lighthouse"
assertEqual(result[1], "Labs"); // ensure second element is "Labs"

const test = tail([4]);
assertEqual(test.length, 1); // ensuring that after the slice there is nothing left in array
assertEqual(test[0], 4);