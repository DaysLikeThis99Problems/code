//Add EventListener to the ul
document.getElementById("itemList").addEventListener("click",function(event){
    const clickedEl=event.target;
    //Checked if the clicked element is list item
    console.log(clickedEl.tagName);
    if(clickedEl.tagName==='LI'){
        const itemNumber=clickedEl.getAttribute("data-item");
        console.log('You clicked item '+ itemNumber);
    }
});