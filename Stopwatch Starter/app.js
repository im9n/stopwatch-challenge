const timerMilliseconds = document.querySelector(".timer__milliseconds");
const timerSeconds = document.querySelector(".timer__seconds");
const timerMinutes = document.querySelector(".timer__minutes");

let cancelId;
let startTime;
let savedTime = 0;

function startTimer() {
  startTime = Date.now();
  cancelId = requestAnimationFrame(updateTimer);
}

function stopTimer() {
  savedTime = savedTime + Date.now() - startTime
  console.log(savedTime)
  cancelAnimationFrame(cancelId)
}

function resetTimer() {
  timerMilliseconds.innerHTML = "000"
  timerSeconds.innerHTML = "00"
  timerMinutes.innerHTML = "00"
  
  startTime = Date.now()
  savedTime = 0
}

function updateTimer() {
  cancelId = requestAnimationFrame(updateTimer);
  millisElapsed = Date.now() - startTime + savedTime
  secondsElapsed = Math.floor(millisElapsed / 1000)
  minutesElapsed = Math.floor(secondsElapsed / 60)

  let minutesText = minutesElapsed 
  let secondsText = secondsElapsed % 60
  let millisText = millisElapsed % 1000

  if(minutesText.toString().length < 2){
    minutesText = "0" + minutesText
  }

  if(secondsText.toString().length < 2){
    secondsText = "0" + secondsText
  }

  if(millisText.toString().length < 3){
    millisText = millisText.toString().padStart(3, 0)
  }

  
  timerMilliseconds.innerHTML = millisText
  timerSeconds.innerHTML = secondsText
  timerMinutes.innerHTML = minutesText
}