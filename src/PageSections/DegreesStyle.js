import styled from "styled-components";

export const DegreesBody = styled.div`
    z-index: -1;
    transition-property: color;
    transition-duration: 1s ease;
    color: ${(props) => (props.active ? "black" : "white")};
    margin-top: 5vh;
    padding-top: 5vh;
    width: 70%;
    background: ${(props) => (props.active ? "linear-gradient(0deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.6320728975183824) 10%, rgba(255,255,255,0.8869748583026961) 20%, rgba(255,255,255,1) 30%, rgba(255,255,255,1) 70%, rgba(255,255,255,0.8953782196472339) 80%, rgba(255,255,255,0.648879620207458) 90%, rgba(255,255,255,0) 100%)" : "linear-gradient(0deg, rgba(10,10,10,0) 0%, rgba(10,10,10,0.6320728975183824) 10%, rgba(10,10,10,0.8869748583026961) 20%, rgba(10,10,10,1) 30%, rgba(10,10,10,1) 70%, rgba(10,10,10,0.8953782196472339) 80%, rgba(10,10,10,0.648879620207458) 90%, rgba(10,10,10,0) 100%)")};
    @media screen and (max-width: 550px){
        width: 80%;
    }
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
    transition: 2s all ease;
    opacity: ${(props) => (props.inView ? "1" : "0")};
    width: 70%;
    z-index: -1;
    margin: auto;
    text-align: center;
    font-size: 30px;
    font-weight: 600;
    border-bottom: 2px solid #32de84;
    @media screen and (max-width: 550px){
        width: 100%;
    }
    @media screen and (min-width: 2560px){
        font-size: 60px;
    }
`;
export const DegreeEntry = styled.div`
    transition: 2s all ease;
    margin-top: 5vh;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: auto;
    opacity: ${(props) => (props.inView ? "1" : "0")};
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