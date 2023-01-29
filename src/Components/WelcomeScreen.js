import React, { useState } from "react";
import { WelcomeButtonText, WelcomeScreenBody, WelcomeScreenButtonLeft, WelcomeScreenButtonRight, WelcomeScreenLoadingContainer, WelcomeScreenLoadingContainerItem, WelcomeScreenLoadingContainerTypeWriterContainer, WelcomeScreenLoadingContainerTypeWriterStatic, WelcomeScreenLoadingFrame, WelcomeScreenLoadingFrameIconHolder, WelcomeScreenLoadingMini, WelcomeScreenLoadingFrameX, WelcomeScreenTitleText, WelcomeScrenTitle, WelcomeButtonMobileText, WelcomeScreenLoadingContainerTitle } from "./WelcomeScreenStyle";
import Typewriter from 'typewriter-effect';

const WelcomeScreen = ({ particlesStateSetter, homeStateSetter }) => {
    const [clicked, setClicked] = useState(false);

    const enterClicked = () => {
        setClicked(true);
        particlesStateSetter(true);
        homeStateSetter(true);
        Typewriter.stop();
    }


    return (
        <>
            <WelcomeScreenButtonLeft onClick={enterClicked} entered={clicked} />
            <WelcomeScreenButtonRight onClick={enterClicked} entered={clicked} />
            <WelcomeButtonMobileText onClick={enterClicked} entered={clicked}>Tap to enter</WelcomeButtonMobileText>
            <WelcomeButtonText onClick={enterClicked} entered={clicked}>Click to enter</WelcomeButtonText>
            <WelcomeScrenTitle entered={clicked} ><WelcomeScreenTitleText>John Leidy II</WelcomeScreenTitleText></WelcomeScrenTitle>

            <WelcomeScreenBody entered={clicked} />
            <WelcomeScreenLoadingContainerTitle>Terminal</WelcomeScreenLoadingContainerTitle>
            <WelcomeScreenLoadingFrame entered={clicked} />
            <WelcomeScreenLoadingFrameIconHolder entered={clicked}>
                <WelcomeScreenLoadingMini>_</WelcomeScreenLoadingMini>
                <WelcomeScreenLoadingFrameX>✕ </WelcomeScreenLoadingFrameX>
            </WelcomeScreenLoadingFrameIconHolder>
            <WelcomeScreenLoadingContainer entered={clicked}>
                <WelcomeScreenLoadingContainerItem>Welcome</WelcomeScreenLoadingContainerItem>
                <WelcomeScreenLoadingContainerItem>Website Title: John Leidy II Portfolio</WelcomeScreenLoadingContainerItem>
                <WelcomeScreenLoadingContainerTypeWriterContainer>
                    <WelcomeScreenLoadingContainerTypeWriterStatic><span>root:</span><span>~</span>$</WelcomeScreenLoadingContainerTypeWriterStatic>
                    <Typewriter
                        options={{
                            strings: ["REDACTED...", "........", "Init navBar...", "Init home...", "........", "REDACTED...", "........", "Init about...", "Init projects...", "REDACTED...", "Init experience...", "init degrees...", "REDACTED...", "init contact...", "bundling dependencies......", "REDACTED..."],
                            autoStart: true,
                            loop: true,
                            cursor: "",
                            delay: 30,
                            deleteSpeed: 2,
                            pauseFor: 400,

                        }}
                    />
                </WelcomeScreenLoadingContainerTypeWriterContainer>
            </WelcomeScreenLoadingContainer>
        </>

    );
};

export default WelcomeScreen;