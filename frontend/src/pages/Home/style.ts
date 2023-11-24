import styled from "styled-components";
import { paragraph, titleThree, titleTwo } from "../../styles/Tipography";

export const MainContainer = styled.main`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: auto;
    padding: 2rem 0rem;

    .home__container{
        display: flex;
        margin: auto;
        width: 80%;
        justify-content: space-around;
        height: auto;
        flex-wrap: wrap;
        gap: 5rem;

        @media (max-width: 768px) {
            gap: 2rem;
        }
    }

    .home__icon{
        width: 80%;
        min-width: 5rem;
        max-width: 15rem;
        transition: 1s;

        &:hover{
            transform: scale(1.05);
        }

        @media (max-width: 768px) {
            width: 60%;
        }
        
    }

    .home__left{
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .home__right{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 2rem;
        flex-wrap: wrap;
        max-width: 45rem;


    }
    .home__buttons{
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 2rem;
        flex-wrap: wrap;

        button{
            min-width: 12rem;
        }
    }
`

export const TitleHome = styled.h1`
    text-align: center;
    transition: 1s;
    
    ${titleTwo}

    @media (max-width: 768px) {
        ${titleThree}
        }
`

export const DescriptionHome = styled.p`
    text-align: center;


    ${paragraph}
`