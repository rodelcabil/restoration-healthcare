import styled  from 'styled-components';

export const BeatingDiabetesContainer = styled.div`
   
    padding: 30px;
    margin: auto;
    display: flex;
    align-items: center;
    flex-direction: column;
   


    h1{
        font-size: 40px;
        color: #1A284D;
    }
    h4{
        font-size: 22px;
        font-weight: 400;
        color: #1A284D;
        padding: 0 290px;
    }
`

export const RowContainer = styled.div`
    max-width: 1500px;
    display: grid;
    margin: auto;
    align-items: flex-start;
    justify-content: center;
    grid-row-gap: 40px;
    grid-template-rows: 300px; 
    grid-template-columns: 370px 370px 370px;
    justify-items: center;
`