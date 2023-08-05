const assert = require('chai').assert;
const middle = require('../middle');

describe("#middle", () => {
  it("For arrays with one or two elements, return an empty array.", () => {
    assert.deepEqual(middle([1]), []);
  });

  it("For arrays with odd number of elements, an array containing a single middle element should be returned.", () => {
    assert.deepEqual(middle([1, 2, 3]), [2]);
  });

  it("For arrays with an even number of elements, an array containing the two elements in the middle should be returned", () => {
    assert.deepEqual(middle([1, 2, 3, 4]), [2, 3]);
  });

  it("For arrays with strings", () => {
    assert.deepEqual(middle(['Hello', 'My', 'Name']), ['My']);
  });
});