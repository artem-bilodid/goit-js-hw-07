const inputEl = document.querySelector("#font-size-control");
const textEl = document.querySelector("#text");

const updateTextSize = () => {
  console.log("!!");
  textEl.style.fontSize = `${inputEl.value}px`;
};

inputEl.addEventListener("change", updateTextSize);
