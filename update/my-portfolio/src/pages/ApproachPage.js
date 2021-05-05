import React from 'react'
import InfoSection from '../components/InfoSection';
import {NavBtn, NavBtnLink} from '../components/Navbar/NavbarElements';
import Hero from '../components/Hero'
import Footer from '../components/Footer';
import { homeObjOne, homeObjThree, homeObjTwo } from '../components/InfoSection/Data';

const ApproachPage = () => {
    return (
        <div id="approachpage">
            <NavBtn>
                <NavBtnLink to='/'> Home </NavBtnLink>
            </NavBtn>
            <Hero />
            <InfoSection {...homeObjOne}/>
            <InfoSection {...homeObjTwo}/>
            <InfoSection {...homeObjThree}/>
            <Footer />
        </div>
    )
}

export default ApproachPage;