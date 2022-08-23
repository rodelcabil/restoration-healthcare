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
        max-width: 1000px;
        margin: auto;
    }
    h4{
        font-size: 25px;
        font-weight: 400;
        color: #1A284D;
        max-width: 1000px;
        margin: auto;
        text-transform: uppercase;
    }

    @media screen and (max-width: 910px){
        padding: 10px;
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
    grid-column-gap: 40px;
    grid-template-rows: 300px; 
    grid-template-columns: 350px 350px 350px;
    justify-items: center;

    @media (min-width: 651px) and (max-width: 1000px){
        grid-template-rows: 350px 350px ; 
        grid-template-columns: 350px 350px ;
        grid-row-gap: 0px;
    }
    @media screen and (max-width: 650px){
        grid-template-rows: 350px 350px 350px ; 
        grid-template-columns: 350px ;
        grid-row-gap: 0px;
    }

`