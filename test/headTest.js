const assertEqual = require('../assertEqual');
const head = require('../head');

// Test Assertions 
assertEqual(head([5,6,7]), 5); // Returns 5
assertEqual(head([4])); // Returns 4
assertEqual(head([])); // Returns undefined
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello"); // Returns hello 