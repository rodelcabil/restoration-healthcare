import React from 'react'
import { StatisticsCardContainer } from './StatisticCard-elements'

const StatisticsCard = ({imgPath, name, statistics, details }) => {
  return (
    <StatisticsCardContainer>
        <img src={imgPath} alt={name} />
        <h4 className='name'>{name}</h4>
        <p className='statistics'>{statistics}</p>
        <p className='details'>{details}</p>
    </StatisticsCardContainer>
  )
}

export default StatisticsCard