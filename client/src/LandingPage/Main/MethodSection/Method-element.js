import styled  from 'styled-components';

export const MethodContainer = styled.div`
   
    padding: 30px;
    margin: auto;
    display: flex;
    align-items: center;
    flex-direction: column;
   


    h1{
        font-size: 40px;
        color: #1A284D;
        text-transform: uppercase;
        padding: 0 200px;
    }
    h4{
        font-size: 25px;
        font-weight: 400;
        color: #1A284D;
        padding: 0 290px;
        text-transform: uppercase;
    }
`

export const RowContainer = styled.div`
    max-width: 1500px;
    display: grid;
    margin: auto;
    align-items: flex-start;
    justify-content: center;
    grid-column-gap: 40px;
    grid-template-rows: 300px; 
    grid-template-columns: 370px 370px 370px;
    justify-items: center;
`