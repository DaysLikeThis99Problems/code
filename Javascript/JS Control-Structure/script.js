//IF STATEMENT
let age=10;

if(age>=16){
    console.log("You are eligible to drive");
}
else if(age>=18){
    console.log("You are eligible to vote");
}
else{
    console.log("You are too young to vote and drive");
}

//SWITCH STATEMENT
const day=1;
let dayName;
switch(day){
    case 1:
        dayName="Monday";
        console.log(dayName);
        break;
    case 2:
        dayName="Tuesday";
        console.log(dayName);
        break
    case 3:
        dayName="Wednesday";
        console.log(dayName);
        break;
    case 4:
        dayName="Thursday";
        console.log(dayName); 
        break;
    case 5:
        dayName="Friday";
        console.log(dayName); 
        break;
    case 6:
        dayName="Saturday";
        console.log(dayName);
        break;
    case 7:
        dayName="Sunday";
        console.log(dayName);
        break;
    default:
        dayName="Invalid day";
        console.log(dayName);
        break;
}

//FOR LOOP
// for(initializer,condition,increment/update){

// }
//count numbers from 1-10
for(let i=0;i<=10;i++){
    console.log(i);
}

//While Loop
//Initializer
//While(Condition){

    //Increment
//}

let count=1;//Initializer
while(count<=5){//While(Condition){
    //increment
    console.log(count);
    count++;
    
}
