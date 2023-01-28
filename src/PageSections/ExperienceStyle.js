import styled from "styled-components";

export const ExperienceBody = styled.div`
    margin-top: 5vh;
    margin-bottom: 5vh;
    transition-property: color;
    transition-duration: 1s ease;
    color: ${(props) => (props.active ? "black" : "white")};
    z-index: -1;
    width: 70%;
    background: ${(props) => (props.active ? "linear-gradient(0deg, rgba(255,255,255,0.7511205165660014) 0%, rgba(255,255,255,0.9107843821122199) 7%, rgba(255,255,255,0.9640056706276261) 15%, rgba(255,255,255,1) 25%, rgba(255,255,255,1) 75%, rgba(255,255,255,0.9612045501794468) 85%, rgba(255,255,255,0.9135855025603992) 93%, rgba(255,255,255,0.7511205165660014) 100%)" : "linear-gradient(0deg, rgba(10,10,10,1) 0%, rgba(10,10,10,1) 64%, rgba(10,10,10,0.9612045501794468) 75%, rgba(10,10,10,0.9275911048012955) 80%, rgba(10,10,10,0.8771709367340687) 85%, rgba(10,10,10,0.798739564185049) 90%, rgba(10,10,10,0.5858544101234244) 95%, rgba(10,10,10,0) 100%)")};
    @media screen and (max-width: 550px){
        width: 80%;
    }
`;
export const ExperienceTitle = styled.div`
    transition: 2s all ease;
    width: 70%;
    z-index: -1;
    margin: auto;
    text-align: center;
    font-size: 30px;
    font-weight: 600;
    border-bottom: 2px solid #32de84;
    opacity: ${(props) => (props.inView ? "1" : "0")};
    @media screen and (max-width: 550px){
        width: 100%;
    }
    @media screen and (min-width: 2560px){
        font-size: 60px;
    }
`;
export const ExperienceEntry = styled.div`
    transition: 2s all ease;
    display: flex;
    flex-direction: row;
    margin-top: 5vh;
    width: 80%;
    margin-left: auto;
    margin-right: auto;
    opacity: ${(props) => (props.inView ? "1" : "0")};
    @media screen and (max-width: 550px){
        flex-direction: column;
        width: 100%;
        margin-left: 0;
        margin-right: 0;
    }
`;

export const EntryTitleDurationContainer = styled.div`
    margin-bottom: 2vh;
    margin-left: auto;
    margin-right: auto;
    width: 20%;
    @media screen and (max-width: 550px){
        width: 80%;
        margin-left: 0;
        margin-right: 0;
    }
`;

export const EntryTitle = styled.div`
    font-size: 25px;
    white-space: nowrap;
    width: 100%;
    @media screen and (max-width: 550px){
        font-size: 20px;
    }
    
`;

export const EntryDuration = styled.div`
    width: 100%;
    color: #32de84;
`;

export const EntryParagraph = styled.div`
    text-indent: 5%;
    font-size: 20px;
    width: 50%;
    margin-right: auto;
    margin-left: auto;
    @media screen and (max-width: 550px){
        font-size: 16px;
        text-indent: 20%;
        margin-right: auto;
        margin-left: auto;
        width: 100%;
    }
`;