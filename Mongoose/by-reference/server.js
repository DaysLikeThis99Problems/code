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

//authorSchema
const authorSchema = new mongoose.Schema(
  {
    name: String,
  },
  {
    timestamps: true,
  }
);
const Author = mongoose.model("Author", authorSchema);
//bookschema
const bookSchema = new mongoose.Schema(
  {
    title: String,
    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Author", //Referencing
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

//!Models
const Book = mongoose.model("Book", bookSchema);
//!-----Create Author---
// const createAuthor = async () => {
//   try {
//     await Author.create({ name: "Masynctech" });
//   } catch (error) {
//     console.log(error);
//   }
// };
// createAuthor();
//!-----Create Author
// const createBook = async () => {
//   try {
//     await Book.create({
//       title: "MERN for everyone",
//       author: "6533a2799c7f3d749dc61c52",
//     });
//   } catch (error) {
//     console.log(error);
//   }
// };
// createBook();
//!-----fetch books
const fetchBooks = async () => {
  try {
    const books = await Book.find().populate("author");
    console.log(books);
  } catch (error) {
    console.log(error);
  }
};
fetchBooks();

//Start the server
app.listen(PORT,console.log('Server is running on PORT '+PORT));