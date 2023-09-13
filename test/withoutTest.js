const assert = require('chai').assert;
const without = require('../without');

describe('#without', () => {
  it('should return a subset of an array by removing specified elements', () => {
    const result1 = without([1, 2, 3, 4, 5], [2, 4]);
    assert.deepEqual(result1, [1, 3, 5]);

    const result2 = without([1, 2, 3], [4, 5]);
    assert.deepEqual(result2, [1, 2, 3]);

    const result3 = without([], [1, 2, 3]);
    assert.deepEqual(result3, []);

    const result4 = without(["1", "2", 3, 4], ["2", 4]);
    assert.deepEqual(result4, ["1", 3]);
  });

  it('should handle cases where itemsToRemove is not provided', () => {
    const result = without([1, 2, 3, 4, 5]);
    assert.deepEqual(result, "\u274C Provide items to remove");
  });
});
