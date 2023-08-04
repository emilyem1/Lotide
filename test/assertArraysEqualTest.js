const assertArraysEqual = require('../assertArraysEqual');

// Test
assertArraysEqual([1, 2, 3], [1, 2, 3]); // true
assertArraysEqual([1, 2, 3], [1, 2, 4]); // false
assertArraysEqual(['a', 'b', 'c'], ['a', 'b', 'c']); // true
assertArraysEqual(['a', 'b', 'c'], ['a', 'b', 'd']); // false
assertArraysEqual([1, 2, 3], ['1', '2', '3']); // false