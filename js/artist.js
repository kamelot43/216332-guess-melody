import createElement from "./createelement";
import header from "./header";
import {levels, initialState} from "./data/data";
import renderScreen from "./renderscreen";


export default (game) => {
  const template = `
<!-- Игра на выбор исполнителя -->
<section class="main main--level main--level-artist">
${header(game)}
<div class="main-wrap">
    <h2 class="title main-title">${levels[game.level].title}</h2>
    <div class="player-wrapper">
      <div class="player">
        <audio src= "${levels[game.level].audio.src}" preload ></audio>
        <button class="player-control player-control--pause"></button>
        <div class="player-track">
          <span class="player-status"></span>
        </div>
      </div>
    </div>
    <form class="main-list">
    ${[...levels[game.level].answers].map((it) =>
    ` <div class="main-answer-wrapper">
         <input class="main-answer-r" type="radio" id="${it.id}" name="answer" value="${it.answer}"/>
         <label class="main-answer" for="${it.id}">
           <img class="main-answer-preview" src="http://placehold.it/134x134"
                alt="Пелагея" width="134" height="134">
           ${it.artist}
         </label>
       </div>`).join(``)}
    </form>
  </div>
</section>`;

  const artistNode = createElement(template);

  return artistNode;
};
