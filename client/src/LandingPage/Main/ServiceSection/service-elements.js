import styled  from 'styled-components';


export const ServiceContainer = styled.div`
   
    padding: 20px;
    margin: auto;


    h1{
        font-size: 40px;
        color: #1A284D;
        margin: auto;
    }
    h4{
        font-size: 22px;
        font-weight: 400;
        color: #1A284D;
        max-width: 1000px;
        margin: auto;
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
    align-items: center;
    justify-content: center;
    grid-row-gap: 40px;
    grid-template-rows: ${({small}) => (small ? '300px' : 'auto')}; 
    grid-template-columns: ${({small}) => (small ? '350px 350px 350px' : '400px 400px 400px')};   ;
    justify-items: center;

    @media (min-width: 651px) and (max-width: 1000px){
        grid-template-rows: 250px 250px ; 
        grid-template-columns: 350px 350px ;
        grid-row-gap: 0px;
    }
    @media screen and (max-width: 650px){
        grid-template-rows: 250px 250px 250px ; 
        grid-template-columns: 350px ;
        grid-row-gap: 0px;
    }

`

export const RiskRowContainer = styled.div`
    max-width: 1500px;
    display: grid;
    margin: auto;
    align-items: center;
    justify-content: center;
    grid-row-gap: 40px;
    grid-template-rows: ${({small}) => (small ? '300px' : 'auto')}; 
    grid-template-columns: 350px 350px 350px;
    justify-items: center;

    @media (min-width: 651px) and (max-width: 1000px){
        grid-template-rows: 250px 250px 250px; 
        grid-template-columns: 350px 350px;
        grid-row-gap: 50px;
    }

    @media screen and (max-width: 650px){
        grid-template-rows: 250px 250px 250px 250px 250px 250px; 
        grid-template-columns: 350px ;
        grid-row-gap: 0px;
    }

`

export const StatisticsContainer = styled.div`
   
   background: #F9F9F9;
   margin: auto;
   padding: 20px;

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

    @media screen and (max-width: 910px){
        padding: 0px;
    }
`