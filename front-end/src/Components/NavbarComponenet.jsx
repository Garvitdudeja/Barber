import React, { useState } from 'react';
import { Navbar, NavDropdown } from 'react-bootstrap';

//icons
import { IoSearchOutline } from 'react-icons/io5';
import { MdOutlineArrowDropDown } from 'react-icons/md';
import { TiLocation } from 'react-icons/ti'


const NavLg1 = () => {
  return (<>
    <Navbar expand="lg" className='bg-[#101820FF]'>
      <div className='flex flex-row justify-between w-full  text-[#FEE715FF] mx-5 '>
        <div className='Logo'>
          <h1>Smart Salon</h1>
        </div>

        <div className='flex-col justify-between w-1/3'>
          <div className='flex flex-row w-full justify-between'>
            <h5 className='py-2 px-4'>Home</h5>
            <NavDropdown

              id="dropdown_navbar nav-dropdown-dark-example "
              title={
                <span className="text-[#FEE715FF] font-semibold my-auto">About Us</span>
              }
              menuVariant="light"
              style={{ color: '#FFD700' }}
            >
              <NavDropdown.Item href="#action/3.1">Our Team</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Objective</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">How To Book</NavDropdown.Item>
            </NavDropdown>

            <h5 className='py-2 px-4'>Book with us</h5>
          </div>
        </div>
      </div>
    </Navbar>
  </>)
}

const NavLg2 = ({ user, setisDropDownOpen, setuser, isDropDownOpen }) => {
  return (<>
    <div className='flex flex-row justify-center gap-2 w-full'>
      <div className='pt-3'>
        <h1 className='text-[#f3bc40]'>Smart Salon</h1>
      </div>
       <SearchBar/>

      <div className=''>
        <UserLogo user={user} setuser={setuser} isDropDownOpen={isDropDownOpen} setisDropDownOpen={setisDropDownOpen} />
      </div>

    </div>
  </>)
}

function UserLogo({ user, setisDropDownOpen, isDropDownOpen, setuser }) {
  return (<>
    {user ? (
      <div className='lg:pt-3 mr-6'>
        <button onClick={() => setisDropDownOpen((prev) => !prev)} className='relative' > <img src="https://b.zmtcdn.com/images/user_avatars/pizza_2x.png?fit=around%7C100%3A100&crop=100%3A100%3B%2A%2C%2A"
          alt="avatar" className='rounded-full w-12' /> </button>
        {isDropDownOpen ? (<div className='absolute shadow-lg bg-[#fdf79a] w-28 text-black rounded-lg flex flex-col gap-2 '>
          <button className=' p-2 hover:bg-[#b1d4f2]'>Profile</button>
          <button className=' p-2 hover:bg-[#b1d4f2]'>Reviews</button>
          <button className=' p-2 hover:bg-[#b1d4f2]'>Settings</button>
          <button className=' p-2 hover:bg-[#b1d4f2]'
            onClick={() => { setuser(null); setisDropDownOpen(false) }}>Logout</button>
        </div>) : (<div></div>)}
      </div>
    ) : (
      <div className='flex flex-row gap-3 pt-4  '>
        <button onClick={() => { setuser(1) }} className='text-gray-500 font-light hover:text-black'>Login</button >
        <h5 className='text-gray-500 font-light hover:text-black'>SignUp</h5>
      </div>
    )
    }
  </>)
}

function MobileNav({ user, setuser, setisDropDownOpen, isDropDownOpen }) {
  return (<>
    <div className='mx-10 my-6 flex flex-row justify-between '>
      <h2>Smart Salon</h2>
      <div className=' relative pb-3'>
        <UserLogo user={user} setuser={setuser} isDropDownOpen={isDropDownOpen} setisDropDownOpen={setisDropDownOpen} />
      </div>

    </div>
    <div>
      <SearchBar/>
    </div>
  </>)
}

const SearchBar = () => {
  return (<>
    <div className='m-3 w-1/2 shadow-md flex  flex-col md:flex-row h-12 gap-1 '>
      <span className='pt-3 pl-3 text-[#ff7e8b]'><TiLocation /></span>
      <input type="text" placeholder='Rajpura' className='h-full  p-1 outline-none' ></input>
      <div className='pt-3'><MdOutlineArrowDropDown /></div>
      <span className='pt-3 pl-6'><IoSearchOutline /></span>
      <input type="text" placeholder="Search for Salons near you" className='h-full w-full p-1 outline-none' ></input>
    </div>
  </>)
}

function NavbarComponenet() {
  const [user, setuser] = useState(1);
  const [isDropDownOpen, setisDropDownOpen] = useState(false);
  return (
    <>
      <div className='md:hidden'>
        <MobileNav user={user} setuser={setuser} isDropDownOpen={isDropDownOpen} setisDropDownOpen={setisDropDownOpen} />
      </div>
      <div className='hidden lg:inline'>
        <NavLg2 user={user} setuser={setuser} isDropDownOpen={isDropDownOpen} setisDropDownOpen={setisDropDownOpen}></NavLg2>
      </div>
    </>
  )
}

export default NavbarComponenet