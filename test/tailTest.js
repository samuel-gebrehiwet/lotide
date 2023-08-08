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




// tail.js


const tail = function(array) {
  
  return array.slice(1);
};

// TEST CASES
const words = ["Yo Yo", "Lighthouse", "Labs"];


const tailResult = tail(words);
console.log(tailResult); // ["Lighthouse", "Labs"]


