const express=require('express');
//Create instance of express router
const userRouter=express.Router();

//----USERS ROUTE----
//Getting all users
userRouter.get('/',(req,res)=>{
    res.json({
        message:"All user fetched",
    })
})
//Getting a user
userRouter.get('/:id',(req,res)=>{
    res.json({
        message:"user fetched",
    })
})
//Update a user
userRouter.put('/:id',(req,res)=>{
    res.json({
        message:"user updated",
    })
})
//Delete a user
userRouter.delete('/:id',(req,res)=>{
    res.json({
        message:"user deleted",
    })
})
module.exports=userRouter