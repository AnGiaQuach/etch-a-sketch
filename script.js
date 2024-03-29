"use strict";
const maxSize = 10;
const container = document.querySelector(".container");
let opacityOfBox = [];

function getRandomNumber() {
  const result = Math.floor(Math.random() * 255);
  return result;
}
function getColor(box) {
  box.style.backgroundColor = `rgb(${getRandomNumber()}, ${getRandomNumber()}, ${getRandomNumber()})`;
}

function changeSizeOfGrid(size) {
  for (let i = 0; i < size * size; i++) {
    let box = document.createElement("div");
    box.classList.add("box");
    box.setAttribute(
      "style",
      `
      box-sizing: border-box;
      background-color:white;
       width:${1200 / size}px; 
       height:${1200 / size}px;
       border:1px solid black;`
    );
    container.appendChild(box);
    box.addEventListener("mouseover", () => {
      getColor(box);
    });
  }
}
changeSizeOfGrid(4);

let userInput = 4;
const changeButton = document.querySelector(".btn");
changeButton.addEventListener("click", function () {
  userInput = prompt("Enter size:");
  userInput = Math.min(userInput, maxSize);
  while (container.firstChild) {
    container.removeChild(container.firstChild);
  }
  changeSizeOfGrid(userInput);
});
