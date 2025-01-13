//How to create an array
let fruits=["apple","banana","mango","kiwi"];

//push
fruits.push("pineapple");

//Kow to access array data
let accessApple=fruits[0];
let accessBanana=fruits[1];
let accessMAngo=fruits[2];

//pop
let books=["The Hobbit","Nodejs","HTML"];
// books.pop();
// console.log(books);
// books.pop();
// console.log(books);

//shift
books.shift();
console.log(books);

//unshift
books.unshift("MERN Stack");
console.log(books);

//concat
const colors1=['red','blue'];
const colors2=['green','yellow'];

const allColors=colors1.concat(colors2);

//slice
const techCompanies=["Google","Amazon","Facebook","Apple","Netflix"];
const selectedCompanies= techCompanies.slice(1,4);
console.log(selectedCompanies);
console.log(techCompanies);

//.length
const totalCompanies=techCompanies.length;
console.log(totalCompanies);

//Array Transformation: ForEach():
let numbers=[1,2,3,4];
const newNumbers=numbers.forEach(function (num) {
    const doubled =num*2;
    console.log(doubled);
});

//Array of objects
const products=[
    {name:"Laptop",stock:5},
    {name:"Phone",stock:10},
    {name:"Tablet",stock:3},
];

products.forEach((individualProducts)=>{
    console.log('Product: '+individualProducts.name+' & Stocks: '+individualProducts.stock);
});


//Array Transformation: map()
    //creates a new array
    //transform the elements

let nums=[1,2,3,4];

const doubledArray=nums.map(function (num) {
    return num*2;
});

console.log('doubled: '+ doubledArray);
console.log("Original array: "+nums);

//Apply 10% discount on the price
const products1=[
    {name:"Laptop",stock:5,price:1000},
    {name:"Phone",stock:10,price:500},
    {name:"Tablet",stock:3,price:300},
];
const discountedPrices=products1.map((product)=>{
    return{
        name: product.name,
        stock: product.stock,
        price: product.price*0.9,
    }
});
console.log(discountedPrices);


//Array Transformation: reduce()

const numbers1=[1,2,3,4,5,6];
const totalSum=numbers1.reduce(function(accumulator,currentValue){
    return accumulator+currentValue;
},0); //0 is initializer ans=21 if you use 10 then ans=31

const product2=[
    {name:"Laptop",stock:5,price:1000,isOutOfStock:false},
    {name:"Phone",stock:10,price:500,isOutOfStock:true},
    {name:"Tablet",stock:3,price:300,isOutOfStock:true},
];
const totalValue= product2.reduce(function(acc,product){
    return acc+product.stock*product.price
},0);
console.log(totalValue);



//Array Transformation: find()
const number2=[1,2,3,4,5,6];
const foundNumber=number2.find(function(num){
    return num>5;
});
console.log(foundNumber);
