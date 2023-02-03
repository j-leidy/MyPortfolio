import React, { useEffect, useRef, useState } from "react";
import { EntryDuration, EntryParagraph, EntryTitle, EntryTitleDurationContainer, ExperienceBody, ExperienceEntry, ExperienceTitle } from "./ExperienceStyle";


const Experience = ({ lightdark }) => {
    const ExperienceTitleRef = useRef();
    const ExperienceEntryOneRef = useRef();
    const ExperienceEntryTwoRef = useRef();
    const [TitleVisible, setTitleVisible] = useState();
    const [ExperienceEntryOneVisible, setExperienceEntryOneVisible] = useState();
    const [ExperienceEntryTwoVisible, setExperienceEntryTwoVisible] = useState();
    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            setTitleVisible(entry.isIntersecting)
        });
        observer.observe(ExperienceTitleRef.current)
        const observerEntryOne = new IntersectionObserver(([entry]) => {
            setExperienceEntryOneVisible(entry.isIntersecting)
        });
        observerEntryOne.observe(ExperienceEntryOneRef.current)
        const observerEntryTwo = new IntersectionObserver(([entry]) => {
            setExperienceEntryTwoVisible(entry.isIntersecting)
        });
        observerEntryTwo.observe(ExperienceEntryTwoRef.current)
    }, [ExperienceTitleRef, ExperienceEntryOneRef, ExperienceEntryTwoRef, TitleVisible, ExperienceEntryOneVisible, ExperienceEntryTwoVisible]);
    return (
        <ExperienceBody active={lightdark}>
            <ExperienceTitle ref={ExperienceTitleRef} inView={TitleVisible}>
                Experience
            </ExperienceTitle>
            <ExperienceEntry ref={ExperienceEntryOneRef} inView={ExperienceEntryOneVisible}>
                <EntryTitleDurationContainer>
                    <EntryTitle>
                        Jimmy Johns
                    </EntryTitle>
                    <EntryDuration>
                        2015- May, 2017 & Jan 2018 - Present
                    </EntryDuration>
                </EntryTitleDurationContainer>
                <EntryParagraph>
                    In this role, I leveraged my ability to thrive in chaotic environments to efficiently deliver food to customers.
                    I used technology to route orders and familiarized myself with city block numbering systems.
                </EntryParagraph>
            </ExperienceEntry>
            <ExperienceEntry ref={ExperienceEntryTwoRef} inView={ExperienceEntryTwoVisible}>
                <EntryTitleDurationContainer>
                    <EntryTitle>
                        Progressive Lawnscaping
                    </EntryTitle>
                    <EntryDuration>
                        May 2017 to Sept. 2017
                    </EntryDuration>
                </EntryTitleDurationContainer>
                <EntryParagraph>
                    In my role in landscaping, I gained hands-on experience with tools and equipment to create visually appealing landscapes for customers' homes.
                    My tasks ranged from tree removal to patio installation.
                </EntryParagraph>
            </ExperienceEntry>
        </ExperienceBody>
    );
};

export default Experience;