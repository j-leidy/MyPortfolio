import React from "react";
import Typewriter from 'typewriter-effect';
import { Body, BodyTitle, BodyText, BodyName, BodyDetails, StaticText, PortraitContainer, Portrait, TypeWriterHolder, HomeContent, PortraitFullscreen} from "./HomeStyle";
import TempPortrait from '../Images/TempPortrait.jpg'

const Home = ({lightdark}) =>{
    console.log(lightdark)
    return(
        <Body active = {lightdark}>
            <HomeContent>
                <PortraitContainer>
                    <Portrait src= {TempPortrait}/>
                </PortraitContainer>
                <BodyText>
                    <BodyTitle>
                        Hello, 
                    </BodyTitle>
                    <BodyTitle>
                        My name is
                    </BodyTitle>
                    <BodyName active = {lightdark}>
                        John Leidy II
                    </BodyName>
                </BodyText>
                <BodyDetails active = {lightdark}>
                    <StaticText>
                        I'm a
                    </StaticText>
                    <TypeWriterHolder>

                    
                        <Typewriter
                            options={{
                                strings :[ "developer.", "co-worker.", "student." ,"son.", "friend.", "dreamer.", "gamer.", "brother."],
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