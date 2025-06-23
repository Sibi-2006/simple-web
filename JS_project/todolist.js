let input = document.getElementById("input");
let add = document.getElementById("add");
let todolist = document.getElementById("todolist");
let todos =[];
let clearall=document.getElementById("clearall")
window.onload=()=>{
    todos=JSON.parse(localStorage.getItem('todo'))||[];
    todos.forEach(todo => {
       ToDoList(todo) 
    });
}
add.addEventListener("click" , ()=>{
    todos.push(input.value);
    localStorage.setItem('todo',JSON.stringify(todos))
    ToDoList(input.value);
    input.value=' ';
});
function ToDoList(todo){
    let para = document.createElement('p');
    para.innerText=todo;
    todolist.appendChild(para)
    
    para.addEventListener("click",()=>{
        para.style.textDecoration="line-through";
        remove(todo);
    });
    para.addEventListener("dblclick",()=>{
        todolist.removeChild(para)
        remove(todo);
    });
}
function remove(todo){
    let index=todos.indexOf(todo);
    if (index > -1) {
        todos.splice(index, 1);
        
    }
    localStorage.setItem('todo', JSON.stringify(todos));
}
clearall.addEventListener("click",()=>{
    if (confirm("Are you sure you want to clear all tasks?")) {
    localStorage.removeItem("todo");
    todolist.innerHTML = "";
    todos = [];
}

})