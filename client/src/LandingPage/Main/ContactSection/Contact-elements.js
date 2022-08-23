import styled from 'styled-components';

export const ContactContainer = styled.div`
   
    padding: 40px 60px;
    margin: auto;


    h1{
        font-size: 40px;
        color: #1A284D;
        max-width: 1000px;
        margin: auto;
    }
    h4{
        font-size: 20px;
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
    align-items: flex-start;
    justify-content: center;
    grid-column-gap: 5px;
    grid-template-rows: 50px; 
    grid-template-columns: 300px 300px 300px 300px;
    justify-items: center;

    .text-input{
        background: #F9F9F9;
        border: none;
        padding: 26px 30px;
        border-radius: 10px;
        font-size: 16px;
        font-weight: 600;
        height: 30px;
        
        @media screen and (max-width: 650px){
            width: 100%;
        }
    }

    .btn-submit{
        text-decoration: none;
        display: inline-block;
        background:#6DB943;
        color: #fff;
        font-size: 16px;
        border: none;
        height: 50px;
        border-radius: 5px;
        width: fit-content;
        padding: 10px 30px;
        cursor: pointer;
        font-weight: 600;
        width: 280px;
        

        &:hover{
            color:  #fff;
            transition: background 0.5s;
        }
    }

    @media (min-width: 651px) and (max-width: 1000px){
        grid-template-rows: auto auto ; 
        grid-template-columns: 350px 350px ;
        grid-row-gap: 20px;
    }

    @media screen and (max-width: 650px){
        grid-template-rows: auto auto ; 
        grid-template-columns: 100%; ;
        grid-row-gap: 20px;
    }

`