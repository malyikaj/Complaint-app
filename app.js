

const questionNumber = document.querySelector(",question-number");
const questionText = document.querySelector(",question-text");
const optionContainer = document.querySelector("option-container");

let questionCounter = 0;
let currentQuestion;
let availableQuestions = [];

// push the questions into avaibleQuestions Array
function setAvaibleQuestions(){
    const totalQuestion = quiz.length
    for(let i=0; i <totalQuestion; i++){
        availableQuestions.push(quiz[i])
    }
}

//set question number and question and options
function getNewQuestion(){
    // set question number
    questionNumber.innerHTML = "Question " + (questionCounter + 1) + " of" + quiz.length;

    // set question text 
    // get random questions
    const questionIndex = availableQuestions[Math.floor(Math.random() * availableQuestions.length)]
    currentQuestion = questionIndex;
    questionText.innerHTML = currentQuestion.q;
    // console.log(questionIndex)
}


window.onload = function(){
    // first we will set all questions in availableQuestions Array
    setAvailableQuestions();
    // second we will call getNewQuestion(); function
    getNewQuestion();
}