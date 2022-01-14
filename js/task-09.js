function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const text = document.querySelector(".color");

const button = document.querySelector(".change-color");

const body = document.body;

button.addEventListener("click", changeColor);

function changeColor() {
  let color = getRandomHexColor();
  body.style.backgroundColor = color;
  text.textContent = color;
}