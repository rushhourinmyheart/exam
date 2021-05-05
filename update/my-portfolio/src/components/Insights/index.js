import React from 'react';
import {InsightsContainer, InfoRow, Column1, Column2, Wrapper, InsightsH1, Icon, Topline, Headline, Description} from '../Insights/InsightElement'
import Img1 from '../../images/tesla.jpg'
import Img2 from '../../images/bitcoin.jpg'
import Img3 from '../../images/blue.jpg'

const Insights = () => {
    return (
        <>
            <InsightsContainer id='insights'>
                <InsightsH1>FEATURED INSIGHTS</InsightsH1>
                <InfoRow>
                    <Column1>
                        <Icon src={Img2}></Icon>
                        <Topline>BLOCKCHAIN</Topline>
                        <Headline>Buying Tesla with Bitcoin: The Never Ending Potential of Blockchain Technology</Headline>
                        <Description>insert description here</Description>
                    </Column1>
                    <Column2>
                        <Wrapper>
                            <Icon src={Img1}></Icon>
                            <Topline>BLOCKCHAIN</Topline>
                            <Headline>Buying Tesla with Bitcoin: The Never Ending Potential of Blockchain Technology</Headline>
                            <Description>insert description here</Description>
                        </Wrapper>
                        <Wrapper>
                            <Icon src={Img3}></Icon>
                            <Topline>BLOCKCHAIN</Topline>
                            <Headline>Buying Tesla with Bitcoin: The Never Ending Potential of Blockchain Technology</Headline>
                            <Description>insert description here</Description>
                        </Wrapper>
                    </Column2>
                </InfoRow>
            </InsightsContainer>
        </>
    )
}

export default Insights;
