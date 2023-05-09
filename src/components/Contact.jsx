import React, { useRef } from 'react';
import styled from 'styled-components';
import emailjs from '@emailjs/browser';


const Contact = () => {

    const form = useRef();

    const sendEmail = (e) => {

        e.preventDefault();

        emailjs.sendForm('service_om70qdh', 'template_ehxsiyd', form.current, 'J7wxA5qfiDgak0tca')
          .then((result) => {
              console.log(result.text);
              form.current.reset()
          }, (error) => {
              console.log(error.text);
          });
      };

    return (
        <>
        <Section id="contact">
            <Triangle></Triangle>
            <SectionTitle>CONTACT</SectionTitle>
            <Paragraph>Have a question or want to work with me?</Paragraph>
            <Message>
                <form ref={form} onSubmit={sendEmail}>
                    <label htmlFor="user_name"></label>
                    <Input id="user_name" name="user_name" placeholder="Name" type="text" required></Input><br></br>
                    <label htmlFor="user_email"></label>
                    <Input id="user_email" name="user_email" placeholder="Email" required type="email" ></Input><br></br>
                    <label htmlFor="user_message"></label>
                    <Textarea id="user_message" name="message" size="50" placeholder="Message" type="text"></Textarea><br></br>
                    <SendButton  required type="submit" value="SEND"></SendButton>
                </form>
            </Message>
        </Section>
        </>
    );
};

const SectionTitle = styled.h1`
    font-family: Arial, Helvetica, sans-serif;
    font-size: 2.5vw;
    color: #F5f5f5;
    margin-top: 7vh;
`;

const Section = styled.section`
    height: 95vh;
    text-align: center;
    background-color: #252934;
    border-top: #F5f5f5;
    /* z-index: -2; */
    @media (max-width: 768px) {
        height: 100vh;
    };
    @media (max-height: 568px, max-width: 320px) {
        height: 130vh;
    };
    @media (max-height: 867px, max-width: 468px) {
        height: 170vh;
    };
    @media (max-width: 368px) {
        /* height: 100vh; */
    };
    @media (max-height: 1200px) {
        height: 70vh;
    };
    @media (max-height: 840px) {
        height: 95vh;
    };
    @media (max-height: 740px) {
        height: 100vh;
    };
`;

const Triangle = styled.div`
    width: 0;
	height: 0;
	border-left: 50vw solid transparent;
	border-right: 50vw solid transparent;
	border-top: 12vh solid #F5f5f5;
`;

const Paragraph = styled.p`
    margin-top: 7vh;
    color: #10c2c9;
`;

const Message = styled.div`
    height: 250px;
    align-content: left;
    margin: auto;
    margin-top: 4vh;
    padding: 15px;
    width: 40%;
    @media (max-width: 1020px) {
        width: 50%;
    };
    @media (max-width: 768px) {
        width: 60%;
    };
    @media (max-width: 568px) {
        width: 90%;
    };
`;

const Input = styled.input`
    background-color: #1b242f;
    border-style: none;
    color: white;
    font-size: 14px;
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', sans-serif;
    margin-bottom: 3px;
    padding: 10px 15px;
    width: 100%;
    min-width: 200px;
    &:focus {
        outline: none;
    }
;`

const Textarea = styled.textarea`
    background-color: #1e242c;
    border-style: none;
    color: white;
    font-size: 14px;
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', sans-serif;
    height: 120px;
    margin-bottom: 7px;
    max-height: 200px;
    padding: 10px 15px;
    width: 100%;
    min-width: 200px;
    &:focus {
        outline: none;
    }
;`

const SendButton = styled.input`
    background: transparent;
    border: solid 1px white;
    color: white;
    float: right;
    height: 40px;
    width: 75px;
    transition: .5s;
    &:hover {
        background-color: #10c2c9;
        border-color: #10c2c9;
    }
`;


export default Contact;
