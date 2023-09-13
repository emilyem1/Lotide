const assert = require('chai').assert;
const findKey = require('../findKey');

describe('#findKey', () => {
  it('should return the first key that matches the callback condition', () => {
    const result = findKey({
      "Blue Hill": { stars: 1 },
      "Akaleri":   { stars: 3 },
      "noma":      { stars: 2 },
      "elBulli":   { stars: 3 },
      "Ora":       { stars: 2 },
      "Akelarre":  { stars: 3 }
    }, x => x.stars === 2);
    assert.strictEqual(result, "noma");
  });

  it('should return undefined if no match is found', () => {
    const result = findKey({
      "Hi": { hey: 1 },
      "Hello": { yup: 2 }
    }, x => x.bonjour === 3);
    assert.isUndefined(result);
  });

  it('should return the key at the first truthy value based on the callback', () => {
    const result = findKey({
      "Hi": { hey: 1 },
      "Hello": { yup: 2 },
      "Bonjour": { yup: 2 }
    }, x => x.yup === 2);
    assert.strictEqual(result, "Hello");
  });
});
