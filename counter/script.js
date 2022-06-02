let numContainer = document.getElementById('number');
let btnIncrease = document.querySelector('.increase');
let btnReset = document.querySelector('.reset');
let btnDecrease = document.querySelector('.decrease');
let count = 0

btnIncrease.addEventListener("click", () => {
    count++;
    numContainer.textContent = count;
  });
  btnReset.addEventListener("click", () => {
    count = 0;
    numContainer.textContent = count;
  });
  btnDecrease.addEventListener("click", () => {
    count--;
    numContainer.textContent = count;
  });