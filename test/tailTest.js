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

const assert = require('chai').assert;
const tail = require('../tail');

describe("#tail", () => {
  it("returns [2, 3] for [1, 2, 3]", () => {
    assert.deepEqual(tail([1, 2, 3]), [2, 3]);
  });
  
  it("returns [] for [1]", () => {
    assert.deepEqual(tail([1]), []);
  });

  it("returns ['b', 'c'] for ['a', 'b', 'c']", () => {
    assert.deepEqual(tail(['a', 'b', 'c']), ['b', 'c']);
  });
});

