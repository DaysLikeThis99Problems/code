
//Steps of creating and using a function(Function declaration)

//Define the function (declared)
function addNumbers(){
    let a=10;
    let b=20;

    //write our code
    //Write our code in the function
    let results=a+b;
    console.log(a+b);

}
//Call/use the function //function invocation
addNumbers();

//Function with parameters

function addNum(a,b){
    console.log(a+b);
}

addNum(100,120);
addNum(500,1120);

// Using Return keyword
function addingNum(a,b){
    let results=a+b;
    return "results"+results;
}

console.log(addingNum(300,801));

// Function Expression
const addingNum1=function(a,b){
    let results=a+b;
    return "results"+results;
}

console.log(addingNum(300,801));

//Arrow Function
const addNums=(a,b)=>{
    let results=a+b;
    return results;
}
console.log(addingNum(300,801));

//!==========OR=============!
const addNums1=(a,b)=>a+b;

console.log(addingNum(300,801));


//anonymous function
//IIF

//declared
(function(){
    console.log("Hello");
})();

(function(a,b){
    let results=a+b;
    console.log(results);
})(2,3);

((a,b)=>{
    let results=a+b;
    console.log(results);
})(10,20);

//Default parameters
const multiply=function(a=1,b=2){
    const results=a*b;
    console.log(results);
};
multiply(10);