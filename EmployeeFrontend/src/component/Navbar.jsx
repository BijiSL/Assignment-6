import { AppBar, Box, Button, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    
<div style={{marginTop:'1px'}} >





<Box   sx={{ flexGrow: 1 }}  style={{width:'1300px'}}>
  
      <AppBar  >
        <Toolbar>
        
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            EmployeeApp
          </Typography>
         <Link to={'/employee'} style={{color:'white'}}> <Button color="inherit">Home</Button></Link>

         <Link to={'/addemployee'} style={{color:'white'}}> <Button color="inherit">Admin</Button></Link>


         <Link to={'/'} style={{color:'white'}}> <Button color="inherit" onClick={()=>{

sessionStorage.removeItem('token');

         }}>Logout</Button></Link>


         
        </Toolbar>
      </AppBar>
    </Box>
    </div>
  )
}

export default Navbar