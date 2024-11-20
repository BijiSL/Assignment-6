
import { Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import {  Link, useNavigate } from 'react-router-dom';

import axiosInstance from '../axiosinterceptors';
const Employee = () => {
  const navigate=useNavigate();



  const [data,setData]=useState([])
  useEffect(()=>{
axiosInstance
.get('http://localhost:3000/employee/employee/get',data)


  
.then((res)=>{
    
  console.log(res.data)
  setData(res.data);

})
.catch((err)=>{

  console.log(err)
});




},[])
const click1=(id)=>{
   
       
  axiosInstance.delete(`http://localhost:3000/employee/employee/del/${id}`)

   .then(()=>{
     navigate('/addemployee');

     console.log(res);
   })
   .catch((error)=>{
     console.log(error)
   })}

    
  function update_data(val){
 
      navigate('/addemployee',{state:{val}})
       }

       

        <Button  variant='contained' style={{marginRight:'50px',marginLeft:'1px'}} onClick={()=>click1(row._id)}>Add</Button>


  return (
  <div>

<TableContainer id="t1">
    <Table>
      <TableHead>
        <TableRow>
          
          

      <Typography variant='h6' alignContent={'center'}>Employee Details  </Typography> 
      
      
   
      </TableRow>
        <TableRow>

          <TableCell align="left">Employee-Name</TableCell>
          <TableCell align="right">Email</TableCell>

        </TableRow>
      </TableHead>
      <TableBody>
        {data.map((row) => (
          <TableRow
          
            key={row.name}
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
          >
           
            <TableCell align="left">{row.name}</TableCell>
            <TableCell align="right">{row.email}</TableCell>
            <Button variant='contained' style={{marginLeft:'30px'}} onClick={()=>{
            update_data(row)
            }}>Update </Button>
            <Button  variant='contained' style={{marginLeft:'30px'}} onClick={()=>click1(row._id)}>Delete</Button>

          </TableRow>
        ))}
      </TableBody>
      
    </Table>

 


  </TableContainer>



<br></br>

<br></br>

  <Link to={'/addemployee'} style={{color:'blue'}}> <Button variant='contained' id="lb1">Create</Button></Link>




  </div>
)

 
}
export default Employee