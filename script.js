// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
var taskDisplayEl = $('#task-display');
var timeDisplayEl = $('#currentDay');


function saveTasksToStorage(tasks) {
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

function readTasksFromStorage() {
  var tasks = localStorage.getItem('tasks');
  if (tasks) {
    tasks = JSON.parse(tasks);
  } else {
    tasks = [];
  }
  return tasks;
}

function printTaskData() {
  // clear current projects on the page
  taskDisplayEl.empty();
var tasks= readTasksFromStorage();
taskDisplayEl.append(tasks)

var rowEl= $('<div>');





}

function handleTaskFormSubmit(event){
  event.preventDefault();
  var newTask={info:details,};
  var tasks=readTasksFromStorage();
  tasks.push(newTask);
  saveTasksToStorage(tasks);
  printTaskData();
}

taskDisplayEl.on('save', handleTaskFormSubmit);


function displayTime() {
  var rightNow = dayjs().format('MMM DD, YYYY [at] hh:mm:ss a');
  timeDisplayEl.text(rightNow);
}

displayTime();
setInterval(displayTime, 1000);

printTaskData();




  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
