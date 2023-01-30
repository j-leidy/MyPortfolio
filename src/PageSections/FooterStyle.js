import styled from "styled-components";

export const FooterBody = styled.div`
    display: flex;
    z-index: 1;
    flex-direction: row;
    width: 100%;
    height: 15vh;
    background: #161618;
    color: white;

    @media screen and (max-width: 550px){
        height: 10vh;
        padding-top: 5%;
        padding-bottom: 20%;
    }
    @media screen and (min-width: 2560px){
        font-size: 25px;
        padding-bottom: 2%;
    }
`;

export const AuthorFooter = styled.div`
    width: 10%;
    height: 50%;
    margin: auto;
    padding: auto;
    text-align: left;

    @media screen and (max-width: 550px){
        height: 100%;
        width: 40%;
    }
`;
export const AuthorName = styled.div`
    width: 100%;
    color: #32de84;

    @media screen and (max-width: 550px){
        margin: 0;
        padding: 0;
    }
`;
export const AuthorItem = styled.div`
    width: 100%;
    color: white;
    @media screen and (max-width: 550px){
        margin: 0;
        padding: 0;
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

export const SocialLinksFooter = styled.div`
    width: 10%;
    height: 100%;
    margin: auto;
    padding: auto;
    text-align: right;
    @media screen and (max-width: 550px){
        height: 100%;
        width: 40%;
    }
    @media screen and (min-width: 2560px){
        margin-top: 1%;
    }
`;

export const GithubLink = styled.div`
    width: 100%;
    height: 50%;
    @media screen and (min-width: 2560px){
        height: 50%;
    }
`;

export const LinkedInLink = styled.div`
    width: 100%;
    height: 50%;
    @media screen and (min-width: 2560px){
        height: 50%;
    }
`;

export const LinkImage = styled.img`
    height: 30px;
    width: 30px;
    :hover{
        box-shadow: 0px 0px 30px 0px rgba(50,222,132,0.9);
        -webkit-box-shadow: 0px 0px 30px 0px rgba(50,222,132,0.9);
        -moz-box-shadow: 0px 0px 30px 0px rgba(50,222,132,0.9);
    }
    border-radius: 50%;
    @media screen and (min-width: 2560px){
        width: 60px;
        height: 60px;
    }
    
    
`;

export const ImageLink = styled.a`
    
`;