const express=require("express");
//instance
const app=express();
//Create the PORT
const PORT=8082;

//serve static files
// app.use(express.static())

//===pass incoming data
app.use(express.json());
//app.use(express.urlencoded())

//======APP-LEVEL-MIDDLEWARES=======
//Logging details of every request
const logRequest=((req,res,next)=>{
    console.log('Request received at: '+new Date().toISOString()+' for '+req.method+' to '+req.path);
    //call next
    next();
});
app.use(logRequest);
//Home Route
app.get('/',(req,res)=>{
    console.log(req.body);
    res.json({
        message:'Welcome to this app',
    });
});
//Create a book
app.get('/books',(req,res)=>{
    res.json({
        message:'Built in middlewares demo',
    });
});
//start the server
app.listen(PORT,()=>{
    console.log('Server is running on '+PORT);
});
