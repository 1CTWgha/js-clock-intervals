

document.addEventListener("DOMContentLoaded", function() {
  console.log("DOM Loaded");

 var tick = setInterval(clock, 10);
 //setInterval is a given function (clock is a anoymous function,
 //1000 is thetime it will increments) setInterval is a function that runs a parameter forever
  // console.log("seconds");
  //
  // var degrees = 0;
  var secondDegree = 0;
  var minuteDegree = 0;
  var hourDegree = 0;
  var second = document.getElementById('second');
  var minute = document.getElementById('minute');
  var hour = document.getElementById('hour');

  function clock(){
    // console.log("clock");
    // document.getElementById('id');

    secondDegree += 6;
    minuteDegree += 0.1;
    hourDegree   += 0.007;

    second.style.transform = "rotate(" + secondDegree + "deg)";
    console.log("second", secondDegree);
    minute.style.transform = "rotate(" + minuteDegree + "deg)";
    console.log("min", minuteDegree);
    hour.style.transform = "rotate(" + hourDegree + "deg)";
    console.log("hour", hourDegree);

  }
  });



  // var el = document.getElementById("second");
  // el.style.transform = "rotate(" + degrees + "deg)";

//   var hour = 0;
//   var minute = 0;
//   var second = 0;
//
//   var degrees = 0;
//
//   var second = function
//
//   var rotate = function(){
//
//   };
//
// var el = document.getElementById("second");
// el.style.transform = "rotate(" + degrees + "deg)";
//
//
//   var timer = document.getElementById('clock');
//   console.log("Clock")
//
  // var countForeverInterval = setInterval(function() {
  // 	// print out the count and increment it
  // 	console.log(count++);
  // }, 1000);
  // console.log("count");
  // // cancel the counting after 8 seconds
  // setTimeout(function() {
  // 	clearInterval(countForeverInterval);
  // }, 8000);
  // console.log("timeOut");
