import React from 'react'
import { ScheduleButton } from './ScheduleButton-elements'

const ReusableScheduleButton = ({bgcolor, color}) => {
  return (
    <ScheduleButton style={{background: bgcolor, color: color}}>
       Schedule a call
    </ScheduleButton>
  )
}

export default ReusableScheduleButton