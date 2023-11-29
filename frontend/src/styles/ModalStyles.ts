import { createGlobalStyle } from 'styled-components';

export const ModalStyles = createGlobalStyle`

    .modal-overlay{
        background-color: rgba(0,0,0,0.6);

        position: fixed;
        top: 0;
        bottom: 0;
        right: 0;
        left: 0;

        display: flex;
        align-items: center;
        justify-content: center;
    }

    .add-modal-content{
        background-color: var(--color-white);
        width: 90%;
        max-width: 30rem;
        border-radius: 0.5rem;
        z-index: 99999
    }

    .edit-modal-content{
        background-color: var(--color-white);
        width: 90%;
        max-width: 40rem;
        border-radius: 0.5rem;
        z-index: 99999

    }

    .delete-modal-content{
        background-color: var(--color-white);
        width: 90%;
        max-width: 40rem;
        border-radius: 0.5rem;
        z-index: 99999

    }
`
