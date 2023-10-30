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

const mainEl = document.querySelector(".start")
const mainSection = document.querySelector(".main__section")
const startButton = document.getElementById("start_button")
const highscoreButton = document.querySelector(".nav__highscore")
const highscoreScreen = document.querySelector(".highscore__screen")
const timer = document.getElementById("timer")
const questionContainer = document.getElementById("question__container")
const questionTitle = document.getElementById("questionTitle")
const aQuestionChoice = document.getElementById("choice_1")
const bQuestionChoice = document.getElementById("choice_2")
const cQuestionChoice = document.getElementById("choice_3")
const dQuestionChoice = document.getElementById("choice_4")
const rightworng = document.querySelector(".rightwrong__content")
const backMain = document.querySelector(".backToMain")
const scoreSubmit = document.querySelector("highscore__input")


let countdown = 0;
var currentQuestion = 0;
let scoreboard = [];

function quizStart() {
    countdown = 90;
    rightworng.textContent = ""
    timerStart()
    updateScore()
    questionContainer.classList.remove("hidden")
    mainEl.classList.add("hidden")
    questionLoader()

}

function questionLoader() {
    aQuestionChoice.addEventListener("click", questionClick)
    bQuestionChoice.addEventListener("click", questionClick)
    cQuestionChoice.addEventListener("click", questionClick)
    dQuestionChoice.addEventListener("click", questionClick)
    if(currentQuestion < 10) {
        questionTitle.textContent = questions[currentQuestion].question
        aQuestionChoice.textContent = questions[currentQuestion].answerChoices[0]
        bQuestionChoice.textContent = questions[currentQuestion].answerChoices[1] 
        cQuestionChoice.textContent = questions[currentQuestion].answerChoices[2] 
        dQuestionChoice.textContent = questions[currentQuestion].answerChoices[3] 
    }
}

function questionClick(event) {
    let choice = event.target;
    if (choice.textContent === questions[currentQuestion].questionAnswer) {
        rightworng.textContent = "Correct!"
    } else {
        rightworng.textContent = "Wrong! -15 seconds"
        if (countdown < 15) {
            countdown = 1;
            updateScore()
        } else {
            countdown -= 15;
            updateScore()
        }
    }
    currentQuestion++;

    questionLoader();
}

function timerStart () {
    timeLeft = setInterval(function() {
        updateScore()
  
    }, 1000);
}

function updateScore() {

    timer.textContent = "Time: " + countdown;
        if(countdown <= 0 || currentQuestion === 10) {
            clearInterval(timeLeft);
            timer.textContent = "END"
            currentQuestion = 0;
            rightworng.textContent = "Your score is: " + countdown
            highscores()
            questionContainer.classList.add("hidden")
            
        }    
    countdown --;      
}

function highscores () {
    countdown = 90;
    highscoreScreen.classList.remove("hidden")
    mainEl.classList.add("hidden")
    highscoreButton.classList.add("hidden")
    backMain.classList.remove("hidden")
    backMain.addEventListener("click", highToMain)
}

function highToMain () {
    highscoreScreen.classList.add("hidden")
    mainEl.classList.remove("hidden")
    highscoreButton.classList.remove("hidden")
    backMain.classList.add("hidden")
}

function saveScore () {
    
}

startButton.addEventListener("click", quizStart)
highscoreButton.addEventListener("click", highscores)




