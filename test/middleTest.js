// test/middleTest.js
const assertArraysEqual = require('../assertArraysEqual'); // Adjust the path as needed
const middle = require('../middle'); // Adjust the path as needed

// Test cases
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]); // Should pass
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]); // Should pass
assertArraysEqual(middle([1]), []); // Should pass

const assertArraysEqual = require('../assertArraysEqual'); // Adjust the path as needed
const middle = require('../middle'); // Adjust the path as needed
const assert = require('chai').assert;

describe("#middle", () => {
  it("returns [3] for [1, 2, 3, 4, 5]", () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5]), [3]);
  });

  it("returns [2, 3] for [1, 2, 3, 4]", () => {
    assert.deepEqual(middle([1, 2, 3, 4]), [2, 3]);
  });

  it("returns [] for [1]", () => {
    assert.deepEqual(middle([1]), []);
  });
});
