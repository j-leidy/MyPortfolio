import styled from "styled-components";

export const AboutBody = styled.div`
    z-index: -1;
    width: 80%;
    height: 100%;
    color: white;
    margin-left: auto;
    margin-right: auto;
    background: linear-gradient(0deg, rgba(10,10,10,1) 0%, rgba(10,10,10,1) 64%, rgba(10,10,10,0.9612045501794468) 75%, rgba(10,10,10,0.9275911048012955) 80%, rgba(10,10,10,0.8771709367340687) 85%, rgba(10,10,10,0.798739564185049) 90%, rgba(10,10,10,0.5858544101234244) 95%, rgba(10,10,10,0) 100%);
    @media screen and (max-width: 550px){
        width: 100%;
    }
`;
export const AboutContent = styled.div`
    z-index: -1;
    margin: auto;
    padding-top: 6vh;
    width: 50%;
    @media screen and (max-width: 550px){
        width: 80%;
    }
`;
export const AboutTitle = styled.div`
    z-index: -1;
    transition: 5s all ease;
    margin: auto;
    text-align: center;
    font-size: 30px;
    opacity: ${(props) => (props.inView ? "1" : "0")};
    border-bottom: 2px solid #32de84;
`;

export const AboutParagraph = styled.div`
    z-index: -1;
    transition: 5s all ease;
    text-indent: 10%;
    margin: auto;
    margin-top: 5vh;
    margin-bottom: 5vh;
    font-size: 20px;
    opacity: ${(props) => (props.inView ? "1" : "0")};
    @media screen and (max-width: 550px){
        text-indent: 20%;
        font-size: 16px;
    }
`;