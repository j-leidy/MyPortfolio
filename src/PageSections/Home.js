import React from "react";
import Typewriter from 'typewriter-effect';
import { Body, BodyTitle, BodyText, BodyName, BodyDetails, StaticText, PortraitContainer, Portrait, TypeWriterHolder, HomeContent, PortraitFullscreen} from "./HomeStyle";
import TempPortrait from '../Images/TempPortrait.jpg'

const Home = () =>{
    return(
        <Body>
            <HomeContent>
                <PortraitContainer>
                    <Portrait src= {TempPortrait}/>
                </PortraitContainer>
                <BodyText>
                    <BodyTitle>
                        Hello, 
                    </BodyTitle>
                    <BodyTitle>
                        My Name Is,
                    </BodyTitle>
                    <BodyName>
                        John Leidy II
                    </BodyName>
                </BodyText>
                <BodyDetails>
                    <StaticText>
                        I'm a
                    </StaticText>
                    <TypeWriterHolder>

                    
                        <Typewriter
                            options={{
                                strings :["friend.", "developer.", "co-worker.", "student."],
                                autoStart: true,
                                loop: true
                            }}
                        />
                    </TypeWriterHolder>
                        
                </BodyDetails>
            </HomeContent>
            <PortraitFullscreen src={TempPortrait}/>
        </Body>
        
    );
};

export default Home;