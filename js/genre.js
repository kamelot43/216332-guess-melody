import createElement from "./createelement";
import header from "./header";
import {levels, initialState, changeState, currentState, findType, resultDefault, changeResult, stats} from "./data/data";
import renderScreen from "./renderscreen";

import winScreen from "./win";
import loseAttemptsScreen from "./lose-attempts";
import loseLateScreen from "./lose-late";

export default (game) => {
  const template = `
  <!-- Игра на выбор жанра -->
  <section class="main main--level main--level-genre">
  ${header(game)}
    <div class="main-wrap">
      <h2 class="title">${levels[game.level].title}</h2>
      <form class="genre">
      ${[...levels[game.level].audios].map((it) =>
    `<div class="genre-answer">
         <div class="player-wrapper">
           <div class="player">
             <audio src= "${it.src}" preload></audio>
             <button class="player-control player-control--pause"></button>
             <div class="player-track">
               <span class="player-status"></span>
             </div>
           </div>
         </div>
         <input type="checkbox" name="answer" value="${it.answer}" id="${it.id}">
         <label class="genre-answer-check" for="${it.id}"></label>
       </div>`).join(``)}
        <button class="genre-answer-send" type="submit">Ответить</button>
      </form>
    </div>
  </section>`;

  const genreNode = createElement(template);


  const form = genreNode.querySelector(`.genre`);

  // Вспомогательная функция для изменения статуса кнопки
  const changeButtonStatus = (param) => {
    const formButton = genreNode.querySelector(`.genre-answer-send`);
    formButton.disabled = true;
    if ((param) && [...param].some((node) => node.checked === true)) {
      formButton.disabled = false;
    }
  };

  // Вспомогательная функция : изменения input
  const changeInputs = () => {
    const formInputs = form.elements.answer;
    changeButtonStatus([...formInputs]);
  };
  changeButtonStatus();

  form.addEventListener(`click`, (evt) => {
    let target = evt.target;
    const formInputs = form.elements.answer;
    // Массив ответов
    const correctArrays = [...levels[game.level].audios].filter(function (number) {
      return number.answer === true;
    }).length;

    if (target.tagName === `INPUT`) {
      changeInputs();
      // Все выделенные кнопки

    } else if (target.classList.contains(`genre-answer-send`)) {
      evt.preventDefault();
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
    }
  });

  return genreNode;


};
