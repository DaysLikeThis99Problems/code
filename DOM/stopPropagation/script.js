//Add event listener to the outer div
document.getElementById("outerDiv").addEventListener("click",function(event){
    alert("Outer Div clicked! Event Phase"+event.eventPhase);
},false); //Bubbling Phase

//Add event listener to the outer div
document.getElementById("middleDiv").addEventListener("click",function(event){
    alert("Middle Div clicked! Event Phase"+event.eventPhase);
    event.stopPropagation();//stop propagation
},false); //Bubbling Phase

//Add event listener to the outer div
document.getElementById("innerDiv").addEventListener("click",function(event){
    alert("Inner Div clicked! Event Phase"+event.eventPhase);
    event.stopPropagation();//stop propagation
},false); //Bubbling Phase