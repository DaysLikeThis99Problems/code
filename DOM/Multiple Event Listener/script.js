//Access the button element
const buttonEl=document.getElementById('actionButton');

//single click
buttonEl.addEventListener("click",function(){
    console.log("Btn was clicked");
})

//double click
buttonEl.addEventListener("dblclick",function(){
    console.log("Btn was double clicked");
})

//mouse enter
buttonEl.addEventListener("mouseenter",function(){
    console.log("mouse enter");
})

//mouse leave
buttonEl.addEventListener("mouseleave",function(){
    console.log("mouse leave");
})