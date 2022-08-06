let btnCreate = document.getElementById("btnCreate");
let btnClear = document.getElementById("btnClear");
let gridContainer = document.getElementById("grid-container");

let selectSize = document.getElementById("selectSize");
let styleBw = document.getElementById("bw");
let styleRainbow = document.getElementById("rainbow");
let styleDarken = document.getElementById("darken");

btnCreate.addEventListener("click", (e) => {
  let size = selectSize.value;
  createGrid(size);
  console.log("Selected Value: " + size);
});

btnClear.addEventListener("click", (e) => {
  let boxes = Array.from(gridContainer.childNodes);
  boxes.forEach((element) => {
    element.style.backgroundColor = "white";
    element.style.filter = "brightness(100%)";
  });
});

function createGrid(size) {
  gridContainer.innerHTML = "";
  for (let i = 1; i <= size * size; i++) {
    let div = document.createElement("div");
    div.classList.add("grid-box");
    div.addEventListener("mouseenter", paint);
    div.addEventListener("mouseleave", clear);
    div.style.backgroundColor = "white";
    div.style.filter = `brightness(100%)`;

    gridContainer.appendChild(div);
  }

  let myStyles = `grid-template-columns: repeat(${size}, 1fr); grid-template-rows: repeat(${size}, 1fr)`;
  gridContainer.style.cssText = myStyles;
}

function paint(e) {
  let element = e.target;
  element.style.transition = "0s";

  if (styleRainbow.checked) {
    element.style.backgroundColor = randomColour();
  } else if (styleBw.checked) {
    element.style.backgroundColor = "black";
  } else if (styleDarken.checked) {
    if (element.style.backgroundColor == "white") {
      element.style.backgroundColor = randomColour();
    } else {
      darkenColour(element);
    }
  }
}

function clear(e) {
  e.target.style.transition = "0.5s";
  if (!styleDarken.checked) {
    console.log("Cleared");
    e.target.style.backgroundColor = "white";
  }
}

function randomColour(params) {
  var r = Math.round(Math.random() * 255);
  var g = Math.round(Math.random() * 255);
  var b = Math.round(Math.random() * 255);
  return `rgba(${r}, ${g}, ${b})`;
}

function darkenColour(box) {
  let currentBrightness = box.style.filter.replace(/[^\d.]/g, "");
  console.log(currentBrightness);
  let newBrightness = currentBrightness - 15;
  if (newBrightness < 0) {
    newBrightness = 0;
  }
  box.style.filter = `brightness(${newBrightness}%)`;
}

createGrid(4);
