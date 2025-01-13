// Primitive Data types

//1.Numbers:
let age=28;
let price=19.99;

//2.Strings:
let greeting="Good morning";

//3.Boolean:
let isStudent=true;

// 4.undefined:
let futureGoal;
console.log(typeof futureGoal);
    //output:undefined

//5.Null:
let currentjob=null;

// To check datatype of variable:
console.log(typeof(age));


// Non-Primitives

//1.Arrays:
let fruits=["Apple","Banana","Kiwi"];
let mixeddata=[true,30,199.99,"Emmanuel",[1,2,3]];

//2.Objects
 
let person={
    firstname:'Emmanuel',
    lastname:'fkvwmf',
    age:31
};

//let,const and var

//1.let- can be reassigned
let person1={
    firstname: "Eden",
    lastname: "Titu",
    age:9.1,
};

let amount=40;
amount=100; //reassigned
console.log(amount);

//2.const-cannot be reassigned
const carName="hounda";
carName="Benz";
console.log(carName);//error will occur