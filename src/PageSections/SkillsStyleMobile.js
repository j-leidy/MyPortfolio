import styled from "styled-components";
import { keyframes } from "styled-components";

export const SkillsBody = styled.div`
    z-index: -1;
    transition: 2s all ease;
    display: flex;
    flex-direction: column;
    align-items: center;
    background: #0A0A0A;
    width: 100%;
    opacity: ${(props) => (props.inView ? "1" : "0")};
    @media screen and (min-width: 900px){
        display: none;
    }
`;

export const SkillsTitleContainer = styled.div`
    display: flex;
    flex-direction: row;
    width: 80%;
    align-items: center;
    margin-bottom: 5vh;
    font-size: 30px;
    background: #32de84;
    border-radius: 10px;
`;

export const SkillsTitle = styled.div`
    color: #0A0A0A;
    margin-left: auto;
    
`;

export const SkillsTitleTwo = styled.div`
    color: #ffffff;
    margin-right: auto;
`;

export const SkillsRow = styled.div`
    padding-left: 15%;
    padding-right: 15%;
    margin-bottom: 5%;
    display: flex;
    flex-direction: row;
    align-items: center;
`;

const BackgroundAnim = keyframes`
    from{
        transform: rotate(0deg);
    }
    to{
        transform: rotate(360deg);
    }
`;

export const IconWithText = styled.div`
    position: relative;
    display: flex;
    align-items: center;

    width: 50px;
    height: 50px;
    background: #0A0A0A;
    border-radius 50%;
    right: 8.5%;
    
`;

export const Glow = styled.div`
    border-radius: 50%;
    filter: blur(2px);
    position: relative;
    left: 8.5%;
    width: 51px;
    height: 51px;
    background: linear-gradient(90deg, rgba(63,212,251,1) 0%, rgba(50,222,132,1) 100%);
    animation-name: ${BackgroundAnim};
    animation-duration: 3s;
    animation-iteration-count: infinite;
`;
export const IconText = styled.div`
    text-align: center;
    color: #FFA07A;
`;


export const Icon = styled.img`
    margin: auto;
    padding: auto;
    width: 40px;
    height: 40px;
    
`;