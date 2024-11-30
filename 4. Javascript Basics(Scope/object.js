// Object
// Object is a data structure that helps us to collect more than one values in key value pairs.

//Syntax
var data = {
    name: "Vishnu vardhan",
    address: "xyz address",
    age: 100,
    languages: ['English', 'Tamil', 'Malayalam'],
    isVotable: true,
    course: {
        name: "Full Stack Development"
    }
}
console.log(data.name) // Vishnu Vardhan
console.log(data.age) // 100


// JSON
// JAVASCRIPT OBJECT NOTATION  - Data Format
// JSON is light weight, text-based format for structuring data, Human Readable 
// and also easy for machine to read and parse the data 
// It is not bound to any programming language (Programming language independant)
// Syntax:
// refer data.json file
var jsonData = {
    "name": "Vishnu",
    "age": 100,
    "isVotable": null
};

// Get data using DOT operator
// console.log(jsonData.age)
// console.log(jsonData.isVotable)
// console.log(jsonData.name)

// get data using ['']
// console.log(jsonData['age'])
// console.log(jsonData['isVotable'])
// console.log(jsonData['name'])

// Object.keys()
const keys = Object.keys(jsonData); // ['name', 'age', 'isVotable']

// Object.values()
// Object.values(jsonData);

// Print all the values of the keys
for(let x = 0; x < keys.length; x++) {
    console.log(`${keys[x]} = `, jsonData[keys[x]])
}