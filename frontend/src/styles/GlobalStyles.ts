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

    :root{
        --font-inter: 'Inter', sans-serif;
        
        --color-primary: #0540F2;
        --color-dark: #031740;
        --color-soft: #5C8EF2;
        --color-black: #000000;
        --color-white: #ffffff;
        --color-gray: #F2F2F2;
        
    } 

    .warning{
        color: red;
        display: flex;
        align-self: left;
        text-align: left;
    }
`