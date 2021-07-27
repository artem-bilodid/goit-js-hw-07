const inputEl = document.querySelector("#font-size-control");
const textEl = document.querySelector("#text");

const onChangeUpdateTextSize = () => {
  textEl.style.fontSize = `${inputEl.value}px`;
};

inputEl.addEventListener("change", onChangeUpdateTextSize);
