//Creating objects
const person={
    name:"Alice",
    age:25,
    city:"New York",
}

//Adding properties to object
//======Dot notation:
person.isMArries=false;
person.country="USA";

//======Bracket notation
person["hobby"]="Coding";
person["courses"]=["Javascript","Nodejs","HTML"];
console.log(person);

//Accessing object properties
//Dot Notation
const personName=person.name;
const personAge=person.age;
const personCourses=person.courses;
console.log(personName);

//Bracket notation
const personHobby=person["hobby"];
console.log(personHobby);

//Object.keys
const keys=Object.keys(person);
console.log(keys);
console.log(keys.length);

//Object.values
const car={
    brand:"Honda",
    model:"Accord",
    year:2025,
};

const values=Object.values(car);
console.log(values);

//hasOwnProperties
const hasProperties=car.hasOwnProperty("brand");
const hasProperties1=car.hasOwnProperty("version");
console.log(hasProperties);
console.log(hasProperties1);

//Object.assign
const targetObj={ name:"Thomas" };
const sourceObj={ age:30, country:"USA" };
const results=Object.assign(targetObj,sourceObj);

//Delete operator
delete car.brand;

//object.freeze
console.log(car);
// Object.freeze(car);
// console.log(car);
//modify
car.make="Nissan";
console.log(car);

//Nesting objects
const user={
    name:"Prince",   
    age: 30,
    address:{
        street: "123 Main Street",
        city: "New York",
        country:{
            name:"USA",
            code:"US",
        },
    },
};

console.log(user);

//access nested object properties
const userName=user.name;
const userAddress=user.address.street;
const userAddressCountryName=user.address.country.name;
const userAddressCountryName1=user["address"]["country"]["name"];
console.log(userAddressCountryName1);

//Objects in an Array
const userObj=[
    {name:'Alice', age:30, city:"New York"},
    {name:'Bob', age:25, city:"Sans"},
    {name:'Charlie', age:26, city:"Chicago"},
];

//Accessing properties
const firstUser=userObj[0];
const secondUser=userObj[1];

//Add new user to userObject
//use userObj.push(name:'David', age:22, city:"Brooklyn")
// use to put david at first userObj.unshift
userObj[0].name="Cici";
const aliceData=userObj[0].name;
console.log(aliceData);
