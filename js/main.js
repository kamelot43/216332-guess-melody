import renderScreen from "./renderscreen";
import WelcomeView from "./welcome";
import game from "./game";

const welcomeView = new WelcomeView();

welcomeView.element.classList.add(`main`);
renderScreen(welcomeView.element);

welcomeView.onPlayClick = () => {
  game.init();
};
