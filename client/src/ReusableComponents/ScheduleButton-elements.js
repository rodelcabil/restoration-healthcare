import styled  from 'styled-components';

export const ScheduleButton = styled.button`
    text-decoration: none;
    display: inline-block;
    text-transform: uppercase;
    font-size: 13px;
    border: none;
    height: 50px;
    border-radius: 5px;
    width: fit-content;
    padding: 10px 30px;
    cursor: pointer;
    font-weight: 800;
   

    &:hover{
         color:  #fff;
         transition: background 0.5s;
    }

    @media screen and (max-width: 912px){
        
        height: 40px;
        margin: auto;
        margin-top: 20px;
        margin-bottom: 30px
    } 
`;