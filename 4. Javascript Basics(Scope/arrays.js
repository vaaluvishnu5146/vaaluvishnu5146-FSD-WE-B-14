// Array
// Array is a Data Structure that store a collection of elements of same or different datatypes.

// Syntax
var data = [];

// Example
var numbers = [1, 2, 3, 4, 5]; // Number array
var names = ['Vishnu', 'Regina motwani', 'remo', 'Deepak']; // String array
var status = [true, false, true, true, false]; // Boolean array
var data = [1, "Vishnu", "Vardhan", "Mentor", "FSD-WE-B-14", true]; // Mixed array

// Properties of array
// console.log(Array);
// console.log(Array.prototype);

// How to access an Element from array
var names = ['Vishnu', 'Regina motwani', 'remo', 'Deepak']; // String array
console.log(names)
console.log(names[2])

// length property
console.log(names.length); // 4
// Array methods
var data = [];

// push(element)
// Adds the element to end of the array
data.push(10);
data.push(20);
data.push(30);
console.log(data.length); // 3
console.log(data)

// pop()
// Removes the last element from the array
data.push(100);
console.log(data);
data.pop();
console.log(data);

// slice(startIndex, endIndex)
// returns the shallow copy of the range of elements in the given array
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; // Number array
// console.log(numbers.slice(0, 2));
console.log(numbers.slice(3, 8))

// concat(array)
// Helps to concat two array into one array
var input1 = ['a', 'b'];
var input2 = ['c', 'd'];

var result = input1.concat(input2)
console.log(result); //[a, b, c, d]

var result = input1 + " " + input2;
console.log(result); //a, bc, d

// indexOf(element)
// Helps to find the index of the given element
// NOTE: if element exists in the array it will return  the index or else -1  
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; // Number array
console.log(numbers.indexOf(5)); // 4
console.log(numbers.indexOf(100)); // -1