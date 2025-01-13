//======="First"=========
//-----------
//Arrow function
//-----------

//Basic syntax:-
function multiply(a,b) {
    return a*b;   
}

const multiply1=(a,b)=>a*b;
const result=multiply1(2,3);

//Block body syntax:-
const greet=(name)=>{
    return 'Hello, '+name;
};
const greeting=(name)=>'Hello, '+name;
const greetFn=greet("Soham");

//Single Parameter, No Parantheses:-
const square=(x)=>x*x;
const squareFn=square(5);

//No Parameters
const random=()=>Math.random();

//Object Literal Return
const getUser=()=>{
    return{
        name:'100HAM',
        age:10
    };
};

const getUser1=()=>({ name:"100HAM",age:30});
const getUserFn=getUser1();
console.log(getUserFn);







//======="Second"=========
//-----------
//"let" and "const" in javascript
//-----------

//hoisting
//using var
function hoistingIssue(){
    console.log(a);
    var a=10;
    console.log(a);
}
console.log("");
hoistingIssue();

//Block Scope:
//using var:-
for(var i=0;i<3;i++){
    console.log(i);
}
console.log(i);

//Immutability
//using var and let
const x=10;
// x=20;
console.log(x);






//======="Third"=========
//-----------
//Destructing in JavaScript ES6
//-----------

//basic:-
const numbers=[1,2,3,4];
const [first,second,third,fourth]=numbers;
console.log(second);
console.log(numbers[1]);

//swap variables
let a=1;
let b=2;
[a,b]=[b,a];
console.log(a,b);

//Object Destructuring
//Extract user data
const user={name:"100HAM",age:10,email:"poshiyasoham2765@gmail.com"};
console.log(user.name);

//Destructing in Function Parameters
function greet2(userObj){
    console.log('Hello, '+userObj.name+', your age is '+userObj.age);
}
greet2({name:"soham",age:-22});

const myUser={
    name:"John",
    age:30,
};
greet2(myUser);

//Nested Destructing
const userData={
    id:1,
    info:{
        name:"100HAM",
        age:134,
    },
};
console.log(userData.info.name);

const {id,info:{name,age},}={
    id:1,
    info:{
        name:"100HAM",
        age:332,
    },
};
console.log(age);
