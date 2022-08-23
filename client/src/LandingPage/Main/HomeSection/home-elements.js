import styled  from 'styled-components';
import bg from '../../../images/1.jpg';


export const HomeContainer = styled.div`
    display: flex;
    position: relative;
    height: 80vh;
    align-items: center;
    text-align: center;
    background-image: linear-gradient(rgba(0, 0, 0, 0.6),
                       rgba(0, 0, 0, 0.7)), url(${bg});
    background-size: cover;
  
    @media screen and (max-width: 1000px){
        height: auto;
        width: auto;
    }

`

export const ColumnContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding: 60px;
    max-width: 1500px;
    align-items: center;
    text-align: center;
    justify-content: space-between;
    margin: auto;

    h1{
        font-size: 40px;
        color: #fff;
        max-width: 1000px;
    }

    h4{
        font-size: 25px;
        font-weight: 400;
        color: #fff;
        max-width: 1000px;
    }

    .highlight-text{
        color: #6DB943;
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