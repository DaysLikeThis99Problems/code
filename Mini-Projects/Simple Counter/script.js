//Count value
let count=0;

//select elements

const counterEl=document.getElementById("counter");

// counterEl.innerHTML="100";

//Event Listeners

//Increase by 1
document.getElementById("increaseBtn").addEventListener('click',function(){
    count++;
    // return count;
    counterEl.innerHTML=count;
    //in innerHTML you can use tags like h1 and p but only in "" or ''.
})

//decrease by 1
document.getElementById("decreaseBtn").addEventListener('click',function(){
    count--;
    // return count;
    counterEl.textContent=count;
    //can't use tags in textContent.
})

//Increase by 10
document.getElementById("increaseByTenBtn").addEventListener('click',function(){
    count=count+10;
    // return count;
    counterEl.innerHTML=count;
})

//Reset
document.getElementById("resetBtn").addEventListener('click',function(){
    count=0;
    // return count;
    counterEl.innerHTML=count;
})