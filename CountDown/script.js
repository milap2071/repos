let btnStart = document.querySelector("button");
let divCount = document.getElementById("divCount");

let i = 10;

btnStart.addEventListener("click", () => {
  while (i >= 0) {
    let para = document.createElement("p");
    i == 10
      ? (para.textContent = "Countdown " + i)
      : i == 0
      ? (para.textContent = "Blast Off!")
      : (para.textContent = i.toString());
    divCount.appendChild(para);
    i--;
  }
});

//Guest List
const people = [
  "Chris",
  "Anne",
  "Colin",
  "Terri",
  "Phil",
  "Lola",
  "Sam",
  "Kay",
  "Bruce",
];

const admitted = document.querySelector(".admitted");
const refused = document.querySelector(".refused");
admitted.textContent = "Admit: ";
refused.textContent = "Refuse: ";

// loop starts here

for (let name of people) {
  if (name == "Phil" || name == "Lola") {
    refused.textContent += name + ', ';
  } else {
    admitted.textContent += name + ', ';
  }
}

refused.textContent = refused.textContent.slice(0, refused.textContent.length-2) + '.';
admitted.textContent = admitted.textContent.slice(0, admitted.textContent.length-2) + '.';
