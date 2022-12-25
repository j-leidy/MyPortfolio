import styled from "styled-components";
import { keyframes } from "styled-components";



const GlowAnim = keyframes`
    0%{margin-top: 60px;}
    45%{margin-top: 160px;}
    55%{margin-top: 160px;}
    100%{margin-top: 60px;}
`;


export const ArrowContainer = styled.div`
    height: 50vh;
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
    animation-duration: 5s;
    animation-iteration-count: infinite;
    box-shadow: 20px 20px 0px -16px rgba(255,255,255,0.79);
    -webkit-box-shadow: 20px 20px 0px -16px rgba(255,255,255,0.79);
    -moz-box-shadow: 20px 20px 0px -16px rgba(255,255,255,0.79);
`;

export const TotalContainer = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    height: 100%;
    width: 100%;

`;

