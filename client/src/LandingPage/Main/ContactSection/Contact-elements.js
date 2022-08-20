import styled from 'styled-components';

export const ContactContainer = styled.div`
   
    padding: 40px 60px;
    margin: auto;


    h1{
        font-size: 40px;
        color: #1A284D;
        padding: 0 180px;
    }
    h4{
        font-size: 20px;
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

`