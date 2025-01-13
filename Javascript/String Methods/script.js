// ways of creating strings

let singleQuoteString='Hello, this is a string with single quotes';
let doubleQuoteString='Hello, this is a string with double quotes';
let templateLiteralString='Hello, this is a string with template literals';

//str.length
let strlength=doubleQuoteString.length;
console.log(strlength);

//accessing characters
let firstChar=doubleQuoteString[1];

//ToLowerCase()
let toLowerCase=doubleQuoteString.toLowerCase();

//toUpperCase()
let toUpperCase=doubleQuoteString.toUpperCase();

//indexof
let positionOfSubstring= doubleQuoteString.indexOf("double");

//slice
let slicedString=singleQuoteString.slice(7,11);

//replace
let replacedStr=singleQuoteString.replace('Hello','Welcome');

//concat
let firstName="Jesus";
let LastName="Suresh";

let fullname=firstName.concat(" ",LastName);
//or
let fullname1=firstName+" "+LastName;

//template literals
let name="John";
let age=20;

let greeting='Hello.${name}, your age is ${age} years, good morning';