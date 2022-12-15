//dark mode
let body = document.querySelector('body');
let btn = document.querySelector('.btns');
btn.onclick=function(){
 body.classList.toggle('night')
}

//const declarate
const todoInput = document.querySelector(".input");
const todoButton = document.querySelector(".btn");
const err = document.querySelector(".err");
const todoList = document.querySelector(".list");

//events
todoButton.addEventListener("click", addTodo);


setInterval('err.style.opacity="0"',4000);
//add function 
function addTodo(event){
    event.preventDefault();

    const todoLabel = document.createElement("label");
    todoLabel.classList.add("todo");

    todoLabel.innerHTML = `
    <input class="todo__state" type="checkbox" />
    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 200 25" class="todo__icon">
      <use xlink:href="#todo__line" class="todo__line"></use>
      <use xlink:href="#todo__box" class="todo__box"></use>
      <use xlink:href="#todo__check" class="todo__check"></use>
      <use xlink:href="#todo__circle" class="todo__circle"></use>
    </svg>
 `;
 

    const newTodo = document.createElement("div");
    newTodo.innerText = todoInput.value; 
    newTodo.classList.add("todo__text");

    todoLabel.appendChild(newTodo);

    //ADDING TO LOCAL STORAGE 
    if(todoInput.value ==0){
        console.log('llene el campo')
        err.style.opacity="1";
        err.classList.add('anime');
        setTimeout(() => err.classList.remove('anime'), 100);
      
    }else{
        err.style.opacity="0";
        saveLocalTodos(todoInput.value);
        todoList.appendChild(todoLabel);
        todoInput.value = "";
    }
}
//save local function
function saveLocalTodos(todo) {
    let todos;
    if(localStorage.getItem("todos") === null) {
        todos = [];
    } else {
        todos = JSON.parse(localStorage.getItem("todos"));
    }
    todos.push(todo);
    localStorage.setItem("todos", JSON.stringify(todos));
}
