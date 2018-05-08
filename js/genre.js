import HeaderView from "./header";
import levels from "./data/data";
import setPauseAndPlay from "./data/utils";
import AbstractView from "./abstract-view";

export default class GenreView extends AbstractView {

  constructor(game) {
    super();
    this.game = game;
    this.levels = levels;
  }

  get template() {
    const header = new HeaderView(this.game);
    return `
  <!-- Игра на выбор жанра -->
  <section class="main main--level main--level-genre">
   ${header.template};
    <div class="main-wrap">
      <h2 class="title">${this.levels[this.game.level].title}</h2>
      <form class="genre">
      ${[...this.levels[this.game.level].audios].map((it) =>
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
       </div>`).join(``)}
        <button class="genre-answer-send" type="submit">Ответить</button>
      </form>
    </div>
  </section>`;
  }

  bind() {
    const form = this.element.querySelector(`.genre`);
    const formInputs = form.elements.answer;
    const submitBtn = this.element.querySelector(`.genre-answer-send`);
    submitBtn.disabled = true;


    [...formInputs].forEach((elem) => {
      elem.addEventListener(`change`, this.onAnswerClick);
    });

    submitBtn.addEventListener(`click`, this.onSubmitClick);
    const playerBtn = this.element.querySelector(`.player-control`);
    playerBtn.addEventListener(`click`, this.onControlPlayer);
  }

  onAnswerClick() {}

  onSubmitClick() {}

  onControlPlayer() {}


}
