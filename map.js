// Implementation of eqArrays function
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


// Implementation of assertArraysEqual function
//const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }

  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }

  return true;
//};

// Function to compare two arrays and log appropriate message to the console
const assertArraysEqual = function(actual, expected) {
  const areEqual = eqArrays(actual, expected);
  const message = areEqual ? "✅ Assertion Passed" : "❌ Assertion Failed";
  console.log(message);
};


//assertEqual.js
//const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌ Assertion Failed: ${actual} !== ${expected}`);
  }
//};

// TEST CODE
assertEqual("Lighthouse Labs", "Bootcamp"); // ❌ Assertion Failed: Lighthouse Labs !== Bootcamp
assertEqual(1, 1); // ✅ Assertion Passed: 1 === 1

// Test cases for eqArrays function
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // Should pass
assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false); // Should pass
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true); // Should pass
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false); // Should pass





//map test case

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

// Test cases
const words = ["ground", "control", "to", "major", "tom"];

// Test 1: Map words to their lengths
const result1 = map(words, word => word.length);
assertArraysEqual(result1, [6, 7, 2, 5, 3]);

// Test 2: Map words to uppercase
const result2 = map(words, word => word.toUpperCase());
assertArraysEqual(result2, ["GROUND", "CONTROL", "TO", "MAJOR", "TOM"]);

// Test 3: Map words to their first letter
const result3 = map(words, word => word[0]);
assertArraysEqual(result3, ["g", "c", "t", "m", "t"]);




















//const words = ["hammer", "nailbar", "nail", "pencil", "tape"];
//const map = function(array, callback) {
  //const results = [];
  //for (let item of array) {
    //console.log('item BEFORE: ', item);
    //console.log('item AFTER: ', callback(item));
    //console.log('---');
  //}
  //return results;
//};
