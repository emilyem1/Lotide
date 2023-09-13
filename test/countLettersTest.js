const assert = require('chai').assert;
const countLetters = require('../countLetters');

describe('#countLetters', () => {
  it('should count letters in a string and return the counts', () => {
    const result = countLetters('Hello how are you');
    assert.deepEqual(result, {
      h: 2,
      e: 2,
      l: 2,
      o: 3,
      w: 1,
      a: 1,
      r: 1,
      y: 1,
      u: 1,
    });
  });

  it('should handle strings with numbers', () => {
    const result = countLetters('HAha hahaha 1');
    assert.deepEqual(result, {
      h: 5,
      a: 5,
      "1": 1
    });
  });

  it('should handle an empty string', () => {
    const result = countLetters('');
    assert.deepEqual(result, {});
  });

  it('should handle a string with spaces', () => {
    const result = countLetters('   a b c   ');
    assert.deepEqual(result, {
      a: 1,
      b: 1,
      c: 1,
    });
  });
});
