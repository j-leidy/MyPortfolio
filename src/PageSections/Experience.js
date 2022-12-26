import React, { useEffect, useRef, useState } from "react";
import { EntryDuration, EntryParagraph, EntryTitle, EntryTitleDurationContainer, ExperienceBody, ExperienceEntry, ExperienceTitle } from "./ExperienceStyle";


const Experience = () => {
    const ExperienceTitleRef = useRef();
    const ExperienceEntryOneRef = useRef();
    const ExperienceEntryTwoRef = useRef();
    const [TitleVisible, setTitleVisible] = useState();
    const [ExperienceEntryOneVisible, setExperienceEntryOneVisible] = useState();
    const [ExperienceEntryTwoVisible, setExperienceEntryTwoVisible] = useState();
    useEffect(()=>{
        const observer = new IntersectionObserver(([entry])=>{
            setTitleVisible(entry.isIntersecting)
            console.log(TitleVisible)
        });
        observer.observe(ExperienceTitleRef.current)
        const observerEntryOne = new IntersectionObserver(([entry])=>{
            setExperienceEntryOneVisible(entry.isIntersecting)
            console.log(ExperienceEntryOneVisible)
        });
        observerEntryOne.observe(ExperienceEntryOneRef.current)
        const observerEntryTwo = new IntersectionObserver(([entry])=>{
            setExperienceEntryTwoVisible(entry.isIntersecting)
            console.log(ExperienceEntryTwoVisible)
        });
        observerEntryTwo.observe(ExperienceEntryTwoRef.current)
    },[ExperienceTitleRef,ExperienceEntryOneRef,ExperienceEntryTwoRef,TitleVisible,ExperienceEntryOneVisible,ExperienceEntryTwoVisible]);
    return(
        <ExperienceBody>
            <ExperienceTitle ref={ExperienceTitleRef} inView = {TitleVisible}>
                Experience
            </ExperienceTitle>
            <ExperienceEntry ref={ExperienceEntryOneRef} inView = {ExperienceEntryOneVisible}>
                <EntryTitleDurationContainer>
                    <EntryTitle>
                        Jimmy Johns
                    </EntryTitle>
                    <EntryDuration>
                        2015-Present
                    </EntryDuration>
                </EntryTitleDurationContainer>
                <EntryParagraph>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </EntryParagraph>
            </ExperienceEntry>
            <ExperienceEntry ref={ExperienceEntryTwoRef} inView = {ExperienceEntryTwoVisible}>
                <EntryTitleDurationContainer>
                    <EntryTitle>
                        Previous Job
                    </EntryTitle>
                    <EntryDuration>
                        ---- - 2015
                    </EntryDuration>
                </EntryTitleDurationContainer>
                <EntryParagraph>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </EntryParagraph>
            </ExperienceEntry>
        </ExperienceBody>
    );
};

export default Experience;