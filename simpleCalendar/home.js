const month = document.getElementById("months");
const theme = document.getElementById("theme");

const list = document.querySelector("ul");
const h1 = document.querySelector("h1");

month.addEventListener("change", () => {
  console.log("Running eevent listener");
  const choice = month.value;
  let days = 30;

  // ADD CONDITIONAL HERE
  switch (choice) {
    case "January":
      days = 31;
      break;

    case "February":
      days = 28;
      break;

    case "March":
        days = 30;
        break;

    case "April":
        days = 30;
        break;

    case "May":
        days = 30;
        break;

    case "June":
        days = 31;
        break;

    case "July":
        days = 31;
        break;

    case "August":
        days  = 30;
        break;

    case "September":
        days = 30;
        break;

    case "October":
        days = 31;
        break;

    case "November":
        days = 30;
        break;

    case "December":
        days = 30;
        break;

    default:
      days = 31;
      break;
  }

  createCalendar(days, choice);
  createTheme("Purple");
});

function createCalendar(days, choice) {
  console.log("Creating calendar");
  list.innerHTML = "";
  h1.textContent = choice;
  for (let i = 1; i <= days; i++) {
    const listItem = document.createElement("li");
    listItem.textContent = i;
    listItem.className = "purple";
    list.appendChild(listItem);
  }
}

theme.addEventListener("change", () =>{
    const choice = theme.value;
    createTheme(choice);

});

function createTheme(color) {
    let listColc = list.children;
    let listItem;
    for(listItem of listColc){
        listItem.className = " ";
        listItem.className = color;
        console.log(listItem);
    };
    
    
}

createCalendar(31, "January");
