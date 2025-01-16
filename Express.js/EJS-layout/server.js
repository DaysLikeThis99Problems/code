const express=require("express");
const ejsLayout=require("express-ejs-layouts");
const path=require('path');
const app=express();
const PORT=8082;
//Serve the static files/folder
app.use(express.static(path.join(__dirname,'public')));
//Set the view engine as ejs
app.set("view engine","ejs");
//plugin the ejs layout as a middleware
app.use(ejsLayout);
app.set('layout','layout/main-layout.ejs')

//Render Home page/route
app.get('/',(req,res)=>{
    res.render("home.ejs");
});
//Render About page/route
app.get('/about',(req,res)=>{
    res.render("about.ejs");
});
//Render Contact page/route
app.get('/contact',(req,res)=>{
    res.render("contact.ejs");
});
//Render Gallery page/route
app.get('/gallery',(req,res)=>{
    res.render("gallery.ejs");
});
//Render userdata page/route
app.get('/user',(req,res)=>{
    //dummy user content
    const userData={username:'Alice',age:25,isPremiumUser:true,email:'alice@gmail.com'};
    res.render("userData.ejs",userData);
});
//Render Product page page/route
app.get('/product',(req,res)=>{
    const products=[
        {name:"Laptop",price:999},
        {name:"Phone",price:799},
        {name:"TV",price:1200},
    ];
    res.render("products.ejs",{products});
});

//404 Error handler
app.use((req,res,next)=>{
    const error=new Error("Page Not Found");
    next(error);
});
app.use((err,req,res,next)=>{
    console.log(err.message);
    res.render("error",{error:err.message});
})

//Start the server
app.listen(PORT,console.log('Server is running on port '+PORT));
