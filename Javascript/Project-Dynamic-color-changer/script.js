//Select the elements
const btn1El=document.querySelector(".btn1");
const btn2El=document.querySelector(".btn2");
const titleEl=document.querySelector(".title");
const resetEl=document.querySelector(".reset");
const bodyEl=document.querySelector("body");


//Add Event Listeners
btn1El.addEventListener('click',function(){
    bodyEl.style.backgroundColor="yellow";
});

btn2El.addEventListener('click',()=>{
    titleEl.style.fontSize="90px";
});

resetEl.addEventListener('click',()=>{
    bodyEl.style.backgroundColor="";
    titleEl.style.fontSize="30px"
});