import styled, { keyframes } from "styled-components";
import { AccentColorGreen } from "../colorPallete";

export const WelcomeScreenButtonLeft = styled.div`
    position: absolute;
    bottom: calc(50% - 100px);
    left: ${(props) => (props.entered ? "calc(50% - 150px)" : "calc(50% - 100px)")};
    width: 100px;
    height: 200px;
    background: black;
    opacity: ${(props) => (props.entered ? "0" : "1")};
    z-index: ${(props) => (props.entered ? "-16" : "22")};
    border-top-left-radius: 100px;
    border-bottom-left-radius: 100px;
    border-left: 1px solid ${AccentColorGreen};
    transition: opacity 0.2s, left 0.5s, z-index 0.6s;
    cursor: pointer;
    user-select: none;
    -webkit-tap-highlight-color: transparent;
    @media screen and (min-width: 1920px){
        position: absolute;
        left: ${(props) => (props.entered ? "calc(50% - 450px)" : "calc(50% - 150px)")};
        width: 150px;
        height: 300px;
        border-top-left-radius: 200px;
        border-bottom-left-radius: 200px;
        bottom: calc(50% - 150px);
    }
    @media screen and (min-width: 2560px){
        position: absolute;
        left: ${(props) => (props.entered ? "calc(50% - 450px)" : "calc(50% - 200px)")};
        width: 200px;
        height: 400px;
        border-top-left-radius: 500px;
        border-bottom-left-radius: 500px;
        bottom: calc(50% - 200px);
    }
`;
export const WelcomeScreenButtonRight = styled.div`
    position: absolute;
    right: ${(props) => (props.entered ? "calc(50% - 150px)" : "calc(50% - 100px)")};
    width: 100px;
    height: 200px;
    background: black;
    opacity: ${(props) => (props.entered ? "0" : "1")};
    z-index: ${(props) => (props.entered ? "-16" : "22")};
    border-top-right-radius: 100px;
    border-bottom-right-radius: 100px;
    top: calc(50% - 100px);
    border-right: 1px solid ${AccentColorGreen};
    transition: opacity 0.2s, right 0.5s, z-index 0.6s;
    cursor: pointer;
    user-select: none;
    -webkit-tap-highlight-color: transparent;
    @media screen and (min-width: 1920px){
        position: absolute;
        right: ${(props) => (props.entered ? "calc(50% - 450px)" : "calc(50% - 150px)")};
        width: 150px;
        height: 300px;
        border-top-right-radius: 200px;
        border-bottom-right-radius: 200px;
        top: calc(50% - 150px);
    }
    @media screen and (min-width: 2560px){
        position: absolute;
        right: ${(props) => (props.entered ? "calc(50% - 450px)" : "calc(50% - 200px)")};
        width: 200px;
        height: 400px;
        border-top-right-radius: 500px;
        border-bottom-right-radius: 500px;
        top: calc(50% - 200px);
    }
    
`;

const TextFader = keyframes`   
    0%{
        opacity: 0;
    }
    30%{
        opacity: 1;
    }
    70%{
        opacity: 1;
    }
    100%{
        opacity: 0;
    }

`;


export const WelcomeButtonText = styled.div`
    position: absolute;
    color: ${AccentColorGreen};
    font-size: 20px;
    width: 100%;
    top: calc(50% - 12px);
    margin: auto;
    z-index: ${(props) => (props.entered ? "-40" : "22")};
    text-align: center;
    animation: ${TextFader} 5s linear infinite;
    cursor: pointer;
    user-select: none;
    -webkit-tap-highlight-color: transparent;
    @media screen and (max-width: 550px){
        display: none;
    }
    @media screen and (min-width: 2560px){
        font-size: 60px;
        top: calc(50% - 30px);
    }
    @media screen and (min-width: 1920px){
        font-size: 40px;
        top: calc(50% - 20px);
    }
`;
export const WelcomeButtonMobileText = styled.div`
    position: absolute;
    color: ${AccentColorGreen};
    font-size: 20px;
    width: 100%;
    top: calc(50% - 12px);
    margin: auto;
    z-index: ${(props) => (props.entered ? "-40" : "22")};
    text-align: center;
    animation: ${TextFader} 5s linear infinite;
    cursor: pointer;
    user-select: none;
    -webkit-tap-highlight-color: transparent;
    @media screen and (min-width: 2560px){
        display: none;
    }
    @media screen and (min-width: 1920px){
        display: none;
    }
`;

export const WelcomeScrenTitle = styled.div`
    position: absolute;
    z-index: ${(props) => (props.entered ? "-40" : "22")};
    opacity: ${(props) => (props.entered ? "0" : "1")};
    width: 300px;
    height: 70px;
    left: calc(50% - 150px);
    top: 5%;
    font-weight: 600;
    font-size: 25px;
    text-align: center;
    color: black;
    border-radius: 10px;
    transition: 1s all ease;
    border-bottom: 1px solid ${AccentColorGreen};
    -webkit-tap-highlight-color: transparent;
    @media screen and (max-width: 550px){
        font-size: 30px;
    }
    @media screen and (min-width: 2560px){
        font-size: 60px;
        width: 1000px;
        left: calc(50% - 500px);
    }
    @media screen and (min-width: 1920px){
        font-size: 40px;
        width: 1000px;
        left: calc(50% - 500px);
    }

`;
export const WelcomeScreenTitleText = styled.div`
    cursor: default;
    width: 100%;
    height: 100%;
    position: relative;
`;



export const TypewriterContainer = styled.div`
    z-index: ${(props) => (props.entered ? "-40" : "21")};
    opacity: ${(props) => (props.entered ? "0" : "1")};
    position: absolute;
    top: 80%;
    left: calc(50% - 46px);
    font-size: 20px;
    width: 200px;
    height: 10%;
    display: flex;
    flex-direction: row;
    transition: 1s all ease;
    text-align: center;
    -webkit-tap-highlight-color: transparent;
    @media screen and (min-width: 2560px){
        font-size: 40px;
        width: 1000px;
        left: calc(50% - 110px);
        top: 90%;
    }
    @media screen and (min-width: 1920px){
        font-size: 30px;
        width: 1000px;
        left: calc(50% - 85px);
        top: 90%;
    }
`;



export const WelcomeScreenBody = styled.div`
    height: 100vh;
    width: 100vw;
    z-index: ${(props) => (props.entered ? "-40" : "20")};
    opacity: ${(props) => (props.entered ? "0" : "1")};
    position: absolute;
    background: ${(props) => (props.entered ? "rgba(0,0,0,0)" : "none")};
    transition: zIndex 5s, opacity 20s, background-color 0s;
    overflow: none;

`;

export const WelcomeScreenLoadingContainer = styled.div`
    width: 300px;
    height: 60px;
    bottom: ${(props) => (props.entered ? "-1000px" : "10px")};
    left: calc(50% - 153px);
    background: black;
    position: absolute;
    font-size: 12px;
    color: white;
    padding: 6px;
    border-radius: 10px;
    z-index: ${(props) => (props.entered ? "-40" : "22")};
    opacity: ${(props) => (props.entered ? "0" : "1")};
    transition: 1s all ease;
    -webkit-tap-highlight-color: transparent;
    @media screen and (min-width: 1920px){
        width: 500px;
        left: calc(50% - 250px);
    }
`;
export const WelcomeScreenLoadingFrame = styled.div`
    width: 304px;
    height: 80px;
    bottom: ${(props) => (props.entered ? "-1000px" : "8px")};
    left: calc(50% - 155px);
    background: ${(props) => (props.entered ? "black" : AccentColorGreen)};
    position: absolute;
    z-index: ${(props) => (props.entered ? "-40" : "22")};
    opacity: ${(props) => (props.entered ? "0" : "1")};
    font-size: 12px;
    color: black;
    padding: 6px;
    border-radius: 10px;
    transition: 1s all ease;
    -webkit-tap-highlight-color: transparent;
    cursor: default;
    @media screen and (min-width: 1920px){
        width: 504px;
        left: calc(50% - 252px);
    }
`;

export const WelcomeScreenLoadingFrameIconHolder = styled.div`
    width: 30px;
    height: 8px;
    z-index: ${(props) => (props.entered ? "-40" : "23")};
    opacity: ${(props) => (props.entered ? "0" : "1")};
    display: flex;
    flex-direction: row;
    position: absolute;
    bottom: ${(props) => (props.entered ? "-1000px" : "89px")};
    left: 80%;
    color: white;
    padding: 0;
    transition: 2s all ease;
    -webkit-tap-highlight-color: transparent;
    cursor: default;
    @media screen and (max-width: 370px){
        left: 84%;
    }
    @media screen and (min-width: 1920px){
        left: calc(50% + 220px);
    }
`;

export const WelcomeScreenLoadingFrameX = styled.div`
    font-size: 10px;
    width: 10px;
    height: 8px;
    margin: auto;
    border: 1px solid black;
    background: black;
    padding-bottom: 4px;
    padding-top: -2px;
    text-align: center;
    -webkit-tap-highlight-color: transparent;
    cursor: default;

`;

export const WelcomeScreenLoadingMini = styled.div`
    font-size: 10px;
    width: 10px;
    height: 8px;
    margin: auto;
    border: 1px solid black;
    background: black;
    padding-bottom: 4px;
    padding-top: -2px;
    text-align: center;
    -webkit-tap-highlight-color: transparent;
    cursor: default;
`;
export const WelcomeScreenLoadingContainerItem = styled.div`
    font-size: 10px;
    -webkit-tap-highlight-color: transparent;
    cursor: default;

`;

export const WelcomeScreenLoadingContainerTypeWriterContainer = styled.div`
    z-index: ${(props) => (props.entered ? "-40" : "21")};
    opacity: ${(props) => (props.entered ? "0" : "1")};
    font-size: 10px;
    display: flex;
    flex-direction: row;
    transition: 1s all ease;
    -webkit-tap-highlight-color: transparent;
    cursor: default;
`;

export const WelcomeScreenLoadingContainerTypeWriterStatic = styled.div`
    margin-right: 5px;
    -webkit-tap-highlight-color: transparent;
    cursor: default;
`;



export const WelcomeScreenLoadingContainerTitle = styled.div`
    position: absolute;
    z-index: ${(props) => (props.entered ? "-40" : "23")};
    opacity: ${(props) => (props.entered ? "0" : "1")};
    bottom: 80px;

    font-size: 14px;

    @media screen and (max-width: 370px){
        left: 9%;
    }

    @media screen and (max-width: 550px){
        left: 14%;
    }

    @media screen and (min-width: 1920px){
        left: calc(50% - 240px);
    }
    
    @media screen and (min-width: 2560px){
        lef: calc(50% - 240px);
    }
`;

