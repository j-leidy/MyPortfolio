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
        background: ${(props) => (props.active ? "radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(0,0,0,0) 60%)" : " radial-gradient(circle, rgba(10,10,10,1) 0%, rgba(0,0,0,0) 60%);")};
    }
    background: ${(props) => (props.active ? "linear-gradient(0deg, rgba(0,0,0,0) 0%, rgba(255,255,255,1) 50%, rgba(0,0,0,0) 100%);" : "linear-gradient(0deg, rgba(0,0,0,0) 0%, rgba(10,10,10,1) 50%, rgba(0,0,0,0) 100%)")};
    margin-top: 6vh;
    margin-bottom: 10vh;
    display: flex;
    flex-direction: row;
    color: #ffffff;
    width: 90%;
    height: 60vh;
    justify-content: center;
    align-items: left;
    z-index: -1;
    margin-left: auto;
    margin-right: auto;
    opacity: ${(props) => (props.inside ? "1" : "0")};
    transition: 3s all ease;
    
    

`;

/*
 background: rgb(0,0,0);
background: linear-gradient(0deg, rgba(0,0,0,0) 0%, rgba(10,10,10,1) 50%, rgba(0,0,0,0) 100%); 

 background: rgb(0,0,0);
background: linear-gradient(0deg, rgba(0,0,0,0) 0%, rgba(10,10,10,1) 30%, rgba(0,0,0,0) 100%); 



*/


export const HomeContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: left;
    margin-left: 30px;
    margin: auto;
    width: 50%;
    opacity: ${(props) => (props.inside ? "1" : "0")};
    transition: 3s all ease;
    @media screen and (max-width: 550px){
        background: none;
        margin: auto;
        width: 100%;
        opacity: ${(props) => (props.inside ? "1" : "0")};
        transition: 3s all ease;
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
    width: 200px;
    height: 200px;
    
    
    
`;

export const PortraitFullscreen = styled.img`
    margin: auto;
    padding: auto;
    border-radius: 50%;
    width: 300px;
    height: 300px;
    @media screen and (max-width: 550px){
        display: none;
    }

    @media screen and (max-width: 820px){
        display: none;
    }
    @media screen and (min-width: 2560px){
        width: 600px;
        height: 600px;
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
        font-size: 20px;
    }
    @media screen and (max-width: 850px){
        font-size: 25px;
    }
    @media screen and (min-width: 2560px){
        font-size: 60px;
    }
`;

export const BodyName = styled.div`
    transition: 3s all ease;
    color: ${(props) => (props.active ? "black" : "white")};
    font-size: 70px;
    @media screen and (max-width: 550px){
        font-size: 40px;
    }
    @media screen and (max-width: 400px){
        font-size: 40px;
    }
    @media screen and (min-width: 2560px){
        font-size: 100px;
    }
`;


export const BodyDetails = styled.div`
    transition: 3s all ease;
    display: flex;
    flex-direction: row;
    margin: 0;
    padding: auto;
    color: ${(props) => (props.active ? "black" : "white")};
    font-size: 40px;
    width: 100%;

    @media screen and (max-width: 550px){
        font-size: 22px;
        flex-direction: row;
    }

    @media screen and (max-width: 400px){
        font-size: 20px;
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

