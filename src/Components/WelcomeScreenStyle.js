import styled, { keyframes } from "styled-components";
import { AccentColorGreen } from "../colorPallete";

export const WelcomeScreenButtonLeft = styled.div`
    position: absolute;
    bottom: ${(props) => (props.entered ? "-2000px" : "calc(50% - 100px)")};
    left: calc(50% - 100px);

    width: 100px;
    height: 200px;
    background: white;
    z-index: 22;
    border-top-left-radius: 100px;
    border-bottom-left-radius: 100px;
    border-left: 1px solid ${AccentColorGreen};
    transition: 3s all ease;
`;
export const WelcomeScreenButtonRight = styled.div`
    position: absolute;
    right: calc(50% - 100px);
    width: 100px;
    height: 200px;
    background: white;
    z-index: 22;
    border-top-right-radius: 100px;
    border-bottom-right-radius: 100px;
    top: ${(props) => (props.entered ? "-2000px" : "calc(50% - 100px)")};
    border-right: 1px solid ${AccentColorGreen};
    transition: 3s all ease;
`;

const TextFader = keyframes`   
    0%{
        opacity: 0;
    }
    10%{
        opacity: 1;
    }
    90%{
        opacity: 1;
    }
    100%{
        opacity: 0;
    }

`;


export const WelcomeButtonText = styled.div`
    position: absolute;
    font-size: 20px;
    width: 100%;
    top: calc(50% - 12px);
    margin: auto;
    z-index: ${(props) => (props.entered ? "-40" : "22")};
    text-align: center;
    animation: ${TextFader} 5s linear infinite;
`;

export const WelcomeScrenTitle = styled.div`
    position: absolute;
    z-index: ${(props) => (props.entered ? "-40" : "22")};
    opacity: ${(props) => (props.entered ? "0" : "1")};
    width: 300px;
    height: 70px;
    top: 20%;
    left: calc(50% - 150px);
    font-weight: 600;
    font-size: 25px;
    text-align: center;
    color: black;
    background: rgba(255, 255, 255,0.8);
    border-radius: 10px;
    transition: 1s all ease;

`;
export const WelcomeScreenTitleText = styled.div`
    margin-top: 6%;
    width: 100%;
    height: 30px;
    position: relative;
`;

export const TypewriterContainer = styled.div`
    z-index: ${(props) => (props.entered ? "-40" : "21")};
    opacity: ${(props) => (props.entered ? "0" : "1")};
    position: absolute;
    top: 70%;
    left: calc(50% - 65px);
    font-size: 25px;
    width: 200px;
    height: 10%;
    display: flex;
    flex-direction: row;
    transition: 1s all ease;
`;



export const WelcomeScreenBody = styled.div`
    height: 100vh;
    width: 100vw;
    z-index: ${(props) => (props.entered ? "-40" : "20")};
    opacity: ${(props) => (props.entered ? "0" : "1")};
    position: absolute;
    background-color: ${(props) => (props.entered ? "rgba(0,0,0,0)" : "rgba(255,255,255,0.3)")};
    transition: zIndex 5s, opacity 20s, background-color 0s;
    overflow: none;
`;

