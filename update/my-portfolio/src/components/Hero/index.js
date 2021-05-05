import React, {useState} from 'react'
import Img1 from '../../images/image1.jpg';
import Img2 from '../../images/image2.jpg';
import Img3 from '../../images/image3.jpg';
import Img4 from '../../images/image4.jpg';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import {HeroContainer, HeroContent, HeroColumn, HeroIcon, HeroH1, HeroH2, Item, HeroBtnWrapper, ArrowRight, ArrowForward, HeroBg} from './HeroElements'
import { Carousel } from 'react-responsive-carousel';
import { Button } from '../ButtonElement';

const Hero = () => {

    const [hover, setHover] = useState(false)

    const onHover = () => {
        setHover(!hover)
    };

    return (
        <>
            <HeroContainer className='App'>
                <HeroBg>
                    <Carousel>
                        <Item>
                            <HeroColumn>
                                <HeroH1>ENTERPRISE SOFTWARE</HeroH1>
                                <HeroH1>DEVELOPMENT</HeroH1>
                                <HeroH2>We design and develop web and mobile applications for our clients worldwide,
                                        <br></br>focusing on outstanding customer experience.
                                </HeroH2>
                            </HeroColumn>
                            <HeroIcon src={Img1} />
                        </Item>
                        <Item>
                            <HeroColumn>
                                <HeroH1>ENTERPRISE SOFTWARE</HeroH1>
                                <HeroH1>DEVELOPMENT</HeroH1>
                                <HeroH2>We design and develop web and mobile applications for our clients worldwide,
                                        <br></br>focusing on outstanding customer experience.
                                </HeroH2>
                            </HeroColumn>
                            <HeroIcon src={Img2} />
                        </Item>
                        <Item>
                            <HeroColumn>
                                <HeroH1>ENTERPRISE SOFTWARE</HeroH1>
                                <HeroH1>DEVELOPMENT</HeroH1>
                                <HeroH2>We design and develop web and mobile applications for our clients worldwide,
                                        <br></br>focusing on outstanding customer experience.
                                </HeroH2>
                            </HeroColumn>
                            <HeroIcon src={Img3} />
                        </Item>
                        <Item>
                            <HeroColumn>
                                <HeroH1>ENTERPRISE SOFTWARE</HeroH1>
                                <HeroH1>DEVELOPMENT</HeroH1>
                                <HeroH2>We design and develop web and mobile applications for our clients worldwide,
                                        <br></br>focusing on outstanding customer experience.
                                </HeroH2>
                            </HeroColumn>
                            <HeroIcon src={Img4} />
                        </Item>
                    </Carousel>
                </HeroBg>
                <HeroContent>
                    <HeroBtnWrapper>
                        <Button to="/" onMouseEnter={onHover} onMouseLeave={onHover}
                        primary='true'
                        dark='true'
                        smooth={true}
                        duration={500}
                        spy={true}
                        exact='true'
                        offset={-80}
                        >
                        Explore {hover ?  <ArrowForward /> : <ArrowRight/>}
                        </Button>
                    </HeroBtnWrapper>
                </HeroContent>                 
            </HeroContainer>
        </>
    );
}

export default Hero;
