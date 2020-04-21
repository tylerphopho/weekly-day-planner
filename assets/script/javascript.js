$(document).ready(function(){
  let currentDay = $("#current-day")
  currentDay.text(moment().format("LLLL"))
  let timeblocks = $("#timemarkers")
  var currentHour = parseInt(moment().format("H"))
  console.log(currentHour)
  var timeValues = [
      {time: "9 AM", value: '9'},
      {time: "10 AM", value: '10'},
      {time: "11 AM", value: '11'},
      {time: "12 PM", value: '12'},
      {time: "1 PM", value: '13'},
      {time: "2 PM", value: '14'},
      {time: "3 PM", value: '15'},
      {time: "4 PM", value: '16'},
      {time: "5 PM", value: '17'},
  ]
  for (var i = 0; i < timeValues.length; i++) {
      savedText = localStorage.getItem(i) || ""
      // Creates a div tag for the time,hour, text area, and a button to save the input.
      var timeRow = $("<div>");
      var hourRow = $("<div>");
      var textRow = $("<div>");
      var textArea = $("<textarea>");
      var button = $("<div>");
      var saveButton = $("<button>");
      // Adds a row class to the timeblocks
      timeRow.addClass("row");
      timeblocks.append(timeRow);
      // Appends time, the text area, and button.
      timeRow.append(hourRow, textRow, button);
      // Adds class to hour to give a time values.
      hourRow.addClass("time col-md-1");
      hourRow.html(`<p class="hour-text">${timeValues[i].time}</p>`);
      // Adds styling to text area and row.
      textRow.addClass("col-md-10");
      textRow.data("hour", timeValues[i].value);
      textArea.text(savedText);
      textRow.append(textArea);
      // Creates button to save the text area
      button.addClass("col-md-1");
      button.append(saveButton);
      saveButton.addClass("saveBtn");
      saveButton.html(`<i class="fas a-lock"></i>`);
      saveButton.data("hour", i)
  }
$(".saveBtn").on("click", function() {
  // Finds the textarea the user is inputing
  var textValue = $(this).parent().parent().find("textarea").val()
  // Finds the current time for the div.
  // var divValue = $(this).parent().parent().find(".col-md-10").attr("value");
  let hourValue = $(this).data("hour")
  localStorage.setItem(hourValue, textValue)
})
function changeColor() {
  var rowColor = $(".col-md-10")
  rowColor.each(function() {
  let currentDiv = $(this);
  if (parseInt(currentDiv.data("hour")) > currentHour) {
    currentDiv.addClass("future");
  } else if (parseInt(currentDiv.data("hour")) < currentHour) {
    currentDiv.addClass("past");
  } else {
    currentDiv.addClass("present");
  }
})
}
    // Call the changeColor function
    changeColor();
})