const assertObjectsEqual = require("../assertObjectsEqual");

// Test code for assertObjectsEqual

let objectTest = {
  name: "Emily",
  hair: "Short"
};
let objectTest2 = {
  name: "Emily",
  hair: "Short"
};

let objectTest3 = {
  name: "Harry",
  friends: ['Mark', 'Mary']
};

assertObjectsEqual(objectTest, objectTest2);
assertObjectsEqual(objectTest2, objectTest3);
