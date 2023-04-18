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
    previousScreen.textContent = previousValue + " " + operator;
    currentScreen.textContent = currentValue;
  }))

  clear.addEventListener("click", () => {
    previousValue = '';
    currentValue = '';
    operator = '';
    previousScreen.textContent = currentValue;
    currentScreen.textContent = currentValue;
  })

  equal.addEventListener("click", () => {
    calculate();
    previousScreen.textContent = '';
    currentScreen.textContent = previousValue;
  })
})

function handleNumber(number) {
  if (currentValue.length <= 5) {
    currentValue += number;
  }
}

function handleOperator(op) {
  operator = op;
  previousValue = currentValue;
  currentValue = '';
}

function calculate() {
  previousValue = Number(previousValue);
  currentValue = Number(currentValue);

  if (operator === "+") {
    previousValue += currentValue;
  } else if (operator === "-") {
    previousValue -= currentValue;
  } else if (operator === "x") {
    previousValue *= currentValue;
  } else {
    previousValue /= currentValue;
  }

  previousValue = roundNumber(previousValue);
  previousValue = previousValue.toString();
  currentValue = previousValue.toString();
}

function roundNumber(number) {
  return Math.round(number * 1000) / 1000;
}