document.addEventListener("DOMContentLoaded", function() {
    let buttons = document.getElementsByTagName("button");

    for (let button of buttons) {
        button.addEventListener("click", function() {
            if (this.getAttribute("data-type") === "start") {
                startGame();
            } else if (this.getAttribute("data-type") === "next") {
                currentQuestionIndex++
                nextQuestion();
            } else if (this.getAttribute("data-type") === "submit") {
                calculateResult();
            }
        });
    }

});

let questionElement = document.getElementById("question");

let shuffledQuestions, currentQuestionIndex

let answerButtonsDiv = document.getElementById('answers');

let nextButton = document.getElementById('next-btn');

function startGame() {
    
    let welcomePage = document.getElementById("welcome-page");
    let questionPage = document.getElementById("question-page");
    
    shuffledQuestions = questions.sort((a, b) => 0.5 - Math.random());
    currentQuestionIndex = 0;
    
    welcomePage.classList.add("hide");
    questionPage.classList.remove("hide");

    nextQuestion();
}

function nextQuestion() {
    
    resetState();
    
    showQuestion(shuffledQuestions[currentQuestionIndex]);
    console.log("Next Question Loaded!");
    
}

function showQuestion(question) {
    
    questionElement.innerHTML = question.question;
    question.answers.forEach(answer => {
        let button = document.createElement("button")
        button.innerText = answer.text
        button.classList.add('answer-btn')
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener('click', selectAnswer)
        answerButtonsDiv.appendChild(button);
    })
}

function resetState() {
    let nextButton = document.getElementById('next-btn');
    nextButton.classList.add('hide');

    while (answerButtonsDiv.firstChild) {
        answerButtonsDiv.removeChild(answerButtonsDiv.firstChild)
    }
}

function selectAnswer(event) {
    
    nextButton.classList.remove('hide');

    console.log('Answer Selected!', event);
    let answers = document.getElementsByClassName('.answer-btn');
    
}


function calculateResult() {}

const questions = [
    {
        question : "How many years was Aang imprisoned in the glacier?",
        answers : [
            {text : "50", correct: false },
            {text : "1000", correct: false },
            {text : "100", correct: true },
            
            ]
    },
    {
        question : "What weapon does Sokka always carry around?",
        answers : [
            {text : "Hammer", correct: false},
            {text : "Boomerang", correct: true},
            {text : "Harpoon", correct: false},
        ]
    },
    {
        question : "How is Iroh related to Prince Zuko?",
        answers : [
            {text : "Grandfather", correct: false},
            {text : "Uncle", correct: true},
            {text : "Teacher", correct: false},
        ]
    },
    {
        question : "Who is the King of Omashu?",
        answers : [
            {text : "Bumi", correct : true},
            {text : "Haru", correct: false},
            {text : "Rocky", correct: false},
        ] 
    },
    {
        question : "What kind of animals is Momo?",
        answers : [
            {text : "Winged Marmoset", correct: false},
            {text : "Winged Gibbon", correct: false},
            {text : "Winged Lemur", correct : true},
        ]
    },
    {
        question : "Why do Sokka and Zuko go to the highest security prison in the Fire Nation?",
        answers : [
            {text : "Sokka wanted to save his dad", correct : true},
            {text : "Zuko and Sokka wanted to get captured", correct: false},
            {text : "Aang was sick and needed special Fire Nation medicine", correct: false},
        ]
        
    },
    {
        question : "Who does Firelord Ozai choose as the next Firelord?",
        answers : [
            {text : "Iroh", correct : false},
            {text : "Zuko", correct : false},
            {text : "Azula", correct : true},
        ]
        
    },
]

