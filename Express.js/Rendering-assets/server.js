const express=require("express");
const path=require('path')
const app=express();
const PORT=8082
//Serve the static files/folder
app.use(express.static(path.join(__dirname,'public')));

//Render Home page/route
app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'view','home.html'));
});
//Render About page/route
app.get('/about',(req,res)=>{
    res.sendFile(path.join(__dirname,'view','about.html'));
});
//Render Contact page/route
app.get('/contact',(req,res)=>{
    res.sendFile(path.join(__dirname,'view','contact.html'));
});
//Render Gallery page/route
app.get('/gallery',(req,res)=>{
    res.sendFile(path.join(__dirname,'view','gallery.html'));
});

//Start the server
app.listen(PORT,console.log('Server is running on port '+PORT));
