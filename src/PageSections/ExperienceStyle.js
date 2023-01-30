import styled from "styled-components";

export const ExperienceBody = styled.div`
    margin-top: 10vh;
    margin-bottom: 5vh;
    transition-property: color;
    transition-duration: 1s ease;
    color: ${(props) => (props.active ? "black" : "white")};
    z-index: -1;
    width: 70%;
    background: ${(props) => (props.active ? "linear-gradient(0deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.6320728975183824) 10%, rgba(255,255,255,0.8869748583026961) 20%, rgba(255,255,255,1) 30%, rgba(255,255,255,1) 70%, rgba(255,255,255,0.8953782196472339) 80%, rgba(255,255,255,0.648879620207458) 90%, rgba(255,255,255,0) 100%)" : "linear-gradient(0deg, rgba(10,10,10,0) 0%, rgba(10,10,10,0.6320728975183824) 10%, rgba(10,10,10,0.8869748583026961) 20%, rgba(10,10,10,1) 30%, rgba(10,10,10,1) 70%, rgba(10,10,10,0.8953782196472339) 80%, rgba(10,10,10,0.648879620207458) 90%, rgba(10,10,10,0) 100%)")};
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
    @media screen and (min-width: 2560px){
        font-size: 40px;
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
    @media screen and (min-width: 2560px){
        font-size: 30px;
    }
`;