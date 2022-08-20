import React from 'react'
import Header from '../Header/header'
import Navbar from '../Navbar/Navbar'
import About from './AboutSection/about'
import Approach from './ApproachSection/Approach'
import BeatingDiabetes from './BeatingDiabetesSection/beatingDiabetes'
import Contact from './ContactSection/Contact'
import Footer from './FooterSection/Footer'
import Home from './HomeSection/home'
import Method from './MethodSection/Method'
import Service from './ServiceSection/service'
import Testimonial from './TestimonialSection/Testimonial'

const Main = () => {
  return (
    <>
      <div id="home">
        <Header />

      </div>

      <Navbar />


      <Home />
      <div id="about">
        <br />
        <About />
      </div>
      <div id="service">
        <br /><br /><br />
        <Service />
      </div>
      <div id="beatingDiabetes">
        <br /><br /><br />
        <BeatingDiabetes />
      </div>
      <div id="testimonial">
        <br /><br /><br />
        <Testimonial />
      </div>
      <div id="method">
        <br /><br /><br />
        <Method />
      </div>
      <div id="approach">
        <br />
        <Approach />
      </div>
      <div id="contact">
     
        <Contact />
      </div>
      <Footer />

    </>
  )
}

export default Main