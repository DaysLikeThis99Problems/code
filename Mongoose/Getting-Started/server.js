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
const bookSchema = new mongoose.Schema(
    {
      title: {
        type: String,
        required: true,
        set: (value) => value.trim(), //Trimming
      },
      author: {
        type: String,
        required: true,
        set: (value) => value.trim(), //Trimming
      },
      price: {
        type: String,
        required: true,
        set: (value) => Math.round(value * 100) / 100, //Rouding to 2 decimal places
      },
      tags: {
        type: [String],
        required: true,
        set: (value) => value.map((tag) => tag.toLowerCase()), //Convert to lowercase
      },
      url: {
        type: String,
        get: (value) => `https://masynctech.com/books/${value}`,
      },
    },
    {
      timestamps: true,
      toJSON: {
        virtuals: true,
      },
      toObject: {
        virtuals: true,
      },
    }
  );
  
  //! Compile the schema to create the model
  const Book = mongoose.model("Book", bookSchema);
  
  //!Create book
  // const createBook = async () => {
  //   try {
  //     const newBook = await Book.create({
  //       title: "Mongoose for everyone",
  //       author: "Masynctech Coding school",
  //       price: 19.99999,
  //       tags: ["MONGODB", "NODEJS", "Mongoose"],
  //       url: "mongoose-for-everyone",
  //     });
  //     console.log(newBook);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };
  // createBook();
  const fetchBooks = async () => {
    try {
      const books = await Book.find();
      console.log(books);
    } catch (error) {
      console.log(error);
    }
  };
  fetchBooks();
//Start the server
app.listen(PORT,console.log('Server is running on PORT '+PORT));