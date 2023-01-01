
import styled from "styled-components";

import navicon from '../Icons/testlefticon.png';

import Bright from "../Icons/Bright.png"
import Darktwo from "../Icons/Darktwo.png"


export const MobileNav = styled.nav`
    z-index: 2;
    transition: 3s all ease;
    position: fixed;
    top: 0;
    right: 0;
    display: flex;
    width: 100%;
    margin: 0;
`;
export const MobileNavBar = styled.div`
    display: flex;
    background: #161618;
    width: 100%;
    height: 6vh;
    margin: 0;
`;

export const MobileNavIconHolder = styled.div`
    margin-left: 15%;
    margin-top: auto;
    margin-bottom: auto;
    width: 40px;
    height: 40px;
    background: url(${navicon});
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    border-radius: 50%;
    border: 1px solid #32de84;

    box-shadow: 0px 0px 5px 1px rgba(50,222,132,0.75);
    -webkit-box-shadow: 0px 0px 5px 1px rgba(50,222,132,0.75);
    -moz-box-shadow: 0px 0px 5px 1px rgba(50,222,132,0.75);

    @media screen and (max-width: 550px){
        width: 30px;
        height: 30px;
        margin-left: 5%;
    }
`;



export const BurgerCheckHolder = styled.div`
    transition: all 0.53s ease;
    position: absolute;
    top: 1.5vh;
    right: 5vw;
    
    display: flex;
    width: 35px;
    height: 30px;

    @media screen and (max-width: 550px){
        top: 1.5vh;
        right: 4vw;
    }
    

`;

export const BurgerSpanOne = styled.span`
    transition: all 0.5s ease;
    position: absolute;
    transform: rotate(0deg);
    top: ${(props) => (props.active ? "10px" : "0")};
    left: 0;
    background: ${(props) => (props.active ? "white" : "#32de84")};
    width: 30px;
    height: 5px;
    margin: 2px;
    border-radius: 3px;
    z-index: ${(props) => (props.active ? "3" : "2")};
    transform: ${(props) => (props.active ? "rotate(45deg)": '')};
    
    
`;
export const BurgerSpanTwo = styled.span`
    position: absolute;
    top: 10px;
    left: 0;
    background: #32de84;
    width: 30px;
    height: 5px;
    margin: 2px;
    border-radius: 3px;
    z-index: 1;
`;
export const BurgerSpanThree = styled.span`
    transition: all 0.5s ease;
    position: absolute;
    top: ${(props) => (props.active ? "10px" : "20px")};
    left: 0;
    background: ${(props) => (props.active ? "white" : "#32de84")};
    width: 30px;
    height: 5px;
    margin: 2px;
    border-radius: 3px;
    z-index: ${(props) => (props.active ? "3" : "2")};
    transform: ${(props) => (props.active ? "rotate(-45deg)": '')};

`;

export const FakeCheckbox = styled.input`
    position: absolute;
    z-index: ${(props) => (props.active ? "4" : "3")};
    transform: scale(4);
    opacity: 0;
    @media screen and (max-width: 550px){
        top: 5px;
        right: -5px;
    }
    
    
`;

export const MobileNavCard = styled.div`
    @media screen and (max-width: 550px){
        top: ${(props) => (props.active ? "0px" : "0px")};
        right: ${(props) => (props.active ? "0px" : "-1000px")};
        border: 1px solid black;
        border-radius: 20px 0px 0px 20px;
        width: 75vw;
    }
    box-shadow: ${(props) => (props.active ? "-1px 25px 25px 12px rgba(0,0,0,0.83)" : "0px 0px 0px 0px rgba(0,0,0,0.83)")};
    -webkit-box-shadow: ${(props) => (props.active ? "-1px 25px 25px 12px rgba(0,0,0,0.83)" : "0px 0px 0px 0px rgba(0,0,0,0.83)")};
    -moz-box-shadow: ${(props) => (props.active ? "-1px 25px 25px 12px rgba(0,0,0,0.83)" : "0px 0px 0px 0px rgba(0,0,0,0.83)")};
    border-bottom: 1px solid black;
    user-select: none;
    position: absolute;
    display: flex;
    margin: 0;
    top: -5px;
    width: 100vw;
    height: 75vh;
    background: #0A0A0A;
    transition: top 0.5s ease, right 0.5s ease, box-shadow 1s ease, -webkit-box-shadow 1s ease, -moz-box-shadow 1s ease;
    z-index: 1;
    top: ${(props) => (props.active ? "0px" : "-2000px")};


`;

export const MobileNavCardButton = styled.button`
    font-size: 20px;
    text-decoration: none;
    color: #32de84;
    margin: auto;
    padding-bottom: 5vh;
    background: none;
	border: none;
	font: inherit;
	cursor: pointer;
	outline: inherit;


`;

export const MobileNavCardLinkDiv = styled.div`
    display: flex;
    width: 25vw;
    height: auto;
    margin: auto;
    border-bottom: 1px solid #ffffff;
    font-size: 20px;
    @media screen and (max-width: 550px){
        border: 0px;
        font-size: 16px;
    }
`;

export const MobileNavCardLinkHolder = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
`;

export const SliderBG = styled.div`


    @media screen and (max-width: 550px){
        border-radius: 8px 8px 8px 8px;
        background: red;
        margin-left: auto;
        width: 40px;
        height: 40px;
        z-index: 1;
        background: url(${(props) => (props.active ? Bright : Darktwo)});
        background-size: contain;
        background-repeat: no-repeat;
        background-position: center;
    }

    width: 40px;
    height: 40px;
    z-index: 1;
    background: url(${(props) => (props.active ? Bright : Darktwo)});
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;

`;
export const SliderCheckHolder = styled.div`
    @media screen and (max-width: 550px){
        z-index: 1;
        margin-top: auto;
        margin-bottom: auto;
        margin-left: 5vw;
    }
    z-index: 1;
    margin-top: auto;
    margin-bottom: auto;
    margin-left: 2vw;

    

`;
export const SliderCheckbox = styled.input`
    transition: 2s all ease;
    @media screen and (max-width: 550px){
        transform: scale(1);
        width: 40px;
        height: 40px;
        z-index: 2;
        opacity: 0;
    }
    z-index: 2;
    opacity: 0;
    transform: scale(1);
    width: 40px;
    height: 40px;
`;
