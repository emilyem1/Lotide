const assert = require('chai').assert;
const takeUntil = require('../takeUntil');

describe('#takeUntil', () => {
  it('should return elements from an array until a truthy value is encountered', () => {
    const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
    const result = takeUntil(data1, x => x < 0);
    assert.deepEqual(result, [1, 2, 5, 7, 2]);
  });

  it('should return elements from an array until a specific value is encountered', () => {
    const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
    const result = takeUntil(data2, x => x === ',');
    assert.deepEqual(result, ["I've", 'been', 'to', 'Hollywood']);
  });
});
