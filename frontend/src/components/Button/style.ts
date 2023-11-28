import styled from 'styled-components';


export const StyledButton = styled.button`

    background-color: var(--color-primary);
    max-width: 100%;
    min-width: min(2rem, 90%);
    color: var(--color-white);
    display: flex;
    justify-content: center;
    align-items: center;
    height: 3.5rem;
    padding: 1rem 3.6rem;
    border-radius: 0.5rem;
    font-size: 1.1rem;

    &:hover{
        cursor: pointer;
        background-color: var(--color-soft);
    }
`