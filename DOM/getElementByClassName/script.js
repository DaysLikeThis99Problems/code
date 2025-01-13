//Selecting all elements with the class name="fiction"

const fictionBooksEl=document.getElementsByClassName("fiction");

//Selecting all elements with the class name="non-fiction"
const nonFictionBooksEl=document.getElementById("non-fiction");
const nonFictionBooksInSectionEl=document.getElementsByClassName("book non-fiction");

const fictionBooksElArr=Array.from(fictionBooksEl);
const fictionBooksElTitle=fictionBooksElArr.map((el)=>el.innerHTML);
console.log(fictionBooksElTitle);