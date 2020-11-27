var btn = document.querySelectorAll(".btn");
var count= document.getElementById('value');
count=0;
btn[0].addEventListener('click',decrease);
btn[1].addEventListener('click',reset);
btn[2].addEventListener('click',increase);

function decrease(e){
    count -=1;
    value.style.color = "red";
    value.textContent=count;}
function reset(e){
    count = 0;
    value.style.color = "#222";
 value.textContent=count;}
function increase(e){
    count +=1;
    value.style.color = "green";
    value.textContent=count;
}
