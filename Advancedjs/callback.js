console.log("First")

setTimeout(() => {
    console.log("Third");
}, 5000)

setTimeout(() => {
    console.log("Second");
}, 4999)

 
 
function compute(num1, num2, even) {
    even(num1 + num2);
 }
 
 function isEven(value) {
    if(value % 2 == 0) {
      console.log("Even")
    } else {
      console.log("Odd")
    }
 }
 
 compute(10, 20, isEven);
 
 function one(cb) {
    console.log("One")
    cb();
  }
  
  function two(cb) {
    console.log("Two")
    cb();
  }
  
  function three(cb) {
          console.log("Three")
     cb();
  }
  
  function four() {
          console.log('Four')
  }
  
 one(() => {
     two(() => {
       three(() => {
         four();
     });
   });
 });
  