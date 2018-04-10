import {assert} from 'chai';
import {calcPoints, INITIAL_GAME} from './calc-points';

// Переменные для тестирования
// Начальные значения игры
export const slowCorrectAnswers = [
  {success: true, time: 35},
  {success: true, time: 35},
  {success: true, time: 35},
  {success: true, time: 35},
  {success: true, time: 35},
  {success: true, time: 35},
  {success: true, time: 35},
  {success: true, time: 35},
  {success: true, time: 35},
  {success: true, time: 35}
];

export const quickCorrectAnswers = [
  {success: true, time: 25},
  {success: true, time: 25},
  {success: true, time: 25},
  {success: true, time: 25},
  {success: true, time: 25},
  {success: true, time: 25},
  {success: true, time: 25},
  {success: true, time: 25},
  {success: true, time: 25},
  {success: true, time: 25}
];

export const incorrectAnswers = [
  {success: true, time: 25},
  {success: false, time: 25},
  {success: false, time: 25},
  {success: false, time: 25},
  {success: false, time: 25},
  {success: true, time: 25},
  {success: true, time: 25},
  {success: true, time: 25},
  {success: true, time: 25},
  {success: true, time: 25}
];

export const emptyArray = [
  {success: true, time: 25},
  {success: false, time: 25},
  {success: false, time: 25},
  {success: false, time: 25}
];

describe(`calculate game points`, () => {
  it(`should return right points for all correct answers`, () => {
    assert.equal(calcPoints(slowCorrectAnswers, INITIAL_GAME.life), 10);
  });
  it(`should return right points for all correct and quick answers`, () => {
    assert.equal(calcPoints(quickCorrectAnswers, INITIAL_GAME.life), 20);
  });
  it(`should return -1 at not finish game`, () => {
    assert.equal(calcPoints(incorrectAnswers, INITIAL_GAME.life), -1);
  });
});
