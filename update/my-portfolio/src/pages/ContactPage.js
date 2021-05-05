import React from 'react'
import Contact from '../components/Contact';
import {NavBtnLink, NavBtn} from '../components/Navbar/NavbarElements';
import Hero from '../components/Hero'
import Footer from '../components/Footer';

const ContactPage = () => {
    return (
        <div>
            <NavBtn>
                <NavBtnLink to='/'> Home </NavBtnLink>
            </NavBtn>
            <Hero />
            <Contact/>
            <Footer />
        </div>
    )
}

export default ContactPage;