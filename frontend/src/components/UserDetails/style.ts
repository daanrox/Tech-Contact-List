import styled from "styled-components";

export const StyledUserDetails = styled.div`
    width: 80%;
    margin: 0 auto;

    background-color: var(--color-gray);
    padding: 1rem;
    border-radius: 0.5rem;
    margin-bottom: 2rem;


    div{
        padding: 1rem 0.5rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 1rem;
        flex-wrap: wrap;
        width: 100%;

        span{
            font-weight: 600;
            color: var(--color-dark);
        }
    }

    .loading__div{
        width: 100%;
        margin: auto;
        display: flex;
        justify-content: center;
        align-items: center;
    }
`