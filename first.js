const input1 = document.querySelector(".input1");
const addbut = document.querySelector("#addbut");
const todolist = document.querySelector(".todolist");

const addtodo = () => {
  const inputtext = input1.value.trim();
  if (inputtext.length <= 0) {
    alert("Enter Your To Do");
    return false;
  }

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
};

// main logic of the code start from the here
//add a update function

const updateTodo = (e) => {
if(e.target.innerHTML==="Remove")
{
 todolist.removeChild(e.target.parentElement);
}

if(e.target.innerHTML==="Done")
{
  
}
};



todolist.addEventListener("click", updateTodo);

addbut.addEventListener("click", addtodo);
