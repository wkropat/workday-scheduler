var timeBlock = document.querySelector("timeBlock");
var mainEl = document.getElementById("mainEl");
var thisHour = moment().format("H");
var tasks = [];

function init() {
    // Build the schedule with any preloaded content from local storage
    var storedTasks = JSON.parse(localStorage.getItem("tasks"));
    if (storedTasks !== null) {
        tasks = storedTasks;
    }
    renderSchedule();
}

function renderSchedule() {

    // Make scheule blocks 
    for (var i = 9; i < 18; i++) {

        // Back to 12 hour clock
        var hour = i;
        if (i > 12) {hour = hour - 12;}

        // Make the row structure
        var timeBlock = document.createElement("div");
        timeBlock.setAttribute("class", "container-fluid timeBlock");
        var rowEl = document.createElement("div");
        rowEl.setAttribute("class", "row");
        timeBlock.appendChild(rowEl);

        // Fill out hour on the left
        var timeEl = document.createElement("div");
        timeEl.setAttribute("class", "col-12 col-lg-1 bg-secondary rounded p3 justify-content:center text-align:center")
        var timeElH3 = document.createElement("h3");
        timeElH3.textContent = hour;
        timeEl.appendChild(timeElH3);

        // Create Form Element, background depends on time
        var formEl = document.createElement("form");
        formEl.setAttribute("id", hour);
        if (i < thisHour) {
            formEl.setAttribute("class", "col-12 col-lg-10 past");
        } else if (i == thisHour) {
            formEl.setAttribute("class", "col-12 col-lg-10 present");

        } else {
            formEl.setAttribute("class", "col-12 col-lg-10 future");
        }
        var formInputEl = document.createElement("input");
        formInputEl.setAttribute("type", "text");
        formInputEl.setAttribute("class", "form-control formCustom");
        formInputEl.setAttribute("id", "scheduleText");
        formInputEl.setAttribute("placeholder", "What to do...");
        formEl.appendChild(formInputEl);

        // Create Save button
        var buttonEl = document.createElement("button");
        buttonEl.setAttribute("type", "button");
        buttonEl.setAttribute("class", "btn saveBtn btn-info col-12 col-lg-1 ");
        buttonEl.setAttribute("id", "saveEl");
        buttonEl.innerHTML = "Save";

        // Append above to the row div
        rowEl.appendChild(timeEl);
        rowEl.appendChild(formEl);
        rowEl.appendChild(buttonEl);
        mainEl.appendChild(timeBlock);
    }

}

function saveSchedule(event) {
    // Save the text content to local storage.
    event.preventDefault();
    var scheduleText = $("#scheduleText").val();
    hourlySchedule =
    localStorage.setItem("hourlySchedule", hourlySchedule);
}

init()

// Add listener events for button clicks


// saveEl.addEventListener("click", saveSchedule);
// taskEl.addEventListener("click", inputText);

