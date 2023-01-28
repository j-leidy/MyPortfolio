import styled, { keyframes } from "styled-components";
import { AccentColorGreen } from "../colorPallete";

export const WelcomeScreenButtonLeft = styled.div`
    position: absolute;
    bottom: ${(props) => (props.entered ? "-2000px" : "calc(50% - 100px)")};
    left: calc(50% - 100px);
    transform: ${(props) => (props.entered ? "rotate(-360deg)" : "")};
    width: 100px;
    height: 200px;
    background: ${(props) => (props.entered ? "black" : "white")};
    z-index: 22;
    border-top-left-radius: 100px;
    border-bottom-left-radius: 100px;
    border-left: 1px solid ${AccentColorGreen};
    transition: 1s all ease;
    cursor: pointer;
    background: linear-gradient(90deg, rgba(255,255,255,0.9) 0%, rgba(143,86,255,0) 100%);
    @media screen and (min-width: 1920px){
        position: absolute;
        left: calc(50% - 200px);
        transform: ${(props) => (props.entered ? "rotate(-360deg)" : "")};
        width: 200px;
        height: 400px;
        z-index: 22;
        border-top-left-radius: 200px;
        border-bottom-left-radius: 200px;
        bottom: ${(props) => (props.entered ? "-2000px" : "calc(50% - 200px)")};
    }
    @media screen and (min-width: 2560px){
        position: absolute;
        left: calc(50% - 400px);
        transform: ${(props) => (props.entered ? "rotate(-360deg)" : "")};
        width: 400px;
        height: 800px;
        z-index: 22;
        border-top-left-radius: 500px;
        border-bottom-left-radius: 500px;
        bottom: ${(props) => (props.entered ? "-2000px" : "calc(50% - 400px)")};
    }
`;
export const WelcomeScreenButtonRight = styled.div`
    position: absolute;
    right: calc(50% - 100px);
    transform: ${(props) => (props.entered ? "rotate(-360deg)" : "")};
    width: 100px;
    height: 200px;
    background: ${(props) => (props.entered ? "black" : "white")};
    z-index: 22;
    border-top-right-radius: 100px;
    border-bottom-right-radius: 100px;
    top: ${(props) => (props.entered ? "-2000px" : "calc(50% - 100px)")};
    border-right: 1px solid ${AccentColorGreen};
    transition: 1s all ease;
    cursor: pointer;
    background: linear-gradient(270deg, rgba(255,255,255,0.9) 0%, rgba(143,86,255,0) 100%);
    @media screen and (min-width: 1920px){
        position: absolute;
        right: calc(50% - 200px);
        transform: ${(props) => (props.entered ? "rotate(-360deg)" : "")};
        width: 200px;
        height: 400px;
        z-index: 22;
        border-top-right-radius: 200px;
        border-bottom-right-radius: 200px;
        top: ${(props) => (props.entered ? "-2000px" : "calc(50% - 200px)")};
    }
    @media screen and (min-width: 2560px){
        position: absolute;
        right: calc(50% - 400px);
        transform: ${(props) => (props.entered ? "rotate(-360deg)" : "")};
        width: 400px;
        height: 800px;
        z-index: 22;
        border-top-right-radius: 500px;
        border-bottom-right-radius: 500px;
        top: ${(props) => (props.entered ? "-2000px" : "calc(50% - 400px)")};
    }
    
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
    cursor: pointer;
    @media screen and (min-width: 2560px){
        font-size: 60px;
        top: calc(50% - 30px);
    }
    @media screen and (min-width: 1920px){
        font-size: 40px;
        top: calc(50% - 20px);
    }
`;

export const WelcomeScrenTitle = styled.div`
    position: absolute;
    z-index: ${(props) => (props.entered ? "-40" : "22")};
    opacity: ${(props) => (props.entered ? "0" : "1")};
    width: 300px;
    height: 70px;
    top: 10%;
    left: calc(50% - 150px);
    font-weight: 600;
    font-size: 25px;
    text-align: center;
    color: black;
    border-radius: 10px;
    transition: 1s all ease;
    border-bottom: 1px solid ${AccentColorGreen};
    @media screen and (max-width: 550px){
        font-size: 30px;
    }
    @media screen and (min-width: 2560px){
        font-size: 60px;
        width: 1000px;
        left: calc(50% - 500px);
        top: 10%;
    }
    @media screen and (min-width: 1920px){
        font-size: 40px;
        width: 1000px;
        left: calc(50% - 500px);
        top:5%;
    }

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
    top: 80%;
    left: calc(50% - 46px);
    font-size: 20px;
    width: 200px;
    height: 10%;
    display: flex;
    flex-direction: row;
    transition: 1s all ease;
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
    background: ${(props) => (props.entered ? "rgba(0,0,0,0)" : "linear-gradient(0deg, rgba(104,96,255,0.6137770708869485) 0%, rgba(143,86,255,0.15061917615010645) 100%)")};
    transition: zIndex 5s, opacity 20s, background-color 0s;
    overflow: none;

`;

