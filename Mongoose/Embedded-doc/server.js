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

//addressSchema
const addressSchema = new mongoose.Schema(
  {
    street: String,
    city: String,
    state: String,
    zip: Number,
  },
  {
    timestamps: true,
  }
);
//UserSchema
const userSchema = new mongoose.Schema(
  {
    name: String,
    email: String,
    address: addressSchema, //embedded approach
  },
  {
    timestamps: true,
  }
);

//!Models
const User = mongoose.model("User", userSchema);

const createUser = async () => {
  try {
    //create the user
    const newUser = await User.create({
      name: "Emmanuel",
      email: "emma@gmail.com",
      address: {
        street: "Kumasi OT2",
        city: "Camp",
        state: "Ghana",
        zip: 1122,
      },
    });
    console.log(newUser);
  } catch (error) {
    console.log(error);
  }
};

createUser();
//Start the server
app.listen(PORT,console.log('Server is running on PORT '+PORT));