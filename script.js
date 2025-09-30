// script scaffold — Space Explorer Adventure
const questions = [
    {
        text: "You are on a spaceship leaving Earth. Where do you want to go first?",
        answers: [
            { text: "🌕 The Moon", next: 1 },
            { text: "🪐 Saturn", next: 2 },
            { text: "🌌 Deep Space", next: 3 }
        ]
    }
]; 
let currentQuestionIndex = 0;

function showQuestion() {
  document.getElementById("question").textContent = questions[currentQuestionIndex].text;
}

function nextQuestion() {
  currentQuestionIndex = 0;
  showQuestion();
}

showQuestion();