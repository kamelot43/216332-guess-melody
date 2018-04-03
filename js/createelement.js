const createElement = (data) => {
  const template = document.createElement(`template`);
  template.innerHTML = data;
  return template.content;
};
export default createElement;
