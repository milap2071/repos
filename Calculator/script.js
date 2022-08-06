let buttons = document.querySelectorAll("button");
let screen = document.getElementById("displayCurrent");
let displayHistory = document.getElementById("displayHistory");
let calFrame = document.getElementById("calFrame");

//Global Variables
let firstSet;
let secondSet;
let firstSetCount = 0;
let calcType = "";
let resultOnScreen = false;
const arrCalcType = ["+", "-", "*", "/", "%", "=", "."];



//Add Event Listener
for (let button of buttons) {
  button.addEventListener("click", (e) => {
    if (!errorCheck(e.target)) {
      operate(e.target);
    }
  });
}

window.addEventListener("keydown", keyOperator);

function keyOperator(e) {
  let key = document.querySelector(`.btn[data-key="${e.key}"]`);
  if (key != null) {
    key.click();
  }

  console.log("Key Clicked: " + key);

}

function operate(element) {
  if (firstSet != undefined && firstSetCount < 1) {

    showHistory(true);
    screen.textContent = "";
    firstSetCount++;
    console.log("FirstSet Found" + element.textContent);

  }

  if (element.textContent != /\d/) {
    switch (element.textContent) {
      case "C":
        clear();
        resultOnScreen = false;
        return;
        break;

      case "AC":
        clearAll();
        return;

      case ".":
        decimalCount = 1;
        break;

      case "+":
        if (calcType != "") {
          calculate();
        }
        firstSet = parseFloat(screen.textContent);
        firstSetCount = 0;
        setCalcType(element.textContent);
        console.log("First: " + firstSet);
        resultOnScreen = false;
        break;

      case "-":
        if (calcType != "") {
          calculate();
        }
        firstSet = parseFloat(screen.textContent);
        firstSetCount = 0;
        setCalcType(element.textContent);
        console.log("First: " + firstSet);
        resultOnScreen = false;
        break;

      case "*":
        if (calcType != "") {
          calculate();
        }
        firstSet = parseFloat(screen.textContent);
        firstSetCount = 0;
        setCalcType(element.textContent);
        console.log("First: " + firstSet);
        resultOnScreen = false;
        break;

      case "/":
        if (calcType != "") {
          calculate();
        }
        firstSet = parseFloat(screen.textContent);
        firstSetCount = 0;
        setCalcType(element.textContent);
        console.log("First: " + firstSet);
        resultOnScreen = false;
        break;

      case "%":
        if (calcType != "") {
          calculate();
        }
        firstSet = parseFloat(screen.textContent);
        firstSetCount = 0;
        setCalcType(element.textContent);
        console.log("First: " + firstSet);
        resultOnScreen = false;
        break;

      case "=":
        calculate();

        return;
    }
  }

  if (!resultOnScreen) {
    let decimalIndex = screen.textContent.indexOf(".");

    if (decimalIndex != -1) {
      console.log("HndleDecimal");
      handleDecimal(element.textContent);
    } else {
      screen.textContent += element.textContent;
    }
  } else {
    clearAll();
    showHistory(true);
    console.log("Else");
    screen.textContent += element.textContent;
    resultOnScreen = false;
  }
}

function calculate() {
  secondSet = parseFloat(screen.textContent);
  showHistory(false);
  console.log("Secon: " + secondSet);
  calcType == "+" ?
    add(firstSet, secondSet) :
    calcType == "-" ?
      subtract(firstSet, secondSet) :
      calcType == "*" ?
        multiply(firstSet, secondSet) :
        calcType == "/" ?
          divide(firstSet, secondSet) :
          calcType == "%" ?
            remainder(firstSet, secondSet) :
            console.log("ERROR: No calcType");
  console.log("Answer: " + screen.textContent);
  handleDecimal("");
  calcType = "";
}

function showHistory(first) {
  if (first) {
    displayHistory.textContent = screen.textContent;
  } else {
    displayHistory.textContent =
      displayHistory.textContent + screen.textContent;
  }
}

function handleDecimal(text) {
  let decimalIndex = screen.textContent.indexOf(".");
  if (decimalIndex < 0) {
    console.log("No Decimal");
    return;
  }
  let decimalCount = screen.textContent.length - decimalIndex;
  if (decimalCount > 2 && (/\d+/.test(text) || text == "")) {
    console.log("Decimal crossed: " + screen.textContent);
    screen.textContent = screen.textContent.substring(0, decimalIndex + 3);
  } else {
    screen.textContent += text;
  }
}

function add(a, b) {
  screen.textContent = a + b;
  resultOnScreen = true;
}

function subtract(a, b) {
  screen.textContent = a - b;
  resultOnScreen = true;
}

function multiply(a, b) {
  screen.textContent = a * b;
  resultOnScreen = true;
}

function divide(a, b) {
  screen.textContent = a / b;
  resultOnScreen = true;
}

function remainder(a, b) {
  screen.textContent = a % b;
  resultOnScreen = true;
}

function setCalcType(type) {
  calcType = type;
}

function getCalcType() {
  return calcType;
}

function clear() {
  let screenText = screen.textContent;
  console.log("clear before text: " + screenText);
  if (screen.textContent == "") {
    clearAll();
  }
  if (screenText != null || screenText != undefined || screenText != "") {
    let newText = screenText.replace(/.$/, "");
    console.log(newText);
    screen.textContent = newText;
  }

}

function clearAll() {
  screen.textContent = "";
  displayHistory.textContent = "";
  calcType = "";
  firstSet = 0;
  secondSet = 0;
}

//Error Checks
function errorCheck(element) {
  console.log("Screen: " + screen.textContent);
  console.log("Element: " + element.textContent);
  let elementText = element.textContent;

  //check if decimal is pressed twice
  if (elementText == "." && screen.textContent.indexOf(".") >= 0) {
    console.log("ERRORCHECK: " + "Decimal already present");
    calFrame.style.animation = "";
    calFrame.offsetWidth;
    calFrame.style.animation = "shake 0.5s linear 1";

    return true;
  }

  //check if calc types are pressed twice
  if (arrCalcType.includes(elementText)) {
    let lastChar = screen.textContent[screen.textContent.length - 1];

    if (arrCalcType.includes(lastChar) || lastChar == null || lastChar == "") {
      console.log("ERRORCHECK: " + lastChar);
      calFrame.style.animation = "";
      calFrame.offsetWidth;
      calFrame.style.animation = "shake 0.5s linear 1";


      return true;
    }

  }


}

function disabeBtn(element) {
  element.disable = true;
}

function enableBtn(element) {
  element.enable = true;
}