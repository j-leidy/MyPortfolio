import styled from "styled-components";

export const DegreesBody =styled.div`
    z-index: -1;
    margin-top: 5vh;
    width: 70%;
    background: linear-gradient(0deg, rgba(10,10,10,1) 0%, rgba(10,10,10,1) 64%, rgba(10,10,10,0.9612045501794468) 75%, rgba(10,10,10,0.9275911048012955) 80%, rgba(10,10,10,0.8771709367340687) 85%, rgba(10,10,10,0.798739564185049) 90%, rgba(10,10,10,0.5858544101234244) 95%, rgba(10,10,10,0) 100%);
    @media screen and (max-width: 550px){
        width: 80%;
    }
    margin-bottom: 10vh;
`;
export const EntriesContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    @media screen and (max-width: 550px){
        flex-direction: column;
    }
`;
export const DegreeTitle = styled.div`
    width: 50%;
    color: #ffffff;
    z-index: -1;
    margin: auto;
    text-align: center;
    font-size: 30px;
    font-weight: 600;
    border-bottom: 2px solid #32de84;
    @media screen and (max-width: 550px){
        width: 100%;
    }
`;
export const DegreeEntry = styled.div`
    margin-top: 5vh;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: auto;
`;
export const SchoolIcon = styled.img`
    width: 100px;
    height: 100px;
    border-radius: 50%;
    padding: auto;
    margin: auto;
    @media screen and (max-width: 550px){
        margin-right: 2vw;
    }
`;

export const IconNYContainer = styled.div`
    display: flex;
    flex-direction: column;

    @media screen and (max-width: 550px){
        flex-direction: row;
    }
`;
export const DegreeName = styled.div`
    color: #ffffff;
    font-size: 25px;
    @media screen and (max-width: 550px){
        font-size: 20px;
    }

`;

export const SchoolName = styled.div`

`;

export const GraduationYear = styled.div`
    color: #32de84;
`;

export const NameYearContainer = styled.div`
    margin: auto;
    padding: auto;
`;

export const NotesOnExperience = styled.div`
    color: #ffffff;
`;