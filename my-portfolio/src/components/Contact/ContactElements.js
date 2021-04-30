import styled from 'styled-components';

export const ContactContainer = styled.div`
height: 700px;
display: flex;
flex-direction: relative;
justify-content: center;
align-items: center;
background: #fff;
`;

export const ContactWrap = styled.div`
align-items: center;
display: grid;
grid-template-columns: 1fr 1fr;
max-width: 700px;

@media screen and (max-width: 500px) {
    grid-template-columns: 1fr;
}
`;

export const DetailsContainer = styled.ul`
align-items: center;
display: column;
width: 50%;
padding: 5%;
`;

export const Icon = styled.img`
display: flex;
width: 500px;
height: auto;
margin: 20px;
border-radius: 5px 50px;
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
display: grid;
justify-content: center;
align-items: center;
padding: 30px 0 60px 0;
`;

export const ContactContent = styled.ul`
display: grid;
border-radius: 5px 50px;
justify-content: center;

grid-template-columns: 1fr 1fr;
align-items: center;
`;

export const InputText = styled.input`
color: #e99090;
font-size: 20px;
text-align: left;
border: 1px solid #b5b5b5;
justify-content: center;
padding: 10px;
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
font-size: 20px;
text-align: left;
border: 1px solid #b5b5b5;
justify-content: center;
padding: 10px;
display: flex;
`;

export const ContactNum = styled.input`
color: #e99090;
font-size: 20px;
text-align: left;
border: 1px solid #b5b5b5;
justify-content: center;
padding: 10px;
display: flex;
margin: 10px;
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