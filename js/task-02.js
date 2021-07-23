const ingredients = [
  "Картошка",
  "Грибы",
  "Чеснок",
  "Помидоры",
  "Зелень",
  "Приправы",
];

const createIngridientEl = (ingridient) => {
  let ingridientEl = document.createElement("li");
  ingridientEl.innerText = ingridient;
  return ingridientEl;
};

const ingridientsEl = document.querySelector("ul#ingredients");
const newIngridients = ingredients.map(createIngridientEl);

ingridientsEl.append(...newIngridients);
