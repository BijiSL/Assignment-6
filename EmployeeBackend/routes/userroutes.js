const express=require("express");
const router=express.Router();
const userModel=require("../model/userModel");
router.use(express.json());

const jwt=require('jsonwebtoken');



router.post("/login",async(req,res)=>{
        try {
      const user=await userModel.findOne({email:req.body.email});

      if(!user){
    res.send({message:"user not found"});

      }
      else if(user.password==req.body.password)
      {const payload={email:user.email,password:user.password}
      const token=jwt.sign(payload,'blogApp')

        
        res.status(200).send({message:'Login successful',token:token})


      }
      else{
        res.status(404).send("Invalid creddentials")

      }
        } catch (error) { 
console.log(error)       
        }
    });





    
    
    
    
    
    router.post("/signup/add",async(req,res)=>{
      try {
          var item1=req.body;
    var data1=new userModel(item1);
    await data1.save();
    res.status(200).send("data added successfully")
      } catch (error) { 
          res.status(404).send("unable to send  data")
     
      }
    });
    router.get("/signup/get",async(req,res)=>{
      try {
          var data1=await userModel.find();
          res.status(200).send(data1);
          
      } catch (error) {
          res.status(404).send("unable to getdata");
      
      }
    }
  )
    
      router.delete("/signup/del/:id",async(req,res)=>{
    
    
    
    
        try {
            await userModel.findByIdAndDelete(req.params.id);
            res.status(200).send("deleted successfully");
            
        } catch (error) {
            res.status(404).send("unable to delete data");
    
        }
       
    })
    
    
    router.put("/signup/edit/:id",async(req,res)=>{
    
    
    
    
      try {
          await userModel.findByIdAndUpdate(req.params.id,req.body);
          res.status(200).send("edited successfully");
          
      } catch (error) {
          res.status(404).send("unable to edit data");
    
      }
     
    })
    
    

module.exports=router;






    









