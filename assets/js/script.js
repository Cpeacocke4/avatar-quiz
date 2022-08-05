document.addEventListener("DOMContentLoaded", function() {
    let buttons = document.getElementsByTagName("button");

    for (let button of buttons) {
        button.addEventListener("click", function() {
            if (this.getAttribute("data-type") === "start") {
                startGame();
            } else if (this.getAttribute("data-type") === "next") {
                nextQuestion();
            } else if (this.getAttribute("data-type") === "submit") {
                calculateResult();
            }
        });
    }

});

function startGame() {
    console.log("Game Started!");
}

function nextQuestion() {}

function calculateResult() {}

