import React, { useState } from 'react'
import NavbarComponenet from '../Components/NavbarComponenet';
import Avatar from '../images/Avatar.jpg'

const UserProfile = () => {

    const [userInfo, setUserInfo] = useState({
        id: '3224323423',
        name: "John Smith",
        phoneNumber: "348958349",
        email: "john.smith@gmail.com"
    })


    return (<>
    <div className='bg-[#17181f]'>
        <NavbarComponenet></NavbarComponenet>
        <div className=' w-full text-white'>
            <h3 className='text-white text-center pt-5'>MY ACCOUNT</h3>
            <div className='rounded-full mx-auto my-6 h-[5rem] w-[5rem]'>
                <img className='rounded-full h-full w-full' src={Avatar} alt="" srcset="" />
            </div>
            <div className="bg-[#21212b] w-1/2 text-[#7a7a81] mx-auto p-8 my-6">
                <div className='m-4'>
                    <div className='m-4 flex justify-between '>
                        <div>
                            <h5>Name</h5>
                            <div className='text-white'><h5>{userInfo.name}</h5></div>
                        </div>
                        <div>
                            <button className='bg-[#414052] px-3 py-1 rounded-md text-white text-lg'>Edit</button>
                        </div>
                    </div>
                </div>
                <div className='m-4'>
                    <div className='m-4 flex justify-between '>
                        <div>
                            <h5>Email</h5>
                            <div className='text-white'><h5>{userInfo.email}</h5></div>
                        </div>
                        <div>
                            <button className='bg-[#414052] px-3 py-1 rounded-md text-white text-lg'>Edit</button>
                        </div>
                    </div>
                </div>
                <div className='m-4'>
                    <div className='m-4 flex justify-between '>
                        <div>
                            <h5>Phone Number</h5>
                            <div className='text-white'><h5>{userInfo.phoneNumber}</h5></div>
                        </div>
                        <div>
                            <button className='bg-[#414052] px-3 py-1 rounded-md text-white text-lg'>Edit</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-[#21212b] w-1/2 text-[#7a7a81] mx-auto p-8 mt-6 mb-12">
                <div className='m-4 flex justify-between '>
                    <div>
                        <h5 className='pt-4'>Subscription</h5>
                    </div>
                    <div>
                        <button className='btn-grad'>Upgrade To Pro</button>
                    </div>
                </div>
            </div>
        </div>
        </div>
    </>)

};


export default UserProfile;