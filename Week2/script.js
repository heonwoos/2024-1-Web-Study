body = document.querySelector("body");
selectBtns = body.querySelectorAll(".select");
[calSelect, ticSelect, timSelect, taskSelect, clickSelect] = selectBtns;

let expression = "";
numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
unaryOperators = ["+", "-"];
binaryOperators = ["+", "-", "×", "÷"];
commands = ["=", "C"];
parentheses = 0;

function parseExpression(expression) {
  expression;
}

function writeExpression(e) {
  char = e.srcElement.innerText;
  precedent = expression[expression.length - 1];
  // preprecedent = expression[expression.length - 2];
  if (numbers.includes(char)) {
    expression += char;
  }
  if (
    //(+( 이 출력되는 문제 발생 (단항 연산자인지 이항연산자인지 구분 필요 (만약 precedent의 precedent가 숫자라면 이항연산 아니면 단항연산))
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
  output.innerText = expression;
  parseExpression(expression);
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
