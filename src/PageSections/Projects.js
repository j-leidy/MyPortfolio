import React, { useEffect, useRef, useState } from "react";
import { ProjectsBody, ProjectsCard, ProjectsCardTitle, ProjectsContent, ProjectsDescription, ProjectsImage, ProjectsLink, ProjectsTitle, ProjectsTitleDesContainer } from "./ProjectsStyle";

import JuiceBotImage from '../Images/test.png'
import DbImg from '../Images/CDBCard.png'

const Projects = () => {
    
    const ProjectsTitleRef = useRef();
    const [TitleVisible, setTitleVisible] = useState();

    const ProjectsCardRefOne = useRef();
    const [CardOneVisible, setCardOneVisible] = useState();

    useEffect(()=>{
        const observer = new IntersectionObserver(([entry])=>{
            setTitleVisible(entry.isIntersecting)
            console.log(TitleVisible)
        });
        observer.observe(ProjectsTitleRef.current)
        const observerCardOne = new IntersectionObserver(([entry])=>{
            setCardOneVisible(entry.isIntersecting)
            console.log(CardOneVisible)
        });
        observerCardOne.observe(ProjectsCardRefOne.current)
    },[ProjectsTitleRef,TitleVisible,ProjectsCardRefOne,CardOneVisible]);
    return(
        <ProjectsBody>
            <ProjectsContent>
                <ProjectsTitle ref={ProjectsTitleRef} inView = {TitleVisible}>
                    Projects
                </ProjectsTitle>
                <ProjectsCard ref={ProjectsCardRefOne} inView = {CardOneVisible}>
                    <ProjectsTitleDesContainer>
                        <ProjectsCardTitle>
                            JuiceBot
                        </ProjectsCardTitle>
                        <ProjectsDescription>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </ProjectsDescription>
                    </ProjectsTitleDesContainer>
                    <ProjectsLink href="https://github.com/j-leidy" target="_blank">
                        <ProjectsImage src={JuiceBotImage}/>
                    </ProjectsLink>
                </ProjectsCard>
                <ProjectsCard ref={ProjectsCardRefOne} inView = {CardOneVisible}>
                    <ProjectsTitleDesContainer>
                        <ProjectsCardTitle>
                            C++ DB Explorer
                        </ProjectsCardTitle>
                        <ProjectsDescription>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </ProjectsDescription>
                    </ProjectsTitleDesContainer>
                    <ProjectsLink href="https://github.com/j-leidy" target="_blank">
                        <ProjectsImage src={DbImg}/>
                    </ProjectsLink>
                </ProjectsCard>
            </ProjectsContent>
        </ProjectsBody>
    );
};

export default Projects;