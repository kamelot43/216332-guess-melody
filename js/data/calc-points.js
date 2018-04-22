// Переменные для тестирования
// Начальные значения игры
export const INITIAL_GAME = {
  quickAnswer: 30,
  success: 10,
  point: 1,
  doublePoints: 2
};

export default (arr, lives) => {

  if (arr.length < INITIAL_GAME.success || lives <= 0) {
    return -1;
  }

  return arr.reduce(function (sum, current) {
    if (current.success && current.time < INITIAL_GAME.quickAnswer) {
      return sum + INITIAL_GAME.doublePoints;
    } else if (current.success) {
      return sum + INITIAL_GAME.point;
    } else if (!current.success) {
      return sum - INITIAL_GAME.doublePoints;
    }
    return sum;
  }, 0);
};
