var container = $("container");
var timeBlock = $("timeBlock");
var timeEl = $("#timeEl");
var taskEl = $("#taskEl");
var saveEl = $("#saveEl");
var nineEL = $("#9");
var tenEL = $("#10");
var elevenEL = $("#11");
var twelveEL = $("#12");
var oneEL = $("#13");
var twoEL = $("#14");
var threeEL = $("#15");
var fourEL = $("#16");
var fiveEL = $("#17");
var thisHour = moment().format("H");

function init() {
    // Build the schedule with any preloaded content
    if (id < hour ) {
        $($)
    }

    // get from local storage: var count = localStorage.getItem("count");
}

function saveSchedule(event) {
    // Save the text content of the upchild node to local storage.
    event.preventDefault();
    var scheduleText = $("#scheduleText").val();
    hourlySchedule = 
    localStorage.setItem("hourlySchedule", hourlySchedule);
}

function inputText() {
    // Click within the taskEl and user 

}

// Use moment to get current time in 24 hour format
// if the timeblock id class (an integer 9-17) is less than the current hour given above
// then the timeblock setAttribule bg-grey 
// else if timeblock id class equals current hour
// then timeblock setattribute bg-red btn-secondary
// else timeblock setattribute bg-green btn-success

// Add listener events for button clicks
saveEl.addEventListener("click", saveSchedule);
// taskEl.addEventListener("click", inputText);