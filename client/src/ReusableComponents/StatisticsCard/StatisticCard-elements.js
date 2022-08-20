import styled  from 'styled-components';

export const StatisticsCardContainer = styled.div`

    display: flex;
    flex-direction: column;
    width: 400px;
    align-items: center;
    justify-content: center;
    margin: auto;
    

    img{
        margin-bottom: 10px;
    }

    .name{
        font-size: 25px;
        font-weight: bold;
        color: #1A284D;
        padding: 0;
        margin-bottom: 10px;
        text-transform: uppercase;
    }

    .statistics{
        font-size: 23px;
        font-weight: 600;
        color: #6DB943;
        margin-bottom: 10px;
    }

    
    .details{
        font-size: 20px;
        color: #6DB943;
        padding: 0;
        line-height: 1.5;
        font-weight: 500;
       
    }

`

