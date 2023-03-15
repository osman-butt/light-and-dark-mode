"use strict";

window.addEventListener("load", initApp);

function initApp() {
  //event listener for select on HTML
  document
    .querySelector("#select-color-mode")
    .addEventListener("change", modeSelected);
  detectUserPreference();
}

// Detect and set previous selected color mode from localStorage
function detectUserPreference() {
  const modeFromLocalStorage = readUserColorMode();
  if (modeFromLocalStorage) {
    console.log(modeFromLocalStorage);
    changeMode(modeFromLocalStorage);
    document.querySelector("#select-color-mode").value = modeFromLocalStorage;
  }
}

// Read and return userColorMode from localStorage
function readUserColorMode() {
  const userColorMode = localStorage.getItem("userColorMode");
  return userColorMode;
}

// Save color color mode to localStorage
function saveUserColorMode(mode) {
  localStorage.setItem("userColorMode", mode);
}

// modeSelected called when #select-color-mode changes value (the user select color mode)
function modeSelected() {
  const selectedColorMode = this.value;
  changeMode(selectedColorMode);
  console.log("New color mode selected");
  saveUserColorMode(selectedColorMode);
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
