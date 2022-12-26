import React from "react";
import { DegreeEntry, DegreeName, DegreesBody, DegreeTitle, EntriesContainer, GraduationYear, IconNYContainer, NameYearContainer, SchoolIcon, SchoolIconDiv } from "./DegreesStyle";

import IvyLogo from "../Icons/IvyLogo.png"
import IUPUILogo from "../Icons/IUPUILogo.png"


const Degrees = () => {
    
    return(
        <DegreesBody>
            <DegreeTitle>
                Degrees
            </DegreeTitle>
            <EntriesContainer>
                <DegreeEntry>
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
                <DegreeEntry>
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