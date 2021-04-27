// variables to keep track of quiz state
var currentQuestionIndex = 0;
var time = questions.length * 15;
var timerId;
//console.log(questions)
// variables to reference DOM elements
var questionsEl = document.getElementById("questions");
var timerEl = document.getElementById("time");
var choicesEl = document.getElementById("choices");
var submitBtn = document.getElementById("submit");
var startBtn = document.getElementById("start");
var initialsEl = document.getElementById("initials");
var feedbackEl = document.getElementById("feedback");
var questionTitle = document.getElementById("question-title");
//console.log(questionsEl)
// sound effect
//var sfxRight = new Audio("assets/sfx/correct.wav");
//var sfxWrong = new Audio("assets/sfx/incorrect.wav");

function startQuiz() {
  // hide start screen
  var startScreen = document.getElementById("start-screen");
  console.log(startScreen)
  startScreen.style.display = "None"
  
  
  // un-hide questions section
  questionsEl.classList.remove("hide")

  // start timer
  timerId = setInterval(clockTick, 1000)

  // show starting time
  timerEl.textContent = time

  getQuestion();
}

function getQuestion() {
  // get current question object from array
    console.log(questions[0]);
    var question = questions[0]
    console.log(question.title);
    console.log(question.choices[0]);
    console.log(question.answer);
  // update title with current question

questionTitle.textContent = question.title
  // clear out any old question choices
choicesEl.innerHTML = ""

  // loop over choices
  for (var i = 0; i < question.choices.length; i++) {
    var button = document.createElement("button")
    console.log(button);
    button.textContent = question.choices[i]
    choicesEl.appendChild(button)
  }
  
    // create new button for each choice

    // attach click event listener to each choice

    // display on the page
}

function questionClick() {
  // check if user guessed wrong
    // penalize time

    // display new time on page

    // play "wrong" sound effect

  // else 
    // play "right" sound effect


  // flash right/wrong feedback on page for half a second

  // move to next question

  // check if we've run out of questions
    // quizEnd
  // else 
    // getQuestion
}

function quizEnd() {
  // stop timer

  // show end screen

  // show final score

  // hide questions section
}

function clockTick() {
  // update time
  time = time - 1
  timerEl.textContent = time
  if (time <= 0) {
    clearInterval(timerId)
  }
  // check if user ran out of time
}

function saveHighscore() {
  // get value of input box

  // make sure value wasn't empty
    // get saved scores from localstorage, or if not any, set to empty array

    // format new score object for current user

    // save to localstorage

    // redirect to next page
}

function checkForEnter(event) {
  // check if event key is enter
    // saveHighscore
}

// user clicks button to submit initials
submitBtn.onclick = saveHighscore;

// user clicks button to start quiz
startBtn.onclick = startQuiz;

initialsEl.onkeyup = checkForEnter;
