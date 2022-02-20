'use strict'

const loginForm = document.querySelector(".login__form");
const loginInput = document.querySelector(".login__form input");
const loginButton = document.querySelector(".login__form button");
const greeting = document.querySelector(".greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KYE = "username";

function onLoginSubmit(event){
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KYE, username);
    paintGreetings(username);
}

function paintGreetings(username){
    greeting.innerText = `반갑습니다👋  ${username}님😊`
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KYE);

if (savedUsername === null) {
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
} else {
    paintGreetings(savedUsername);
}