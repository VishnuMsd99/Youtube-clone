console.log('This is Youtube clone');


let menuIcon = document.querySelector('.menu-icon');
let sidebar = document.querySelector('.sidebar');
let container = document.querySelector('.container');

menuIcon.onclick = function () {
    sidebar.classList.toggle('sidebar-active');
    container.classList.toggle('container-large');
}