const data = [
    {
        "id": 1,
        "question": "What is HTML?",
        "options": [
            {
                "value": "Hyper Text Markup Language",
                "isCorrect": true
            }, {
                "value": "Hyper Transit Mall lulu",
                "isCorrect": false
            }, {
                "value": "Hyper Market transit mall",
                "isCorrect": false
            }, {
                "value": "Hello Market transit mall",
                "isCorrect": false
            }
        ]
    }, {
        "id": 1,
        "question": "What is CSS?",
        "options": [
            {
                "value": "Cascading Style sheet",
                "isCorrect": true
            }, {
                "value": "Cascading storm sheet",
                "isCorrect": false
            }, {
                "value": "Cascading style show",
                "isCorrect": false
            }, {
                "value": "CSS as CSS",
                "isCorrect": false
            }
        ]
    }, {
        "id": 3,
        "question": "What is Javascript?",
        "options": [
            {
                "value": "Programming Language",
                "isCorrect": true
            }, {
                "value": "Programming board",
                "isCorrect": false
            }, {
                "value": "Programming console",
                "isCorrect": false
            }, {
                "value": "Run time environment",
                "isCorrect": false
            }
        ]
    }
]

// Variables
const sideBarList = document.getElementById("sidebar-list")
const noOfQuestions = data.length;
let currentQuestion = 0;

const backCta = document.getElementById("back");
const nextCta = document.getElementById("next");

backCta.addEventListener("click", function (e) {
    console.log("Clicked back")
    // currentQuestion = currentQuestion - 1;
    handlePageChange(currentQuestion - 1);
    renderQuestionDetails();
})

nextCta.addEventListener("click", function (e) {
    console.log("Clicked next")
    // currentQuestion = currentQuestion + 1;
    handlePageChange(currentQuestion + 1);
    renderQuestionDetails();
})

// Logic will run very first time when the script file loads
function initialRender() {
    if (currentQuestion === 0) {
        document
            .getElementById('1')
            .classList
            .add("bg-green-500");
    } else if (currentQuestion === (noOfQuestions - 1)) {
        document
            .getElementById(noOfQuestions)
            .classList
            .add("bg-green-500");
    } else {
        document
            .getElementById(currentQuestion + 1)
            .classList
            .add("bg-green-500");
    }
}

function renderQuestionsCta() {
    for (let x = 1; x <= noOfQuestions; x++) {
        sideBarList.appendChild(createQuestionCta(x));
    }
}

function createQuestionCta(num = 0) {
    const li = document.createElement("li");
    li.innerHTML = `
                <button id="${num}" class="w-14 h-14 border-4 border-green-400 rounded-full quiz-item">
                    ${num}
                </button>`
    li.addEventListener("click", function (e) {
        handlePageChange(parseInt(e.target.id))
    });
    return li;
}

// Render Question details
function renderQuestionDetails() {
    const currentQuestionData = data[currentQuestion];
    const currentQuestionNumber = document.getElementById("currentQuestionNumber");
    const totalQuestions = document.getElementById("totalQuestions");
    const title = document.getElementById("title");

    currentQuestionNumber.innerText = currentQuestion + 1;
    totalQuestions.innerText = noOfQuestions;
    title.innerText = currentQuestionData.question;
    renderOptions(currentQuestionData.options);
}

function renderOptions(options = []) {
    const optionsContainer = document.getElementById("options-container");
    optionsContainer.innerHTML = "";
    for (let y = 0; y < options.length; y++) {
        optionsContainer.appendChild(createOption(options[y]));
    }
}

function createOption(option = {}) {
    const optionElement = document.createElement("li");
    optionElement.innerHTML = `
        <button class="w-full h-12 border-green-500 border-2 rounded mb-5 hover:bg-green-400">${option.value}</button>
    `;
    return optionElement;
}

// Function for handling pagination
function handlePageChange(id) {
   // Remove previous page button
   optionCtaRemoveActive(currentQuestion + 1);

   // update current question
   currentQuestion = id - 1;

   // Refresh the quiz
   renderQuestionDetails();

   // Activate new page button
   optionCtaAddActive(id);
}

// Find and remove the active state in optionCta
function optionCtaRemoveActive(num = 0) {
    const currentActiveCta = document.getElementById(num);
    currentActiveCta
        .classList
        .remove("bg-green-500");
}

//  Find and add the active state in optionCta
function optionCtaAddActive(num = 0) {
    const currentActiveCta = document.getElementById(num);
    currentActiveCta
        .classList
        .add("bg-green-500");
}

// Render the questions cta in sidebar
renderQuestionsCta();

// Render the question details
renderQuestionDetails();

// Re-Render to refresh the cta state
initialRender();