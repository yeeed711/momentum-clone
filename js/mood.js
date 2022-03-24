const btn = document.querySelector(".dark-light");

function handleOnSwitch() {
  const loginName = document.querySelector(".text");
  if (this.value === "Dark") {
    this.value = "Light";
    document.querySelector("body").classList.add("light");
    loginName.style.cssText = "color: var(--bl)";
  } else {
    document.querySelector("body").classList.remove("light");
    loginName.style.cssText = "color: var(--dark-font)";
    this.value = "Dark";
  }
}

btn.addEventListener("click", handleOnSwitch);
