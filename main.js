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

//footer click & call filterTodo function
footer.addEventListener("click", filterTodo);
//events
// todoButton is button inside input 
todoButton.addEventListener("click", addTodo);
//delete all
todoList.addEventListener("click", deleteCheck);
setInterval('err.style.opacity="0"',4000);

// filterTodo function
function filterTodo(e) {
    //variable declaration
    const label = document.querySelectorAll(".todo");
    const all =  document.querySelector(".span_all");
    const comple = document.querySelector(".span_completed");
    const incomple = document.querySelector(".span_incomplete");
    //traverse array to find out the status of input check
    label.forEach(ele => {   
        //if input check === true then
        if(ele.childNodes[1].checked===true){
            //element add classList checked
            ele.classList.add("checked");
        }else{
            //else remove checked
            ele.classList.remove("checked");
        }
        //if target span All == All then
    if(e.target.innerText==="All"){
        //all element display block
            ele.style.display="block";
            //and color off all span is #379bfe and complete&incomplete span color black
            all.style.color="#379bfe";
            comple.style.color="black";
            incomple.style.color= "black";
     }
     //if target span Complete == Complete then
     if(e.target.innerText==="Completed"){
        // color off complete span is #379bfe and all&incomplete span color black
        all.style.color="black";
        comple.style.color="#379bfe";
        incomple.style.color= "black";
        //if contain has class list checked
                if(ele.classList.contains("checked")){
                    //all checked clas contain display block
                    ele.style.display="block";
                    
                }else{
                    //else element cant contain checked class display none
                    ele.style.display="none";
                }
        }
 if(e.target.innerText==="Incomplete"){
            // color off incomplete span is #379bfe and all&complete span color black
    comple.style.color="black";
    all.style.color="black";
    incomple.style.color= "#379bfe";
            //if contain has class list checked
        if(ele.classList.contains("checked")){
                           //all checked clas contain display none
            ele.style.display="none";
        }else{
                  //else element cant contain checked class display block
            ele.style.display="block";
        }
 }
});
}

//add function 
function addTodo(event){
    //event.preventDefault prevents page reload
    event.preventDefault();
// create Label element with todo class
    const todoLabel = document.createElement("label");
    todoLabel.classList.add("todo");
//this innerHtml contain svg animation 
    todoLabel.innerHTML = `
    <input class="todo__state" type="checkbox" />
    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 200 25" class="todo__icon">
      <use xlink:href="#todo__line" class="todo__line"></use>
      <use xlink:href="#todo__box" class="todo__box"></use>
      <use xlink:href="#todo__check" class="todo__check"></use>
      <use xlink:href="#todo__circle" class="todo__circle"></use>
    </svg>
 `;
//create  input on list
    const newTodo = document.createElement('input');
    //adding class text & todo__text to input
    newTodo.classList.add('text');
    newTodo.classList.add("todo__text");
    //adding type text
    newTodo.type = 'text';
    //value off this input == value off input top
    newTodo.value = todoInput.value;
    //setting readonly atributes
    newTodo.setAttribute('readonly', 'readonly');
    
//create eddit btn list
const edditbtn = document.createElement("button");
//adding ionicon create
edditbtn.innerHTML='<ion-icon name="create-outline"></ion-icon>';
//adding class eddit
edditbtn.classList.add("eddit-btn");
//eddit button is child off label
todoLabel.appendChild(edditbtn);

//create errspan off list if empty
const listerr = document.createElement("span");
//adding class listerr
listerr.classList.add("listerr");
//adding text
listerr.innerText='Text field cannot be blank';
//errspan is child off label
todoLabel.appendChild(listerr);

//declarate eddit events
edditbtn.addEventListener("click", (e)=>{
    //it == to target(target is the element off you clicked)
    const it =e.target;
    //y=array of it.parentElement(element parent)
    let y = [it.parentElement];

    //iff edit buton has class name eddit btn
if(edditbtn.className=="eddit-btn"){
    //change class name to save btn
    edditbtn.className="save-btn";
    // and adding ionicos checkmark
    edditbtn.innerHTML='<ion-icon name="checkmark-outline"></ion-icon>';
    //and input remove readonly to text
    newTodo.removeAttribute("readonly");
    //focus this input element
    newTodo.focus();

    //if class in [0 position] ==save btn
    if(it.classList[0]==="save-btn"){
        //declarate x variable = it parent elements
        let x = it.parentElement;

        //if first child nextElementSibling(this is input check into node object) ==checkbox
        if(x.firstChild.nextElementSibling.type ==="checkbox" ){
            //checkbox checked == false
            x.firstChild.nextElementSibling.checked = false;
        }
        //if y=array of it.parentElement(element parent) filter is element filtered with class name todo icon
        if(y.filter(element => element.classList[0] === "todo__icon")){
            //y[position 0] . child nodes[position 3] .style.display = none 
            y[0].childNodes[3].style.display="none";
        }
}
}
else {
    //if value off input list is 0
    if(newTodo.value==0){
    //   error opacity 1& anime class add
        listerr.style.opacity="1";
        listerr.classList.add('anime');
        //set timeout function to remove class  and opacity 
        setTimeout(() => listerr.classList.remove('anime'), 100);
        setTimeout(() => listerr.style.opacity="0", 3000);

    }else{
   //else eddit btn is eddit icon ionicons
        edditbtn.innerHTML = '<ion-icon name="create-outline"></ion-icon>';
        //and adding class eddit-btn
        edditbtn.className="eddit-btn";
        //seting atributtes readonly
        newTodo.setAttribute("readonly", "readonly");
        //and child nodes [3] (is label contain svg) = display block
        y[0].childNodes[3].style.display="block";
        //and error opacity 0
        listerr.style.opacity = "0";
    }
}
});

//adding dell btn 
const delbtn = document.createElement("button");
// adding ionicon trash
delbtn.innerHTML='<ion-icon name="trash-outline"></ion-icon>';
//adding class delete
delbtn.classList.add("delete-btn");
//dell btn is child off label 
todoLabel.appendChild(delbtn);

//input off list contain is child off label
 todoLabel.appendChild(newTodo);

    //ADDING TO LOCAL STORAGE 
    //if value off todo input is 0
    if(todoInput.value ==0){
        // err mesage input top opacity 1
        err.style.opacity="1";
        //and add class anime to animate error msg
        err.classList.add('anime');
        //set time out to remove class anime
        setTimeout(() => err.classList.remove('anime'), 100);
      
    }else{
        //else error opacity 0 & footer opacity 1
        err.style.opacity="0";
        footer.style.opacity="1";
        //save local (save value off input)
        saveLocalTodos(todoInput.value);
        //and add class slide2
        todoLabel.classList.add("slide2");
        // label is child off todo list
            todoList.appendChild(todoLabel);
            //and value off input top return empty
            todoInput.value = "";
    }
}
//save local function
function saveLocalTodos(todo) {
    //delcarate todos variable
    let todos;
    //local storage get itemm todos is null
    if(localStorage.getItem("todos") === null) {
        //todos is empty array
        todos = [];
    } else {
        //else todos is  JSON.parse(localStorage.getItem("todos"))
        todos = JSON.parse(localStorage.getItem("todos"));
    }
    //push() The push() method adds one or more elements to the end of an array and returns the new length of the array.
    todos.push(todo);
    //The Set object allows you to store unique values ​​of any type, be it primitive values ​​or object references.
    localStorage.setItem("todos", JSON.stringify(todos));
}

//Delete Function
function deleteCheck(e) {
    //const item = target event
    const item = e.target;
    //if item.classList[position 0] is delete btn
    if(item.classList[0] === "delete-btn") {
        //declarate todo const = item parent element 
        const todo = item.parentElement;
        //and adding class slide
        todo.classList.add("slide");
        //calll function removeLocalTodos(parameter todo)
        removeLocalTodos(todo);
        //event listener transitionet to remove 
        todo.addEventListener("transitionend", ()=> {
            todo.remove();
        });
    }
}
//function remove local
function removeLocalTodos(todo) {
    //declarate todos 
    let todos;
    //if itemm getter todos is null 
    if(localStorage.getItem("todos") === null) {
        //todos is empty array
        todos = [];
    } else {
        //else todos is  JSON.parse(localStorage.getItem("todos"))
        todos = JSON.parse(localStorage.getItem("todos"));
    }
}