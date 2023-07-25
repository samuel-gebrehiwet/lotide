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



// head.js

// FUNCTION IMPLEMENTATION
const head = function(array) {
  if (array.length === 0) {
    return undefined;
  }
  return array[0];
};

// TEST CASES
const testArray1 = [5, 6, 7];
const testArray2 = ["Hello", "Lighthouse", "Labs"];

