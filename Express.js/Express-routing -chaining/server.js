const express = require("express");
const userRouter=require("./routes/userRouter");
const postRouter=require("./routes/postsRouter");
const app = express();
const PORT = 8082;
//Home Route
app.get("/", (req, res) => {
  res.json({
    message: "Welcome to the main app",
  });
});
//----USERS ROUTE----
app.use('/users',userRouter);
app.use('/posts',postRouter);
//start the server
app.listen(PORT, console.log(`Server is running on port ${PORT}`));