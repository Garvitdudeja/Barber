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
          alt="avatar" className='rounded-full w-14' /> </button>
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
        <button onClick={() => { setuser(1) }} className='text-gray-500 font-light hover:text-black'><h5 className='font-light'>Login</h5></button >
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
    <div className='sm:m-auto md:m-3 sm:w-full md:w-1/2  md:shadow-md flex  flex-col justify-center md:flex-row h-12 gap-1 '>
      <div className='flex flex-row m-auto sm:outline-double md:outline-none '>
      <span className='pt-2 pl-3 md:text-3xl text-[#ff7e8b]'><TiLocation /></span>
      <input type="text" placeholder='Rajpura' className='h-full md:text-2xl  p-1 md:outline-none' />
      <div className='sm:pt-2 md:pt-3'><MdOutlineArrowDropDown /></div>
      </div>
      <div className='flex flex-row m-auto md:w-full sm:shadow-xl md:shadow-none gap-2 '>
      <p className='mt-3 ml-6 md:text-3xl'><IoSearchOutline /></p>
      <input type="text" placeholder="Search Salons near you" className='h-full w-full md:pt-2 md:text-2xl md:outline-none' ></input>
      </div>
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
      <div className='hidden md:inline'>
        <NavLg2 user={user} setuser={setuser} isDropDownOpen={isDropDownOpen} setisDropDownOpen={setisDropDownOpen}></NavLg2>
      </div>
    </>
  )
}

export default NavbarComponenet