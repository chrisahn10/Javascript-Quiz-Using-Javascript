// Hold the questions, the answer choices, as well as the answer
const questions = [
    {
        question: "What does the 'var' keyword do in JavaScript?",
        answerChoices: ["Defines a variable with block scope", "Defines a variable with function scope", "Declares a constant variable", "Declares a global variable"],
        questionAnswer: "Defines a variable with function scope"
    },
    {
        question: "Which of the following is not a data type in JavaScript?",
        answerChoices: ["String", "Integer", "Object", "Boolean"],
        questionAnswer: "Integer"
    },
    {
        question: "How do you comment out a single line in JavaScript?",
        answerChoices: ["// This is a comment", "/* This is a comment */", "<!-- This is a comment -->", "' This is a comment '"],
        questionAnswer: "// This is a comment"
    },
    {
        question: "What is the result of 5 + '5' in JavaScript?",
        answerChoices: ["10", "'10'", "55", "Error"],
        questionAnswer: "'10'"
    },
    {
        question: "Which JavaScript function is used to parse a JSON string?",
        answerChoices: ["parseJSON()", "eval()", "JSON.parse()", "stringify()"],
        questionAnswer: "JSON.parse()"
    },
    {
        question: "How do you declare a constant variable in JavaScript?",
        answerChoices: ["let", "var", "const", "constVar"],
        questionAnswer: "const"
    },
    {
        question: "Which method is used to add an element to the end of an array in JavaScript?",
        answerChoices: ["push()", "append()", "addToEnd()", "concat()"],
        questionAnswer: "push()"
    },
    {
        question: "What is the purpose of the return statement in a JavaScript function?",
        answerChoices: ["To print a value to the console", "To terminate the function execution", "To declare a new variable", "To declare a function parameter"],
        questionAnswer: "To terminate the function execution"
    },
    {
        question: "What is the scope of a variable declared with let in JavaScript?",
        answerChoices: ["Block scope", "Function scope", "Global scope", "Object scope"],
        questionAnswer: "Block scope"
    },
    {
        question: "Which operator is used for strict equality in JavaScript?",
        answerChoices: ["==", "!=", "===", "!=="],
        questionAnswer: "==="
    },

]
let countdown = 5
const mainEl = document.querySelector(".start")
const mainSection = document.querySelector(".main__section")
const startButton = document.getElementById("start_button")
const timer = document.getElementById("timer")
const questionContainer = document.getElementById("question__container")
const questionTitle = document.getElementById("questionTitle")
const aQuestionChoice = document.getElementById("choice_1")
const bQuestionChoice = document.getElementById("choice_2")
const cQuestionChoice = document.getElementById("choice_3")
const dQuestionChoice = document.getElementById("choice_4")


function quizStart() {
    timerStart()
    questionContainer.classList.remove("hidden")
    mainEl.classList.add("hidden")
    for (let i = 0; i < questions.length; i++) {
        questionTitle.textContent = questions[i].question
        aQuestionChoice.textContent = questions[i].answerChoices[0]
        bQuestionChoice.textContent = questions[i].answerChoices[1] 
        cQuestionChoice.textContent = questions[i].answerChoices[2] 
        dQuestionChoice.textContent = questions[i].answerChoices[3] 
    }



}

function timerStart () {
    const timeLeft = setInterval(function() {
        countdown--;
        timer.textContent = "Time: " + countdown;
        if(countdown === 0) {
            clearInterval(timeLeft);
            timer.textContent = "END"
            mainEl.classList.remove("hidden")
            questionContainer.classList.add("hidden")

        }
        
    }, 1000);
}

startButton.addEventListener("click", quizStart)



