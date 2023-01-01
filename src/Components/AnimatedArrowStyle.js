import styled from "styled-components";
import { keyframes } from "styled-components";



const GlowAnim = keyframes`
    0%{margin-top: 10px;}
    45%{margin-top: 160px;}
    55%{margin-top: 160px;}
    100%{margin-top: 10px;}
`;


export const ArrowContainer = styled.div`
    height: 40vh;
    z-index: -1;

    
`;

export const Arrow = styled.div`
    z-index: -1;
    width: 50px;
    height: 50px;
    transform: rotate(45deg);
    border-right: 2px solid #32de84;
    border-bottom: 2px solid #32de84;
    animation-name: ${GlowAnim};
    animation-duration: 3s;
    animation-iteration-count: infinite;
    transition: 3s all ease;
    box-shadow: ${(props) => (props.active ? "18px 18px 0px -16px rgba(0,0,0,1)" : "18px 18px 0px -16px rgba(255,255,255,0.79)")};
    -webkit-box-shadow: ${(props) => (props.active ? "18px 18px 0px -16px rgba(0,0,0,1)" : "18px 18px 0px -16px rgba(255,255,255,0.79)")};
    -moz-box-shadow: ${(props) => (props.active ? "18px 18px 0px -16px rgba(0,0,0,1)" : "18px 18px 0px -16px rgba(255,255,255,0.79)")};
`;

export const TotalContainer = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    height: 100%;
    width: 100%;

`;

