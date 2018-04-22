import createElement from "./createelement";
import header from "./header";
import levels from "./data/data";
import {setPauseAndPlay} from "./data/utils";

export default (game) => {
  const template = `
  <!-- Игра на выбор жанра -->
  <section class="main main--level main--level-genre">
  ${header(game)}
    <div class="main-wrap">
      <h2 class="title">${levels[game.level].title}</h2>
      <form class="genre">
      ${[...levels[game.level].audios]
      .map(
          (it) =>
            `<div class="genre-answer">
         <div class="player-wrapper">
           <div class="player">
             <audio src= "${it.src}" preload></audio>
             <button class="player-control"></button>
             <div class="player-track">
               <span class="player-status"></span>
             </div>
           </div>
         </div>
         <input type="checkbox" name="answer" value="${it.answer}" id="${it.id}">
         <label class="genre-answer-check" for="${it.id}"></label>
       </div>`
      )
      .join(``)}
        <button class="genre-answer-send" type="submit">Ответить</button>
      </form>
    </div>
  </section>`;

  const genreNode = createElement(template);

  const form = genreNode.querySelector(`.genre`);

  const playerControl = genreNode.querySelectorAll(`.player-control`);

  [...playerControl].forEach((it) => {
    setPauseAndPlay(it);
  });

  // Вспомогательная функция для изменения статуса кнопки
  const changeButtonStatus = (param) => {
    const formButton = genreNode.querySelector(`.genre-answer-send`);
    formButton.disabled = true;
    if (param && [...param].some((node) => node.checked === true)) {
      formButton.disabled = false;
    }
  };
  changeButtonStatus();

  // Вспомогательная функция : изменения input
  const changeInputs = () => {
    const formInputs = form.elements.answer;
    changeButtonStatus([...formInputs]);
  };

  form.addEventListener(`click`, (evt) => {
    let target = evt.target;
    if (target.tagName === `INPUT`) {
      changeInputs();
    }
  });

  return genreNode;
};
