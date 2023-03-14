import React, { useCallback, useEffect, useRef, useState } from "react";
import { MOBILEProjectCardDescription, MOBILEProjectCardDescriptionLink, MOBILEProjectCardDescriptionLinkSpan, ProjectDescriptionList, ProjectDescriptionListItem, ProjectDescriptionListTitle, ProjectsBody, ProjectsCard, ProjectsCardTitle, ProjectsContent, ProjectsDescription, ProjectsImage, ProjectsTitle, ProjectsTitleDesContainer, ProjectsTitleUnder } from "./ProjectsStyle";

import JuiceBotImage from '../Images/test.png'
import DbImg from '../Images/CDBCard.png'
import LiquiBotImage from '../Images/LiquiBotCard.png'
import LiquiBotWebsiteFinal from '../Images/LiquiBotWebsiteFinal.png'
//https://github.com/j-leidy/C-DatabaseExplorer

const Projects = ({ lightdark }) => {

    const ProjectsTitleRef = useRef();
    const [TitleVisible, setTitleVisible] = useState();

    const ProjectsTitleUnderRef = useRef();
    const [TitleUnderVisible, setTitleUnderVisible] = useState();

    const ProjectsCardRefOne = useRef();
    const [CardOneVisible, setCardOneVisible] = useState();

    const ProjectsCardRefTwo = useRef();
    const [CardTwoVisible, setCardTwoVisible] = useState();

    const ProjectsCardRefThree = useRef();
    const [CardThreeVisible, setCardThreeVisible] = useState();

    const ProjectsCardRefFour = useRef();
    const [CardFourVisible, setCardFourVisible] = useState();

    const MobileCardDescriptionOneRef = useRef();
    const [DescriptionOneActive, setDescriptionOneActive] = useState(false);

    const MobileCardDescriptionTwoRef = useRef();
    const [DescriptionTwoActive, setDescriptionTwoActive] = useState(false);

    const MobileCardDescriptionThreeRef = useRef();
    const [DescriptionThreeActive, setDescriptionThreeActive] = useState(false);

    const MobileCardDescriptionFourRef = useRef();
    const [DescriptionFourActive, setDescriptionFourActive] = useState(false);


    const handleClick = useCallback((which_button) => {
        if (which_button === "one") {
            setDescriptionOneActive(!DescriptionOneActive);
        }
        else if (which_button === "two") {
            setDescriptionTwoActive(!DescriptionTwoActive);
        }
        else if (which_button === "three") {
            setDescriptionThreeActive(!DescriptionThreeActive);
        }
        else if (which_button === "four") {
            setDescriptionFourActive(!DescriptionFourActive);
        }
    }, [DescriptionOneActive, DescriptionTwoActive, DescriptionThreeActive, DescriptionFourActive]);

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            setTitleVisible(entry.isIntersecting)
        });
        observer.observe(ProjectsTitleRef.current)

        const observerTitleUnder = new IntersectionObserver(([entry]) => {
            setTitleUnderVisible(entry.isIntersecting)
        });
        observerTitleUnder.observe(ProjectsTitleUnderRef.current)

        const observerCardOne = new IntersectionObserver(([entry]) => {
            setCardOneVisible(entry.isIntersecting)
        });
        observerCardOne.observe(ProjectsCardRefOne.current)

        const observerCardTwo = new IntersectionObserver(([entry]) => {
            setCardTwoVisible(entry.isIntersecting)
        });
        observerCardTwo.observe(ProjectsCardRefTwo.current)

        const observerCardThree = new IntersectionObserver(([entry]) => {
            setCardThreeVisible(entry.isIntersecting)
        });
        observerCardThree.observe(ProjectsCardRefThree.current)

        const observerCardFour = new IntersectionObserver(([entry]) => {
            setCardFourVisible(entry.isIntersecting)
        });
        observerCardFour.observe(ProjectsCardRefFour.current)

    }, [ProjectsTitleRef, TitleVisible, ProjectsTitleUnderRef, TitleUnderVisible, ProjectsCardRefOne, CardOneVisible, ProjectsCardRefTwo, CardTwoVisible, ProjectsCardRefThree, CardThreeVisible, ProjectsCardRefFour, CardFourVisible]);





    return (
        <ProjectsBody active={lightdark} >
            <ProjectsContent>
                <ProjectsTitle ref={ProjectsTitleRef} inView={TitleVisible}>
                    Projects
                </ProjectsTitle>
                <ProjectsTitleUnder ref={ProjectsTitleUnderRef} inView={TitleUnderVisible}>Click on a card to view more information!</ProjectsTitleUnder>
                <ProjectsCard ref={ProjectsCardRefOne} inView={CardOneVisible} onClick={() => handleClick("one")}>
                    <ProjectsTitleDesContainer>
                        <ProjectsCardTitle>
                            LiquiBot
                        </ProjectsCardTitle>
                        <ProjectsDescription>
                            Welcome to LiquiBot! This Discord Bot is JuiceBot's successor. JuiceBot was my first experience with Discord.py. This time around the speed and scalability was geratly improved.
                            Using Discord.py v2.0 with asyncio in Python. The repository for this project is private. Please contact me below if you would like to take a look!
                            <ProjectDescriptionListTitle>
                                <MOBILEProjectCardDescriptionLink href="https://liquibot.netlify.app/" target="_blank">LiquiBot's Website <MOBILEProjectCardDescriptionLinkSpan>In Progress</MOBILEProjectCardDescriptionLinkSpan></MOBILEProjectCardDescriptionLink>
                            </ProjectDescriptionListTitle>
                            <ProjectDescriptionListTitle>
                                Functionality
                            </ProjectDescriptionListTitle>
                            <ProjectDescriptionList>
                                <ProjectDescriptionListItem>Leaderboards</ProjectDescriptionListItem>
                                <ProjectDescriptionListItem>Leveling</ProjectDescriptionListItem>
                                <ProjectDescriptionListItem>Trading</ProjectDescriptionListItem>
                                <ProjectDescriptionListItem>In Game Store</ProjectDescriptionListItem>
                                <ProjectDescriptionListItem>Equipment</ProjectDescriptionListItem>
                                <ProjectDescriptionListItem>Mining Skill</ProjectDescriptionListItem>
                                <ProjectDescriptionListItem>Smithing Skill</ProjectDescriptionListItem>
                                <ProjectDescriptionListItem>Combat Skill</ProjectDescriptionListItem>
                            </ProjectDescriptionList>
                            <ProjectDescriptionListTitle>Technologies Used</ProjectDescriptionListTitle>
                            <ProjectDescriptionList>
                                <ProjectDescriptionListItem>Deployment: Arch-Linux VPS</ProjectDescriptionListItem>
                                <ProjectDescriptionListItem>Language: Python</ProjectDescriptionListItem>
                                <ProjectDescriptionListItem>Version Control: GitHub</ProjectDescriptionListItem>
                                <ProjectDescriptionListItem>Data storage: JSON</ProjectDescriptionListItem>

                            </ProjectDescriptionList>
                        </ProjectsDescription>
                    </ProjectsTitleDesContainer>
                    <ProjectsImage src={LiquiBotImage} />
                    <MOBILEProjectCardDescription ref={MobileCardDescriptionOneRef} show={DescriptionOneActive}>
                        <MOBILEProjectCardDescriptionLink href="https://liquibot.netlify.app/" target="_blank">LiquiBot's Website <MOBILEProjectCardDescriptionLinkSpan>In Progress</MOBILEProjectCardDescriptionLinkSpan></MOBILEProjectCardDescriptionLink>
                        <ProjectDescriptionListTitle>Functionality</ProjectDescriptionListTitle>
                        <ProjectDescriptionList>
                            <ProjectDescriptionListItem>Leaderboards</ProjectDescriptionListItem>
                            <ProjectDescriptionListItem>Leveling</ProjectDescriptionListItem>
                            <ProjectDescriptionListItem>Trading</ProjectDescriptionListItem>
                            <ProjectDescriptionListItem>In Game Store</ProjectDescriptionListItem>
                            <ProjectDescriptionListItem>Equipment</ProjectDescriptionListItem>
                            <ProjectDescriptionListItem>Mining Skill</ProjectDescriptionListItem>
                            <ProjectDescriptionListItem>Smithing Skill</ProjectDescriptionListItem>
                            <ProjectDescriptionListItem>Combat Skill</ProjectDescriptionListItem>
                        </ProjectDescriptionList>
                        <ProjectDescriptionListTitle>Technologies Used</ProjectDescriptionListTitle>
                        <ProjectDescriptionList>
                            <ProjectDescriptionListItem>Deployment: Arch-Linux VPS</ProjectDescriptionListItem>
                            <ProjectDescriptionListItem>Language: Python</ProjectDescriptionListItem>
                            <ProjectDescriptionListItem>Version Control: GitHub</ProjectDescriptionListItem>
                            <ProjectDescriptionListItem>Data storage: JSON</ProjectDescriptionListItem>
                        </ProjectDescriptionList>
                    </MOBILEProjectCardDescription>
                </ProjectsCard>


                <ProjectsCard ref={ProjectsCardRefTwo} inView={CardTwoVisible} onClick={() => handleClick("two")}>
                    <ProjectsTitleDesContainer>
                        <ProjectsCardTitle>
                            LiquiBot Website
                        </ProjectsCardTitle>
                        <ProjectsDescription>
                            This is a React.js website built for LiquiBot. It is a single page static website meant to display the fucnctionality of the bot. It displays some commands with descriptions as well as some stats.
                            <ProjectDescriptionListTitle>
                                <MOBILEProjectCardDescriptionLink href="https://liquibot.netlify.app/" target="_blank">LiquiBot's Website <MOBILEProjectCardDescriptionLinkSpan>In Progress</MOBILEProjectCardDescriptionLinkSpan></MOBILEProjectCardDescriptionLink>
                            </ProjectDescriptionListTitle>
                            <ProjectDescriptionListTitle>
                                Technologies Used
                            </ProjectDescriptionListTitle>
                            <ProjectDescriptionList>
                                <ProjectDescriptionListItem>Deployment: Netlify</ProjectDescriptionListItem>
                                <ProjectDescriptionListItem>Framework: React.js</ProjectDescriptionListItem>
                                <ProjectDescriptionListItem>JavaScript</ProjectDescriptionListItem>
                                <ProjectDescriptionListItem>HTML5</ProjectDescriptionListItem>
                                <ProjectDescriptionListItem>CSS3</ProjectDescriptionListItem>
                                <ProjectDescriptionListItem>Version Control: GitHub</ProjectDescriptionListItem>
                            </ProjectDescriptionList>
                        </ProjectsDescription>
                    </ProjectsTitleDesContainer>
                    <ProjectsImage src={LiquiBotWebsiteFinal} />
                    <MOBILEProjectCardDescription ref={MobileCardDescriptionTwoRef} show={DescriptionTwoActive}>
                        <MOBILEProjectCardDescriptionLink href="https://liquibot.netlify.app/" target="_blank">LiquiBot's Website <MOBILEProjectCardDescriptionLinkSpan>In Progress</MOBILEProjectCardDescriptionLinkSpan></MOBILEProjectCardDescriptionLink>
                        <ProjectDescriptionListTitle>Technologies Used</ProjectDescriptionListTitle>
                        <ProjectDescriptionList>
                            <ProjectDescriptionListItem>Deployment: Netlify</ProjectDescriptionListItem>
                            <ProjectDescriptionListItem>Framework: React.js</ProjectDescriptionListItem>
                            <ProjectDescriptionListItem>JavaScript</ProjectDescriptionListItem>
                            <ProjectDescriptionListItem>HTML5</ProjectDescriptionListItem>
                            <ProjectDescriptionListItem>CSS3</ProjectDescriptionListItem>
                            <ProjectDescriptionListItem>Version Control: GitHub</ProjectDescriptionListItem>
                        </ProjectDescriptionList>
                    </MOBILEProjectCardDescription>
                </ProjectsCard>


                <ProjectsCard ref={ProjectsCardRefThree} inView={CardThreeVisible} onClick={() => handleClick("three")}>
                    <ProjectsTitleDesContainer>
                        <ProjectsCardTitle>
                            JuiceBot
                        </ProjectsCardTitle>
                        <ProjectsDescription>
                            Welcome to JuiceBot! This was the starting point for what is now LiquiBot. It was my first experience with a discord.py bot. A list of features and technologies used are listed below. This bot is no longer active!
                            <ProjectDescriptionListTitle>
                                <MOBILEProjectCardDescriptionLink href="https://github.com/j-leidy" target="_blank">GitHub<MOBILEProjectCardDescriptionLinkSpan>JuiceBot is private</MOBILEProjectCardDescriptionLinkSpan></MOBILEProjectCardDescriptionLink>
                            </ProjectDescriptionListTitle>
                            <ProjectDescriptionListTitle>Functionality</ProjectDescriptionListTitle>
                            <ProjectDescriptionList>
                                <ProjectDescriptionListItem>Leaderboards</ProjectDescriptionListItem>
                                <ProjectDescriptionListItem>Leveling</ProjectDescriptionListItem>
                                <ProjectDescriptionListItem>In Game Store</ProjectDescriptionListItem>
                                <ProjectDescriptionListItem>Mining Skill</ProjectDescriptionListItem>
                                <ProjectDescriptionListItem>Smithing Skill</ProjectDescriptionListItem>
                            </ProjectDescriptionList>
                            <ProjectDescriptionListTitle>Technologies Used</ProjectDescriptionListTitle>
                            <ProjectDescriptionList>
                                <ProjectDescriptionListItem>Language: Python</ProjectDescriptionListItem>
                                <ProjectDescriptionListItem>Version Control: GitHub</ProjectDescriptionListItem>
                                <ProjectDescriptionListItem>Data storage: JSON</ProjectDescriptionListItem>
                            </ProjectDescriptionList>
                        </ProjectsDescription>
                    </ProjectsTitleDesContainer>
                    <ProjectsImage src={JuiceBotImage} />
                    <MOBILEProjectCardDescription ref={MobileCardDescriptionThreeRef} show={DescriptionThreeActive}>
                        <MOBILEProjectCardDescriptionLink href="https://github.com/j-leidy" target="_blank">GitHub<MOBILEProjectCardDescriptionLinkSpan>JuiceBot is private</MOBILEProjectCardDescriptionLinkSpan></MOBILEProjectCardDescriptionLink>
                        <ProjectDescriptionListTitle>Functionality</ProjectDescriptionListTitle>
                        <ProjectDescriptionList>
                            <ProjectDescriptionListItem>Leaderboards</ProjectDescriptionListItem>
                            <ProjectDescriptionListItem>Leveling</ProjectDescriptionListItem>
                            <ProjectDescriptionListItem>In Game Store</ProjectDescriptionListItem>
                            <ProjectDescriptionListItem>Mining Skill</ProjectDescriptionListItem>
                            <ProjectDescriptionListItem>Smithing Skill</ProjectDescriptionListItem>
                        </ProjectDescriptionList>
                        <ProjectDescriptionListTitle>Technologies Used</ProjectDescriptionListTitle>
                        <ProjectDescriptionList>
                            <ProjectDescriptionListItem>Language: Python</ProjectDescriptionListItem>
                            <ProjectDescriptionListItem>Version Control: GitHub</ProjectDescriptionListItem>
                            <ProjectDescriptionListItem>Data storage: JSON</ProjectDescriptionListItem>
                        </ProjectDescriptionList>
                    </MOBILEProjectCardDescription>
                </ProjectsCard>
                <ProjectsCard ref={ProjectsCardRefFour} inView={CardFourVisible} onClick={() => handleClick("four")}>
                    <ProjectsTitleDesContainer>
                        <ProjectsCardTitle>
                            C++ DB Explorer
                        </ProjectsCardTitle>
                        <ProjectsDescription>
                            Command line executor of SQL commands. This program implements almost all SQL commands in C++ using SQLITE3. With this program users are able to not only manipulate .db files in every way, but also create their own .db from the ground up.
                            <ProjectDescriptionListTitle>
                                <MOBILEProjectCardDescriptionLink href="https://github.com/j-leidy/C-DatabaseExplorer" target="_blank">C++ DB Repository <MOBILEProjectCardDescriptionLinkSpan> Public</MOBILEProjectCardDescriptionLinkSpan></MOBILEProjectCardDescriptionLink>
                            </ProjectDescriptionListTitle>
                            <ProjectDescriptionListTitle>Functionality</ProjectDescriptionListTitle>
                            <ProjectDescriptionList>
                                <ProjectDescriptionListItem>Create .db file</ProjectDescriptionListItem>
                                <ProjectDescriptionListItem>Use existing .db file</ProjectDescriptionListItem>
                                <ProjectDescriptionListItem>Create table</ProjectDescriptionListItem>
                                <ProjectDescriptionListItem>Drop table</ProjectDescriptionListItem>
                                <ProjectDescriptionListItem>Insert</ProjectDescriptionListItem>
                                <ProjectDescriptionListItem>Update</ProjectDescriptionListItem>
                                <ProjectDescriptionListItem>Delete row</ProjectDescriptionListItem>
                                <ProjectDescriptionListItem>Print table</ProjectDescriptionListItem>
                                <ProjectDescriptionListItem>Print all tables</ProjectDescriptionListItem>
                            </ProjectDescriptionList>
                            <ProjectDescriptionListTitle>Technologies Used</ProjectDescriptionListTitle>
                            <ProjectDescriptionList>
                                <ProjectDescriptionListItem>Deployment: Local CMD</ProjectDescriptionListItem>
                                <ProjectDescriptionListItem>Wrappers: SQLITE3</ProjectDescriptionListItem>
                                <ProjectDescriptionListItem>Language: C++</ProjectDescriptionListItem>
                                <ProjectDescriptionListItem>Version Control: GitHub</ProjectDescriptionListItem>
                                <ProjectDescriptionListItem>Data storage: .db</ProjectDescriptionListItem>
                            </ProjectDescriptionList>
                        </ProjectsDescription>
                    </ProjectsTitleDesContainer>
                    <ProjectsImage src={DbImg} />
                    <MOBILEProjectCardDescription ref={MobileCardDescriptionFourRef} show={DescriptionFourActive}>
                        <MOBILEProjectCardDescriptionLink href="https://github.com/j-leidy/C-DatabaseExplorer" target="_blank">C++ DB Repository <MOBILEProjectCardDescriptionLinkSpan> Public</MOBILEProjectCardDescriptionLinkSpan></MOBILEProjectCardDescriptionLink>
                        <ProjectDescriptionListTitle>Functionality</ProjectDescriptionListTitle>
                        <ProjectDescriptionList>
                            <ProjectDescriptionListItem>Create .db file</ProjectDescriptionListItem>
                            <ProjectDescriptionListItem>Use existing .db file</ProjectDescriptionListItem>
                            <ProjectDescriptionListItem>Create table</ProjectDescriptionListItem>
                            <ProjectDescriptionListItem>Drop table</ProjectDescriptionListItem>
                            <ProjectDescriptionListItem>Insert</ProjectDescriptionListItem>
                            <ProjectDescriptionListItem>Update</ProjectDescriptionListItem>
                            <ProjectDescriptionListItem>Delete row</ProjectDescriptionListItem>
                            <ProjectDescriptionListItem>Print table</ProjectDescriptionListItem>
                            <ProjectDescriptionListItem>Print all tables</ProjectDescriptionListItem>
                        </ProjectDescriptionList>
                        <ProjectDescriptionListTitle>Technologies Used</ProjectDescriptionListTitle>
                        <ProjectDescriptionList>
                            <ProjectDescriptionListItem>Deployment: Local CMD</ProjectDescriptionListItem>
                            <ProjectDescriptionListItem>Wrappers: SQLITE3</ProjectDescriptionListItem>
                            <ProjectDescriptionListItem>Language: C++</ProjectDescriptionListItem>
                            <ProjectDescriptionListItem>Version Control: GitHub</ProjectDescriptionListItem>
                            <ProjectDescriptionListItem>Data storage: .db</ProjectDescriptionListItem>
                        </ProjectDescriptionList>
                    </MOBILEProjectCardDescription>
                </ProjectsCard>
            </ProjectsContent>
        </ProjectsBody>
    );
};

export default Projects;