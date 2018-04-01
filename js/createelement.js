const createElement = (data) => {
  const template = document.getElementById(`templates`);
  template.innerHTML = data;
  return template.content;
};

export default createElement;
