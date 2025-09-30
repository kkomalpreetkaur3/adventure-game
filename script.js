// script scaffold — Space Explorer Adventure
const questions = []; 
let currentQuestionIndex = 0;

function showQuestion() {
  document.getElementById("question").textContent = "Loading...";
}

function nextQuestion() {
  currentQuestionIndex = 0;
  showQuestion();
}

showQuestion();