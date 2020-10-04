

// Создай функции increment и decrement для увеличения и уменьшения значения счетчика
// Добавь слушатели кликов на кнопки, вызовы функций и обновление интерфейса

let counterValue = 0;
const incrementBtnEl = document.querySelector('[data-action="increment"]');
const decrementBtnEl = document.querySelector('[data-action="decrement"]');
const valueEl = document.querySelector("#value");

incrementBtnEl.addEventListener("click", onIncrementClick);
decrementBtnEl.addEventListener("click", onDecrementClick);

function onIncrementClick(event) {
  counterValue += 1;
  valueEl.textContent = counterValue;
}
onIncrementClick();

function onDecrementClick(event) {
  counterValue -= 1;
  valueEl.textContent = counterValue;
}



// const targetBtn = document.querySelector('#value');
// const addListenerBtn = document.querySelector('.decrement');
// const removeListenerBtn = document.querySelector('.increment');

// addListenerBtn.addEventListener('click', event => {
//   console.log(event);
//   console.log('Вешаю слушателя события на целевую кнопку');

//   targetBtn.addEventListener('click', onTargetBtnClick);
// });

// removeListenerBtn.addEventListener('click', event => {
//   console.log(event);
//   console.log('Снимаю слушателя события с целевой кнопки');

//   targetBtn.removeEventListener('click', onTargetBtnClick);
// });

// function onTargetBtnClick(event) {
//   console.log(event);
//   console.log('Клик по целевой кнопке');
// }