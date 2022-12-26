import styled from "styled-components";

export const ExperienceBody =styled.div`
    margin-top: 5vh;
    z-index: -1;
    width: 70%;
    background: linear-gradient(0deg, rgba(10,10,10,1) 0%, rgba(10,10,10,1) 64%, rgba(10,10,10,0.9612045501794468) 75%, rgba(10,10,10,0.9275911048012955) 80%, rgba(10,10,10,0.8771709367340687) 85%, rgba(10,10,10,0.798739564185049) 90%, rgba(10,10,10,0.5858544101234244) 95%, rgba(10,10,10,0) 100%);
    @media screen and (max-width: 550px){
        width: 80%;
    }
`;
export const ExperienceTitle = styled.div`
    transition: 2s all ease;
    width: 50%;
    color: #ffffff;
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
`;
export const ExperienceEntry = styled.div`
    transition: 2s all ease;
    display: flex;
    flex-direction: row;
    margin-top: 5vh;
    opacity: ${(props) => (props.inView ? "1" : "0")};
    @media screen and (max-width: 550px){
        flex-direction: column;
    }
`;

export const EntryTitleDurationContainer = styled.div`
    margin-bottom: 2vh;
    width: 30%;
`;

export const EntryTitle = styled.div`
    font-size: 25px;
    white-space: nowrap;
    width: 100%;
    color: #ffffff;
    @media screen and (max-width: 550px){
        font-size: 20px;
    }
`;

export const EntryDuration = styled.div`
    width: 100%;
    color: #32de84;
`;

export const EntryParagraph = styled.div`
    color: #ffffff;
    text-indent: 5%;
    font-size: 20px;
    @media screen and (max-width: 550px){
        font-size: 16px;
        text-indent: 20%;
    }
`;