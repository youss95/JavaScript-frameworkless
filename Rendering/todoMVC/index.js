import getTodos from "./getTodos.js";
import view from "./view.js";
const state = {
  todos: getTodos(),
  currentFilter: "All",
};

const main = document.querySelector(".todoapp");
console.log(main);
/*
 * main : target element -> cloneNode로 복제
 * state : 요소를 바꿀 state
 */
window.requestAnimationFrame(() => {
  const newMain = view(main, state);
  console.log(newMain);
  main.replaceWith(newMain);
});
