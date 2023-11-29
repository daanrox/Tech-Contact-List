import { createGlobalStyle } from 'styled-components';
import { link } from './Tipography';


export const GlobalStyles = createGlobalStyle`    
    *{
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        outline: 0;
        font-family: "Inter", sans-serif;
    }
    body, html{        
        height: 100vh;
    }
    
    body{       
        -webkit-font-smoothing: antialiased;
        overflow-x: hidden;
    }
   
    ul,ol{
        list-style: none;
    }
    button, link, a{
        cursor: pointer;
    }
    input, textarea, select, button{
        border-radius: 0;
        border: none;
        background: transparent;
    }
    a{
        color: unset;
        text-decoration: none;
        ${link}
    }   

    ::-webkit-scrollbar {
     width: 10px; 
    }

    ::-webkit-scrollbar-track {
        background: var(--color-gray2); 
    }

    ::-webkit-scrollbar-thumb {
        background: var(--color-dark); 

        border-radius: 5px; 
    }

    ::-webkit-scrollbar-horizontal {
        height: 10px; 
    }

    :root{
        --font-inter: 'Inter', sans-serif;
        
        --color-primary: #0540F2;
        --color-dark: #031740;
        --color-soft: #5C8EF2;
        --color-black: #000000;
        --color-white: #ffffff;
        --color-gray: #F2F2F2;
        --color-gray2: #dee0e3;
        --color-gray3: #7f8082;


        
    } 

    .warning{
        color: red;
        display: flex;
        align-self: left;
        text-align: left;
    }
`