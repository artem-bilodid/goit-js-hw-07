const categories = document.querySelector("ul#categories");

let logCategoryInfo = (category) => {
  const categoryName = category.querySelector("h2").innerText;
  const elementsLength = category.querySelectorAll("li").length;
  console.log(`Категория: ${categoryName}`);
  console.log(`Количество элементов: ${elementsLength}`);
};

[...categories.children].forEach(logCategoryInfo);
