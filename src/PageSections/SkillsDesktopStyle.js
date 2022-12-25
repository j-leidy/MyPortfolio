import styled from "styled-components";

export const DesktopSkillsBody = styled.div`
    z-index: -1;
    transition: 3s all ease;
    background: #0A0A0A;
    width: 80%;
    margin-left: auto;
    margin-right: auto;
    opacity: ${(props) => (props.inView ? "1" : "0")};
    @media screen and (max-width: 550px){
        display: none;
    }
`;

export const SkillsDesktopContent = styled.div`
    margin: auto;
    width: 100%;
    background: linear-gradient(0deg, rgba(10,10,10,1) 0%, rgba(10,10,10,1) 64%, rgba(10,10,10,0.9612045501794468) 75%, rgba(10,10,10,0.9275911048012955) 80%, rgba(10,10,10,0.8771709367340687) 85%, rgba(10,10,10,0.798739564185049) 90%, rgba(10,10,10,0.5858544101234244) 95%, rgba(10,10,10,0) 100%);
    padding-top: 10vh;
    padding-bottom: 5vh;
`;



export const DesktopSkillRow = styled.div`
    margin: auto;
    margin-top: 10px;
    margin-bottom: 10px;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    color: #ffffff;
    font-size: 30px;
    
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

`;

export const DesktopRowItemLeftText = styled.div`
    margin-left: auto;
    margin-right: 10%;
`;

export const DesktopRowItemRightText = styled.div`
    margin-right: auto;
    margin-left: 10%;
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