// test/middleTest.js
const assertArraysEqual = require('../assertArraysEqual'); // Adjust the path as needed
const middle = require('../middle'); // Adjust the path as needed

// Test cases
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]); // Should pass
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]); // Should pass
assertArraysEqual(middle([1]), []); // Should pass

const assert = require('chai').assert;
const middle = require('../middle');

describe("#middle", () => {
  it("returns [2] for [1, 2, 3]", () => {
    assert.deepEqual(middle([1, 2, 3]), [2]);
  });
  
  it("returns [] for [1]", () => {
    assert.deepEqual(middle([1]), []);
  });

  it("returns ['b'] for ['a', 'b', 'c']", () => {
    assert.deepEqual(middle(['a', 'b', 'c']), ['b']);
  });

  it("returns [2, 3] for [1, 2, 3, 4]", () => {
    assert.deepEqual(middle([1, 2, 3, 4]), [2, 3]);
  });
});
