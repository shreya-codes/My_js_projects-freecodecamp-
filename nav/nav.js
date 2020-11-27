const navToggle= document.querySelector(".nav-toggle");
const links = document.querySelector(".links");

navToggle.addEventListener('click',toggled);
function toggled(){
    links.classList.toggle('show-links');
}