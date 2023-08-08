//const eqArrays = function(arr1, arr2) {
  //if (arr1.length !== arr2.length) {
   // return false;
 // }

 // for (let i = 0; i < arr1.length; i++) {
   // if (arr1[i] !== arr2[i]) {
    //  return false;
  //  }
  //
  //return true;
//};

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


// middle.js

// Function to compare two arrays and check if they are equal
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

// Function to compare two arrays and log an appropriate message to the console
//const assertArraysEqual = function(actual, expected) {
  //const areEqual = eqArrays(actual, expected);
  //const message = areEqual ? "✅ Assertion Passed" : "❌ Assertion Failed";
  //console.log(message);
//};

// Function to return the middle element(s) of the given array
const middle = function(array) {
  const length = array.length;
  if (length <= 2) {
    return [];
  } else if (length % 2 === 1) {
    // Odd number of elements, return the middle element
    const middleIndex = Math.floor(length / 2);
    return [array[middleIndex]];
  } else {
    // Even number of elements, return the two middle elements
    const middleIndex1 = length / 2 - 1;
    const middleIndex2 = length / 2;
    return [array[middleIndex1], array[middleIndex2]];
  }
};
module.exports = middle; // Export the middle function
// TEST CODE
assertArraysEqual(middle([1]), []); // Should pass, no middle
assertArraysEqual(middle([1, 2]), []); // Should pass, no middle
assertArraysEqual(middle([1, 2, 3]), [2]); // Should pass, middle is [2]
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]); // Should pass, middle is [3]
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]); // Should pass, middle is [2, 3]
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]); // Should pass, middle is [3, 4]









