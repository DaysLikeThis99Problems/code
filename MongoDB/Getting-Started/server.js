const express=require('express');
const app=express();
const {MongoClient,ServerApiVersion}=require('mongodb')
const PORT=5000;
//Password: KeNtcQxXY3lj0ZCr
//username: poshiyasoham2765
//Password of Cluster0: 8WBGP0EawhwBsr5P
//mongodb url: mongodb+srv://poshiyasoham2765:KeNtcQxXY3lj0ZCr@learning-db-cluster.r1lhk.mongodb.net/studentDB
//mongodb+srv://poshiyasoham2765:<db_password>@cluster0.dw2sd.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0

//connect to mongodb
//1. Create the client
const client =new MongoClient("mongodb+srv://poshiyasoham2765:8WBGP0EawhwBsr5P@cluster0.dw2sd.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0",{
    serverApi:{
        version:ServerApiVersion.v1,
        strict:true,
        deprecationErrors:true
    },
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
//Run the function
connectDB();

//start the server
app.listen(PORT,()=>console.log('Server is running on port:'+PORT));