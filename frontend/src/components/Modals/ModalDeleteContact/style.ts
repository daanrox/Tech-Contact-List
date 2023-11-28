import styled from "styled-components";

export const StyledDeleteContactModal = styled.div`
    background-color: var(--color-white);
    border-radius: 0.5rem;
    display: flex;
    width: 100%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 2rem;

    .deleteModalHeader{
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 2rem;

        .closeModal{
            font-size: 1.5rem;
            color: var(--color-soft);
            transition: 0.6s;

            &:hover{
                cursor: pointer;
                color: var(--color-dark);
                transform: scale(1.1)
            }
        }

    }

    .deleteModalBody{
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 1rem;
        margin: 0 auto;
        justify-content: center;
        align-items: center;

        .deleteModalName{
            font-size: 1.1rem;
            color: var(--color-dark);
        }
    }

`