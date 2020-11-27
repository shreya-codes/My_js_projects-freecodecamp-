var toggleBtn = document.querySelector('.sidebar-toggle')
console.log(toggleBtn);
const closeBtn = document.querySelector(".close-btn");
const sidebar = document.querySelector(".sidebar")
toggleBtn.addEventListener('click',toggl);
function toggl(){
    sidebar.classList.toggle('show-sidebar');
}
closeBtn.addEventListener("click",close);
function close(){
    sidebar.classList.remove("show-sidebar");
}