"use strict";
/* VARIABLE DECLARTION*/
let addbtn = document.getElementById("push");
let taskcontainer = document.getElementById("tasks");
let inputtext = document.querySelector('input[type="text"]');
/*ADD TASK */
addbtn.addEventListener("click", addTask);
inputtext.addEventListener("keydown", (e) => {
  if (e.keyCode === 13) {
    addTask();
  }
});
function addTask() {
  if (inputtext.value.trim() !== "") {
    let task = ` <div class="task">
    <span id="taskname">${inputtext.value}</span>
    <div class="bottons">
      <button class="DONE">
        <i class="fa fa-check"></i>
      </button>
      <button class="delete">
        <i class="far fa-trash-alt"></i>
      </button>
    </div>
  </div>`;
    taskcontainer.insertAdjacentHTML("afterbegin", task);
    inputtext.value = "";
  } else {
    alert("PLEASE ENTER TASK");
  }
  inputtext.placeholder = "ADD TASK";
}
/*DELETE TASK*/
