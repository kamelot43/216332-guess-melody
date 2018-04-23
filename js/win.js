import {statistics, initialState} from "./data/data";
import displayResult from "./data/display-result.js";
import createElement from "./createelement.js";

export default (current) => {
  const template = `
<!-- Результат игры: выигрыш -->
<section class="main main--result">
  <section class="logo" title="Угадай мелодию"><h1>Угадай мелодию</h1></section>

  <h2 class="title">Вы настоящий меломан!</h2>
  <div class="main-stat">За&nbsp;3&nbsp;минуты и 25&nbsp;секунд
    <br>вы&nbsp;набрали ${current.points} баллов (0 быстрых)
    <br>совершив ${initialState.MAX_LIVES - current.notes} ошибки</div>
  <span class="main-comparison">${displayResult(statistics, current)}</span>
  <span role="button" tabindex="0" class="main-replay">Сыграть ещё раз</span>
</section>`;

  const winScreen = createElement(template);
  return winScreen;
};
