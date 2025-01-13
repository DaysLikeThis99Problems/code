//======="First"=====
//---------
//Creating Array using Array Literal
//---------

//syntax:-
const studentAges=[20,30,25,50];

//Declaring an array of strings
const daysOfTheWeek=['Monday','Tuesday','Wednesday','Thursday','Friday'];
console.log(daysOfTheWeek);

//Declaring an array of mix types
const mixedTypes=[42,'life',true];
console.log(mixedTypes);

//Declaring an array of with data
const emptyArr=[];



//======="Second"=====
//-------
//Creating Array using Array Constructor
//-------

//Create an Array with empty data
const emptyArray=new Array();

//Creating an array with a predefined size(5)
const sizeDefinedArr=new Array(5);

//Creating an array with elements
const fruitArr=new Array('Apple','Banana','Kiwi');

//Creating an array with mixed types
const mixDataType=new Array(1,false,'Soham');



//======="Third"=====
//-------
//Creating Array using Array.of()
//-------

//Creating an array with numbers
const numArr=Array.of(1,2,3,4);

//Creating an array with strings
const strArr=Array.of('Apple','Banana','Kiwi');

//Creating an array with mixed types
const mixedArr=Array.of('Apple','Banana','Kiwi',false,true,20);



//======="Fourth"=====
//-------
//Creating Array using Array.from()
//-------

//cloning array
const originalArr=[1,2,3];
const clonedArr=Array.from(originalArr);

//creating an array from an array-like object
const arrayLike={0:'a',1:'b',2:'c',length:3}
console.log(arrayLike);
const convertedArr=Array.from(arrayLike);
console.log(convertedArr);




//======="Fifth"=====
//-------
//Accessing Array
//-------

const studentAges1=[20,30,25,50];
const firstAge=studentAges[studentAges.length-1];




//======="Sixth"=====
//-------
//Using push method
//-------

const fruits=['Apple','Banana'];
const newArrayOfFruits=fruits.push('Kiwi');
console.log(newArrayOfFruits);

//.unshift() to add element at beginning
const newArrayOfFruits1=fruits.unshift('Kiwi');



//======="Seventh"=====
//-------
//Using pop method
//-------
const animal=['Cat','Dog','Elephant'];
//.pop()
const popedAnimal=animal.pop();
console.log(popedAnimal);
//removing from beginning by .shift()
const shiftingAnimal=animal.shift();



//======="Eighth"=====
//-------
//Array Size (.length)
//-------
const colors=['Red','Yellow','Green','Black'];
const arrayLength=colors.length;
//Modify the length of the array
colors.length=2;
console.log(colors);
