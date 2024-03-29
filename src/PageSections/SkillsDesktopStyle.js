import styled from "styled-components";

export const DesktopSkillsBody = styled.div`
    z-index: 1;
    transition-property: opacity;
    transition-duration: 1s;
    background: ${(props) => (props.active ? "linear-gradient(0deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.6320728975183824) 10%, rgba(255,255,255,0.8869748583026961) 20%, rgba(255,255,255,1) 30%, rgba(255,255,255,1) 70%, rgba(255,255,255,0.8953782196472339) 80%, rgba(255,255,255,0.648879620207458) 90%, rgba(255,255,255,0) 100%)" : "linear-gradient(0deg, rgba(10,10,10,0) 0%, rgba(10,10,10,0.6320728975183824) 10%, rgba(10,10,10,0.8869748583026961) 20%, rgba(10,10,10,1) 30%, rgba(10,10,10,1) 70%, rgba(10,10,10,0.8953782196472339) 80%, rgba(10,10,10,0.648879620207458) 90%, rgba(10,10,10,0) 100%)")};
    width: 70%;
    margin-left: auto;
    margin-right: auto;
    opacity: ${(props) => (props.inView ? "1" : "0")};
    @media screen and (max-width: 550px){
        display: none;
    }
    @media screen and (max-width: 850px){
        display: none;
    }
`;

export const SkillsDesktopContent = styled.div`
    margin: auto;
    width: 100%;
    padding-top: 10vh;
    padding-bottom: 5vh;
`;



export const DesktopSkillRow = styled.div`
    transition: 1s all ease;
    margin: auto;
    margin-top: 10px;
    margin-bottom: 10px;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    color: ${(props) => (props.active ? "#000000" : "#ffffff")};
    font-size: 20px;
    @media screen and (min-width: 2560px){
        font-size: 30px;
    }
    
`;

export const DesktopRowItemLeft = styled.div`   
    margin: auto;
    width: 40%;
    height: 100%;
    display: flex;
    flex-direction: row;
    align-items: left;
    border: 1px solid #32de84;
    border-radius: 20px;
    transition: 0.2s all ease;
    transform: scale(1);
    :hover{
        box-shadow: 0px 0px 60px 1px rgba(50,222,132,0.75);
        -webkit-box-shadow: 0px 0px 60px 1px rgba(50,222,132,0.75);
        -moz-box-shadow: 0px 0px 60px 1px rgba(50,222,132,0.75);
        background: #32de84;
        transform: scale(1.1);
    }

`;

export const DesktopRowItemRight = styled.div`   
    margin: auto;
    width: 40%;
    height: 100%;
    display: flex;
    flex-direction: row;
    align-items: right;
    border: 1px solid #32de84;
    border-radius: 20px;
    transform: scale(1);
    transition: 0.2s all ease;
    :hover{
        box-shadow: 0px 0px 60px 1px rgba(50,222,132,0.75);
        -webkit-box-shadow: 0px 0px 60px 1px rgba(50,222,132,0.75);
        -moz-box-shadow: 0px 0px 60px 1px rgba(50,222,132,0.75);
        background: #32de84;
        transform: scale(1.1);
    }

`;

export const DesktopRowItemLeftText = styled.div`
    margin-left: auto;
    margin-right: 10%;
    margin-top: auto;
    margin-bottom: auto;
`;

export const DesktopRowItemRightText = styled.div`
    margin-right: auto;
    margin-left: 10%;
    margin-top: auto;
    margin-bottom: auto;
`;

export const DesktopRowItemLeftIcon = styled.img`
    width: 50px;
    height: 50px;
    margin-left: 2%;
`;

export const DesktopRowItemRightIcon = styled.img`
    width: 50px;
    height: 50px;
    margin-right: 2%;

`;