//1- create variables
const bgToggle = document.getElementById("bg-toggle");
const circleToggle = document.getElementById("circle-toggle");
const body = document.getElementById("body");
// create function and create toggle in js
bgToggle.addEventListener("click", changeMode = () => {
  bgToggle.classList.toggle("toggle-night-mode-bg-light");
  circleToggle.classList.toggle("circle-toggle-night-mode-bg-dark");
  body.classList.toggle("bg-dark");
})