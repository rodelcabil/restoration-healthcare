import React, { useEffect, useState } from "react";
import { Nav, NavMenu, NavItem, NavLinks } from "./navbar-elements";

const Navbar = () => {

  const [homeActive , setHomeActive] = useState(true);
  const [aboutActive , setAboutActive] = useState(false);
  const [serviceActive , setServiceActive] = useState(false);
  const [beatingDiabetesActive , setBeatingDiabetesActive] = useState(false);
  const [testimonialActive , setTestimonialActive] = useState(false);
  const [methodActive , setMethodActive] = useState(false);
  const [approachActive , setApproachActive] = useState(false);
  const [contactActive , setContactActive] = useState(false);



 
  
  const activeHome = () =>{
    setHomeActive(true);
    setAboutActive(false);
    setServiceActive(false);
    setBeatingDiabetesActive(false);
    setTestimonialActive(false);
    setMethodActive(false);
    setApproachActive(false);
    setContactActive(false);
  }

  const activeAbout = () =>{
    setHomeActive(false);
    setAboutActive(true);
    setServiceActive(false);
    setBeatingDiabetesActive(false);
    setTestimonialActive(false);
    setMethodActive(false);
    setApproachActive(false);
    setContactActive(false);
  }

  const activeService = () =>{
    setHomeActive(false);
    setAboutActive(false);
    setServiceActive(true);
    setBeatingDiabetesActive(false);
    setTestimonialActive(false);
    setMethodActive(false);
    setApproachActive(false);
    setContactActive(false);
  }

  const activeBeatingDiabetes = () =>{
    setHomeActive(false);
    setAboutActive(false);
    setServiceActive(false);
    setBeatingDiabetesActive(true);
    setTestimonialActive(false);
    setMethodActive(false);
    setApproachActive(false);
    setContactActive(false);
  }

  const activeTesttimonial = () =>{
    setHomeActive(false);
    setAboutActive(false);
    setServiceActive(false);
    setBeatingDiabetesActive(false);
    setTestimonialActive(true);
    setMethodActive(false);
    setApproachActive(false);
    setContactActive(false);
  }

  const activeMethod = () =>{
    setHomeActive(false);
    setAboutActive(false);
    setServiceActive(false);
    setBeatingDiabetesActive(false);
    setTestimonialActive(false);
    setMethodActive(true);
    setApproachActive(false);
    setContactActive(false);
  }

  const activeApproach = () =>{
    setHomeActive(false);
    setAboutActive(false);
    setServiceActive(false);
    setBeatingDiabetesActive(false);
    setTestimonialActive(false);
    setMethodActive(false);
    setApproachActive(true);
    setContactActive(false);
  }
  const activeContact = () =>{
    setHomeActive(false);
    setAboutActive(false);
    setServiceActive(false);
    setBeatingDiabetesActive(false);
    setTestimonialActive(false);
    setMethodActive(false);
    setApproachActive(false);
    setContactActive(true);
  }

  return (
    <>
      <style type="text/css">{`
                .active{
                   
                    color: #fff;
                  
                    padding-top: 3px;
                    font-weight: 500;
                }

                @media screen and (max-width: 910px){
                    .active{
                        color: #fff;   
                        border-top:0;
                        background: #2988B4;
                        padding-top: 15px;
                    }

                    .active:hover{
                        color: #fff;   
                    }
                }

                .icons{
                    color: white;
                }
            `
      }
      </style>
      <Nav>
        <NavMenu>
          <NavItem>
            <a href="#home" onClick={activeHome} className={homeActive? "isActive" : 'isInActive'} >Home</a>
          </NavItem>
          <NavItem>
            <a href="#about" onClick={activeAbout} className={aboutActive ? "isActive" : 'isInActive'}>About</a>
          </NavItem>
          <NavItem>
            <a href="#service" onClick={activeService} className={serviceActive ? "isActive" : 'isInActive'}>Service</a>
          </NavItem>
          <NavItem>
            {/* <a href="#home">Beating Diabetes</a> */}
            <a href="#beatingDiabetes" onClick={activeBeatingDiabetes} className={beatingDiabetesActive ? "isActive" : 'isInActive'}>Beating Diabetes</a>
          </NavItem>
          <NavItem>
            <a href="#testimonial" onClick={activeTesttimonial} className={testimonialActive ? "isActive" : 'isInActive'}>Testimonial</a>
          </NavItem>
          <NavItem>
            <a href="#method" onClick={activeMethod} className={methodActive ? "isActive" : 'isInActive'}>Method</a>
          </NavItem>
          <NavItem>
            <a href="#approach" onClick={activeApproach} className={approachActive ? "isActive" : 'isInActive'}>Our Approach</a>
          </NavItem>
          <NavItem>
            <a href="#contact" onClick={activeContact} className={contactActive ? "isActive" : 'isInActive'}>Contact</a>
          </NavItem>
        </NavMenu>
      </Nav>
    </>
  );
};

export default Navbar;
