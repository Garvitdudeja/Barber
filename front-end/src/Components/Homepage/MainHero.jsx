import React from 'react'
import mainImage from '../../images/sslon.jpg'


function MainHero() {
  return (
    <>
    <div className='mt-6 md:mt-8 px-4 md:w-full lg:Hero'>
        <div className='flex flex-col md:flex-row lg:w-3/5 m-auto'>
        <div className=''>
            <img src={mainImage} alt="" />
        </div>
        <div className='h-auto m-auto'>
        <h2 className='m-6 text-center'>Tierd Of Waiting For Your Turn in Salons ?<br/>Pre Book Your Personal Salon Artist With Us</h2>
        </div>
        </div>
    </div>

        </>
  )
}

export default MainHero