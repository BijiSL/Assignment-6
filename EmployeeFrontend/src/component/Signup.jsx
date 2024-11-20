import React, { useState } from 'react'
import '../App.css'
import { Box, Button, TextField, Typography } from '@mui/material'
import Grid from '@mui/material/Grid2';
import axios from 'axios';
import axiosInstance from '../axiosinterceptors';

import { Link, useNavigate } from 'react-router-dom'

const Signup = () => {
  const navigate=useNavigate();

  const [users,setUsers]=useState();
   const change1=(e)=>{
setUsers({...users,[e.target.name]:e.target.value})


   }
   const click1=()=>{

    console.log(users);
    
   axiosInstance.post('http://localhost:3000/employee/addemployee/add',users)
    .then((res)=>{
      navigate('/');

      console.log(res);
    })
    .catch((error)=>{
      console.log(error)
    })}

   
  return (


      <Box
        sx={{flexGrow:1}}style={{marginTop:'10%',marginLeft:'20%',width:'50%'}} >
<center>
<Typography variant='h4' style={{color:'darkblue'}}>User Registration</Typography></center><br></br>

          <Grid container spacing={2}>
        <Grid size={6}>
          <TextField fullWidth
            
            id="outlined-basic"
            label="Name"
            variant='outlined'
            name="name"
            onChange={change1}
            

          />

          </Grid>
         


          <Grid size={6}>
        

          
        <TextField fullWidth
          
          id="outlined-basic"
          label="Email"
          variant='outlined'
           name="email"
          onChange={change1}
          
        />
        </Grid>
        

        <Grid size={12}>
        

          
        <TextField fullWidth
          
          id="outlined-multiline-flexible"
          label="Place"
          name="place"
          onChange={change1}
           
        />
        </Grid>
      
          
        
        
          
        
        <Grid size={6}>
        

          
        <TextField fullWidth
          
          id="outlined-basic"
          label="Phone-number"
          variant='outlined'
            name="phone"
          onChange={change1}
         
        />
        </Grid>
          
        
       
          
        <Grid size={6}>
        

          
        <TextField fullWidth
          
          id="outlined-basic"
          label="Password"
          variant='outlined'
          name="password"
          onChange={change1}
           
        />
          
          </Grid>
          <Grid size={6}>
        

          
        <TextField fullWidth
          
          id="outlined-basic"
          label="Designation"
          variant='outlined'
            name="designation"
          onChange={change1}
         
        />
        </Grid>
        
        <Grid size={6}>


          
        <TextField fullWidth
          
          id="outlined-basic"
          label="Salary"
          variant='outlined'
            name="salary"
          onChange={change1}
         
        />
        </Grid>
        
        
        
        <Grid size={12}>
 
        <center>
        <Button variant="contained" onClick={click1}>SignUp</Button>
        </center>
        </Grid>
        <Grid size={12}>
 
<Typography style={{color:'darkblue'}}>
  <center>
  <Link to={'/'}>Registered user? Please Click here</Link></center></Typography>

</Grid>
</Grid>
      </Box>




    
  )
}
export default Signup