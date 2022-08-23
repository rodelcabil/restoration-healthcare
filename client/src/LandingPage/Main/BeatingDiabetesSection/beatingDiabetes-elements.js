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
        max-width: 1000px;
        margin: auto;
    }

    @media screen and (max-width: 910px){
        padding: 10px;
        margin: auto;
        h1{
            font-size: 35px;
            
        }

        h4{
            font-size: 20px;
            
        }
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
    grid-template-columns: 360px 360px 360px;
    justify-items: center;

  

    @media (min-width: 651px) and (max-width: 1000px){
        grid-template-rows: 300px 300px ; 
        grid-template-columns: 350px 350px;
        grid-row-gap: 20px;
    }

    @media screen and (max-width: 650px){
        grid-template-rows: 300px 300px 300px; 
        grid-template-columns: 350px ;
        grid-row-gap: 20px;
    }
`