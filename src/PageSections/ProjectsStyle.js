import styled from "styled-components";

export const ProjectsBody = styled.div`
    z-index: 1;
    width: 80%;
    height: 100%;
    color: white;
    margin-left: auto;
    margin-right: auto;
    margin-top: 5vh;
    background: linear-gradient(0deg, rgba(10,10,10,1) 0%, rgba(10,10,10,1) 64%, rgba(10,10,10,0.9612045501794468) 75%, rgba(10,10,10,0.9275911048012955) 80%, rgba(10,10,10,0.8771709367340687) 85%, rgba(10,10,10,0.798739564185049) 90%, rgba(10,10,10,0.5858544101234244) 95%, rgba(10,10,10,0) 100%);
    @media screen and (max-width: 550px){
        width: 100%;
    }
`;


export const ProjectsContent = styled.div`
    margin: auto;
    padding-top: 6vh;
    @media screen and (max-width: 550px){
        width: 80%;
    }
`;
export const ProjectsTitle = styled.div`
    width: 50%;
    z-index: -1;
    transition: 3s all ease;
    margin: auto;
    text-align: center;
    font-size: 30px;
    opacity: ${(props) => (props.inView ? "1" : "0")};
    border-bottom: 2px solid #32de84;
    @media screen and (max-width: 550px){
        width: 100%;
    }
`;

export const ProjectsDescription = styled.div`
    width: 100%;
    height: 100%;
    margin: auto;
    padding: auto;
    font-size: 20px;
    text-indent: 15%;
    @media screen and (max-width: 550px){
        display: none;
        font-size: 16px;
    }
`;

export const ProjectsTitleDesContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin: auto;
    padding: auto;
    width: 70%;
    @media screen and (max-width: 550px){
        width: 100%;
    }
`;

export const ProjectsCard = styled.div`
    transition: 3s all ease;
    margin-top: 5vh;
    margin-bottom: 2vh;
    padding-left: 2vw;
    padding-right: 2vw;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    opacity: ${(props) => (props.inView ? "1" : "0")};
    @media screen and (max-width: 550px){
        flex-direction: column;
        padding-left:0;
        padding-right:0;
    }
    
`;

export const ProjectsCardTitle = styled.div`
    color: white;
    text-align: center;
    margin: auto;
    padding: auto;
    width: 100%;
    height: 100%;
    font-size: 30px;
    
`;

export const ProjectsImage = styled.img`
    width: 100%;
    height: 100%;
    @media screen and (max-width: 550px){
        width: 100%;
        height: 100%;
    }
`;

export const ProjectsLink = styled.a`
`;