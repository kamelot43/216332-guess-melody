const createElement = (data) => {
  const container = document.createElement(`div`);
  container.innerHTML = data;
  container.classList.add(`main`);
  return container;
};
export default createElement;
