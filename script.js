
let btn = document.querySelector(".btn");
let input = document.querySelector(".text-box");
let container = document.querySelector(".tasks");
let taskCount = document.querySelector(".pending");
// let complete = document.querySelector(".complete");
// let taskComp = 0;
let taskNum = 0;
btn.addEventListener("click", ()=>{
  taskNum++;

  let addTask = input.value;
  if(addTask !== ""){
    let li = document.createElement("li"); 
    container.appendChild(li);
    li.innerHTML += addTask;
    let del = document.createElement("span");
   
    li.appendChild(del);
    del.addEventListener("click", (e)=>{
      e.target.parentElement.remove();
      taskNum--;
      taskCount.innerText = taskNum;
      // taskComp--;
      // complete.innerText = taskComp;
    });

    let count = 0;
    li.addEventListener("click", (e)=>{
      if(count == 0){
        e.target.style.textDecoration = "line-through";
        e.target.classList.add("checked");
        e.target.style.color = "green";
        count++;
        // taskComp++;
        // complete.innerText = taskComp;
      }else{
        e.target.style.textDecoration = "none";
        e.target.classList.remove("checked");
        // taskComp--;
        // complete.innerText = taskComp;
        count = 0;
      }
    });
  }else{
    alert("write something");
  }

  input.value = "";
  taskCount.innerText = taskNum;
});
  
