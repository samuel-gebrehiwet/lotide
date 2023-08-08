const assertArraysEqual = require('../assertArraysEqual');

// Test cases
assertArraysEqual([1, 2, 3], [1, 2, 3]); // Should pass
assertArraysEqual([], []); // Should pass
assertArraysEqual(["Lighthouse", "Labs"], ["Bootcamp"]); // Should fail

// Additional test cases
assertArraysEqual([1, 2, 3], [1, 2]); // Should fail
assertArraysEqual(["a", "b", "c"], ["a", "b", "c"]); // Should pass

