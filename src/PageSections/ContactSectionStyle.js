import styled, { keyframes } from "styled-components";
import { MainColor, AccentColorGreen, AccentColorPurple } from "../colorPallete";
export const FormContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    @media screen and (max-width: 550px){
        width: 100%;
        height: 100%;
        margin: auto;
        opacity: ${(props) => (props.inView ? "1" : "0")};
        transition 2s all ease;
    }
`;

export const ContactSectionBody = styled.div`

    @media screen and (max-width: 550px){
        width: 80%;
        height: 100%;
        margin: auto;
        mergin-top: 10%;
        margin-bottom: 10%;
        color: ${(props) => (props.lightdark ? "black" : "white")}
        opacity: ${(props) => (props.inView ? "1" : "0")};
        transition: 2s all ease;
    }
    width: 100%;
    height: 100%;
    margin: auto;
    mergin-top: 10%;
    margin-bottom: 10%;
`;

export const ContactTitle = styled.div`
    z-index: -1;
    transition: 3s all ease;
    margin: auto;
    text-align: center;
    font-size: 30px;
    font-weight: 600;
    opacity: 1;
    color: ${(props) => (props.lightdark ? "black" : "white")};
    border-bottom: 2px solid #32de84;
`;

export const InputContainer = styled.div`
    display: flex;
    margin: auto;
    width: 100%;
    
`;

export const FullNameInput = styled.input`
    transition: 2s all ease;
    margin: auto;
    margin-top: 10px;
    margin-bottom: 10px;
    width: 90%;
    padding: 10px;
    font-size: 16px;
    border-width: 2px;
    border-color: white;
    background-color: black;
    border-style: solid;
    border-radius: 5px;
    :focus{
        caret-color: black;
        outline: none;
        border-color: ${(props) => (props.lightdark ? AccentColorPurple : AccentColorGreen)};
    }
    @media screen and (max-width: 550px){
        margin: auto;
        margin-top: 10px;
        margin-bottom: 10px;
        width: 90%;
        padding: 10px;
        font-size: 16px;
        border-width: 2px;
        border-color: white;
        color: ${(props) => (props.lightdark ? "white" : "black")};
        background-color: ${(props) => (props.lightdark ? "black" : "white")};
        border-style: solid;
        border-radius: 5px;
    }
`;
export const EmailInput = styled.input`
    transition: 2s all ease;
    margin: auto;
    margin-top: 10px;
    margin-bottom: 10px;
    width: 90%;
    padding: 10px;
    font-size: 16px;
    border-width: 2px;
    border-color: black;
    background-color: none;
    border-style: solid;
    border-radius: 5px;
    :focus{
        caret-color: black;
        outline: none;
        border-color: ${(props) => (props.lightdark ? AccentColorPurple : AccentColorGreen)};
    }
    @media screen and (max-width: 550px){
        margin: auto;
        margin-top: 10px;
        margin-bottom: 10px;
        width: 90%;
        padding: 10px;
        font-size: 16px;
        border-width: 2px;
        border-color: white;
        color: ${(props) => (props.lightdark ? "white" : "black")};
        background-color: ${(props) => (props.lightdark ? "black" : "white")};
        border-style: solid;
        border-radius: 5px;
    }
`;
export const PhoneNumberInput = styled.input`
    transition: 2s all ease;
    margin: auto;
    margin-top: 10px;
    margin-bottom: 10px;
    width: 90%;
    padding: 10px;
    font-size: 16px;
    border-width: 2px;
    border-color: black;
    background-color: none;
    color: #000000;
    border-style: solid;
    border-radius: 5px;
    :focus{
        caret-color: black;
        outline: none;
        border-color: ${(props) => (props.lightdark ? AccentColorPurple : AccentColorGreen)};
    }
    @media screen and (max-width: 550px){
        margin: auto;
        margin-top: 10px;
        margin-bottom: 10px;
        width: 90%;
        padding: 10px;
        font-size: 16px;
        border-width: 2px;
        color: ${(props) => (props.lightdark ? "white" : "black")};
        border-color: ${(props) => (props.lightdark ? AccentColorGreen : "white")};
        background-color: ${(props) => (props.lightdark ? "black" : "white")};
        border-style: solid;
        border-radius: 5px;
    }
`;
export const MessageInput = styled.textarea`
    margin : auto;
    margin-top: 10px;
    margin-bottom: 10px;
    width: 100%;
`;

const ButtonAnim = keyframes`
    0% {
        background-position: 0 0;
    }
    50% {
        background-position: 400% 0;
    }
    100% {
        background-position: 0 0;
    }
    
`;

export const SubmitButton = styled.button`
    margin: auto;
    margin-top: 10px;
    margin-bottom: 50px;
    transition: 1s all ease;
    padding: 0.6em 2em;
    border: none;
    outline: none;
    color: rgb(255, 255, 255);
    background: #111;
    width: 20%;
    cursor: pointer;
    position: relative;
    z-index: 0;
    border-radius: 10px;
    user-select: none;
    -webkit-user-select: none;
    touch-action: manipulation;

    :hover{
        color: #32de84;
    }


    :before {
        content: "";
        background: linear-gradient(
            45deg,
            ${MainColor},
            ${MainColor},
            ${AccentColorPurple},
            ${AccentColorGreen},
            ${AccentColorGreen},
            ${AccentColorPurple},
            ${MainColor},
            ${MainColor}
        );
        position: absolute;
        top: -2px;
        left: -2px;
        background-size: 400%;
        z-index: -1;
        width: calc(100% + 2px);
        height: calc(100% + 2px);
        padding: 2px;
        animation: ${ButtonAnim} 50s linear infinite;
        transition: opacity 0.3s ease-in-out;
        border-radius: 10px;
    }



    :after {
        z-index: -1;
        content: "";
        position: absolute;
        width: 100%;
        height: 100%;
        background: #222;
        left: 0;
        top: 0;
        border-radius: 10px;
        
    }

    

    @media screen and (max-width: 550px){
        margin: auto;
        margin-top: 10px;
        margin-bottom: 50px;
        
        padding: 0.6em 2em;
        border: none;
        outline: none;
        color: rgb(255, 255, 255);
        background: #111;
        width: 80%;
        cursor: pointer;
        position: relative;
        z-index: 0;
        border-radius: 10px;
        user-select: none;
        -webkit-user-select: none;
        touch-action: manipulation;


        :before {
            content: "";
            background: linear-gradient(
                45deg,
                ${MainColor},
                ${MainColor},
                ${AccentColorPurple},
                ${AccentColorGreen},
                ${AccentColorGreen},
                ${AccentColorPurple},
                ${MainColor},
                ${MainColor}
            );
            position: absolute;
            top: -2px;
            left: -2px;
            background-size: 400%;
            z-index: -1;
            width: calc(100% + 2px);
            height: calc(100% + 2px);
            animation: ${ButtonAnim} 30s linear infinite;
            transition: opacity 0.3s ease-in-out;
            border-radius: 10px;
        }

        

        :after {
            z-index: -1;
            content: "";
            position: absolute;
            width: 100%;
            height: 100%;
            background: #222;
            left: 0;
            top: 0;
            border-radius: 10px;
        }
    }
`;



export const formStyles = {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    height: '100%',
    margin: 'auto'
}

