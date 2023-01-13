import React, { useEffect } from 'react'
import {useNavigate} from 'react-router-dom'

function Protected(props) {
    const {Component} = props;
    const navigate = useNavigate()
    useEffect(()=>{
        let login= false
        if (!login){
            navigate('/signin')
        }
    },[])
  return (
    <Component></Component>
  )
}

export default Protected