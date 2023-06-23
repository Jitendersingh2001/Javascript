"strict mode";
/*variable declartion*/
const number = document.querySelectorAll(".data-number");
const equal = document.getElementById("data-equals");
let display = document.getElementById("output");
/* number display */
for (let buttons of number) {
  //clear button function
  if (buttons.innerHTML === "AC") {
    buttons.addEventListener("click", () => {
      display.value = " ";
    });
  }
  // del button functon
  else if (buttons.innerHTML === "DEL") {
    buttons.addEventListener("click", () => {
      display.value = display.value.slice(0, -1);
    });
  }
  // number printing function
  else {
    buttons.addEventListener("click", () => {
      display.value += buttons.innerHTML;
    });
  }
}
equal.addEventListener("click", () => {
  let result;
  result = eval(display.value);
  display.value = result;
});
