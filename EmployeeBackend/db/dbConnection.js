const mongoose=require("mongoose");
require("dotenv").config();
 mongoose
 .connect(process.env.mongourl)
 .then(()=>{
console.log("db is connected");
 })
 .catch((err)=>{
    console.log(err);

 });