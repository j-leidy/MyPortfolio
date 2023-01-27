import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useRef } from "react";
import { EmailInput, FormContainer, formStyles, FullNameInput, InputContainer, PhoneNumberInput, SubmitButton, ContactSectionBody, ContactTitle } from "./ContactSectionStyle";


const ContactSection = ({lightdark}) =>{
    const contactBodyRef = useRef();
    const [contactVisible, setContactVisible] = useState();
    useEffect(()=>{
        const observerParagraph = new IntersectionObserver(([entry])=>{
            setContactVisible(entry.isIntersecting)
        });
        observerParagraph.observe(contactBodyRef.current)
        console.log(contactVisible)
    },[contactBodyRef,contactVisible]);

    const getColorText = (lightdark) =>{
        if(lightdark === true){
            return "black";
        }
        else{
            return "white";
        }
    }

    const getColorBG = (lightdark) =>{
        if(lightdark === true){
            return "white";
        }
        else{
            return "black";
        }
    } 
    
    
    const textAreaStyles = {
        margin: 'auto',
        marginTop: '10px',
        marginBottom: '10px',
        resize: 'none',
        width: '90%',
        height: '200px',
        fontSize: '16px',
        padding: '10px',
        border: '2px solid white',
        borderColor: getColorText(lightdark),
        backgroundColor: getColorBG(lightdark),
        borderRadius: '2px',
        outline: 'none',
        caretColor: getColorText(lightdark),
        color: getColorText(lightdark)
    
    
    }

    return(
        <ContactSectionBody ref = {contactBodyRef} inView = {contactVisible} lightdark = {lightdark}>
            <ContactTitle lightdark = {lightdark}>Contact</ContactTitle>
            <FormContainer inView = {contactVisible}>
                <form
                    name="contact"
                    method="post"
                    data-netlify="true"
                    onSubmit="submit"
                    style={formStyles}
                >
                    <input type="hidden" name="form-name" value="contact" />
                    <InputContainer>
                        <FullNameInput type="text" name="full-name" placeholder="Full Name" lightdark = {lightdark}></FullNameInput>
                    </InputContainer>
                    <InputContainer>
                        <EmailInput type="email" name="email" placeholder="Email" lightdark = {lightdark}></EmailInput>
                    </InputContainer>
                    <InputContainer>
                        <PhoneNumberInput type="text" name="phone-number " placeholder="Phone Number" lightdark = {lightdark}></PhoneNumberInput>
                    </InputContainer>
                    <InputContainer>
                        <textarea name="message" placeholder="What can we help you with?" style={textAreaStyles}></textarea>
                    </InputContainer>
                    <SubmitButton type="submit" lightdark = {lightdark}>Submit</SubmitButton>
                </form>
            </FormContainer>
        </ContactSectionBody>
    );
};

export default ContactSection;