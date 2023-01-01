import React, { useEffect, useRef, useState } from "react";
import { AboutBody, AboutContent, AboutParagraph, AboutTitle } from "./AboutStyle";
import SkillsDesktop from "./SkillsDesktop";
import SkillsMobile from "./SkillsMobile";

const About = ({lightdark}) =>{
    const AboutTitleRef = useRef();
    const AboutParagraphRef = useRef();
    const [TitleVisible, setTitleVisible] = useState();
    const [ParagraphVisible, setParagraphVisible] = useState();
    useEffect(()=>{
        const observer = new IntersectionObserver(([entry])=>{
            setTitleVisible(entry.isIntersecting)
        });
        observer.observe(AboutTitleRef.current)
        const observerParagraph = new IntersectionObserver(([entry])=>{
            setParagraphVisible(entry.isIntersecting)
        });
        observerParagraph.observe(AboutParagraphRef.current)
    },[AboutTitleRef,AboutParagraphRef,TitleVisible,ParagraphVisible]);


    return(
        <>
            <AboutBody active = {lightdark}>
                <AboutContent>
                    <AboutTitle ref={AboutTitleRef} inView = {TitleVisible}>
                        About
                    </AboutTitle>
                    <AboutParagraph ref={AboutParagraphRef} inView = {ParagraphVisible}>
                    My name is, John Leidy II, and I am a developer striving to learn new technologies while working and progressing in my B.S. in Computer Science. I was born in a small town and moved twice until I landed in Indiana. 
                    In my time here I have rebuilt my life from the ground up and learned how to be a contributing member of society. From the bottom, to where I am now I have learned what it takes to grow my life. I now have progressed from 
                    not being productive for myself and others to spending my free time building my toolkit, supporting myself and building my list of credentials through education. 
                    I have a passion for all things tech and spend a lot of my free time creating new pieces of software. I have done everything from command line applications written in c++ to front end development using React. 
                    Below are some examples for things I have created. If there are any questions about any projects I have created feel free to reach out via my linkdin at the bottom of the page. 
                    </AboutParagraph>
                </AboutContent>
            </AboutBody>
            <SkillsMobile lightdark = {lightdark}/>
            <SkillsDesktop lightdark = {lightdark}/>
        </>
    );  
};

export default About;