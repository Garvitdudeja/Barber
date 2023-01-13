import React from 'react'
import { useState } from 'react'
import ImageGrid from '../Components/Salon/ImageGrid'
import NavbarComponenet from '../Components/NavbarComponenet'
import axios from 'axios'
import { useEffect } from 'react'



export default function SalonPage() {
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
        console.log(info.data.result)
      }
      getData()
    },[])

  return (
    <div>
      <NavbarComponenet></NavbarComponenet>
      {data.map((e)=>{
        return(<>
        <img src={'http://localhost:4000/'+`${e.image}`}   />
        </>)
      })}
        {/* <ImageGrid images={salon.images}/> */}
    </div>
  )
}
