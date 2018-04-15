import createElement from "./createelement";
import header from "./header";
import {levels, initialState} from "./data/data";

const getArtistScreen = (state, level) => `
<!-- Игра на выбор исполнителя -->
<section class="main main--level main--level-artist">
${header(state)}
<div class="main-wrap">
    <h2 class="title main-title">${level.title}</h2>
    <div class="player-wrapper">
      <div class="player">
        <audio src= "${level.audio.src}" preload ></audio>
        <button class="player-control player-control--pause"></button>
        <div class="player-track">
          <span class="player-status"></span>
        </div>
      </div>
    </div>
    <form class="main-list">
    ${[...level.answers].map((answer) =>
    ` <div class="main-answer-wrapper">
         <input class="main-answer-r" type="radio" id="${answer.id}" name="answer" value="${answer.value}"/>
         <label class="main-answer" for="answer-1">
           <img class="main-answer-preview" src="http://placehold.it/134x134"
                alt="Пелагея" width="134" height="134">
           ${answer.artist}
         </label>
       </div>`).join(``)}
    </form>
  </div>
</section>`;

export default createElement(getArtistScreen(initialState, levels[`level-1`]));
