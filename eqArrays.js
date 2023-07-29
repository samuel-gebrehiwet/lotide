const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }

  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }

  return true;
};




// assertEqual.js
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};

// TEST CODE
assertEqual("Lighthouse Labs", "Bootcamp"); // ❌ Assertion Failed: Lighthouse Labs !== Bootcamp
assertEqual(1, 1); // ✅ Assertion Passed: 1 === 1

// Test cases for eqArrays function
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // Should pass
assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false); // Should pass
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true); // Should pass
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false); // Should pass
