$(document).ready(function() {

    function firstScreen () {
        startScreen = "<p class='text-center main-button-container'><a class='btn btn-primary btn-lg btn-block start-button' href='#' role='button'>Start Quiz</a></p>";
        $(".mainPart").html(startScreen);

    }

    firstScreen();

    $("body").on("click", ".start-button", function(event){
        event.preventDefault();
        generateQuestions();
        quizTimer();

});

$("body").on("click", ".answer", function(event) {
    selectedAnswer = $(this).text();
    if(selectedAnswer === correctAnswers[questionCounter]) {

        clearInterval(theClock);
        generateWin();
    }
    else {
        clearInterval(theClock);
        generateLoss();
    }
});

$("body").on("click", ".reset-button", function(event) {
    resetGame();
});

});

function generateLossDueToNoTime() {
    unansweredLoss++;
    gameHTML = "<p class='text-center timer-p'>Time Remaining: <span class='timer'>" + counter + "</span></p>" + "<p class='text-center'>You ran out of time!  The correct answer was: " + correctAnswers[questionCounter] + "</p>" + "<img class='center-block img-wrong' src='images/'>";
    $(".mainPart").html(gameHTML);
    setTimeout(wait, 3000); 
}

function generateWin() {
    correctPoint++;
    gameHTML = "<p class='text-center timer-p'>Time Remaining: <span class='timer'>" + counter + "</span></p>" + "<p class='text-center'>Correct! The answer is: " + correctAnswers[questionCounter] + "</p>" + imageArray[questionCounter];
    $(".mainPart").html(gameHTML);
    setTimeout(wait, 3000);
}

function generateLoss() {
    lossPoint++;
    gameHTML = "<p class='text-center timer-p'>Time Remaining: <span class='timer'>" + counter + "</span></p>" + "<p class='text-center'>Incorrect! The answer is: " + correctAnswers[questionCounter] + "</p>" + "<img class='center-block img-wrong' src='images/'>";
    $(".mainPart").html(gameHTML);
    setTimeout(wait, 3000);
}

function generateQuestions() {
    gameHTML = "<p class='text-center timer-p'>Time Remaining: <span class='timer'>30</span></p><p class='text-center'>" + questionArray[questionCounter] + "</p><p class='first-answer answer'>A. " + answerArray[questionCounter][0] + "</p><p class='answer'>B. "+ answerArray[questionCounter][1]+"</p><p class='answer'>C. " + answerArray[questionCounter][2]+"</p><p class='answer'>D. " + answerArray[questionCounter][3] + "</p>";
    $(".mainArea").html(gameHTML);
}

function wait() {
    if (questionCounter < 7) {
        questionCounter++;
        generateQuestions();
        counter = 30;
        quizTimer();
    }
    else {
        endScreen();
    }
}

function quizTimer() {
    theClock = setInterval(thirtySeconds, 1000);
    function thirtySeconds(){
        if (counter === 0) {
            clearInterval(theClock);
            generateLossDueToNoTime();
        }
        if (counter > 0) {
            counter--;
        }
        $(".timer").html(counter);
    }
}

function endScreen() {
    gameHTML = gameHTML = "<p class='text-center timer-p'>Time Remaining: <span class='timer'>" + counter + "</span></p>" + "<p class='text-center'>Trivia Quiz is over and here's how your final score!" + "</p>" + "<p class='summary-correct'>Correct Answers: " + correctPoint + "</p>" + "<p>Wrong Answers: " + lossPoint + "</p>" + "<p>Unanswered: " + unansweredLoss + "</p>" + "<p class='text-center reset-button-container'><a class='btn btn-primary btn-lg btn-block reset-button' href='#' role='button'>Reset The Quiz!</a></p>";
    $(".mainPart").html(gameHTML);
}

function resetGame() {
    questionCounter = 0;
    correctPoint = 0;
    lossPoint = 0;
    unansweredLoss = 0;
    counter = 30;
    generateQuestions();
    quizTimer();
}

var startScreen;
var gameHTML;
var counter = 30;
var questionArray = ["Who is the greatest basketball player of all time?", "What is the capital of Korea?", "What is the most sold item at Wal-Mart?", "What is blockchain?", "What is the name of the instructor for UCLA Coding Bootcamp?"];
var answerArray = [["Kobe Bryant", "Michael Jordan", "Shaq", "LeBron James"], ["Seoul", "Tokyo", "Beijing", "Ho Chi Minh City"], ["Condoms", "Bananas", "Toilet Paper", "Gum"],["a digital ledger in which transactions made in bitcoin or another cryptocurrency are recorded chronologically and publicly.", "a form of new computer programming language", "a famous movie in the 60's", "a type of chain used for specialized construction"], ["Elton", "Paige", "Clark", "DJ Khaled"]];
var imageArray = ["<img class='center-block img-right' src='images/australia.png'>",];
var correctAnswers = [];
var selectedAnswer;
var theClock;
var correctPoint = 0;
var lossPoint = 0;
var unansweredLoss = 0;
