import React, {useState} from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Footer from '../components/Footer'
import Services from '../components/Services'
import Work from '../components/Work'
import Insights from '../components/Insights'

const Home = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
    setIsOpen(!isOpen)
};
    return (
        <>
            <Navbar toggle={toggle} />
            <Hero/>
            <Services />
            <Work />
            <Insights />
            <Footer/>
        </>
    );
}

export default Home;
