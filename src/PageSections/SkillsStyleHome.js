import styled from "styled-components";

export const SkillsBody = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-left: 50px;
    border-radius: 28px;
    @media screen and (max-width: 550px){
        display: none;
    }
`;

export const SkillsTitle = styled.div`
    color: #32de84;
    font-size: 50px;
`;

export const SkillsRow = styled.div`
    display: flex;
    flex-direction: row;
`;
export const IconWithText = styled.div`
    margin: 20px;
    padding: auto;
`;

export const IconText = styled.div`
    text-align: center;
    color: #FFA07A;
`;


export const Icon = styled.img`
    width: 70px;
    height: 70px;
`;