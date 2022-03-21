"use strict";

const clock = document.querySelector(".clock");

function getClock() {
  const today = new Date();
  let hours = today.getHours();
  const minutes = String(today.getMinutes()).padStart(2, "0");
  const amPm = hours >= 12 ? "PM" : "AM";
  hours = hours % 12;
  hours = hours ? hours : 12;
  clock.innerText = `${hours}:${minutes} ${amPm}`;
}

getClock();
setInterval(getClock, 1000);
