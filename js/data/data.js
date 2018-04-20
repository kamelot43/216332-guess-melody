import artistTemplate from "../artist";
import genreTemplate from "../genre";
import renderScreen from "../renderscreen";

import winScreen from "../win";
import loseAttemptsScreen from "../lose-attempts";

// хранит начальное состояние игры
export const initialState = {
  level: `level-1`,
  lives: 3,
  idx: 1,
  time: 300,
  MAX_LEVEL: 10,
  MAX_LIVES: 3,
  STANDART_TIME: 35
};

// Текущее состояние
export const currentState = Object.assign({}, initialState);

// Массив ответов игороков
const statistics = [4, 5, 8, 10, 11];

// хранит игровые очки пользователя
export const stats = [];

export const levels = {
  'level-1': {
    title: `Кто исполняет эту песню ?`,
    type: `artist`,
    audio: {
      artist: `Kevin MacLeod`,
      name: `Long Stroll`,
      image: `https://yt3.ggpht.com/-fkDeGauT7Co/AAAAAAAAAAI/AAAAAAAAAAA/dkF5ZKkrxRo/s900-c-k-no-mo-rj-c0xffffff/photo.jpg`,
      src: `https://www.youtube.com/audiolibrary_download?vid=91624fdc22fc54ed`,
      genre: `Jazz`
    },
    answers: new Set([
      {
        id: `answer-1`,
        src: ``,
        artist: `Пелагея`,
        answer: false
      },
      {
        id: `answer-2`,
        src: ``,
        artist: `Боб Марли`,
        answer: false
      },
      {
        id: `answer-3`,
        src: ``,
        artist: `Kevin MacLeod`,
        answer: true
      }
    ])
  },
  'level-2': {
    title: `Кто исполняет эту песню ?`,
    type: `artist`,
    audio: {
      artist: `Jingle Punks`,
      name: `In the Land of Rhinoplasty`,
      image: `https://i.vimeocdn.com/portrait/992615_300x300`,
      src: `https://www.youtube.com/audiolibrary_download?vid=dc3b4dc549becd6b`,
      genre: `Rock`
    },
    answers: new Set([
      {
        id: `answer-1`,
        src: ``,
        artist: `Metalica`,
        answer: false
      },
      {
        id: `answer-2`,
        src: ``,
        artist: `Jingle Punks`,
        answer: true
      },
      {
        id: `answer-3`,
        src: ``,
        artist: `Kevin MacLeod`,
        answer: false
      }
    ])
  },
  'level-3': {
    title: `Кто исполняет эту песню ?`,
    type: `artist`,
    audio: {
      artist: `Audionautix`,
      name: `Travel Light`,
      image: `http://4.bp.blogspot.com/-kft9qu5ET6U/VPFUBi9W-MI/AAAAAAAACYM/UxXilXKYwOc/s1600/audionautix%2BHalf%2BSize.jpg`,
      src: `https://www.youtube.com/audiolibrary_download?vid=a127d9b7de8a17cf`,
      genre: `Country`
    },
    answers: new Set([
      {
        id: `answer-1`,
        src: ``,
        artist: `Дидюля`,
        answer: false
      },
      {
        id: `answer-2`,
        src: ``,
        artist: `Audionautix`,
        answer: true
      },
      {
        id: `answer-3`,
        src: ``,
        artist: `Дима Билан`,
        answer: false
      }
    ])
  },
  'level-4': {
    title: `Выберите инди-рок треки`,
    type: `genre`,
    audios: new Set([
      {
        id: `a-1`,
        artist: `Audionautix`,
        name: `Travel Light`,
        src: `https://www.youtube.com/audiolibrary_download?vid=a127d9b7de8a17cf`,
        genre: `Country`,
        answer: true
      },
      {
        id: `a-2`,
        artist: `Gunnar Olsen`,
        name: `Home Stretch`,
        src: `https://www.youtube.com/audiolibrary_download?vid=bcbe5be936a32fb1`,
        genre: `Electronic`,
        answer: true
      },
      {
        id: `a-3`,
        artist: `Riot`,
        name: `Level Plane`,
        src: `https://www.youtube.com/audiolibrary_download?vid=dfb828f40096184c`,
        genre: `R&B`,
        answer: true
      },
      {
        id: `a-4`,
        value: `answer-4`,
        artist: `Kevin MacLeod`,
        name: `Long Stroll`,
        src: `https://www.youtube.com/audiolibrary_download?vid=91624fdc22fc54ed`,
        genre: `Jazz`,
        answer: false
      }
    ])
  },
  'level-5': {
    title: `Кто исполняет эту песню ?`,
    type: `artist`,
    audio: {
      artist: `Riot`,
      name: `Level Plane`,
      image: `https://i.ytimg.com/vi/jzgM3m8Vp1k/maxresdefault.jpg`,
      src: `https://www.youtube.com/audiolibrary_download?vid=dfb828f40096184c`,
      genre: `R&B`
    },
    answers: new Set([
      {
        id: `answer-1`,
        src: ``,
        artist: `Riot`,
        answer: true
      },
      {
        id: `answer-2`,
        src: ``,
        artist: `Пелагея`,
        answer: false
      },
      {
        id: `answer-3`,
        src: ``,
        artist: `Иван Дорн`,
        answer: false
      }
    ])
  },
  'level-6': {
    title: `Кто исполняет эту песню ?`,
    type: `artist`,
    audio: {
      artist: `Kevin MacLeod`,
      name: `Long Stroll`,
      image: `https://yt3.ggpht.com/-fkDeGauT7Co/AAAAAAAAAAI/AAAAAAAAAAA/dkF5ZKkrxRo/s900-c-k-no-mo-rj-c0xffffff/photo.jpg`,
      src: `https://www.youtube.com/audiolibrary_download?vid=91624fdc22fc54ed`,
      genre: `Jazz`
    },
    answers: new Set([
      {
        id: `answer-1`,
        src: ``,
        artist: `Пелагея`,
        answer: false
      },
      {
        id: `answer-2`,
        src: ``,
        artist: `Боб Марли`,
        answer: false
      },
      {
        id: `answer-3`,
        src: ``,
        artist: `Kevin MacLeod`,
        answer: true
      }
    ])
  },
  'level-7': {
    title: `Кто исполняет эту песню ?`,
    type: `artist`,
    audio: {
      artist: `Jingle Punks`,
      name: `In the Land of Rhinoplasty`,
      image: `https://i.vimeocdn.com/portrait/992615_300x300`,
      src: `https://www.youtube.com/audiolibrary_download?vid=dc3b4dc549becd6b`,
      genre: `Rock`
    },
    answers: new Set([
      {
        id: `answer-1`,
        src: ``,
        artist: `Metalica`,
        answer: false
      },
      {
        id: `answer-2`,
        src: ``,
        artist: `Jingle Punks`,
        answer: true
      },
      {
        id: `answer-3`,
        src: ``,
        artist: `Kevin MacLeod`,
        answer: false
      }
    ])
  },
  'level-8': {
    title: `Кто исполняет эту песню ?`,
    type: `artist`,
    audio: {
      artist: `Audionautix`,
      name: `Travel Light`,
      image: `http://4.bp.blogspot.com/-kft9qu5ET6U/VPFUBi9W-MI/AAAAAAAACYM/UxXilXKYwOc/s1600/audionautix%2BHalf%2BSize.jpg`,
      src: `https://www.youtube.com/audiolibrary_download?vid=a127d9b7de8a17cf`,
      genre: `Country`
    },
    answers: new Set([
      {
        id: `answer-1`,
        src: ``,
        artist: `Дидюля`,
        answer: false
      },
      {
        id: `answer-2`,
        src: ``,
        artist: `Audionautix`,
        answer: true
      },
      {
        id: `answer-3`,
        src: ``,
        artist: `Дима Билан`,
        answer: false
      }
    ])
  },
  'level-9': {
    title: `Выберите инди-рок треки`,
    type: `genre`,
    audios: new Set([
      {
        id: `a-1`,
        artist: `Audionautix`,
        name: `Travel Light`,
        src: `https://www.youtube.com/audiolibrary_download?vid=a127d9b7de8a17cf`,
        genre: `Country`,
        answer: true
      },
      {
        id: `a-2`,
        artist: `Gunnar Olsen`,
        name: `Home Stretch`,
        src: `https://www.youtube.com/audiolibrary_download?vid=bcbe5be936a32fb1`,
        genre: `Electronic`,
        answer: true
      },
      {
        id: `a-3`,
        artist: `Riot`,
        name: `Level Plane`,
        src: `https://www.youtube.com/audiolibrary_download?vid=dfb828f40096184c`,
        genre: `R&B`,
        answer: true
      },
      {
        id: `a-4`,
        value: `answer-4`,
        artist: `Kevin MacLeod`,
        name: `Long Stroll`,
        src: `https://www.youtube.com/audiolibrary_download?vid=91624fdc22fc54ed`,
        genre: `Jazz`,
        answer: false
      }
    ])
  },
  'level-10': {
    title: `Кто исполняет эту песню ?`,
    type: `artist`,
    audio: {
      artist: `Riot`,
      name: `Level Plane`,
      image: `https://i.ytimg.com/vi/jzgM3m8Vp1k/maxresdefault.jpg`,
      src: `https://www.youtube.com/audiolibrary_download?vid=dfb828f40096184c`,
      genre: `R&B`
    },
    answers: new Set([
      {
        id: `answer-1`,
        src: ``,
        artist: `Riot`,
        answer: true
      },
      {
        id: `answer-2`,
        src: ``,
        artist: `Пелагея`,
        answer: false
      },
      {
        id: `answer-3`,
        src: ``,
        artist: `Иван Дорн`,
        answer: false
      }
    ])
  }
};


// Базовое значение : ответ пользователя
export const resultDefault = {
  success: true,
  time: initialState.STANDART_TIME
};

// Изменяет текущее состояние
export const changeState = {
  getStage() {
    return currentState;
  },
  setNextLevel(game) {
    currentState.idx += 1;
    currentState.level = `level-` + currentState.idx;
  },
  setLives(game) {
    currentState.lives -= 1;
    return currentState;
  },
  resetState() {
    currentState.level = initialState.level,
    currentState.lives = initialState.lives,
    currentState.idx = initialState.idx,
    currentState.time = initialState.time;
    return currentState;
  }
};

// Изменяет текущее состояние : изменение очков пользователя + добавление очков в общий игровой зачет
export const changeResult = {
  expResult(answer) {
    const currentResult = Object.assign({}, resultDefault);
    currentState.success = answer;
    stats.push(currentResul);
  }
};

// Отрисовать экран в зависимости от типа игры : выбор артиста или выбор песен одного жанра
export const findType = (game) => {
  levels[game.level].type == `artist` ? renderScreen(artistTemplate(game)) : renderScreen(genreTemplate(game));
};

// Функция принимает ответ пользователя
// Переход на следующий уровень если ответ правильный + подсчет очков
// Пересчет жизней если ответ неправильный + подсчет очков
export const gamePlay = (currentState, answer) => {
  if (answer) {
    changeState.setNextLevel(currentState);
    changeState.getStage();
    changeResult.expResult(true);
    if (currentState.idx > initialState.MAX_LEVEL) {
      renderScreen(winScreen);
    } else {
      findType(currentState);
    }
  } else {
    changeState.setLives(currentState);
    changeResult.expResult(false);
    if (currentState.lives <= 0) {
      renderScreen(loseAttemptsScreen);
    } else {
      findType(currentState);
    }
  }
};
