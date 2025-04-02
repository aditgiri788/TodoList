const input1 = document.querySelector(".input1");
const addbut = document.querySelector("#addbut");
const todolist = document.querySelector(".todolist");

const addtodo = () => {
  const inputtext = input1.value.trim();
  if (inputtext.length <= 0) {
    alert("Enter Your To Do");
    return false;
  } else {
    //  creating js element using js dom manipulation
    const li = document.createElement("li");
    const p = document.createElement("p");
    p.innerHTML = inputtext;
    li.appendChild(p); //created list item
    //add the li to ul

    //creating a edit button
    const donebtn = document.createElement("button");
    donebtn.innerText = "Done";
    donebtn.classList.add("btn", "donebtn");
    li.appendChild(donebtn);

    //creating a delete button
    const dellbtn = document.createElement("button");
    dellbtn.innerText = "Remove";
    dellbtn.classList.add("btn", "dellbtn");
    li.appendChild(dellbtn);
    todolist.appendChild(li);
    input1.value = "";
    saveLocals(inputtext);
  }
};

// main logic of the code start from the here
//add a update function
const saveLocals = (todo) => {
  // Get the todos from localStorage or initialize as an empty array
  let todos = JSON.parse(localStorage.getItem("todos")) || [];

  // Push the new todo to the array
  todos.push(todo);

  // Save the updated todos array back to localStorage
  localStorage.setItem("todos", JSON.stringify(todos));
};

const updateTodo = (e) => {
  if (e.target.innerHTML === "Remove") {
    todolist.removeChild(e.target.parentElement);
    delLocal(e.target.parentElement);
  }

  if (e.target.innerHTML === "Done") {
    const todoText = e.target.parentElement.querySelector("p");

    // Change the text color to green
    todoText.style.color = "green";
    todoText.style.textDecoration = "line-through";
  }
};

//accessing local todos
const getLocal = () => {
  let todos=[];
  if (localStorage.getItem("todos") === null) {
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem("todos"));
    todos.forEach((element) => {
      const li = document.createElement("li");
      const p = document.createElement("p");
      p.innerHTML = element;
      li.appendChild(p); //created list item
      //add the li to ul

      //creating a edit button
      const donebtn = document.createElement("button");
      donebtn.innerText = "Done";
      donebtn.classList.add("btn", "donebtn");
      li.appendChild(donebtn);

      //creating a delete button
      const dellbtn = document.createElement("button");
      dellbtn.innerText = "Remove";
      dellbtn.classList.add("btn", "dellbtn");
      li.appendChild(dellbtn);
      todolist.appendChild(li);
    });
  }
};
//function to delete local todos
const delLocal = (todo) => {
  //on click li refrencing
  let todos;
  if (localStorage.getItem("todos") === null) {
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem("todos")); //here we are accessing all the local storage value
    let todoText = todo.children[0].innerHTML;
    let todoInd = todos.indexOf(todoText); //this function is finding the value in an todo array

    //array function slice and splice
    //splice the removing the array
    todos.splice(todoInd, 1);
    localStorage.setItem("todos", JSON.stringify(todos));
  }
};
document.addEventListener("DOMContentLoaded", getLocal);//this function run only one time after all content loaded
todolist.addEventListener("click", updateTodo);
//this line of code represent that any where click the function will call

addbut.addEventListener("click", addtodo);


