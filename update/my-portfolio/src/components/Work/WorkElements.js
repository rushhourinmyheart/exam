import styled from 'styled-components'
import {Link} from 'react-scroll'
import {MdKeyboardArrowRight, MdArrowForward} from 'react-icons/md';

export const WorkContainer = styled.div`
height: 350px;
display: relative;
justify-content: center;
align-items: center;
text-align: center;
background: #8a0303;
padding: 30px 0;

@media screen and (max-width: 800px) {
    height: 500px;
    display: flex;
    flex-direction: column;
    flex-content: flex-start;
}
@media screen and (max-width: 768px) {
    height: 800px;
    display: flex;
    flex-direction: column;
    flex-content: flex-start;
}   
@media screen and (max-width: 480px) {
    height: 800px;
    display: flex;
    flex-direction: column;
    flex-content: flex-start;
}
`;

export const WorkH1 = styled.h1`
font-size: 2.5rem;
color: #fff;

@media screen and (max-width: 760px) {
    font-size: 2rem;
}
`;

export const WorkH2 = styled.p`
font-size: 1rem;
padding: 0 0 50px 0;
text-align: center;
color: #fff;
`;

export const WorkWrap = styled.div`
max-width: 800px;
margin: 0 auto;
display: grid;
grid-template-columns: 1fr 1fr 1fr 1fr;
align-items: center;

@media screen and (max-width: 1000px) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
}
@media screen and (max-width: 800px) {
    grid-template-columns: 1fr 1fr;
    padding: 0 0 0 50px;
}
@media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
}
`;

export const BtnLink = styled(Link)`
background: #fff;
color: #000;
width: 200px;
height: 70px;
font-size: 1rem;
outline: none;
border: 1px solid #8a0303;
cursor: pointer;
display: flex;
justify-content: center;
align-items: center;
transition: all 0.2s ease-in-out;


&:hover {
    transition: all 0.2s ease-in-out;
    border: 1px solid #fff;
    background: none;
    color: #fff;
}
`;

export const ArrowForward = styled(MdArrowForward)`
margin-left: 8px;
font-size: 20px;
`;

export const ArrowRight = styled(MdKeyboardArrowRight)`
margin-left: 8px;
font-size: 20px;
`;