import React from 'react'
import mainImage from '../images/sslon.jpg'

function MainHero() {
  return (
    <>
    <div className='w-full mt-3'>
    <div className='flex flex-col  lg:flex-row w-3/4 m-auto'>
        <div className='w-full font-bold'>
            <img src={mainImage} alt="main Image" />
        </div>
        <div className='w-full'>
            <h1 className='p-12 lg:text-[2.7rem] text-[#042485]  '>Tired Of Waiting For Your Turn In Salon ?? PreBook Your Personal Salon Artist With Us</h1>
        </div>
    </div>
    </div>
        </>
  )
}

export default MainHero