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
        
        // Creates a div tag for the time
        var timeRow = $("<div>");
        timeRow.addClass("row");
        timeblocks.append(timeRow);
        // Appends time, the text area, and button.
        timeRow.append(hourRow, textRow, button);

        // Creates div to hold current hour
        var hourRow = $("<div>");
        hourRow.addClass("time col-md-1");
        hourRow.html(`<p class="hour-text">${timeValues[i].time}</p>`);

        // Creates div to hold text area
        var textRow = $("<div>");
        textRow.addClass("col-md-10");
        textRow.attr("value", timeValues[i].milTime);
        
        var textArea = $("<textarea>");
        textArea.text(savedText);
        textRow.append(textArea);

        // Creates button to save the text area
        var button = $("<div>");
        button.addClass("col-md-1");
        button.append(saveButton);

        var saveButton = $("<button>");
        saveButton.addClass("saveBtn");
        saveButton.html(`<i class="fas a-lock"></i>`);
    }

    $(".saveBtn").click(function(){
        var text = $(this).parent().find("textArea").val()
        var displayHour = $(this).parent.find("textArea").attr("id");
        localStorage.setItem(displayHour, text);
        $(this).parent().find("textArea").fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
    })

    function changeColor() {
        var rowColor = $(".col-md-10");
        for (let j = 0; j < rowColor.length; j++) {
          var currentDiv = $(rowColor[j]);
          if (currentDiv.attr("value") > currentHour) {
            currentDiv.addClass("future");
          } else if (currentDiv.attr("value") < currentHour) {
            currentDiv.addClass("past");
          } else {
            currentDiv.addClass("present");
          }
        }
      }
      // Call the changeColor function
      changeColor();
})

