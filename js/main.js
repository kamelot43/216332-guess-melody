'use sctrict';
const leftArrow = 37;
const rightArrow = 39;
const template = document.getElementById(`templates`);
const screens = template.content.children;
const sectionMain = document.querySelector(`.main`);
let start = 0;

// Создание функции отрисовки заданного экрана

let renderScreen = (num) => {
  let node = screens[num].cloneNode(true);
  sectionMain.innerHTML = ``;
  sectionMain.appendChild(node);
};

renderScreen(0);


// Переключение экрана. Обработчик события.

document.addEventListener(`keydown`, function (evt) {

  if (evt.altKey && evt.keyCode === rightArrow) {
    if (start < screens.length - 1) {
      start += 1;
      renderScreen(start);
    }
  } else if (evt.altKey && evt.keyCode === leftArrow) {
    if (start > 0) {
      start -= 1;
      renderScreen(start);
    }
  }

});
