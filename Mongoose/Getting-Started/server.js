const express= require("express");
const mongoose=require("mongoose");
//Port
const PORT= 5000 || process.env.PORT;

//instance of express
const app=express();

const URL="mongodb+srv://poshiyasoham2765:soham123@cluster0.dw2sd.mongodb.net/"
//connect to mongodb
const connectToDB=async()=>{
    try{
        await mongoose.connect(URL);
        console.log("MongoDB connected successfully");
    }catch(error){
        console.log("Error connecting to mongodb"+error);
    }
}
//call the function
connectToDB();

//Design schema
const userProfileSchema=new mongoose.Schema({
    username:String,
    age: Number,
    birthday: Date,
    isActive:Boolean,
    hobbies:[String],
    objectId:mongoose.Schema.Types.ObjectId,
    address:{
        street:String,
        city: String,
        postCode: Number,
    },
    customData:mongoose.Schema.Types.Mixed,
});
//Compile the schema to form the model
const User=mongoose.model("User",userProfileSchema);
//Start the server
app.listen(PORT,console.log('Server is running on PORT '+PORT));