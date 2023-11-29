import styled from "styled-components";


export const StyledContactList = styled.section`
    background-color: var(--color-gray);
    width: 90%;
    margin: 0 auto;
    padding: 1rem 0.5rem;
    border-radius: 0.5rem;
    margin-bottom: 3rem;
    max-width: 120rem;

    
    `

export const StyledContactHeader = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    gap: 1rem;
    margin-top: 1rem;
    margin-bottom: 1rem;

    h2{
        display: block;
        width: 100%;
        max-width: 22rem;
        color: var(--color-dark);
        font-size: 2.2rem;
        text-align: center;
    }
    
    div{
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        max-width: 40rem;
        flex-wrap: wrap;
        gap: 1.3rem;

        input{
         width: 100%;
         max-width: 25.125rem;
         padding-inline: 1.5rem;
         padding-top: 1.15rem;
         padding-bottom: 1.15rem;
         height: 3.4rem;
         border: 1px solid var(--color-primary);
         font-size: 1.2rem;
         border-radius: 0.5rem;
        }
     

        button{
        }
        
    }

    @media (max-width: 768px) {
    justify-content: center;
        
    }
`

export const StyledContactContent = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: flex-start;
    margin: 0 auto;
    gap: 1.3rem;
    margin: 0.3rem;
    flex-wrap: wrap;
    height: 19rem;
    overflow-y: auto;
    padding: 0.6rem 0;

    @media (max-width: 468px){
        gap: 1rem;
        margin: 0.1rem;
    }

    @media (max-width: 768px){
        height: 45rem;


    }


    .noContent{
        width: 100%;
        color: #919191;
        text-align: center;
        display: flex;
        justify-content: center;
        align-items: center;
        margin: auto;
        font-size: 1.8rem;
        transition: 1s;

        &:hover{
            cursor: pointer;
            font-size: 2rem;
            color: var(--color-dark);
        }
    }

    .noFound{
        width: 100%;
        color: #919191;
        text-align: center;
        display: flex;
        justify-content: center;
        align-items: center;
        margin: auto;
        font-size: 1.8rem;
    }
    
    @media (max-width: 768px){
        justify-content: center;

    }


    .contact-items {
        display: flex;
        flex-wrap: wrap;
        justify-content: center; 
        width: 100%;
        max-width: 18.5rem;
  }
`

export const StyledContact = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
    max-width: 40rem;

    @media (max-width: 360px){
        justify-content: center;
    }

   
    
    .cardContact {
        display: flex;
        height: 100%;
        width: 100%;
        justify-content: center;
        border-radius: 0.5rem;
        background-color: var(--color-white);
        position: relative; 
        overflow: hidden; 
        
        @media (max-width: 360px){
                max-width: 13rem;
            }


        
        &::before {
            content: '';
            position: absolute;
            left: 10px;
            top: 0;
            bottom: 0;
            width: 20px;
            background-size: contain;
            background-repeat: repeat-y; 
            z-index: -1; 
        }

        .cardBorder {
            flex: 0 0 auto; 

            img {
                z-index: 0;
                max-height: 13rem;
                position: relative;
                left: -3px;
                padding-right: 0.5rem;

                @media (max-width:468px){
                    padding-right: 0;
                }
            }
        }

        .cardInfos {
            display: flex;
            flex-direction: column;
            justify-content: space-around;
            align-items: center;
            padding: 0.5rem 2.0rem;
            gap: 1rem;
            height: 100%;
            width: 120%;
            max-height: 20rem;

            @media (max-width: 360px){
                background-color: green ;
                max-width: 10rem;
            }
        }
    }

    h3, p {
        width: 100%;
        margin: 0 auto;
        max-width: fit-content;
        text-align: center;
        word-wrap: break-word;
    }

    p{
        color: var(--color-dark);
        width: 100%;
        max-width: 20rem;
        display: flex;
        align-items: center;
        gap: 0.5rem;
        justify-content: center;
        font-weight: 600;
    
        .cardIcon2{
            font-size: 1.2rem;
            
        }
    }


    .cardIcon {
       
        font-size: 1.5rem;
        margin: 0 auto;
        color: var(--color-soft);
    }

    .cardOptions {
        display: flex;
        width: 100%;
        justify-content: center;
        align-items: center;
        gap: 1rem;

        .cardOptionIcon {
            font-size: 1.5rem;
            color: var(--color-soft);
            cursor: pointer;
            transition: 0.6s;

            &:hover {
                transform: scale(1.1);
                color: var(--color-dark);
            }
        }
    }
`;