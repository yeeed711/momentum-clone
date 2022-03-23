const todoForm = document.querySelector(".todoForm");
const todoInput = document.getElementById("todo-title");
const todoList = document.querySelector(".todo-items");

let toDos = [];
//서브밋제어
function handleSubmit(event) {
  event.preventDefault();
  const newTodo = todoInput.value;
  todoInput.value = "";
  appendToDos(newTodo);
}

function appendToDos(newTodo) {
  const newObj = {
    text: newTodo,
    id: Date.now(),
    type: false,
  };
  toDos.push(newObj);
  paintTodo(newObj);
  saveTodo();
}

//투두 그려주기
function paintTodo(newTodo) {
  const li = document.createElement("li");
  li.id = newTodo.id;
  li.classList.add("todo-item");

  const span = document.createElement("span");
  span.innerText = newTodo.text;
  span.classList.add("todo-item_text");

  const doneBtn = document.createElement("button");
  doneBtn.addEventListener("click", doneTodo);
  doneBtn.innerText = ">";
  doneBtn.classList.add("done-btn");

  const delBtn = document.createElement("button");
  delBtn.addEventListener("click", deleteTodo);
  delBtn.innerText = "Delete";
  delBtn.classList.add("del-btn");

  if (newTodo.type) {
    span.classList.add("done-list");
  }

  li.appendChild(doneBtn);
  li.appendChild(span);
  li.appendChild(delBtn);
  todoList.appendChild(li);
}

// 버튼누르면 지우기
function deleteTodo(event) {
  const li = event.target.parentElement;
  li.remove();
  toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
  saveTodo();
}

// 배열로 로컬스토리지에 저장하기
function saveTodo() {
  localStorage.setItem("todos", JSON.stringify(toDos));
}

//완료시 이동
function doneTodo(event) {
  const li = event.target.parentElement;
  li.classList.add("done-list");
  toDos = toDos.map((toDo) =>
    toDo.id === parseInt(li.id) ? { ...toDo, type: !toDo.type } : toDo
  );

  saveTodo(toDos);
}

todoForm.addEventListener("submit", handleSubmit);

const savedTodo = localStorage.getItem("todos");
if (savedTodo !== null) {
  const parsedToDos = JSON.parse(savedTodo);
  toDos = parsedToDos;
  parsedToDos.forEach(paintTodo);
}
