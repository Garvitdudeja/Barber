import React from 'react'
import mainImage from '../images/sslon.jpg'

function MainHero() {
  return (
    <>
    <div className='w-full'>
    <div className='flex flex-row w-3/4 m-auto'>
        <div className='w-full font-bold'>
            <img src={mainImage} alt="main Image" />
        </div>
        <div className='w-full'>
            <h1 className='p-12 text-[2.7rem] text-[#042485]  '>Tired Of Waiting For Your Turn In Salon ?? PreBook Your Personal Salon Artist With Us</h1>
        </div>
    </div>
    </div>
        </>
  )
}

export default MainHero