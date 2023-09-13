const assert = require('chai').assert;
const flatten = require('../flatten');

describe('#flatten', () => {
  it('should flatten a nested array', () => {
    const result = flatten([1, 2, 3, [4, 5]]);
    assert.deepEqual(result, [1, 2, 3, 4, 5]);
  });

  it('should flatten multiple nested arrays', () => {
    const result = flatten([1, 2, 3, [4, 5], [6]]);
    assert.deepEqual(result, [1, 2, 3, 4, 5, 6]);
  });

  it('should flatten deeply nested arrays', () => {
    const result = flatten([1, [2, 3, [4, 5]]]);
    assert.deepEqual(result, [1, 2, 3, 4, 5]);
  });

  it('should not modify an array without nested arrays', () => {
    const result = flatten([1, 2]);
    assert.deepEqual(result, [1, 2]);
  });

  it('should return an empty array for an empty input array', () => {
    const result = flatten([]);
    assert.deepEqual(result, []);
  });
});
