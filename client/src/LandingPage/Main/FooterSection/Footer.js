import React from 'react'
import { FooterContainer, RowContainer } from './Footer-elements'
import LogoBW from '../../../images/Logo-BW.PNG'
import {AiFillFacebook,AiOutlineSearch,AiFillInstagram, AiOutlineTwitter, AiFillYoutube} from 'react-icons/ai'
import {BsCreditCard2FrontFill} from 'react-icons/bs'
import {FaCcPaypal, FaCcVisa} from 'react-icons/fa'
const Footer = () => {
  return (
    <FooterContainer>
        <RowContainer>
            <div className='first-row'>
                <img src={LogoBW} alt='Healthcare Restoration Logo'/>
                <br/><br/>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</p>
                <br/>
                <div className='socials'>
                    <BsCreditCard2FrontFill size={25} className="social-icons"/>
                    <FaCcPaypal size={25} className="social-icons"/>
                    <FaCcVisa size={25} className="social-icons"/>
                </div>
            </div>
            <div className='second-row'>
                <span>Useful Links</span>
                <ul>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#service">Service</a></li>
                    <li><a href="">High Risk</a></li>
                    <li><a href="#method">Method</a></li>
                    <li><a href="#approach">Approach</a></li>
                    <li><a href="#testimonial">Testimonial</a></li>
                    <li><a href="#contact">Contact</a></li>
                    <li><a href="#beatingDiabetes">Beating Diabetes</a></li>
                </ul>
            </div>
            <div className='third-row'>
                <span>Quick Links</span>
                <br/>
                <ul>
                    <li><a href="">Privacy Policy</a></li>
                    <li><a href="">Photo Policy</a></li>
                    <li><a href="">Term Condition</a></li>
                    <li><a href="">FAQs</a></li>
                </ul>
            </div>
            <div className='fourth-row'>
                <span>News Letter</span> <br/>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</p>
                <br/>
                <div className='input-container'>
                    <input className='text-input' type="email" id="email" name="email" placeholder='Email Address' />
                    <AiOutlineSearch color="#6DB943" size={25} />
                </div><br/>
                <div className='socials'>
                    <AiFillFacebook size={25} className="social-icons"/>
                    <AiFillInstagram size={25} className="social-icons"/>
                    <AiOutlineTwitter size={25} className="social-icons"/>
                    <AiFillYoutube size={25} className="social-icons"/>
                </div>
            </div>
            <div className='fifth-row'>
                <span>REQUEST SERVICE</span> <br/>
                <p>Location</p> <br/>
                <span className='location'>3281 North Decatur Blvd #270 Las Vegas, nevada 89130</span> <br/><br/>
                <p>702-515-1515</p> 
                <p className='desc'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut   sed do eiusmod  incididunt ut  sed do  tempor incididunt ut labore.</p>
            </div>
        </RowContainer>
        <br/>
        <span >Copy Right By Restoration Healthcare All Right Reserved 2022 | UI/UX design by <a href="https://www.behance.net/dxdesignz" target="_blank">DX Designz</a></span>
    </FooterContainer>
  )
}

export default Footer