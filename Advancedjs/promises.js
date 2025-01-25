// Basic promise => status "Pending"
const One = new Promise(function (resolve, reject) {
    resolve("");
});
console.log(a)

// Basic promise that resolve => status "Fullfilled"
const Two = new Promise(function (resolve, reject) {
    resolve("");
});
console.log(a)


// Basic promise that reject => status "Rejected"
const Three = new Promise(function (resolve, reject) {
    rejected("");
});
console.log(a)

// Promise that resolves later
const a = new Promise(function (resolve, reject) {
    setTimeout(() => {
        reject(["One", "Two", "Three"])
    }, 5000);
 });

console.log('Hi')

 a.then((result) => {
    console.log("Result ===>", result)
 }).catch((error) => {
    console.log("Error ===>", error)
 }
).finally(() => {
    console.log("Finally")
});

console.log("Bye")

// Async await
// This we can utilise to make asynchronous function synchronous
const b = new Promise(function (resolve, reject) {
    setTimeout(() => {
        resolve(["One", "Two", "Three"])
    }, 5000);
 });

async function greet() {
    const result = await b;
    console.log(result)
}
greet();
console.log("Completed")