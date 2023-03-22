import React, { useCallback, useEffect, useRef, useState } from "react";
import { DesktopDescriptionButton, DesktopDescriptionButtonText, DesktopListContainerDescription, MOBILEProjectCardDescription, MOBILEProjectCardDescriptionLink, MOBILEProjectCardDescriptionLinkSpan, ProjectDescriptionList, ProjectDescriptionListItem, ProjectDescriptionListTitle, ProjectsBody, ProjectsCard, ProjectsCardTitle, ProjectsContent, ProjectsDescription, ProjectsImage, ProjectsTitle, ProjectsTitleDesContainer, ProjectsTitleIPADLink, ProjectsTitleUnder } from "./ProjectsStyle";

import JuiceBotImage from '../Images/test.png'
import DbImg from '../Images/CDBCard.png'
import LiquiBotImage from '../Images/LiquiBotCard.png'
import LiquiBotWebsiteFinal from '../Images/LiquiBotWebsiteFinal.png'
//https://github.com/j-leidy/C-DatabaseExplorer

//refs are passed down from the main page parent. This allows us to pass them into the about section.
//By doing this we are able to have div clicks in the about section/skills navigate to a project containing a skill!
const Projects = ({ lightdark, liquibotref, liquibotwebsiteRef, juicebotRef, cplusDBRef }) => {

    const ProjectsTitleRef = useRef();
    const [TitleVisible, setTitleVisible] = useState();

    const ProjectsTitleUnderRef = useRef();
    const [TitleUnderVisible, setTitleUnderVisible] = useState();

    //const ProjectsCardRefOne = useRef(); this is currently liquibotref from the main page
    const [CardOneVisible, setCardOneVisible] = useState();

    //const ProjectsCardRefTwo = useRef(); this is now liquibotwebsiteRef
    const [CardTwoVisible, setCardTwoVisible] = useState();

    //const ProjectsCardRefThree = useRef(); this is now juicebotRef
    const [CardThreeVisible, setCardThreeVisible] = useState();

    //const ProjectsCardRefFour = useRef(); this is now cplusDBRef
    const [CardFourVisible, setCardFourVisible] = useState();

    const MobileCardDescriptionOneRef = useRef();
    const [DescriptionOneActive, setDescriptionOneActive] = useState(false);

    const MobileCardDescriptionTwoRef = useRef();
    const [DescriptionTwoActive, setDescriptionTwoActive] = useState(false);

    const MobileCardDescriptionThreeRef = useRef();
    const [DescriptionThreeActive, setDescriptionThreeActive] = useState(false);

    const MobileCardDescriptionFourRef = useRef();
    const [DescriptionFourActive, setDescriptionFourActive] = useState(false);

    const [DesktopDescriptionOneActive, setDesktopDescriptionOneActive] = useState(false);
    const [DesktopDescriptionTwoActive, setDesktopDescriptionTwoActive] = useState(false);
    const [DesktopDescriptionThreeActive, setDesktopDescriptionThreeActive] = useState(false);
    const [DesktopDescriptionFourActive, setDesktopDescriptionFourActive] = useState(false);



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

    const handleClickDesktop = useCallback((which_button) => {
        if (which_button === "one") {
            setDesktopDescriptionOneActive(!DesktopDescriptionOneActive)
        }
        else if (which_button === "two") {
            setDesktopDescriptionTwoActive(!DesktopDescriptionTwoActive)
        }
        else if (which_button === "three") {
            setDesktopDescriptionThreeActive(!DesktopDescriptionThreeActive)
        }
        else if (which_button === "four") {
            setDesktopDescriptionFourActive(!DesktopDescriptionFourActive)
        }
    }, [DesktopDescriptionOneActive, DesktopDescriptionTwoActive, DesktopDescriptionThreeActive, DesktopDescriptionFourActive])

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
        observerCardOne.observe(liquibotref.current)

        const observerCardTwo = new IntersectionObserver(([entry]) => {
            setCardTwoVisible(entry.isIntersecting)
        });
        observerCardTwo.observe(liquibotwebsiteRef.current)

        const observerCardThree = new IntersectionObserver(([entry]) => {
            setCardThreeVisible(entry.isIntersecting)
        });
        observerCardThree.observe(juicebotRef.current)

        const observerCardFour = new IntersectionObserver(([entry]) => {
            setCardFourVisible(entry.isIntersecting)
        });
        observerCardFour.observe(cplusDBRef.current)

    }, [ProjectsTitleRef, TitleVisible, ProjectsTitleUnderRef, TitleUnderVisible, liquibotref, CardOneVisible, liquibotwebsiteRef, CardTwoVisible, juicebotRef, CardThreeVisible, cplusDBRef, CardFourVisible]);





    return (
        <ProjectsBody active={lightdark} >
            <ProjectsContent>
                <ProjectsTitle ref={ProjectsTitleRef} inView={TitleVisible}>
                    Projects
                </ProjectsTitle>
                <ProjectsTitleUnder ref={ProjectsTitleUnderRef} inView={TitleUnderVisible}>Tap on a card to view more information!</ProjectsTitleUnder>
                <ProjectsCard ref={liquibotref} inView={CardOneVisible} onClick={() => handleClick("one")}>
                    <ProjectsTitleDesContainer>
                        <ProjectsCardTitle>
                            LiquiBot
                            <ProjectsTitleIPADLink href="https://liquibot.netlify.app/" target="_blank">LiquiBot's Website</ProjectsTitleIPADLink>
                        </ProjectsCardTitle>

                        <ProjectsDescription>
                            Welcome to LiquiBot! This Discord Bot is JuiceBot's successor. JuiceBot was my first experience with Discord.py. This time around the speed and scalability was geratly improved.
                            Using Discord.py v2.0 with asyncio in Python. The repository for this project is private. Please contact me below if you would like to take a look!
                            <ProjectDescriptionListTitle>
                                <MOBILEProjectCardDescriptionLink href="https://liquibot.netlify.app/" target="_blank">LiquiBot's Website <MOBILEProjectCardDescriptionLinkSpan>In Progress</MOBILEProjectCardDescriptionLinkSpan></MOBILEProjectCardDescriptionLink>
                                <DesktopDescriptionButton onClick={() => handleClickDesktop("one")}>
                                    <DesktopDescriptionButtonText active={lightdark}>
                                        More Info
                                    </DesktopDescriptionButtonText>
                                </DesktopDescriptionButton>
                            </ProjectDescriptionListTitle>
                            <DesktopListContainerDescription show={DesktopDescriptionOneActive}>
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
                            </DesktopListContainerDescription>
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


                <ProjectsCard ref={liquibotwebsiteRef} inView={CardTwoVisible} onClick={() => handleClick("two")}>
                    <ProjectsTitleDesContainer>
                        <ProjectsCardTitle>
                            LiquiBot Website
                            <ProjectsTitleIPADLink href="https://liquibot.netlify.app/" target="_blank">LiquiBot's Website</ProjectsTitleIPADLink>
                        </ProjectsCardTitle>
                        <ProjectsDescription>
                            This is a React.js website built for LiquiBot. It is a single page static website meant to display the fucnctionality of the bot. It displays some commands with descriptions as well as some stats.
                            <ProjectDescriptionListTitle>
                                <MOBILEProjectCardDescriptionLink href="https://liquibot.netlify.app/" target="_blank">LiquiBot's Website <MOBILEProjectCardDescriptionLinkSpan>In Progress</MOBILEProjectCardDescriptionLinkSpan></MOBILEProjectCardDescriptionLink>
                                <DesktopDescriptionButton onClick={() => handleClickDesktop("two")}>
                                    <DesktopDescriptionButtonText active={lightdark}>
                                        More Info
                                    </DesktopDescriptionButtonText>
                                </DesktopDescriptionButton>
                            </ProjectDescriptionListTitle>
                            <DesktopListContainerDescription show={DesktopDescriptionTwoActive}>
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
                            </DesktopListContainerDescription>
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


                <ProjectsCard ref={juicebotRef} inView={CardThreeVisible} onClick={() => handleClick("three")}>
                    <ProjectsTitleDesContainer>
                        <ProjectsCardTitle>
                            JuiceBot
                            <ProjectsTitleIPADLink href="https://github.com/j-leidy" target="_blank">GitHub</ProjectsTitleIPADLink>
                        </ProjectsCardTitle>
                        <ProjectsDescription>
                            Welcome to JuiceBot! This was the starting point for what is now LiquiBot. It was my first experience with a discord.py bot. A list of features and technologies used are listed below. This bot is no longer active!
                            <ProjectDescriptionListTitle>
                                <MOBILEProjectCardDescriptionLink href="https://github.com/j-leidy" target="_blank">GitHub<MOBILEProjectCardDescriptionLinkSpan>JuiceBot is private</MOBILEProjectCardDescriptionLinkSpan></MOBILEProjectCardDescriptionLink>
                                <DesktopDescriptionButton onClick={() => handleClickDesktop("three")}>
                                    <DesktopDescriptionButtonText active={lightdark}>
                                        More Info
                                    </DesktopDescriptionButtonText>
                                </DesktopDescriptionButton>
                            </ProjectDescriptionListTitle>
                            <DesktopListContainerDescription show={DesktopDescriptionThreeActive}>
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
                            </DesktopListContainerDescription>
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
                <ProjectsCard ref={cplusDBRef} inView={CardFourVisible} onClick={() => handleClick("four")}>
                    <ProjectsTitleDesContainer>
                        <ProjectsCardTitle>
                            C++ DB Explorer
                            <ProjectsTitleIPADLink href="https://github.com/j-leidy/C-DatabaseExplorer" target="_blank">C++ DB Repository </ProjectsTitleIPADLink>
                        </ProjectsCardTitle>
                        <ProjectsDescription>
                            Command line executor of SQL commands. This program implements almost all SQL commands in C++ using SQLITE3. With this program users are able to not only manipulate .db files in every way, but also create their own .db from the ground up.
                            <ProjectDescriptionListTitle>
                                <MOBILEProjectCardDescriptionLink href="https://github.com/j-leidy/C-DatabaseExplorer" target="_blank">C++ DB Repository <MOBILEProjectCardDescriptionLinkSpan> Public</MOBILEProjectCardDescriptionLinkSpan></MOBILEProjectCardDescriptionLink>
                                <DesktopDescriptionButton onClick={() => handleClickDesktop("four")}>
                                    <DesktopDescriptionButtonText active={lightdark}>
                                        More Info
                                    </DesktopDescriptionButtonText>
                                </DesktopDescriptionButton>
                            </ProjectDescriptionListTitle>
                            <DesktopListContainerDescription show={DesktopDescriptionFourActive}>
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
                            </DesktopListContainerDescription>
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