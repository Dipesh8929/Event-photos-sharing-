const express= require('express');
const router=express.Router();
const Post=require('../models/Post');
router.post('/addpost',async(req,res)=>{
    try {
        let{title, desc,userId}=req.body;
    if (!(title && desc)) {
        throw new Error("All input required");
      }
    await Post.create({title,desc,user:userId})
    
    } catch (error) {
        res.status(400).json({msg:'something went wrong in saving data of post'})
    }
    
});



module.exports=router;