"use strict";

window.addEventListener("load", initApp);

function initApp() {
  //event listener for select on HTML
  document
    .querySelector("#select-color-mode")
    .addEventListener("change", modeSelected);
}

// modeSelected called when #select-color-mode changes value (the user select color mode)
function modeSelected() {
  const selectedColorMode = this.value;
  changeMode(selectedColorMode);
  console.log("New color mode selected");
}

function changeMode(mode) {
  console.log("changeMode");
  resetColorMode();
  if (mode == "dark") {
    document.querySelector("body").classList.add("dark-mode");
  } else if (mode == "green") {
    document.querySelector("body").classList.add("green-mode");
  } else if (mode == "yellow") {
    document.querySelector("body").classList.add("yellow-mode");
  }
}

function resetColorMode() {
  document.querySelector("body").classList.remove("dark-mode");
  document.querySelector("body").classList.remove("green-mode");
  document.querySelector("body").classList.remove("yellow-mode");
}
