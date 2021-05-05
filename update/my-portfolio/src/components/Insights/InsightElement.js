import styled from 'styled-components'

export const InsightsContainer = styled.div`
height: 820px;
display: column;
justify-content: center;
align-items: center;
text-align: center;
background: #fff;

@media screen and (max-width: 1000px) {
    height: 1050px;
}   
@media screen and (max-width: 800px) {
    height: 1150px;
}
`;

export const InsightsH1 = styled.h1`
padding: 50px 0 0 0;
font-size: 32px;
color: #000;
align-items: center;
justify-content: center;
`;

export const InfoRow = styled.div`
display: flex;
text-align: center;
align-items: center;
justify-content: center;
margin-left: 90px;
`;

export const Column1 = styled.ul`
display: column;

width: 50%;
height: 600px;
align-items: center;
justify-content: center;
box-shadow: 10px 10px 5px grey;
transition: 0.2s ease-in-out;
cursor: pointer;

&:hover {
    transition: 0.2s ease-in-out;
    height: 610px;
    width: 52%;
    }
`;

export const Column2 = styled.div`
margin: 50px;
display: column;
width: 50%;
height: 600px;
align-items: center;
justify-content: center;
padding: 0 0 150px 0;
`;

export const Wrapper = styled.ul`
display: column;
margin-bottom: 40px;
width: 100%;
height: 280px;
box-shadow: 10px 10px 5px grey;
transition: 0.2s ease-in-out;
cursor: pointer;

&:hover {
    transition: 0.2s ease-in-out;
    height: 290px;
}
@media screen and (max-width: 1000px) {
    height: 400px;
    &:hover {
        transition: 0.2s ease-in-out;
        height: 410px;
    }
}   
@media screen and (max-width: 800px) {
    height: 450px;
    &:hover {
        transition: 0.2s ease-in-out;
        height: 460px;
    }
}   
`;


export const Icon = styled.img`
display: flex;
width: 100%;
height: 60%;
-o-object-fit: cover;
object-fit: cover;
`;

export const Topline = styled.p`
display: flex;
color: #8a0303;
font-size: 14px;
font-weight: 700;
letter-spacing: 1.5px;
text-transform: uppercase;
padding: 10px 10px;
text-align: left;
`;

export const Headline = styled.h1`
display: flex;
font-size: 18px;
font-weight: 700;
color: #000;
text-align: left;
padding: 0 10px 10px 10px;

@media screen and (max-width: 768px) {
    font-size: 16px;
}   

@media screen and (max-width: 480px) {
    font-size: 14px;
}
`;

export const Description = styled.p`
display: flex;
margin: 0 10px;
font-size: 1rem;
color: #000;
`;
