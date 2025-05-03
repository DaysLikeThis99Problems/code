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

// //CRUD operations
// //---CREATE DOC---
// //.save()
// const newUser=new User({
//     username:"masynctech",
//     age: 26,
//     birthday: new Date('2001-04-15'),
//     isActive:true,
//     hobbies:['Soccer','Reading','Coding'],
//     address:{
//         street: "789 Oak Street",
//         city:"Kumasi",
//         postCode:5551,
//     },
//     customData:{
//         country:"Ghana",
//     },
// });
// //Save the document
// newUser.save().then((data)=>{console.log(data);}).catch((e)=>console.log(e));

// //.create()
// User.create({
//     username:"emmanuel",
//     age: 26,
//     birthday: new Date('2001-04-15'),
//     isActive:true,
//     hobbies:['Soccer','Reading','Coding'],
//     address:{
//         street: "789 Oak Street",
//         city:"Kumasi",
//         postCode:5551,
//     },
//     customData:{
//         country:"Ghana",
//     },
// }).save().then((data)=>{console.log(data);}).catch((e)=>console.log(e));

// //.insertMany()
// User.insertMany([{
//     username:"prince",
//     age: 26,
//     birthday: new Date('2001-04-15'),
//     isActive:true,
//     hobbies:['Soccer','Reading','Coding'],
//     address:{
//         street: "789 Oak Street",
//         city:"Kumasi",
//         postCode:5551,
//     },
//     customData:{
//         country:"Ghana",
//     },
// },{
//     username:"Alice",
//     age: 26,
//     birthday: new Date('2001-04-15'),
//     isActive:true,
//     hobbies:['Soccer','Reading','Coding'],
//     address:{
//         street: "789 Oak Street",
//         city:"Kumasi",
//         postCode:5551,
//     },
//     customData:{
//         country:"Ghana",
//     },
// }]).then((data)=>{console.log(data);}).catch((e)=>console.log(e));

//read operations
//! ----.find()--------
// User.find()
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err));
//! ----.findOne()--------
// User.findOne({
//   username: "masynctech",
// })
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err));
// //! ----.findById()--------
// User.findById("652fcb47a0fc777e4baba1e5")
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err));

//Read Queries operation
//! ----.where()--------
// const findUsers = async () => {
//   try {
//     const users = await User.find().where("age").gte(27);
//     console.log(users);
//   } catch (error) {
//     console.log(error);
//   }
// };
// findUsers();
//! ----.sort()--------
// const findUsers = async () => {
//   try {
//     const users = await User.find().sort({ username: -1 });
//     console.log(users);
//   } catch (error) {
//     console.log(error);
//   }
// };
// findUsers();
//! ----.limit()--------
// const findUsers = async () => {
//   try {
//     const users = await User.find().limit(2);
//     console.log(users);
//   } catch (error) {
//     console.log(error);
//   }
// };
// findUsers();

// !======UPDATING DOCUMENTS -----
//!-----updateOne()--------

// const updateOneFn = async () => {
//   try {
//     const updatedStudent = await Student.updateOne(
//       { name: "Prince" },
//       { email: "prince2@gmail.com", age: 30 },
//       { new: true }
//     );
//     console.log(updatedStudent);
//   } catch (error) {
//     console.log(error);
//   }
// };
// updateOneFn();
//!-----findByIdAndUpdate()--------

// const updateDoc = async () => {
//   try {
//     const updatedStudent = await Student.findByIdAndUpdate(
//       "653104c135996c1e2f75a8c6",
//       { email: "bob2@gmail.com", age: 21, name: "Bob2" },
//       { new: true }
//     );
//     console.log(updatedStudent);
//   } catch (error) {
//     console.log(error);
//   }
// };
// updateDoc();
//!-----findByIdAndUpdate()--------

// const updateDoc = async () => {
//   try {
//     const updatedStudent = await Student.updateMany(
//       { age: { $gt: 20 } },
//       { premiumStudent: false },
//       { new: true }
//     );
//     console.log(updatedStudent);
//   } catch (error) {
//     console.log(error);
//   }
// };
// updateDoc();
//!-----findOneAndUpdate()--------

// const updateDoc = async () => {
//   try {
//     const updatedStudent = await Student.findOneAndUpdate(
//       { _id: "653104c135996c1e2f75a8c8" },
//       { premiumStudent: true, name: "Emma" },
//       { new: true }
//     );
//     console.log(updatedStudent);
//   } catch (error) {
//     console.log(error);
//   }
// };
// updateDoc();

// !======UPDATING DOCUMENTS -----
//!-----update operators()--------
const updateDoc = async () => {
    try {
      //Create the student
      // await Student.create({
      //   name: "Thomas",
      //   age: 20,
      //   subjects: ["Math"],
      //   score: 85,
      // });
      //! $set $unset
      // const student = await Student.findOneAndUpdate(
      //   { name: "Thomas" },
      //   {
      //     $set: { age: 23 },
      //     $unset: { score: 1 },
      //   },
      //   { new: true }
      // );
      // console.log(student);
      //! $addToset $Push
      //     const student = await Student.findOneAndUpdate(
      //       { name: "Thomas" },
      //       {
      //          $addToSet: { subjects: "Physics" },
      //         $push: { subjects: "Chemistry" },
      //       },
      //       { new: true }
      //     );
      //     console.log(student);
      //   } catch (error) {
      //     console.log(error);
      //   }
      // };
      // updateDoc();
  
      //!----$inc $mul-----
      //     const student = await Student.findOneAndUpdate(
      //       { name: "Thomas" },
      //       {
      //         // $inc: { age: -10 },
      //         $mul: { score: -2 },
      //       },
      //       { new: true }
      //     );
      //     console.log(student);
      //   } catch (error) {
      //     console.log(error);
      //   }
      // };
      // updateDoc();
      //!----$pop $pull-----
      // const student = await Student.findOneAndUpdate(
      //   { name: "Thomas" },
      //   {
      //     // $pop: { subjects: 1 },
      //     $pull: { subjects: "Math" },
      //   },
      //   { new: true }
      // );
      // console.log(student);
      //!----$min $max-----
      //     const student = await Student.findOneAndUpdate(
      //       { name: "Thomas" },
      //       {
      //         // $pop: { subjects: 1 },
      //         // $min: { age: 18 },
      //         $max: { age: 22 },
      //       },
      //       { new: true }
      //     );
      //     console.log(student);
      //   } catch (error) {
      //     console.log(error);
      //   }
      // };
      // updateDoc();
      //!----$currentDate----
      const student = await Student.findOneAndUpdate(
        { name: "Thomas" },
        {
          $currentDate: { lastModified: new Date() },
        },
        { new: true }
      );
      console.log(student);
    } catch (error) {
      console.log(error);
    }
  };
  // updateDoc();

// !======DELETING DOCUMENTS -----

const deleteDoc = async () => {
    try {
      //!-----findByIdAndDelete()--------
      // const result = await Student.findByIdAndDelete("6532889484f00e012a4ed8f7");
      // console.log(result);
      //!-----findOneAndDelete()--------
      // const result = await Student.findOneAndDelete({ name: "Alice" });
      // console.log(result);
      //!-----deleteMany()--------
      const result = await Student.deleteMany({ age: { $gt: 20 } });
      console.log(result);
    } catch (error) {
      console.log(error);
    }
  };
  // deleteDoc();

//Start the server
app.listen(PORT,console.log('Server is running on PORT '+PORT));