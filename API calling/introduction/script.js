// //sync === blocking code
// console.log("Step-1: Start boiling");
// console.log("Step-2: Add pasta to the pot");
// console.log("Step-3: Stir and wait for 10 minutes");
// console.log("Step-4: Drain the pasta and serve");

// function blockingTasks(){
//     console.log('Step-1 Start a long-running task');
//     //simulate a blocking task
//     const startTime=Date.now();
//     while(Date.now()-startTime<5000){

//     }
//     console.log("Step-2: Long-running task finished");
    
// }
// console.log('Before calling the blocking task');
// blockingTasks();
// console.log("After the blocking task");



// //Async code
// console.log("Task 1");
// setTimeout(()=>{
//     console.log("Task 2 (delay)");
// },2000);
// console.log("Task 3");




// //weather application
// //API(mimic)
// //Our frontend app

// function fetchData(callback) {
//     //operation API(mimic)
//     console.log("Fetching weather data....");
//     //API - Simulating Async operation(http)
//     setTimeout(()=>{
//         console.log("weather data fetched successfully!");
//         callback();  
//     },2000);
// }

// function processData() {
//     console.log("Processing the weather data to display temperature and conditions");
// }

// fetchData(processData);






//Components of HTTP Request
//HTTP: Hypertext Transfer Protocol
//Method(HTTP Verb)
//GET- Retrieve data
//POST- sending data to server
//PUT- Update
//DELETE- Deleting
//URL-Uniform Resource Locator- https:///example.com//APi
//Headers
//Body






// //First HTTP client
// //fetch- default
// //axios- third party

// //Making http request
// fetch("https://jsonplaceholder.typicode.com/posts").then((response)=>{
//     return response.json().then((posts)=>{
//         console.log("Posts fetched successfully",posts);
        
//     });
// }).catch((error)=>{
//     console.log('Error fetching posts',error);
// });






// //Callback function example

// //Fetch user details - API/ https://jsonplaceholder.typicode.com/users/2
// function fetchUserData(callback){
//     //make real http request
//     fetch('https://jsonplaceholder.typicode.com/users/2').then((response)=>{
//         return response.json().then((userData)=>{
//             console.log('User details fetched',userData);
//             //callback
//             callback(userData.id)
//         });
//     })
//     .catch((error)=>{
//         console.log(error);
//     });
// }


// //User's posts- https://jsonplaceholder.typicode.com/posts?userId=2
// function fetchUserPosts(userId){
//     //make real http request
//     fetch('https://jsonplaceholder.typicode.com/posts?userId='+userId).then((response)=>{
//         return response.json().then((posts)=>{
//             console.log("User's posts",posts);
            
//         });
//     })
//     .catch((error)=>{
//         console.log(error);
//     });
// }
// fetchUserData(fetchUserPosts);








// //===========Promise==========
// //1.Create the promise
// const myPromise=new Promise((resolve,reject)=>{
//     //Perform async task
//     let success=false;
//     if (success) {
//         resolve("Operation successful");//Fulfilled
//     }else{
//         reject("Operation Failed");
//     }
// })
// //2.Consume the promise
// myPromise.then((data)=>{
//     console.log(data);
// }).catch((error)=>{console.log(error);})










// //Promise Example
// //Create Promise
// //2.Consume Promise
// const fetchDataPromise=fetch("https://jsonplaceholder.typicode.com/albums");

// //consume
// fetchDataPromise.then((response)=>{
//     return response.json().then((data)=>{
//         console.log(data);
//     })
// }).catch((error)=>{
//     console.log(error);
// })







// //==============Async/Await=============
// async function fetchAlbums() {
//     try{
//         //success
//         const albumsResponse=await fetch("https://jsonplaceholder.typicode.com/albums");
//         const albums=await albumsResponse.json();
//         console.log(albums);
//     }catch(error){
//         //failure
//         console.log(error);
//     }
// }
// fetchAlbums();