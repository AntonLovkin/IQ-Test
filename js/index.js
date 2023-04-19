// -----------menu------------

// const parent = document.getElementById('main-page');
// // console.log(parent)
// parent.addEventListener('click', function (event) {
  
//   if (event.target && event.target.id === 'menu-btn') {
 
//     let menuBtn = document.getElementById('menu-btn');
//     let sideBar = document.querySelector('.menu');

//     menuBtn.addEventListener('click', () => {
//       sideBar.classList.toggle('visible')
//     });
//   }
//     if (event.target && event.target.id === 'close-btn') {
 
//     let closeBtn = document.getElementById('close-btn');
//     let sideBar = document.querySelector('.menu');

//     closeBtn.addEventListener('click', () => {
//       sideBar.classList.toggle('visible')
//     });
//   }
// });

window.onload = function() {
  let menuBtn = document.getElementById('menu-btn');
  let closeBtn = document.getElementById('close-btn');
  let sideBar = document.querySelector('.menu');

  menuBtn.addEventListener('click', () => {
      // console.log('first')
      sideBar.classList.toggle('visible')
    });

    closeBtn.addEventListener('click', () => {
      sideBar.classList.toggle('visible')
    });
  }



// -------------timer------------
// const timer = document.getElementById('timer');
// let minutes = 10;
// let seconds = 0;

// function updateTimer() {
//   if (seconds === 0) {
//     if (minutes === 0) {
//       clearInterval(interval);
//       timer.innerHTML = "Time's up!";
//       return;
//     } else {
//       minutes--;
//       seconds = 59;
//     }
//   } else {
//     seconds--;
//   }
//   timer.innerHTML = (minutes < 10 ? "0" : "") + minutes + ":" + (seconds < 10 ? "0" : "") + seconds;
// }

// const interval = setInterval(updateTimer, 1000);