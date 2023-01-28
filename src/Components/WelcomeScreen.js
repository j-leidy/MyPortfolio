import React, { useState } from "react";
import { TypewriterContainer, WelcomeButtonText, WelcomeScreenBody, WelcomeScreenButtonLeft, WelcomeScreenButtonRight, WelcomeScreenTitleText, WelcomeScrenTitle } from "./WelcomeScreenStyle";
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
            <WelcomeScrenTitle entered={clicked} ><WelcomeScreenTitleText>John Leidy II Portfolio</WelcomeScreenTitleText></WelcomeScrenTitle>
            <TypewriterContainer entered={clicked}>
                Initializing
                <Typewriter
                    options={{
                        strings: ["..."],
                        autoStart: true,
                        loop: true,
                        cursor: "",

                    }}
                />
            </TypewriterContainer>
            <WelcomeScreenBody entered={clicked} />
        </>

    );
};

export default WelcomeScreen;