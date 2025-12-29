let totalCounter = document.getElementById("counter");
let removeBtn = document.getElementById("remove");
let addBtn = document.getElementById("add");

removeBtn.addEventListener("click",()=>{
    let newVal=parseInt(totalCounter.innerText)-1;
    totalCounter.innerText=newVal;
})

addBtn.addEventListener("click",()=>{
    let newVal=parseInt(totalCounter.innerText)+1;
    totalCounter.innerText=newVal;
})