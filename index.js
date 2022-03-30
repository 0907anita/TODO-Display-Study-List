const question = "TODO Study List";
const options = ["HTML", "CSS", "Javascript", "DSA", "ReactJS", "NodeJS", "MongoDB", "Angular", "NextJS", "NestJS","TypeScript","C++", "C", "Wordpress"];

const listContainer = document.getElementById("listContainer");


function createTodos(optionsArray) {
  const optionsFragment = document.createDocumentFragment();

  optionsArray.forEach(function (optionText, index) {
    optionsFragment.appendChild(createTodo(optionText, index));
  });

  return optionsFragment;
}

function createTodo(text, index) {
  const todo = document.createElement("div");
  const description = document.createElement("span");
  const button = document.createElement("button");

  description.textContent = text;
  button.textContent = "Done";
  button.classList.add("dont-button");
  button.dataset.index = index;

  todo.appendChild(description);
  todo.appendChild(button);
  return todo;
}

function deleteTodo(button) {
  const element = button.parentNode;
  element.classList.add("hide-smooth");

  // Remove after delay for animation to finish
  setTimeout(function () {
    element.remove();
  }, 500);
}

function buttonClickLinstener(event) {
  const target = event.target;

  if (target.classList.contains("dont-button")) {
    deleteTodo(target);
  }
}

// Function calls
listContainer.appendChild(createTodos(options));
listContainer.addEventListener("click", buttonClickLinstener);