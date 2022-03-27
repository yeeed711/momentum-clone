"use strict";

const clock = document.querySelector(".clock");
const today = document.querySelector(".today");

function getClock() {
  const newDay = new Date();
  const options = {
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
  };
  clock.innerText = new Intl.DateTimeFormat("en-US", options).format(newDay);
  const mql = window.matchMedia("screen and (max-width: 412px)");
  mql.addListener(function (e) {
    if (e.matches) {
      const options = {
        hour: "numeric",
        minute: "numeric",
      };
      clock.innerText = new Intl.DateTimeFormat("en-US", options).format(
        newDay
      );
    }
  });
}

getClock();
setInterval(getClock, 1000);

function getDay() {
  const newDay = new Date();
  const options = {
    year: "numeric",
    month: "long",
    day: "numeric",
    weekday: "long",
  };
  today.innerText = new Intl.DateTimeFormat("ko-KR", options).format(newDay);
}

getDay();
