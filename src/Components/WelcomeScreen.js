import React, { useState } from "react";
import { WelcomeButtonText, WelcomeScreenBody, WelcomeScreenButtonLeft, WelcomeScreenButtonRight, WelcomeScreenLoadingContainer, WelcomeScreenLoadingContainerItem, WelcomeScreenLoadingContainerTypeWriterContainer, WelcomeScreenLoadingContainerTypeWriterStatic, WelcomeScreenLoadingFrame, WelcomeScreenLoadingFrameIconHolder, WelcomeScreenLoadingMini, WelcomeScreenLoadingFrameX, WelcomeScreenTitleText, WelcomeScrenTitle, WelcomeButtonMobileText, WelcomeScreenLoadingContainerTitle, WelcomeScreenSocialBarContainer, WelcomeScreenSocialLink, WelcomeScreenSocialIcon, WelcomeSCreenLoadingContainerTypeWriterStaticColored } from "./WelcomeScreenStyle";
import Typewriter from 'typewriter-effect';
import LI from "../Icons/LIBW.png";
import IG from "../Icons/IGBW.png";
import FB from "../Icons/FBBW.png";
import Twit from "../Icons/TWITBW.png";
import GitIcon from "../Icons/GHBW.png";
import { AccentColorGreen, AccentColorPurple } from "../colorPallete";

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
            <WelcomeScreenSocialBarContainer entered={clicked}>
                <WelcomeScrenTitle entered={clicked} ><WelcomeScreenTitleText>John Leidy II</WelcomeScreenTitleText></WelcomeScrenTitle>
                <WelcomeScreenSocialLink href="https://www.instagram.com/swankdayz/" target="_blank">
                    <WelcomeScreenSocialIcon src={IG} />
                </WelcomeScreenSocialLink>
                <WelcomeScreenSocialLink href="https://www.facebook.com/" target="_blank">
                    <WelcomeScreenSocialIcon src={FB} />
                </WelcomeScreenSocialLink>

                <WelcomeScreenSocialLink href="https://twitter.com/Liquiiiiid" target="_blank">
                    <WelcomeScreenSocialIcon src={Twit} />
                </WelcomeScreenSocialLink>
                <WelcomeScreenSocialLink href="https://www.linkedin.com/in/jrleidyii/" target="_blank">
                    <WelcomeScreenSocialIcon src={LI} />
                </WelcomeScreenSocialLink>
                <WelcomeScreenSocialLink href="https://github.com/j-leidy" target="_blank">
                    <WelcomeScreenSocialIcon src={GitIcon} />
                </WelcomeScreenSocialLink>
            </WelcomeScreenSocialBarContainer>
            <WelcomeScreenButtonLeft onClick={enterClicked} entered={clicked} />
            <WelcomeScreenButtonRight onClick={enterClicked} entered={clicked} />
            <WelcomeButtonMobileText onClick={enterClicked} entered={clicked}>Tap to enter</WelcomeButtonMobileText>
            <WelcomeButtonText onClick={enterClicked} entered={clicked}>Click to enter</WelcomeButtonText>

            <WelcomeScreenBody entered={clicked} />

            <WelcomeScreenLoadingFrame entered={clicked}>
                <WelcomeScreenLoadingContainerTitle entered={clicked}>Terminal</WelcomeScreenLoadingContainerTitle>
                <WelcomeScreenLoadingFrameIconHolder entered={clicked}>
                    <WelcomeScreenLoadingMini>_</WelcomeScreenLoadingMini>
                    <WelcomeScreenLoadingFrameX>✕ </WelcomeScreenLoadingFrameX>
                </WelcomeScreenLoadingFrameIconHolder>
            </WelcomeScreenLoadingFrame>

            <WelcomeScreenLoadingContainer entered={clicked}>
                <WelcomeScreenLoadingContainerItem>Welcome</WelcomeScreenLoadingContainerItem>
                <WelcomeScreenLoadingContainerItem>Website Title: John Leidy II Portfolio</WelcomeScreenLoadingContainerItem>
                <WelcomeScreenLoadingContainerTypeWriterContainer>
                    <WelcomeScreenLoadingContainerTypeWriterStatic>
                        <WelcomeSCreenLoadingContainerTypeWriterStaticColored CustomColor={"#ffcd06"}>root</WelcomeSCreenLoadingContainerTypeWriterStaticColored>
                        <WelcomeSCreenLoadingContainerTypeWriterStaticColored CustomColor={"white"}>:</WelcomeSCreenLoadingContainerTypeWriterStaticColored>
                        <WelcomeSCreenLoadingContainerTypeWriterStaticColored CustomColor={AccentColorPurple}>~</WelcomeSCreenLoadingContainerTypeWriterStaticColored>
                        <WelcomeSCreenLoadingContainerTypeWriterStaticColored CustomColor={AccentColorGreen}>$</WelcomeSCreenLoadingContainerTypeWriterStaticColored>
                    </WelcomeScreenLoadingContainerTypeWriterStatic>
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