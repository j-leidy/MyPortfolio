import React, { useEffect, useRef, useState } from "react";
import { DegreeEntry, DegreeName, DegreesBody, DegreeTitle, EntriesContainer, GraduationYear, IconNYContainer, NameYearContainer, SchoolIcon} from "./DegreesStyle";

import IvyLogo from "../Icons/IvyLogo.png"
import IUPUILogo from "../Icons/IUPUILogo.png"


const Degrees = () => {
    const DegreeTitleRef = useRef();
    const DegreeOneRef = useRef();
    const DegreeTwoRef = useRef();
    const [DegreeTitleVisible, setDegreeTitleVisible] = useState();
    const [DegreeOneVisible, setDegreeOneVisible] = useState();
    const [DegreeTwoVisible, setDegreeTwoVisible] = useState();
    useEffect(()=>{
        const observerDegreeTitle = new IntersectionObserver(([entry])=>{
            setDegreeTitleVisible(entry.isIntersecting)
        });
        observerDegreeTitle.observe(DegreeTitleRef.current)
        const observerDegreeOne = new IntersectionObserver(([entry])=>{
            setDegreeOneVisible(entry.isIntersecting)
        });
        observerDegreeOne.observe(DegreeOneRef.current)
        const observerDegreeTwo = new IntersectionObserver(([entry])=>{
            setDegreeTwoVisible(entry.isIntersecting)
        });
        observerDegreeTwo.observe(DegreeTwoRef.current)
    },[DegreeTitleRef,DegreeOneRef,DegreeTwoRef,DegreeTitleVisible,DegreeOneVisible,DegreeTwoVisible]);
    return(
        <DegreesBody>
            <DegreeTitle ref={DegreeTitleRef} inView = {DegreeTitleVisible}>
                Degrees
            </DegreeTitle>
            <EntriesContainer>
                <DegreeEntry ref = {DegreeOneRef} inView = {DegreeOneVisible}>
                    <IconNYContainer>
                        <SchoolIcon src={IvyLogo}/>
                        <NameYearContainer>
                            <DegreeName>
                                A.S. Computer Science
                            </DegreeName>
                            <GraduationYear>
                                2018-2022
                            </GraduationYear>
                        </NameYearContainer>
                    </IconNYContainer>
                </DegreeEntry>
                <DegreeEntry ref = {DegreeTwoRef} inView = {DegreeTwoVisible}>
                    <IconNYContainer>
                        <SchoolIcon src={IUPUILogo}/>
                        <NameYearContainer>
                            <DegreeName>
                                B.S. Computer Science
                            </DegreeName>
                            <GraduationYear>
                                2022-Present
                            </GraduationYear>
                        </NameYearContainer>
                    </IconNYContainer>
                </DegreeEntry>
            </EntriesContainer>
        </DegreesBody>
    );
};

export default Degrees;