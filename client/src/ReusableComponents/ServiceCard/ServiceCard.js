import React from 'react'
import { ServiceCardContainer } from './ServiceCard-elements'

const ServiceCard = ({imgPath, name, details}) => {
  return (
    <ServiceCardContainer>
        <img src={imgPath} alt={name} />
        <h4 className='name'>{name}</h4>
        <p className='details'>{details}</p>
    </ServiceCardContainer>
  )
}

export default ServiceCard