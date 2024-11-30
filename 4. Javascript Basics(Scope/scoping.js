var x = 10;
var y= 20;
var x  = "Hello world";

console.log(x / 10); // NaN - Not a Number
console.log(y); // 20
console.log(x); // Hello world


function addTwoNums(num1, num2) {
    var result = num1 + num2;
    console.log(result);
    return result;
}

function multiplyTwoNums(num1, num2) {
    var result = num1 * num2;
    console.log(result);
    return result;
}

addTwoNums();
multiplyTwoNums();


// PRACTICALS
// Question 1
var x = 10;
function print() {
    console.log(x);
}
print();

// Question 2
var x = 10;
console.log(x); //  10
function print() {
    var x = 21;
    console.log(x); // 21
}
print();
console.log(x); // 10

// Question 3: If-else
var x  = 10;
console.log(x); // 10
if(true) {
    var x = 21;
    console.log(x); // 21
}
console.log(x); // 10 or 21

// BLOCK SCOPED KEYWORDS:
// 1. let
// 2. const

// Question 4: If-else using let
var x  = 10;
console.log(x); // 10
if(true) {
    const x = 21;
    console.log(x); // 21
}
console.log(x); // 10 or 21

// Question 5: For loop
for (let index = 0; index < 10; index++) {
    console.log(index);
}
console.log("OUT OF SCOPE", index); // ReferenceError Index is not defined


// Difference between let, const, var
var x = 10;
let x = 20;

console.log(x); // SyntaxError: Identifier 'x' has already been declared

let x = 20;
var x = 10;

console.log(x); // SyntaxError: Identifier 'x' has already been declared


// Hoisting
/**
 * Hoisting is a mechanism where variables and functions declarations are moved to top of their
 * current scope (lexical scope) before code execution.
 */
// LEXICAL SCOPE START
// It simply creates the memory and allocates the memory for that particular variable
// var x; // (Programatically)
// LEXICAL SCOPE ENDS
console.log(x); // undefined
var x  = 10;
console.log(x); // 10

// function

greet(); // Hello all

function greet() {
    console.log("Hello All");
}


// let, const

// console.log(x); // ReferenceError: Cannot access 'x' before initialization
let x = 10;
console.log("let x = ", x);

// console.log(x); // ReferenceError: Cannot access 'x' before initialization
const x = "Hello world";
console.log("const x = ", x);