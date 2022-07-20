// initialize the count as 0
// listen for clicks on the increment button
// increment the count when the button is clicked
// change the count-el in the HTML
let counter = document.getElementById("count-el");
let finalNb = document.getElementById("final");
let recentNb = document.getElementById("recent");
function increment() {
    counter.textContent++;
}
function decrement() {
    if(counter.textContent>0)
    counter.textContent--;
}
function reset(){
    counter.textContent=0;
}
function save(){
    let nb = counter.textContent;
    finalNb.textContent = Number(finalNb.textContent)+ Number(nb);
    recentNb.textContent += nb + " - ";
    counter.textContent = 0;
}
function resetAll(){
    counter.textContent = 0;
    finalNb.textContent = 0;
    recentNb.textContent = "Previous entries: ";
}