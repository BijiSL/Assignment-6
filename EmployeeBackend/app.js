const express=require("express");
const dotenv=require("dotenv");
require("dotenv").config();

const cors=require("cors")
const app=express();
require('./db/dbConnection');

const userRoutes=require('./routes/userroutes');
const employeeRoutes=require('./routes/employeeroutes');
app.use(cors());
app.use('/user',userRoutes);
app.use('/employee',employeeRoutes);

app.listen(3000, ()=>{
    console.log(`listening to  port ${process.env.port}`);

})