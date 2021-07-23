const inputEl = document.querySelector("input");
const renderBtnEl = document.querySelector('button[data-action="render"]');
const destroyBtnEl = document.querySelector('button[data-action="destroy"]');
const boxesEl = document.querySelector("#boxes");

const createBoxes = (amount) => {
  const boxes = [];
  const initialSize = 30;
  for (let i = 0; i < Number(amount); i++) {
    const box = document.createElement("div");
    const boxSize = initialSize + i * 10;
    box.style.width = `${boxSize}px`;
    box.style.height = `${boxSize}px`;
    box.style.backgroundColor = "#" + Math.random().toString(16).substr(-6);
    boxes.push(box);
  }
  boxesEl.innerHTML = "";
  boxesEl.append(...boxes);
};

const destroyBoxes = () => {
  boxesEl.innerHTML = "";
};

renderBtnEl.addEventListener("click", (event) => createBoxes(inputEl.value));
destroyBtnEl.addEventListener("click", destroyBoxes);
