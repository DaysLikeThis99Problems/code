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

//studentSchema
const studentSchema = new mongoose.Schema(
  {
    name: String,
    age: Number,
    grade: String,
  },
  {
    timestamps: true,
  }
);
//clssroomSchema
const classroomSchema = new mongoose.Schema(
  {
    className: String,
    students: [studentSchema],
  },
  {
    timestamps: true,
  }
);

//!Models
const Student = mongoose.model("Student", studentSchema);
const Classroom = mongoose.model("Classroom", classroomSchema);

// const createClassroom = async () => {
//   try {
//     //create the classroom
//     const newClassroom = await Classroom.create({
//       className: "Math 101",
//       students: [
//         { name: "Alice", age: 20, grade: "A" },
//         { name: "Bob", age: 22, grade: "B" },
//       ],
//     });
//     console.log(newClassroom);
//   } catch (error) {
//     console.log(error);
//   }
// };

// createClassroom();

// !addStudentToClassroom
const addStudentToClassroom = async () => {
  try {
    //Find the classroom and update
    const classroomUpdated = await Classroom.findByIdAndUpdate(
      "6533562edce067c10b5053d3",
      {
        $addToSet: { students: { name: "Agnes", age: 21, grade: "A" } },
      },
      { new: true }
    );
    console.log(classroomUpdated);
  } catch (error) {
    console.log(error);
  }
};
addStudentToClassroom();

//Start the server
app.listen(PORT,console.log('Server is running on PORT '+PORT));