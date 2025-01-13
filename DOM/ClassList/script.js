//select the p element
const p=document.getElementById("textElement");
// p.classList.add('highlight','bold','italic');
// p.classList.add("bold");
// console.log(p);

//function to add class
function addClass(){
    p.classList.add("highlight","bold",'italic');
}

//removeClass
function removeClass(){
    p.classList.remove("highlight","bold",'italic');
}

//toggleClass
function toggleClass(){
    p.classList.toggle("italic");
};

//checkContains
function checkContains(){
    alert(p.classList.contains("highlight") ?'Contains Highlight':'Does not contain Highlight');
}

//replaceClass
function replaceClass(){
    if(p.classList.contains("italic")){
        p.classList.replace("italic","red-text");
    }else{
        p.classList.add("red-text")
    }
}

//listItem
function listItem(){
    alert("the first class is:"+ p.classList.item(0));
}

//getValue
function getValue(){
    console.log(p.classList.value);
    
}