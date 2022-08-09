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
            } else if (this.getAttribute("data-type") === "play-again") {
                startGame();
            } else if (this.getAttribute("data-type") === "home-screen") {
                homeScreen();
            }
        });
    }

});

let welcomePage = document.getElementById("welcome-page");
    
let questionPage = document.getElementById("question-page");

let resultPage = document.getElementById("result-page");

let questionElement = document.getElementById("question");

let shuffledQuestions, currentQuestionIndex

let answerButtonsDiv = document.getElementById('answers');

let nextButton = document.getElementById('next-btn');

let score = 0;

let numOfQuestions = 0;

function startGame() {
    
    shuffledQuestions = questions.sort((a, b) => 0.5 - Math.random());
    currentQuestionIndex = 0;
    numOfQuestions = 0;
    
    welcomePage.classList.add("hide");
    questionPage.classList.remove("hide");
    resultPage.classList.add('hide');

    nextQuestion();
}

function nextQuestion() {
    
    resetState();
    
    numOfQuestions ++;

    let questionTally = document.getElementById('question-tally');
    questionTally.innerText = `${numOfQuestions}/10`

    if (numOfQuestions === 11) {

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

    questionPage.classList.add('hide');
    resultPage.classList.remove('hide');

    let resultHeader = document.getElementById('result-header');
    let resultMessage = document.getElementById('result-msg');

    if (score > 5) {
        resultHeader.innerText = 'Well Done!';
        resultMessage.innerText = `Your final score was ${score}, this means that you
        are an Avatar The Last Airbender Superfan!`
    } else if (score < 5) {
        resultHeader.innerText = 'Oh No!';
        resultMessage.innerText = `Your final score was ${score}, this means that you
        need to rewatch Avatar The Last Airbender... `
    }
}

function homeScreen() {
    
    questionPage.classList.add('hide');
    resultPage.classList.add('hide');
    welcomePage.classList.remove("hide");
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
        question : "Who was the Avatar before Aang?",
        answers : [
            {text : "Avatar Kyoshi", correct : false},
            {text : "Avatar Roku", correct : true},
            {text : "Firelord Ozai", correct : false},
        ]
        
    },
    {
        question : "Who is Zuko's father?",
        answers : [
            {text : "Roku", correct : false},
            {text : "Ozai", correct : true},
            {text : "Sheng", correct : false},
        ]
        
    },
    {
        question : "Who is the Blind Bandit?",
        answers : [
            {text : "Toph", correct : true},
            {text : "Katara", correct : false},
            {text : "Zuko", correct : false},
        ]
        
    },
    {
        question : "Who is the Blue Spirit?",
        answers : [
            {text : "Zuko", correct : true},
            {text : "Iroh", correct : false},
            {text : "Jet", correct : false},
        ]
        
    },
    {
        question : "Who is the Lady of the Lake?",
        answers : [
            {text : "Tai Lee", correct : false},
            {text : "Azula", correct : false},
            {text : "Katara", correct : true},
        ]
        
    },
    {
        question : "What kind of a bender is Toph?",
        answers : [
            {text : "Water", correct : false},
            {text : "Earth", correct : true},
            {text : "Fire", correct : false},
        ]
        
    },
    {
        question : "Who is Katara's waterbending master?",
        answers : [
            {text : "Master Sen- Sei", correct : false},
            {text : "Master Pakku", correct : true},
            {text : "Gran-Gran", correct : false},
        ]
        
    },
    {
        question : "Who names a saber-tooth moose lion Fufucuddlypoops?",
        answers : [
            {text : "Sokka", correct : true},
            {text : "Aanf", correct : false},
            {text : "Toph", correct : true},
        ]
        
    },
    {
        question : "Who was kidnapped outside Wan Shi Tong's Library?",
        answers : [
            {text : "Appa", correct : true},
            {text : "Katara", correct : false},
            {text : "Momo", correct : true},
        ]
        
    },
    {
        question : "What type of bender was the avatar before Aang?",
        answers : [
            {text : "Water", correct : false},
            {text : "Fire", correct : true},
            {text : "Air", correct : false},
        ]
        
    },
    {
        question : "What is the Kyoshi Island named after?",
        answers : [
            {text : "A giant fish", correct : false},
            {text : "One of the previous Avatars", correct : true},
            {text : "A type of food", correct : false},
        ]
        
    },
    {
        question : "What does Aang name himself when he goes to the Fire Nation school?",
        answers : [
            {text : "Kuzon", correct : true},
            {text : "Lee", correct : false},
            {text : "Jin", correct : false},
        ]
        
    },
    {
        question : "Who was named the 'The Runaway'?",
        answers : [
            {text : "Zuko", correct : false},
            {text : "Toph", correct : true},
            {text : "Aang", correct : false},
        ]
        
    },
    {
        question : "Who is Sokka's swordmaster?",
        answers : [
            {text : "Pakku", correct : false},
            {text : "Iroh", correct : false},
            {text : "Piandao", correct : true},
        ]
        
    },
    {
        question : "What kind of benders are Lo and Li?",
        answers : [
            {text : "Fire", correct : true},
            {text : "Water", correct : false},
            {text : "Air", correct : false},
        ]
        
    },
    {
        question : "What was Omashu later renamed?",
        answers : [
            {text : "Ba Sing Sei", correct : false},
            {text : "New Ozai", correct : true},
            {text : "The Republic", correct : false},
        ]
        
    },
    {
        question : "Who teaches Aang how to Energy (Spirit) Bend?",
        answers : [
            {text : "Guru Patik", correct : false},
            {text : "Dragon", correct : false},
            {text : "Lion Turtle", correct : true},
        ]
        
    },
    {
        question : "Who is known as The Puppetmaster?",
        answers : [
            {text : "Kanna", correct : false},
            {text : "Katara", correct : false},
            {text : "Hama", correct : true},
        ]
        
    },
    {
        question : "Who created metal bending?",
        answers : [
            {text : "King Bumi", correct : false},
            {text : "Toph", correct : true},
            {text : "Avatar Roku", correct : false},
        ]
        
    },
    {
        question : "What is the exact age of Aang?",
        answers : [
            {text : "116", correct : false},
            {text : "112", correct : true},
            {text : "13", correct : false},
        ]
        
    },
    {
        question : "Zuko is able to track Aang using what?",
        answers : [
            {text : "Katara's Necklace", correct : true},
            {text : "An Airbending Scroll", correct : false},
            {text : "Appa's fur", correct : false},
        ]
        
    },
    {
        question : "What is the name of the group responsible for burning down Jet's village?",
        answers : [
            {text : "The Terra Team", correct : false},
            {text : "The Rough Rhinos", correct : true},
            {text : "The Zhang Riders", correct : false},
        ]
        
    },
    {
        question : "Who was Aang's guardian as a child?",
        answers : [
            {text : "Avatar Roku", correct : false},
            {text : "Guru Patik", correct : false},
            {text : "Monk Gyasto", correct : true},
        ]
        
    },
    {
        question : "Who created the Di Lee agents?",
        answers : [
            {text : "The Earth King", correct : false},
            {text : "Azula", correct : false},
            {text : "Long Feng", correct : true},
        ]
        
    },
]

