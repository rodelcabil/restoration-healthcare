import styled  from 'styled-components';

export const MethodCardContainer = styled.div`

    display: flex;
    flex-direction: column;
    width: 350px;
    align-items: flex-start;
    text-transform: uppercase;



   
    .title{
        font-size: 22px;
        font-weight: bold;
        color: #1A284D;
        padding: 0;
        text-align: left;
        margin-bottom: 10px;
    }
    .details{
        font-size: 14px;
        color: #1A284D;
        padding: 0;
        text-align: left;
        font-weight: 600;
        line-height: 1.5;
        
    }
    ul{
        text-align: left;
    }

    li{
        margin-left: 20px;
        color: #1A284D;
        font-size: 14px;
        font-weight: 600;
        line-height: 1.5;
    }

`

