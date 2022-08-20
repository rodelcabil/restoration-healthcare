import React from 'react'
import MethodCard from '../../../ReusableComponents/MethodCard/MethodCard'
import ReusableScheduleButton from '../../../ReusableComponents/ScheduleButton'
import { MethodContainer, RowContainer } from './Method-element'

const Method = () => {
    return (
        <MethodContainer>
            <h1>Our proven lifestyle coaching method works from the inside out.</h1>
            <br />
            <h4>There are 3 ways to work with us:</h4>
            <br /><br />
            <RowContainer>
                <MethodCard title="1:1 diabetic coaching" description="Health information alone does not change people. But Magic happens when you couple the right information with and experience"/>
                <MethodCard title="Group Diabetic coaching" description="Enjoy a community of people who are the journey you for additional connection and support." />
                <MethodCard title="Online Diabetic Course" description="Over 21 days you'll empower yourself to address the root cause of diabetes and integrate your transformation at your" />
            </RowContainer>
            <br />
            <ReusableScheduleButton bgcolor="#6DB943" color="#fff" />
        </MethodContainer>
    )
}

export default Method