const assert = require('chai').assert;
const eqObjects = require('../eqObjects');

describe('#eqObjects', () => {
  it('should return true for objects with the same key-value pairs (primitives as values)', () => {
    const shirtObject = { color: "red", size: "medium" };
    const anotherShirtObject = { size: "medium", color: "red" };
    assert.isTrue(eqObjects(shirtObject, anotherShirtObject));
  });

  it('should return false for objects with different key-value pairs (primitives as values)', () => {
    const shirtObject = { color: "red", size: "medium" };
    const longSleeveShirtObject = { size: "medium", color: "red", sleeveLength: "long" };
    assert.isFalse(eqObjects(shirtObject, longSleeveShirtObject));
  });

  it('should return true for objects with the same key-value pairs (arrays as values)', () => {
    const multiColorShirtObject = { colors: ["red", "blue"], size: "medium" };
    const anotherMultiColorShirtObject = { size: "medium", colors: ["red", "blue"] };
    assert.isTrue(eqObjects(multiColorShirtObject, anotherMultiColorShirtObject));
  });

  it('should return false for objects with different key-value pairs (arrays as values)', () => {
    const multiColorShirtObject = { colors: ["red", "blue"], size: "medium" };
    const longSleeveMultiColorShirtObject = { size: "medium", colors: ["red", "blue"], sleeveLength: "long" };
    assert.isFalse(eqObjects(multiColorShirtObject, longSleeveMultiColorShirtObject));
  });
});
