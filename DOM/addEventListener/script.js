//-------Mouse event-----------

function addEvent(){
    console.log("click event is called");
}

document.getElementById("clickButton").addEventListener("click",addEvent);

document.getElementById("doubleClickButton").addEventListener("dblclick",function(){
    console.log("dbClickHandler event is called");
});

document.getElementById("hoverDiv").addEventListener("mouseover",function(){
    console.log("onMouseOverHandler event is called");
});

document.getElementById("hoverDiv").addEventListener("mouseout",function(){
    console.log("onMouseOutHandler event is called");
});

//--Keyboard event-----

document.getElementById("keyInput").addEventListener("keydown",function(){
    console.log("onkeydownHandler event is called");
});

document.getElementById("keyInput").addEventListener("keyup",function(){
    console.log("onkeyupHandler event is called");
});

document.getElementById("keyInput").addEventListener("keypress",function(){
    console.log("onkeypressHandler event is called");
});

//------form event-----

document.getElementById("myForm").addEventListener("submit",function(){
    console.log("onsubmitHandler event is called");
});

document.getElementById("formInput").addEventListener("focus",function(){
    console.log("onfocusHandler event is called");
});

document.getElementById("formInput").addEventListener("blur",function(){
    console.log("onblurHandler event is called");
});
