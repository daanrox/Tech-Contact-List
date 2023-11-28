import styled from "styled-components";
import espiral from '../../assets/img/espiral.png'


export const StyledContactList = styled.section`
    background-color: var(--color-gray);
    width: 80%;
    margin: 0 auto;
    padding: 0.5rem 1rem;
    border-radius: 0.5rem;
    margin-bottom: 3rem;

    
    `

export const StyledContactHeader = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    gap: 1rem;
    margin-bottom: 2rem;
    
   h2{
    color: var(--color-dark);
    font-size: 2.2rem;
    text-align: center;
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
    gap: 1.75rem;
    margin: 0.3rem;
    flex-wrap: wrap;
    height: 30.5rem;
    overflow-y: auto;


    .loading__div{
        width: 100%;
        margin: auto;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    
    @media (max-width: 768px){
        justify-content: center;

    }


    .contact-items {
        display: flex;
        flex-wrap: wrap;
        justify-content: flex-start; 
  }
`

export const StyledContact = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 2rem;
    
    .cardContact {
        margin-left: -0.5rem;
        display: flex;
        width: 100%;
        min-width: 12rem;
        max-width: 13rem;
        justify-content: center;
        padding: 0.5rem 1.5rem 0.5rem 0rem; 
        border-radius: 0.5rem;
        background-color: var(--color-white);
        position: relative; 
        overflow: hidden; 


        
        &::before {
            content: '';
            position: absolute;
            left: 0px;
            top: 0;
            bottom: 0;
            width: 40px;
            background-image: url(${espiral});
            background-size: contain;
            background-repeat: repeat-y; 
            z-index: -1; 
        }

        .cardBorder {
            flex: 0 0 auto; 
            margin-right: 25px; 
            img {
                z-index: 9999;
                max-height: 13rem;
            }
        }

        .cardInfos {
            display: flex;
            flex-direction: column;
            justify-content: space-around;
            gap: 1rem;
            max-height: 14rem;
            width: 80%;
            max-width: 13rem;
        }
    }

    h3, p {
        width: 100%;
        max-width: fit-content;
        text-align: center;
        word-wrap: break-word;
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