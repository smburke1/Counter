const count = document.getElementById("count");
const decrease = document.getElementById("Decrease");
const increase = document.getElementById("Increase");
const reset = document.getElementById("Reset");
let startPoint = 0;

function buttonClick() {
    decrease.addEventListener("click", function() {
        startPoint--;
        count.innerHTML = startPoint; 
    })
    increase.addEventListener("click", function() {
        startPoint ++;
        count.innerHTML = startPoint; 
    })
    reset.addEventListener("click", function(){
        startPoint = 0;
        count.innerHTML = startPoint; 
    })
}
buttonClick();  

function colorChange() {
    increase.addEventListener("click", function(){
        if (startPoint < 0) {
            count.style.color= "red"}
        else if (startPoint > 0) {
            count.style.color = "green"}
            else {
            count.style.color = "black"}
   })
   decrease.addEventListener("click", function(){
    if (startPoint < 0) {
        count.style.color= "red"}
    else if (startPoint > 0) {
        count.style.color = "green"}
        else {
        count.style.color = "black"}
})
    reset.addEventListener("click", function(){
        count.style.color = "black";
    })
}

colorChange();