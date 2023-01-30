import styled from "styled-components";

export const AboutBody = styled.div`
    transition-property: color;
    transition-duration: 1s ease;
    z-index: -1;
    width: 70%;
    height: 100%;
    color: ${(props) => (props.active ? "black" : "white")};
    margin-left: auto;
    margin-right: auto;
    background: ${(props) => (props.active ? "linear-gradient(0deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.6320728975183824) 10%, rgba(255,255,255,0.8869748583026961) 20%, rgba(255,255,255,1) 30%, rgba(255,255,255,1) 70%, rgba(255,255,255,0.8953782196472339) 80%, rgba(255,255,255,0.648879620207458) 90%, rgba(255,255,255,0) 100%)" : "linear-gradient(0deg, rgba(10,10,10,0) 0%, rgba(10,10,10,0.6320728975183824) 10%, rgba(10,10,10,0.8869748583026961) 20%, rgba(10,10,10,1) 30%, rgba(10,10,10,1) 70%, rgba(10,10,10,0.8953782196472339) 80%, rgba(10,10,10,0.648879620207458) 90%, rgba(10,10,10,0) 100%)")};
    @media screen and (max-width: 550px){
        width: 80%;
    }
`;
export const AboutContent = styled.div`
    z-index: -1;
    margin: auto;
    padding-top: 6vh;
    padding-left: 5%;
    padding-right: 5%;
    width: 70%;
    @media screen and (max-width: 550px){
        width: 80%;
        padding-left: 0;
        padding-right:0;
    }
    @media screen and (max-width: 820px){
        width: 100%;
    }
`;
export const AboutTitle = styled.div`
    z-index: -1;
    transition: 3s all ease;
    margin: auto;
    text-align: center;
    font-size: 30px;
    font-weight: 600;
    opacity: ${(props) => (props.inView ? "1" : "0")};
    border-bottom: 2px solid #32de84;
    @media screen and (min-width: 2560px){
        font-size: 60px;
    }
`;

export const AboutParagraph = styled.div`
    z-index: -1;
    transition: 3s all ease;
    text-indent: 10%;
    margin: auto;
    margin-top: 5vh;
    margin-bottom: 5vh;
    font-size: 20px;
    opacity: ${(props) => (props.inView ? "1" : "0")};
    @media screen and (max-width: 550px){
        text-indent: 20%;
        font-size: 16px;
        width: 100%;
    }
    @media screen and (min-width: 2560px){
        font-size: 30px;
    }
`;