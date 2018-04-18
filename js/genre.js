import createElement from "./createelement";
import header from "./header";
import {levels, initialState} from "./data/data";

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
  return genreNode;
};
