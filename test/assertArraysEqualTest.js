const assertArraysEqual = require('../assertArraysEqual');

describe('assertArraysEqual', () => {
  it('should return true when comparing [1, 2, 3] to [1, 2, 3]', () => {
    if (assertArraysEqual([1, 2, 3], [1, 2, 3])) {
      console.log("true");
    }
  });

  it('should return false when comparing [1, 2, 3] to [1, 2, 4]', () => {
    if (assertArraysEqual([1, 2, 3], [1, 2, 4])) {
      console.log("false");
    }
  });

  it('should return true when comparing ["a", "b", "c"] to ["a", "b", "c"]', () => {
    if (assertArraysEqual(['a', 'b', 'c'], ['a', 'b', 'c'])) {
      console.log("true");
    }
  });

  it('should return false when comparing ["a", "b", "c"] to ["a", "b", "d"]', () => {
    if (assertArraysEqual(['a', 'b', 'c'], ['a', 'b', 'd'])) {
      console.log("false");
    }
  });

  it('should return false when comparing [1, 2, 3] to ["1", "2", "3"]', () => {
    if (assertArraysEqual([1, 2, 3], ['1', '2', '3'])) {
      console.log("false");
    }
  });
});