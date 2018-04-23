const sectionMain = document.querySelector(`.main`);
const renderScreen = (data) => {
  sectionMain.innerHTML = ``;
  sectionMain.appendChild(data);
};

export default renderScreen;
