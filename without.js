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

// Function to compare two arrays and log appropriate message to the console
const assertArraysEqual = function(actual, expected) {
  const areEqual = eqArrays(actual, expected);
  const message = areEqual ? "✅ Assertion Passed" : "❌ Assertion Failed";
  console.log(message);
};


//assertEqual.js
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

const without = function(source, itemsToRemove) {
  const result = [];
  for (const item of source) {
    if (!itemsToRemove.includes(item)) {
      result.push(item);
    }
  }
  return result;
};

// Test cases
const words = ["hello", "world", "lighthouse"];
const numbers = [1, 2, 3, 4, 5];

assertArraysEqual(without([1, 2, 3], [1]), [2, 3]); // => should PASS
assertArraysEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"]); // => should PASS

// Ensure the original array is not modified
const result1 = without(words, ["lighthouse"]);
assertArraysEqual(words, ["hello", "world", "lighthouse"]); // => should PASS, words array is not modified

// Test with an empty itemsToRemove array
assertArraysEqual(without([1, 2, 3], []), [1, 2, 3]); // => should PASS, returns the original array

// Test with an empty source array
assertArraysEqual(without([], [1, 2, 3]), []); // => should PASS, returns an empty array

// Test with an empty source and itemsToRemove array
assertArraysEqual(without([], []), []); // => should PASS, returns an empty array

// Test with non-matching itemsToRemove array
assertArraysEqual(without(numbers, [6, 7, 8]), [1, 2, 3, 4, 5]); // => should PASS, returns the original array

// Test with all elements in itemsToRemove array
assertArraysEqual(without(numbers, [1, 2, 3, 4, 5]), []); // => should PASS, returns an empty array

