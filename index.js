// -----------menu------------
const menuBtn = document.getElementById('menu-btn');
const closeBtn = document.getElementById('close-btn');
const sideBar = document.querySelector('.menu');
console.log(sideBar)

menuBtn.addEventListener('click', () => {
    sideBar.classList.toggle('visible')
});

closeBtn.addEventListener('click', () => {
    sideBar.classList.toggle('visible')
});


// -------------timer------------
const timer = document.getElementById('timer');
let minutes = 10;
let seconds = 0;

function updateTimer() {
  if (seconds === 0) {
    if (minutes === 0) {
      clearInterval(interval);
      timer.innerHTML = "Time's up!";
      return;
    } else {
      minutes--;
      seconds = 59;
    }
  } else {
    seconds--;
  }
  timer.innerHTML = (minutes < 10 ? "0" : "") + minutes + ":" + (seconds < 10 ? "0" : "") + seconds;
}

const interval = setInterval(updateTimer, 1000);
