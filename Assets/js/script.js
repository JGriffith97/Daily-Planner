// Readme shows a save button on the right to log the content to local storage.
// JS will need to be added for the buttons themselves.
// Timeblocks will need to change color depending on which hour it is/has passed/is upcoming. MomentJS integration.
// Clock at the top of the page alongside the date might be a nice touch.

var save = document.getElementById("saveBtn");
var text = document.querySelectorAll("textarea");

var currentDateTime = null,
date = null;

// Tells the time displayed on the page to change based on the readied function
// belows interval, every half-second. (Half so that it's more accurate)
function update() {
  date = moment(new Date())
  currentDateTime.html(date.format("dddd, MMMM Do YYYY, h:mm:ss a"))
}

// TODO: Funtion for changing the color of the timeblock based on the time
// if time has passed, current time, upcoming time.
// jQuery .eq method with if, else if statements to determine current time?


// TODO: Figure out how to save an individual line, the one associated with the
// save button, to save that line ONLY to local storage so that it persists when
// the page is refreshed.
function saveEvent(event) {
  
}


$(document).ready(function() {
  currentDateTime = $("#currentDay")
  update();
  setInterval(update, 500);
});

$(save).on("click", function(event) {
  saveEvent();
})