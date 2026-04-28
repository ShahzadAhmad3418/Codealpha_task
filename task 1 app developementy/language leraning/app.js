let progress = JSON.parse(localStorage.getItem("progress")) || 0;

function showSection(section) {
  const content = document.getElementById("content");
  content.innerHTML = "";

  if (section === "vocab") {
    vocabulary.forEach(item => {
      const div = document.createElement("div");
      div.className = "card";

      div.innerHTML = `
        <h3>${item.word}</h3>
        <p>${item.translation}</p>
        <button onclick="speak('${item.translation}')">🔊 Pronounce</button>
      `;

      content.appendChild(div);
    });
  }

  if (section === "grammar") {
    grammar.forEach(item => {
      const div = document.createElement("div");
      div.className = "card";
      div.innerHTML = `<p>${item.rule}</p>`;
      content.appendChild(div);
    });
  }

  if (section === "quiz") {
    currentQuestion = 0;
    progress = 0;
    loadQuiz();
  }
}

function speak(text) {
  const speech = new SpeechSynthesisUtterance(text);
  speech.lang = "es-ES";
  speechSynthesis.speak(speech);
}

let currentQuestion = 0;

function loadQuiz() {
  const content = document.getElementById("content");

  if (currentQuestion >= quizData.length) {
    content.innerHTML = `<h2>Quiz Finished 🎉</h2><p>Score: ${progress}</p>`;
    return;
  }

  const q = quizData[currentQuestion];

  let html = `<div class="card"><h3>${q.question}</h3>`;

  q.options.forEach(opt => {
    html += `<button onclick="checkAnswer('${opt}')">${opt}</button><br>`;
  });

  html += `</div>`;
  content.innerHTML = html;
}

function checkAnswer(answer) {
  if (answer === quizData[currentQuestion].answer) {
    progress++;
    alert("Correct!");
  } else {
    alert("Wrong!");
  }

  localStorage.setItem("progress", progress);
  currentQuestion++;
  loadQuiz();
}
