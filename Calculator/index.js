const currentOutput = document.querySelector(".current-output");
const previousOutput = document.querySelector(".previous-output");
const operators = Array.from(document.querySelectorAll(".operator"));
const numbers = Array.from(document.querySelectorAll(".number"));
const equal = document.querySelector(".equal");

let haveDot = false;
let lastOperation = ""; //operator clicked
let previous = "";
let current = "";
let result = null;

numbers.forEach((number) => {
  number.addEventListener("click", (e) => {
    if (e.target.innerText === "." && haveDot === false) {
      haveDot = true;
    } else if (e.target.innerText === "." && haveDot === true) {
      return;
    }
    current += e.target.innerText;
    currentOutput.innerText = current;
  });
});

operators.map((operator) => {
  operator.addEventListener("click", (e) => {
    if (e.target.innerText === "C") {
      currentOutput.innerText = "";
      previousOutput.innerText = "";
      previous = "";
      current = "";
    } else if (e.target.innerText === "⌦") {
      currentOutput.innerText = currentOutput.innerText.slice(0, -1);
    }
    //normal operators
    else {
      if (!current) {
        return;
      }

      haveDot = false;
      const operationName = e.target.innerText;
      if (current && previous && lastOperation) {
        mathOperation();
      } else {
        result = parseFloat(current);
      }
      clearVar(operationName);
      lastOperation = operationName;
    }
  });
});

const clearVar = (name = "") => {
  previous += current + " " + name + " ";
  previousOutput.innerText = previous;
  currentOutput.innerText = "";
  current = "";
};
const mathOperation = () => {
  if (lastOperation === "x") {
    result = parseFloat(result) * parseFloat(current);
  } else if (lastOperation === "+") {
    result = parseFloat(result) + parseFloat(current);
  } else if (lastOperation === "-") {
    result = parseFloat(result) - parseFloat(current);
  } else if (lastOperation === "/") {
    result = parseFloat(result) / parseFloat(current);
  } else if (lastOperation === "%") {
    result = parseFloat(result) % parseFloat(current);
  }
};

equal.addEventListener("click", (e) => {
  if (!current || !result) {
    return;
  }
  haveDot = false;
  mathOperation();
  clearVar();
  currentOutput.innerText = result;
  current = result;
  previous = "";
});

// to when a someone press button
// to perform calci with keyboard also
window.addEventListener("keydown", (e) => {
  if (
    e.key === "0" ||
    e.key === "1" ||
    e.key === "2" ||
    e.key === "3" ||
    e.key === "4" ||
    e.key === "5" ||
    e.key === "6" ||
    e.key === "7" ||
    e.key === "8" ||
    e.key === "9" ||
    e.key === "."
  ) {
    clickButton(e.key);
    //   console.log(e.key)
  } else if (e.key === "+" || e.key === "-" || e.key === "/") {
    clickOperation(e.key);
  } else if (e.key === "*") {
    clickOperation("x");
  } else if (e.key === "Backspace" ) {
    clickOperation("⌦");
  }else if (e.key === "Delete") {
    clickOperation("C");
  } 
  else if (e.key == "Enter" || e.key === "=") {
    clickEqual();
  }
});

function clickButton(key) {
  numbers.forEach((button) => {
    // console.log(button);
    if (button.innerText === key) {
      button.click();
    }
  });
}
function clickOperation(key) {
  operators.forEach((operation) => {
    if (operation.innerText === key) {
      operation.click();
    }
  });
}

function clickEqual() {
  equal.click();
}
