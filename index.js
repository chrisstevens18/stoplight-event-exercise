//CONTROLS
const stop = document.getElementById("stopButton");
const slow = document.getElementById("slowButton");
const go = document.getElementById("goButton");
//BULBS
const stopBulb = document.getElementById ("stopLight");
const slowBulb = document.getElementById ("slowLight");
const goBulb = document.getElementById ("goLight");

function stopLight() {
  if (stopBulb.style.backgroundColor === "red") {
    stopBulb.style.backgroundColor = "black"
  }else stopBulb.style.backgroundColor = "red"
}


function slowLight() {
  if (slowBulb.style.backgroundColor === "yellow") {
    slowBulb.style.backgroundColor = "black"
  }else slowBulb.style.backgroundColor = "yellow"
}

function goLight() {
  if (goBulb.style.backgroundColor === "greenyellow") {
    goBulb.style.backgroundColor = "black"
  }else goBulb.style.backgroundColor = "greenyellow"
}


stop.addEventListener('click', stopLight, false)
slow.addEventListener('click', slowLight, false)
go.addEventListener('click', goLight, false)



stop.addEventListener('mouseover', (e) =>{
  console.log(`"Entered ${stop.textContent} button"`)
})
stop.addEventListener('mouseout', (e) =>{
  console.log(`"Left ${stop.textContent} button"`)
})
slow.addEventListener('mouseover', (e) =>{
  console.log(`"Entered ${slow.textContent} button"`)
})
slow.addEventListener('mouseout', (e) =>{
  console.log(`"Left ${slow.textContent} button"`)
})
go.addEventListener('mouseover', (e) =>{
  console.log(`"Entered ${go.textContent} button"`)
})
go.addEventListener('mouseout', (e) =>{
  console.log(`"Left ${go.textContent} button"`)
})

// (function() {
//   'use strict';

//   // YOUR CODE HERE
// })();
