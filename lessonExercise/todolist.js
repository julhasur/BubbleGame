const todolist=['wash car','groceries'];
 rendertodoList();
  function rendertodoList(){
let list=''
for(i=0;i<todolist.length;i++){
const todo=todolist[i];
const html=`<p>${todo}</p>`;
list+=html; 
}
console.log(list)
document.querySelector('.js-todo-list').innerHTML=list;
  }

function addTodo(){
    const inputElement=document.querySelector('.js-name-input');
    const name=inputElement.value;
    todolist.push(name);
    console.log(todolist);

    inputElement.value="";
    rendertodoList();
}
  