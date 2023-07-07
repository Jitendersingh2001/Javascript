"use strict";
/* VARIABLE DECLARTION*/
let addbtn = document.getElementById("push");
let taskcontainer = document.getElementById("tasks");
let inputtext = document.querySelector('input[type="text"]');
let i = 0;
/*ADD TASK */
addbtn.addEventListener("click", addTask);
inputtext.addEventListener("keydown", (e) => {
  if (e.keyCode === 13) {
    addTask();
  }
});
function addTask() {
  if (inputtext.value.length == 0) alert("PLEASE ENTER THE TASK");
  else {
    if (i === 10) alert("PLEASE COMPLETE PREVIOUS TASK !!");
    else {
      let task = ` <div class="task">
      <span id="taskname">${inputtext.value}</span>
      <div class="bottons">
        <button id="DONE">
          <i class="fa fa-check"></i>
        </button>
        <button id="delete">
          <i class="far fa-trash-alt"></i>
        </button>
      </div>
    </div>`;
      taskcontainer.insertAdjacentHTML("afterbegin", task);
      inputtext.value = "";
      i++;
      inputtext.placeholder = "ADD TASK";
      let deleteBtns = document.querySelectorAll("#delete");
      let doneBtns = document.querySelectorAll("#DONE");

      deleteBtns.forEach((btn) => {
        btn.addEventListener("click", deleteTask);
      });
      doneBtns.forEach((btn) => {
        btn.addEventListener("click", doneTask);
      });
    }
  }
}
/* DELETE TASK */
function deleteTask() {
  let task = this.closest(".task");
  task.remove();
  i--;
}
/* DONE TASK */
function doneTask() {
  let task = this.closest(".task");
  let taskname = task.querySelector("#taskname");
  taskname.style.color = "#808080";
  taskname.style.textDecoration = "line-through";
  taskname.textContent += " (DONE) ";
  i--;
}
