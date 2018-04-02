import renderScreen from "./renderscreen";
import welcomeScreen from "./welcome";
import artistScreen from "./artist";
import genreScreen from "./genre";

import winScreen from "./win";
import loseAttemptsScreen from "./lose-attempts";
import loseLateScreen from "./lose-late";

const result = [winScreen, loseAttemptsScreen, loseLateScreen];

// Загрузить начальный экран
renderScreen(welcomeScreen);

const main = document.querySelector(`.main`);

main.addEventListener(`click`, (evt) => {
  let target = evt.target;
  // Начать игру: выбор артиста
  if (target.classList.contains(`main-play`)) {
    renderScreen(artistScreen);
  // Выбор жанра
  } if (target.parentNode.classList.contains(`main-answer`)) {
    renderScreen(genreScreen);
    const form = document.querySelector(`.genre`);
    const formButton = form.querySelector(`.genre-answer-send`);
    const formInputs = form.elements.answer;
    formButton.disabled = true;

    // Активация или деактивация кнопки, в зависимости от выбора пользователя
    [...formInputs].forEach((element) => {
      element.addEventListener(`change`, () => {
        if ([...formInputs].some((node) => node.checked)) {
          formButton.disabled = false;

          formButton.addEventListener(`click`, () => {
            const randomValue = Math.floor(Math.random() * 3);
            // Показать экран : результаты(случайное значение).
            renderScreen(result[randomValue]);

            const replayButton = main.querySelector(`.main-replay`);
            // Показать экран : экран приветствия.
            replayButton.addEventListener(`click`, () => {
              renderScreen(welcomeScreen);
            });
          });
        } else {
          formButton.disabled = true;
        }
      });
    });

  }
});
