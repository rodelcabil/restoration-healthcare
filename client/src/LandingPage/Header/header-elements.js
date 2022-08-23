import styled  from 'styled-components';

export const HeaderContainer = styled.div`
    display:  flex;
    padding: 5px 10px;

    @media screen and (max-width: 910px){
        display: none;
    }
`

export const RowContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 1500px;
    margin: auto;
    padding: 0 80px;
    

    @media screen and (max-width: 800px){
      
        padding: 0;
        text-align: center;
        margin-left: auto;
        margin-right: auto;
    }


   
`;


export const LogoContainer = styled.div`
    display: flex;

    img{
        height: 70px;

        @media screen and (max-width: 800px){
             height: 60px;
        }
    }

`

export const EmailContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    .email-container{
        display: flex;
        align-items: center;
        justify-content: space-between;

        @media screen and (max-width: 800px){
            display: none;
        }
    }

    .email-icon-container{
        padding: 16px 18px;
        border: 1px solid #6DB943;
        border-radius: 100%;
    }

    .email{
        color: #6DB943; 
        padding: 10px;
        font-weight: 600;

        
    }

    
    
`