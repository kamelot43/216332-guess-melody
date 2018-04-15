import createElement from "./createelement";
import headerTemplate from "./header";
import {levels, initialState} from "./data/data";

const getArtistScreen = (level) => `
<!-- Игра на выбор исполнителя -->
<section class="main main--level main--level-artist">
${headerTemplate()}
  <div class="main-wrap">
    <h2 class="title main-title">${level.audio.genre}</h2>
    <div class="player-wrapper">
      <div class="player">
        <audio></audio>
        <button class="player-control player-control--pause"></button>
        <div class="player-track">
          <span class="player-status"></span>
        </div>
      </div>
    </div>

  </div>
</section>`;

export default createElement(getArtistScreen(levels[`level-1`]));
