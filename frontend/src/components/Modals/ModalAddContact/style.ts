import styled from "styled-components";

export const StyledAddContactModal = styled.div`
    background-color: var(--color-white);
    border-radius: 0.5rem;
    display: flex;
    width: 100%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 2rem;

    .addModalHeader{
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

    .addModalBody{
        width: 100%;
        display: flex;
        margin: 0 auto;
        justify-content: center;
        align-items: center;

        form{
            width: 100%;
            display: flex;
            margin: 0 auto;
            gap: 1rem;
            flex-direction: column;
            justify-content: center;
            align-items: center;

            input{
                align-self: center;
            }

            p{
                width: 100%;
                text-align: left;
                display: flex;
                align-self: left;
                padding-left: 2rem;
            }
        }
    }

`