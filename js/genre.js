import createElement from "./createelement";
import header from "./header";
import {levels, initialState} from "./data/data";

const getGenreScreen = (state, level) => `
  <!-- Игра на выбор жанра -->
  <section class="main main--level main--level-genre">
  ${header(state)}
    <div class="main-wrap">
      <h2 class="title"> ${level.title}</h2>
      <form class="genre">
      ${[...level.audios].map((answer) =>
    `<div class="genre-answer">
         <div class="player-wrapper">
           <div class="player">
             <audio src= "${answer.src}" preload></audio>
             <button class="player-control player-control--pause"></button>
             <div class="player-track">
               <span class="player-status"></span>
             </div>
           </div>
         </div>
         <input type="checkbox" name="answer" value="${answer.value}" id="${answer.id}">
         <label class="genre-answer-check" for="${answer.id}"></label>
       </div>`).join(``)}
        <button class="genre-answer-send" type="submit">Ответить</button>
      </form>
    </div>
  </section>`;

export default createElement(getGenreScreen(initialState, levels[`level-4`]));
