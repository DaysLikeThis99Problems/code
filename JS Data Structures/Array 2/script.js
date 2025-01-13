//============="First"============
//------------
//The Concept of Objects Being Passed by Reference
//------------

//Modifying Object Through a Different Reference
const person1={name:"Alice",age:2344};
console.log(person1);
const person2=person1;
//modify
person2.age=2134;
console.log(person2);
//Passing Object to a function
const incrementAge=(personObj)=>{
    personObj.age+=1;
};
//person Obj;
const bob={name:"Bob",age:40};
console.log("Before"+bob);
incrementAge(bob);
console.log("after"+bob);





//============="Second"============
//------------
//Objects in arrays
//------------

//Scenario:Managing a List of Students
//In this example, we'll create a simple list of students 
//where each student is an object with properties like
//'id','name' and 'grade'.
const student=[
    {id:1,name:"Bob",grade:"A"},
    {id:1,name:"Alice",grade:"B"},
];
//access student
const student1=student[0].name;
console.log(student1);
//Add new student
const addStudent=(id,name,grade)=>{
    const newStudent={id,name,grade};
    //push the new student into the students array
    student.push(newStudent);
};
addStudent(3,"Skinny","C");
//Upgrade a student
const updateStudentGrade=(id,newGrade)=>{
    //find the student by id
    const studentFound=student.find((student)=>{
        return student.id === id;
    });
    if(studentFound){
        studentFound.grade=newGrade;
    }else{
        console.log("Student not Found");
    }
};
updateStudentGrade(10,"Z");
console.log(student)






//============="Third"============
//------------
//Arrays in Objects
//------------

//Scenario:Managing a Simple To-Do List
//Here, we'll create a simple 'ToDoList' object that has 
//a 'tasks' array property. Each object inside the 'tasks'
//array will have properties like 'id','description' and
//'completed'.
const todoLists={
    title:"Todo List Application",
    tasks:[
        {id:1,description:"Buy Groceries",completed:false},
        {id:2,description:"Go To Gym",completed:true},
        {id:1,description:"Call Mon",completed:false},
    ],
};
//Accessing properties
todoTitle=todoLists.title;
//tasks
const allTasks=todoLists.tasks;
console.log(todoLists);

//Function to add a task
const addTask=(description)=>{
    //get new id
    const newId=todoLists.tasks.length+1;
    const newTask={
        id: newId,
        completed: false,
        description,
    };
    //push the new task into the original task
    todoLists.tasks.push(newTask);
};

//call fn
addTask("Programming");
//function  mark a task as completed
const markAsCompleted=(id)=>{
    //find the task
    const foundTask=todoLists.tasks.find((task)=>task.id===id);
    if(foundTask){
        foundTask.completed=true;
    }else{
        console.log("Task not found");
    }
};
markAsCompleted(3);
console.log(todoLists);






//============="Fourth"============
//------------
//Iterate through arrays using 'forEach()'
//------------

//Basic example
const fruits=[
    {name:"Apple",color:"red"},
    {name:"Banana",color:"yellow"},
    {name:"cherry",color:"red"}
];
fruits.forEach((currentVal,index,array)=>{
    console.log(currentVal,index,array);
})

//Case Study: Online Shopping Cart Calculation
//Suppose you are working on an e-commerce website, and 
//you need to calculate the total price of items in a user's
//shopping cart.Each item in the cart is represented as an
//object in an array with properties such as 'name','price',
//and 'quality'.Your task is to calculate the total cost 
//of items int he cart and also list the names of all items
//in the cart for the user's review.

//Initial Data
const cart=[
    {name:"Laptop",price:1000,qty:1},
    {name:"Phone",price:500,qty:2},
    {name:"TV",price:1500,qty:1},
    {name:"Headphones",price:100,qty:3}
];
//Calculate the total cost of the items in the cart.
let totalCost=0;
cart.forEach((item)=>{
    //sum all the product prices
    totalCost+=item.price*item.qty;
});

//List all the names of the products
let totalItems=0;
cart.forEach((item)=>{
    totalItems+=item.qty;
});
console.log(totalItems);







//============="Fifth"============
//------------
//Iterate through arrays using 'map()'
//------------


//Suppose we have an array of products in a shopping cart.
//Each object represents a product with a name and price.
//We ant to apply a 10% discount to all products.

//Initial Data
const shoppingCart=[
    {name:"Laptop",price:1000,qty:1},
    {name:"Phone",price:500,qty:2},
    {name:"TV",price:1500,qty:1},
    {name:"Headphones",price:100,qty:3}
];
//Add 10% discount
const discountedCart=shoppingCart.map((product)=>{
    return{
        name: product.name,
        price: product.price*0.9,
    };
});
console.log(discountedCart);
//get all the product names only
const productNamesOnly=shoppingCart.map((product)=>{
    return{
        name: product.name,
    };
});
console.log(productNamesOnly);
console.log(shoppingCart);





//============="Sixth"============
//------------
//Iterate through arrays using 'filter()'
//------------

//filtering Active Users
const users=[
    {
        id:1,
        isActive:false,
        name:"Bob"
    },
    {
        id:2,
        isActive:true,
        name:"Emmanuel"
    },
    {
        id:3,
        isActive:false,
        name:"Alice"
    },
];

//filter out active users
const activeUsers=users.filter((user)=>{
    return user.isActive===true;
});
console.log(activeUsers);
console.log(users);

//Transaction Above a Certain Amount
const transactions=[
    {id:1,amount:50},
    {id:2,amount:150},
    {id:3,amount:200},
];
//filter out all amount above 100
const largeTransactions=transactions.filter(
    (transaction)=>transaction.amount>100
);
console.log(largeTransactions);





//============="Seventh"============
//------------
//Transformation and Manipulation using 'splice()'
//------------

//Remove inactive user
//Find the index of the user to be removed
const usersArr=[
    {
        id:1,
        isActive:false,
        name:"Bob"
    },
    {
        id:2,
        isActive:true,
        name:"Emmanuel"
    },
    {
        id:3,
        isActive:false,
        name:"Alice"
    },
];
const indexToRemove=userArr.findIndex(
    (user)=>user.id===1 && !user.isActive
);
//use splice
if(indexToRemove!== -1){
    usersArr.splice(indexToRemove,1);
}

//Managing playlist
//case study: You're developing a playlist feature for a
//music streaming app. Users can add and remove songs to 
//their playlists.Each playlist is an array of song objects.
//You have to implement features that allow the user to
//delete a song,move a song up or down the playlist, and
//insert a song at a particular index.

//solution:
const playlist=[
    {id:"s1",title:"Song 1",artist:"Artist A"},
    {id:"s2",title:"Song 2",artist:"Artist B"},
    {id:"s3",title:"Song 3",artist:"Artist C"},
    {id:"s4",title:"Song 4",artist:"Artist D"},
];

//Remove song of id of s1
const songIndexToRemove=playlist.findIndex(function(song){
    return song.id==="s1";
});
console.log(songIndexToRemove);

//using splice 
if(songIndexToRemove !==-1){
    playlist.splice(songIndexToRemove,1);
}
console.log(playlist);

//Move a song of id s1 to third position
const indexToMove=playlist.findIndex((song)=>song.id==="s2");
if(indexToMove!== -1){
    const [songToMove]=playlist.splice(indexToMove,1);
    playlist.splice(2,0,songToMove);
}
console.log(playlist);
//insert new song 
const newSong={id:"s5",title:"Song 5",artist:"Artist E"};
playlist.splice(0,0,newSong);
console.log(playlist);





//============="Eighth"============
//------------
//Object.assign()
//------------

//updating properties of students in a class
const studentsArr=[
    {id:1,name:"Alice",grade:"A"},
    {id:2,name:"Bob",grade:"B"},
];
//Grade updates
const gradeUpdates=[{grade:"A+"},{grade:"A"}];
//update the students
const updatedStudents=studentsArr.map((student,index)=>{
    return Object.assign({},student,gradeUpdates[index]);
});
console.log(updatedStudents);






//============="Ninth"============
//------------
//Search and filter using 'find()'
//------------

//Finding the first Patient with a Specific Ailment in a Hospital Database
const patients=[
    {id:101,name:"sarah",disease:"Cold"},
    {id:102,name:"Mike",disease:"Fever"},
    {id:103,name:"Lucy",disease:"Cold"},
];
//Patient with cold
const patientWithCold=patients.find((patient)=>patient.disease==="Cold");
console.log(patientWithCold);




//============="Tenth"============
//------------
//Search and filter using 'some()'
//------------
const patients2=[
    {id:101,name:"sarah",disease:"Cold"},
    {id:102,name:"Mike",disease:"Fever"},
    {id:103,name:"Lucy",disease:"Cold"},
];
//Patient with cold
const patientWithCold2=patients.some((patient)=>patient.disease==="Cold");
console.log(patientWithCold2);






//============="Eleventh"============
//------------
//Search and filter using 'every()'
//------------
//conforming All Students Passed Their Exam
const patients3=[
    {id:101,name:"sarah",grade:"A"},
    {id:102,name:"Mike",grade:"B"},
    {id:103,name:"Lucy",grade:"A"},
];
const allPassed=patients3.every((student)=>student.grade==="F");
console.log(allPassed);