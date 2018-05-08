import store from "./data/store";
import AbstractView from "./abstract-view";
import displayResult from "./data/display-result";

export default class WinScreenView extends AbstractView {
  constructor(game) {
    super();
    this.game = game;
  }

  get template() {
    return `
<!-- Результат игры: выигрыш -->
<section class="main main--result">
  <section class="logo" title="Угадай мелодию"><h1>Угадай мелодию</h1></section>

  <h2 class="title">Вы настоящий меломан!</h2>
  <div class="main-stat">За&nbsp;3&nbsp;минуты и 25&nbsp;секунд
    <br>вы&nbsp;набрали ${this.game.points} баллов (0 быстрых)
    <br>совершив ${store.initialState.MAX_LIVES - this.game.notes} ошибки</div>
  <span class="main-comparison">${displayResult(store.statistics, this.game)}</span>
  <span role="button" tabindex="0" class="main-replay">Сыграть ещё раз</span>
</section>`;
  }

}
