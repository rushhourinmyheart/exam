import React from 'react'
import {ContactContainer, DetailsContainer, ContactWrap, ContactH1, ContactH2, ContactForm, ContactContent, InputText, MessageBox, Submit, CheckboxInput, CheckboxWrap, ContactP, ContactP2, Icon, errorp} from './ContactElements';
import {FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaYoutube} from 'react-icons/fa';
import {SocialIcons, SocialIconLink} from '../Footer/FooterElements';
import Dropdown from './Dropdown';
import Img1 from '../../images/image4.jpg'
import validate from './validateInfo';
import useForm from './useForm';

const Contact = ({ submitForm }) => {
    const { handleChange, handleSubmit, values, errors } = useForm(
      submitForm,
      validate
    );
 
    //style: dropdown
    const container = {
        color: '#808080',
        fontSize: '18px',
        textAlign: 'left',
        border: '1px solid #b5b5b5',
        justifyContent: 'left',
        padding: '5px',
        margin: '10px',
        display: 'flex',
        width: '230px'
      }

    const styles = {
        color: 'red',
        marginBottom: '10px'
    };

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

                <DetailsContainer>
                    <ContactForm onSubmit={handleSubmit} className='form' noValidate>
                        <ContactWrap>
                            <ContactContent>
                                <InputText
                                type="text"
                                placeholder="Name"
                                name="name"
                                value={values.name}
                                onChange={handleChange}>
                                </InputText>
                                {errors.name && <p style={styles}>{errors.name}</p>}
                                <InputText
                                type="text"
                                placeholder="Company Name (Optional)"
                                name="company">
                                </InputText>
                                <InputText
                                type="text"
                                placeholder="Subject"
                                name="subject"
                                value={values.subject}
                                onChange={handleChange}>
                                </InputText>                     
                                {errors.subject && <p style={styles}>{errors.subject}</p>}
                            </ContactContent>
                            <ContactContent>
                                <InputText
                                type="email"
                                placeholder="Email Address"
                                name="email"
                                value={values.email}
                                onChange={handleChange}>
                                </InputText>
                                {errors.email && <p style={styles}>{errors.email}</p>}
                                <Dropdown style={container} options={options}/>
                                <InputText
                                type="tel"
                                placeholder="Contact Number"
                                name="phone"
                                value={values.phone}
                                onChange={handleChange}>
                                </InputText>
                                {errors.phone && <p style={styles}>{errors.phone}</p>}
                            </ContactContent>
                        </ContactWrap>
                        
                        <ContactP2>I'M LOOKING FOR:</ContactP2>
                        <ContactP></ContactP>
                        <ContactWrap>                         
                            <ContactContent>
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
                                </ContactContent>
                                <ContactContent>
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
                        </ContactWrap>
                        
                        <MessageBox
                        cols="10"
                        rows="8"
                        placeholder="Your message"
                        name="message"
                        value={values.message}
                        onChange={handleChange}>
                        </MessageBox>
                        {errors.message && <p style={styles}>{errors.message}</p>}
                        <Submit type="submit" value="Send Message">Submit</Submit>
                    </ContactForm>
                </DetailsContainer>
            </ContactContainer>
        </>
    )
}

export default Contact;
