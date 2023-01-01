import React, { useEffect, useRef, useState } from "react";
import { ProjectsBody, ProjectsCard, ProjectsCardTitle, ProjectsContent, ProjectsDescription, ProjectsImage, ProjectsLink, ProjectsTitle, ProjectsTitleDesContainer } from "./ProjectsStyle";

import JuiceBotImage from '../Images/test.png'
import DbImg from '../Images/CDBCard.png'

const Projects = () => {
    
    const ProjectsTitleRef = useRef();
    const [TitleVisible, setTitleVisible] = useState();

    const ProjectsCardRefOne = useRef();
    const [CardOneVisible, setCardOneVisible] = useState();

    const ProjectsCardRefTwo = useRef();
    const [CardTwoVisible, setCardTwoVisible] = useState();

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
        const observerCardTwo = new IntersectionObserver(([entry])=>{
            setCardTwoVisible(entry.isIntersecting)
            console.log(CardTwoVisible)
        });
        observerCardTwo.observe(ProjectsCardRefTwo.current)


    },[ProjectsTitleRef,TitleVisible,ProjectsCardRefOne,CardOneVisible,ProjectsCardRefTwo,CardTwoVisible]);
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
                            Welcome to JuiceBot! The AIO discord.py bot equipped with functions from saying hello to a full RPG-Like system to encourage users to communicate and interact with each other. This bot has an economy along with skills users can level up. 
                            It curates user interaction with an Activity Level that increases with messaging in your server as well as their interaction with skills and the economy of JuiceBot. At one point the bot used MongoDB as its database, however it was later switched over to using .json files. 
                            While using MongoDB was a great learning experience .json files proved to be simpler and much quicker for this use case. This program is not currently on GitHub, but If you have any questions or would like to see what I've made contact me on my LinkedIn page at the bottom of the screen.
                        </ProjectsDescription>
                    </ProjectsTitleDesContainer>
                    <ProjectsLink href="https://github.com/j-leidy" target="_blank">
                        <ProjectsImage src={JuiceBotImage}/>
                    </ProjectsLink>
                </ProjectsCard>
                <ProjectsCard ref={ProjectsCardRefTwo} inView = {CardTwoVisible}>
                    <ProjectsTitleDesContainer>
                        <ProjectsCardTitle>
                            C++ DB Explorer
                        </ProjectsCardTitle>
                        <ProjectsDescription>
                            Command line executor of SQL commands. This program implements almost all SQL commands in C++ using SQLITE3. With this program users are able to not only manipulate .db files in every way, but also create their own .db from the ground up. 
                            I got my inspiration from DB Browser, a program we used in class. I realized while using this and being introduced to SQLITE3 I could recreate this in C++. Now with it's implementation I could utilize this piece of software I made as a backend 
                            for a frontend application. Feel free to take a look on GitHub! 
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