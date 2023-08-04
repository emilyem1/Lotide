const assertArraysEqual = require('../assertArraysEqual');
const middle = require('../middle');

// *** Test ****

/*For arrays with one or two elements, there is no middle. Return an empty array. */
assertArraysEqual(middle([1]), []); // => []
assertArraysEqual(middle([1, 2]), []); // => []

/*For arrays with odd number of elements, an array containing a single middle element should be returned. */
assertArraysEqual(middle([1, 2, 3]), [2]);
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]);

/* For arrays with an even number of elements, an array containing the two elements in the middle should be returned */
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]);
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);

// For arrays with strings
assertArraysEqual(middle(['Hello', 'My', 'Name']), ['My']);
assertArraysEqual(middle(['Hello', 'My', 'Name', 'Emily']), ['My', 'Name']);