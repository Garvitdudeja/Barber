import React from 'react';
import { useState } from 'react';
import Login from './Modals/Login';
import SignUp from './Modals/SignUp';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Avatar from '../images/Avatar.jpg';
import Cookie from 'js-cookie'

function NavbarComponenet() {
  const [LoginModal, setLoginModal] = useState(false);
  const [SignUpModal, setSignUpModal] = useState(false);
  const [userData, setUserData] = useState(JSON.parse(localStorage.getItem('userCredentials')));

  const handleLogOut = async () => {
    localStorage.removeItem('userCredentials')
    delete axios.defaults.headers.common["Authorization"];
    Cookie.remove('jwt')
    setUserData(null)
  }


  return (
    <>
      <Login LoginModal={LoginModal} setLoginModal={setLoginModal} setUserData={setUserData}></Login>
      <SignUp SignUpModal={SignUpModal} setSetSignUpModal={setSignUpModal} setUserData={setUserData}></SignUp>
      <div className="bg-[#560bad] w-full text-white py-3 flex flex-row justify-around">
        <div>
          <h3 className=''>  Smart Salon</h3>
        </div>
        <div className='flex flex-row gap-5 pt-2 '>
          <Link to='/' style={{ textDecoration: "none", color: "white", fontSize: "1.2rem", padding: "0px", margin: "0px" }} className='button-hover'> Home</Link>
          <Link to='/' style={{ textDecoration: "none", color: "white", fontSize: "1.2rem", padding: "0px", margin: "0px" }} className='button-hover'> Blog</Link>
          <Link to='/' style={{ textDecoration: "none", color: "white", fontSize: "1.2rem", padding: "0px", margin: "0px" }} className='button-hover'>About US</Link>
        </div>


        {userData ? <div className='flex flex-row gap-1'><button className='hover:bg-white hover:text-[#560bad] rounded-full px-3 py-1'
          onClick={handleLogOut}>Log Out</button>
          <Link to='/user/profile'><img src={`http://localhost:4000/${userData.image}`} alt="" className='w-12 h-12 rounded-full' /></Link> </div> : <div className='flex flex-row gap-1'>
          <button className='hover:bg-white hover:text-[#560bad] rounded-full px-3 py-1 text-xl'
            onClick={() => { setLoginModal(prev => !prev) }}>LogIn</button>
          <button className='hover:bg-white hover:text-[#560bad]  rounded-full px-3 py-1 text-xl'
            onClick={() => { setSignUpModal(prev => !prev) }}>SignUp</button>
        </div>}
      </div>
    </>
  )
}

export default NavbarComponenet