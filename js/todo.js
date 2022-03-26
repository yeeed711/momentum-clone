const todoForm = document.querySelector(".todoForm");
const todoInput = document.getElementById("todo-title");
const todoList = document.querySelector(".todo-items");

let toDos = [];

function handleSubmit(event) {
  event.preventDefault();
  const newTodo = todoInput.value;
  todoInput.value = "";
  appendTodo(newTodo);
}

function appendTodo(newTodo) {
  const newObj = {
    id: Date.now(),
    text: newTodo,
    type: false,
  };
  toDos.push(newObj);
  paintTodo(newObj);
  saveTodo();
}

function paintTodo(newObj) {
  const li = document.createElement("li");
  li.classList.add("todo-item");
  li.id = newObj.id;
  const doneBtn = document.createElement("button");
  doneBtn.addEventListener("click", doneTodo);
  doneBtn.innerText = ">";
  doneBtn.classList.add("done-btn");
  const span = document.createElement("span");
  span.classList.add("todo-item_text");
  span.innerText = newObj.text;
  const editBtn = document.createElement("button");
  editBtn.addEventListener("click", todoEdit);
  editBtn.classList.add("edit-btn");
  editBtn.innerText = "↺";
  const delBtn = document.createElement("button");
  delBtn.addEventListener("click", deleteTodo);
  delBtn.innerText = "Delete";
  delBtn.classList.add("del-btn");

  if (newObj.type) {
    span.classList.add("done-list");
  }

  li.appendChild(doneBtn);
  li.appendChild(span);
  li.appendChild(editBtn);
  li.appendChild(delBtn);
  todoList.appendChild(li);
}

function doneTodo(event) {
  const li = event.target.parentElement;

  if (li.childNodes[1].classList.length > 1) {
    li.childNodes[1].classList.remove("done-list");
  } else {
    li.childNodes[1].classList.add("done-list");
  }

  toDos = toDos.map((todo) =>
    todo.id === parseInt(li.id) ? { ...todo, type: !todo.type } : todo
  );

  saveTodo();
}

function deleteTodo(event) {
  const li = event.target.parentElement;
  li.remove();
  toDos = toDos.filter((todo) => todo.id !== parseInt(li.id));
  saveTodo();
}

function todoEdit(event) {
  const li = event.target.parentElement;
  const input = document.createElement("input");
  input.classList.add("edit-text");
  li.childNodes[1].appendChild(input);
  input.value = li.childNodes[1].innerText;
  input.addEventListener("change", () => {
    updateTodo(input.value);
    li.childNodes[1].removeChild(input);
    li.childNodes[1].innerText = input.value;
  });

  function updateTodo(editText) {
    toDos = toDos.map((todo) =>
      todo.id === parseInt(li.id) ? { ...todo, text: editText } : todo
    );
    saveTodo();
  }
}

function saveTodo() {
  localStorage.setItem("todos", JSON.stringify(toDos));
}

const savedToDos = localStorage.getItem("todos");
if (savedToDos !== null) {
  const parsedToDos = JSON.parse(savedToDos);
  toDos = parsedToDos;
  parsedToDos.forEach(paintTodo);
}

todoForm.addEventListener("submit", handleSubmit);
