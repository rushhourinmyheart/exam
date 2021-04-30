import styled from 'styled-components';
import {MdKeyboardArrowRight, MdArrowForward} from 'react-icons/md';

export const HeroContainer = styled.div`
display: flex;
justify-content: center;
align-items: center;
height: 600px;
position: relative;
z-index: 1;

:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(180deg, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.6) 100%), linear-gradient(180deg, rgba(0,0,0,0.2) 0%, transparent: 100%);
    z-index: 1;
}
`;

export const HeroBg = styled.div`
position: absolute;
height: auto;
width: 100%;
overflow: hidden;
text-align: left;
justify-content: left;
`;

export const HeroContent = styled.div`
z-index: 3;
position: absolute;
padding: 8px 24px;
display: flex;
height: auto;
width: 100%;
text-align: left;
justify-content: left;
margin-left: 20px;
bottom: 200px;
`;
//to stack subcontainers
export const HeroColumn = styled.ul`
display: grid;
position: absolute;
text-align: left;
justify-content: left;
height: 300px;
width: 100%;
margin-left: 60px;
padding: 10px 24px;
display: flex;
flex-direction: column;
`;

export const HeroIcon = styled.img`
height: 650px;
width: 100%;
-o-object-fit: cover;
object-fit: cover;
`;

export const HeroH2 = styled.h2`
color: #fff;
font-size: 1.2rem;
text-align: left;
justify-content: left;
display: flex;
padding: 15px 0;
`;

export const Item = styled.div`
display: flex;
justify-content: center;
align-items: center;
top: 0;
right: 0;
bottom: 0;
left: 0;
color: #fff;
overflow: hidden;
`;

export const HeroH1 = styled.h1`
color: #fff;
font-size: 2.5rem;
text-align: left;
justify-content: left;
display: flex;

@media screen and (max-width: 768px) {
    font-size: 40px;
}

@media screen and (max-width: 480px) {
    font-size: 32px;
}
`;

export const HeroBtnWrapper = styled.div`
margin-top: 30px;
display: flex;
text-align: left;
justify-content: left;
margin-left: 20px;
`;

export const ArrowForward = styled(MdArrowForward)`
margin-left: 8px;
font-size: 20px;
`;

export const ArrowRight = styled(MdKeyboardArrowRight)`
margin-left: 8px;
font-size: 20px;
`;

