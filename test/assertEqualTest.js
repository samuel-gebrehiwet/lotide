// assertEqual.js
//const assertEqual = function (actual, expected) {
  //if (actual === expected) {
  //  console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
 // } else {
    //console.log(`❌ Assertion Failed: ${actual} !== ${expected}`);
  //}
//};


//module.exports = assertEqual;


//TEST CODE
//assertEqual("Lighthouse Labs", "Bootcamp"); // ❌ Assertion Failed: Lighthouse Labs !== Bootcamp
///assertEqual(1, 1); // ✅ Assertion Passed: 1 === 1



const assertEqual = require('../assertEqual'); // Adjust the path as needed
const head = require('../head'); // Adjust the path as needed

// Test cases
assertEqual(head([1, 2, 3]), 1);
assertEqual(head([]), undefined);
assertEqual(head(["Lighthouse", "Labs"]), "Lighthouse");
