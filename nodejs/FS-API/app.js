const fs=require("fs");

//Read a file
//1.
// //Synchronous
// const dataBuffer=fs.readFileSync("./sample.txt");
// const content=dataBuffer.toString();
// console.log(content);

//2.
// //Asynchronous
// fs.readFile("./sample.txt","utf-8",(err,content)=>{
//     if(err){
//         console.log(err);
//         throw err;
//     }else{
//         console.log(content);
//     }
// });

//3.
// //write to a file
// fs.writeFile(",/new.txt","some new content",(err)=>{
//     if (err) {
//         console.log(err);
//         return;
//     }else{
//         console.log("File has been written");
//     }
// });

//4.
// //Appending to a file
// fs.appendFile("./new.txt","Appended content",(error)=>{
//     if(error){
//         console.log(error);
//     }
//     else{
//         console.log("File contented appended");
//     }
// });

//5.
// //Checking if a File Exists
// fs.access("./new.txt",fs.constants.F_OK,(error)=>{
//     if(error){
//         console.log("File does not exists");
//     }
//     else{
//         console.log("File Exists");
//     }
// });

//6.
// //Delete a file
// fs.unlink("./new.txt",(error)=>{
//     if(error){
//         console.log(error);
//         return;
//     }
//     else{
//         console.log("File has been deleted");
//     }
// });

//7.
//Using promise
const fs2=require("fs/promise");

// try{
//     const content=fs2.readFile("./sample.txt","utf-8");
//     console.log(content);
// }catch(error){
//     console.log(error);
// }

const readFileContent=async()=>{
    try{
        const content=await fs2.readFile("./sample.txt","utf-8");
        console.log(content);
    }
    catch(error){
        console.log(error);
        
    }
};
readFileContent();