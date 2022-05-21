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

// var now = moment("7:15", "h:mm a")
// Placeholder so that I can spoof the time for testing purposes

var now = moment()
// Tells the current time.

var currentDateTime = null,
date = null;

// Tells the time displayed on the page to change based on the readied function
// belows interval, every half-second. (Half so that it's more accurate)
function update() {
  date = moment(new Date())
  currentDateTime.html(date.format("dddd, MMMM Do YYYY, h:mm:ss a"))
}

// Changes the styles throughout the day with the passage of time.
// DarkGreen = Current Hour
// DarkRed = Next Upcoming Hour
// Black = Passed Hour
function timeChange() {
  var nine = moment("9:00 am", "h:mm a")
  var ten = moment("10:00 am", "h:mm a")
  var eleven = moment("11:00 am", "h:mm a")
  var twelve = moment("12:00 pm", "h:mm a")
  var one = moment("1:00 pm", "h:mm a")
  var two = moment("2:00 pm", "h:mm a")
  var three = moment("3:00 pm", "h:mm a")
  var four = moment("4:00 pm", "h:mm a")
  var five = moment("5:00 pm", "h:mm a")
  var six = moment("6:00 pm", "h:mm a")
  var seven = moment("7:00 pm", "h:mm a")
  var endOfDay = moment("9:00 pm", "h:mm a")

  if (now.isBetween(endOfDay, nine)) {
    $(".contentRow").eq(0).css("background-color", "darkred")
  } else if (now.isBetween(nine, ten)) {
    $(".contentRow").eq(0).css("background-color", "darkgreen")
    $(".contentRow").eq(1).css("background-color", "darkred")
  } else if (now.isBetween(ten, eleven)) {
    $(".contentRow").eq(1).css("background-color", "darkgreen")
    $(".contentRow").eq(2).css("background-color", "darkred")
    for (let i = 0; i < 1; i++) {
      $(".contentRow").eq(i).css("background-color", "black")
    }
  } else if (now.isBetween(eleven, twelve)) {
    $(".contentRow").eq(2).css("background-color", "darkgreen")
    $(".contentRow").eq(3).css("background-color", "darkred")
    for (let i = 0; i < 2; i++) {
      $(".contentRow").eq(i).css("background-color", "black")
    }
  } else if (now.isBetween(twelve, one)) {
    $(".contentRow").eq(3).css("background-color", "darkgreen")
    $(".contentRow").eq(4).css("background-color", "darkred")
    for (let i = 0; i < 3; i++) {
      $(".contentRow").eq(i).css("background-color", "black")
    }
  } else if (now.isBetween(one, two)) {
    $(".contentRow").eq(4).css("background-color", "darkgreen")
    $(".contentRow").eq(5).css("background-color", "darkred")
    for (let i = 0; i < 4; i++) {
      $(".contentRow").eq(i).css("background-color", "black")
    }
  } else if (now.isBetween(two, three)) {
    $(".contentRow").eq(5).css("background-color", "darkgreen")
    $(".contentRow").eq(6).css("background-color", "darkred")
    for (let i = 0; i < 5; i++) {
      $(".contentRow").eq(i).css("background-color", "black")
    }
  } else if (now.isBetween(three, four)) {
    $(".contentRow").eq(6).css("background-color", "darkgreen")
    $(".contentRow").eq(7).css("background-color", "darkred")
    for (let i = 0; i < 6; i++) {
      $(".contentRow").eq(i).css("background-color", "black")
    }
  } else if (now.isBetween(four, five)) {
    $(".contentRow").eq(7).css("background-color", "darkgreen")
    $(".contentRow").eq(8).css("background-color", "darkred")
    for (let i = 0; i < 7; i++) {
      $(".contentRow").eq(i).css("background-color", "black")
    }
  } else if (now.isBetween(five, six)) {
    $(".contentRow").eq(8).css("background-color", "darkgreen")
    $(".contentRow").eq(9).css("background-color", "darkred")
    for (let i = 0; i < 8; i++) {
      $(".contentRow").eq(i).css("background-color", "black")
    }
  } else if (now.isBetween(six, seven)) {
    $(".contentRow").eq(9).css("background-color", "darkgreen")
    for (let i = 0; i < 9; i++) {
      $(".contentRow").eq(i).css("background-color", "black")
    }
  } else if (now.isBetween(seven, endOfDay)) {
    for (let i = 0; i <= 9; i++) {
      $(".contentRow").eq(i).css("background-color", "black")
    }
  }
}



// $("tr").eq(i).children("td").first  --  i = number
// $("tr").eq(i) .search? .find?

// TODO: Figure out how to save an individual line, the one associated with the
// save button, to save that line ONLY to local storage so that it persists when
// the page is refreshed.
function saveEvent(event) {
  console.log()
}

setTimeout(function() {
  timeChange();
  setInterval(timeChange, 60000)
}, 60 - (new Date().getSeconds()))
// Might work?

$(document).ready(function() {
  currentDateTime = $("#currentDay")
  update();
  setInterval(update, 500);
});

$(save).on("click", function(event) {
  saveEvent(event);
})

// PROOF OF CONCEPT/EXPERIMENTATION AREA

// function makeColor() {
//   $(".contentRow").eq(0).css("background-color", "darkred") // selects the entire row, probably a more efficient option, just need to have
//                                                             // log applied
//   $(".contentRow").eq(1).css("background-color", "darkgreen")
//   $(".contentRow").eq(2).css("background-color", "black")
//   }
//   $(".entry").eq(0).css("background-color", "darkred")   // Makes the first TD (9AM) red.
//   $(".th").eq(0).css("background-color", "darkred")  // Proof of concept

//   $(".entry").eq(1).css("background-color", "darkgreen")
//   $(".th").eq(1).css("background-color", "darkgreen")

//   $(".entry").eq(2).css("background-color", "black")
//   $(".th").eq(2).css("background-color", "black")

  console.log(moment())
  console.log(now)
  // makeColor()

  // References -- Just handy to have in one place
  // https://momentjs.com/docs/#/parsing/now/
  //