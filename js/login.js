const loginForm = document.querySelector(".loginForm");
const loginInput = document.getElementById("loginInput");
const loginContainer = document.querySelector(".login-form");
const loginText = document.querySelector(".login-text");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME = "username";

function handleSubmit(event) {
  event.preventDefault();
  loginForm.classList.add(HIDDEN_CLASSNAME);
  const username = loginInput.value;
  localStorage.setItem(USERNAME, username);
  paintLogin(username);
}

function paintLogin(username) {
  const name = document.querySelector(".text");
  name.innerText = `,"${username}!"`;
  loginText.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME);
if (savedUsername === null) {
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", handleSubmit);
} else {
  paintLogin(savedUsername);
}
