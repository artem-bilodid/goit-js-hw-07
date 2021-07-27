const decrementBtnEl = document.querySelector('[data-action="decrement"]');
const incrementBtnEl = document.querySelector('[data-action="increment"]');
const valueEl = document.querySelector("#value");

let counterValue = 0;

const onIncrementBtnClick = () => {
  counterValue += 1;
  valueEl.textContent = counterValue;
};
const onDecrementBtnClick = () => {
  counterValue -= 1;
  valueEl.textContent = counterValue;
};

incrementBtnEl.addEventListener("click", onIncrementBtnClick);
decrementBtnEl.addEventListener("click", onDecrementBtnClick);
