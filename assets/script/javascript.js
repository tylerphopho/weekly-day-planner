var setBtn = $("#submit-button");
var changeBtn = $("#change-button");




$(document).ready(function() {

var nowMoment = moment().format("dddd , MMMM Do YYYY");


var eDisplayMoment = document.getElementById("displayMoment");
eDisplayMoment.innerHTML = nowMoment;

});