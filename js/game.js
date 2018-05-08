import HeaderView from "./header";
import renderScreen from "./renderscreen";
import levels from "./data/data";
import setPauseAndPlay from "./data/utils";
import store from "./data/store";
import ArtistView from "./artist";
import GenreView from "./genre";
import WinScreenView from "./win";

class Game {
  constructor(state) {
    this.state = state;
    this.header = new HeaderView(store.currentState);
  }

  init() {
    this.changelevelType();
    renderScreen(this.root);
  }

  changelevelType() {
    if (levels[store.currentState.level].type === `artist`) {
      this.view = new ArtistView(store.currentState);
      this.createArtistGame();
    } else {
      this.view = new GenreView(store.currentState);
      this.createGenreGame();
    }
    this.root = document.createElement(`div`);
    this.root.classList.add(`main`);
    this.root.appendChild(this.header.element);
    this.root.appendChild(this.view.element);
    this.view.element.classList.add(`main`);
  }

  updateHeader() {
    const header = new HeaderView(store.currentState);
    this.root.replaceChild(header.element, this.header.element);
    this.header = header;
  }

  createArtistGame() {
    this.view.onAnswerClick = (evt) => {
      evt.preventDefault();
      let target = evt.target;
      target.getAttribute(`value`) === `true` ? this.checkAnswer(true) : this.checkAnswer(false);
    };

    this.view.onControlPlayer = (evt) => {
      evt.preventDefault();
      setPauseAndPlay(evt);
    };
  }

  createGenreGame() {


    this.view.onAnswerClick = (evt) => {
      evt.preventDefault();

      const form = this.view.element.querySelector(`.genre`);
      const submitBtn = form.querySelector(`.genre-answer-send`);
      const formInputs = form.elements.answer;

      submitBtn.disabled = true;
      if ([...formInputs].some((node) => node.checked === true)) {
        submitBtn.disabled = false;
      }

    };

    this.view.onSubmitClick = (evt) => {
      evt.preventDefault();
      const form = this.view.element.querySelector(`.genre`);
      const formInputs = form.elements.answer;

      const correctArrays = [...levels[store.currentState.level].audios].filter(
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

      correctArrays === checkedInputs && correctArrays === correctAnswers ? this.checkAnswer(true) : this.checkAnswer(false);
    };

    this.view.onControlPlayer = (evt) => {
      evt.preventDefault();
      setPauseAndPlay(evt);
    };
  }

  checkLives() {
    if (store.currentState.lives <= 0) {
      renderScreen(loseAttemptsScreen);
    } else {
      this.updateHeader();
    }
  }

  checkLevel() {
    if (store.currentState.idx >= store.initialState.MAX_LEVEL) {
      store.getPoints();
      this.win = new WinScreenView(store.currentObject);
      this.win.element.classList.add(`main`);
      renderScreen(this.win.element);
    } else {
      this.init();
    }
  }

  checkAnswer(answer) {
    if (answer) {
      store.getNextLevel();
      store.updateStats(true);
      this.checkLevel();
    } else {
      store.getLives();
      store.updateStats(false);
      this.checkLives();
    }
  }
}

const game = new Game();
export default game;
