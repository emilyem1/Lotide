# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @emilyemcmahon/lotide`

**Require it:**

`const _ = require('@emilyemcmahon/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `assertArraysEqual(...)`: a function that combines the functions eqArrays and assertEqual
* `assertEqual(...)`: a function that takes in two values and assert if they are true equals
* `assertObjectsEqual(...)`: a function that takes in two obejcts and returns if they are true equals
* `countLetters(...)`: a function that takes in a string and returns the count of each letter contained 
* `countOnly(...)`: a funcyion that counts how many matches there are between an object and an array 
* `eqArrays(...)`: a function that takes in two arrays and asserts if they are true equals
* `eqObjects(...)`: a function that takes in two objects and asserts if they are true equals
* `findKey(...)`: a function which takes in an objects and a callback, and returns first key with truthy value 
* `findKeyByValue(...)`: a function that takes in an object and value, scans through the object and returns key with given value
* `flatten(...)`: a function that flattens arrays with nested elements into one array
* `head(...)`: a function that returns the first element in an array 
* `letterPositions(...)`: a function that will return all positions in of each letter in a string
* `map(...)`: a function that pushes variables into a new array 
* `middle(...)`: a function that finds the middle in an array and returns just the middle 
* `tail(...)`: a function that returns everything but [0] in an array 
* `takeUntil(...)`: a function that will keep collecting from given array until callback returns truthy value 
* `without(...)`: returns a subset of a given array, removing unwanted elements 