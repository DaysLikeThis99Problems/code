//========"First"========
//------
//For Loops
//------

//Basic for loop to print numbers 0-5

for(let i=0;i<=5;i++){
    //code will run
    console.log(1);
}

//looping through an array to print its elements
const myFruits=['Apple','Banana','Kiwi'];
for(let i=0;i<myFruits.length;i++){
    console.log(myFruits[i]);
}

//Using 'break' to exit the loop early
for(let i=0;i<=10;i++){
    //code will run
    if(i===5){
        break;
    }
    console.log(i);
}

//Using 'continue' to skip an iteration
for (let i = 0; i <=10; i++) {
    if(i===3) continue
    console.log(i);
}

//Looping in reverse
for (let i = 10; i >0; i--) {
    if(i===3) continue
    console.log(i);
}



//========"Second"========
//------
//ForEach Loops
//------

const numbers=[1,2,3,4,5,6];
numbers.forEach(function(element,index,array) {
    console.log('Element',element);
    console.log('index',index);
    console.log('array',array);
})

//Using forEach to sum the elements of an array
let sum=0;
numbers.forEach(function(num){
    sum+=num;
})
console.log('The total sum is:',sum);

//Modifying array elements using forEach
const numbers1=[1,2,3,4,5,6,100];
const squares=[];
numbers1.forEach(function(num){
    squares.push(num*num)
})
console.log(squares);
console.log(numbers1);




//========"Third"========
//------
//Mapping (.map())
//------
const numbers2=[1,2,3,4,5,6];
const newNumArrSquare=numbers2.map(function(num,idx,arr){
    return num;
})
console.log("number2: "+newNumArrSquare);
const newNumArrSquare1=numbers2.map(function(num,idx,arr){
    return num;
})
console.log("number2: "+newNumArrSquare1);

//using map to convert an array of strings to uppercase
const words=['apple','pear','mango'];
const convertedWords=words.map(function(word){
    return word.toUpperCase();
})
console.log(convertedWords);





//========"Fourth"========
//------
//Mapping (.filter())
//------
const numbers3=[1,2,3,4,5,6];
const evenNumbers=numbers.filter(function(num){
    //filter logic here
    return num%2===0;
})
console.log(evenNumbers);

const gender=['male','female'];
const maleArr=gender.filter(function(gender){
    return gender==='male'
})
//Using filter to remove falsy values from an array
const mixedArr2=[0,1,'apple',null,'banana'];
const truthyValues=mixedArr2.filter(function(value){
    return Boolean(value);
})
console.log(truthyValues);





//========"Fifth"========
//------
//Mapping (.reduce())
//------
//using reduce to sum up all elements in an array
const numbers4=[1,2,3,4,5,6];
const sum1=numbers4.reduce(function(acc,current){
    //perform our logic
    return acc+current;
},0)

//Using reduce to find the maximum value in an array
const maxNum=numbers4.reduce(function(acc,current){
    if(current>acc){
        return current;
    }else{
        return acc;
    }
},0)

//Using reduce to count the frequency of elements in an array
const fruit=['Apple','Banana','Apple','Mango','Apple'];
const fruitCount=fruit.reduce(function(acc,current){
    if(acc[current]){
        acc[current]+=1;
    }else{
        acc[current]=1;
    }
    return acc;
},{});
console.log(fruitCount);





//========"Sixth"========
//------
//Multi-Dimensional Arrays
//------
//Creating a 2D array
const matrix=[
    [1,2,3],
    [4,5,6],
    [7,8,9]
]
//Access the elements
console.log(matrix[0][0]);
console.log(matrix[2][2]);

//Creating a 3D array
const threeDArray=[
    [
        [1,2],[3,4]],
        [[5,6],[7,8],
    ]
]
console.log(threeDArray[0][1][1]);
console.log(threeDArray[1][0][0]);
