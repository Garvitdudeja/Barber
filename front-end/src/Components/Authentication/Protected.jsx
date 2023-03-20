import React, { useEffect } from 'react'
import {useNavigate} from 'react-router-dom'

function Protected(props) {
    const {Component} = props;
    const navigate = useNavigate()
    useEffect(()=>{
        let login= localStorage.getItem('userCredentials');
        if (!login){
            navigate('/');
            alert("Please Login to access Login Page");
        }
    },[])
  return (
    <Component></Component>
  )
}

export default Protected