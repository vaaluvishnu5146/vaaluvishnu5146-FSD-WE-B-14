
// Console is a browser module

console.log(console)

console.log("Hello world!!")
console.info("How are you?")
console.error("I am fine. And you?")
console.warn("Hey Be attentive in the class")

// Alert and Confirm and Prompt
window.alert("Hey vishnu") // Just to give an alert to user
window.prompt("Hey How are you all?") // To Get input from the user
window.confirm("Are you sure?") // To confirm user input


function calculateChocolatePrice(chocolate = "") {
    var price = 0;
    switch (chocolate) {
        case "5star":
            price = 5;
            break;
        case "diarymilk":
            price = 10;
            break;
        case "kinderjoy":
            price = 30;
            break;
        default:
            window.alert("Sorry " + name + " isn't available with us!!")
            break;
    }
    return price;
}


var chocolate = window.prompt("What do you need sir/Madam?")
var chocolatePrice = calculateChocolatePrice(chocolate)
window.alert("Chocolate Price = " + chocolatePrice)

/**
 * VARIABLES
 * A RAM is a place where all data inside the variable will reside
 * Every variable will point to a data inside the memory
 * Variable Stages:
 * 1. Declaration
 * 2. Value Initialization
 * 3. Re-Initialization
 */

var department; // Declaration

var username = "Vishnu" // DEC + INI 
var age = 28

// Initialization
department = "CSC"

console.log(username) // Vishnu
console.log(age) // 28
console.log(department) // csc

// Re-Initialization
username = "Gokula krishnan"
age = 27
department = "ECE"  

console.log(username) // Gokula krishnan
console.log(age) // 27
console.log(department) // ECE


/**
 * DATATYPES
 * 
 * Types
 * Number
 * String
 * Boolean
 * Array
 * Object
 * Null
 * undefined
 */
var x = 120; // Number
console.log(typeof x)
var name = "Rajini"; // String
console.log(typeof name)
var dob = "10/10/2000"; // String
console.log(typeof dob)
var isCompleted = false; // Boolean
console.log(typeof isCompleted)
var departure;
console.log(typeof departure) // undefined
var pricing = null;
console.log(typeof pricing) // object
var names = ["Vishnu", "Vardhan", 28, false, {}, []];
console.log(typeof names)


/**
 * OPERATORS IN JS
 * Types:
 * 1. Arithmetic (+, _, *, /, %)
 * 2. Comparison (>, <, >=, <=, !=, ==, ===)
 * 3. Logical
 */
console.log(2 + 2) // 4
console.log(10 / 2) // 5

var age1 = 20;
var age2 = 30;

console.log(age1 > age2) // false
console.log(age2 > age1) // true

console.log("The answer should be = ", age1 >= age2) // false
console.log("The answer should be = ", age2 >= age1) // true


console.log("The result would be ", age1 != age1) // false


/**
 * == - Checks for value equality
 * === - Checks for both value and Datatype equality
 */
console.log(10 == 10) // true
console.log(10 == "10") // true
console.log(10 == "ten") // false

console.log(10 === 10) // true
console.log(10 === "10") // false






