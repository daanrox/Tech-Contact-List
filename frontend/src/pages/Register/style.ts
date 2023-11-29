import styled from "styled-components";
import { titleTwo } from "../../styles/Tipography";

export const RegisterBox = styled.div`
    max-width: 48rem;
    width: 90%;
    padding: 3rem 0rem;
    margin: auto;
    display:flex;
    flex-direction: column;
    gap: 2.2rem;
    background-color: transparent;
    
`

export const StyledRegisterForm = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;

    button{
        width: 100%;
        max-width: 23.125rem;
        height: 3.5rem;

    }
`

export const RegisterFormTitle = styled.h2`
    ${titleTwo};
    color: var(--color-dark);
    text-align: center;
    hyphens: auto;
    word-break: break-word;
`

export const RegisterFormParagraph = styled.p`
    font-size: 1.0625rem;
    font-weight: 400;
    text-align: center;
    
    margin-top: 2.1875rem;
    margin-bottom: 2.5625rem;
`

export const InputDivRegister = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: .6875rem;

    div{
        max-width: 23.125rem;
    }

    margin-bottom: 1.375rem;
`

