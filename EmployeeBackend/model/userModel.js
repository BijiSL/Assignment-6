const mongoose=require("mongoose");
const userSchema=mongoose.Schema(
{name:String,
    email:String,
    address:String,
    phone:Number,

password:String
},

);


const userModel = mongoose.model('userdatas',userSchema);
module.exports=userModel;