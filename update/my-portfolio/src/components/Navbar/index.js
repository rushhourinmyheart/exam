import React, {useState, useEffect} from 'react';
import {FaBars} from 'react-icons/fa';
import {Nav, NavbarContainer, NavLogo, LogoPic, MobileIcon, NavMenu, NavItem, NavLinks, NavLink, NavBtn, NavBtnLink} from './NavbarElements';
import {IconContext} from 'react-icons/lib';
import {animateScroll as scroll} from 'react-scroll';
import Logo from '../../images/pylogo.png'

const Navbar = ({ toggle }) => {
    const [scrollNav, setScrollNav] = useState(false)

    const changeNav = ()=> {
        if(window.scrollY >= 80) {
            setScrollNav(true)
        } else {
            setScrollNav(false)
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', changeNav)
    }, []);

    const toggleHome = () => {
        scroll.scrollToTop();
    };
    return (
        <>
        <IconContext.Provider value={{ color: '#F24343'}}>
        <Nav scrollNav={scrollNav}>
            <NavbarContainer>
                <NavLogo>
                    <LogoPic to='/' onClick={toggleHome} src={Logo}/>
                </NavLogo>
                <MobileIcon onClick={toggle}>
                    <FaBars />
                </MobileIcon>
                <NavMenu>
                    <NavItem>
                        <NavLinks to='services'
                        smooth={true}
                        duration={500}
                        spy={true}
                        exact='true'
                        offset={-80}
                        >SERVICES</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to='work'
                        smooth={true}
                        duration={500}
                        spy={true}
                        exact='true'
                        offset={-80}
                        >WORK</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLink to='/ApproachPage'
                        smooth={true}
                        duration={500}
                        spy={true}
                        exact='true'
                        offset={-80}
                        >APPROACH</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLinks to='insights'
                        smooth={true}
                        duration={500}
                        spy={true}
                        exact='true'
                        offset={-80}
                        >INSIGHTS</NavLinks>
                    </NavItem>
                    <NavBtn>
                        <NavBtnLink to='/ContactPage'>GET IN TOUCH</NavBtnLink>
                    </NavBtn>
                </NavMenu>

            </NavbarContainer>
        </Nav>
        </IconContext.Provider>
        </>
    );
}

export default Navbar;
