import React from 'react'
import emailjs from "emailjs-com";
import {ContactContainer, DetailsContainer, ContactWrap, ContactH1, ContactH2, ContactForm, ContactContent, ContactNum, InputText, MessageBox, Submit, CheckboxInput, CheckboxWrap, ContactP, ContactP2, Icon} from './ContactElements';
import {FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaYoutube} from 'react-icons/fa';
import {SocialIcons, SocialIconLink} from '../Footer/FooterElements';
import Dropdown from './Dropdown';
import Img1 from '../../images/image4.jpg'


const Contact = () => {
    //send values of contact form
    function sendEmail(e) {
        e.preventDefault();

    emailjs.sendForm('service_x9lart6', 'my-portfolio', e.target, 'user_CYabyFgzcNBO5FNBYZgZw')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        e.target.reset()
    }
 
    //style: dropdown
    const container = {
        color: '#808080',
        fontSize: '20px',
        textAlign: 'left',
        border: '1px solid #b5b5b5',
        justifyContent: 'left',
        padding: '10px',
        margin: '10px',
        display: 'flex'
      }

      //dropdown options
      const options = [
        {
            label: "Company Type",
            value: "Option 0",
        },
        {
          label: "Option 1",
          value: "Option 1",
        },
        {
          label: "Option 2",
          value: "Option 3",
        },
        {
          label: "Option 3",
          value: "Option 3",
        },
        {
          label: "Option 4",
          value: "Option 4",
        },
      ];
 
    return(
        <>
            <ContactContainer id="contact">
                <DetailsContainer>
                    <ContactH1>CONTACT</ContactH1>
                    <ContactH2>Please leave a message here.</ContactH2>
                    <Icon src={Img1}/>
                    <ContactP2>20/F, Zueling Building Makati Ave.Corner
                            <br></br>Paseo de Roxas Makati City, Philippines</ContactP2>
                    <ContactP2>Mobile: +63 000000000</ContactP2>
                    
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

                </DetailsContainer>
                <ContactWrap>
                    <ContactForm onSubmit={sendEmail}>
                        <ContactContent>
                            <InputText type="text" placeholder="Name" name="name">
                            </InputText>
                            <InputText type="email" placeholder="Email Address" name="email">
                            </InputText>
                            <InputText type="text" placeholder="Company Name" name="company">
                            </InputText>
                            <Dropdown style={container} options={options}/>
                            <ContactNum type="tel" placeholder="Contact Number" name="contact"></ContactNum>
                            <InputText type="text" placeholder="Subject" name="subject">
                            </InputText>
                            <ContactP2>I'M LOOKING FOR:</ContactP2>
                            <ContactP></ContactP>
                            <CheckboxWrap>
                                <CheckboxInput type="checkbox"></CheckboxInput>
                                <ContactP>CONSULTING</ContactP>
                            </CheckboxWrap>
                            <CheckboxWrap>
                                <CheckboxInput type="checkbox"></CheckboxInput>
                                <ContactP>DESIGN</ContactP>
                            </CheckboxWrap>
                            <CheckboxWrap>
                                <CheckboxInput type="checkbox"></CheckboxInput>
                                <ContactP>MOBILE DEVELOPMENT</ContactP>
                            </CheckboxWrap>
                            <CheckboxWrap>
                                <CheckboxInput type="checkbox"></CheckboxInput>
                                <ContactP>WEB DEVELOPMENT</ContactP>
                            </CheckboxWrap>
                            <CheckboxWrap>
                                <CheckboxInput type="checkbox"></CheckboxInput>
                                <ContactP>CLOUD & DEVOPS</ContactP>
                            </CheckboxWrap>
                            <CheckboxWrap>
                                <CheckboxInput type="checkbox"></CheckboxInput>
                                <ContactP>QA ASSURANCE</ContactP>
                            </CheckboxWrap>
                        </ContactContent>
                        <MessageBox cols="30" rows="8" placeholder="Your message" name="message"></MessageBox>
                        <Submit type="submit" value="Send Message">Submit</Submit>
                    </ContactForm>
                </ContactWrap>
            </ContactContainer>
        </>
    )
}

export default Contact;
