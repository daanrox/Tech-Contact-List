import styled from "styled-components";
import { titleTwo } from "../../styles/Tipography";

export const StyledLoginDiv = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    align-items: center;
    margin-top: 3rem;
    margin: 0 auto;
    max-width: 120rem;
`

export const LoginBox = styled.div`
    width: 80%;
    height: 40rem;
    margin: auto;
    display:flex;
    justify-content: center;
    flex-direction: column;
    gap: 2.2rem;

    @media (max-width: 768px) {
        gap: 2rem;
    }
`

export const StyledLoginForm = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 3rem;


    a{
        text-decoration: underline;
        color: var(--color-primary);
        font-size: 1.3rem;
        font-weight: 400;
    }
    button{
        width: 100%;
        max-width: 23.125rem;

    }
`

export const LoginFormTitle = styled.h2`
    text-align: center;
    ${titleTwo}

`

export const LoginFormParagraph = styled.p`
    font-size: 1.0625rem;
    font-weight: 400;
    
    margin-top: 2rem;
    margin-bottom: 2.375rem;

    text-align: center;
`
export const InputDiv = styled.div`
  
    width: 100%;
    max-width: 48rem;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-wrap: wrap;
    margin: auto;
    gap: .6875rem;

    

    margin-bottom: 1.375rem;

    input{
        padding-bottom: 1rem;
    }

    div{
        max-width: 23.125rem;
    }
`