import React, {useState} from 'react';
import { WorkContainer, WorkH1, WorkH2, WorkWrap, BtnLink, ArrowForward, ArrowRight } from './WorkElements';


const Work = () => {

    const [click, setClick] = useState(false)

    const onClick = () => {
        setClick(!click)
    };

    return (
        <>
        <WorkContainer id='work'>
            <WorkH1>SOLUTIONS WE DELIVER</WorkH1>
            <WorkH2>We IT-enable all kinds of B2B, B2C intections and internal operations.</WorkH2>
            <WorkWrap>
                <BtnLink to="/"  onClick={onClick}>
                Category 1
                {click ?  <ArrowForward /> : <ArrowRight/>}
                </BtnLink>
                <BtnLink to="/"  onClick={onClick}>
                Category 2
                {click ?  <ArrowForward /> : <ArrowRight/>}
                </BtnLink>
                <BtnLink to="/"  onClick={onClick}>
                Category 3
                {click ?  <ArrowForward /> : <ArrowRight/>}
                </BtnLink>
                <BtnLink to="/"  onClick={onClick}>
                Category 4
                {click ?  <ArrowForward /> : <ArrowRight/>}
                </BtnLink>
                <BtnLink to="/"  onClick={onClick}>
                Category 5
                {click ?  <ArrowForward /> : <ArrowRight/>}
                </BtnLink>
                <BtnLink to="/"  onClick={onClick}>
                Category 6
                {click ?  <ArrowForward /> : <ArrowRight/>}
                </BtnLink>
                <BtnLink to="/"  onClick={onClick}>
                Category 7
                {click ?  <ArrowForward /> : <ArrowRight/>}
                </BtnLink>
                <BtnLink to="/"  onClick={onClick}>
                Category 8
                {click ?  <ArrowForward /> : <ArrowRight/>}
                </BtnLink>                
            </WorkWrap>
        </WorkContainer>
        </>
    )
}

export default Work;
