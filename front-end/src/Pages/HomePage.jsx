import React from 'react'
import GenderTab from '../Components/Homepage/GenderTab'
import MainHero from '../Components/Homepage/MainHero'
import MaleSection from '../Components/Homepage/MaleSection'
import {useParams} from 'react-router-dom'
import Cards from '../Components/Homepage/Cards'
import NavbarComponenet from '../Components/NavbarComponenet'



function HomePage() {
  const {typeP} = useParams();
  return (<>
    <NavbarComponenet/>
    <MainHero/>
    <GenderTab/>
    <MaleSection category={typeP}/>
    <Cards/>
    </>
  )
}

export default HomePage