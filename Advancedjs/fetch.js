// var uri = "https://jsonplaceholder.typicode.com/todos/";

// Async await
// async function getData() {
//     try {
//         const response = await fetch(uri);
//         const result = await response.json();
//         console.log(result);
//     } catch (error) {
//         console.log(error)
//     }
// }

// getData();
// console.log("The End");

// Then catch block example
var getAllTodos  = "https://tasks-fs.onrender.com/todos"; // GET ALL TODOS
var getTodoById  = "https://tasks-fs.onrender.com/todo/1"; // GET ALL TODOS
var createTodoUri = "https://tasks-fs.onrender.com/createTodo";


// GET ALL TODOS
// fetch(getAllTodos)
// .then((response) => {
//     return response.json();
// }).then((result) => {
//     console.log(result);
// }).catch((error) => {
//     console.log(error);
// });

// GET A TODOS
// fetch(getTodoById)
// .then((response) => {
//     return response.json();
// }).then((result) => {
//     console.log(result);
// }).catch((error) => {
//     console.log(error);
// });

// POST A TODO
/**
 * {
      id: Number,
      title: String
 * }
 */
// fetch(createTodoUri, {
//     method: "POST",
//     headers: {
//         "Content-Type": "application/json",
//     },
//     body: JSON.stringify({
//         id: 3,
//         title: "Fix headers"
//     })
// })
// .then((response) => {
//     console.log(response)
// })
// .catch((err) => console.log(err))

