import React from 'react'
import BeatingDiabetesCard from '../../../ReusableComponents/BeatingDiabetesCard/BeatingDiabetesCard'
import ReusableScheduleButton from '../../../ReusableComponents/ScheduleButton'
import { BeatingDiabetesContainer, RowContainer } from './beatingDiabetes-elements'

const BeatingDiabetes = () => {
  return (
    <BeatingDiabetesContainer>
          <h1>JUST THREE STEPS TO BEATING DIABETES</h1>
          <br/> <br/>
          <RowContainer>
            <BeatingDiabetesCard count="1" title="Schedule free discovery call" details="We will talk with you about your health, lifestyle habits, and the issues you are faceing, and find out what barriers you're struggling with. Together, we'll decide if this is the right program for you." />
            <BeatingDiabetesCard count="2" title="Get your customized plan" details="Our physician and dietian will craft a lifestyle and diet plan to help you eliminate your diabetes. we take into consideration unique situation, and then work with you to help get the outcome you want." />
            <BeatingDiabetesCard count="3" title="Enjoy a happier & healthier life" details="Your personal lifestyle coach will assist you for 12 weeks toward a healthier, happier life transformation. not only will you lose weight, look younger, and have more energy, you'll get to live a longer life." />
          </RowContainer>
          <br/><br/>
          <ReusableScheduleButton bgcolor="#6DB943" color="#fff" />
    </BeatingDiabetesContainer>
  )
}

export default BeatingDiabetes