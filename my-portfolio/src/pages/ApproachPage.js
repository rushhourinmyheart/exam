import React from 'react'
import InfoSection from '../components/InfoSection';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero'
import Footer from '../components/Footer';
import { homeObjOne, homeObjThree, homeObjTwo } from '../components/InfoSection/Data';

const ApproachPage = () => {
    return (
        <div id="approachpage">
            <Navbar />
            <Hero />
            <InfoSection {...homeObjOne}/>
            <InfoSection {...homeObjTwo}/>
            <InfoSection {...homeObjThree}/>
            <Footer />
        </div>
    )
}

export default ApproachPage;