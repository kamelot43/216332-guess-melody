export const displayResult = (arr, player) => {
  if (player.notes <= 0) {
    return `У вас закончились все попытки. Ничего, повезёт в следующий раз!`;
  } else if (player.time <= 0) {
    return `Время вышло! Вы не успели отгадать все мелодии`;
  }
  arr.push(player.points);
  const cloneArrays = arr.slice().sort(function (a, b) {
    return b - a;
  });
  // Место игорка в общем зачете
  const index = cloneArrays.indexOf(player.points) + 1;
  // Общее количество игроков
  const players = cloneArrays.length;
  // Место игрока в общем зачете : статистика
  const percent = Math.floor(((players - index) / players) * 100) + `%`;
  return `Вы заняли ${index} место из ${players} игроков. Это лучше, чем у ${percent} игроков`;
};
