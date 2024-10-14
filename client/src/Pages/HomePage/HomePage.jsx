import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import ImageSlider from '../../components/Auto-Scroller/ImageSlider'
import Dashboard from '../../components/Dashboard/Dashboard'
import Footer from '../../components/Footer/Footer'
import Card from '../../components/Card/Card'
import { Slider } from '../../components/Slider/Slider'


export const HomePage = () => {
  return (
    <>
    <Navbar/>
    <ImageSlider/>
     <Card/>
     <Dashboard/>
     <Slider/>
     <Footer/>
    </>
  )
}
