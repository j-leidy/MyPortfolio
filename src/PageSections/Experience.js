import React, { useEffect, useRef, useState } from "react";
import { EntryDuration, EntryParagraph, EntryTitle, EntryTitleDurationContainer, ExperienceBody, ExperienceEntry, ExperienceTitle } from "./ExperienceStyle";


const Experience = ({lightdark}) => {
    const ExperienceTitleRef = useRef();
    const ExperienceEntryOneRef = useRef();
    const ExperienceEntryTwoRef = useRef();
    const [TitleVisible, setTitleVisible] = useState();
    const [ExperienceEntryOneVisible, setExperienceEntryOneVisible] = useState();
    const [ExperienceEntryTwoVisible, setExperienceEntryTwoVisible] = useState();
    useEffect(()=>{
        const observer = new IntersectionObserver(([entry])=>{
            setTitleVisible(entry.isIntersecting)
        });
        observer.observe(ExperienceTitleRef.current)
        const observerEntryOne = new IntersectionObserver(([entry])=>{
            setExperienceEntryOneVisible(entry.isIntersecting)
        });
        observerEntryOne.observe(ExperienceEntryOneRef.current)
        const observerEntryTwo = new IntersectionObserver(([entry])=>{
            setExperienceEntryTwoVisible(entry.isIntersecting)
        });
        observerEntryTwo.observe(ExperienceEntryTwoRef.current)
    },[ExperienceTitleRef,ExperienceEntryOneRef,ExperienceEntryTwoRef,TitleVisible,ExperienceEntryOneVisible,ExperienceEntryTwoVisible]);
    return(
        <ExperienceBody active = {lightdark}>
            <ExperienceTitle ref={ExperienceTitleRef} inView = {TitleVisible}>
                Experience
            </ExperienceTitle>
            <ExperienceEntry ref={ExperienceEntryOneRef} inView = {ExperienceEntryOneVisible}>
                <EntryTitleDurationContainer>
                    <EntryTitle>
                        Jimmy Johns
                    </EntryTitle>
                    <EntryDuration>
                        2015- May, 2017 & Jan 2018 - Present
                    </EntryDuration>
                </EntryTitleDurationContainer>
                <EntryParagraph>
                    In this position I utilized my ability to function well in a chaotic environment to efficiently deliver food to customers. 
                    I worked with technology to route orders and learned the general structure of a city block number system.
                </EntryParagraph>
            </ExperienceEntry>
            <ExperienceEntry ref={ExperienceEntryTwoRef} inView = {ExperienceEntryTwoVisible}>
                <EntryTitleDurationContainer>
                    <EntryTitle>
                        Progressive Lawnscaping
                    </EntryTitle>
                    <EntryDuration>
                        May 2017 to Sept. 2017
                    </EntryDuration>
                </EntryTitleDurationContainer>
                <EntryParagraph>
                    During my time working in Lawnscaping I got hands on with tools and equipment to provide an aesthetically pleasing Landscape for the customers home. 
                    We did everything from tree removal to patio installation. 
                </EntryParagraph>
            </ExperienceEntry>
        </ExperienceBody>
    );
};

export default Experience;