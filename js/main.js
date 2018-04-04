import renderScreen from "./renderscreen";
import welcomeScreen from "./welcome";
import artistScreen from "./artist";
import genreScreen from "./genre";

import winScreen from "./win";
import loseAttemptsScreen from "./lose-attempts";
import loseLateScreen from "./lose-late";

const result = [winScreen, loseAttemptsScreen, loseLateScreen];

// Загрузить начальный экран
renderScreen(welcomeScreen);

const main = document.querySelector(`.main`);

// Вспомогательная функция для изменения статуса кнопки
const changeButtonStatus = (param) => {
  const formButton = document.querySelector(`.genre-answer-send`);
  formButton.disabled = true;
  if ((param) && [...param].some((node) => node.checked === true)) {
    formButton.disabled = false;
  }
};

// Вспомогательная функция : изменения input
const changeInputs = () => {
  const form = document.querySelector(`.genre`);
  const formInputs = form.elements.answer;
  changeButtonStatus([...formInputs]);
};

// Вспомогательная функция : случайный результат игры
const randomResult = () => {
  const randomValue = Math.floor(Math.random() * 3);
  renderScreen(result[randomValue]);
};

main.addEventListener(`click`, (evt) => {
  let target = evt.target;
  // Начать игру: выбор артиста
  if (target.classList.contains(`main-play`)) {
    renderScreen(artistScreen);
  // Игровой экран : Выбор жанра
  } else if (target.parentNode.classList.contains(`main-answer`)) {
    renderScreen(genreScreen);
    changeButtonStatus();
  // Игровой процесс : выбор ответа
  } else if (target.tagName === `INPUT`) {
    changeInputs();
  // Случайный исход игры
  } else if (target.classList.contains(`genre-answer-send`)) {
    evt.preventDefault();
    randomResult();
  } else if (target.classList.contains(`main-replay`)) {
    renderScreen(welcomeScreen);
  }
});
