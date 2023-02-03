import React, { useEffect, useRef, useState } from "react";
import { AboutBody, AboutContent, AboutParagraph, AboutTitle } from "./AboutStyle";
import SkillsDesktop from "./SkillsDesktop";
import SkillsMobile from "./SkillsMobile";

const About = ({ lightdark }) => {
    const AboutTitleRef = useRef();
    const AboutParagraphRef = useRef();
    const [TitleVisible, setTitleVisible] = useState();
    const [ParagraphVisible, setParagraphVisible] = useState();
    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            setTitleVisible(entry.isIntersecting)
        });
        observer.observe(AboutTitleRef.current)
        const observerParagraph = new IntersectionObserver(([entry]) => {
            setParagraphVisible(entry.isIntersecting)
        });
        observerParagraph.observe(AboutParagraphRef.current)
    }, [AboutTitleRef, AboutParagraphRef, TitleVisible, ParagraphVisible]);


    return (
        <>
            <AboutBody active={lightdark}>
                <AboutContent>
                    <AboutTitle ref={AboutTitleRef} inView={TitleVisible}>
                        About
                    </AboutTitle>
                    <AboutParagraph ref={AboutParagraphRef} inView={ParagraphVisible}>
                        I am John Leidy II, a computer science student and developer. Born in a small town, I moved twice before settling in Indiana.
                        There, I rebuilt my life and learned to contribute to society. I now spend my free time expanding my skills and credentials through education and personal projects.
                        My passion lies in technology, and I enjoy creating software in my spare time, including command line applications in C++ and front-end development using React.
                        If you have any questions about my projects, please reach out to me at the bottom of the page or through my LinkedIn.
                    </AboutParagraph>
                </AboutContent>
            </AboutBody>
            <SkillsMobile lightdark={lightdark} />
            <SkillsDesktop lightdark={lightdark} />
        </>
    );
};

export default About;