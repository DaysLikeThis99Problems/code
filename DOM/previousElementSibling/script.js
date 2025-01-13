//Select the List element with id "cherry"
const cherryEl=document.getElementById("cherry");

//Select the previous sibling element of "cherry" (should be "banana")
const previousFruitEl=cherryEl.previousElementSibling;
console.log(previousFruitEl);

//Select the next sibling element of "cherry" (should be "date")
const nextFruitEl=cherryEl.nextElementSibling;
console.log(nextFruitEl);
