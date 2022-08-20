import React from 'react'
import { MethodCardContainer } from './MethodCard-elements'

const MethodCard = ({ title, description, list }) => {
    return (
        <MethodCardContainer>
            <h4 className='title'>{title}</h4>
            <p className='details'>{description}</p>
            <br/>
            <ul>
                <li>Personalized coach</li>
                <li>Doctor and nutritionist support</li>
                <li>12 coaching sessions</li>
                <li>18 educational sessions & workbook</li>
                <li>cookbook</li>
                <li>Exercise book</li>
                <li>App for messaging your coach</li>
                <li>24/7 access to all resources for year</li>
            </ul>
        </MethodCardContainer>
    )
}

export default MethodCard