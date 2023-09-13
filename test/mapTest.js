const assert = require('chai').assert;
const map = require('../map');

describe('#map', () => {
  it('should map an array of words to their first letter', () => {
    const words = ["ground", "control", "to", "major", "tom"];
    const result = map(words, word => word[0]);
    assert.deepEqual(result, ['g', 'c', 't', 'm', 't']);
  });

  it('should map an array of falsy values and return the same values', () => {
    const falsyArray = [0, null, undefined, false, '', NaN];
    const result = map(falsyArray, item => item);
    assert.deepEqual(result, [0, null, undefined, false, '', NaN]);
  });

  it('should map an array of objects to their "name" property', () => {
    const objectArray = [{ name: 'John' }, { name: 'Jane' }, { name: 'Bob' }];
    const result = map(objectArray, obj => obj.name);
    assert.deepEqual(result, ['John', 'Jane', 'Bob']);
  });

  it('should map an array of arrays and return the first element of each sub-array', () => {
    const arrayOfArrays = [[1, 2], [3, 4], [5, 6]];
    const result = map(arrayOfArrays, arr => arr[0]);
    assert.deepEqual(result, [1, 3, 5]);
  });
});
