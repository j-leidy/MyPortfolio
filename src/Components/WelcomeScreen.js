import React, { useState } from "react";
import { TypewriterContainer, WelcomeButtonText, WelcomeScreenBody, WelcomeScreenButtonLeft, WelcomeScreenButtonRight, WelcomeScrenTitle } from "./WelcomeScreenStyle";
import Typewriter from 'typewriter-effect';

const WelcomeScreen = ({ particlesStateSetter, homeStateSetter }) => {
    const [clicked, setClicked] = useState(false);

    const enterClicked = () => {
        setClicked(true);
        particlesStateSetter(true);
        homeStateSetter(true);
    }


    return (
        <>
            <WelcomeScreenButtonLeft onClick={enterClicked} entered={clicked} />
            <WelcomeScreenButtonRight onClick={enterClicked} entered={clicked} />
            <WelcomeButtonText onClick={enterClicked} entered={clicked}>Click to enter</WelcomeButtonText>
            <WelcomeScrenTitle entered={clicked} >John Leidy II Portfolio</WelcomeScrenTitle>
            <TypewriterContainer entered={clicked}>
                Initializing
                <Typewriter
                    options={{
                        strings: ["..."],
                        autoStart: true,
                        loop: true,
                        cursor: ""
                    }}
                />
            </TypewriterContainer>
            <WelcomeScreenBody entered={clicked} />
        </>

    );
};

export default WelcomeScreen;