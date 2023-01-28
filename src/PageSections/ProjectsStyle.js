import styled from "styled-components";

export const ProjectsBody = styled.div`
    transition-property: color;
    transition-duration: 1s ease;
    z-index: 1;
    width: 70%;
    height: 100%;
    color: ${(props) => (props.active ? "black" : "white")};
    margin-left: auto;
    margin-right: auto;
    margin-top: 5vh;
    padding-top: 5vh;
    background: ${(props) => (props.active ? "linear-gradient(0deg, rgba(255,255,255,0.7511205165660014) 0%, rgba(255,255,255,0.9107843821122199) 7%, rgba(255,255,255,0.9640056706276261) 15%, rgba(255,255,255,1) 25%, rgba(255,255,255,1) 75%, rgba(255,255,255,0.9612045501794468) 85%, rgba(255,255,255,0.9135855025603992) 93%, rgba(255,255,255,0.7511205165660014) 100%)" : "linear-gradient(0deg, rgba(10,10,10,1) 0%, rgba(10,10,10,1) 64%, rgba(10,10,10,0.9612045501794468) 75%, rgba(10,10,10,0.9275911048012955) 80%, rgba(10,10,10,0.8771709367340687) 85%, rgba(10,10,10,0.798739564185049) 90%, rgba(10,10,10,0.5858544101234244) 95%, rgba(10,10,10,0) 100%)")};
    @media screen and (max-width: 550px){
        width: 100%;
    }
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
    @media screen and (max-width: 820px){
        display: none;
        padding-bottom: 0px;
    }
    @media screen and (min-width: 2560px){
        font-size: 30px;
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
    margin-bottom: 2vh;
    margin-top: 5vh;
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
    border-radius: 20px;
    transition: 1s all ease;
    :hover{
        background: #32de84;
    }
    @media screen and (max-width: 550px){
        width: 100%;
        height: 100%;
        border-radius: 10px;
    }
`;



export const ProjectsLink = styled.a`
    transition: 1s all ease;
    border-radius: 20px;
    width: 100%;
    margin: auto;
    :hover{
        box-shadow: 0px 0px 60px 1px rgba(50,222,132,0.75);
        -webkit-box-shadow: 0px 0px 60px 1px rgba(50,222,132,0.75);
        -moz-box-shadow: 0px 0px 60px 1px rgba(50,222,132,0.75);
        background: #32de84;
    }

    @media screen and (max-width: 550px){
        border-radius: 10px;
        :hover{
            box-shadow: 0px 0px 0px 0px rgba(50,222,132,0.75);
            -webkit-box-shadow: 0px 0px 0px px rgba(50,222,132,0.75);
            -moz-box-shadow: 0px 0px 0px px rgba(50,222,132,0.75);
            background: none;
        }

    }
`;