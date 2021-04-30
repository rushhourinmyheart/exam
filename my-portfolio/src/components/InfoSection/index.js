import React from 'react';
import { Button } from '../ButtonElement';
import { InfoContainer, InfoWrapper, InfoRow, Column1, Column2, TextWrapper, TopLine, Heading, Subtitle, BtnWrap, ImgWrap, Img, ChangeBg } from './InfoElements';

const InfoSection = ({lightBg, id, imgStart, topLine, lightText, darkText, headline, description, buttonLabel, img, alt, primary, dark, dark2}) => {
    return (
        <InfoContainer id={id}>
            <InfoWrapper>
            <ChangeBg lightBg={lightBg}></ChangeBg>
                <InfoRow imgStart={imgStart}>
                    <Column1>
                    <TextWrapper>
                    <Heading lightText={lightText}>{headline}</Heading>
                    <TopLine>{topLine}</TopLine>
                    <Subtitle darkText={darkText}>{description}</Subtitle>
                    <BtnWrap>
                        <Button to='home'
                        smooth={true}
                        duration={500}
                        spy={true}
                        exact="true"
                        offset={-80}
                        primary={primary ? 1 : 0}
                        dark={dark ? 1 : 0}
                        dark2={dark2 ? 1 : 0}
                        >{buttonLabel}</Button>
                    </BtnWrap>
                    </TextWrapper>                    
                    </Column1>  
                    <Column2>
                        <ImgWrap>
                        <Img src={img} alt={alt} />
                        </ImgWrap>                    
                    </Column2>
                </InfoRow>
            </InfoWrapper>
        </InfoContainer>
    );
};

export default InfoSection;
