let time = 3600;
let submitted = false;

const timerEl = document.getElementById("timer");
const form = document.getElementById("quizForm");
const nav = document.getElementById("nav");



// ================= TIMER =================
const timer = setInterval(() => {
  time--;
  timerEl.textContent =
    String(Math.floor(time / 60)).padStart(2, '0') + ":" +
    String(time % 60).padStart(2, '0');

  if (time <= 0 && !submitted) {
    clearInterval(timer);
    submitQuiz(true);
  }
}, 1000);

function normalizeQuestions(raw) {
  return raw.map(q => ({
    question: q[0],
    options: q[1],
    answer: q[2],
    explanation: q[3]
  }));
}
// ================= INIT =================
function initTest(rawQuestions) {

  const questions = normalizeQuestions(rawQuestions);
  window.quizData = questions;

  questions.sort(() => Math.random() - 0.5);


  // shuffle
  questions.sort(() => Math.random() - 0.5);

  // render
  questions.forEach((q, i) => {
    nav.innerHTML += `
      <div class="nav-btn" id="nav${i}" onclick="go(${i})">${i + 1}</div>
    `;

    form.innerHTML += `
      <div class="question" id="q${i}">
        <b>${i + 1}. ${q.question}</b>
        <div class="options">
          ${q.options.map((o, j) => `
            <label>
              <input type="radio" name="q${i}" value="${j}" onchange="mark(${i})">
              ${o}
            </label>
          `).join("")}
        </div>
        <div class="solution" id="sol${i}">
          <b>Answer:</b> ${q.options[q.answer]}<br>
          <b>Explanation:</b> ${q.explanation}
        </div>
      </div>
    `;
  });

  form.innerHTML += `<button type="button" onclick="submitQuiz()">Submit</button>`;
}

// ================= INTERACTION =================
function go(i) {
  document.getElementById("q" + i).scrollIntoView({ behavior: "smooth" });
}

function mark(i) {
  document.getElementById("nav" + i).classList.add("answered");
  updateProgress();
}

function updateProgress() {
  const done = document.querySelectorAll(".answered").length;
  document.getElementById("progressBar").style.width =
    (done / document.querySelectorAll(".question").length * 100) + "%";
}

// ================= SUBMIT =================
function submitQuiz(auto = false) {
  submitted = true;
  clearInterval(timer);

  let score = 0;
  const questions = document.querySelectorAll(".question");

  questions.forEach((_, i) => {
    const q = window.quizData[i];
    const sel = document.querySelector(`input[name="q${i}"]:checked`);
    const sol = document.getElementById("sol" + i);
    const navBtn = document.getElementById("nav" + i);

    sol.style.display = "block";

    if (sel && Number(sel.value) === q.answer) {
      score++;
      sol.classList.add("correct");
      navBtn.className = "nav-btn correct";
    } else {
      sol.classList.add("wrong");
      navBtn.className = "nav-btn wrong";
    }
  });

  const res = document.getElementById("result");
  res.style.display = "block";
  res.innerHTML = `
    <h2>Result</h2>
    <p><b>Score:</b> ${score}/${questions.length}</p>
    <p><b>Percentage:</b> ${(score / questions.length * 100).toFixed(0)}%</p>
    ${auto ? "<b>Auto-submitted (Time Over)</b>" : ""}
  `;

  window.scrollTo({ top: 0, behavior: "smooth" });
}