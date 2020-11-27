var openy = document.querySelector(".modal-btn");
var modall = document.querySelector(".modal-overlay");
var closy = document.querySelector(".close-btn");
openy.addEventListener("click",opens);
function opens(){
    modall.classList.add("open-modal");
}
closy.addEventListener("click",closee);
function closee(){
    modall.classList.remove("open-modal");
}
// const modalBtn = document.querySelector(".modal-btn");
// const modal = document.querySelector(".modal-overlay");
// const closeBtn = document.querySelector(".close-btn");

// modalBtn.addEventListener("click", function () {
//   modal.classList.add("open-modal");
// });
// closeBtn.addEventListener("click", function () {
//   modal.classList.remove("open-modal");
// });