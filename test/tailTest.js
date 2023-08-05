const assert = require('chai').assert;
const tail = require('../tail.js');

const result = tail(['Hello', 'Lighthouse', 'Labs']);
const test = tail([4]);

describe("#tail", () => {
  it("returns 'Lighthouse' for result[0]", () => {
    assert.deepEqual(result[0], 'Lighthouse');
  });

  it("returns 'Labs' for result[1]", () => {
    assert.deepEqual(result[1], 'Labs');
  });

  it("returns 'undefined' for test[0]", () => {
    assert.deepEqual(test[0], undefined);
  });
});