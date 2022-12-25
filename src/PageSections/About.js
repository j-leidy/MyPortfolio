import React, { useEffect, useRef, useState } from "react";
import { AboutBody, AboutContent, AboutParagraph, AboutTitle } from "./AboutStyle";
import SkillsDesktop from "./SkillsDesktop";
import SkillsMobile from "./SkillsMobile";

const About = () =>{
    const AboutTitleRef = useRef();
    const AboutParagraphRef = useRef();
    const [TitleVisible, setTitleVisible] = useState();
    const [ParagraphVisible, setParagraphVisible] = useState();
    useEffect(()=>{
        const observer = new IntersectionObserver(([entry])=>{
            setTitleVisible(entry.isIntersecting)
            console.log(TitleVisible)
        });
        observer.observe(AboutTitleRef.current)
        const observerParagraph = new IntersectionObserver(([entry])=>{
            setParagraphVisible(entry.isIntersecting)
            console.log(ParagraphVisible)
        });
        observerParagraph.observe(AboutParagraphRef.current)
    },[AboutTitleRef,AboutParagraphRef,TitleVisible,ParagraphVisible]);


    return(
        <>
            <AboutBody>
                <AboutContent>
                    <AboutTitle ref={AboutTitleRef} inView = {TitleVisible}>
                        About
                    </AboutTitle>
                    <AboutParagraph ref={AboutParagraphRef} inView = {ParagraphVisible}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </AboutParagraph>
                </AboutContent>
            </AboutBody>
            <SkillsMobile/>
            <SkillsDesktop/>
        </>
    );  
};

export default About;