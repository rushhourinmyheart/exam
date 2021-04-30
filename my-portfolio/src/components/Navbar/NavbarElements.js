import styled from 'styled-components'
import { Link as LinkR } from 'react-router-dom'
import { Link as LinkS } from 'react-scroll'

//properties of Navbar
export const Nav = styled.nav`
background: 'transparent';
height: 80px;
margin-top: -80px;
display: flex;
justify-content: center;
align-items: center;
font-size: 1rem;
position: sticky;
top: 0;
z-index: 10;

@media screen and (max-width: 960px) {
    transition: 0.8s all escape;
}
`;
export const NavbarContainer = styled.div`
display: flex;
justify-content: space-between;
height: 80px;
z-index: 1;
width: 100%;
padding: 0 24px;
`;

export const NavLogo = styled(LinkR)`
justify-self: flex-start;
cursor: pointer;
height: 75%;
width: 75%;
display: flex;
align-items: center;
margin-left: 8px;
margin-top: 7px;
text-decoration: none;
position: relative;
`;

export const LogoPic = styled.img`
height: 100%;
max-width: 100%;
align-items: center;
display: flex;
position absolute;
top: 0;
left: 0;
transition: all 0.2s ease-in-out;

&:hover {
    transform: scale(1.05);
    transition: all 0.2s ease-in-out;
    cursor: pointer;
}

`;

export const MobileIcon = styled.div`
display: none;

@media screen and (max-width: 1000px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
    color: #F24343;
}
`;

export const NavMenu = styled.ul`
display: flex;
align-items: flex;
list-style: none;
text-align: left;
margin-right: -22px;

@media screen and (max-width: 1000px) {
    display: none;
}
`;

export const NavItem = styled.li`
height: 80px;
`;

export const NavLinks = styled(LinkS)`
color: #fff;
display: flex;
align-items: center;
text-decoration: none;
padding: 0 1rem;
height: 100%;
cursor: pointer;

&:hover {
color: #8a0303;
transition: 0.2s ease-in-out;
}
`;

export const NavLink = styled(LinkR)`
color: #fff;
display: flex;
align-items: center;
text-decoration: none;
padding: 0 1rem;
height: 100%;
cursor: pointer;

&:hover {
color: #8a0303;
transition: 0.2s ease-in-out;
}
`;

//SignIn btn disappears when window adjusted smaller
export const NavBtn = styled.nav`
display: flex;
align-items: center;

@media screen and (max-width: 760px) {
    display: none;
}
`;

//Properties of Contact Page button
export const NavBtnLink = styled(LinkR)`
border-radius: 50px;
background: #8a0303;
white-space: nowrap;
padding: 10px 22px;
color: #fff;
font-size: 16px;
outline: none;
border: none;
cursor: pointer;
transition: all 0.2s ease-in-out;
text-decoration: none;

&:hover {
    transition: all 0.2s ease-in-out;
    background: #000;
    color: #fff;
}
`;

