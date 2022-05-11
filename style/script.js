//VARIABLES
var startButton = document.querySelector(".start-button");
var timerElement = document.querySelector(".timer-count");
var answerCorrect = document.querySelector(".correct");
var answerIncorrect = document.querySelector(".incorrect");

var timer;
var timerCount;
var scoreCounter;



//STARTGAME BUTTON
function startQuiz() {
    isWin = false;
    timerCount = 60;
    startButton.disabled = true;
    startTimer();
}

startButton.addEventListener("click", startQuiz);


//TIMER
function startTimer() {
    timer = setInterval(function(){
        timerCount--;
        timerElement.textContent = timerCount;
            if (timerCount >= 0) {
                if (isWin && timerCount > 0) {
                    clearInterval(timer);
                    winGame();
            }
        }
    if (timerCount === 0) {
        clearInterval(timer);
        loseGame();
    }
}, 1000);
}
console.log(startQuiz);

//CLICKS
document.addEventListener("click", function(event) {
    if (timerCount === 0) {
        return;
    }

})

//GRADES
function quizGrade() {
    answerCorrect.textContent = scoreCounter;
    localStorage.setItem("scoreCount", scoreCounter);
}

//GET SCORE
function getScore() {
    var storedScores = localStorage.getItem("scoreCount");
    if (storedScores === null) {
        scoreCounter = 0;
    } else {
        scoreCounter = storedScores;
    }
    answerCorrect.textContent = scoreCounter;
}