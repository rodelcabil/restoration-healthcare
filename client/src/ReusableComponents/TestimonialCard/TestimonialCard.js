import React from 'react'
import { TestimonialCardContainer } from './TestimonialCard-elements'

const TestimonialCard = ({imgPath, name, testimonial}) => {
  return (
    <TestimonialCardContainer>
        <img src={imgPath} alt={name} />
        <h4 className='name'>{name}</h4>
        <p className='details'>{testimonial}</p>
    </TestimonialCardContainer>
  )
}

export default TestimonialCard