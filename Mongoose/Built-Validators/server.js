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
        type: String,
        required: [true, "Please username is required"],
        unique: true,
        minLength: 3,
        maxLength: 10,
      },
      email: {
        type: String,
        required: [true, "Please email is required"],
        match: /@/,
      },
      age: {
        type: Number,
        min: 18,
        max: 65,
      },
      gender: {
        type: String,
        enum: ["Male", "Female", "Other"],
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
      await User.create({});
    } catch (error) {
      console.log(error);
    }
  };
  createUser();
  
//Start the server
app.listen(PORT,console.log('Server is running on PORT '+PORT));