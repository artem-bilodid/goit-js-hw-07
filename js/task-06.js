const inputEl = document.querySelector("input#validation-input");

const onBlurValidateInput = () => {
  if (Number(inputEl.dataset.length) !== inputEl.value.length) {
    inputEl.classList.replace("valid", "invalid") ||
      inputEl.classList.add("invalid");
  } else {
    inputEl.classList.replace("invalid", "valid") ||
      inputEl.classList.add("valid");
  }
};

inputEl.addEventListener("blur", onBlurValidateInput);
