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


// Copy and paste your assertEqual function here

//const eqObjects = function(object1, object2) {
  // Logic to compare objects will be implemented here
//};

// Test cases
const shirtObject = { color: "red", size: "medium" };
const anotherShirtObject = { size: "medium", color: "red" };
//assertEqual(eqObjects(shirtObject, anotherShirtObject), true);

const longSleeveShirtObject = { size: "medium", color: "red", sleeveLength: "long" };
//assertEqual(eqObjects(shirtObject, longSleeveShirtObject), false);



//const eqObjects = function(object1, object2) {
  //const keys1 = Object.keys(object1);
  //const keys2 = Object.keys(object2);

  //if (keys1.length !== keys2.length) {
   // return false;
  //}

  //for (const key of keys1) {
  //  if (object1[key] !== object2[key]) {
    //  return false;
   // }
 // }

  //return true;
//};

// Test cases
//const shirtObject = { color: "red", size: "medium" };
//const anotherShirtObject = { size: "medium", color: "red" };
//assertEqual(eqObjects(shirtObject, anotherShirtObject), true);

//const longSleeveShirtObject = { size: "medium", color: "red", sleeveLength: "long" };
//assertEqual(eqObjects(shirtObject, longSleeveShirtObject), false);




// Test cases
const multiColorShirtObject = { colors: ["red", "blue"], size: "medium" };
const anotherMultiColorShirtObject = { size: "medium", colors: ["red", "blue"] };
//assertEqual(eqObjects(multiColorShirtObject, anotherMultiColorShirtObject), true);

const longSleeveMultiColorShirtObject = { size: "medium", colors: ["red", "blue"], sleeveLength: "long" };
//assertEqual(eqObjects(multiColorShirtObject, longSleeveMultiColorShirtObject), false);




// Copy and paste your eqArrays function here

const eqObjects = function(object1, object2) {
  const keys1 = Object.keys(object1);
  const keys2 = Object.keys(object2);

  if (keys1.length !== keys2.length) {
    return false;
  }

  for (const key of keys1) {
    const value1 = object1[key];
    const value2 = object2[key];

    if (Array.isArray(value1) && Array.isArray(value2)) {
      if (!eqArrays(value1, value2)) {
        return false;
      }
    } else if (value1 !== value2) {
      return false;
    }
  }

  return true;
};

// Test cases
//const shirtObject = { color: "red", size: "medium" };
//const anotherShirtObject = { size: "medium", color: "red" };
assertEqual(eqObjects(shirtObject, anotherShirtObject), true);

//const longSleeveShirtObject = { size: "medium", color: "red", sleeveLength: "long" };
assertEqual(eqObjects(shirtObject, longSleeveShirtObject), false);

//const multiColorShirtObject = { colors: ["red", "blue"], size: "medium" };
//const anotherMultiColorShirtObject = { size: "medium", colors: ["red", "blue"] };
assertEqual(eqObjects(multiColorShirtObject, anotherMultiColorShirtObject), true);

//const longSleeveMultiColorShirtObject = { size: "medium", colors: ["red", "blue"], sleeveLength: "long" };
assertEqual(eqObjects(multiColorShirtObject, longSleeveMultiColorShirtObject), false);

// Copy and paste your eqObjects function here

//const eqObjects = function(object1, object2) {
  // ... (implementation of eqObjects)
};




// FUNCTION IMPLEMENTATION
const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;

  if (eqObjects(actual, expected)) {
    console.log(`✅✅✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
};

// Test cases
const obj1 = { a: '1', b: 2 };
const obj2 = { b: 2, a: '1' };
assertObjectsEqual(obj1, obj2); // Should pass









;

