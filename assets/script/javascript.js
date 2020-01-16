var current = $("#current-day");

$(document).ready(function(){
    var m = moment();
    moment().format("dddd , MMMM Do YYYY");
    console.log(m.toString());
})

