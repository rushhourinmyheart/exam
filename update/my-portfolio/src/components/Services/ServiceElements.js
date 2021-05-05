import styled from 'styled-components'

export const ServicesContainer = styled.div`
height: 800px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
background: #fff;
padding: 100px 0;

@media screen and (max-width: 1000px) {
    height: 1000px;
    padding: 100px 0;
}
@media screen and (max-width: 768px) {
    height: 1100px;
    padding: 100px 0;
}
`;

export const ServicesWrapper = styled.div`
max-width: 1000px;
margin: 50px; auto;
display: grid;
grid-template-columns: 1fr 1fr 1fr;
align-items: center;


@media screen and (max-width: 1000px) {
    grid-template-columns: 1fr 1fr;
}

@media screen and (max-width: 768px) {
    padding: 0 20px;
}
`;

export const ServicesCard = styled.div`
background: #fff;
display: flex;
flex-direction: column;
flex-content: flex-start;
align-items: center;
border-radius: 10px;
height: 230px;
box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
cursor: pointer;
transition: all 0.2s ease-in-out;

&:active {
    background: #8a0303;
    color: #fff;
  }
`;

export const ServicesIcon = styled.img`
height: 80px;
width: 80px;
margin-bottom: 10px;
margin-top: 10px;
transition: 0.2s ease-in-out;
&:hover {
    transition: 0.2s ease-in-out;
    height: 70px;
    width: 70px;
    }
`;

export const ServicesH1 = styled.h1`
font-size: 2.5rem;
color: #000;
margin-bottom: 10px;
margin-top: 5%;

@media screen and (max-width: 480px) {
    font-size: 2rem;
}
`;

export const ServicesH2 = styled.p`
font-size: 1rem;
margin-bottom: 10px;
text-align: center;
`;

export const ServicesP = styled.p`
font-size: 0.8rem;
text-align: center;
margin: 10px 20px 30px 20px;
`;