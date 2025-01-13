//Count value
let count=0;

//select elements

const counterEl=document.getElementById("counter-value");

// counterEl.innerHTML="100";

//Event Listeners

//Increase by 1
document.getElementById("increase-btn").addEventListener('click',function(){
    count++;
    // return count;
    counterEl.innerHTML=count;
    //in innerHTML you can use tags like h1 and p but only in "" or ''.
})

//decrease by 1
document.getElementById("decrease-btn").addEventListener('click',function(){
    count--;
    // return count;
    counterEl.textContent=count;
    //can't use tags in textContent.
})

//Reset
document.getElementById("reset-btn").addEventListener('click',function(){
    count=0;
    // return count;
    counterEl.innerHTML=count;
})