import { styled } from "styled-components";

export const OptionsContainer = styled.div`  
    padding: 1rem;
    border-radius: 0.5rem;
    margin-bottom: 1rem;
    cursor: pointer;
    transition: 0.4s;

    background-color: #3c0e70;
    opacity: 0.8;

    &:hover{
        opacity: 1;
    };  
`;

export const CorrectOption = styled(OptionsContainer)`
    background-color: #0bfc03;
    font-weight:bold;
    &:hover{};  
`;  

export const WrongOption = styled(OptionsContainer)`
    opacity: 0.4;
    &:hover{};
`; 