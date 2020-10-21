import uuid from "./utils/uuid.js";
import TaskObj from "./Task.js";
import { categories } from "./data/categories.js";
import { tasks } from "./data/tasks.js";
import { days } from "./data/days.js";
import { getDate } from "./utils/getDate.js";

var Task = new TaskObj(tasks);
var calendar = document.getElementById("calendar");
var modal = document.getElementById("modal");
var calendarDay = document.getElementsByClassName("calendar__day");
var task = document.getElementsByClassName("task");
var taskForm = document.getElementById("task-form");
var dropdown = document.getElementById("dropdown");
var dropdownBtn = document.getElementById("dropdown").children[0];
var dropdownMenu = document.getElementsByClassName("dropdown__menu")[0];
var dropdownItem = document.getElementsByClassName("dropdown__item");
var taskFormDate = taskForm.querySelector('input[name="task-date"]');
const addTask = document.getElementById("add-task");
// var taskFormCategory = taskForm

var completedTaskField = document.getElementById("completed-tasks");
var todoTaskField = document.getElementById("todo-tasks");

completedTaskField.innerHTML = Task.getCompletedTasks();
todoTaskField.innerHTML = Task.getTodoTasks();

console.log(taskFormDate);
taskFormDate.value = "2020-10-20";

addTask.addEventListener("click", () => {
  modal.classList.add("show");

  let {day, month, year} = getDate();

  modal.querySelector('input[name="task-date"]').value = `${year}-${month}-${day}`;
  modal.querySelector("#task-date").innerHTML = `${month}.${day}.${year}`;
});

// toggle weeken calendar
document
.getElementById("weeken-toggle")
.addEventListener("click", function () {
  calendar.classList.toggle("calendar--portable");
});

console.log(days.filter(day => day.id === "09312020")[0]);

// dbclick
[...calendarDay].forEach(element => {
  element.addEventListener("dblclick", () => {
    console.log(element);
  });

//   // not work
});

//

[...task].forEach(element => {
  element.addEventListener("click", () => {
    element.classList.add("active");
    modal.classList.add("show");
  });

  
});

// toogle modal
modal.addEventListener("click", (e) => {
  let modalContent = document.getElementsByClassName("modal__content");
  
  if (!modalContent[0].contains(e.target)) {
    modal.classList.remove("show");
    document.querySelector(".task.active").classList.toggle("active");
  }
});

// handle form submit
taskForm.addEventListener("submit", (e) => {
  e.preventDefault();

  console.log(taskForm["task-content"].value);
});

// dropdown
dropdownBtn.addEventListener("click", (e) => {
  e.preventDefault();
  dropdown.classList.toggle("show");
});

console.log(dropdownItem);

for (const element of dropdownItem) {
  console.log(element);
}

[...dropdownItem].forEach(element => {
  console.log(element);
  element.addEventListener("click", (e) => {
    e.preventDefault();

    console.log(e);
    e.stopPropagation();
    console.log(e.target);
  });
});


const createDropDownItem = (obj) => {
  let a = document.createElement("a");
  a.textContent = obj.name;
  a.setAttribute("href", "#");
  a.setAttribute("class", "dropdown__item");
  a.setAttribute("data-value", obj.name);

  return a;
}

// 
categories.forEach((category, index) => {
  dropdownMenu.append(createDropDownItem(category));

  // category.addEventListener("click", () => {
  //   console.log(category);
  // })
});

