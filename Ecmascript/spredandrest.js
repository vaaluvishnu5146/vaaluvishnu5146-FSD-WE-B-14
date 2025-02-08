/**
 * Spread ops helps to spread the array or object element individually into another array or object
 */
const arr = [1, 2, 3, 4, 5];
const copy = [...arr];

const data = {
  name: "Vishnu",
  pref: [1, 2, 3]
};
const dataCopy = {
    ...data
};


/**
 * Rest ops
 */
function add(a, b, ...c) {
    console.log(c);
    return a+b;
}
add(1, 2, 3, 4, 5, 6, 7, 8, 9)

/**
 * Destructuring
 * Array
 * Object
 */
const [name, age] = ["Vishnu", 29];
// const name = input[0];
// const age = input[1];
console.log(name, age);

const { fname, pref } = {
    fname: "Vishnu",
    pref: [1, 2, 3]
  };
  console.log(fname, pref);