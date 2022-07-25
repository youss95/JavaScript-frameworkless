import todosView from "./todos.js";
import counterView from "./counter.js";
import filtersView from "./filters.js";

//template: 보이지 않는 태그
//createElement : 읽고 유지하기 힘듬

let template;

const createAppElement = () => {
  if (!template) {
    template = document.getElementById("todo-app");
  }
  return template.content.firstElementChild.cloneNode(true);
};

export default (targetElement) => {
  //virtual dom
  const newApp = targetElement.cloneNode(true);

  newApp.innerHTML = "";
  newApp.appendChild(createAppElement());
  return newApp;
};
