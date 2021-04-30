import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const FooterContainer = styled.footer`
background: #8a0303;
justify-content: center;
color: #fff;
`;

export const FooterWrap = styled.div`
padding: 0 0 20px 0;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
max-width: 1000px;
margin: 0 auto;
`;

export const FooterLinksContainer = styled.div`
align-items: center;
width: 100%;
display: flex;
flex-direction: space-between;
justify-content: center;
`;


export const FooterLinksWrapper = styled.div`
display: flex;
flex-direction: space-between;
padding: 10px 28px;
justify-content: center;
`;

export const FooterLinkItems = styled.img`
display: block;
align-items: center;
text-align: center;
height: auto;
width: 100px;
padding: 10px 0 0 0;

&:hover {
    transform: scale(1.03);
    transition: all 0.2s ease-in-out;
}
`;

export const Contact = styled.div`
max-width: 1000px;
color: #b5b5b5;
font-size: 0.8rem;
`;

export const ContactIcons = styled.a`
color: #b5b5b5;
font-size: 24px;
margin: 0 10px;
`;

export const FooterLinkLogo = styled.img`
display: flex;
height: auto;
width: 50px;
align-items: flex-start;
text-align: center;
transition: all 0.2s ease-in-out;

&:hover {
    transform: scale(1.05);
    transition: all 0.2s ease-in-out;
    cursor: pointer;
}
`;

export const FooterLinkTitle = styled.h1`
font-size: 14px;
margin-bottom: 16px;
`;

export const SocialMedia = styled.section`
max-width: 1000px;
`;

export const SocialMediaWrap = styled.div`
justify-content: center;
align-items: center;
margin: 30px 0;
display: flex;
grid-gap: 400px;
`;

export const SocialLogo = styled(Link)`
color: #F34747;
cursor: pointer;
text-decoration: none;
font-size: 1.5rem;
display: flex;
align-items: center;
margin: auto;
font-weight: bold;
`;

export const WebsiteRights = styled.small`
color: #b5b5b5;
margin-bottom: 16px;
display: flex;
margin: auto;
`;

export const SocialIcons = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
width: 265px;
`;

export const SocialIconLink = styled.a`
color: #b5b5b5;
font-size: 24px;
margin: 0 auto 0 30px;
`;