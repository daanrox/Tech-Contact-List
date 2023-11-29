import styled from 'styled-components';

export const StyledHeader = styled.header`
    background-color: var(--color-dark);
    display: flex;
    justify-content: center;
    align-items: center;
    height: auto;
    min-height: 5rem;
    padding: 1rem 0rem;
    margin-bottom: 2rem;

    .header__container{
        display: flex;
        justify-content: space-between;
        align-items: center;
        color: var(--color-gray);
        width: 90%;
        max-width: 120rem;
        margin: auto;
        gap: 1rem;
        flex-wrap: wrap;

        @media (max-width: 768px) {
            gap: 2rem;
            justify-content: center;
            text-align: center;

            button{
                align-self: right;
             }
        }
    }

    .header__logo{
        width: 60%;
        min-width: min(15rem, 90%);
        max-width: 15rem;
        transition: 1s;

        &:hover{
            transform: scale(1.05);
        }
    }
    button{
        align-self: right 0;
    }
    
    `