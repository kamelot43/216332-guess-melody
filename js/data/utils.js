// Воспроизведение/остановка трека
export const setPauseAndPlay = (evt) => {
  evt.preventDefault();
  let target = evt.target;
  if (target.classList.contains(`player-control--pause`)) {
    target.classList.remove(`player-control--pause`);
    target.previousElementSibling.pause();
  } else {
    target.classList.add(`player-control--pause`);
    target.previousElementSibling.play();
  }

};
export default setPauseAndPlay;
