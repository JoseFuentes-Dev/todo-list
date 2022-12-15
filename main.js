let body = document.querySelector('body');
let btn = document.querySelector('.btns');
btn.onclick=function(){
 body.classList.toggle('night')
}

const todoInput = document.querySelector(".input");
const todoButton = document.querySelector(".btn");
const err = document.querySelector(".err");
const todoList = document.querySelector(".todo-list");
todoButton.addEventListener("click", addTodo);
// document.addEventListener("DOMContentLoaded", getLocalTodos);

function addTodo(event){
    console.log(todoInput.value);
    console.log('click');
    event.preventDefault();
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");
    const newTodo = document.createElement("li");
    newTodo.innerText = todoInput.value; 
    newTodo.classList.add("todo-item");
    todoDiv.appendChild(newTodo);
    //ADDING TO LOCAL STORAGE 
    if(todoInput.value ==0){
        console.log('llene el campo')
        err.style.opacity="1";
        err.classList.add('anime');
        setTimeout(() => err.classList.remove('anime'), 100);
    }else{
        err.style.opacity="0";
        saveLocalTodos(todoInput.value);
        todoList.appendChild(todoDiv);
        todoInput.value = "";
    }
}
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
