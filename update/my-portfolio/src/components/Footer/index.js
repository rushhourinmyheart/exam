import React from 'react'
import {FaEnvelope, FaFacebook, FaInstagram, FaLinkedin, FaMap, FaTwitter, FaYoutube, FaPhone} from 'react-icons/fa';
import {FooterContainer, FooterWrap, FooterLinksContainer, FooterLinksWrapper, FooterLinkItems, SocialMedia, SocialMediaWrap, WebsiteRights, SocialIcons, SocialIconLink, Contact, ContactIcons} from './FooterElements';
import {animateScroll as scroll} from 'react-scroll';
import Logo from '../../images/pylogo.png'

const Footer = () => {

    const toggleHome = () => {
        scroll.scrollToTop();
    };

    return (
        <FooterContainer>
            <FooterWrap>
                <FooterLinksContainer>
                    <FooterLinksWrapper to='/' onClick={toggleHome}>
                        <FooterLinkItems src={Logo}></FooterLinkItems>
                    </FooterLinksWrapper>
                    <FooterLinksWrapper>
                        <ContactIcons href="/">
                            <FaMap />
                        </ContactIcons>
                        <Contact>20/F, Zueling Building Makati Ave.Corner
                            <br></br>Paseo de Roxas Makati City, Philippines
                        </Contact>
                    </FooterLinksWrapper>
                    <FooterLinksWrapper>
                        <ContactIcons href="/">
                            <FaPhone />
                        </ContactIcons>
                        <Contact>+63 0000000000</Contact>
                    </FooterLinksWrapper>
                    <FooterLinksWrapper>
                        <ContactIcons href="/">
                            <FaEnvelope />
                        </ContactIcons>
                        <Contact>username@gmail.com</Contact>
                    </FooterLinksWrapper>
                </FooterLinksContainer>
                <FooterContainer>____________________________________</FooterContainer>
                <SocialMedia>
                    <SocialMediaWrap>
                        <WebsiteRights>name ©{new Date().getFullYear()} All rights reserved.</WebsiteRights>
                        <SocialIcons>
                            <SocialIconLink href='//google.com'  target='_blank' aria-label='Facebook'>
                                <FaFacebook />
                            </SocialIconLink>
                            <SocialIconLink href='//google.com'  target='_blank' aria-label='LinkedIn'>
                                <FaLinkedin />
                            </SocialIconLink>
                            <SocialIconLink href='/' target='_blank' aria-label='Youtube'>
                                <FaYoutube />
                            </SocialIconLink>
                            <SocialIconLink href='//google.com'  target='_blank' aria-label='Twitter'>
                                <FaTwitter />
                            </SocialIconLink>
                            <SocialIconLink href='//google.com' target='_blank' aria-label='Instagram'>
                                <FaInstagram />
                            </SocialIconLink>
                        </SocialIcons>
                    </SocialMediaWrap>
                </SocialMedia>
            </FooterWrap>
        </FooterContainer>
    )
}

export default Footer;
