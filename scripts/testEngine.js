let time = 3600;
let submitted = false;

const timerEl = document.getElementById("timer");
const form = document.getElementById("quizForm");
const nav = document.getElementById("nav");

// ================= TIMER =================
const timer = setInterval(() => {
  if (submitted) return;

  time--;

  timerEl.textContent =
    String(Math.floor(time / 60)).padStart(2, '0') + ":" +
    String(time % 60).padStart(2, '0');

  if (time <= 0) {
    clearInterval(timer);
    submitQuiz(true);
  }
}, 1000);

// ================= NORMALIZE =================
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

  if (!Array.isArray(rawQuestions)) {
    console.error("Invalid questions data:", rawQuestions);
    return;
  }

  const questions = normalizeQuestions(rawQuestions);
  window.quizData = questions;

  // shuffle once
  questions.sort(() => Math.random() - 0.5);

  // clear old (important for reload safety)
  nav.innerHTML = "";
  form.innerHTML = "";

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
              <span>${o}</span>
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

  setupActiveTracking(); // 🔥 important
}

// ================= NAVIGATION =================
function go(i) {
  const el = document.getElementById("q" + i);

  el.scrollIntoView({
    behavior: "smooth",
    block: "center"
  });
}

// ================= MARK =================
function mark(i) {
  const navBtn = document.getElementById("nav" + i);

  if (!navBtn.classList.contains("answered")) {
    navBtn.classList.add("answered");
  }

  updateProgress();
}

// ================= PROGRESS =================
function updateProgress() {
  const total = document.querySelectorAll(".question").length;
  const done = document.querySelectorAll(".nav-btn.answered").length;

  const progress = document.getElementById("progressBar");
  if (progress) {
    progress.style.width = ((done / total) * 100) + "%";
  }
}

// ================= ACTIVE TRACKING =================
function setupActiveTracking() {
  const questions = document.querySelectorAll(".question");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {

        const id = entry.target.id.replace("q", "");

        // remove old
        document.querySelectorAll(".question").forEach(q => q.classList.remove("active"));
        document.querySelectorAll(".nav-btn").forEach(n => n.classList.remove("active"));

        // set active
        entry.target.classList.add("active");

        const navBtn = document.getElementById("nav" + id);
        if (navBtn) navBtn.classList.add("active");
      }
    });
  }, {
    threshold: 0.4
  });

  questions.forEach(q => observer.observe(q));
}

// ================= SUBMIT =================
function submitQuiz(auto = false) {
  if (submitted) return;

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

  const total = questions.length;
  const percentage = ((score / total) * 100).toFixed(0);

  const res = document.getElementById("result");

  res.style.display = "block";
  res.innerHTML = `
    <h2>Result</h2>
    <p><b>Score:</b> ${score}/${total}</p>
    <p><b>Percentage:</b> ${percentage}%</p>
    ${auto ? "<b>Auto-submitted (Time Over)</b>" : ""}
  `;

  window.scrollTo({ top: 0, behavior: "smooth" });
}