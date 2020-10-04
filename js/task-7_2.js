const ingredients = [
    'Картошка',
    'Грибы',
    'Чеснок',
    'Помидоры',
    'Зелень',
    'Приправы',
  ];

const item = ingredients.map((ingredient) => {
    const itemEl = document.createElement('li');
    itemEl.textContent = ingredient;
return itemEl;
})

const ingredientsEL = document.querySelector("#ingredients");
ingredientsEL.append(...item);
console.log(ingredientsEL)