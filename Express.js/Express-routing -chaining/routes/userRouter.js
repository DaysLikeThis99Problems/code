const express=require('express');
//Create instance of express router
const userRouter=express.Router();

//using the route()
//Getting all users
userRouter.route('/').get((req,res)=>{
    res.json({
        message:"All user fetched",
    })
})
//Getting a user
userRouter.route('/:id').get((req,res)=>{
    res.json({
        message:"user fetched",
    })
}).put((req,res)=>{
    res.json({
        message:"user updated",
    })
}).delete((req,res)=>{
    res.json({
        message:"user deleted",
    })
})
module.exports=userRouter