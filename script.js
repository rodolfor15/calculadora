
var num1;
var num2;
var result;
var operator;

function setNum(n) {
  if (operator == null) {
    num1 = document.calculator.answer.value += n;
  } else {
    num2 = document.calculator.answer.value += n;
  }
}

function setOperator(o) {
  operator = o;
  document.calculator.answer.value = "";
}

function calculate() {
  switch (operator) {
    case "+":
      result = parseFloat(num1) + parseFloat(num2);
      break;
    case "-":
      result = parseFloat(num1) - parseFloat(num2);
      break;
    case "*":
      result = parseFloat(num1) * parseFloat(num2);
      break;
    case "/":
      result = parseFloat(num1) / parseFloat(num2);
      break;
  }

  document.calculator.answer.value = result;
  num1 = result;
  num2 = null;
  operator = null;
}

function clearScreen() {
  num1 = null;
  num2 = null;
  operator = null;
  document.calculator.answer.value = "";
}
