import React, {useState} from 'react';
import Icon1 from '../../images/laptop.png';
import Icon2 from '../../images/smartphone.png';
import Icon3 from '../../images/team.png';
import Icon4 from '../../images/brain.png';
import Icon5 from '../../images/web.png';
import Icon6 from '../../images/test.png';
import {ServicesContainer, ServicesH1, ServicesWrapper, ServicesCard, ServicesIcon, ServicesH2, ServicesP} from './ServiceElements';

const Services = () => {

        return (
        <ServicesContainer id='services'>
            <ServicesH1>WHAT WE OFFER</ServicesH1>
            <ServicesH2>Python Solutions is a passionate group of technical craftsment!
                    <br></br>Our people have been selected and trained intensely to develop world-class solutions.
            </ServicesH2>
            <ServicesWrapper>
                <ServicesCard>
                        <ServicesIcon src={Icon1}/>
                        <ServicesH2>Enterprise Software Development</ServicesH2>
                        <ServicesP>Create complex enterprise software, ensure reliable software integration, modernise your legacy system.</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon2}/>
                    <ServicesH2>Mobile App Development</ServicesH2>
                    <ServicesP>Create impactful mobile app that fits your brand and industry within a shorter time frame.</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon3}/>
                    <ServicesH2>Dedicated Development Team</ServicesH2>
                    <ServicesP>Hire loyal software development team with niche skills and deep expertise.</ServicesP>
                </ServicesCard>
                <ServicesCard>
                        <ServicesIcon src={Icon4}/>
                        <ServicesH2>It Consulting</ServicesH2>
                        <ServicesP>Trust our minds to eliminate workflow pain points, implement new tech and consolidate app portfolios.</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon5}/>
                    <ServicesH2>UI/UX Design</ServicesH2>
                    <ServicesP>Build the product you need on time with an experienced team that uses a clear and effective design process.</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon6}/>
                    <ServicesH2>QA & Testing</ServicesH2>
                    <ServicesP>Turn to our experts to perform comprehensive, multi-stage testing and auditing of your software.</ServicesP>
                </ServicesCard>
            </ServicesWrapper>
        </ServicesContainer>
    )
}

export default Services;
