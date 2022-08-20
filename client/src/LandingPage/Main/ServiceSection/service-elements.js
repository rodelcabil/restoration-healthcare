import styled  from 'styled-components';


export const ServiceContainer = styled.div`
   
    padding: 20px;
    margin: auto;


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
    align-items: center;
    justify-content: center;
    grid-row-gap: 40px;
    grid-template-rows: ${({small}) => (small ? '300px' : 'auto')}; 
    grid-template-columns: ${({small}) => (small ? '370px 370px 370px' : '400px 400px 400px')};   ;
    justify-items: center;
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
`