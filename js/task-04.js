const decrementBtnEl = document.querySelector('[data-action="decrement"]');
const incrementBtnEl = document.querySelector('[data-action="increment"]');
const valueEl = document.querySelector("#value");

let counterValue = 0;

const increment = () => {
  counterValue += 1;
  valueEl.textContent = counterValue;
};
const decrement = () => {
  counterValue -= 1;
  valueEl.textContent = counterValue;
};

incrementBtnEl.addEventListener("click", increment);
decrementBtnEl.addEventListener("click", decrement);
