import styled from "styled-components";

export const StyledExportBody = styled.div`
    width: 80%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;

    .exportUserDetails{
        width: 100%;
        padding: 2rem;
        max-width: 120rem;
        border-radius: 0.6s;
        background-color: var(--color-gray);
        display: flex;
        flex-direction: column;
        gap: 1rem;
        font-size: 1.5rem;
        word-wrap: break-word;

        h2{
            color: var(--color-primary);
        }

        p{
            word-wrap: break-word;
        }
        
    }


    .exportUserName{
        width: 100%;
        max-width: 40rem;
        display: flex;
        gap: 1rem;


        p{
            margin-right: 1rem;
            max-width: 90%;
            word-wrap: break-word;
        }

    }

    .exportUserPhone{
        width: 100%;
        max-width: 40rem;
        display: flex;
        gap: 1rem;

        p{
            margin-right: 1rem;
            max-width: 90%;
            word-wrap: break-word;
        }


    }

    .exportUserPhoneIcon, .exportUserEmailIcon, .exportUserNameIcon{
        min-width: 1.4rem;
    }

    .exportUserEmail{
        width: 100%;
        max-width: 40rem;
        display: flex;
        gap: 1rem;


         p{
            margin-right: 1rem;
            max-width: 90%;
            word-wrap: break-word;
        }

    }

    .exportContactsContainer{
        display: flex;
        flex-direction: row;
        justify-content: center;
        gap: 1rem;
        flex-wrap: wrap;
        align-items: center;
    }


    .exportContactsDetails{
        width: 100%;
        padding: 1rem;
        max-width: 120rem;
        border-radius: 0.6s;
        background-color: var(--color-gray);
        display: flex;
        flex-direction: column;
        gap: 1rem;
        font-size: 1.5rem;
        word-wrap: break-word;


        h2{
            color: var(--color-primary);
        }

        .exportContactCard{
            background-color: var(--color-white);
            border: 1px solid var(--color-soft);
            display: flex;
            width: 100%;
            max-width: 38.3rem;
            padding: 1.2rem;
            border-radius: 0.6rem;
            justify-content: space-around;
            gap: 2rem;
            flex-wrap: wrap;



            @media (max-width:480px){
                font-size: 1.15rem;
                padding: 0.8rem;
                gap: 1rem;

            .exportContactCardLeft{
                    p:nth-child(1){
                        font-size: 1.2rem;
                        font-style: bold;
                        text-align: center;
                    }

                    p:nth-child(2){
                        font-size: 1.15rem;
                    }
            }
            }
            }


            .exportContactCardLeft{
                display: flex;
                flex-direction: column;
                justify-content: flex-start;
                gap: 1rem;
                font-style: bold;

                p:nth-child(2){
                    color: var(--color-gray3);
                    font-style: normal;
                    font-size: 1.2rem;
                }
            }

            .exportContactCardRight{

                display: flex;
                max-width: 100%;
                justify-content: flex-start;
                flex-direction: column;
                gap: 1rem;

                div{
                    display: flex;
                    max-width: 100%;
                    word-wrap: break-word;
                    flex-wrap: wrap;
                    gap: 1rem;

                    @media (max-width:480px){
                        font-size: 1.2rem;
                        text-align: center;
                    }

                    p{
                        max-width: 100%;
                        word-wrap: break-word;
                    }
                }
            }
        }


    
`