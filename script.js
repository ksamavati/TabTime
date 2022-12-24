async function fetchData() {
	//const res=await fetch ("https://api.coronavirus.data.gov.uk/v1/data");
	//const record=await res.json();
	document.getElementById("currTab").innerHTML="Tab Name";
	document.getElementById("timeOnTab").innerHTML="00:00:00";
	document.getElementById("category").innerHTML="Category";
}
fetchData();

function twoDigit(num) {
  num = num.toString();
  while (num.length < 2) num = "0" + num;
  return num;
}

async function getCurrentTab() {
  let queryOptions = { active: true, lastFocusedWindow: true };
  // `tab` will either be a `tabs.Tab` instance or `undefined`.
  let [tab] = await chrome.tabs.query(queryOptions);
  return tab;
}

var tabStartTime = new Date().getTime();

// Update the count down every 1 second
var x = setInterval(async function() {

  let thisTab = await getCurrentTab();
  console.log(thisTab.title);

  document.getElementById("currTab").innerHTML=thisTab.title;

  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = now - tabStartTime;

  // Time calculations for days, hours, minutes and seconds
  var hours = Math.floor(distance / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="demo"
  document.getElementById("timeOnTab").innerHTML = twoDigit(hours) + ":"
  + twoDigit(minutes) + ":" + twoDigit(seconds);

}, 1000);