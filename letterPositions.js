//const eqArrays = function(arr1, arr2) {
 // if (arr1.length !== arr2.length) {
    //return false;
//  }

 // for (let i = 0; i < arr1.length; i++) {
  //  if (arr1[i] !== arr2[i]) {
    //  return false;
   // }
 // }

  //return true;
//};

// Function to compare two arrays and log appropriate message to the console
const assertArraysEqual = function(actual, expected) {
  const areEqual = eqArrays(actual, expected);
  const message = areEqual ? "✅ Assertion Passed" : "❌ Assertion Failed";
  console.log(message);
};


//assertEqual.js
//const assertEqual = function(actual, expected) {
  //if (actual === expected) {
    //.log(`✅ Assertion Passed: ${actual} === ${expected}`);
 // } else {
   // console.log(`❌ Assertion Failed: ${actual} !== ${expected}`);
 // }
//};

// TEST CODE
//assertEqual("Lighthouse Labs", "Bootcamp"); // ❌ Assertion Failed: Lighthouse Labs !== Bootcamp
//assertEqual(1, 1); // ✅ Assertion Passed: 1 === 1

// Test cases for eqArrays function
//assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // Should pass
//assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false); // Should pass
//assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true); // Should pass
//assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false); // Should pass


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

// Copy and paste your assertArraysEqual and eqArrays functions here

//  test for the letterPositions function
//const testResult = letterPositions("hello");
//assertArraysEqual(testResult.e, [1]); // This test should fail initially

const letterPositions = function(sentence) {
  const results = {};

  for (let i = 0; i < sentence.length; i++) {
    const char = sentence[i];
    if (char !== ' ') {
      if (!results[char]) {
        results[char] = [];
      }
      results[char].push(i);
    }
  }

  return results;
};

// Test the letterPositions function
const testResult = letterPositions("hello");
assertArraysEqual(testResult.e, [1]); // This should pass now



