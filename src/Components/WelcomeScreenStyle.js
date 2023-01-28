import styled, { keyframes } from "styled-components";
import { AccentColorGreen } from "../colorPallete";

export const WelcomeScreenButtonLeft = styled.div`
    position: absolute;
    left: ${(props) => (props.entered ? "-2000px" : "calc(50% - 100px)")};
    top: calc(50% - 100px);

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
    top: calc(50% - 100px);
    width: 100px;
    height: 200px;
    background: white;
    z-index: 22;
    border-top-right-radius: 100px;
    border-bottom-right-radius: 100px;
    right: ${(props) => (props.entered ? "-2000px" : "calc(50% - 100px)")};
    border-right: 1px solid ${AccentColorGreen};
    transition: 3s all ease;
`;

const TextFader = keyframes`   
    0%{
        opacity: 0;
    }
    40%{
        opacity: 1;
    }
    60%{
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
    animation: ${TextFader} 1s linear infinite;
`;

export const WelcomeScrenTitle = styled.div`
    position: absolute;
    z-index: ${(props) => (props.entered ? "-40" : "22")};
    opacity: ${(props) => (props.entered ? "0" : "1")};
    width: 300px;
    height: 29px;
    top: 20%;
    left: calc(50% - 150px);

    font-size: 25px;
    text-align: center;
    color: black;
    background: rgba(50, 222, 132,1);
    border-radius: 10px;
    border: 1px solid ${AccentColorGreen};
    transition: 1s all ease;

`;

export const TypewriterContainer = styled.div`
    z-index: ${(props) => (props.entered ? "-40" : "21")};
    opacity: ${(props) => (props.entered ? "0" : "1")};
    position: absolute;
    top: 70%;
    left: calc(50% - 50px);
    font-size: 20px;
    width: 100%;
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

