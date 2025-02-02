const express=require('express');
const app=express();
const {MongoClient,ServerApiVersion}=require('mongodb')
const PORT=5000;

//connect to mongodb
//1. Create the client
const client =new MongoClient("http://",{
    serverApi:{
        version:ServerApiVersion.v1,
        strict:true,
        deprecationErrors:true
    }
});

//function to connect
const connectDB=async()=>{
    try{
        await client.connect();
        console.log("MongoDB Connected successfully");
        
    }catch(error){
        console.log(error);
    }
}

//start the server
app.listen(PORT,()=>console.log('Server is running on port'+PORT));