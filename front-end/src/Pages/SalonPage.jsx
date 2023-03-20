import React from 'react'
import { useState,useContext } from 'react'
import ImageGrid from '../Components/Salon/ImageGrid'
import NavbarComponenet from '../Components/NavbarComponenet'
import axios from 'axios'
import { useEffect } from 'react'
import { UserContext } from '../App'



export default function SalonPage() {
  const user = useContext(UserContext)
    const [salon, setresalon] =useState({
        images:[
            'https://www.wikilistia.com/wp-content/uploads/2018/06/Blush-Style-hair-salon-chandigarh-528x297.jpg',
            'https://www.wikilistia.com/wp-content/uploads/2018/06/headmasters-hair-salon-528x297.jpg',
            'https://www.wikilistia.com/wp-content/uploads/2018/06/Tress-Lounge-Family-Salon-528x297.jpg',
            'https://www.wikilistia.com/wp-content/uploads/2018/06/Femina-Plus-Hair-Salon-Spa-528x297.jpg',
        ],
        name:'Stylish Hair Salon',
        location:'Manimajra, Chandigarh',
        salonTimings:'10am-11pm'
    })

    const [data,setData] = useState([])
    useEffect(()=>{
      const getData = async()=>{
        const info= await axios.get('http://localhost:4000/getData')
        setData(info.data.result)
      }
      getData()
    },[])

  return (
    <div className='w-full'>
      <h1>{user.HELO}</h1>
      <NavbarComponenet></NavbarComponenet>
      <div className='flex flex-row w-full m-auto'>
        <div className='w-1/3'>
          <img src={salon.images[0]} alt="" />
        </div>
        <div className='flex flex-col h-96'>
          <img src={salon.images[1]} alt=""  className='h-1/2'/>
          <img src={salon.images[2]} alt="" className='h-1/2' />
        </div>
      </div>
    </div>
  )
}
