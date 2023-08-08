const assertEqual = require('../assertEqual');
const head = require('../head');

// Test cases
assertEqual(head([1, 2, 3]), 1);
assertEqual(head([]), undefined);
assertEqual(head(["Lighthouse", "Labs"]), "Lighthouse");
