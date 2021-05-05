import styled from 'styled-components';

export const ContactContainer = styled.div`
height: 700px;
max-width: 1000px;
margin: 100px auto;
padding: 0 30px;
display: grid;
grid-template-columns: 1fr 1fr;
align-items: center;

@media screen and (max-width: 1000px) {
    height: 1100px;
    grid-template-columns: 1fr 
}
`;

export const DetailsContainer = styled.ul`
flex-direction: column;
flex-content: flex-start;
align-items: center;
`;

export const Icon = styled.img`
display: flex;
width: 460px;
height: auto;
margin: 20px;
border-radius: 5px 50px;
cursor: pointer;
transition: 0.3s ease-in-out;

&:hover {
    transition: 0.3s ease-in-out;
    width: 440px;
    border-radius: 50px 5px;
    height: auto;
    }
`;

export const CheckboxWrap = styled.div`
align-items: left;
display: flex;
`;

export const ContactH1 = styled.h1`
color: #000;
font-size: 2 rem;
text-align: left;
padding: 5px 20px;
display: flex;
`;

export const ContactH2 = styled.h2`
color: #000;
font-size: 1rem;
text-align: left;
padding: 0 20px 50px 20px;
display: flex;
`;


export const ContactP = styled.p`
color: #000;
font-size: 1rem;
text-align: left;
margin-top: 2px;
`;

export const ContactP2 = styled.p`
color: #b5b5b5;
font-size: 1rem;
text-align: left;
margin: 10px 32px;
`;

export const ContactForm = styled.form`
z-index: 2;
display: relative;
flex-direction: space-between;
justify-content: center;
align-items: center;
`;

export const ContactWrap = styled.div`
display: flex;
`;

export const ContactContent = styled.div`
display: column;
`;

export const InputText = styled.input`
color: #e99090;
font-size: 18px;
text-align: left;
border: 1px solid #b5b5b5;
justify-content: center;
padding: 5px;
display: flex;
margin: 10px;
`;

export const CheckboxInput = styled.input`
text-align: center;
justify-content: center;
padding: 10px;
display: flex;
margin: 5px 10px;

}
`;
export const Dropdown = styled.select`
color: #e99090;
font-size: 18px;
text-align: left;
border: 1px solid #b5b5b5;
justify-content: center;
padding: 5px;
display: flex;
`;

export const MessageBox = styled.textarea`
color: #e99090;
font-size: 20px;
text-align: left;
border: 1px solid #b5b5b5;
justify-content: center;
padding: 10px;
margin: 10px;
display: flex;
width: 500px;
height: 150px;
`;

export const Submit = styled.button`
font-size: 1rem;
text-align: center;
border: 1px solid #b5b5b5;
justify-content: center;
text-align: center;
border-radius: 50px;
padding: 10px;
display: flex;
transition: all 0.2s ease-in-out;
padding: 10px,
cursor: pointer;
width: 100px;
background-color: #fff;

&:hover {
    transition: all 0.3s ease-in-out;
    background-color: #8a0303;
    color: #fff;
    cursor: pointer;
    border: none;
}
`;