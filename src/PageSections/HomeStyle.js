import styled from "styled-components";

 
export const Body = styled.div`


    @media screen and (max-width: 550px){
        display: flex;
        flex-direction: column;
        color: #ffffff;
        width: 80%;
        height: 100%;
        justify-content: center;
        align-items: left;
        margin-top: 10vh;
        z-index: -1;
        border-right: none;
        background: rgba(10, 10, 10, 0);
    }
    background: rgba(10, 10, 10, 0.95);
    margin-top: 30vh;
    margin-bottom: 10vh;
    display: flex;
    flex-direction: row;
    color: #ffffff;
    width: 80%;
    height: 100%;
    justify-content: center;
    align-items: left;
    z-index: -1;
    margin-left: auto;
    margin-right: auto;
    

`;

export const HomeContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: left;
    margin-left: 30px;
    margin: auto;
    width: 50%;
    @media screen and (max-width: 550px){
        background: none;
        margin: 0;
        width: 100%;
    }
    @media screen and (max-width: 820px){
        width: 90%;
    }

`;

export const PortraitContainer = styled.div`
    margin-top: 0;
    width: 50%;
    height: 50%;
    padding: auto;
    margin: auto;
    display: flex;
    align-items: center;
    @media screen and (max-width: 550px){
        margin-top: 10vh;
        width: 100%;
        
    }
    @media screen and (min-width: 900px){
        margin: 0;
        padding: 0;
        display: none;
    }
    
`;

export const Portrait = styled.img`
    margin: auto;
    padding: auto;
    border-radius: 50%;
    
    
`;

export const PortraitFullscreen = styled.img`
    margin: auto;
    padding: auto;
    border: 1px solid #32de84;
    border-radius: 50%;
    width: 300px;
    height: 300px;
    @media screen and (max-width: 550px){
        display: none;
    }

    @media screen and (max-width: 820px){
        display: none;
    }
`;

export const BodyText = styled.div`
    display: flex;
    flex-direction: column;
    width: 70%;

    @media screen and (max-width: 550px){
        padding: auto;
        margin: 0;
        width: auto;
    }
    padding: auto;
    margin-left: 0;
`;
export const BodyTitle = styled.div`
    font-size: 30px;
    color: #32de84;
    @media screen and (max-width: 550px){
        font-size: 20px
    }
`;

export const BodyName = styled.div`
    color: #ffffff;
    font-size: 70px;
    @media screen and (max-width: 550px){
        font-size: 50px;
    }
`;


export const BodyDetails = styled.div`
    display: flex;
    flex-direction: row;
    margin: 0;
    padding: auto;
    color: #ffffff;
    font-size: 40px;
    width: 100%;

    @media screen and (max-width: 550px){
        font-size: 30px;
        flex-direction: row;
    }

    @media screen and (max-width: 400px){
        font-size: 27px;
    }
    
`;

export const StaticText = styled.div`
        margin-right: 10px;
`;

export const TypeWriterHolder = styled.div`
    @media screen and (max-width: 550px){
        margin: 0;
        width: 50%;
    }

`;

