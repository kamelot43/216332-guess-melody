import artistTemplate from "../artist";
import genreTemplate from "../genre";
import renderScreen from "../renderscreen";
import winScreen from "../win";
import loseAttemptsScreen from "../lose-attempts";
import calcPoints from "./calc-points";
import levels, {
  initialState,
  resultDefault,
  currentObject,
  currentState,
  stats
} from "./data";

export const calculate = (data, state) => {
  const gamePoints = calcPoints(data, state.lives);
  currentObject.notes = state.lives;
  currentObject.points = gamePoints;
  return currentObject;
};

// Изменяет текущее состояние : изменение очков пользователя + добавление очков в общий игровой зачет
export const changeResult = {
  expResult(answer) {
    const currentResult = Object.assign({}, resultDefault);
    currentResult.success = answer;
    stats.push(currentResult);
  }
};

// Отрисовать экран в зависимости от типа игры : выбор артиста или выбор песен одного жанра
export const findType = (game) => {
  levels[game.level].type === `artist`
    ? renderScreen(artistTemplate(game))
    : renderScreen(genreTemplate(game));
};

// Изменяет текущее состояние
export const changeState = {
  getStage() {
    return currentState;
  },
  setNextLevel(current) {
    currentState.idx += 1;
    currentState.level = `level-` + current.idx;
  },
  setLives(current) {
    current.lives -= 1;
    return current;
  },
  resetState(current, base) {
    current.level = base.level;
    current.lives = base.lives;
    current.idx = base.idx;
    current.time = base.time;
    return current;
  },
  resetStats(param) {
    param.length = 0;
    return param;
  }
};

// Воспроизведение/остановка трека
export const setPauseAndPlay = (btn) => {
  btn.addEventListener(`click`, (evt) => {
    evt.preventDefault();
    let target = evt.target;
    if (target.classList.contains(`player-control--pause`)) {
      target.classList.remove(`player-control--pause`);
      target.previousElementSibling.pause();
    } else {
      target.classList.add(`player-control--pause`);
      target.previousElementSibling.play();
    }
  });
};

// Функция принимает ответ пользователя
// Переход на следующий уровень если ответ правильный + подсчет очков
// Пересчет жизней если ответ неправильный + подсчет очков
const gamePlay = (state, answer) => {
  if (answer) {
    changeState.setNextLevel(state);
    changeState.getStage();
    changeResult.expResult(true);
    if (currentState.idx >= initialState.MAX_LEVEL) {
      calculate(stats, state);
      renderScreen(winScreen(currentObject));
    } else {
      findType(state);
    }
  } else {
    changeState.setLives(state);
    changeResult.expResult(false);
    if (currentState.lives <= 0) {
      renderScreen(loseAttemptsScreen);
    } else {
      findType(state);
    }
  }
};
export default gamePlay;
