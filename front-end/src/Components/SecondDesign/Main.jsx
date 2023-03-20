import React, { useState } from 'react'
import Cookie from 'js-cookie';
import { Link } from 'react-router-dom';
import bgImage from '../../images/bg-image.png'
import Login from '../Modals/Login';
import SignUp from '../Modals/SignUp';
import axios from 'axios'


function Main() {
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
            <Login LoginModal={LoginModal} setLoginModal={setLoginModal} setUserData={setUserData} />
            <SignUp SignUpModal={SignUpModal} setSetSignUpModal={setSignUpModal} setUserData={setUserData}></SignUp>
            <div style={{ backgroundImage: `url(${bgImage})`, backgroundSize: '100% 100%', backgroundRepeat: 'no-repeat' }} className=" h-[100vh]">
                {/* Navbar */}
                <div className='flex flex-row justify-evenly w-full pt-3'>
                    <div>
                        <h3 className='text-[#f2dac2]'>SMART SALON</h3>
                    </div>
                    <div className='text-[#f2dac2] flex flex-row  justify-evenly w-1/3 mt-1'>
                        <Link to='/' style={{ textDecoration: "none", color: "white", fontSize: "1.2rem", padding: "0px", margin: "0px" }} className='button-hover'> Home</Link>
                        <Link to='/' style={{ textDecoration: "none", color: "white", fontSize: "1.2rem", padding: "0px", margin: "0px" }} className='button-hover'> Blog</Link>
                        <Link to='/' style={{ textDecoration: "none", color: "white", fontSize: "1.2rem", padding: "0px", margin: "0px" }} className='button-hover'>About US</Link>
                    </div>
                    <div className='text-[#f2dac2]'>
                        {userData ? <div className='flex flex-row gap-1'><button className='hover:bg-white hover:text-[#560bad] rounded-full px-3 py-1'
                            onClick={handleLogOut}>Log Out</button>
                            <Link to='/user/profile'><img src={`http://localhost:4000/${userData.image}`} alt="" className='w-12 h-12 rounded-full' /></Link> </div> : <div className='flex flex-row gap-1'>
                            <button className='hover:bg-white hover:text-[#560bad] rounded-full px-3 py-1 text-xl'
                                onClick={() => { setLoginModal(prev => !prev) }}>LogIn</button>
                            <button className='hover:bg-white hover:text-[#560bad]  rounded-full px-3 py-1 text-xl'
                                onClick={() => { setSignUpModal(prev => !prev) }}>SignUp</button>
                        </div>}
                    </div>
                </div>
            </div></>
    )
}

export default Main