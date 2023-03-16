import styled from "styled-components";
import { AccentColorGreen } from "../colorPallete";

export const ProjectsBody = styled.div`
    transition-property: color;
    transition-duration: 1s ease;
    z-index: 1;
    width: 80%;
    height: 100%;
    color: ${(props) => (props.active ? "black" : "white")};
    margin-left: auto;
    margin-right: auto;
    margin-top: 5vh;
    padding-top: 5vh;
    background: ${(props) => (props.active ? "linear-gradient(0deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.6320728975183824) 5%, rgba(255,255,255,0.8869748583026961) 10%, rgba(255,255,255,1) 20%, rgba(255,255,255,1) 80%, rgba(255,255,255,0.8953782196472339) 90%, rgba(255,255,255,0.648879620207458) 95%, rgba(255,255,255,0) 100%)" : "linear-gradient(0deg, rgba(10,10,10,0) 0%, rgba(10,10,10,0.6320728975183824) 5%, rgba(10,10,10,0.8869748583026961) 10%, rgba(10,10,10,1) 20%, rgba(10,10,10,1) 80%, rgba(10,10,10,0.8953782196472339) 90%, rgba(10,10,10,0.648879620207458) 95%, rgba(10,10,10,0) 100%)")};
    @media screen and (max-width: 550px){
        width: 100%;
    }
    overflow-anchor: none;
`;

// John Leidy built this website!
export const ProjectsContent = styled.div`
    margin: auto;
    padding-top: 6vh;
    @media screen and (max-width: 550px){
        width: 80%;
    }
`;
export const ProjectsTitle = styled.div`
    width: 70%;
    z-index: -1;
    transition: 3s all ease;
    margin: auto;
    text-align: center;
    font-size: 30px;
    font-weight: 600;
    opacity: ${(props) => (props.inView ? "1" : "0")};
    border-bottom: 2px solid #32de84;
    @media screen and (max-width: 550px){
        width: 100%;
    }
    @media screen and (min-width: 2560px){
        font-size: 60px;
    }

    
    
`;
export const ProjectsTitleUnder = styled.div`
    display: none;
    @media screen and (max-width: 550px){
        transition: 3s all ease;
        opacity: ${(props) => (props.inView ? "1" : "0")};
        font-size: 12px;
        display: block;
        text-align: center;
        margin: auto;
    }
`;

export const ProjectsDescription = styled.div`
    width: 80%;
    height: 100%;
    margin: auto;
    padding: auto;
    padding-bottom: 30px;
    font-size: 20px;
    text-indent: 15%;
    margin-top: 5vh;
    @media screen and (max-width: 550px){
        display: none;
        font-size: 16px;
        padding-bottom: 0px;

    }
    @media screen and (max-width: 830px){
        padding-bottom: 0px;
        display: none;
    }
    @media screen and (min-width: 2560px){
        font-size: 30px;
    }
    
`;

export const IpadDescription = styled.div`

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
    margin-bottom: 2vh;
    margin-top: 15vh;
    margin-left: auto;
    margin-right: auto;
    padding: 20px;
    width: 90%;
    height: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    opacity: ${(props) => (props.inView ? "1" : "0")};
    @media screen and (max-width: 550px){
        flex-direction: column;
        padding: 0;
        border-radius: 10px;
        border: 1px solid #32de84;
        margin-left: auto;
        margin-right: auto;
        width: 100%;
        box-shadow: 0px 0px 10px 1px rgba(50,222,132,0.75);
        -webkit-box-shadow: 0px 0px 10px 1px rgba(50,222,132,0.75);
        -moz-box-shadow: 0px 0px 10px 1px rgba(50,222,132,0.75);
        overflow: hidden;
        transition: height 1s ease-out;
        transition: 3s all ease;
        opacity: ${(props) => (props.inView ? "1" : "0")};
    }
    border-radius: 20px;
    border: 1px solid #32de84;
`;

export const ProjectsCardTitle = styled.div`
    color: black;

    text-align: center;
    margin: auto;
    padding: auto;
    width: 100%;
    height: 100%;
    font-size: 25px;
    font-weight: 600;

    @media screen and (max-width: 550px){
        border-radius: 10px 10px 0 0;
        background: #32de84;
        border: 1px solid #32de84;
        font-size: 20px;
    }
    @media screen and (max-width: 900px){
        color white;
    }
    @media screen and (min-width: 990px){
        color: #32de84;
    }
    @media screen and (min-width: 2560px){
        font-size: 50px;
    }
    
`;

export const ProjectsImage = styled.img`
    width: 100%;
    height: 100%;
    border-radius: 0px 20px 20px 20px;
    transition: 1s all ease;
    :hover{
        background: none;
    }
    @media screen and (max-width: 550px){
        width: 100%;
        height: 100%;
        border-radius: 0px 10px 10px 10px;
        :hover{
            background: none;
        }
    }
`;

export const ProjectDescriptionListTitle = styled.div`
    margin-top: 20px;
    margin-left: 0;
    color: ${AccentColorGreen};
    text-align: left;
    text-indent: 0;
    display: flex;
    flex-direction: column;
`;

export const ProjectDescriptionList = styled.ul`
    list-style: circle;
`;

export const ProjectDescriptionListItem = styled.li`

`;

export const MOBILEProjectCardDescription = styled.div`
    transition: 0.3s all ease-in-out;
    position: relative;
    display: none;
    @media screen and (max-width: 550px){
        padding-top: ${(props) => (props.show ? "50px" : "0px")};
        padding-left: 15px;
        padding-right: 15px;
        display: flex;
        flex-direction: column;
        height: ${(props) => (props.show ? "auto" : "0px")};
        opacity: ${(props) => (props.show ? "1" : "0")};
    }
   
`;

export const MOBILEProjectCardDescriptionTitle = styled.div`
    
`;

export const MOBILEProjectCardDescriptiontText = styled.div`

`;

export const MOBILEProjectCardDescriptionLink = styled.a`
    text-decoration: underline;
    color: ${AccentColorGreen};
    :visited{
        text-decoration: none;
    }
`;

export const MOBILEProjectCardDescriptionLinkSpan = styled.span`
    font-size: 8px;
`;


export const ProjectsLink = styled.a`
    transition: 1s all ease;
    border-radius: 0px 20px 20px 20px;
    width: 100%;
    margin: auto;
    :hover{
        box-shadow: 0px 0px 60px 1px rgba(50,222,132,0.75);
        -webkit-box-shadow: 0px 0px 60px 1px rgba(50,222,132,0.75);
        -moz-box-shadow: 0px 0px 60px 1px rgba(50,222,132,0.75);
        background: #32de84;
    }

    @media screen and (max-width: 550px){
        border-radius: 0px 10px 10px 10px;
        :hover{
            box-shadow: 0px 0px 0px 0px rgba(50,222,132,0.75);
            -webkit-box-shadow: 0px 0px 0px px rgba(50,222,132,0.75);
            -moz-box-shadow: 0px 0px 0px px rgba(50,222,132,0.75);
            background: none;
        }

    }
`;

export const ProjectsTitleIPADLink = styled.div`
    display: block;
    margin: auto;
    text-decoration: underline;
    color: ${AccentColorGreen};
    margin-top: 5%;
    height: auto;
    font-size: 16px;

    @media screen and (max-width: 550px){
        display: none;
    }
    @media screen and (max-width: 820px){
    }
    @media screen and (min-width: 1000px){
        display: none;
    }
`;