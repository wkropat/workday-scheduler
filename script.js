var timeBlock = document.querySelector("timeBlock");
var thisHour = moment().format("H");

var mainEl = document.getElementById("mainEl");
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

        //Compare actual time to hour block
        var hour = i;
        // Back to 12 hour clock
        if (i > 12) { hour = hour - 12; }



        // for each hour in the day make the row structure
        var timeBlock = document.createElement("div");
        timeBlock.setAttribute("class", "container-fluid timeBlock");
        var rowEl = document.createElement("div");
        rowEl.setAttribute("class", "row");
        timeBlock.appendChild(rowEl);

        // Fill out hour on the left
        var timeEl = document.createElement("div");
        timeEl.setAttribute("class", "col-12 col-lg-1 bg-secondary rounded p3 text-align:center")
        var timeElH3 = document.createElement("h3");
        timeElH3.textContent = i;

        timeEl.appendChild(timeElH3);

        // Create Form Element, background depends on time

        var formEl = document.createElement("form");
        formEl.setAttribute("id", "taskEl");
        // Set class based on relation to current time
        if (i < thisHour) {
            formEl.setAttribute("class", "col-12 col-lg-10 past");
        } else if (i == thisHour) {
            formEl.setAttribute("class", "col-12 col-lg-10 present");

        } else {
            formEl.setAttribute("class", "col-12 col-lg-10 future");
        }

        var formInputEl = document.createElement("input");
        formInputEl.setAttribute("type", "text");
        formInputEl.setAttribute("class", "form-control");
        formInputEl.setAttribute("id", "scheduleText");
        formInputEl.setAttribute("placeholder", "What to do...");
        formEl.appendChild(formInputEl);

        // Create Save button

        var buttonEl = document.createElement("button");
        buttonEl.setAttribute("type", "button");
        buttonEl.setAttribute("class", "btn saveBtn btn-info col-12 col-lg-1 ");
        buttonEl.setAttribute("id", "saveEl");

        // Append above to the row div

        rowEl.appendChild(timeEl);
        rowEl.appendChild(formEl);
        rowEl.appendChild(buttonEl);
        console.log(i);

        mainEl.appendChild(timeBlock);
    }

}

renderSchedule()

function saveSchedule(event) {
    // Save the text content to local storage.
    event.preventDefault();
    var scheduleText = $("#scheduleText").val();
    hourlySchedule =
        localStorage.setItem("hourlySchedule", hourlySchedule);
}


// Use moment to get current time in 24 hour format
// if the timeblock id class (an integer 9-17) is less than the current hour given above
// then the timeblock setAttribule bg-grey 
// else if timeblock id class equals current hour
// then timeblock setattribute bg-red btn-secondary
// else timeblock setattribute bg-green btn-success

// Add listener events for button clicks
// saveEl.addEventListener("click", saveSchedule);
// taskEl.addEventListener("click", inputText);

// init()