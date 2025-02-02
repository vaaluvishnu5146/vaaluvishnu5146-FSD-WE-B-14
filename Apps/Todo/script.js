let data = [];

const createTodoForm = document.getElementById('createTodo');
const updateTodoForm = document.getElementById('updateTodo');
const todoListingContainer = document.getElementById("todos-listing-container");

if(localStorage.getItem("todos")) {
    data = JSON.parse(localStorage.getItem("todos"));
    refreshApp();
}

// Attach event listener
createTodoForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const titleEl = e.target[0];
    const descriptionElement = e.target[1];

    if(titleEl.value == "" && descriptionElement.value == "") {
        alert("Form cannot be empty");
        return;
    }

    const newTodo = {
        id: data.length + 1,
        title: titleEl.value,
        description: descriptionElement.value
    }
    
    // Add new todo into array
    data.push(newTodo);
    updateLocalStorage();

    // create card aand append it to listing container
    todoListingContainer.appendChild(createTodoCard(newTodo));

    // Clear form
    titleEl.value = "";
    descriptionElement.value = "";
});

updateTodoForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const titleEl = e.target[0];
    const descriptionElement = e.target[1];
    const idElement = e.target[2];

    // check if data is valid
    if(titleEl.value === "" || descriptionElement.value === "" || idElement.value == "") {
        alert("Form is invalid");
        return;
    }

    data = data.filter((d) => d.id !== Number(idElement.value));
    updateLocalStorage()
    
    const newTodo = {
        id: idElement.value,
        title: titleEl.value,
        description: descriptionElement.value
    };
    data.push(newTodo);

    // Refresh the app
    refreshApp()
});

// Create a todo card
function createTodoCard(data  = {}) {
    const card = document.createElement("div");
    card.setAttribute("class", "col-2");
    card.setAttribute("id", data.id);
    card.innerHTML = `
        <div class="card todo-card">
            <div class="card-body">
                <h5 class="card-title">${data.title}</h5>
                 <p class="card-text">${data.description}</p>
                 <button type="button" data-id="${data.id}" class="btn btn-light"><img src="./assets/edit.svg" /></button>
                 <button type="button" data-id="${data.id}" class="btn btn-light"><img src="./assets/delete.svg" /></button>
            </div>
        </div>
    `;
    const ctaNodes = card.querySelectorAll('button');
    ctaNodes[0].addEventListener("click", handleEditClick, {
        capture: true
    })
    ctaNodes[1].addEventListener("click", handleDeleteClick)
    return card;
}

// Handle edit click
function handleEditClick(e) {
    e.stopPropagation();

    // Get the matching element from data array
   const matchingTodo = data.find((d) => d.id === Number(e.target.dataset.id));

   console.log(matchingTodo)

   // Get all necessary inputs from update form
   const titleEl =  updateTodoForm[0];
   const descriptionElement =   updateTodoForm[1];
   const idElement =    updateTodoForm[2];

   // set the data in the update form
   titleEl.value = matchingTodo.title;
   descriptionElement.value = matchingTodo.description;
   idElement.value = matchingTodo.id;
}

// handle delete click
// task
function handleDeleteClick(e) {
    e.stopPropagation();
    Number(e.target.dataset.id)
}

// Refresh the todo list container with data
function refreshApp() {
    todoListingContainer.innerHTML = "";
    for (let index = 0; index < data.length; index++) {
       todoListingContainer.appendChild(createTodoCard(data[index]));
    }
}

// Update local storage
function updateLocalStorage() {
    try {
        localStorage.setItem("todos", JSON.stringify(data))
    } catch (error) {
        console.log(error)
    }
}