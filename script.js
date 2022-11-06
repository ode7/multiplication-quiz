const num1 = Math.ceil(Math.random() * 10);
const num2 = Math.ceil(Math.random() * 10);
let quesEl = document.querySelector('#question');
quesEl.innerText = `What is ${num1} multiply by ${num2}?`;
const ans = num1 * num2;
let scoreEl = document.querySelector('#score');

let score = JSON.parse(localStorage.getItem('score'));
if (!score) {
  score = 0;
}
scoreEl.innerText = `Score:${score}`;

let inputEl = document.querySelector('#input');
const formEl = document.querySelector('#form');
formEl.addEventListener('submit', () => {
  const userans = +inputEl.value;
  if (userans === ans) {
    score++;
    updateLocalStorage();
  } else {
    score--;
    updateLocalStorage();
  }
});
function updateLocalStorage() {
  localStorage.setItem('score', JSON.stringify(score));
}
