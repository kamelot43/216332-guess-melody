// хранит начальное состояние игры
export const initialState = {
  level: 1,
  lives: 2,
  time: 300
};

const levels = {
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
        value: `val-1`,
        src: ``,
        artist: `Пелагея`,
        answer: false
      },
      {
        id: `answer-2`,
        value: `val-2`,
        src: ``,
        artist: `Боб Марли`,
        answer: false
      },
      {
        id: `answer-3`,
        value: `val-3`,
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
        value: `val-1`,
        src: ``,
        artist: `Metalica`,
        answer: false
      },
      {
        id: `answer-2`,
        value: `val-2`,
        src: ``,
        artist: `Jingle Punks`,
        answer: true
      },
      {
        id: `answer-3`,
        value: `val-3`,
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
        value: `val-1`,
        src: ``,
        artist: `Дедюля`,
        answer: false
      },
      {
        id: `answer-2`,
        value: `val-2`,
        src: ``,
        artist: `Audionautix`,
        answer: true
      },
      {
        id: `answer-3`,
        value: `val-3`,
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
        value: `answer-1`,
        artist: `Audionautix`,
        name: `Travel Light`,
        src: `https://www.youtube.com/audiolibrary_download?vid=a127d9b7de8a17cf`,
        genre: `Country`,
        answer: true
      },
      {
        value: `answer-2`,
        artist: `Gunnar Olsen`,
        name: `Home Stretch`,
        src: `https://www.youtube.com/audiolibrary_download?vid=bcbe5be936a32fb1`,
        genre: `Electronic`,
        answer: true
      },
      {
        value: `answer-3`,
        artist: `Riot`,
        name: `Level Plane`,
        src: `https://www.youtube.com/audiolibrary_download?vid=dfb828f40096184c`,
        genre: `R&B`,
        answer: true
      },
      {
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
        value: `val-1`,
        src: ``,
        artist: `Riot`,
        answer: true
      },
      {
        id: `answer-2`,
        value: `val-2`,
        src: ``,
        artist: `Пелагея`,
        answer: false
      },
      {
        id: `answer-3`,
        value: `val-3`,
        src: ``,
        artist: `Иван Дорн`,
        answer: false
      }
    ])
  }
};