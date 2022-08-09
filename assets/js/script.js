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

let score = 0;

let numOfQuestions = 0;

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
    
    numOfQuestions ++;

    let questionTally = document.getElementById('question-tally');
    questionTally.innerText = `${numOfQuestions}/10`

    if (numOfQuestions === 10) {

        endQuiz();
    } else {

        showQuestion(shuffledQuestions[currentQuestionIndex]);
    }
    
    console.log("Next Question Loaded!");  
}

function showQuestion(question) {
    
    questionElement.innerHTML = 'Q: '+ question.question;
    
    question.answers.forEach(answer => {
        
        let button = document.createElement("button")
        button.innerText = answer.text
        button.classList.add('answer-btn')
        
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
        
        button.addEventListener('click', selectAnswer)
        answerButtonsDiv.appendChild(button);
    });  
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
    
    console.log('Answer Selected!');
    let answers = document.querySelectorAll('.answer-btn');

        
    answers.forEach(answer => {

        console.log(answer);
        console.log(answer.dataset.correct);
        
        if (answer.dataset.correct) {
            answer.classList.add('correct');
        } else {
            answer.classList.add('wrong');
        }
    });

     if (event.target.dataset.correct === 'true') {
        score ++;
     }

    console.log('event', event.target.dataset);

    disableAnswers();
    console.log(score);
}

function disableAnswers() {

        let answerButtons = document.getElementsByClassName('answer-btn');

        for(var i = 0; i < answerButtons.length; i++) {
            answerButtons[i].disabled = true;
        }
        console.log('Asnwers Disabled!')
}

function endQuiz() {
    console.log('Quiz Ended, You suck!!!');
}

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
    {
        question : "In which season did the gang meet Toph?",
        answers : [
            {text : "Fire", correct : false},
            {text : "Earth", correct : true},
            {text : "Water", correct : false},
        ]
        
    },
    {
        question : "In which Air Temple did Aang find Momo?",
        answers : [
            {text : "Northern Air Temple", correct : false},
            {text : "Western Air Temple", correct : false},
            {text : "Southern Air Temple", correct : true},
        ]
        
    },
    {
        question : "What element does Sokka bend?",
        answers : [
            {text : "Water", correct : false},
            {text : "None", correct : true},
            {text : "Fire", correct : false},
        ]
        
    },
    {
        question : "How many stomachs does Appa have?",
        answers : [
            {text : "6", correct : true},
            {text : "3", correct : false},
            {text : "1", correct : false},
        ]
        
    },
    {
        question : "When did Aang get his tattoos?",
        answers : [
            {text : "At a naming ceremony", correct : false},
            {text : "When he turned 10", correct : false},
            {text : "When he mastered Airbending", correct : true},
        ]
        
    },
    {
        question : "",
        answers : [
            {text : "", correct : false},
            {text : "", correct : false},
            {text : "", correct : true},
        ]
        
    },
    {
        question : "",
        answers : [
            {text : "", correct : false},
            {text : "", correct : false},
            {text : "", correct : true},
        ]
        
    },
    {
        question : "",
        answers : [
            {text : "", correct : false},
            {text : "", correct : false},
            {text : "", correct : true},
        ]
        
    },
    {
        question : "",
        answers : [
            {text : "", correct : false},
            {text : "", correct : false},
            {text : "", correct : true},
        ]
        
    },
    {
        question : "",
        answers : [
            {text : "", correct : false},
            {text : "", correct : false},
            {text : "", correct : true},
        ]
        
    },
    {
        question : "",
        answers : [
            {text : "", correct : false},
            {text : "", correct : false},
            {text : "", correct : true},
        ]
        
    },
    {
        question : "",
        answers : [
            {text : "", correct : false},
            {text : "", correct : false},
            {text : "", correct : true},
        ]
        
    },
    {
        question : "",
        answers : [
            {text : "", correct : false},
            {text : "", correct : false},
            {text : "", correct : true},
        ]
        
    },
    {
        question : "",
        answers : [
            {text : "", correct : false},
            {text : "", correct : false},
            {text : "", correct : true},
        ]
        
    },
    {
        question : "",
        answers : [
            {text : "", correct : false},
            {text : "", correct : false},
            {text : "", correct : true},
        ]
        
    },
    {
        question : "",
        answers : [
            {text : "", correct : false},
            {text : "", correct : false},
            {text : "", correct : true},
        ]
        
    },
    {
        question : "",
        answers : [
            {text : "", correct : false},
            {text : "", correct : false},
            {text : "", correct : true},
        ]
        
    },
    {
        question : "",
        answers : [
            {text : "", correct : false},
            {text : "", correct : false},
            {text : "", correct : true},
        ]
        
    },
    {
        question : "",
        answers : [
            {text : "", correct : false},
            {text : "", correct : false},
            {text : "", correct : true},
        ]
        
    },
    {
        question : "",
        answers : [
            {text : "", correct : false},
            {text : "", correct : false},
            {text : "", correct : true},
        ]
        
    },
    {
        question : "",
        answers : [
            {text : "", correct : false},
            {text : "", correct : false},
            {text : "", correct : true},
        ]
        
    },
    {
        question : "",
        answers : [
            {text : "", correct : false},
            {text : "", correct : false},
            {text : "", correct : true},
        ]
        
    },
    {
        question : "",
        answers : [
            {text : "", correct : false},
            {text : "", correct : false},
            {text : "", correct : true},
        ]
        
    },
    {
        question : "",
        answers : [
            {text : "", correct : false},
            {text : "", correct : false},
            {text : "", correct : true},
        ]
        
    },
    {
        question : "",
        answers : [
            {text : "", correct : false},
            {text : "", correct : false},
            {text : "", correct : true},
        ]
        
    },
    {
        question : "",
        answers : [
            {text : "", correct : false},
            {text : "", correct : false},
            {text : "", correct : true},
        ]
        
    },
    {
        question : "",
        answers : [
            {text : "", correct : false},
            {text : "", correct : false},
            {text : "", correct : true},
        ]
        
    },
    {
        question : "",
        answers : [
            {text : "", correct : false},
            {text : "", correct : false},
            {text : "", correct : true},
        ]
        
    },
    {
        question : "",
        answers : [
            {text : "", correct : false},
            {text : "", correct : false},
            {text : "", correct : true},
        ]
        
    },
    {
        question : "",
        answers : [
            {text : "", correct : false},
            {text : "", correct : false},
            {text : "", correct : true},
        ]
        
    },
    {
        question : "",
        answers : [
            {text : "", correct : false},
            {text : "", correct : false},
            {text : "", correct : true},
        ]
        
    },
    {
        question : "",
        answers : [
            {text : "", correct : false},
            {text : "", correct : false},
            {text : "", correct : true},
        ]
        
    },
    {
        question : "",
        answers : [
            {text : "", correct : false},
            {text : "", correct : false},
            {text : "", correct : true},
        ]
        
    },
    {
        question : "",
        answers : [
            {text : "", correct : false},
            {text : "", correct : false},
            {text : "", correct : true},
        ]
        
    },
    {
        question : "",
        answers : [
            {text : "", correct : false},
            {text : "", correct : false},
            {text : "", correct : true},
        ]
        
    },
    {
        question : "",
        answers : [
            {text : "", correct : false},
            {text : "", correct : false},
            {text : "", correct : true},
        ]
        
    },
    {
        question : "",
        answers : [
            {text : "", correct : false},
            {text : "", correct : false},
            {text : "", correct : true},
        ]
        
    },
    {
        question : "",
        answers : [
            {text : "", correct : false},
            {text : "", correct : false},
            {text : "", correct : true},
        ]
        
    },
    {
        question : "",
        answers : [
            {text : "", correct : false},
            {text : "", correct : false},
            {text : "", correct : true},
        ]
        
    },
    {
        question : "",
        answers : [
            {text : "", correct : false},
            {text : "", correct : false},
            {text : "", correct : true},
        ]
        
    },
    {
        question : "",
        answers : [
            {text : "", correct : false},
            {text : "", correct : false},
            {text : "", correct : true},
        ]
        
    },
    {
        question : "",
        answers : [
            {text : "", correct : false},
            {text : "", correct : false},
            {text : "", correct : true},
        ]
        
    },
    {
        question : "",
        answers : [
            {text : "", correct : false},
            {text : "", correct : false},
            {text : "", correct : true},
        ]
        
    },
    {
        question : "",
        answers : [
            {text : "", correct : false},
            {text : "", correct : false},
            {text : "", correct : true},
        ]
        
    },
    {
        question : "",
        answers : [
            {text : "", correct : false},
            {text : "", correct : false},
            {text : "", correct : true},
        ]
        
    },
    {
        question : "",
        answers : [
            {text : "", correct : false},
            {text : "", correct : false},
            {text : "", correct : true},
        ]
        
    },
    {
        question : "",
        answers : [
            {text : "", correct : false},
            {text : "", correct : false},
            {text : "", correct : true},
        ]
        
    },
    {
        question : "",
        answers : [
            {text : "", correct : false},
            {text : "", correct : false},
            {text : "", correct : true},
        ]
        
    },
    {
        question : "",
        answers : [
            {text : "", correct : false},
            {text : "", correct : false},
            {text : "", correct : true},
        ]
        
    },
    {
        question : "",
        answers : [
            {text : "", correct : false},
            {text : "", correct : false},
            {text : "", correct : true},
        ]
        
    },
    {
        question : "",
        answers : [
            {text : "", correct : false},
            {text : "", correct : false},
            {text : "", correct : true},
        ]
        
    },
    {
        question : "",
        answers : [
            {text : "", correct : false},
            {text : "", correct : false},
            {text : "", correct : true},
        ]
        
    },
    {
        question : "",
        answers : [
            {text : "", correct : false},
            {text : "", correct : false},
            {text : "", correct : true},
        ]
        
    },
]

