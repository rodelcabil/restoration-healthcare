import styled  from 'styled-components';
import bg from '../../../images/doctors.jpg';


export const ApproachContainer = styled.div`
    display: flex;
   
    align-items: center;
    text-align: center;
    background-image: linear-gradient(rgba(0, 0, 0, 0.7),
                       rgba(0, 0, 0, 0.7)), url(${bg});
    background-size: cover;

`

export const ColumnContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding: 80px 0;
    max-width: 1000px;
    align-items: center;
    text-align: center;
    justify-content: space-between;
    margin: auto;

    h1{
        font-size: 40px;
        color: #fff;
        padding: 0 200px;
    }

    h4{
        font-size: 20px;
        font-weight: 400;
        color: #fff;
        padding: 0 100px;
        line-height: 1.5;
    }

    .highlight-text{
        color: #6DB943;
    }

`