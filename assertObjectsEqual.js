const eqObjects = require("../lotide/eqObjects");

const assertObjectsEqual = function(object1, object2) { // Take in two objects
  const inspect = require('util').inspect; // Inspects the object
  console.log(`Object1 contents: ${inspect(object1)}`); /* Returns object1 as string to compare to object2 */
  console.log(`Object2 contents: ${inspect(object2)}`); /* Returns object2 as string to compare to object1 */
  const result = eqObjects(object1, object2); // Calls on function to compare
  if (result === true) { // If results are true
    console.log(`\u2705 \u2705 \u2705 Assertion Passed: ${object1} === ${object2}`);
  } else { // If results are false
    console.log(`\u274C \u274C \u274C Assertion Failed: ${object1} !== ${object2}`);
  }
};

module.exports = assertObjectsEqual;
