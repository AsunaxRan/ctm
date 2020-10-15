(function () {
  var calendar = document.getElementById("calendar");
  var modal = document.getElementById("modal");
  var calendarDay = document.getElementsByClassName("calendar__day");
  var task = document.getElementsByClassName("task");
  var taskForm = document.getElementById("task-form");
  var dropdown = document.getElementById("dropdown");
  var dropdownBtn = document.getElementById("dropdown").children[0];
  var dropdownMenu = document.getElementsByClassName("dropdown__menu")[0];
  var dropdownItem = document.getElementsByClassName("dropdown__item");

  // init calendar scrollbar
  const simpleBar = new SimpleBar(document.getElementById('simplebar'), {
    autoHide: false
  });

  // toggle weeken calendar
  document
  .getElementById("weeken-toggle")
  .addEventListener("click", function () {
    calendar.classList.toggle("calendar--portable");
    simpleBar.recalculate();
  });

  // dbclick
  calendarDay.forEach(element => {
    element.addEventListener("dblclick", () => {
      console.log(element);
    });

    // not work
  });

  //
  task.forEach(function(element) {
    element.addEventListener("click", function() {
      modal.classList.add("show");
    });
  });

  // toogle modal
  modal.addEventListener("click", (e) => {
    let modalContent = document.getElementsByClassName("modal__content");
    
    if (!modalContent[0].contains(e.target)) {
      modal.classList.remove("show");
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
    console.log(dropdownBtn);
  });

  console.log(dropdownMenu.children);
})();