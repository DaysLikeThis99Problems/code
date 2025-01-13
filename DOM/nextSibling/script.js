//Get the container element
const containerEl=document.getElementById("container");

//Get all buttons within the container
const buttonEl=document.querySelectorAll("button");

//Loop through each button and change the text of its next sibling
buttonEl.forEach((button)=>{
    const nextElementEl=button.nextSibling;
    //Check if the next siblings is an element node
    console.log(nextElementEl);
    if(nextElementEl && nextElementEl.nodeType===3){
        nextElementEl.textContent="Changed Text";
    }
})