import store from "./data/store";
import AbstractView from "./abstract-view";
import displayResult from "./data/display-result";

const TYPE_TEXT = {
  win: {
    title: `Вы настоящий меломан!`
  },
  livesOver: {
    title: `Какая жалость!`
  },
  timeOver: {
    title: `Увы и ах!`
  }
};

export default class ResultView extends AbstractView {
  constructor(state) {
    super();
    this.state = state;
  }

  get template() {
    return `
  <section class="main main--result">
    <section class="logo" title="Угадай мелодию"><h1>Угадай мелодию</h1></section>
    <h2 class="title">${this.findCurrentTitle()}</h2>
    ${this.findResultScreen()}
  </section>`;
  }

  bind() {
    const replayBtn = this.element.querySelector(`.main-replay`);

    const replayHandler = (evt) => {
      evt.stopPropagation();
      evt.preventDefault();
      this.onReplayClick();
    };

    replayBtn.addEventListener(`click`, replayHandler);
  }

  findResultScreen() {
    if (this.state.notes <= 0 || this.state.time <= 0) {
      return `<div class="main-stat">${displayResult(
          store.statistics,
          this.state
      )} </div>
        <span role="button" tabindex="0" class="main-replay">Попробовать ещё раз</span>`;
    } else {
      return `<div class="main-stat">За&nbsp;3&nbsp;минуты и 25&nbsp;секунд
        <br>вы&nbsp;набрали ${this.state.points} баллов (0 быстрых)
        <br>совершив ${store.initialState.MAX_LIVES -
          this.state.notes} ошибки</div>
      <span class="main-comparison">${displayResult(
      store.statistics,
      this.state
  )}</span>
        <span role="button" tabindex="0" class="main-replay">Сыграть ещё раз</span>
      </div>`;
    }
  }

  findCurrentTitle() {
    if (this.state.notes <= 0) {
      return TYPE_TEXT.livesOver.title;
    } else if (this.state.time <= 0) {
      return TYPE_TEXT.timeOver.title;
    } else {
      return TYPE_TEXT.win.title;
    }
  }

  onReplayClick() {}
}
