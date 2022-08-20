import styled  from 'styled-components';

export const AboutContainer = styled.div`
   
    background: #F9F9F9;
    padding: 60px 30px;
    margin: auto;


    h1{
        font-size: 40px;
        color: #1A284D;
        padding: 0 200px;
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
    margin: auto;
    display: flex;
    margin-top: 50px;
    align-items: center;
    justify-content: center;


    h2{
        color: #1A284D;
    }

    img{
        height: 500px;
        width: 450px;
        border-radius: 20px;
        margin-right: 30px;
    }

    .details{
        display: flex;
        flex-direction: column;
        text-align: left;
    }

    .details-item{
        width: 670px;
        display: flex;
        align-items: center;
        text-align: left;
        margin-bottom: 30px;
        justify-content: left;

        

        .check-icon{
            font-size: 30px;
            color: #6DB943;
            padding: 0;
            margin: 0;
            text-align: center;
        
        }

        span{
            margin-left: 10px;
            color: #1A284D;
            line-height: 1.4;
            
        }
    }
`