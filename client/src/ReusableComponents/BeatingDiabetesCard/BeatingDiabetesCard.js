import React from 'react'
import { BeatingDiabetesCardContainer } from './BeatingDiabetesCard-elements'

const BeatingDiabetesCard = ({count, title, details}) => {
  return (
    <BeatingDiabetesCardContainer>
        <h1 className='count'>{count}</h1>
        <h4 className='title'>{title}</h4>
        <p className='details'>{details}</p>
    </BeatingDiabetesCardContainer>
  )
}

export default BeatingDiabetesCard