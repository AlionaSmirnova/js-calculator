var operations = {
  "+": function (operand1, operand2) {
    return operand1 + operand2;
  },
  "-": function (operand1, operand2) {
    return operand1 - operand2;
  },
  "*": function (operand1, operand2) {
    return operand1 * operand2;
  },
  "/": function (operand1, operand2) {
    return operand1 / operand2;
  },
};
function accumulate(list, operator) {
  return list.reduce(operations[operator]);
}

function func() {
  const opResult = [];
  const num1 = document.getElementById("num1").value;
  let str = String(num1);
  const inputStr = str.split(/(\d+)/g).filter(Boolean);
  for (let i = 0; i <= inputStr.length; i++) {
    const isMultiply = inputStr.indexOf("*");
    const isDiv = inputStr.indexOf("/");
    const isPlus = inputStr.indexOf("+");
    const isMin = inputStr.indexOf("-");

    if (isMultiply >= 0) {
      calculate(isMultiply, "*", inputStr, opResult);
      document.getElementById("result").innerHTML = inputStr;
    } else if (isDiv >= 0) {
      calculate(isDiv, "/", inputStr, opResult);
      document.getElementById("result").innerHTML = inputStr;
    } else if (isPlus >= 0) {
      calculate(isPlus, "+", inputStr, opResult);
      document.getElementById("result").innerHTML = inputStr;
    } else if (isMin >= 0) {
      calculate(isMin, "-", inputStr, opResult);
      document.getElementById("result").innerHTML = inputStr;
    }
  }
}
document.getElementById("reset").onclick = function () {
  document.getElementById("num1").value = "";
  document.getElementById("result").innerHTML = " ";
};
function calculate(index, symbol, inputArr, result) {
  const first = +inputArr[index - 1];
  const third = +inputArr[index + 1];
  result = operations[symbol](first, third);
  inputArr.splice(index - 1, 3, result.toFixed(2));
}
