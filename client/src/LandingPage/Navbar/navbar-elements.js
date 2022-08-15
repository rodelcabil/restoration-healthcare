import styled from 'styled-components';


export const Nav =  styled.nav`
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
@media screen and (max-width: 910px){
    width: 100%;
    padding: 0 10px 0 10px;
}

`;

export const NavMenu = styled.ul`
display: flex;
align-items: center;
list-style: none;
text-align: center;

@media screen and (max-width: 910px){
    display: flex;
    flex-direction: column;
    width: 50%;
    height: calc(100vh - 60px);  
    position: absolute;
    top: 60px;
    right: ${({click}) => (click ? 0 : '-100%')};
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


@media screen and (max-width: 910px){
    width: 100%;
   
}
`;


export const NavLinks = styled.a`
color: #fff;
display: flex;
align-items: center;
text-decoration: none;
padding: 0.5rem 2rem;
height: 100%;
font-size: 14px;
text-transform: uppercase;

&:hover{
    text-decoration: none;
}

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