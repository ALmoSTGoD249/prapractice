const form = document.getElementById("authForm");
const title = document.getElementById("formTitle");
const sub = document.getElementById("formSub");
const switchBtn = document.getElementById("switchBtn");
const switchText = document.getElementById("switchText");

let isLogin = true;



// ================= TOGGLE =================
switchBtn.onclick = () => {
  isLogin = !isLogin;

  if (isLogin) {
    title.textContent = "Welcome Back";
    sub.textContent = "Login to continue your tests";
    switchText.textContent = "New here?";
    switchBtn.textContent = "Create account";

    form.innerHTML = `
      <input type="email" placeholder="Email" required>
      <input type="password" placeholder="Password" required>
      <button type="submit">Login</button>
    `;
  } else {
    title.textContent = "Create Account";
    sub.textContent = "Start your journey";
    switchText.textContent = "Already have an account?";
    switchBtn.textContent = "Login";

    form.innerHTML = `
      <input type="text" placeholder="Username" required>
      <input type="email" placeholder="Email" required>
      <input type="password" placeholder="Password" required>
      <button type="submit">Register</button>
    `;
  }
};

// ================= SUBMIT =================
form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const inputs = form.querySelectorAll("input");

  try {
    if (isLogin) {
      // LOGIN
      const email = inputs[0].value;
      const password = inputs[1].value;

      const res = await fetch("http://127.0.0.1:8000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ email, password })
      });

      const data = await res.json();

      if (!res.ok) throw new Error(data.detail);

      localStorage.setItem("token", data.token);
      localStorage.setItem("user", JSON.stringify(data.user));

      window.location.href = "dashboard.html";

    } else {
      // REGISTER
      const username = inputs[0].value;
      const email = inputs[1].value;
      const password = inputs[2].value;

      const res = await fetch("http://127.0.0.1:8000/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ username, email, password })
      });

      const data = await res.json();

      if (!res.ok) throw new Error(data.detail);

      alert("Account created. Please login.");
      switchBtn.click(); // go back to login

    }

  } catch (err) {
    alert(err.message || "Something went wrong");
  }
});

console.log("Auth page loaded",data);