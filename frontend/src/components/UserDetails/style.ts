import styled from "styled-components";

export const StyledUserDetails = styled.div`
    width: 90%;
    margin: 0 auto;

    background-color: var(--color-gray);
    padding: 1rem;
    border-radius: 0.5rem;
    margin-bottom: 2rem;
    gap: 1rem;
    max-width: 120rem;

    .userBody{
        display: flex;
        justify-content: space-between;
        width: 100%;
        flex-wrap: wrap;

        @media (max-width: 768px){
            justify-content: center;
        }
    }

    .exportDetails{
        width: 100%;
        max-width:  15rem;
        display: flex;
        justify-content: center;
        align-items: flex-end;
        padding: 1rem;
        font-size: 1.3rem;
        color: var(--color-dark);
        gap: 0.3rem;
        transition: 0.6s;
        height: 4rem;

        
        p{
            transition: 0.6s;
        }

        .exportDetailsIcon{
            font-size: 1.7rem;
            margin-bottom: 0.1rem;
            transition: 0.6s;


        }

        &:hover{
            color: var(--color-primary);
            font-style: bold;
            cursor: pointer;
        }
    }

    .userDetails{
        width: 100%;
        max-width: 20rem;
        margin: 1rem 0;
        display: flex;
        flex-direction: column;
        gap: 1rem;
    
        
        .userLines{
            width: 100%;
            margin-top: 1rem;
            display: flex;
            flex-wrap: wrap;
            font-size: 1.3rem;
            gap: 1rem;
            
            @media (max-width: 768px) {
                justify-content: center;

                p{
                    text-align: center;
                }
            }
            p{
                width: 80%;
                word-wrap: break-word;
            }
            
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