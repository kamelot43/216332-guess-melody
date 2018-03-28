'use sctrict';
const leftArrow = 37;
const rightArrow = 39;
const template = document.getElementById(`templates`);
const screens = template.content.children;
const sectionMain = document.querySelector(`.main`);
let startScreenIndex = 0;

// Создание функции отрисовки заданного экрана

let renderScreen = (num) => {
  let node = screens[num].cloneNode(true);
  sectionMain.innerHTML = ``;
  sectionMain.appendChild(node);
};

renderScreen(startScreenIndex);


// Переключение экрана. Обработчик события.

document.addEventListener(`keydown`, function (evt) {

  if (!evt.altKey) {
    return;
  }
  if (evt.keyCode === rightArrow && startScreenIndex < screens.length - 1) {
    startScreenIndex += 1;
    renderScreen(startScreenIndex);

  } else if (evt.keyCode === leftArrow && startScreenIndex > 0) {
    startScreenIndex -= 1;
    renderScreen(startScreenIndex);
  }
});
