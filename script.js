async function fetchData() {
	const res=await fetch ("https://api.coronavirus.data.gov.uk/v1/data");
	const record=await res.json();
	document.getElementById("currTab").innerHTML=record.data[0].date;
	document.getElementById("timeOnTab").innerHTML=record.data[0].areaName;
	document.getElementById("category").innerHTML=record.data[0].latestBy;
}
fetchData();

var tabStartTime = new Date().getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = now - tabStartTime;

  // Time calculations for days, hours, minutes and seconds
  var hours = Math.floor(distance / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="demo"
  document.getElementById("timeOnTab").innerHTML = hours + ":"
  + minutes + ":" + seconds;

}, 1000);