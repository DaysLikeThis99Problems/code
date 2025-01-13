//Coding Challenge-1:Build A Simple Calculator
console.log("Coding Challenge-1:Simple Calculator");
//===Description:
//Create a calculator that performs basic 
//operations like addition, subtraction, 
//multiplication and division. Use  
//different types of functions, such as 
//function expression and arrow functions,
//for each operation.

//solution:
//1.Addition:-
const add=(a,b)=>{
    let results=a+b;
    return results;
};
console.log("Addition of 10 & 20 ="+add(10,20));

//2.Subtraction:-
const sub=(a,b)=>{
    let results=a-b;
    return results;
};
console.log("Subtraction of 50 & 20 ="+sub(50,20));

//3.Multiplication:-
const mul=(a,b)=>{
    let results=a*b;
    return results;
};
console.log("Multiplication of 10 & 20 ="+mul(10,20));

//4.Division:-
const div=(a,b)=>{
    let results=a/b;
    return results;
};
console.log("division of 80 & 20 ="+div(80,20));



//Coding Challenge-2:Character Counter Tool
console.log("Coding Challenge-2:Character Counter Tool");
//description:
//build a small application were users can 
//input text, and the tool displays the 
//length of the text,converts it to uppercase
//and lowercase, and slices or replaces parts 
//of the text.

//SOLUTION:

//length counter:-
function characterCount(text){
    let length=text.length;
    return length;
}
const results=characterCount("Javascript");
console.log("Characters Count:"+results)

const txtToLowerCase=(text)=>{
    let lowercase=text.toLowerCase();
    return lowercase;
}
console.log("Lower Case:"+txtToLowerCase('NODEJS'));

const txtToUpperCase=(text)=>{
    let lowercase=text.toUpperCase();
    return lowercase;
}
console.log("Upper Case:"+txtToUpperCase('nodejs'));

const slicedTxt=function(txt,start,end){
    let sliced=txt.slice(start,end);
    return sliced;
}
console.log("Slicing String:"+slicedTxt("NextJs",0,21));


//Coding Challenge-3:String Formatter
console.log("Coding Challenge-3:String Formatter");

//description:
//Design a tool that takes user input for a
//string and applies various transformation,
//like converting it to lowercase or 
//uppercase, counting characters, finding
//a word's index, and concatenating it with
//another String.


//SOLUTION:-
function formatString(str1,str2){
    let uppercaseStr1=str1.toUpperCase();
    let lowercaseStr2=str2.toLowerCase();
    let combine=uppercaseStr1+""+lowercaseStr2;
    return combine;
}

console.log(formatString("abbas","MASTAN"));



//Coding Challenge-4:BMI Calculator
console.log("Coding Challenge-4:BMI Calculator");

//description:
//Develop a function-based project where
//users input their height and weight, and
//the app calculates their BMI using a
//function that returns the result.Add 
//conditional statements to display health
//status based on the BMI value.

//SOLUTION:-
const calculateBMI=(weight,height)=>{
    let bmi=weight/(height*height);
    let status;
    if(bmi<18.5){
        status='Underweight'
    }if(bmi<24.9){
        status='Normal weight'
    }else if(bmi<29.9){
        status='Overweight'
    }else{
        status='Obese'
    }
    return status+",BMI="+bmi;
}

console.log("BMI Status: "+calculateBMI(85,1.82));



//Coding Challenge-5:Student Grading System
console.log("Coding Challenge-5:Student Grading System");

//description:
//Create a simple application that accepts
//student marks, calculates if the student
//has passed, failed, or performed exceptionally
//based on the defined criteria.
//-Features:-
//--Input for total possible marks and marks obtained.
//--Calculate if the student has passed(>=50%).
//--Calculate if the student performed exceptionally(>=80%)
//--Compare the student's marks against the class average.
//--Display results in user-friendly format.

//SOLUTION:-
function studentGradingSystem(totalMarks,ObtainedMark,classAverage){
    let passingCriteria=totalMarks*0.5;
    let exceptionalCriteria=totalMarks*0.8;
    let hasPassed=ObtainedMark>=passingCriteria;
    let hasPerformedExceptionally=ObtainedMark>=exceptionalCriteria;
    let isAboveAverage=ObtainedMark>classAverage;
    return{
        hasPassed,
        hasPerformedExceptionally,
        isAboveAverage,
    };
}

console.log(studentGradingSystem(500,410,350));