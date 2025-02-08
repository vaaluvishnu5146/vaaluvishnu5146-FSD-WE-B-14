/**
 Function types
 * Named function
 * Anonymous function
 * IIFE
 * Arrow Function
 */

//  Named fn example
 function greet() {
   // statements
 }

 // Anonymous fn
const fn1 = function () {
    console.log("Anonymous function 1")
}
fn1();

const fn2  = () => {
    console.log("Anonymous function 2")
}
fn2();

// Callbacks
function add(a, b, cb) {
    if ((a + b) % 2 == 0) {
        cb("Even")
    } else {
        cb("Odd")
    }
}

function messenger(mes = "") {
    console.log(mes)
}

add(10, 2, messenger)

// IIFE
// Immediately Invoking function expression
(function (a, b) {
    console.log("IIFE 1", a, b)
})(10, 20);

// Arrow function
const c = () => {

}