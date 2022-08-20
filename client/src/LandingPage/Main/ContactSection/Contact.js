import React from 'react'
import { ContactContainer, RowContainer } from './Contact-elements'

const Contact = () => {
  return (
    <ContactContainer>
        <h1>3 Simple steps to take control of your Diabetes today (without spending any money)</h1>
        <br/><br/>
        <RowContainer>
            <input className='text-input' type="text" id="fname" name="fname" placeholder='First Name' />
            <input className='text-input' type="text" id="lname" name="lname" placeholder='Last Name' />
            <input className='text-input' type="email" id="email" name="email" placeholder='Email Address' />
            <input className='btn-submit' type="submit" value="Submit" />
        </RowContainer>
    </ContactContainer>
  )
}

export default Contact