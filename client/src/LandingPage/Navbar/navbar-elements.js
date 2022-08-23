import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Nav = styled.nav`
background: #1C284E;
height: 60px;
display: flex;
justify-content: center;
align-items: center;
font-size: 16px;
position: sticky;
top: 0;
z-index: 999;
width: 100%;
margin: auto;
padding: 0 60px 0 60px;

.mobile-container{

    display: none;


    @media screen and (max-width: 1000px){
        display: flex;
        width: 100%;
        align-items: center;
        justify-content: space-between;
    }
}

.logoContainer{
    display: flex;
    flex-direction: column;
    
  

    span{
        color: white;
        text-transform: uppercase;
        letter-spacing: 2px;
        font-size: 10px;
    }

    .logo{
        height: 50px;
       

    }

    
}



@media screen and (max-width: 1000px){
    width: 100%;
    padding: 0 10px 0 10px;
}

`;

export const MobileIcon = styled.div`
    display: none;
    color: #fff;
    .icons{
        color: #fff
    }

    @media screen and (max-width: 1000px){
        display: flex;
        
        font-size: 1.8rem;
        
        cursor: pointer;
        color: white;
       
    }
`;

export const NavMenu = styled.ul`
display: flex;
align-items: center;
list-style: none;
text-align: center;

@media screen and (max-width: 1000px){
    display: flex;
    flex-direction: column;
    
    width: 50%;
    height: calc(100vh - 60px);  
    position: absolute;
    top: 60px;
    right: ${({ click }) => (click ? 0 : '-100%')};
    opacity: 1;
    transition: all 0.5s ease;
    background: #0D1B2A;
    padding-left: 0px;
  
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 15px 0 rgba(0, 0, 0, 0.19);
}
`;


export const NavItem = styled.li`
height: 60px;
display: inline-block;
text-align: center;
color: #fff;

    .isInActive{
        color: #fff;
        display: flex;
        align-items: center;
        text-decoration: none;
        padding: 0.5rem 2rem;
        height: 100%;
        font-size: 14px;
        text-transform: uppercase;
        cursor: pointer;


        ${'' /* &:hover{
            text-decoration: none;
            color: #fff;
            background: #6DB943;
        } */}
    }

    .isActive{
        color: #fff;
        display: flex;
        align-items: center;
        text-decoration: none;
        padding: 0.5rem 2rem;
        height: 100%;
        font-size: 14px;
        text-transform: uppercase;
        cursor: pointer;
        background: yellow;
        color: #fff;
        background: #6DB943;
    }
}


@media screen and (max-width: 910px){
    width: 100%;
   
}
`;




export const NavLinks = styled(NavLink)`
color: #fff;
display: flex;
align-items: center;
text-decoration: none;
padding: 0.5rem 2rem;
height: 100%;
font-size: 14px;
text-transform: uppercase;
cursor: pointer;



&:focus{
     background: yellow;
     color: #fff;
    background: #6DB943;
}

${'' /* &:hover{
    text-decoration: none;
    color: #fff;
    background: #6DB943;
} */}



@media screen and (max-width: 910px){
    text-align: center;
    padding: 1rem;
    width: 100%;
    display: table;

    &:hover{
        color: #2988B4;
        transition: all 0.3s ease;
       
        text-decoration: none;
        
    }
}
`;