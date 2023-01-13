import React, { useState } from 'react'
import axios from 'axios'
import { Button, Input } from '@mui/material';
import TextField from '@mui/material/TextField';


function SignUp() {
    const [data, setdata] = useState({})
    const [checkPassword, setCheckPassword] = useState(1
        )
    const handleChange = (e) => {
        setdata({ ...data, [e.target.name]: e.target.value })
        if (data.password && data.reTypePassword && data.reTypePassword != data.password) {
            setCheckPassword(0)
        }
        else {
            setCheckPassword(1)
        }
        console.log(data)
    }

    const handleSubmit = async () => {
        try {
            await axios.post('http://localhost:4000/auth/signUp', data)
        }
        catch (error) {
            console.log(error);
        }
    }

    return (
        <>
            <div className='flex flex-col h-[60vh] justify-evenly  mx-auto w-[40vw] mt-12 p-8'>
                <TextField label="UserName" required onChange={handleChange} name="userName" ></TextField>
                <TextField label="Password" type="password" name="password" onChange={handleChange} required></TextField>
                <TextField label="ReType-Password" type="password" name="reTypePassword" onChange={handleChange} required></TextField>
                {checkPassword ? null : <p className='text-red-600'>Password do not match</p>}
                <TextField label="email" required onChange={handleChange} name="email" ></TextField>
                <TextField label="Phone Number" type="number" name="phoneNumber" onChange={handleChange} required></TextField>
                <Button variant='contained' type="submit" onClick={handleSubmit}>Sign Up</Button>
            </div>
        </>
    )
}

export default SignUp