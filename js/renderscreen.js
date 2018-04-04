const sectionMain = document.querySelector(`.main`);
const renderScreen = (data) => {
  const node = data.cloneNode(true);
  sectionMain.innerHTML = ``;
  sectionMain.appendChild(node);
};

export default renderScreen;
