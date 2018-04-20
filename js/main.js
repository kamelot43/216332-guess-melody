import renderScreen from "./renderscreen";
import welcomeScreen from "./welcome";
import artistTemplate from "./artist";
import genreTemplate from "./genre";

import winScreen from "./win";
import loseAttemptsScreen from "./lose-attempts";
import loseLateScreen from "./lose-late";
import createElement from "./createelement";
import {
  levels,
  initialState,
  changeState,
  currentState,
  findType,
  resultDefault,
  changeResult,
  stats,
  gamePlay
} from "./data/data";

// Загрузить начальный экран
renderScreen(welcomeScreen);

const main = document.querySelector(`.main`);

main.addEventListener(`click`, (evt) => {
  let target = evt.target;
  // Начать игру:
  if (target.classList.contains(`main-play`)) {
    findType(currentState);
  } else if (target.classList.contains(`main-answer-r`)) {
    if (target.getAttribute(`value`) === `true`) {
      gamePlay(currentState, true);
    } else {
      gamePlay(currentState, false);
    }
  } else if (target.classList.contains(`genre-answer-send`)) {
    evt.preventDefault();
    const form = document.querySelector(`.genre`);
    const formInputs = form.elements.answer;

    // Массив, содержащий в себе все правильные ответы
    const correctArrays = [...levels[currentState.level].audios].filter(
        function (number) {
          return number.answer === true;
        }
    ).length;

    const checkedInputs = [...formInputs].filter(function (it) {
      return it.checked === true;
    }).length;

    // Все выделенные кнопки + правильный ответ
    const correctAnswers = [...formInputs].filter(function (number) {
      return number.checked === true && number.value === `true`;
    }).length;

    if (correctArrays === checkedInputs && correctArrays === correctAnswers) {
      gamePlay(currentState, true);
    } else {
      gamePlay(currentState, false);
    }
  } else if (target.classList.contains(`main-replay`)) {
    renderScreen(welcomeScreen);
    changeState.resetState();
  }
});
