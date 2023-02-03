import styled from "styled-components";
import { AccentColorGreen } from "../colorPallete";
export const FooterBody = styled.div`
    display: flex;
    z-index: 1;
    flex-direction: column;
    width: 100%;
    height: 30vh;
    background: #161618;
    color: white;

    @media screen and (max-width: 550px){
        height: 100%;
        flex-direction: row;
        padding-bottom: 5%;
    }
    @media screen and (min-width: 2560px){
        font-size: 25px;
        padding-bottom: 2%;
    }
`;

export const AuthorFooter = styled.div`
    width: auto;
    height: auto;
    margin: auto;
    padding: auto;
    text-align: center;

    @media screen and (max-width: 550px){
        height: auto;
        width: auto;
        text-align: left;
    }
`;
export const AuthorName = styled.div`
    width: 100%;
    color: #32de84;
    @media screen and (max-width: 550px){
        margin: 0;
        padding: 0;
    }

    @media screen and (min-width: 1800px){
        font-size: 30px;
    }
`;
export const AuthorItem = styled.div`
    width: 100%;
    color: white;
    @media screen and (max-width: 550px){
        margin: 0;
        padding: 0;
    }
    @media screen and (min-width: 1800px){
        font-size: 20px;
    }
`;
export const AuthorItemCopyright = styled.div`
    width: 100%;
    color: white;
    font-size: 8px;
    @media screen and (max-width: 550px){
        margin: 0;
        padding: 0;
        
    }
`;

export const SocialBarFooter = styled.div`
    @media screen and (max-width: 550px){
        display: flex;
        flex-direction: column;
        margin: 20px;
        padding: 5px;
        border-radius: 10px;
        background: white;
        border: 1px solid ${AccentColorGreen};
    }
    display: flex;
    flex-direction: row;
    margin: auto;
    padding: 5px;
    margin-top: 1%;
    border-radius: 10px;
    background: white;
    border: 1px solid ${AccentColorGreen};

`;

export const SocialBarFooterIcon = styled.img`
    height: 40px;
    widht: 40px;
    padding: 5px;
    padding-left: 10px;
    padding-right: 10px;
    @media screen and (max-width: 550px){
        height: 30px;
        width: 30px;
        padding: 5px;
    }
    
`;

export const ImageLink = styled.a`
    
`;