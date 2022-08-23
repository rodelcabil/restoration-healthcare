import styled  from 'styled-components';

export const ServiceCardContainer = styled.div`

    display: flex;
    flex-direction: column;
    max-width: 300px;
    align-items: center;

    img{
        margin-bottom: 10px;
    }

    .details{
        font-size: 16px;
        color: #1A284D;
        padding: 0;
        line-height: 1.5;
        font-weight: 500;
    }
    .name{
        font-size: 20px;
        font-weight: bold;
        color: #1A284D;
        padding: 0;
        margin-bottom: 10px;
    }

    @media screen and (max-width: 910px){
        max-width: auto;
    }

`

