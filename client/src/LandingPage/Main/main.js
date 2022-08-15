import React from 'react'
import Header from '../Header/header'
import Navbar from '../Navbar/Navbar'
import About from './AboutSection/about'
import Home from './HomeSection/home'
import Service from './ServiceSection/service'

const Main = () => {
  return (
    <>
        <Header/>
        <Navbar/>
        <Home/>
        <About/>
        <Service/>
    </>
  )
}

export default Main