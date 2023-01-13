import React, { useState } from 'react';
import color_boy from '../../images/color_boy.jpg';
import outline_boy from '../../images/outline_boy.jpg';
import outline_girl from '../../images/outline_girl.jpg';
import color_girl from '../../images/color_girl.jpg'
import classnames from 'classnames'
//icons
import { FaMale, FaFemale } from 'react-icons/fa'
import { IoMaleFemale } from 'react-icons/io5'
import { Link, useParams } from 'react-router-dom'



const MobileTabs = () => {
  const { typeP } = useParams();

  const [allTypes, setAllTypes] = useState([
    {
      id: 'male',
      icon: <FaMale />,
      name: 'Male'
    },
    {
      id: 'female',
      icon: <FaMale />,
      name: 'Female'
    }
  ])
 
  return (<>
    <div className=' w-full fixed text-black lg:hidden flex flex-row gap-2 justify-around shadow-lg pt-3 bottom-0'>
      {allTypes.map((type) => {
        return (
          <Link to={`/${type.id}`} className='no-underline'>
            <div className={
              typeP == type.id
                ? "flex text-center flex-col relative items-center text-3xl text-[#ef4f5f] "
                : "flex text-gray-800 text-center flex-col items-center text-xl "
            }>

              <h2 className='border-black font-bold '>{type.icon}</h2>
              <button className='border-none bg-white'>{type.name}</button>
            </div>
          </Link>)
      })}
    </div>
  </>)
}

const LargeTabs = () => {
  
  var { typeP } = useParams();
  if(!typeP){
    typeP = 'male';
  }

  const [allTypes, setAllTypes] = useState([
    {
      id: 'male',
      imageDefault: outline_boy,
      imageActive : color_boy,
      name: 'Male'
    },
    {
      id: 'female',
      imageDefault: outline_girl,
      imageActive : color_girl,
      name: 'Female'
    },
  ])
  return (<>
  <div className='flex flex-row w-full justify-evenly'>
    {allTypes.map((item)=>{
      return(<>
      <div className={classnames("flex flex-col no-underline",{"border-b-2 border-[#ef4f5f]":typeP==item.id},{"":typeP != item.id})}>
        <Link to={`/${item.id}`} className='no-underline'>
          <div className=' flex flex-row h-full gap-4'>
        <div className='w-14 h-20'>
        <img src={typeP===item.id ? item.imageActive:item.imageDefault} alt="" className='w-full h-full' />
        </div>
        <h2 className='text-center no-underline text-black p-0 m-auto font-light'>{item.name}</h2>
        </div>
        </Link>
      </div>
     
      </>)
    })}
  </div>
  </>)
}


function GenderTab() {
  return (
    <>
      {/* <MobileTabs className='ablsolute  lg:hidden ' /> */}
      <div className='hidden lg:inline'>
      <LargeTabs  />
      </div>
    </>
  )
}

export default GenderTab