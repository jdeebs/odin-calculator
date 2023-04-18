let operator = '';
let previousValue = '';
let currentValue = '';

document.addEventListener("DOMContentLoaded", () => {
  let clear = document.querySelector(".clear");
  let equal = document.querySelector(".equal");
  let decimal = document.querySelector(".decimal");

  let numbers = document.querySelectorAll(".number");
  let operators = document.querySelectorAll(".operator");

  let previousScreen = document.querySelector(".previous");
  let currentScreen = document.querySelector(".current");

  numbers.forEach((number) => number.addEventListener("click", (e) => {
    handleNumber(e.target.textContent)
    currentScreen.textContent = currentValue;
  }))

  operators.forEach((op) => op.addEventListener("click", (e) => {
    handleOperator(e.target.textContent)
  }))
})

function handleNumber(number) {
  if (currentValue.length <= 5) {
    currentValue += number;
  }
}

function handleOperator(op) {
  console.log(op);
}