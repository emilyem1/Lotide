const assert = require('chai').assert;
const letterPositions = require('../letterPositions');

describe('#letterPositions', () => {
  it('should return both positions of the letter "l"', () => {
    const result = letterPositions("hello").l;
    assert.deepEqual(result, [2, 3]);
  });

  it('should convert capital letters to lowercase', () => {
    const result = letterPositions("HIhey").h;
    assert.deepEqual(result, [0, 2]);
  });

  it('should remove spaces and return positions of the letter "y"', () => {
    const result = letterPositions("yo YO yo").y;
    assert.deepEqual(result, [0, 2, 4]);
  });
});
