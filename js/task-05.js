const inputEl = document.querySelector("input#name-input");
const outputEl = document.querySelector("span#name-output");

const updateOutput = () => {
  const newValue = inputEl.value;
  if (newValue) {
    outputEl.innerText = newValue;
  } else {
    outputEl.innerText = "незнакомец";
  }
};

inputEl.addEventListener("input", updateOutput);
