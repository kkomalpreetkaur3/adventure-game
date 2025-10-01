// script scaffold — Space Explorer Adventure
const questions = [
    {
        text: "You are on a spaceship leaving Earth. Where do you want to go first?",
        answers: [
            { text: "🌕 The Moon", next: 1 },
            { text: "🪐 Saturn", next: 2 },
            { text: "🌌 Deep Space", next: 3 }
        ]
    },
    {
        text: "On the Moon, you find an abandoned base. Do you:",
        answers: [
            { text: "Explore inside", next: 4 },
            { text: "Collect moon rocks", next: 5 }
        ]
    },
    {
        text: "Saturn’s rings are beautiful! Do you:",
        answers: [
            { text: "Take samples from the rings", next: 6 },
            { text: "Scan for alien signals", next: 7 }
        ]
    },
    {
        text: "Deep space is dark and mysterious. Do you:",
        answers: [
            { text: "Activate warp drive", next: 8 },
            { text: "Send a distress signal", next: 9 }
        ]
    },
    { text: "You discover alien technology! Adventure continues…", answers: [] },
    { text: "You bring rare moon rocks back to Earth. Mission complete!", answers: [] },
    { text: "You find strange ice particles in Saturn’s rings!", answers: [] },
    { text: "You receive a mysterious alien transmission!", answers: [] },
    { text: "You travel beyond the galaxy into the unknown!", answers: [] },
    { text: "Your signal is answered by a friendly alien ship!", answers: [] }
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
        button.onclick = () => {
            currentQuestionIndex = answer.next;
            showQuestion();
        };
        li.appendChild(button);
        answersElement.appendChild(li);
    });

    if (currentQuestion.answers.length === 0) {
        document.getElementById("next-btn").style.display = "inline-block";
    } else {
        document.getElementById("next-btn").style.display = "none";
    }
}

function nextQuestion() {
  currentQuestionIndex = 0;
  showQuestion();
}

showQuestion();