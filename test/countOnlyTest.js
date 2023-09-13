const assert = require('chai').assert;
const countOnly = require('../countOnly');

describe('#countOnly', () => {
  const firstNames = [
    "Karl",
    "Salima",
    "Agouhanna",
    "Fang",
    "Kavith",
    "Jason",
    "Salima",
    "Fang",
    "Joe"
  ];

  const results = {
    Jason: true,
    Karima: true,
    Fang: true,
    Agouhanna: false
  };

  it('should return the count of names that are set to true in the results object', () => {
    const result1 = countOnly(firstNames, results);
    assert.equal(result1["Jason"], 1);
    assert.isUndefined(result1["Karima"]);
    assert.equal(result1["Fang"], 2);
    assert.isUndefined(result1["Agouhanna"]);
  });

  it('should handle an empty array of names', () => {
    const result = countOnly([], results);
    assert.deepEqual(result, {});
  });

  it('should handle an empty results object', () => {
    const result = countOnly(firstNames, {});
    assert.deepEqual(result, {});
  });
});
