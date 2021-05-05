import style from 'styled-components'

export const InfoContainer = style.div`
color: #fff;
position: relative;
height: 500px;
margin-bottom: 100px;
justify-content: center;

@media screen and (max-width: 1100px) {
    padding: 50px 0;
    height: 700px;
}
@media screen and (max-width: 768px) {
    padding: 50px 0;
    height: 900px;
}
`;

export const InfoWrapper = style.div`
display: grid;
position: grid;
z-index: 1;
height: 500px;
width: 100%;
max-width: 1100px;
margin-right: auto;
margin-left: auto;
margin-top: 10%;
padding: 0 24px;
justify-content: center;
`;

export const ChangeBg = style.div`
display: block;
position: absolute;
text-align: center;
z-index: -1;
height: 490px;
width: 790px;
border-radius: 20px;
padding: 0 50px 0 50px;
overflow: hidden;
background: ${({lightBg}) => (lightBg ? '#f9f9f9' : 'none')};
`;

export const InfoRow = style.div`
display: grid;
grid-auto-columns: minmax(auto, 1fr);
align-items: center;

/*--movement of items inside Column1
& Column2 when window is adjusted
depending on the set value of image--*/

grid-template-areas: ${({imgStart}) => (imgStart ? `'col2 col1'` : `'col1 col2'` )};

@media screen and (max-width: 768px) {
    grid-template-areas: ${({imgStart}) => (imgStart ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'`)};
}
`;

export const Column1 = style.div`
margin-bottom: 15px;
padding: 0 15px;
grid-area: col1;
`;

export const Column2 = style.div`
margin-bottom: 15px;
padding: 0 15px;
grid-area: col2;
`;

export const TextWrapper = style.div`
max-width: 540px;
padding-top: 0;
padding-bottom: 60px;
`;

export const TopLine = style.p`
color: #8a0303;
font-size: 16px;
line-height: 16px;
font-weight: 700;
letter-spacing: 1.4px;
text-transform: uppercase;
margin-bottom: 16px;
`;

export const Heading = style.h1`
margin-bottom: 24px;
font-size: 48px;
line-height: 1.1;
font-weight: 600;
color: ${({lightText}) => (lightText ? '#f7f8fa' : '#010606')};

@media screen and (max-width: 768px) {
    font-size: 32px;
    padding: 20px;
}
`;

export const Subtitle = style.p`
max-width: 440px;
margin-bottom: 35px;
font-size: 18px;
line-height: 24px;
color: ${({darkText}) => (darkText ? '#010606' : "#fff")};
`;

export const BtnWrap = style.div`
display: flex;
justify-content: flex-start;
`;

export const ImgWrap = style.div`
max-width: 555px;
height: 100%;
`;

export const Img = style.img`
width: 400px;
height: 400px;
-o-object-fit: cover;
object-fit: cover;
border: 3px solid #8a0303;
border-radius: 50%;
padding: 20px;
animation: morphing 10s infinite;
overflow: hidden;

&:hover{
		animation-play-state: paused;
    }
@keyframes morphing {
    0% {
        border-radius: 30% 60% 70% 30% / 30% 30% 70% 70%;
    }
    25% { 
        border-radius: 58% 42% 75% 25% / 76% 46% 54% 24%;
    }
    50% {
        border-radius: 50% 50% 33% 67% / 55% 27% 73% 45%;
    }
    75% {
        border-radius: 33% 67% 58% 42% / 63% 68% 32% 37%;	
    }
`;