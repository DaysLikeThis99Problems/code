const express=require("express");
//instance
const app=express();
//Create the PORT
const PORT=8082;

//Receiving incoming from the client configuration
app.use(express.json());
const books=[
    {id:'1',title:"The great Gatsby",author:"F.Scott"},
    {id:'2',title:"The Moby Dic",author:"Herman"},
    {id:'3',title:"The MERN Stack",author:"!))HAM"},
]
//Home route
app.get('/',(req,res)=>{
    res.json({
        status:'success',
        message:'Welcome to my first book api using Express.js',
        data:"Hi! Hello",
    });
});
//Fetching all books
app.get('/books',(req,res)=>{
    res.json({
        status:"success",
        message:'Books fetched success',
        data:books,
    })
});
//Fetching a particular book
app.get('/books/:id',(req,res)=>{
    const id=req.params.id;
    const bookFound=books.find((book)=>book.id===id);
    if(!bookFound){
        return res.json({
            status:"failed",
            message:'Books with id: '+id+' is not found',
        })
    }
    res.json({
        status:"success",
        message:'Books fetched success',
        data:bookFound,
    })
});

//Create a book
app.post('/books',(req,res)=>{
    const newPost=req.body;
    books.push(newPost);
    res.json({
        status:"success",
        message:'Books created success',
        body:books,
    });
});
//start the server
app.listen(PORT,()=>{
    console.log('Server is running on '+PORT);
});
