import todosView from "./todos.js";
import counterView from "./counter.js";
import filtersView from "./filters.js";

//template: 보이지 않는 태그
//createElement : 읽고 유지하기 힘듬

let template;

const getTemplate = () => {
  if (!template) {
    template = document.getElementById("todo-app");
  }
  return template.content.firstElementChild.cloneNode(true);
};

const addEvents = (targetElement, events) => {
  targetElement.querySelector(".new-todo").addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
      events.addItem(e.target.value);
      e.target.value = "";
    }
  });
};

export default (targetElement, state, events) => {
  //virtual dom
  const newApp = targetElement.cloneNode(true);

  newApp.innerHTML = "";
  newApp.appendChild(getTemplate());
  addEvents(newApp, events);
  return newApp;
};
