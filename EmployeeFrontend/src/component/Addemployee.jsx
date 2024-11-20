
import React, { useEffect, useState } from 'react'
import '../App.css'
import { Box, Button, TextField, Typography } from '@mui/material'
import Grid from '@mui/material/Grid2';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';

import axiosInstance from '../axiosinterceptors';

const Addemployee = () => {
  
    
  const location=useLocation();
  const [form,setForm]=useState({

    name:'',
    email:'',
    designation:'',
    salary:'',
    place:'',
    phone:'',
    password:''
    

  });
useEffect(()=>{
if(location.state!=null){
setForm({...form,name:location.state.val.name,
  email:location.state.val.email,

  designation:location.state.val.designation,
  salary:location.state.val.salary,
  place:location.state.val.place,
  phone:location.state.val.phone,
  password:location.state.val.password,


})

}
else{

  setForm({...form,name:'',
    
    designation:'',
    salary:'',
  
    place:'',
    phone:'',
    email:'',
    password:''
  })
}

},[])
  const navigate=useNavigate();

  function click1(){

   console.log(form);
   if(location.state!=null){
    axiosInstance.put('http://localhost:3000/employee/addemployee/edit/'+location.state.val._id,form)
    .then((res)=>{

    alert(res.data)

      navigate('/employee');
  
       console.log(res);
    })
    .catch((error)=>{
      console.log(error)
    })}
  
  else{

   axiosInstance.post('http://localhost:3000/employee/addemployee/add',form)
   

  .then((res)=>{
   alert(res.data)

   navigate('/employee');

    console.log(res);
  })
  .catch((error)=>{
    console.log(error)
  })}
  }
  
 
 return (
     <Box
       sx={{flexGrow:1}}style={{marginTop:'10%',marginLeft:'20%',width:'50%'}} >
         <Grid container spacing={2}>

         <Grid size={12}>
           <Typography variant='h4'>Employee Details</Typography>

           </Grid>


           <Grid size={12}>
          <TextField fullWidth
            
            id="outlined-basic"
            label="EmployeeName"
            variant='outlined'
            name='name'
            value={form.name}
            onChange={(e)=>{
            setForm({...form,name:e.target.value})
            }}
          />


</Grid>
         



<Grid size={12}>

<TextField fullWidth
   
   id="outlined-multiline-flexible"
   label="Email"
   name='email'
   value={form.email}
   onChange={(e)=>{
     setForm({...form,email:e.target.value})
     }}
   
 />
 </Grid>

         <Grid size={12}>
       

         
       <TextField fullWidth
         
         id="outlined-basic"
         label="Designation"
         variant='outlined'
         name='designation'
         value={form.designation}
         onChange={(e)=>{
           setForm({...form,designation:e.target.value})
           }}
         
       />
       </Grid>


       <Grid size={12}>
       

         
       <TextField fullWidth
         
         id="outlined-basic"
         label="Salary"
         variant='outlined'
         name='salary'
         value={form.salary}
         onChange={(e)=>{
           setForm({...form,salary:e.target.value})
           }}
         
       />
       </Grid> 


        
        
<Grid size={12}>
      
       <TextField fullWidth
          
          id="outlined-multiline-flexible"
          label="Place"
          name='place'
          value={form.place}
          onChange={(e)=>{
            setForm({...form,place:e.target.value})
            }}
          
        />
        </Grid>
        <Grid size={12}>
      
       <TextField fullWidth
          
          id="outlined-multiline-flexible"
          label="Phone"
          name='phone'
          value={form.phone}
          onChange={(e)=>{
            setForm({...form,phone:e.target.value})
            }}
          
        />
        </Grid>
        

              <Grid size={12}>
       

         
       <TextField fullWidth
         
         id="outlined-basic"
         label="Password"
         variant='outlined'
         name='password'
         value={form.password}
         onChange={(e)=>{
           setForm({...form,password:e.target.value})
           }}
         
       />
       </Grid>
 
             
        <Grid size={12}>
 
        <center>
        <Button id="bu2" variant="contained" onClick={click1}>ADD </Button></center>
      
 
 

 </Grid>
</Grid>
      </Box>

   
)










}

export default Addemployee