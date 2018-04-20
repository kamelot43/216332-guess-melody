import renderScreen from "./renderscreen";
import welcomeScreen from "./welcome";
import artistTemplate from "./artist";
import genreTemplate from "./genre";

import winScreen from "./win";
import loseAttemptsScreen from "./lose-attempts";
import loseLateScreen from "./lose-late";
import createElement from "./createelement";
import {levels, initialState, changeState, currentState, findType, resultDefault, changeResult, stats} from "./data/data";

const result = [winScreen, loseAttemptsScreen, loseLateScreen];

// Загрузить начальный экран
renderScreen(welcomeScreen);

const main = document.querySelector(`.main`);


// Вспомогательная функция : случайный результат игры
const randomResult = () => {
  const randomValue = Math.floor(Math.random() * 3);
  renderScreen(result[randomValue]);
};
/*
main.addEventListener(`click`, (evt) => {
  let target = evt.target;
  // Начать игру: выбор артиста
  if (target.classList.contains(`main-play`)) {
    renderScreen(artistTemplate(initialState));
  // Игровой экран : Выбор жанра
  } else if (target.parentNode.classList.contains(`main-answer`)) {
    console.log('');
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
*/
main.addEventListener(`click`, (evt) => {
  let target = evt.target;
  // Начать игру: выбор артиста
  if (target.classList.contains(`main-play`)) {
    renderScreen(artistTemplate(initialState));
  // Игровой экран : Выбор жанра
  } else if (target.classList.contains(`main-answer-r`)) {
    if (target.getAttribute(`value`) === `true`) {
      changeState.setNextLevel(currentState);
      changeState.getStage();
      changeResult.expResult(true);
      if (currentState.idx > 6) {
        renderScreen(loseAttemptsScreen);
      } else {
        findType(currentState);
      }


    } else {
      changeState.setLives(currentState);
      changeResult.expResult(false);
      if (currentState.lives <= 0) {
        renderScreen(loseAttemptsScreen);
      } else {
        renderScreen(artistTemplate(currentState));
      }

    }

  } //

  else if (target.classList.contains(`genre-answer-send`)) {
    evt.preventDefault();
    const form = document.querySelector(`.genre`);
    const formInputs = form.elements.answer;

    // Массив, содержащий в себе все правильные ответы
    const correctArrays = [...levels[currentState.level].audios].filter(function (number) {
      return number.answer === true;
    }).length;

    const checkedInputs = [...formInputs].filter(function (it) {
      return it.checked === true;
    }).length;

    // Все выделенные кнопки + правильный ответ
    const correctAnswers = [...formInputs].filter(function (number) {
      return number.checked === true && number.value === `true`;
    }).length;


    if (correctArrays === checkedInputs && correctArrays === correctAnswers) {
      changeState.setNextLevel(currentState);
      changeState.getStage();
      changeResult.expResult(true);
      if (currentState.idx > 6) {
        renderScreen(loseAttemptsScreen);
      } else {
        findType(currentState);
      }
    } else {
      changeState.setLives(currentState);
      changeResult.expResult(false);
      if (currentState.lives <= 0) {
        renderScreen(loseAttemptsScreen);
      } else {
        findType(currentState);
      }
    }
  } else if (target.classList.contains(`main-replay`)) {
    renderScreen(welcomeScreen);
    changeState.resetState();
  }
});
