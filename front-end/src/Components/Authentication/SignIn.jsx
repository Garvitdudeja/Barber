import React, { useState } from 'react'
import {Document} from 'react-pdf'
import axios from 'axios'
import Box from '@mui/material/Box';
import { Button, Input } from '@mui/material';
import TextField from '@mui/material/TextField';


function SignIn() {
  const [data,setdata]= useState({})
  const handleChange = (e)=>{
    setdata({...data,[e.target.name]:e.target.value})
    console.log(data)
  }

  const handleSubmit= async()=>{
    try{
      const info=await axios.post('http://localhost:4000/auth/logIn',data)
      console.log(info)
    }
    catch(error){
      console.log(error);
    }
  }

  return (
    <>
    <div className='flex flex-col h-[60vh] justify-evenly  mx-auto w-[40vw] mt-12 p-8'>
      <TextField label="Email" required onChange={handleChange} name="email" ></TextField>
      <TextField label="Password" type="password" name="password" onChange={handleChange} required></TextField>
      <Button variant='contained' type="submit" onClick={handleSubmit}>Login</Button>
    </div>
    {(data.filePreview) ? <a href={data.filePreview} target="_blank"><Button variant="danger">ViewFile</Button></a> : null }
    </>
  )
}

export default SignIn