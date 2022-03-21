const todoForm = document.querySelector(".todoForm");
const todoInput = document.getElementById("todo-title");
const todoList = document.querySelector(".todo-items");

let toDos = [];

function handleSubmit(event) {
  event.preventDefault();
  const newTodo = todoInput.value;
  todoInput.value = "";
  const newObj = {
    text: newTodo,
    id: Date.now(),
  };
  toDos.push(newObj);
  paintTodo(newObj);
  saveTodo();
}

function paintTodo(newTodo) {
  const li = document.createElement("li");
  li.id = newTodo.id;
  li.classList.add("todo-item");
  const span = document.createElement("span");
  span.innerText = newTodo.text;
  span.classList.add("todo-item_text");
  const doneBtn = document.createElement("button");
  doneBtn.innerText = ">";
  doneBtn.classList.add("done-btn");
  const delBtn = document.createElement("button");
  delBtn.addEventListener("click", deleteTodo);
  delBtn.innerText = "Delete";
  delBtn.classList.add("del-btn");

  li.appendChild(doneBtn);
  li.appendChild(span);
  li.appendChild(delBtn);
  todoList.appendChild(li);
}

function deleteTodo(event) {
  const li = event.target.parentElement;
  li.remove();
  toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
  saveTodo();
}

function saveTodo() {
  localStorage.setItem("todos", JSON.stringify(toDos));
}

todoForm.addEventListener("submit", handleSubmit);

const savedTodo = localStorage.getItem("todos");
if (savedTodo !== null) {
  const parsedToDos = JSON.parse(savedTodo);
  toDos = parsedToDos;
  parsedToDos.forEach(paintTodo);
}
