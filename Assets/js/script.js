// Readme shows a save button on the right to log the content to local storage.
// JS will need to be added for the buttons themselves.
// Timeblocks will need to change color depending on which hour it is/has passed/is upcoming. MomentJS integration.
// Clock at the top of the page alongside the date might be a nice touch.

// Revisit this at some point. Refinement is good.

// All the various save buttons.
// I'm confident there's a better way to do this.
var save1 = document.getElementsByClassName("save-Btn1");
var save2 = document.getElementsByClassName("save-Btn2")
var save3 = document.getElementsByClassName("save-Btn3")
var save4 = document.getElementsByClassName("save-Btn4")
var save5 = document.getElementsByClassName("save-Btn5")
var save6 = document.getElementsByClassName("save-Btn6")
var save7 = document.getElementsByClassName("save-Btn7")
var save8 = document.getElementsByClassName("save-Btn8")
var save9 = document.getElementsByClassName("save-Btn9")
var save10 = document.getElementsByClassName("save-Btn10")

// All the various textAreas
// Again, confident there's a better way to go about this
var textArea1 = document.getElementById("textAr1")
var textArea2 = document.getElementById("textAr2")
var textArea3 = document.getElementById("textAr3")
var textArea4 = document.getElementById("textAr4")
var textArea5 = document.getElementById("textAr5")
var textArea6 = document.getElementById("textAr6")
var textArea7 = document.getElementById("textAr7")
var textArea8 = document.getElementById("textAr8")
var textArea9 = document.getElementById("textAr9")
var textArea10 = document.getElementById("textAr10")

// Tells the current time.
var now = moment()

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
// Resets after 9:00 PM, daily
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

setTimeout(function() {
  timeChange();
  setInterval(timeChange, 60000)
}, 60 - (new Date().getSeconds()))
// Works for changing the colors on refresh, doesn't auto-update however.
// Needs

$(document).ready(function() {
  currentDateTime = $("#currentDay")
  update();
  setInterval(update, 500);
});


// Functions for loading each of the saved textarea entries individually.
// All are called on page load.
function loadEvent1() {
  var storedEvent1 = JSON.parse(localStorage.getItem("9AMEvent"))
  if (storedEvent1 !== null) {
    textArea1.value = storedEvent1
    console.log("EV1 Things went well")
  }
}

function loadEvent2() {
  var storedEvent2 = JSON.parse(localStorage.getItem("10AMEvent"))
  if (storedEvent2 !== null) {
    textArea2.value = storedEvent2
  } 
}

function loadEvent3() {
  var storedEvent3 = JSON.parse(localStorage.getItem("11AMEvent"))
  if (storedEvent3 !== null) {
    textArea3.value = storedEvent3
  } 
}

function loadEvent4() {
  var storedEvent4 = JSON.parse(localStorage.getItem("12PMEvent"))
  if (storedEvent4 !== null) {
    textArea4.value = storedEvent4
  } 
}

function loadEvent5() {
  var storedEvent5 = JSON.parse(localStorage.getItem("1PMEvent"))
  if (storedEvent5 !== null) {
    textArea5.value = storedEvent5
  } 
}

function loadEvent6() {
  var storedEvent6 = JSON.parse(localStorage.getItem("2PMEvent"))
  if (storedEvent6 !== null) {
    textArea6.value = storedEvent6
  } 
}

function loadEvent7() {
  var storedEvent7 = JSON.parse(localStorage.getItem("3PMEvent"))
  if (storedEvent7 !== null) {
    textArea7.value = storedEvent7
  } 
}

function loadEvent8() {
  var storedEvent8 = JSON.parse(localStorage.getItem("4PMEvent"))
  if (storedEvent8 !== null) {
    textArea8.value = storedEvent8
  } 
}

function loadEvent9() {
  var storedEvent9 = JSON.parse(localStorage.getItem("5PMEvent"))
  if (storedEvent9 !== null) {
    textArea9.value = storedEvent9
  } 
}

function loadEvent10() {
  var storedEvent10 = JSON.parse(localStorage.getItem("6PMEvent"))
  if (storedEvent10 !== null) {
    textArea10.value = storedEvent10
  } 
}


// For future reference, including '.value' in the document.getElement(s)By()
// area doesn't seem to work. Put it after the variable instead.

// Click events for every individual save button the correspond to the textareas
// accompanying their rows.
$(save1).on("click", function() {
  var textArea1 = document.getElementById("textAr1")

  if (textArea1.value === "") {
    localStorage.removeItem("9AMEvent")
    console.log("nothing happened")
  return
  } else {
    localStorage.setItem("9AMEvent", JSON.stringify(textArea1.value))
    console.log("something happened")
  }
})

$(save2).on("click", function() {
  var textArea2 = document.getElementById("textAr2")

  if (textArea2.value === "") {
    localStorage.removeItem("10AMEvent")
    console.log("nothing happened")
  return
  } else {
    localStorage.setItem("10AMEvent", JSON.stringify(textArea2.value))
    console.log("something happened")
  }
})

$(save3).on("click", function() {
  var textArea3 = document.getElementById("textAr3")

  if (textArea3.value === "") {
    localStorage.removeItem("11AMEvent")
    console.log("nothing happened")
  return
  } else {
    localStorage.setItem("11AMEvent", JSON.stringify(textArea3.value))
    console.log("something happened")
  }
})

$(save4).on("click", function() {
  var textArea4 = document.getElementById("textAr4")

  if (textArea4.value === "") {
    localStorage.removeItem("12PMEvent")
    console.log("nothing happened")
  return
  } else {
    localStorage.setItem("12PMEvent", JSON.stringify(textArea4.value))
    console.log("something happened")
  }
})

$(save5).on("click", function() {
  var textArea5 = document.getElementById("textAr5")

  if (textArea5.value === "") {
    localStorage.removeItem("1PMEvent")
    console.log("nothing happened")
  return
  } else {
    localStorage.setItem("1PMEvent", JSON.stringify(textArea5.value))
    console.log("something happened")
  }
})

$(save6).on("click", function() {
  var textArea6 = document.getElementById("textAr6")

  if (textArea6.value === "") {
    localStorage.removeItem("2PMEvent")
    console.log("nothing happened")
  return
  } else {
    localStorage.setItem("2PMEvent", JSON.stringify(textArea6.value))
    console.log("something happened")
  }
})

$(save7).on("click", function() {
  var textArea7 = document.getElementById("textAr7")

  if (textArea7.value === "") {
    localStorage.removeItem("3PMEvent")
    console.log("nothing happened")
  return
  } else {
    localStorage.setItem("3PMEvent", JSON.stringify(textArea7.value))
    console.log("something happened")
  }
})

$(save8).on("click", function() {
  var textArea8 = document.getElementById("textAr8")

  if (textArea8.value === "") {
    localStorage.removeItem("4PMEvent")
    console.log("nothing happened")
  return
  } else {
    localStorage.setItem("4PMEvent", JSON.stringify(textArea8.value))
    console.log("something happened")
  }
})

$(save9).on("click", function() {
  var textArea9 = document.getElementById("textAr9")

  if (textArea9.value === "") {
    localStorage.removeItem("5PMEvent")
    console.log("nothing happened")
  return
  } else {
    localStorage.setItem("5PMEvent", JSON.stringify(textArea9.value))
    console.log("something happened")
  }
})

$(save10).on("click", function() {
  var textArea10 = document.getElementById("textAr10")

  if (textArea10.value === "") {
    localStorage.removeItem("6PMEvent")
    console.log("nothing happened")
  return
  } else {
    localStorage.setItem("6PMEvent", JSON.stringify(textArea10.value))
    console.log("something happened")
  }
})

// Calls the loadEvent functions when the page loads.
loadEvent1()
loadEvent2()
loadEvent3()
loadEvent4()
loadEvent5()
loadEvent6()
loadEvent7()
loadEvent8()
loadEvent9()
loadEvent10()


// PROOF OF CONCEPT/EXPERIMENTATION AREA


  // References -- Just handy to have in one place
  // https://momentjs.com/docs/#/parsing/now/
  // https://stackoverflow.com/questions/11985642/how-to-use-one-click-event-handler-for-multiple-buttons