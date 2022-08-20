import styled  from 'styled-components';


export const TestimonialContainer = styled.div`
   
    padding: 30px;
    margin: auto;
    background: #f9f9f9;

    h1{
        font-size: 40px;
        color: #1A284D;
        padding: 0 200px;
        text-transform: uppercase;
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