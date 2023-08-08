// test/middleTest.js
const assertArraysEqual = require('../assertArraysEqual'); // Adjust the path as needed
const middle = require('../middle'); // Adjust the path as needed

// Test cases
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]); // Should pass
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]); // Should pass
assertArraysEqual(middle([1]), []); // Should pass

