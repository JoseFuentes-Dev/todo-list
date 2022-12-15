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
    const todoLabel = document.createElement("label");
    const inpt = document.createElement("input");
    inpt.setAttribute("type","checkbox");
    todoLabel.classList.add("todo");
    inpt.classList.add("todo__state");
    const svg = document.createElement("svg");
    svg.classList.add("todo__icon");
    svg.setAttribute("viewBox","0 0 200 25");
    svg.setAttribute("xmlns","http://www.w3.org/2000/svg");
    svg.setAttribute("xlmns:xlink","http://www.w3.org/1999/xlink");
    const newTodo = document.createElement("div");
    newTodo.innerText = todoInput.value; 
    newTodo.classList.add("todo__text");
    todoLabel.appendChild(inpt);
    todoLabel.appendChild(newTodo);
    todoLabel.appendChild(svg);
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
