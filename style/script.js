//VARIABLES
var codequestions = [
    {
    title: "Your mother was a hamster, and your father smelt of _________",
    choices: ["elderberries", "booleans", "feces", "swamp water"],
    answer: "elderberries"
    },
    {
    title: "What is your quest?",
    choices: ["To seek the Holy Grail.", "To find love", "To find Lancelot", "booleans"],
    answer: "To seek the Holy Grail."
    },
    {
    title: "what is your favorite color?",
    choices: ["green", "yellow", "Blue. No, yel-- auuuuuuuugh!", "booleans"],
    answer: "Blue. No, yel-- auuuuuuuugh!"
    },
    {
    title: "What is the air-speed velocity of an unladen swallow?",
    choices: ["six", "four", "booleans", "An African or European swallow?"],
    answer: "An African or European swallow?"
    },
    {
    title: "One day, Lad, all this will be yours...",
    choices: ["booleans", "the castle", "the land", "the curtains"],
    answer: "the curtains"
    },
    ];

var startButton = document.querySelector(".start-button");
var timerElement = document.querySelector(".timer-count");
var questionsDiv = document.querySelector("#questions");
var questionChoices = document.querySelector("#question-choices");
var questionTitle = document.querySelector("#question-title");
var endScreen = document.querySelector("#end-screen");
var timerDisplay = document.querySelector("#timer-display");
var finalScore = document.querySelector("#final-score");
var initials = document.querySelector("#initials");
var submit = document.querySelector("#submit");
var scoreList = document.querySelector("#score-list");


var questionIndex = 0;
var timeState;
var timerCount = 60;


//STARTGAME BUTTON
function startQuiz() {
    startTimer();
displayQuestions();
}

// //TIMER
function startTimer() {
    timeState = setInterval(function(){
        timerCount--;
        timerDisplay.textContent = timerCount;
        if (timerCount <= 0) {
            clearInterval(timeState);
        }
    }, 1000);
}

function displayQuestions() {
    questionsDiv.removeAttribute("class");
    var currentQuestion = codequestions [questionIndex];
    questionTitle.textContent = currentQuestion.title;
    questionChoices.innerHTML = ""
    currentQuestion.choices.forEach(function(choice){
        var newBtn = document.createElement("button");
        newBtn.setAttribute("value", choice);
        newBtn.setAttribute("class", "choice");
        newBtn.textContent = choice;
        newBtn.onclick = checkAnswer;
        questionChoices.appendChild(newBtn);
    })
}

// CHECK ANSWER CORRECTNESS
function checkAnswer() {
    if (this.value === codequestions [questionIndex].answer) {
        alert("Correct!")
    }
    else {
        alert("Incorrect")
        timerCount = timerCount-10;
        timerDisplay.textContent = timerCount;
    }
    questionIndex++;
    if (questionIndex === codequestions.length) {
        endGame()
    }
    else {displayQuestions()}
}
function endGame() {
    endScreen.removeAttribute("class")
    clearInterval(timeState);
        questionTitle.setAttribute("class", "hide")
        questionChoices.setAttribute("class", "hide")
        finalScore.textContent = timerCount
}

function saveScore() {
var scoreArray = JSON.parse (localStorage.getItem ("high-scores") ) || []
var newScore = {
    score: timerCount, 
    name: initials.value}
scoreArray.push(newScore)
localStorage.setItem("high-scores", JSON.stringify(scoreArray))
displayScores()
}

function displayScores() {
var scoreArray = JSON.parse (localStorage.getItem ("high-scores") ) || []
    scoreArray.forEach(function(newScore){
        var scoreItem = document.createElement("li")
        scoreItem.textContent = newScore.name + ": " + newScore.score
        scoreList.appendChild(scoreItem)
    })
}

submit.addEventListener("click", saveScore);

startButton.addEventListener("click", startQuiz);