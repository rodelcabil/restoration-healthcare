import React from 'react'
import TestimonialCard from '../../../ReusableComponents/TestimonialCard/TestimonialCard'
import { RowContainer, TestimonialContainer } from './Testimonial-elements'
import John from '../../../images/Testimonial/1.avif'
import Paul from '../../../images/Testimonial/2.avif'
import Rosalie from '../../../images/Testimonial/3.avif'


const Testimonial = () => {
  return (
    <TestimonialContainer>
        <h1>"After just 45 days in the program i'm insulin free and my life is back to normal!"</h1>
        <br/><br/>
        <RowContainer>
            <TestimonialCard imgPath={John} name="John O. Clark" testimonial="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore." />
            <TestimonialCard imgPath={Paul} name="Paul C. Drum" testimonial="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore." />
            <TestimonialCard imgPath={Rosalie} name="Rosalie P. Davis" testimonial="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore." />
        </RowContainer>
    </TestimonialContainer>
  )
}

export default Testimonial