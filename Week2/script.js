const body = document.querySelector("body");
const selectBtns = body.querySelectorAll(".select");
const [calSelect, ticSelect, timSelect, taskSelect, clickSelect] = selectBtns;

let expression = "";
const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
const unaryOperators = ["+", "-"];
const binaryOperators = ["+", "-", "×", "÷"];
let parentheses = 0;
let printed = "";

function parseExpression(expression) {
  if (expression[0] == "(" && expression[expression.length - 1] == ")")
    expression = expression.slice(1, -1);

  let isLiteral = true;
  [...expression].forEach((char) => {
    if (!numbers.includes(char)) {
      isLiteral = false;
    }
  });

  if (isLiteral) {
    return parseInt(expression);
  }
  for (let i = 0; i < expression.length; i++) {
    const char = expression[i];
    if (char == "(") parentheses++;
    if (char == ")") parentheses--;
    if (parentheses == 0 && binaryOperators.includes(char)) {
      const indexOfOperation = i;
      const operand1 = parseExpression(expression.slice(0, indexOfOperation));
      const operand2 = parseExpression(expression.slice(indexOfOperation + 1));
      console.log(operand1, char, operand2, expression);
      switch (char) {
        case "+":
          return operand1 + operand2;
        case "-":
          return operand1 - operand2;
        case "×":
          return operand1 * operand2;
        case "÷":
          return operand1 / operand2;
        default:
          console.error("unexpected escape");
      }
    }
  }
}

function writeExpression(e) {
  const char = e.srcElement.innerText;
  const precedent = expression[expression.length - 1];
  if (numbers.includes(char)) {
    expression += char;
  }
  if (
    binaryOperators.includes(char) &&
    (numbers.includes(precedent) || precedent == ")")
  ) {
    expression += char;
  }
  if (unaryOperators.includes(char) && (precedent == "(" || expression == "")) {
    expression += char;
  }
  if (char == "(") {
    parentheses++;
    expression += char;
  }
  if (
    char == ")" &&
    parentheses > 0 &&
    (numbers.includes(precedent) || precedent == ")")
  ) {
    parentheses--;
    expression += char;
  }
  printed = expression;
  if (char == "C") {
    parentheses = 0;
    expression = "";
  }
  if (char == "=" && precedent != "(") {
    while (parentheses > 0) {
      expression += ")";
      parentheses--;
    }
    parentheses = 0;
    printed += "\n" + parseExpression(expression) + "\n";
    expression = "";
  }
  output.innerText = printed;
}

function showCalculator() {
  calculator = body.querySelector("#calculator");
  numpad = calculator.querySelector("#numpad");
  output = calculator.querySelector("#output");
  calBtns = numpad.querySelectorAll(".btn");

  calBtns.forEach((btn) => {
    btn.addEventListener("click", writeExpression);
  });
}

function showWIP(e) {
  e.srcElement.innerText = "W.I.P.";
}

function main() {
  showCalculator();
  // calSelect.addEventListener("click", showCalculator);
  ticSelect.addEventListener("click", showWIP);
  timSelect.addEventListener("click", showWIP);
  taskSelect.addEventListener("click", showWIP);
  clickSelect.addEventListener("click", () => {
    clickSelect.innerText = "Sorry";
  });
}

main();
