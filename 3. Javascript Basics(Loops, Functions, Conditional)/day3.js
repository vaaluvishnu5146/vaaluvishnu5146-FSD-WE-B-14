function greet(message) {
    console.log(message)
}

function add(num1, num2) {
    return num1 + num2
}

var isSwitchOn = false;

if (isSwitchOn) {
    console.log("Switch is On")
} else {
    console.log("Switch is off")
}

/**
 * LOOPS
 * FOR
 */

for (var x = 1; x <= 10; x++) {
    console.log(x)
}

/**
 * WHILE
 */
var x = 1;
while(x <= 10) {
    console.log(x);
    x += 1
}






var x = 1;
while(x <= 10) {
    console.log(x)
    x = x + 1
}

var isExamOver = false;
var count = 0;
while(!isExamOver) {
    count += 1;
    console.log('Clock is ticking', count)
    if(count == 10) {
        isExamOver = true;
    }
}