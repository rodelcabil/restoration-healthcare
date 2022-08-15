import React from 'react'
import { HeaderContainer, RowContainer, LogoContainer, EmailContainer } from './header-elements'
import Logo from '../../images/logo.PNG'
import {FaEnvelope} from 'react-icons/fa'
import ReusableScheduleButton from '../../ReusableComponents/ScheduleButton'

const Header = () => {
  return (
    <HeaderContainer>
        <RowContainer>
            <LogoContainer>
                <img src={Logo} alt="Logo"/>
            </LogoContainer>
            <EmailContainer>
                <div className='email-icon-container'>
                    <FaEnvelope color='#6DB943' size="20"/>
                </div>
                <span>www.restorationhealthcare.com</span>
                <ReusableScheduleButton bgcolor="#6DB943" color="#fff"/>
            </EmailContainer>
        </RowContainer>
    </HeaderContainer>
  )
}

export default Header