const year = (new Date().getFullYear());
//please enter one month lesser for the date to count due to some technical error in the clock
const fourthOfJuly = new Date(2020, 8, 11).getTime();

// countdown
let timer = setInterval(function() {

  // get today's date
  const today = new Date().getTime();

  // get the difference
  const diff = fourthOfJuly - today;

  // math
  let days = Math.floor(diff / (1000 * 60 * 60 * 24));
  let hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((diff % (1000 * 60)) / 1000);

  // display

function myFunction(x) {
  if (x.matches) {
    function myFunction(t) {
  if (t.matches) {
  document.getElementById("timer").innerHTML =
    "<div class=\"days\"> \
  <div class=\"numbers\">"+days+"</div>D</div> \
<div class=\"hours\"> \
  <div class=\"numbers\">"+hours+"</div>H</div> \
<div class=\"minutes\"> \
  <div class=\"numbers\">"+minutes+"</div>M</div> \
<div class=\"seconds\"> \
  <div class=\"numbers\">"+seconds+"</div>S</div> \
</div>";

  } else {
  document.getElementById("timer").innerHTML =
    "<div class=\"days\"> \
  <div class=\"numbers\">"+days+"</div>days</div> \
<div class=\"hours\"> \
  <div class=\"numbers\">"+hours+"</div>hours</div> \
<div class=\"minutes\"> \
  <div class=\"numbers\">"+minutes+"</div>mins</div> \
<div class=\"seconds\"> \
  <div class=\"numbers\">"+seconds+"</div>secs</div> \
</div>";

  }
}

var t = window.matchMedia("(max-width: 376px)")
myFunction(t) // Call listener function at run time
t.addListener(myFunction)


  } else {
  document.getElementById("timer").innerHTML =
    "<div class=\"days\"> \
  <div class=\"numbers\">"+days+"</div>days</div> \
<div class=\"hours\"> \
  <div class=\"numbers\">"+hours+"</div>hours</div> \
<div class=\"minutes\"> \
  <div class=\"numbers\">"+minutes+"</div>minutes</div> \
<div class=\"seconds\"> \
  <div class=\"numbers\">"+seconds+"</div>seconds</div> \
</div>";

  }
}

var x = window.matchMedia("(max-width: 768px)")
myFunction(x) // Call listener function at run time
x.addListener(myFunction) // Attach listener function on state changes
}, 1000);