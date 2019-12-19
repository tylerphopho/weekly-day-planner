var setBtn = $("#set-button-");
var changeBtn = $("#change-button");







$(document).ready(function() {

setBtn.on("click", setEvent);

//Display today's date
var nowMoment = moment().format("dddd , MMMM Do YYYY");

var eDisplayMoment = document.getElementById("displayMoment");
eDisplayMoment.innerHTML = nowMoment;


function setEvent() {
    
} 


});