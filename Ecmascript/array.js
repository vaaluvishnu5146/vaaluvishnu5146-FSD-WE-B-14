const data = [2, 1, 3, 10, 4, 11];

// sort
data.sort((a, b) => a - b); // Ascending order
console.log(data)

data.sort((a, b) => b - a); // Descending order
console.log(data)

// Reduce
const sum = data.reduce((a, b) => {
    return a + b
})
console.log(sum)

// Filter
const filtered = data.filter((element) => element % 2 == 0);
console.log(filtered)

// Map method
const mappedData = data.map((element) => element * 2)
console.log(mappedData)

// For each method
data.forEach((element) => {
    console.log(element);
})
