// Readme shows a save button on the right to log the content to local storage.
// JS will need to be added for the buttons themselves.
// Timeblocks will need to change color depending on which hour it is/has passed/is upcoming. MomentJS integration.
// Clock at the top of the page alongside the date might be a nice touch.

var save = document.getElementById("saveBtn");
var textArea = document.querySelectorAll("textarea");
// Could theoretically make a query selector for all the textareas individually.
// Maybe there's a better way? Should ask. But I could also probably .eq my way
// through the individual textareas.

// const timeKey = [

// ]


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

function timeChange() {

}



// $("tr").eq(i).children("td").first  --  i = number
// $("tr").eq(i) .search? .find?

// TODO: Figure out how to save an individual line, the one associated with the
// save button, to save that line ONLY to local storage so that it persists when
// the page is refreshed.
function saveEvent(event) {
  console.log()
}

// $(".entry").eq(0).css("background-color", "darkred")   // Makes the first TD (9AM) red.
// $(".th").eq(0).css("background-color", "darkred")  // Proof of concept

// $(".entry").eq(1).css("background-color", "darkgreen")
// $(".th").eq(1).css("background-color", "darkgreen")

// $(".entry").eq(2).css("background-color", "black")
// $(".th").eq(2).css("background-color", "black")


$(document).ready(function() {
  currentDateTime = $("#currentDay")
  update();
  setInterval(update, 500);
});

$(save).on("click", function(event) {
  saveEvent(event);
})

// PROOF OF CONCEPT/EXPERIMENTATION AREA

function makeColor() {
  $(".contentRow").eq(0).css("background-color", "darkred") // selects the entire row, probably a more efficient option, just need to have
                                                            // log applied
  $(".contentRow").eq(1).css("background-color", "darkgreen")
  $(".contentRow").eq(2).css("background-color", "black")
  }
  
  console.log(moment())
  makeColor()