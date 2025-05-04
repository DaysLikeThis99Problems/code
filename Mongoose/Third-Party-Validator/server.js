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

//!. Design Our Schema
const userSchema = new mongoose.Schema(
  {
    username: {
      required: true,
      type: String,
      set: (value) => {
        return validator.escape(value);
      },
    },
    email: {
      required: true,
      type: String,
      validate: {
        validator: (value) => {
          return validator.isEmail(value);
        },
      },
    },
    age: {
      type: String,
      required: true,
      validate: {
        validator: (value) => {
          return validator.isInt(value, { min: 0, max: 120 });
        },
        message: "Invalid Age",
      },
    },
  },
  {
    timestamps: true,
  }
);

//! Compile the schema to create the model
const User = mongoose.model("User", userSchema);

//!Create user
const createUser = async () => {
  try {
    await User.create({
      email: "emm@gmail.com",
      username: "John_Doe<",
      age: 200,
    });
  } catch (error) {
    console.log(error);
  }
};
createUser();


  
//Start the server
app.listen(PORT,console.log('Server is running on PORT '+PORT));