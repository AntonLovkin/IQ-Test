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