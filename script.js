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
    const questionElement = document.getElementById("question");
    const answersElement = document.getElementById("answers");
    const currentQuestion = questions[currentQuestionIndex];

    questionElement.textContent = currentQuestion.text;
    answersElement.innerHTML = "";

    currentQuestion.answers.forEach(answer => {
        const li = document.createElement("li");
        const button = document.createElement("button");
        button.textContent = answer.text;
        li.appendChild(button);
        answersElement.appendChild(li);
    });

    document.getElementById("next-btn").style.display =
        currentQuestion.answers.length === 0 ? "none" : "block";
}

function nextQuestion() {
  currentQuestionIndex = 0;
  showQuestion();
}

showQuestion();