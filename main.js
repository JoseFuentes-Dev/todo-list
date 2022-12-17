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
const footer = document.querySelector(".todo_footer");

footer.addEventListener("click", filterTodo);

function filterTodo(e) {
    const label = document.querySelectorAll(".todo");
    const all =  document.querySelector(".span_all");
    const comple = document.querySelector(".span_completed");
    const incomple = document.querySelector(".span_incomplete");
    label.forEach(ele => {   
        if(ele.childNodes[1].checked===true){
            ele.classList.add("checked");
        }else{
            ele.classList.remove("checked");
        }
    if(e.target.innerText==="All"){
            ele.style.display="block";
            all.style.color="#379bfe";
            comple.style.color="black";
            incomple.style.color= "black";
     }
     if(e.target.innerText==="Completed"){
        all.style.color="black";
        comple.style.color="#379bfe";
        incomple.style.color= "black";
                if(ele.classList.contains("checked")){
                    ele.style.display="block";
                    
                }else{
                    ele.style.display="none";
                }
        }
 if(e.target.innerText==="Incomplete"){
    comple.style.color="black";
    all.style.color="black";
    incomple.style.color= "#379bfe";
        if(ele.classList.contains("checked")){
            ele.style.display="none";
        }else{
            ele.style.display="block";
        }
 }
});
}
//events
todoButton.addEventListener("click", addTodo);
todoList.addEventListener("click", deleteCheck);

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



    const newTodo = document.createElement('input');
    newTodo.classList.add('text');
    newTodo.classList.add("todo__text");
    newTodo.type = 'text';
    newTodo.value = todoInput.value;
    newTodo.setAttribute('readonly', 'readonly');
    

const edditbtn = document.createElement("button");
edditbtn.innerHTML='<ion-icon name="create-outline"></ion-icon>';
edditbtn.classList.add("eddit-btn");
todoLabel.appendChild(edditbtn);

const listerr = document.createElement("span");
listerr.classList.add("listerr");
listerr.innerText='Text field cannot be blank';
todoLabel.appendChild(listerr);


edditbtn.addEventListener("click", (e)=>{
    const it =e.target;
    let y = [it.parentElement];

if(edditbtn.className=="eddit-btn"){
    edditbtn.className="save-btn";
    edditbtn.innerHTML='<ion-icon name="checkmark-outline"></ion-icon>';
    newTodo.removeAttribute("readonly");
    newTodo.focus();

   

    if(it.classList[0]==="save-btn"){
        let x = it.parentElement;
        if(x.firstChild.nextElementSibling.type ==="checkbox" ){
            x.firstChild.nextElementSibling.checked = false;
        }
        if(y.filter(element => element.classList[0] === "todo__icon")){
            y[0].childNodes[3].style.display="none";
            console.log("entro");
        }
        
}
}
else {
    if(newTodo.value==0){
    
        listerr.style.opacity="1";
        listerr.classList.add('anime');
        setTimeout(() => listerr.classList.remove('anime'), 100);
        setTimeout(() => listerr.style.opacity="0", 3000);
    }else{

        edditbtn.innerHTML = '<ion-icon name="create-outline"></ion-icon>';
        edditbtn.className="eddit-btn";
        newTodo.setAttribute("readonly", "readonly");
        y[0].childNodes[3].style.display="block";
        listerr.style.opacity = "0";

    }
}
});

const delbtn = document.createElement("button");
delbtn.innerHTML='<ion-icon name="trash-outline"></ion-icon>';
delbtn.classList.add("delete-btn");
todoLabel.appendChild(delbtn);


    todoLabel.appendChild(newTodo);

    //ADDING TO LOCAL STORAGE 
    if(todoInput.value ==0){
        err.style.opacity="1";
        err.classList.add('anime');
        setTimeout(() => err.classList.remove('anime'), 100);
      
    }else{
        err.style.opacity="0";
        footer.style.opacity="1";
        saveLocalTodos(todoInput.value);
        todoLabel.classList.add("slide2");
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


//Delete Function
function deleteCheck(e) {
    const item = e.target;
    if(item.classList[0] === "delete-btn") {
        const todo = item.parentElement;
        todo.classList.add("slide");
        removeLocalTodos(todo);
        todo.addEventListener("transitionend", ()=> {
            todo.remove();
        });
    }
}

function removeLocalTodos(todo) {
    let todos;
    if(localStorage.getItem("todos") === null) {
        todos = [];
    } else {
        todos = JSON.parse(localStorage.getItem("todos"));
    }
}