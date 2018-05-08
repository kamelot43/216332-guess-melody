const createElement = (data) => {
  const container = document.createElement(`div`);
  container.innerHTML = data;
  return container;
};
export default createElement;
