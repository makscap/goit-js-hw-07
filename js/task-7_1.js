const CategoriesEl = document.querySelectorAll(".item");

  const CategoriesAllEl = `В списке ${CategoriesEl.length} категории.`
  console.log(CategoriesAllEl)

  const itemEl = document.querySelectorAll(".item");

const category = (array) => {
  array.forEach((element) => {
    const Hero = element.querySelector("h2");
    const itemEl = element.querySelectorAll("li");
    const message = `Категория: ${Hero.textContent}. Количество элементов: ${itemEl.length}.`;
    console.log(message);
  });
};
category(itemEl);
